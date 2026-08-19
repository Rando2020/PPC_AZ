# Prickly Pear Care QA Checklist

Use this checklist after meaningful UI, content, routing, booking, or motion changes.

## Brand and content

- Consumer-facing name is **Prickly Pear Care**.
- **Patient-led care** remains the canonical care philosophy phrase.
- The tagline remains **Care that grows with you.**
- Jennifer's credentials and biography match `CONTENT_FACTS.md`.
- Planned services are not presented as currently available.
- No pricing, access promise, insurance detail, testimonial, clinical outcome, or service claim was invented.
- Legal entity wording appears only where appropriate.

## DPC clarity

A first-time visitor should be able to understand:

- DPC is the launch focus for primary care.
- DPC membership is separate from health insurance.
- Final membership details are still being finalized when that is true.
- Weight management and hormone support are future/planned until Jennifer confirms otherwise.
- The next action is obvious: understand DPC, join the waitlist, contact the practice, or use the patient portal when available.

## Accessibility

- One logical H1 per page.
- Header, nav, main, and footer landmarks remain semantic.
- Skip link works by keyboard.
- Every interactive element is keyboard operable.
- Focus indicators are visible and not obscured by the sticky header.
- Form fields have real labels.
- Error/success states are understandable without color alone.
- Touch targets are comfortably usable on mobile.
- Decorative icons are hidden from assistive technology where appropriate.
- Images have meaningful alt text or empty alt text when decorative.
- 200% and 400% zoom do not break essential flows.
- Reduced-motion mode removes nonessential transforms/parallax and preserves all content/functionality.

## Motion

For every animation ask:

1. Does it improve hierarchy, feedback, orientation, or brand storytelling?
2. Is it subtle enough for a healthcare practice?
3. Does it use compositor-friendly properties where practical?
4. Does it work on mobile?
5. Is the experience complete with motion disabled?
6. Does it avoid delaying navigation, reading, booking, or form completion?

Remove motion that cannot justify itself.

## Responsive checks

Review at minimum:

- 375px phone.
- 430px large phone.
- 768px tablet portrait.
- 1024px tablet/small laptop.
- 1440px desktop.
- 1920px large desktop.

Check for clipped text, awkward line breaks, oversized headings, horizontal scrolling, overlapping sticky/floating elements, inaccessible nav, and images with poor crops.

## Performance

- Hero/LCP image is not accidentally lazy-loaded.
- Below-fold images are lazy-loaded where appropriate.
- Images have reserved dimensions/aspect ratios to avoid layout shift.
- New dependencies are justified.
- No animation library is added if the existing runtime can handle the need.
- No scroll handler forces unnecessary React renders.
- Console is free of runtime errors and repeated warnings.
- Build output does not show unexpectedly large bundle growth without explanation.

Target field metrics when measurement is available:

- LCP at or below 2.5 seconds at p75.
- INP at or below 200 milliseconds at p75.
- CLS at or below 0.1 at p75.

## Privacy and healthcare safety

- General forms clearly tell users not to submit sensitive medical information.
- No patient information is logged to the browser console.
- No secrets are stored in client-side environment variables.
- Ordinary marketing trackers are not added to booking, portal, or future clinical workflows without privacy/compliance review.
- Contact and waitlist experiences do not imply that submission creates a provider-patient relationship.
- Emergency language remains visible where appropriate.
- Draft legal/privacy language is not represented as final legal advice.

## Code quality

- `npm run lint` passes.
- `npm run build` passes.
- No unused imports or dead components were introduced.
- Existing design tokens/classes are reused before creating one-off magic values.
- Repeated UI patterns are componentized when repetition is meaningful.
- No brittle breakpoint or DOM-query workaround was added without explanation.

## Release gate

Do not describe a change as ready to ship if any of the following remain:

- broken build,
- inaccessible primary navigation or form,
- incorrect brand name or patient-led terminology,
- invented practice/clinical fact,
- planned service shown as live,
- sensitive information routed through an unapproved workflow,
- major mobile layout failure,
- motion that ignores reduced-motion preference.
