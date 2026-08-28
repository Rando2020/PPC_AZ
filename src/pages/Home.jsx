import { ArrowRight, HandCoins, HeartHandshake, ShieldCheck, Sparkles, Stethoscope } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { practice, serviceCategories } from '../config/practice';
import { siteMedia } from '../config/media';
import { CTA } from '../components/UI';

const carePathIcons = { heart: ShieldCheck, sparkle: HeartHandshake, flower: HandCoins };

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
        src={siteMedia.home.hero.src}
        alt={siteMedia.home.hero.alt}
        style={{ objectPosition: siteMedia.home.hero.position }}
        fetchPriority="high"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.015 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduceMotion ? 0.2 : 0.75, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="editorial-hero__veil"/>
      <motion.div className="shell editorial-hero__content" variants={heroGroup} initial="hidden" animate="visible">
        <motion.span className="eyebrow" variants={heroItem}>Primary Care · Marana, Arizona</motion.span>
        <motion.h1 variants={heroItem}>Care that<br/><em>grows with you.</em></motion.h1>
        <motion.p variants={heroItem}>Patient-led primary care with Jennifer Carlile, MSN, FNP-BC, built around careful listening, clear choices, and care that can grow with your needs.</motion.p>
        <motion.div className="button-row" variants={heroItem}><a className="button" href="#/services">Explore Care & Services <ArrowRight size={17}/></a><a className="editorial-link" href="#/waitlist">Join the Waitlist <ArrowRight size={15}/></a></motion.div>
        <motion.p className="hero-launch-note" variants={heroItem}><span/> Opening details, care options, and enrollment terms are being finalized.</motion.p>
      </motion.div>
    </section>

    <section className="founder-proof" aria-label="Jennifer Carlile experience and local roots"><div className="shell founder-proof__grid">
      <div><strong>13+ years</strong><span>practicing as a Family Nurse Practitioner</span></div>
      <div><strong>10+ years</strong><span>serving Marana and Northwest Tucson</span></div>
      <div><strong>FNP-BC</strong><span>board-certified Family Nurse Practitioner</span></div>
      <a href="#/provider">Meet Jennifer <ArrowRight size={15}/></a>
    </div></section>

    <section className="section editorial-intro" data-reveal="up"><div className="shell editorial-intro__grid">
      <div className="editorial-intro__kicker"><Stethoscope/><span><small>DPC, in real life</small>Membership instead of visit-by-visit friction.</span></div>
      <div className="editorial-intro__body">
        <div className="editorial-intro__header">
          <h2>Care you don’t have to think twice about using.</h2>
          <p className="large-copy">Direct Primary Care is a monthly primary-care membership designed to make it easier to start with your relationship with Jennifer instead of first deciding whether another visit charge is worth it.</p>
        </div>
        <div className="values">
          <div><Stethoscope/><span><strong>“I woke up sick.”</strong>Start by reaching out. Jennifer can help determine whether the next step should be a message, visit, testing, treatment, or another level of care.</span></div>
          <div><HeartHandshake/><span><strong>“I have a medication question.”</strong>Not every question automatically needs another separately billed visit. Jennifer decides when an exam, monitoring, or additional evaluation is clinically needed.</span></div>
          <div><ShieldCheck/><span><strong>“I need imaging or a specialist.”</strong>Jennifer can evaluate the concern and coordinate an appropriate referral or test when clinically indicated. Outside services remain separate and may run through insurance.</span></div>
        </div>
        <p className="small"><strong>Individual DPC membership is ${practice.dpcIndividualStartingPrice}/month. A family of four is ${practice.dpcFamilyFourPrice}/month, plus ${practice.dpcAdditionalChildPrice} for each additional child.</strong> DPC does not replace health insurance for major medical care.</p>
        <div className="button-row"><a className="button button--ghost" href="#/dpc">See how DPC works <ArrowRight size={16}/></a><a className="editorial-link editorial-link--dark" href="#/dpc/pricing">See membership pricing <ArrowRight size={15}/></a></div>
      </div>
    </div></section>

    <section className="marana-scene" aria-labelledby="marana-scene-title" data-reveal="scene">
      <img
        src={siteMedia.home.maranaBanner.src}
        alt={siteMedia.home.maranaBanner.alt}
        style={{ objectPosition: siteMedia.home.maranaBanner.position }}
        loading="lazy"
        decoding="async"
      />
      <div className="marana-scene__shade"/>
      <div className="shell marana-scene__content">
        <span className="eyebrow">Local roots</span>
        <h2 id="marana-scene-title">Local care, shaped by the community.</h2>
        <p>Jennifer has spent more than 10 years caring for patients across the community.</p>
      </div>
    </section>

    <section className="care-paths" data-reveal="up"><div className="shell care-paths__layout">
      <div className="care-paths__heading"><span className="eyebrow">Three ways to access care</span><h2>Choose the care path that fits you.</h2><p>DPC is the relationship-focused membership option. Insurance-based primary care is also planned, while select cash-pay services are coming soon with no launch date set.</p></div>
      <div className="care-paths__list">{serviceCategories.map((item)=>{const Icon=carePathIcons[item.icon]||Stethoscope;return <a href={item.href || '#/services'} className="care-path" key={item.title}><span className="care-path__number"><Icon aria-hidden="true"/></span><div><small>{item.status}</small><h3>{item.title}</h3><p>{item.description}</p><b>{item.linkLabel || 'View care details'}</b></div><ArrowRight aria-hidden="true"/></a>})}</div>
    </div></section>

    <section className="local-story" data-reveal="split"><div className="shell local-story__grid">
      <div className="local-story__copy"><Sparkles/><span className="eyebrow">Growing close to home</span><h2>Personal care for the place we call home.</h2><p className="large-copy">Prickly Pear Care is being built for the community Jennifer already serves.</p><p>Practice location, insurance participation, and opening information are coming soon. Join the Waitlist for updates as plans are finalized.</p><a className="editorial-link editorial-link--dark" href="#/waitlist">Join the Waitlist <ArrowRight size={14}/></a></div>
      <figure className="local-story__photo"><img src={siteMedia.home.pricklyPearDetail.src} alt={siteMedia.home.pricklyPearDetail.alt} style={{ objectPosition: siteMedia.home.pricklyPearDetail.position }} loading="lazy" decoding="async"/></figure>
    </div></section>
    <CTA title="Be part of what grows next." action="Join the Waitlist" href="#/waitlist">Get opening, care-option, and enrollment updates. There is no commitment.</CTA>
  </>;
}
