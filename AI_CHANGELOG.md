# AI Change Log

Use this file to record meaningful AI-assisted website changes so future agents understand what was changed, why it changed, and what should not be reintroduced without evidence.

## 2026-08-19 · DPC and patient-led care foundation

### Why

Deep research identified a mismatch between the intended Prickly Pear Care brand and portions of the existing implementation. The site needed to become DPC-first, preserve the broader Prickly Pear Care name, keep the approved phrase **Patient-led care** consistent, and introduce motion without turning the site into an animation demo.

### Changes

- Established **Prickly Pear Care** as the public-facing brand while retaining **Prickly Pear Primary Care PLLC** for legal contexts.
- Added **Patient-led care** as the canonical care philosophy in configuration and page copy.
- Reframed launch content around **Direct Primary Care (DPC)**.
- Added a dedicated DPC route/page and navigation entry.
- Reclassified weight management and hormone support as **planned future services** rather than launch-ready offerings.
- Updated homepage hierarchy to introduce DPC immediately and keep Jennifer as the trust anchor.
- Added Motion for React as the default motion runtime.
- Added global `MotionConfig reducedMotion="user"` behavior.
- Added a CSS `prefers-reduced-motion` fallback for the site's legacy reveal and hover transforms.
- Added subtle hero entrance/settle animation rather than broad page-wide animation.
- Added repository governance files: `APPROVED_DESIGN_DECISIONS.md`, `BRAND_RULES.md`, `CONTENT_FACTS.md`, and `QA_CHECKLIST.md`.

### Intentionally not implemented in this batch

- No GSAP dependency.
- No Anime.js dependency.
- No Lottie dependency.
- No complex SVG morphing.
- No scroll hijacking or large parallax.
- No migration away from hash routing yet, because that should be coordinated with GitHub Pages/deployment behavior and SEO routing strategy.
- No production secure-booking backend or EHR adapter implementation, because the final vendor and compliance boundary still need confirmation.
- No DPC pricing or membership-inclusion claims.
- No activation of weight management or hormone support as available services.

### Known follow-ups

1. Run local/CI install, lint, and build after dependency installation.
2. Review the branch at phone, tablet, laptop, and large-desktop widths.
3. Decide whether real-path routing will replace hash routing before SEO launch.
4. Replace prototype email-based booking transport with an approved secure workflow before live patient scheduling.
5. Have Jennifer approve final DPC membership facts and future-service wording.

### Guardrail

Do not replace **Patient-led care** with another primary philosophy phrase unless Jennifer explicitly changes the decision.
