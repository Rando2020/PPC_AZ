# Crafted asset system

The design sheet is an art-direction reference, not a production sprite sheet. Production pages consume individually exported assets through `src/config/craftedAssets.js`.

## Organization

- `public/images/crafted/` — independently addressable decorative artwork that may be replaced without rebuilding component code.
- `src/assets/crafted/` — bundled surface textures whose URLs are fingerprinted during the build.
- `src/config/craftedAssets.js` — the single registry for file paths, focal points, roles, and native dimensions.
- `src/components/Crafted.jsx` — reusable UI wrappers that apply accessibility and loading behavior.
- `src/crafted.css` — tokens, responsive placement, hover behavior, and visual-density rules.
- `docs/screenshots/` — review references and approved direction mockups; never loaded by the site.

## Rules

1. Export one concern per file. Do not place buttons, text, borders, and illustrations in one flattened runtime image.
2. Keep text, icons, focus states, and controls in HTML/CSS. Raster artwork is decorative and receives an empty `alt` value.
3. Add or replace file metadata in the registry. Components and pages should not construct image paths.
4. Size artwork for its maximum CSS width at high-density displays, then compress to WebP or AVIF.
5. Use SVG or CSS for simple lines and interactive states; use raster files only where watercolor texture matters.
6. Keep one major botanical moment per viewport and use minor accents sparingly.
7. Preserve transparent masters outside production exports. Never repeatedly recompress an already-compressed derivative.

## Current assets

| Registry key | Production role | Native dimensions |
| --- | --- | --- |
| `bloomCorner` | Mission and quiet CTA botanical accent | 1024 × 1536 |
| `desertDivider` | Full-width section transition | 3840 × 420 |
| `paperTexture` | Seamless surface texture | 640 × 640 |

## Adding the next asset

1. Export the transparent master at 2× the largest intended CSS size, or 3840 px wide for a full-bleed divider.
2. Save the optimized derivative with a descriptive kebab-case filename.
3. Register it in `craftedAssets.js` with its role, focal point, and native size.
4. Consume it through a crafted component rather than directly from page JSX.
5. Verify 1440 px, 390 px, reduced motion, keyboard focus, and the build budget.
