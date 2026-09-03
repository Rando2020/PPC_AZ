import paperTexture from '../assets/crafted/paper-texture.webp';

const publicAsset = path => `${import.meta.env.BASE_URL}images/crafted/${path}`;

export const craftedAssets = {
  bloomCorner: {
    src: publicAsset('watercolor-bloom-corner.webp'),
    role: 'decorative',
    focalPoint: 'center',
    nativeSize: '1024x1536',
  },
  desertDivider: {
    src: publicAsset('watercolor-desert-divider.webp'),
    role: 'decorative',
    focalPoint: 'center 62%',
    nativeSize: '3840x420',
  },
  paperTexture: {
    src: paperTexture,
    role: 'surface',
    nativeSize: '640x640',
  },
};

export const craftedSurfaceStyle = {
  '--crafted-paper-texture': `url("${craftedAssets.paperTexture.src}")`,
};
