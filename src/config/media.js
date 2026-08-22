const publicImage = (filename, alt, options = {}) => ({
  src: `${import.meta.env.BASE_URL}images/${filename}`,
  alt,
  position: options.position || 'center',
  usage: options.usage || 'editorial',
});

// Every secondary-page feature image has one primary assignment.
// Keep these unique so the site feels intentionally photographed rather than templated.
const maranaLibrary = Object.freeze({
  dpcHero: publicImage(
    'dpc-marana-saguaro-right.webp',
    'Pastel Sonoran Desert sunset with a saguaro on the right near Marana, Arizona',
    { position: 'center 52%', usage: 'DPC page hero only' },
  ),
  servicesHero: publicImage(
    'services-marana-golden.webp',
    'Golden-hour Sonoran Desert view with prickly pear and mountains near Marana, Arizona',
    { position: 'center 52%', usage: 'Care and Services page hero only' },
  ),
  newPatientsHero: publicImage(
    'new-patients-trail.webp',
    'Desert trail winding through saguaros and prickly pear near Marana, Arizona',
    { position: 'center 58%', usage: 'New Patients page hero only' },
  ),
  aboutHero: publicImage(
    'about-marana-sunset.webp',
    'Sonoran Desert sunset with saguaros and prickly pear near Marana, Arizona',
    { position: 'center 50%', usage: 'About page hero only' },
  ),
  contactHero: publicImage(
    'contact-prickly-pear.webp',
    'Prickly pear cactus with ripe magenta fruit in Marana, Arizona',
    { position: 'center 60%', usage: 'Contact page hero only' },
  ),
  providerLocal: publicImage(
    'provider-saguaro-detail.webp',
    'Close view of a saguaro with the Sonoran Desert beyond it near Marana, Arizona',
    { position: 'center', usage: 'Meet Jennifer local story only' },
  ),
  homeMarana: publicImage(
    'marana-sunset.webp',
    'Sonoran Desert landscape near Marana, Arizona at sunset',
    { position: 'center 55%', usage: 'homepage Marana section only' },
  ),
  homePricklyPear: publicImage(
    'prickly-pear-bloom.webp',
    'Prickly pear cactus in warm Sonoran Desert light',
    { position: 'center', usage: 'homepage brand detail only' },
  ),
});

export const siteMedia = Object.freeze({
  home: Object.freeze({
    hero: publicImage(
      'jennifer-hero.webp',
      'Jennifer Carlile seated in a warm, welcoming care setting',
      { position: '58% center', usage: 'homepage hero' },
    ),
    maranaBanner: maranaLibrary.homeMarana,
    pricklyPearDetail: maranaLibrary.homePricklyPear,
  }),
  provider: Object.freeze({
    localStory: maranaLibrary.providerLocal,
  }),
  pages: Object.freeze({
    dpc: maranaLibrary.dpcHero,
    services: maranaLibrary.servicesHero,
    newPatients: maranaLibrary.newPatientsHero,
    about: maranaLibrary.aboutHero,
    contact: maranaLibrary.contactHero,
  }),
  library: maranaLibrary,
});

export const mediaPath = (filename) => `${import.meta.env.BASE_URL}images/${filename}`;
