# AI skills pilot: Prickly Pear Care (2026-11-01)

- Local skill: `.agents/skills/site-design-audit/SKILL.md`.
- Pattern: Hallmark's baseline-preserving accessibility and design audit; upstream: https://github.com/Nutlope/hallmark (MIT).
- No upstream executable, automation, runtime dependency, or package was installed.
- Outcome: evidence-based UX improvement proposals without disturbing active branding or form wiring.

## First test
1. Record the current homepage and waitlist UI as implemented, not as imagined.
2. Inventory all navigation, inputs, CTAs and handlers.
3. Audit keyboard access, reduced motion, labels, contact CTA, contrast, and mobile layout.
4. Verify the `native` booking adapter remains correctly described as non-persistent and that waitlist PHI protections are not bypassed.
5. Capture before/after evidence for approved changes only; run `npm run lint` and `npm run build` on the actual branch.
6. Draft a reviewable PR. Never automatically merge to the live GitHub Pages deployment.

## Security
If an external design skill is later installed, first review its exact version, Node scripts, dependencies, data access and license. Do not export patient data or copy private credentials into third-party agents.
