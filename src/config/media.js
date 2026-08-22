const publicImage = (filename, alt, options = {}) => ({
  src: `${import.meta.env.BASE_URL}images/${filename}`,
  alt,
  position: options.position || 'center',
  usage: options.usage || 'editorial',
});

const maranaLibrary = Object.freeze({
  gatesPassSunset: publicImage(
    'marana-gates-pass-sunset-wide.webp',
    'Sunset over the Sonoran Desert with saguaros and prickly pear near Marana, Arizona',
    { position: 'center 55%', usage: 'wide location banner' },
  ),
  pricklyPearBloom: publicImage(
    'marana-prickly-pear-bloom-close.webp',
    'Pink prickly pear blossoms and fruit in warm Sonoran Desert light',
    { position: 'center', usage: 'brand detail' },
  ),
  pricklyPearFruit: publicImage(
    'marana-prickly-pear-fruit-close.webp',
    'Prickly pear cactus with magenta fruit in the Marana desert',
    { position: 'center 42%', usage: 'editorial detail' },
  ),
  saguaroGoldenHour: publicImage(
    'marana-saguaro-trail-golden-hour.webp',
    'Saguaro-filled Sonoran Desert landscape in warm golden-hour light',
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
