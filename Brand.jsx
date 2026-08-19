import { Flower2 } from 'lucide-react';

export function Brand({ light = false }) {
  const logo = `${import.meta.env.BASE_URL}images/logo-mark.webp`;
  return <a className={`brand ${light ? 'brand--light' : ''}`} href="#/" aria-label="Prickly Pear Care home">
    <span className="brand__mark brand__mark--original" style={{'--brand-logo': `url(${logo})`}} aria-hidden="true" />
    <span className="brand__wordmark"><strong>Prickly Pear</strong><small>PRIMARY CARE</small></span>
  </a>;
}

export function Portrait() {
  return <div className="portrait-wrap">
    <img className="portrait" width="920" height="1380" loading="lazy" decoding="async" src={`${import.meta.env.BASE_URL}images/provider-portrait.webp`} alt="Jennifer Carlile, Founder and Family Nurse Practitioner at Prickly Pear Care" onError={(e) => { e.currentTarget.hidden = true; e.currentTarget.nextElementSibling.hidden = false; }}/>
    <div className="portrait-placeholder" hidden aria-label="Provider photography placeholder">
      <Flower2 size={50}/><span>Provider portrait</span><small>Photography unavailable</small>
    </div>
    <div className="portrait-caption"><span>Founder-led care</span><strong>Your provider, your advocate.</strong></div>
  </div>;
}
