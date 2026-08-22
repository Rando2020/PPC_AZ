import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { Brand } from './Brand';
import { practice } from '../config/practice';
import { siteMedia } from '../config/media';
import '../marana-pages.css';

const nav = [['Meet Jennifer','provider'],['Care & Services','services'],['New Patients','new-patients'],['About','about']];

const dpcNav = [
  ['Overview','dpc'],
  ['Pricing','dpc/pricing'],
  ['Calculator','dpc/calculator'],
  ['Real-life examples','dpc/examples'],
  ['FAQ','faq'],
];

const pageHeroMedia = {
  dpc: siteMedia.pages.dpc,
  services: siteMedia.pages.services,
  'new-patients': siteMedia.pages.newPatients,
  about: siteMedia.pages.about,
};

function routeFromHash(){
  if (typeof window === 'undefined') return '';
  return window.location.hash.replace(/^#\/?/,'').split('/')[0] || '';
}

export function Header({ route }) {
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  const [progress,setProgress] = useState(0);

  useEffect(() => {
    const closeMenu = () => setOpen(false);
    addEventListener('hashchange', closeMenu);
    return () => removeEventListener('hashchange', closeMenu);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = event => {
      if (event.key === 'Escape') setOpen(false);
    };
    addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    let frame;
    const update = () => {
      frame = undefined;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    const onScroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    update();
    addEventListener('scroll', onScroll, { passive: true });
    return () => { removeEventListener('scroll', onScroll); if (frame) cancelAnimationFrame(frame); };
  }, [route]);

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={`site-header ${scrolled?'site-header--compact':''}`}>
      <div className="reading-progress" aria-hidden="true" style={{transform:`scaleX(${progress/100})`}}/>
      <div className="shell header-inner">
        <Brand/>
        <button
          className="menu-button"
          onClick={()=>setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-navigation"
          aria-label={open?'Close main menu':'Open main menu'}
        >{open?<X/>:<Menu/>}</button>
        <nav id="main-navigation" className={open?'nav nav--open':'nav'} aria-label="Main navigation">
          <div className={route==='dpc' || route?.startsWith('dpc/') ? 'nav-dropdown active' : 'nav-dropdown'}>
            <a className="nav-primary" aria-current={route==='dpc'?'page':undefined} href="#/dpc">
              Direct Primary Care <ChevronDown size={15} aria-hidden="true"/>
            </a>
            <div className="nav-dropdown__panel" aria-label="Direct Primary Care pages">
              <span className="nav-dropdown__eyebrow">Explore DPC</span>
              {dpcNav.map(([label,path])=>{
                const active = route===path;
                return <a key={path} className={active?'active':''} aria-current={active?'page':undefined} href={`#/${path}`}>{label}</a>;
              })}
            </div>
          </div>
          {nav.map(([label,path])=>{
            const active = route===path;
            return <a key={path} className={active?'active':''} aria-current={active?'page':undefined} href={`#/${path}`}>{label}</a>;
          })}
          <a className="text-link" href="#/portal">Patient Portal</a>
          <a className="button button--small" aria-current={route==='waitlist'?'page':undefined} href="#/waitlist">Join the Waitlist</a>
        </nav>
      </div>
    </header>
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="shell footer-grid">
    <div className="footer-brand"><a className="footer-brand__name" href="#/">Prickly Pear Care</a><p>{practice.description}</p><p className="small">{practice.serviceArea}</p><p className="small">Featured desert photography from Marana, Arizona.</p></div>
    <div><h3>Explore</h3><a href="#/dpc">Direct Primary Care</a><a href="#/dpc/pricing">DPC pricing</a><a href="#/dpc/calculator">DPC calculator</a><a href="#/provider">Meet Jennifer</a><a href="#/services">Care & services</a><a href="#/new-patients">New patients</a><a href="#/resources">Resources</a><a href="#/faq">FAQ</a></div>
    <div><h3>Connect</h3>{practice.phoneHref?<a href={`tel:${practice.phoneHref}`}>{practice.phone}</a>:<span className="small">Phone coming soon</span>}<a href={`mailto:${practice.email}`}>{practice.email}</a><a href="#/contact">Contact us <ArrowRight size={14}/></a></div>
    <div><h3>Patient-led care</h3><a href="#/waitlist">Join the Waitlist</a><a href="#/portal">Patient portal</a><a href="#/legal/privacy">Privacy</a><a href="#/legal/terms">Terms & accessibility</a></div>
  </div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} {practice.legalName}. All rights reserved.</span><span>Website forms are not for emergencies. Call 911.</span></div></footer>;
}

export function Layout({ route, children }) {
  useEffect(()=>{window.scrollTo({top:0,left:0,behavior:'auto'})},[route]);

  useEffect(()=>{
    const captureWaitlistSource = event => {
      const link = event.target.closest?.('a[href="#/waitlist"]');
      if (!link) return;
      try { sessionStorage.setItem('ppc_waitlist_source', route || 'unknown'); } catch { /* storage can be unavailable in strict privacy modes */ }
    };
    document.addEventListener('click',captureWaitlistSource);
    return()=>document.removeEventListener('click',captureWaitlistSource);
  },[route]);

  useEffect(() => {
    const splitSelectors = '.split, .contact-grid, .decision-panel, .prep-grid, .waitlist-layout, .provider-profile__content, .dpc-provider-bridge';
    const staggerSelectors = '.card-grid, .steps, .resource-grid, .three-col, .faq-list, .waitlist-points, .founder-proof__grid, .dpc-contrast__rows';
    document.querySelectorAll(splitSelectors).forEach(item => {
      if (!item.hasAttribute('data-reveal')) item.setAttribute('data-reveal','split');
    });
    document.querySelectorAll(staggerSelectors).forEach(item => {
      if (!item.hasAttribute('data-reveal')) item.setAttribute('data-reveal','stagger');
    });
    document.querySelectorAll('#main > .section > .shell, #main > .cta > .shell').forEach(item => {
      if (!item.hasAttribute('data-reveal') && !item.querySelector('[data-reveal]')) item.setAttribute('data-reveal','up');
    });
    const items = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) { items.forEach(item => item.classList.add('is-visible')); return undefined; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: .12, rootMargin: '0px 0px -7% 0px' });
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, [route]);

  const routeClass = (route || 'home').replace(/\//g,'-');
  return <><Header route={route}/><main id="main" className={`page-${routeClass}`}>{children}</main><Footer/><a className="mobile-book" href="#/waitlist" aria-label="Join the Prickly Pear Care Waitlist">Join Waitlist</a></>;
}

function ValidatedHeroImage({ media, fallbackSrc }) {
  const [heroSrc,setHeroSrc] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const candidates = [media.src,fallbackSrc].filter((src,index,list)=>src && list.indexOf(src)===index);

    const tryCandidate = index => {
      if (index >= candidates.length) return;

      const image = new Image();
      image.onload = async () => {
        try {
          if (typeof image.decode === 'function') await image.decode();
          if (!cancelled) setHeroSrc(candidates[index]);
        } catch {
          tryCandidate(index + 1);
        }
      };
      image.onerror = () => tryCandidate(index + 1);
      image.src = candidates[index];
    };

    tryCandidate(0);
    return () => { cancelled = true; };
  }, [media,fallbackSrc]);

  if (!heroSrc) return null;

  return <img
    src={heroSrc}
    alt=""
    style={{objectPosition:heroSrc===media.src?media.position:siteMedia.home.maranaBanner.position}}
    decoding="async"
    fetchPriority="high"
    onError={()=>{
      if (heroSrc!==fallbackSrc && fallbackSrc) setHeroSrc(fallbackSrc);
      else setHeroSrc(null);
    }}
  />;
}

export function PageHero({ eyebrow, title, children, tone='cream' }) {
  const route = routeFromHash();
  const media = pageHeroMedia[route];
  const fallbackSrc = route==='dpc' ? siteMedia.home.maranaBanner.src : null;

  if (!media) {
    return <section className={`page-hero page-hero--${tone}`}><div className="shell narrow"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{children&&<p className="lead">{children}</p>}</div></section>;
  }

  return <section className={`page-hero page-hero--${tone} page-hero--with-media page-hero--route-${route}`}>
    <figure className="page-hero__photo page-hero__photo--fallback" aria-hidden="true">
      <ValidatedHeroImage key={`${route}-${media.src}`} media={media} fallbackSrc={fallbackSrc}/>
    </figure>
    <div className="page-hero__veil"/>
    <div className="shell page-hero__media-shell">
      <div className="page-hero__copy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {children&&<p className="lead">{children}</p>}
      </div>
    </div>
  </section>;
}
