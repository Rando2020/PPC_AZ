import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, AtSign, MessageCircle } from 'lucide-react';
import { Brand } from './Brand';
import { practice } from '../config/practice';

const nav = [['Provider','provider'],['About','about'],['Services','services'],['New Patients','new-patients'],['Resources','resources']];

export function Header({ route }) {
  const [open,setOpen] = useState(false);
  useEffect(() => setOpen(false), [route]);
  return <><a className="skip-link" href="#main">Skip to content</a><header className="site-header"><div className="shell header-inner">
    <Brand/><button className="menu-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open?<X/>:<Menu/>}</button>
    <nav className={open?'nav nav--open':'nav'} aria-label="Main navigation">{nav.map(([label,path])=><a key={path} className={route===path?'active':''} href={`#/${path}`}>{label}</a>)}<a className="text-link" href="#/waitlist">Join Waitlist</a><a className="button button--small" href="#/booking">Book a Visit</a></nav>
  </div></header></>;
}

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid">
    <div><Brand light/><p>{practice.description}</p><p className="small">{practice.serviceArea}</p></div>
    <div><h2>Explore</h2><a href="#/provider">Meet your provider</a><a href="#/services">Care & services</a><a href="#/new-patients">New patients</a><a href="#/faq">FAQ</a></div>
    <div><h2>Connect</h2>{practice.phoneHref?<a href={`tel:${practice.phoneHref}`}>{practice.phone}</a>:<span className="small">Phone coming soon</span>}<a href={`mailto:${practice.email}`}>{practice.email}</a><a href="#/contact">Contact us <ArrowRight size={14}/></a><div className="social"><a href="#/contact" aria-label="Social links coming soon"><AtSign/></a><a href="#/contact" aria-label="Send a message"><MessageCircle/></a></div></div>
    <div><h2>Patient care</h2><a href="#/waitlist">Join the waitlist</a><a href="#/booking">Book a visit</a><a href="#/portal">Patient portal</a><a href="#/legal/privacy">Privacy</a><a href="#/legal/terms">Terms & accessibility</a></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Prickly Pear Primary Care. All rights reserved.</span><span>Website forms are not for emergencies. Call 911.</span></div></footer>;
}

export function Layout({ route, children }) { useEffect(()=>{window.scrollTo(0,0)},[route]); return <><Header route={route}/><main id="main">{children}</main><Footer/><a className="mobile-book" href="#/booking">Book a Visit</a></>; }

export function PageHero({ eyebrow, title, children, tone='cream' }) { return <section className={`page-hero page-hero--${tone}`}><div className="shell narrow"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{children&&<p className="lead">{children}</p>}</div></section>; }
