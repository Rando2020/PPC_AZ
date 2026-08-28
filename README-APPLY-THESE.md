# Prickly Pear Care — fix pack

Five files. All verified against a real `npm run build` of `Rando2020/PPC_AZ@main`,
not just injected into the live page.

## Where each file goes

| File | Destination in the repo | New or replacement |
|---|---|---|
| `404.html` | `public/404.html` | New |
| `robots.txt` | `public/robots.txt` | New |
| `sitemap.xml` | `public/sitemap.xml` | New |
| `site-fixes.css` | `src/site-fixes.css` | New |
| `main.jsx` | `src/main.jsx` | **Replaces** the existing file |

`main.jsx` is the only replacement. The change is one added import line at the
end of the import block — everything else is byte-identical to what's on `main`.

Anything in `public/` gets copied to the site root at build time, so
`public/404.html` is served as `pricklypearcareaz.org/404.html`. No build config
changes needed.

## Uploading

GitHub's web uploader preserves folder paths when you drag a folder in. Easiest
path: from the repo root, click **Add file → Upload files**, then drag the
`public` and `src` folders together. Git will show 4 additions and 1
modification.

Two notes before you commit:

- The Actions workflow deploys on every push to `main`, so committing straight
  to `main` publishes immediately. A branch and PR would let `pr-quality.yml`
  check it first.
- If GitHub warns that `src/main.jsx` already exists, that's expected — it's the
  intended replacement.

## What each fix does

### `site-fixes.css` + `main.jsx` — the mobile footer and two contrast failures

**Footer.** `src/styles.css` line 214 declares
`.footer-grid{grid-template-columns:1.35fr repeat(3,1fr)}` at the top level,
*after* the responsive overrides in the media queries on lines 3 and 4. Same
specificity, later in the file, so the four-column desktop layout applied at
every width. At 390px the footer computed to `98px 70px 203px 81px`, giving the
document a 647px scrollWidth inside a 390px viewport — every page scrolled
sideways, and the fourth column (Patient-led care, Join the Waitlist, Patient
portal, Privacy, Terms) sat entirely offscreen.

The fix restates the desktop intent and both breakpoints at `.footer
.footer-grid`, which is higher specificity than the rule it corrects. That means
it holds regardless of import order — the `main.jsx` change is belt-and-braces,
not load-bearing.

It also adds `#root { overflow-x: clip }` for the smaller residual scroll caused
by the `[data-reveal="split"]` entrance animations starting at
`translateX(±22–24px)`. `clip` rather than `hidden` on purpose: `hidden` would
create a scroll container and break the sticky header. On `#root` rather than
`html`/`body` because overflow set on body propagates to the viewport instead of
clipping — I tested `html`, `body`, and `#root`, and only `#root` worked.

**Contrast.** Two separate failures:

- `.eyebrow` inherits `--berry` (`#9b3f5d`), which on the `--olive-dark`
  (`#3f4934`) background of `.section--olive` measures **1.47:1** against a
  4.5:1 requirement. Affected `/dpc`, `/provider`, `/about`.
- `.cta .eyebrow` sets `#f3ced9` on the berry `.cta` background — **4.487:1**,
  failing by 0.013.

That second one is worth flagging. It's invisible to a normal automated scan,
because `[data-reveal]` elements start at `opacity: 0` and get skipped. It only
becomes testable under `prefers-reduced-motion`, where `styles.css` line 5 forces
`opacity: 1`. So the users guaranteed to see that text are exactly the
accessibility-sensitive ones. It appears on 8 of the 13 routes.

### `404.html` — path URLs currently die

Because the site uses hash routing, real paths never reach the router and GitHub
serves its own generic 404. Today `pricklypearcareaz.org/dpc` is a dead end.

This file forwards known routes to their hash equivalent and shows an on-brand
not-found page for everything else. It handles trailing slashes, mixed case, and
preserves query strings so ad and campaign tracking survives the bounce. It also
maps plausible guesses — `/meet-jennifer`, `/privacy`, `/join`, `/contact-us`,
`/direct-primary-care` and a dozen others.

It uses `location.replace()` rather than `assign()` so dead URLs don't land in
history and trap people on the back button.

Verified against a server replicating GitHub Pages' 404 semantics:

```
/dpc               -> /#/dpc              Primary care without the insurance runaround
/waitlist          -> /#/waitlist         Your on-ramp to Prickly Pear Care.
/legal/privacy     -> /#/legal/privacy    Privacy notice
/meet-jennifer     -> /#/provider         Jennifer Carlile
/privacy           -> /#/legal/privacy    Privacy notice
/join              -> /#/waitlist         Your on-ramp to Prickly Pear Care.
/DPC               -> /#/dpc              (case-insensitive)
/dpc/              -> /#/dpc              (trailing slash)
/dpc?utm_source=fb -> /?utm_source=fb#/dpc (query preserved)
/totally-made-up   -> styled 404 page
```

### `robots.txt` and `sitemap.xml`

Both were 404ing. The sitemap deliberately lists only the homepage: hash
fragments aren't separate URLs to a crawler, so listing `/#/dpc` would be
meaningless. Expand it if and when the app moves to path-based routing.

## Verification

Against a real build with all five files in place:

- **axe-core**, WCAG 2.0/2.1/2.2 A + AA, all 13 routes, under both
  `prefers-reduced-motion: reduce` and `no-preference` — **0 violations** (was 3
  visible, plus 8 hidden behind the animation).
- **Horizontal overflow** at 360, 390, 430, 620, 768, 900, 1280, 1920px — none
  at any width, on load and after animations settle. Sticky header still reports
  `position: sticky` at `top: 0` after scrolling; reveal animations still fire.
- `node scripts/check-build-budget.mjs` — passes. CSS 78.6 KB / 90 KB.
- `npm run lint` — clean.

## Three things I couldn't fix with a file

**1. The waitlist form.** This is the big one, and it's a Settings change, not
code. `src/pages/Waitlist.jsx` already renders a secure Jotform embed whenever
`VITE_JOTFORM_WAITLIST_FORM_ID` is set, and `deploy-pages.yml` already passes the
variable through. The mailto is a deliberate fallback for when it's absent. So:

- Repo **Settings → Secrets and variables → Actions → Variables**
- Add `JOTFORM_WAITLIST_FORM_ID` with the numeric form ID
- Re-run the deploy workflow

`docs/waitlist-activation.md` in the repo has the full checklist including the
acceptance test. A form ID is a public embed identifier, not a secret — but don't
put a Jotform *API key* in a `VITE_` variable, since those are compiled into the
client bundle.

The contact form on `/contact` is separate and still mailto-only. That one does
need a code change.

**2. `pricklypearcareaz.com`.** It resolves to Wix and serves a
"ConnectYourDomain Error" page — and it's the domain in the practice email
address. GitHub Pages only supports one custom domain, so this can't be fixed
from the repo. It needs a 301 at the registrar or in Wix, pointing `.com` at
`.org`.

**3. Enforce HTTPS.** `http://pricklypearcareaz.org/` currently returns 200
without redirecting. Repo **Settings → Pages → Enforce HTTPS**. If the checkbox
is greyed out, the certificate is still provisioning — check back in a few hours.

## Provider credential

Jennifer’s confirmed credential is **FNP-BC**. The H1, experience bands, page
titles, metadata, and structured data should use that credential consistently.
