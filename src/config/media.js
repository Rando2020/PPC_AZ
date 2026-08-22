const publicImage = (filename, alt, options = {}) => ({
  src: `${import.meta.env.BASE_URL}images/${filename}`,
  alt,
  position: options.position || 'center',
  usage: options.usage || 'editorial',
});

// Secondary-page hero photography is intentionally one-use-per-page.
// Do not point two secondary pages at the same photo. The DPC hero below is a
// newly added high-resolution source; the remaining assignments use validated
// browser-decodable assets until their original Marana photos are uploaded safely.
const pageMedia = Object.freeze({
  dpc: publicImage(
    'dpc-marana-saguaro-right.webp',
    'Pastel Sonoran Desert sunset with a saguaro on the right near Marana, Arizona',
    { position: 'center 52%', usage: 'DPC page hero only' },
  ),
  services: publicImage(
    'prickly-pear-bloom.webp',
    'Prickly pear cactus in warm Sonoran Desert light',
    { position: 'center 48%', usage: 'Care and Services page hero only' },
  ),
  newPatients: publicImage(
    'marana-sunset.webp',
    'Sonoran Desert landscape near Marana, Arizona at sunset',
    { position: 'center 56%', usage: 'New Patients page hero only' },
  ),
  about: publicImage(
    'consultation-detail.webp',
    'Warm detail from the Prickly Pear Care visual story',
    { position: 'center', usage: 'About page hero only' },
  ),
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
      'Sonoran Desert landscape near Marana, Arizona at sunset',
      { position: 'center 55%', usage: 'homepage Marana section' },
    ),
    pricklyPearDetail: publicImage(
      'prickly-pear-bloom.webp',
      'Prickly pear cactus in warm Sonoran Desert light',
      { position: 'center', usage: 'homepage brand detail' },
    ),
  }),
  pages: pageMedia,
  library: Object.freeze({
    dpcHero: pageMedia.dpc,
    servicesHero: pageMedia.services,
    newPatientsHero: pageMedia.newPatients,
    aboutHero: pageMedia.about,
  }),
});

export const mediaPath = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;
