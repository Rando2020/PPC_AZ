import { Portrait } from '../components/Brand';
import { CTA } from '../components/UI';
import { practice } from '../config/practice';
import './provider.css';

const providerProof = [
  ['13+ years', 'practicing as a Family Nurse Practitioner'],
  ['9+ years', 'serving Marana and Northwest Tucson'],
  ['FNP-BC', 'board-certified Family Nurse Practitioner'],
];

export default function Provider(){
  const professionalBio = practice.provider.bio.slice(0,3);
  const personalBio = practice.provider.bio[3];
  const closingBio = practice.provider.bio[4];

  return <>
    <section className="section provider-profile">
      <div className="shell">
        <div className="provider-profile__content">
          <div className="provider-profile__visual">
            <Portrait/>
            <div className="provider-proof" aria-label="Jennifer Carlile qualifications and experience">
              {providerProof.map(([value,label])=><div key={value}><strong>{value}</strong><span>{label}</span></div>)}
            </div>
          </div>
          <div className="provider-bio provider-bio--side">
            <header className="provider-profile__header">
              <h1>{practice.provider.name}</h1>
              <p className="credential">{practice.provider.credentials}</p>
            </header>
            {professionalBio.map((paragraph,i)=><p className={i===0?'provider-bio__lead':''} key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>
    </section>

    <section className="section provider-local-story" aria-labelledby="provider-local-story-title">
      <div className="shell provider-local-story__frame">
        <figure className="provider-local-story__image">
          <img src={`${import.meta.env.BASE_URL}images/marana-local-story.webp`} alt="A desert trail winding through saguaro cacti at sunset near Marana, Arizona" loading="lazy" decoding="async"/>
        </figure>
        <div className="provider-local-story__copy">
          <span className="eyebrow">Rooted in the community</span>
          <h2 id="provider-local-story-title">A provider who already knows Marana.</h2>
          <p className="large-copy">Jennifer has spent more than nine years caring for patients in Marana and Northwest Tucson. Prickly Pear Care is a more personal next chapter in that same community.</p>
          <p>{closingBio}</p>
          <div className="provider-local-story__personal">
            <span>Outside the office</span>
            <p>{personalBio}</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section section--olive" aria-labelledby="provider-philosophy-title">
      <div className="shell">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Her approach to care</span>
            <h2 id="provider-philosophy-title">Patient-led care, in practice.</h2>
          </div>
          <p>Jennifer brings the clinical expertise. You bring your story, priorities, questions, and goals. The plan should make sense to both of you.</p>
        </div>
        <div className="three-col">
          <article><span>01</span><h3>Listen first</h3><p>Start with what is changing, what matters to you, and what you need from the visit.</p></article>
          <article><span>02</span><h3>Make it clear</h3><p>Understand the clinical reasoning, options, tradeoffs, and next steps without unnecessary jargon.</p></article>
          <article><span>03</span><h3>Decide together</h3><p>Leave with a practical plan shaped by medical evidence and your real life.</p></article>
        </div>
      </div>
    </section>

    <CTA title="Start with what matters to you." href="#/waitlist" action="Join the Waitlist">Get opening and enrollment updates. There is no commitment.</CTA>
  </>;
}
