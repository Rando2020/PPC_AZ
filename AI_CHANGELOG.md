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

## 2026-08-19 · Visual storytelling pass

### Goal

Add a small number of memorable interactions that reinforce the brand instead of decorating every section with motion.

### Changes

- Added a custom animated prickly pear bloom motif to the homepage hero using Motion for React.
- Replaced the static patient-led care cards with a scroll-revealed journey rail: story, clarity, shared next step.
- Added an interactive DPC explainer with three accessible tabs: membership terms, continuity, and care boundaries.
- Kept all new interactions compatible with the global reduced-motion setting.
- Added a dedicated `visual-moments.css` layer so these effects stay isolated from the legacy stylesheet.

### Guardrails

- The bloom is decorative only and must never compete with Jennifer, the headline, or the primary CTA.
- The patient-led journey must keep **Patient-led care** language intact.
- The DPC explainer must not invent pricing, membership inclusions, access guarantees, response times, or insurance behavior.
- Do not add more animation libraries unless a specific interaction cannot be built cleanly with the current Motion runtime.

## 2026-08-20 · Conversion and trust pass

### Goal

Turn the homepage, DPC page, and Waitlist into one coherent patient journey instead of a set of individually strong pages.

### Changes

- Added an early Jennifer trust strip with 13+ years as an FNP, 9+ years serving Marana and Northwest Tucson, and FNP-BC.
- Added a bridge from the Patient-led care journey directly into the DPC explanation.
- Added a careful "Why people consider DPC" comparison section that describes recognizable frustrations without attacking conventional primary care.
- Added a Jennifer trust bridge inside the DPC page with the line: **DPC is the structure. Jennifer is the relationship.**
- Standardized the primary prelaunch conversion action to **Join the Waitlist**.
- Simplified the primary navigation and moved Resources out of the main navigation until there is enough published content to justify it.
- Reduced required fallback Waitlist fields to name, email, and consent.
- Moved phone, ZIP, care format, timing, and future-service interests into an explicitly optional planning section.
- Added optional demand signals for DPC, general primary-care updates, future weight management, future hormone support, and other future services.
- Improved the fallback post-registration state with next steps to Meet Jennifer or Understand DPC.
- Updated FAQ wording so the site does not imply live scheduling is already open.
- Added `docs/WEBSITE_EXPERIENCE_PRD.md` as the patient-facing product requirements and approval document for Jennifer.

### Guardrails

- A 10/10 experience is a release target, not a claim that the site has passed final QA.
- The final secure Waitlist vendor may require its own field and confirmation-page updates to match this fallback experience.
- Optional future-service interests must remain clearly labeled as planning signals, not service availability.
- No pricing, access promises, telehealth promises, office facts, or membership inclusions may be invented to improve conversion.

## 2026-08-21 · Homepage simplification and DPC question depth

### Goal

Reduce homepage friction, make the first scroll more meaningful, and move detailed DPC questions into the FAQ instead of forcing every visitor to process them on the homepage.

### Changes

- Removed the three-item homepage care-pledge strip because it duplicated ideas explained more clearly elsewhere.
- Kept one compact Jennifer trust strip so the first proof point is experience and local continuity rather than generic values language.
- Replaced the larger Patient-led journey block on the homepage with a concise DPC value explanation built around three patient questions: predictable monthly cost, starting by reaching out, and keeping insurance for services outside the membership.
- Changed the homepage DPC bridge to offer two depth choices: **See how DPC works** and **DPC questions**.
- Reframed the care-path section around three ways to access care: DPC membership, insurance-based primary care, and select cash-pay services.
- Expanded the FAQ with practical questions about cost, insurance, cash pay, new symptoms, medication follow-up, imaging/referrals, membership boundaries, telehealth, HSA questions, and online scheduling.
- Kept savings language deliberately qualified. DPC may reduce visit-by-visit financial friction, but the site does not claim it is always cheaper for every patient.

### Guardrails

- Do not bring back duplicate homepage value strips unless user testing shows they improve comprehension.
- The homepage should answer only: who Jennifer is, what care feels like, why DPC may matter, what other care paths exist, and what to do next.
- Detailed DPC mechanics belong on the DPC page or FAQ, not in the hero.
- Do not promise remote prescribing, no-visit refills, unlimited messaging, imaging, referral behavior, HSA eligibility, or cost savings beyond what Jennifer has clinically and operationally confirmed.
