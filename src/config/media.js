const publicImage = (filename, alt, options = {}) => ({
  src: `${import.meta.env.BASE_URL}images/${filename}`,
  alt,
  position: options.position || 'center',
  usage: options.usage || 'editorial',
});

export const siteMedia = Object.freeze({
  home: Object.freeze({
    hero: publicImage(
      'jennifer-hero.webp',
      'Jennifer Carlile seated in a warm, welcoming care setting',
      { position: '58% center', usage: 'homepage hero' },
    ),
    maranaBanner: publicImage(
      'marana-sunset.webp',
      'A saguaro and flowering prickly pear overlooking the Sonoran Desert at sunset',
      { position: 'center 56%', usage: 'wide Marana banner' },
    ),
    pricklyPearDetail: publicImage(
      'prickly-pear-bloom.webp',
      'Flowering prickly pear cactus in the Sonoran Desert at sunset',
      { position: 'center', usage: 'local story detail' },
    ),
  }),
  provider: Object.freeze({
    maranaBanner: publicImage(
      'marana-sunset.webp',
      'Sonoran Desert landscape near Marana, Arizona at sunset',
      { position: 'center 56%', usage: 'provider page banner' },
    ),
  }),
});

export const mediaPath = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;
