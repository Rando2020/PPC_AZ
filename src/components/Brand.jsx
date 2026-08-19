import { Flower2 } from 'lucide-react';

export function Brand({ light = false }) {
  return <a className={`brand ${light ? 'brand--light' : ''}`} href="#/" aria-label="Prickly Pear Care home">
    <span className="brand__mark"><Flower2 size={25} strokeWidth={1.8}/></span>
    <span><strong>Prickly Pear</strong><small>CARE</small></span>
  </a>;
}

export function Portrait() {
  return <div className="portrait-wrap">
    <img className="portrait" src={`${import.meta.env.BASE_URL}images/provider-portrait.png`} alt="Jennifer Mae Carlile, Founder and Family Nurse Practitioner at Prickly Pear Care" onError={(e) => { e.currentTarget.hidden = true; e.currentTarget.nextElementSibling.hidden = false; }}/>
    <div className="portrait-placeholder" hidden aria-label="Provider photography placeholder">
      <Flower2 size={50}/><span>Provider portrait</span><small>Add approved photography at<br/>public/images/provider-portrait.png</small>
    </div>
    <div className="portrait-caption"><span>Founder-led care</span><strong>Your provider, your advocate.</strong></div>
  </div>;
}
