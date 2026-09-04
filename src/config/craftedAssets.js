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
    src: publicAsset('desert-landscape-divider.svg'),
    mobileSrc: publicAsset('desert-landscape-divider-mobile.svg'),
    role: 'decorative',
    focalPoint: 'center',
    nativeSize: '1600x260',
    mobileNativeSize: '800x260',
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
