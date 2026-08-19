import { Flower2 } from 'lucide-react';
import logo from '../../logo-mark.webp';

export function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand--light' : ''}`} href="#/" aria-label="Prickly Pear Primary Care PLLC home">
    <img className="brand__logo" src={logo} alt="" aria-hidden="true" />
    <span className="brand__wordmark">
      <strong>Prickly Pear</strong>
      <small>Primary Care <span className="brand__pllc">PLLC</span></small>
      <span className="brand__location">Marana, Arizona</span>
    </span>
  </a>;
}

export function Portrait() {
  return <div className="portrait-wrap">
    <img className="portrait" src={`${import.meta.env.BASE_URL}images/provider-portrait.png`} alt="Jennifer Carlile, Founder and Family Nurse Practitioner at Prickly Pear Care" onError={(e) => { e.currentTarget.hidden = true; e.currentTarget.nextElementSibling.hidden = false; }}/>
    <div className="portrait-placeholder" hidden aria-label="Provider photography placeholder">
      <Flower2 size={50}/><span>Provider portrait</span><small>Photography unavailable</small>
    </div>
    <div className="portrait-caption"><span>Patient-led Care</span><strong>Your provider, your advocate.</strong></div>
  </div>;
}
