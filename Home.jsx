import { ArrowRight, Phone, HeartHandshake, ShieldPlus, MapPin, Sparkles, Clock, KeyRound, Wallet, UserCheck } from 'lucide-react';
import { practice, serviceCategories, dpc } from '../config/practice';
import { CTA } from '../components/UI';

export default function Home(){return <>
  <section className="editorial-hero">
    <div className="shell editorial-hero__content">
      <span className="eyebrow">Jennifer Carlile · MSN, FNP-BC</span>
      <h1>Care that<br/><em>grows with you.</em></h1>
      <p>Primary care in Marana where you set the agenda — and your provider has the time to{'\u00A0'}follow it.</p>
      <div className="button-row">
        <a className="button" href="#/booking">Book an Appointment <ArrowRight size={17}/></a>
        {practice.phoneHref
          ? <a className="button button--ghost" href={`tel:${practice.phoneHref}`}><Phone size={16}/> Call the practice</a>
          : <a className="editorial-link" href="#/waitlist">Join the waitlist <ArrowRight size={15}/></a>}
      </div>
    </div>
    <img className="editorial-hero__image" src={`${import.meta.env.BASE_URL}images/jennifer-hero.webp`} width="1586" height="992" fetchPriority="high" alt="Jennifer Carlile seated in a warm, welcoming care setting"/>
    <div className="editorial-hero__veil" aria-hidden="true"/>
  </section>

  <section className="care-pledge" aria-label="What sets Prickly Pear Care apart">
    <svg className="care-pledge__wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0,100 L0,74 C170,64 300,44 520,36 C770,27 990,12 1210,6 C1310,3 1380,2 1440,2 L1440,100 Z"/>
    </svg>
    <div className="shell care-pledge__grid reveal-group">
      <div><HeartHandshake aria-hidden="true"/><span><strong>You set the agenda</strong><small>Your priorities lead the visit, every visit.</small></span></div>
      <div><ShieldPlus aria-hidden="true"/><span><strong>One provider, always</strong><small>The same clinician who knows your history.</small></span></div>
      <div><MapPin aria-hidden="true"/><span><strong>Rooted in Marana</strong><small>Dove Mountain to Gladden Farms and northwest Tucson.</small></span></div>
    </div>
  </section>

  <section className="mission-story">
    <div className="shell mission-story__grid">
      <div className="mission-story__left">
        <h2>A mission rooted in personal care.</h2>
        <p>Over the years, I’ve seen how difficult it can be to receive truly personalized care when you don’t have the opportunity to see the same provider who knows you and your story.</p>
        <p>I believe there is something incredibly valuable about having a provider who takes the time to listen, understands your history, and is invested in your health for the long term. <strong>That belief inspired me to create Prickly Pear Care.</strong></p>
      </div>
      <div className="mission-story__right">
        <h3>My favorite part of primary care is building lasting relationships with my patients and helping them navigate the healthcare system.</h3>
        <p className="mission-story__goal">My goal is simple: <strong>for every patient to feel heard, valued, and confident in their care.</strong></p>
        <div className="mission-story__divider" aria-hidden="true"><span>♥</span></div>
        <p>From preventive care and annual physicals to sick visits, chronic disease management, women’s health, weight management, and ongoing wellness, Prickly Pear Primary Care provides personalized care designed around <strong>you—not a one-size-fits-all approach.</strong></p>
        <p className="mission-story__statement">See the same provider. Build a relationship. Take charge of your health.</p>
        <a className="editorial-link editorial-link--dark" href="#/provider">Meet Jennifer <ArrowRight size={15}/></a>
      </div>
    </div>
  </section>

  <section className="dpc-band" id="membership">
    <div className="shell dpc-band__grid">
      <div className="dpc-band__intro reveal">
        <span className="eyebrow">{dpc.status} · Direct primary care</span>
        <h2>{dpc.headline}</h2>
        <p className="large-copy">{dpc.intro}</p>
        <div className="button-row"><a className="button" href="#/waitlist">Join the waitlist <ArrowRight size={16}/></a><a className="editorial-link editorial-link--dark" href="#/services">How membership works <ArrowRight size={15}/></a></div>
      </div>
      <ul className="dpc-band__list reveal-group">
        {[Clock, KeyRound, Wallet, UserCheck].map((Icon, i) => (
          <li key={dpc.benefits[i][0]}><Icon aria-hidden="true"/><span><strong>{dpc.benefits[i][0]}</strong>{dpc.benefits[i][1]}</span></li>
        ))}
      </ul>
    </div>
    <div className="shell"><p className="dpc-band__disclaimer">{dpc.disclaimer}</p></div>
  </section>

  <section className="care-paths"><div className="shell">
    <div className="care-paths__heading"><span className="eyebrow">Ways to access care</span><h2>Choose the arrangement that fits your life.</h2><p>Direct Primary Care membership and traditional insurance-based visits are planned care pathways. Select cash-pay services are coming soon, with no launch date set.</p></div>
    <div className="care-paths__list reveal-group">{serviceCategories.map((item,i)=><a href="#/services" className="care-path" key={item.title}><span className="care-path__number">0{i+1}</span><div><small>{item.status}</small><h3>{item.title}</h3><p>{item.description}</p></div><ArrowRight/></a>)}</div>
  </div></section>

  <section className="marana-band">
    <div className="shell marana-band__inner reveal-group">
      <div>
        <span className="eyebrow"><Sparkles size={14}/> Northwest Pima County</span>
        <h2>A Marana practice, on purpose.</h2>
        <p>Marana has grown faster than its primary care has. Families in Gladden Farms and Continental Ranch, retirees in Dove Mountain, and folks out toward Avra Valley and Picture Rocks are all driving into Tucson for appointments that could happen closer to home. Prickly Pear is being built here, for here.</p>
      </div>
      <div className="marana-band__areas">
        <small>Expected service area</small>
        <ul>{practice.neighborhoods.map(n => <li key={n}>{n}</li>)}</ul>
        <a className="editorial-link editorial-link--dark" href="#/contact">Practice location coming soon <ArrowRight size={15}/></a>
      </div>
    </div>
  </section>

  <CTA title="We’re opening in Marana. Be first to know." action="Join the Waitlist" href="#/waitlist">Add your name and we’ll email you membership pricing, insurance details, and opening dates before anyone else.</CTA>
</>}
