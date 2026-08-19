import { ArrowRight, HeartHandshake, ShieldCheck, Sprout, Quote, Sparkles, MessageCircle, ClipboardCheck, Stethoscope, Lightbulb } from 'lucide-react';
import { practice, serviceCategories } from '../config/practice';
import { CTA } from '../components/UI';

export default function Home(){return <>
  <section className="editorial-hero">
    <img className="editorial-hero__image" src={`${import.meta.env.BASE_URL}images/jennifer-hero.webp`} alt="Jennifer Carlile seated in a warm, welcoming care setting"/>
    <div className="editorial-hero__veil"/>
    <div className="shell editorial-hero__content">
      <span className="eyebrow">Jennifer Carlile · MSN, FNP-BC</span>
      <h1>Care that<br/><em>grows with you.</em></h1>
      <p>Jennifer makes room for your questions, listens closely, and explains the next step in plain language.</p>
      <div className="button-row"><a className="button" href="#/waitlist">Join the Waitlist <ArrowRight size={17}/></a><a className="editorial-link" href="#/provider">Meet Jennifer <ArrowRight size={15}/></a></div>
      <p className="hero-launch-note"><span/> Opening soon in Marana, with telehealth interest welcomed.</p>
    </div>
    <div className="hero-signature">Patient-led Care in Southern Arizona</div>
  </section>

  <section className="care-pledge" data-reveal="stagger"><div className="shell care-pledge__grid">
    <div><HeartHandshake/><span><strong>Listen first</strong>Your story shapes the visit.</span></div>
    <div><ShieldCheck/><span><strong>Care deeply</strong>Patience and respect at every visit.</span></div>
    <div><Sprout/><span><strong>Practice excellently</strong>Evidence, clarity, and follow-through.</span></div>
  </div></section>

  <section className="section editorial-intro" data-reveal="up"><div className="shell editorial-intro__grid">
    <div className="editorial-intro__kicker"><Stethoscope/><span><small>Patient-led care in practice</small>Your voice shapes the plan.</span></div>
    <div className="editorial-intro__body">
      <div className="editorial-intro__header">
        <h2>A clearer path through care.</h2>
        <p className="large-copy">Patient-led care means Jennifer starts with what matters to you, then helps turn the conversation into informed choices and a practical plan.</p>
      </div>
      <div className="patient-journey" aria-label="What patient-led care looks like">
        <article><span className="patient-journey__number">01</span><MessageCircle/><h3>You bring the full story.</h3><p>Share your questions, symptoms, priorities, and what you want from the visit.</p></article>
        <article><span className="patient-journey__number">02</span><Lightbulb/><h3>Jennifer makes it clear.</h3><p>She listens closely, explains the options, and helps you understand the tradeoffs.</p></article>
        <article><span className="patient-journey__number">03</span><ClipboardCheck/><h3>You decide what comes next.</h3><p>Leave with shared decisions, clear next steps, and a plan that works in real life.</p></article>
      </div>
    </div>
  </div></section>

  <section className="marana-scene" aria-labelledby="marana-scene-title" data-reveal="scene">
    <img src={`${import.meta.env.BASE_URL}images/marana-sunset.webp`} alt="A saguaro and flowering prickly pear overlooking the Sonoran Desert at sunset" loading="lazy"/>
    <div className="marana-scene__shade"/>
    <div className="shell marana-scene__content">
      <span className="eyebrow">Rooted in Marana</span>
      <h2 id="marana-scene-title">Local care, shaped by the community.</h2>
      <p>Jennifer has spent more than nine years caring for patients across Marana and Northwest Tucson.</p>
    </div>
  </section>

  <section className="care-paths" data-reveal="up"><div className="shell">
    <div className="care-paths__heading"><span className="eyebrow">A hybrid practice</span><h2>Care that fits the reason you are here.</h2><p>Insurance-based care will sit alongside focused cash-pay programs for weight management and hormone therapy. Final coverage and pricing details are coming soon.</p></div>
    <div className="care-paths__list">{serviceCategories.map((item,i)=><a href="#/services" className="care-path" key={item.title}><span className="care-path__number">0{i+1}</span><div><small>{item.status}</small><h3>{item.title}</h3><p>{item.description}</p></div><ArrowRight/></a>)}</div>
  </div></section>

  <section className="founder-note" data-reveal="split"><div className="shell founder-note__grid">
    <figure className="founder-note__photo"><img src={`${import.meta.env.BASE_URL}images/consultation-detail.webp`} alt="A nurse practitioner listening during a patient conversation"/><figcaption>Care is personal here.</figcaption></figure>
    <div><Quote className="founder-note__quote-icon"/><blockquote>“My goal is to create the kind of care experience where you feel comfortable asking questions, supported in your choices, and confident in what comes next.”</blockquote><div className="founder-note__byline"><span/><p><strong>Jennifer Carlile, MSN, FNP-BC</strong>Founder & Family Nurse Practitioner</p></div><a className="editorial-link editorial-link--dark" href="#/provider">Read Jennifer’s story <ArrowRight size={15}/></a></div>
  </div></section>

  <section className="local-story" data-reveal="split"><div className="shell local-story__grid">
    <div className="local-story__copy"><Sparkles/><span className="eyebrow">Growing close to home</span><h2>Personal care for the place we call home.</h2><p className="large-copy">{practice.serviceArea}</p><p>Practice location and opening details are coming soon. Join the interest list for updates as plans are finalized.</p><a className="editorial-link editorial-link--dark" href="#/waitlist">Join the interest list <ArrowRight size={14}/></a></div>
    <figure className="local-story__photo"><img src={`${import.meta.env.BASE_URL}images/prickly-pear-bloom.webp`} alt="Flowering prickly pear cactus in the Sonoran Desert at sunset" loading="lazy"/></figure>
  </div></section>
  <CTA title="Be part of what grows next." action="Join the Waitlist" href="#/waitlist">Tell Jennifer what kind of care would serve you best and receive opening updates. There is no commitment.</CTA>
</>}
