---
name: site-design-audit
description: Audit Prickly Pear Care's existing website for usability, responsive design, accessibility and visual consistency without silently redesigning or changing approved clinical content. Inspired by Hallmark.
---
# Prickly Pear Care design audit

Use only for review or a specifically approved layout/UX improvement. Preserve current logo, palette, provider identity, copy approvals, contact information and security configuration. Never replace real brand assets with generic generated assets.

1. Inspect `README.md`, `src/config/practice.js`, current routes/components, accessibility semantics, mobile styles, and the actual deployment wiring.
2. Capture a baseline inventory: every heading, link, form, input, handler, navigation destination and CTA. Identify what is real versus a demo. The native booking flow currently does **not** persist requests.
3. Audit mobile-first at 320, 375, 390, 768, 1024, and 1440 CSS pixels where a browser is available; also keyboard navigation, focus states, semantic labels, tap size, contrast and reduced motion.
4. Provide a prioritized evidence-backed list: severity, reproduction, screen, effect on users, proposed repair, and regression risk. Distinguish defects from personal style preferences.
5. When Hallmark has separately been reviewed and installed in a compatible environment, its **audit** mode may supply additional diagnostics. Do not run third-party scripts automatically or treat the tool's generated changes as accepted.
6. Implement only explicitly approved fixes on an isolated branch and recheck the baseline inventory. Do not remove fields, links, content, or click handlers as an incidental restyle.
7. Never put patient data, protected health information, form submissions, appointment records, API secrets, or production EHR credentials in test captures or prompts. Do not change care claims without qualified review.
8. Run repository lint/build and a true browser accessibility check when available; attach actual evidence, otherwise mark not run. Draft PR; owner reviews before merge. Production deploys from main.

Attribution: Project-local original skill inspired by https://github.com/Nutlope/hallmark (MIT). Hallmark itself is not installed by this file.
