# Prickly Pear Care image library

This directory is the production media library for the website. Keep local Marana / Sonoran Desert photography here so imagery can be changed without rewriting page layout code.

## Current production assets

| File | Primary use | Notes |
| --- | --- | --- |
| `jennifer-hero.webp` | Homepage hero | Provider-forward image. Preserve a text-safe area on the left at desktop widths. |
| `marana-sunset.webp` | Wide Marana banner, provider banner | Landscape image. Favor open sky / low-detail space where white copy can sit. |
| `prickly-pear-bloom.webp` | Local story / detail image | Close or medium prickly pear crop. Works best without text layered directly on it. |
| `consultation-detail.webp` | Care / relationship detail | Use for patient-care storytelling rather than location branding. |

Production pages reference these files through `src/config/media.js`. Update the registry instead of scattering raw image paths through page components.

## New Marana asset naming

Use descriptive, stable filenames. Do not name assets `final`, `new`, `image1`, or by generation date alone.

Recommended names for the new photo set:

- `marana-gates-pass-sunset-wide.webp`
- `marana-prickly-pear-fruit-wide.webp`
- `marana-prickly-pear-fruit-close.webp`
- `marana-prickly-pear-bloom-close.webp`
- `marana-saguaro-trail-golden-hour.webp`
- `marana-sonoran-ridge-golden-hour.webp`
- `marana-sunset-sky-texture.webp`
- `marana-desert-lake-sunset.webp`

## Export targets

| Slot | Recommended canvas | Target size | Composition |
| --- | ---: | ---: | --- |
| Hero / full-width banner | 2400 x 1200 | <= 300 KB WebP | Subject on right, 35 to 45% quieter space on left for copy |
| Section banner | 2000 x 900 | <= 250 KB WebP | Horizon near lower third, avoid important subjects at extreme edges |
| Editorial landscape card | 1600 x 1200 | <= 180 KB WebP | Clear focal subject, no embedded text |
| Portrait/mobile crop | 1200 x 1600 | <= 180 KB WebP | Subject centered with vertical breathing room |
| Cactus detail | 1400 x 1400 | <= 160 KB WebP | Sharp foreground, soft natural background |

Use WebP for production photography. Keep the original JPEG/PNG outside the deployed `public` folder if a full-resolution archive is needed.

## Color direction

The site palette is intentionally muted and warm:

- Olive: `#596247`
- Dark olive: `#3f4934`
- Berry: `#9b3f5d`
- Dark berry: `#773047`
- Cream: `#f7f1e6`
- Sand: `#e7d9c4`

Photography should feel like the same world as the interface. Favor warm sunset gold, dusty sage, muted cactus green, berry / magenta prickly pear fruit and blooms, and natural desert neutrals. Avoid neon saturation, HDR halos, heavy teal/orange grading, or obviously synthetic skies.

## Text-safe banners

For banners that may carry website copy:

1. Preserve a low-detail area on the left or right rather than centering the main cactus.
2. Keep faces and important cactus blooms out of the outer 10% because responsive cropping may trim them.
3. Do not bake words, logos, buttons, or gradients into the source image. The site applies accessible overlays in CSS.
4. Verify the crop at desktop, tablet, and phone widths.

## Adding a new asset

1. Export the final image as WebP using the targets above.
2. Add it to `public/images/` with a descriptive filename.
3. Add one entry to `src/config/media.js` with its path, alt text, preferred focal position, and intended use.
4. Reference the registry entry from the page or component.
5. Run `npm run build` and `npm run lint`.
6. Check contrast and crop behavior at 1440px, 1024px, 768px, 390px, and 375px widths.

## Accessibility

Alt text should describe what the image communicates in context, not every visible detail. Decorative images should use an empty alt value. Do not use filename-like alt text or phrases such as `image of`.
