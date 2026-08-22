const publicImage = (filename, alt, options = {}) => ({
  src: `${import.meta.env.BASE_URL}images/${filename}`,
  alt,
  position: options.position || 'center',
  usage: options.usage || 'editorial',
});

// IMPORTANT: only reference image files that have been validated as complete browser-decodable assets.
// The Marana photo files added in PR #31 were truncated during upload, so these entries temporarily
// fall back to the previously validated site assets until the original photos are re-uploaded safely.
const maranaLibrary = Object.freeze({
  gatesPassSunset: publicImage(
    'marana-sunset.webp',
    'Sonoran Desert landscape near Marana, Arizona at sunset',
    { position: 'center 55%', usage: 'wide location banner' },
  ),
  pricklyPearBloom: publicImage(
    'prickly-pear-bloom.webp',
    'Prickly pear cactus in warm Sonoran Desert light',
    { position: 'center', usage: 'brand detail' },
  ),
  pricklyPearFruit: publicImage(
    'prickly-pear-bloom.webp',
    'Prickly pear cactus in the Sonoran Desert near Marana, Arizona',
    { position: 'center 42%', usage: 'editorial detail' },
  ),
  saguaroGoldenHour: publicImage(
    'marana-sunset.webp',
    'Sonoran Desert landscape near Marana, Arizona in warm light',
    { position: 'center 55%', usage: 'local landscape accent' },
  ),
});

export const siteMedia = Object.freeze({
  home: Object.freeze({
    hero: publicImage(
      'jennifer-hero.webp',
      'Jennifer Carlile seated in a warm, welcoming care setting',
      { position: '58% center', usage: 'homepage hero' },
    ),
    maranaBanner: maranaLibrary.gatesPassSunset,
    pricklyPearDetail: maranaLibrary.pricklyPearBloom,
  }),
  provider: Object.freeze({
    maranaBanner: publicImage(
      'marana-sunset.webp',
      'Sonoran Desert landscape near Marana, Arizona at sunset',
      { position: 'center 56%', usage: 'provider page banner' },
    ),
  }),
  library: maranaLibrary,
});

export const mediaPath = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;
