import { ArrowRight, HeartHandshake, ShieldCheck, Sprout, Quote, Sparkles, Stethoscope } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { practice, serviceCategories } from '../config/practice';
import { CTA } from '../components/UI';
import { PatientLedJourney } from '../components/PatientLedJourney';
import { PricklyPearBloom } from '../components/PricklyPearBloom';

export default function Home(){
  const reduceMotion = useReducedMotion();
  const heroItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0.2 : 0.58, ease: [0.22, 1, 0.36, 1] } },
  };
  const heroGroup = {
    hidden: {},
    visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.08, delayChildren: reduceMotion ? 0 : 0.06 } },
  };

  return <>
    <section className="editorial-hero">
      <motion.img
        className="editorial-hero__image"
        src={`${import.meta.env.BASE_URL}images/jennifer-hero.webp`}
        alt="Jennifer Carlile seated in a warm, welcoming care setting"
        fetchPriority="high"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.015 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0.2 : 0.75, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="editorial-hero__veil"/>
      <PricklyPearBloom className="editorial-hero__bloom" />
      <motion.div className="shell editorial-hero__content" variants={heroGroup} initial="hidden" animate="visible">
        <motion.span className="eyebrow" variants={heroItem}>Direct Primary Care · Marana, Arizona</motion.span>
        <motion.h1 variants={heroItem}>Care that<br/><em>grows with you.</em></motion.h1>
        <motion.p variants={heroItem}>Patient-led primary care with Jennifer Carlile, MSN, FNP-BC, built around careful listening, clear choices, and care that can grow with your needs.</motion.p>
        <motion.div className="button-row" variants={heroItem}><a className="button" href="#/dpc">Explore Direct Primary Care <ArrowRight size={17}/></a><a className="editorial-link" href="#/waitlist">Join the Waitlist <ArrowRight size={15}/></a></motion.div>
        <motion.p className="hero-launch-note" variants={heroItem}><span/> Opening details and DPC membership terms are being finalized.</motion.p>
      </motion.div>
      <div className="hero-signature">Patient-led care in Southern Arizona</div>
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
          <p className="large-copy">Patient-led care means Jennifer starts with what matters to you, then adds clinical context so you can make informed choices and leave with a practical plan.</p>
        </div>
        <PatientLedJourney />
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
      <div className="care-paths__heading"><span className="eyebrow">Care that can grow</span><h2>DPC first. Focused programs as the practice expands.</h2><p>Direct Primary Care is the launch focus. Weight management, hormone support, and other focused programs are planned for later and will only be listed as available once Jennifer confirms the details.</p></div>
      <div className="care-paths__list">{serviceCategories.map((item,i)=><a href={item.href || '#/services'} className="care-path" key={item.title}><span className="care-path__number">0{i+1}</span><div><small>{item.status}</small><h3>{item.title}</h3><p>{item.description}</p></div><ArrowRight/></a>)}</div>
    </div></section>

    <section className="founder-note" data-reveal="split"><div className="shell founder-note__grid">
      <figure className="founder-note__photo"><img src={`${import.meta.env.BASE_URL}images/consultation-detail.webp`} alt="A nurse practitioner listening during a patient conversation"/><figcaption>Care is personal here.</figcaption></figure>
      <div><Quote className="founder-note__quote-icon"/><blockquote>“My goal is to create the kind of care experience where you feel comfortable asking questions, supported in your choices, and confident in what comes next.”</blockquote><div className="founder-note__byline"><span/><p><strong>Jennifer Carlile, MSN, FNP-BC</strong>Founder & Family Nurse Practitioner</p></div><a className="editorial-link editorial-link--dark" href="#/provider">Read Jennifer’s story <ArrowRight size={15}/></a></div>
    </div></section>

    <section className="local-story" data-reveal="split"><div className="shell local-story__grid">
      <div className="local-story__copy"><Sparkles/><span className="eyebrow">Growing close to home</span><h2>Personal care for the place we call home.</h2><p className="large-copy">{practice.serviceArea}</p><p>Practice location, membership details, and opening information are coming soon. Join the interest list for updates as plans are finalized.</p><a className="editorial-link editorial-link--dark" href="#/waitlist">Join the interest list <ArrowRight size={14}/></a></div>
      <figure className="local-story__photo"><img src={`${import.meta.env.BASE_URL}images/prickly-pear-bloom.webp`} alt="Flowering prickly pear cactus in the Sonoran Desert at sunset" loading="lazy"/></figure>
    </div></section>
    <CTA title="Be part of what grows next." action="Join the Waitlist" href="#/waitlist">Tell Jennifer what kind of care would serve you best and receive opening updates. There is no commitment.</CTA>
  </>;
}
