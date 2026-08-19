# Approved Design Decisions

This file is the first source every AI coding or design agent must read before changing the Prickly Pear Care website.

## Canonical decisions

- Consumer-facing brand: **Prickly Pear Care**.
- Legal entity: **Prickly Pear Primary Care PLLC**. Use the legal name only where legally or administratively relevant.
- Core care language: **Patient-led care**. Keep this phrase consistent across homepage, provider, DPC, service, and patient journey copy.
- Brand line: **Care that grows with you.**
- Founder and clinical trust anchor: **Jennifer Carlile, MSN, FNP-BC, Founder, CEO & Family Nurse Practitioner**.
- Launch model: **Direct Primary Care (DPC) is the primary-care launch focus**.
- Future expansion: weight management, hormone support, and other focused programs may be added later. Do not present planned programs as currently available until Jennifer confirms scope, pricing, eligibility, and launch status.
- Location identity: Marana, Northwest Tucson, Southern Arizona, and the Sonoran Desert should feel authentic and local rather than decorative or tourist-themed.
- Visual tone: warm, premium, calm, medically credible, approachable, and editorial. Avoid generic hospital stock photography, spa aesthetics, or generic SaaS design.
- Canonical Jennifer photography and the actual logo are source-of-truth assets. Do not regenerate Jennifer's likeness or redraw the logo for production use.
- Interface icons: use the existing Lucide React system. Emojis may appear sparingly in editorial/social content, never as the only meaning-bearing UI element.
- Motion runtime: Motion for React is the default animation system. Use subtle motion to support hierarchy, feedback, growth, and continuity.
- Motion accessibility: every motion enhancement must respect the user's reduced-motion preference and must never be required to understand or operate the site.
- Anime.js or GSAP may only be added for a specific SVG or advanced scroll requirement that Motion cannot solve cleanly. Do not add animation libraries because they are trendy.
- Booking architecture: preserve a replaceable scheduling adapter so the branded website can support website-first booking and future EHR integration.
- Privacy boundary: general public pages must not encourage patients to submit diagnoses, symptoms, histories, or other sensitive health information through ordinary email/contact forms.

## Do not change without explicit approval

1. The consumer-facing name "Prickly Pear Care".
2. The phrase "Patient-led care" as the core care philosophy.
3. The tagline "Care that grows with you."
4. Jennifer's credentials, experience claims, NPI, license information, or biography facts.
5. The actual logo artwork or wording.
6. DPC pricing, included services, access promises, insurance details, or enrollment terms that Jennifer has not confirmed.
7. The availability status of weight management, hormone support, or future programs.
8. Healthcare/privacy/legal copy from draft to final without qualified review.

## AI change protocol

Before changing the site, an AI agent must:

1. Read this file, `BRAND_RULES.md`, `CONTENT_FACTS.md`, and `QA_CHECKLIST.md`.
2. Inspect the current implementation instead of assuming the architecture.
3. State the user problem and the smallest justified change.
4. Preserve approved brand language and patient-led care terminology.
5. Avoid invented practice facts, services, prices, testimonials, credentials, or clinical promises.
6. Run available build/lint/tests after implementation.
7. Review desktop, tablet, and mobile layouts plus reduced-motion behavior.
8. Update `AI_CHANGELOG.md` with what changed, why, and any unresolved risks.

## Stop conditions

Stop redesigning when:

- the requested problem is solved,
- no launch blocker remains in scope,
- the change would become primarily subjective aesthetic churn,
- a new dependency would add more complexity than user value,
- the next decision requires Jennifer, legal/compliance, EHR/vendor, or business-model confirmation.

A site is not improved merely because it is different.
