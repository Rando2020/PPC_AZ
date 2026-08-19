import { ArrowRight, Phone, HeartHandshake, ShieldPlus, MapPin, Quote, Sparkles, MessageCircle, ClipboardCheck } from 'lucide-react';
import { practice, serviceCategories } from '../config/practice';
import { CTA } from '../components/UI';

export default function Home(){return <>
  <section className="editorial-hero">
    <div className="shell editorial-hero__content">
      <span className="eyebrow">Jennifer Carlile · MSN, FNP-C</span>
      <h1>Care that<br/><em>grows with you.</em></h1>
      <p>Thoughtful, personalized healthcare designed around your life, your goals,{'\u00A0'}and your needs.</p>
      <div className="button-row">
        <a className="button" href="#/booking">Book an Appointment <ArrowRight size={17}/></a>
        {practice.phoneHref
          ? <a className="button button--ghost" href={`tel:${practice.phoneHref}`}><Phone size={16}/> Call the practice</a>
          : <a className="editorial-link" href="#/provider">Meet Jennifer <ArrowRight size={15}/></a>}
      </div>
    </div>
    <img className="editorial-hero__image" src={`${import.meta.env.BASE_URL}images/jennifer-hero.webp`} width="1586" height="992" fetchPriority="high" alt="Jennifer Carlile seated in a warm, welcoming care setting"/>
    <div className="editorial-hero__veil" aria-hidden="true"/>
  </section>

  <section className="care-pledge" aria-label="What sets Prickly Pear Care apart">
    <svg className="care-pledge__wave" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path d="M0,100 L0,74 C170,64 300,44 520,36 C770,27 990,12 1210,6 C1310,3 1380,2 1440,2 L1440,100 Z"/>
    </svg>
    <div className="shell care-pledge__grid">
      <div><HeartHandshake aria-hidden="true"/><span><strong>Relationship-focused</strong><small>A provider who takes the time to truly know you.</small></span></div>
      <div><ShieldPlus aria-hidden="true"/><span><strong>Preventive focus</strong><small>Helping you stay ahead of health concerns.</small></span></div>
      <div><MapPin aria-hidden="true"/><span><strong>Rooted in Marana</strong><small>Proudly serving Marana, Tucson, and nearby communities.</small></span></div>
    </div>
  </section>

  <section className="section editorial-intro"><div className="shell editorial-intro__grid">
    <div className="editorial-intro__kicker"><HeartHandshake/><span><small>Care built around the conversation</small>It starts with listening.</span></div>
    <div className="editorial-intro__body">
      <h2>Feel heard. Understand your options. Know what comes next.</h2>
      <div className="editorial-intro__copy"><p className="large-copy">Prickly Pear Care is for longtime patients who trust Jennifer and for anyone looking for a nurse practitioner who takes time to listen.</p><p>You will have time to talk. Jennifer listens to what matters, explains your options, and works with you on a practical plan.</p></div>
      <div className="editorial-intro__points">
        <div><MessageCircle/><span><strong>Time to talk</strong>Bring your questions and concerns.</span></div>
        <div><ClipboardCheck/><span><strong>A plan you understand</strong>Leave knowing what happens next.</span></div>
      </div>
    </div>
  </div></section>

  <section className="care-paths"><div className="shell">
    <div className="care-paths__heading"><span className="eyebrow">A hybrid practice</span><h2>Care that fits the reason you are here.</h2><p>Insurance-based care will sit alongside focused cash-pay programs for weight management and hormone therapy. Final coverage and pricing details are coming soon.</p></div>
    <div className="care-paths__list">{serviceCategories.map((item,i)=><a href="#/services" className="care-path" key={item.title}><span className="care-path__number">0{i+1}</span><div><small>{item.status}</small><h3>{item.title}</h3><p>{item.description}</p></div><ArrowRight/></a>)}</div>
  </div></section>

  <section className="founder-note"><div className="shell founder-note__grid">
    <figure className="founder-note__photo"><img src={`${import.meta.env.BASE_URL}images/consultation-detail.webp`} alt="A nurse practitioner listening during a patient conversation"/><figcaption>Care is personal here.</figcaption></figure>
    <div><Quote className="founder-note__quote-icon"/><blockquote>“My goal is to create the kind of care experience where you feel comfortable asking questions, supported in your choices, and confident in what comes next.”</blockquote><div className="founder-note__byline"><span/><p><strong>Jennifer Carlile, MSN, FNP-C</strong>Founder & Family Nurse Practitioner</p></div><a className="editorial-link editorial-link--dark" href="#/provider">Read Jennifer’s story <ArrowRight size={15}/></a></div>
  </div></section>

  <section className="local-note"><div className="shell local-note__inner"><Sparkles/><p><span>{practice.serviceArea}</span>Practice location and opening details are coming soon.</p><a href="#/contact">Stay informed <ArrowRight size={14}/></a></div></section>
  <CTA title="Come as you are. Leave with a plan.">Begin with a visit request and let us help you find the right care pathway.</CTA>
</>}
