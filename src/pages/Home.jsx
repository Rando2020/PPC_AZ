import { ArrowRight, HeartHandshake, ShieldCheck, Sprout, Quote, Sparkles, Flower2 } from 'lucide-react';
import { practice, serviceCategories } from '../config/practice';
import { CTA } from '../components/UI';

export default function Home(){return <>
  <section className="editorial-hero">
    <img className="editorial-hero__image" src={`${import.meta.env.BASE_URL}images/jennifer-hero.png`} alt="Jennifer Mae Carlile seated in a warm, welcoming care setting"/>
    <div className="editorial-hero__veil"/>
    <div className="shell editorial-hero__content">
      <span className="eyebrow">Jennifer Mae Carlile · MSN, FNP-C</span>
      <h1>Care that<br/><em>grows with you.</em></h1>
      <p>Healthcare for people who want to be heard—guided by a nurse practitioner known for listening with empathy and caring with excellence.</p>
      <div className="button-row"><a className="button" href="#/booking">Book a Visit <ArrowRight size={17}/></a><a className="editorial-link" href="#/provider">Meet Jennifer <ArrowRight size={15}/></a></div>
    </div>
    <div className="hero-signature">Founder-led care in Southern Arizona</div>
  </section>

  <section className="care-pledge"><div className="shell care-pledge__grid">
    <div><HeartHandshake/><span><strong>Listen first</strong>Your story shapes the visit.</span></div>
    <div><ShieldCheck/><span><strong>Care deeply</strong>Kindness without compromise.</span></div>
    <div><Sprout/><span><strong>Practice excellently</strong>Evidence, clarity, and follow-through.</span></div>
  </div></section>

  <section className="section editorial-intro"><div className="shell editorial-intro__grid">
    <div className="editorial-intro__aside"><span className="eyebrow">For patients who know what care can be</span><span className="folio">01</span></div>
    <div><h2>You deserve a provider who remembers the person behind the chart.</h2><div className="editorial-intro__copy"><p className="large-copy">Prickly Pear Care is being created for patients who already trust Jennifer—and for anyone searching for the rare feeling of being genuinely heard.</p><p>Visits are shaped by attentive conversations, understandable choices, and care held to a high clinical standard. No rushing past what matters. No leaving you unsure of what comes next.</p></div></div>
  </div></section>

  <section className="care-paths"><div className="shell">
    <div className="care-paths__heading"><span className="eyebrow">A thoughtful hybrid practice</span><h2>One trusted provider.<br/>Care with more than one path.</h2><p>Insurance-based care will sit alongside focused cash-pay programs, allowing the practice to stay personal while meeting different needs.</p></div>
    <div className="care-paths__list">{serviceCategories.map((item,i)=><a href="#/services" className="care-path" key={item.title}><span className="care-path__number">0{i+1}</span><div><small>{item.status}</small><h3>{item.title}</h3><p>{item.description}</p></div><ArrowRight/></a>)}</div>
  </div></section>

  <section className="founder-note"><div className="shell founder-note__grid">
    <div className="founder-note__symbol"><Flower2/><span>Care is personal here.</span></div>
    <div><Quote className="founder-note__quote-icon"/><blockquote>“My goal is to create the kind of care experience where you feel comfortable asking questions, supported in your choices, and confident in what comes next.”</blockquote><div className="founder-note__byline"><span/><p><strong>Jennifer Mae Carlile, MSN, FNP-C</strong>Founder & Family Nurse Practitioner</p></div><a className="editorial-link editorial-link--dark" href="#/provider">Read Jennifer’s story <ArrowRight size={15}/></a></div>
  </div></section>

  <section className="local-note"><div className="shell local-note__inner"><Sparkles/><p><span>{practice.serviceArea}</span>Practice location and opening details are coming soon.</p><a href="#/contact">Stay informed <ArrowRight size={14}/></a></div></section>
  <CTA title="Come as you are. Leave with a plan.">Begin with a visit request and let us help you find the right care pathway.</CTA>
</>}
