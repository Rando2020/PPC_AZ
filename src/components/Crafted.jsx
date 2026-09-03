import { ArrowRight, Flower2 } from 'lucide-react';
import { craftedAssets } from '../config/craftedAssets';

export function DesertBloomButton({ children, href, tone = 'primary', className = '' }) {
  return <a className={`desert-bloom-button desert-bloom-button--${tone} ${className}`.trim()} href={href}>
    <span>{children}</span><ArrowRight size={17} aria-hidden="true"/>
    <Flower2 className="desert-bloom-button__bloom" aria-hidden="true"/>
  </a>;
}

export function WatercolorDivider({ tone = 'berry', className = '', illustrated = false }) {
  if (illustrated) return <div className={`watercolor-divider watercolor-divider--illustrated ${className}`.trim()} aria-hidden="true"><img src={craftedAssets.desertDivider.src} alt="" loading="lazy" decoding="async" style={{ objectPosition: craftedAssets.desertDivider.focalPoint }}/></div>;
  return <div className={`watercolor-divider watercolor-divider--${tone} ${className}`.trim()} aria-hidden="true"><span/><Flower2/><span/></div>;
}

export function PaperWash({ tone = 'sand', position = 'right' }) {
  return <span className={`paper-wash paper-wash--${tone} paper-wash--${position}`} aria-hidden="true"/>;
}

export function DesertMicroIcon({ icon: Icon }) {
  return <span className="desert-micro-icon" aria-hidden="true"><Icon/></span>;
}

export function OrganicFrame({ children, className = '' }) {
  return <div className={`organic-frame ${className}`.trim()}>{children}</div>;
}

export function WatercolorBloom({ className = '' }) {
  return <img className={`watercolor-bloom ${className}`.trim()} src={craftedAssets.bloomCorner.src} alt="" aria-hidden="true" loading="lazy" decoding="async"/>;
}
