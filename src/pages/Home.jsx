import { ArrowRight, Building2, HeartHandshake, ShieldCheck, Quote, Sparkles, Stethoscope } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { practice, serviceCategories } from '../config/practice';
import { CTA } from '../components/UI';
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
      <motion.div className="shell editorial-hero__content" variants={heroGroup} initial="hidden" animate="visible">
        <motion.span className="eyebrow" variants={heroItem}>Primary Care · Marana, Arizona</motion.span>
        <motion.h1 variants={heroItem}>Care that<br/><em>grows with you.</em></motion.h1>
        <motion.p variants={heroItem}>Patient-led primary care with Jennifer Carlile, MSN, FNP-BC, built around careful listening, clear choices, and care that can grow with your needs.</motion.p>
        <motion.div className="button-row" variants={heroItem}><a className="button" href="#/services">Explore Care & Services <ArrowRight size={17}/></a><a className="editorial-link" href="#/waitlist">Join the Waitlist <ArrowRight size={15}/></a></motion.div>
        <motion.p className="hero-launch-note" variants={heroItem}><span/> Opening details, care options, and enrollment terms are being finalized.</motion.p>
      </motion.div>
      <div className="hero-signature">Patient-led care in Southern Arizona</div>
    </section>

    <section className="founder-proof" aria-label="Jennifer Carlile experience and local roots"><div className="shell founder-proof__grid">
      <div><strong>13+ years</strong><span>practicing as a Family Nurse Practitioner</span></div>
      <div><strong>9+ years</strong><span>serving Marana and Northwest Tucson</span></div>
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
        <p className="small"><strong>Individual DPC membership pricing begins at ${practice.dpcIndividualStartingPrice}/month.</strong> Household pricing, final inclusions, access standards, and enrollment terms will be shown before enrollment. DPC does not replace health insurance for major medical care.</p>
        <div className="button-row"><a className="button button--ghost" href="#/dpc">See how DPC works <ArrowRight size={16}/></a><a className="editorial-link editorial-link--dark" href="#/faq">DPC questions <ArrowRight size={15}/></a></div>
      </div>
    </div></section>

    <section className="marana-scene" aria-labelledby="marana-scene-title" data-reveal="scene">
      <img src={`${import.meta.env.BASE_URL}images/marana-sunset.webp`} alt="A saguaro and flowering prickly pear overlooking the Sonoran Desert at sunset" loading="lazy" decoding="async"/>
      <div className="marana-scene__shade"/>
      <div className="shell marana-scene__content">
        <span className="eyebrow">Rooted in Marana</span>
        <h2 id="marana-scene-title">Local care, shaped by the community.</h2>
        <p>Jennifer has spent more than nine years caring for patients across Marana and Northwest Tucson.</p>
      </div>
    </section>

    <section className="care-paths" data-reveal="up"><div className="shell">
      <div className="care-paths__heading"><span className="eyebrow">Three ways to access care</span><h2>Choose the care path that fits you.</h2><p>DPC is the relationship-focused membership option. Insurance-based primary care and select cash-pay services give patients additional ways to access care as final participation, pricing, and availability are confirmed.</p></div>
      <div className="care-paths__list">{serviceCategories.map((item,i)=><a href={item.href || '#/services'} className="care-path" key={item.title}><span className="care-path__number">0{i+1}</span><div><small>{item.status}</small><h3>{item.title}</h3><p>{item.description}</p></div><ArrowRight/></a>)}</div>
    </div></section>

    <section className="section section--cream" data-reveal="up"><div className="shell split">
      <div>
        <span className="eyebrow">For local small businesses</span>
        <h2>Want to make primary care easier for your team?</h2>
        <p className="large-copy">Prickly Pear Care is exploring employer-sponsored DPC memberships for small businesses that want to help employees access relationship-based primary care through a predictable monthly benefit.</p>
        <p>This would sit alongside, not replace, major medical insurance. Final employer pricing, participation requirements, eligibility, and benefit structure are still being developed.</p>
        <div className="button-row"><a className="button" href="#/contact">Ask about employee DPC <ArrowRight size={16}/></a><a className="editorial-link editorial-link--dark" href="#/faq">Employer DPC questions <ArrowRight size={15}/></a></div>
      </div>
      <div className="values">
        <div><HeartHandshake/><span><strong>A benefit employees can actually use</strong>Help employees start with primary care when questions come up instead of waiting until a problem feels urgent.</span></div>
        <div><ShieldCheck/><span><strong>Works alongside health coverage</strong>DPC is primary care, not health insurance. Employees can still use major medical coverage for care outside the membership.</span></div>
        <div><Building2/><span><strong>Built around your team</strong>Prickly Pear can explore an employer contribution or sponsored membership structure once business terms and capacity are finalized.</span></div>
      </div>
    </div></section>

    <section className="founder-note" data-reveal="split"><div className="shell founder-note__grid">
      <div className="founder-note__mark" aria-hidden="true"><PricklyPearBloom/><span>Care is personal here.</span><small>Rooted in Marana</small></div>
      <div>
        <span className="eyebrow">Founder · CEO · Family Nurse Practitioner</span>
        <h2>A provider you can know. A practice built with purpose.</h2>
        <p className="large-copy">Prickly Pear Care is built around patient-led care, with your questions, priorities, and goals shaping the conversation.</p>
        <Quote className="founder-note__quote-icon"/>
        <blockquote>“My goal is to create the kind of care experience where you feel comfortable asking questions, supported in your choices, and confident in what comes next.”</blockquote>
        <div className="founder-note__byline"><span/><p><strong>Jennifer Carlile, MSN, FNP-BC</strong>Founder & Family Nurse Practitioner</p></div>
        <a className="editorial-link editorial-link--dark" href="#/provider">Meet Jennifer <ArrowRight size={15}/></a>
      </div>
    </div></section>

    <section className="local-story" data-reveal="split"><div className="shell local-story__grid">
      <div className="local-story__copy"><Sparkles/><span className="eyebrow">Growing close to home</span><h2>Personal care for the place we call home.</h2><p className="large-copy">{practice.serviceArea}</p><p>Practice location, membership details, insurance participation, and opening information are coming soon. Join the Waitlist for updates as plans are finalized.</p><a className="editorial-link editorial-link--dark" href="#/waitlist">Join the Waitlist <ArrowRight size={14}/></a></div>
      <figure className="local-story__photo"><img src={`${import.meta.env.BASE_URL}images/prickly-pear-bloom.webp`} alt="Flowering prickly pear cactus in the Sonoran Desert at sunset" loading="lazy" decoding="async"/></figure>
    </div></section>
    <CTA title="Be part of what grows next." action="Join the Waitlist" href="#/waitlist">Get opening, care-option, and enrollment updates. There is no commitment.</CTA>
  </>;
}
