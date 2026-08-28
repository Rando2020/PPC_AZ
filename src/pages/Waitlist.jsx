import { useEffect, useState } from 'react';
import { ArrowRight, BellRing, Check, CreditCard, HeartHandshake, LockKeyhole, MapPin, Send, ShieldCheck, Sparkles, WalletCards } from 'lucide-react';
import { PageHero } from '../components/Layout';
import { Notice } from '../components/UI';
import { practice } from '../config/practice';
import '../waitlist.css';

const carePaths = [
  {
    value: 'Direct Primary Care membership',
    eyebrow: 'Launch focus',
    title: 'DPC Membership',
    description: 'One recurring monthly membership for the primary-care services included in the plan, built around an ongoing relationship with Jennifer.',
    note: `Individual membership is $${practice.dpcIndividualStartingPrice}/month. A family of four is $${practice.dpcFamilyFourPrice}/month, with each additional child $${practice.dpcAdditionalChildPrice}/month. Final inclusions, access terms, and HSA information will be published before enrollment opens.`,
    icon: HeartHandshake,
    featured: true,
  },
  {
    value: 'Insurance-based primary care',
    eyebrow: 'Traditional payment path',
    title: 'Insurance-Based Care',
    description: 'Use a participating health plan for covered primary-care services, with applicable copays, deductible, or coinsurance.',
    note: 'Final insurance participation will be confirmed before care begins.',
    icon: ShieldCheck,
  },
  {
    value: 'Select cash-pay services',
    eyebrow: 'Coming soon',
    title: 'Cash-Pay Services · Coming Soon',
    description: 'Select services may be offered later at transparent prices outside a membership or insurance billing pathway.',
    note: 'The service list, pricing, and launch date have not been finalized.',
    icon: WalletCards,
  },
];

const interestOptions = ['Direct Primary Care', 'General primary care updates', 'Future weight management updates', 'Future hormone support updates', 'Other future services / not sure yet'];
const consentVersion = 'waitlist-2026-08';
const jotformId = (import.meta.env.VITE_JOTFORM_WAITLIST_FORM_ID || '').trim();

function getWaitlistSource(){
  try { return sessionStorage.getItem('ppc_waitlist_source') || 'direct'; }
  catch { return 'direct'; }
}

function DPCWaitlistFramework(){
  return <section className="waitlist-framework" aria-labelledby="waitlist-framework-title">
    <div className="shell">
      <header className="waitlist-framework__heading">
        <span className="eyebrow">One practice. Three ways to access care.</span>
        <h2 id="waitlist-framework-title">You do not have to choose today.</h2>
        <p className="large-copy">The waitlist is the on-ramp. DPC is the relationship-focused membership option, while insurance-based primary care is another planned pathway. Select cash-pay services are coming soon, with no launch date set.</p>
      </header>

      <div className="waitlist-framework__grid">
        {carePaths.map(path=>{
          const Icon=path.icon;
          return <article className={`waitlist-path ${path.featured?'waitlist-path--featured':''}`} key={path.title}>
            {path.featured&&<span className="waitlist-path__flag">DPC launch focus</span>}
            <Icon aria-hidden="true"/>
            <span className="eyebrow">{path.eyebrow}</span>
            <h3>{path.title}</h3>
            <p>{path.description}</p>
            <small>{path.note}</small>
            {path.featured&&<a href="#/dpc" className="editorial-link editorial-link--dark">Understand DPC <ArrowRight size={15}/></a>}
          </article>;
        })}
      </div>

      <div className="waitlist-onramp" aria-label="How DPC enrollment will work">
        <div className="waitlist-onramp__intro">
          <span className="eyebrow">The DPC on-ramp</span>
          <h2>Think membership, not another visit-by-visit transaction.</h2>
          <p>Joining the waitlist keeps you close to launch and enrollment updates. Current DPC pricing is shown now, and the final service inclusions, access expectations, and enrollment terms will be available before you make a commitment.</p>
        </div>
        <ol>
          <li><span>01</span><div><strong>Join the waitlist</strong><p>Share only the contact information needed for launch updates. No payment today.</p></div></li>
          <li><span>02</span><div><strong>Review the exact membership</strong><p>See the published price, what is included, what is outside the membership, access expectations, and HSA information if the final structure qualifies.</p></div></li>
          <li><span>03</span><div><strong>Choose and enroll securely</strong><p>When enrollment opens, decide whether DPC or available insurance-based care fits you best. Cash-pay services can be considered after they are announced.</p></div></li>
        </ol>
        <p className="waitlist-onramp__note"><CreditCard aria-hidden="true"/> Joining the waitlist does not create a membership, charge a card, establish a patient relationship, or reserve an appointment.</p>
      </div>
    </div>
  </section>;
}

function SecureWaitlistForm(){
  useEffect(()=>{
    const initialize=()=>window.jotformEmbedHandler?.(`#JotFormIFrame-${jotformId}`,'https://form.jotform.com/');
    const existing=document.querySelector('script[data-jotform-embed]');
    if(existing){initialize();return}
    const script=document.createElement('script');
    script.src='https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
    script.async=true;
    script.dataset.jotformEmbed='true';
    script.onload=initialize;
    document.body.appendChild(script);
  },[]);

  return <div className="waitlist-form waitlist-form--embedded">
    <div className="secure-form-note"><LockKeyhole/><span><strong>Secure waitlist registration</strong>Your information is submitted directly to Prickly Pear Care’s protected form system.</span></div>
    <iframe
      id={`JotFormIFrame-${jotformId}`}
      title="Prickly Pear Care waitlist registration"
      src={`https://form.jotform.com/${jotformId}?embedded=true&source=pricklypearcareaz.org`}
      loading="lazy"
      scrolling="no"
      allow="fullscreen"
    />
    <noscript><p>JavaScript is required for the secure waitlist form. Email <a href={`mailto:${practice.email}`}>{practice.email}</a> for assistance.</p></noscript>
  </div>;
}

export default function Waitlist(){
  const [done,setDone]=useState(false);
  const [data,setData]=useState({
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
    zip:'',
    carePath:'',
    dpcPeopleCount:0,
    interests:[],
    hsaUpdates:false,
    consent:false,
  });

  const update=e=>setData(current=>({...current,[e.target.name]:e.target.type==='checkbox'?e.target.checked:e.target.value}));
  const updateCarePath=e=>setData(current=>({
    ...current,
    carePath:e.target.value,
    dpcPeopleCount:e.target.value==='Direct Primary Care membership'?current.dpcPeopleCount:0,
    hsaUpdates:e.target.value==='Direct Primary Care membership'?current.hsaUpdates:false,
  }));
  const changeDpcPeopleCount=delta=>setData(current=>({...current,dpcPeopleCount:Math.max(0,current.dpcPeopleCount+delta)}));
  const toggleInterest=option=>setData(current=>({...current,interests:current.interests.includes(option)?current.interests.filter(item=>item!==option):[...current.interests,option]}));

  function submit(e){
    e.preventDefault();
    const name=`${data.firstName} ${data.lastName}`;
    const source=getWaitlistSource();
    const body=[
      'Prickly Pear Care Waitlist registration',
      '',
      `Name: ${name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone||'Not provided'}`,
      `ZIP code: ${data.zip||'Not provided'}`,
      `Care path interest: ${data.carePath||'Not provided'}`,
      `People likely needing DPC membership: ${data.carePath==='Direct Primary Care membership'?(data.dpcPeopleCount||'Not provided'):'Not applicable'}`,
      `Interested in HSA information if the final DPC structure qualifies: ${data.hsaUpdates?'Yes':'No / not selected'}`,
      `Interested in updates about: ${data.interests.length?data.interests.join(', '):'Not provided'}`,
      `Website source: ${source}`,
      `Consent version: ${consentVersion}`,
      `Prepared at: ${new Date().toISOString()}`,
      '',
      'I understand this is a non-binding expression of interest. It does not establish a provider-patient relationship, guarantee enrollment or an appointment, or provide medical advice. I agree to receive launch-related communications from Prickly Pear Care.'
    ].join('\n');
    setDone(true);
    window.location.assign(`mailto:${practice.email}?subject=${encodeURIComponent(`Prickly Pear Care Waitlist - ${name}`)}&body=${encodeURIComponent(body)}`);
  }

  if(!jotformId&&done)return <><PageHero eyebrow="Join the Waitlist" title="Almost there.">Your email app should open with your registration ready to review.</PageHero><section className="section"><div className="shell narrow centered"><div className="success-mark"><Check/></div><h2>Send the prepared email to complete your registration.</h2><p>After you press Send, Prickly Pear Care can use your contact information for opening and enrollment updates. Joining the waitlist does not create a membership, guarantee enrollment, or reserve an appointment.</p><div className="waitlist-next"><span className="eyebrow">While you’re here</span><div className="button-row centered-row"><a className="button" href="#/provider">Meet Jennifer</a><a className="button button--ghost" href="#/dpc">Understand DPC</a></div></div></div></section></>;

  return <>
    <PageHero eyebrow="Join the Waitlist" title="Your on-ramp to Prickly Pear Care.">Get opening updates for DPC membership and insurance-based primary care, plus announcements about cash-pay services coming soon. DPC is the launch focus, but you do not need to choose a care path or pay anything today.</PageHero>
    <DPCWaitlistFramework/>
    <section className="section waitlist-section"><div className="shell waitlist-layout">
      <div className="waitlist-copy">
        <span className="eyebrow">A simple first step</span>
        <h2>Stay close to what comes next.</h2>
        <p className="large-copy">Your name and email are enough to join. The goal is to make the care options easy to compare before you decide what to enroll in.</p>
        <div className="waitlist-points">
          <div><BellRing/><span><strong>Get the important details</strong>Hear when opening, enrollment, insurance participation, or scheduling information is ready.</span></div>
          <div><MapPin/><span><strong>Help shape the launch</strong>Optional preferences can help Jennifer understand local demand without asking for medical information.</span></div>
          <div><Sparkles/><span><strong>No obligation</strong>The waitlist is not enrollment and does not reserve or guarantee an appointment.</span></div>
        </div>
      </div>

      {jotformId?<SecureWaitlistForm/>:<form className="waitlist-form" onSubmit={submit}>
        <div><span className="eyebrow">Join the Waitlist</span><h2>Keep me updated</h2><p>Only your name, email, and consent are required. Do not include medical details.</p></div>
        <div className="field-row"><label>First name<input required name="firstName" value={data.firstName} onChange={update} autoComplete="given-name"/></label><label>Last name<input required name="lastName" value={data.lastName} onChange={update} autoComplete="family-name"/></label></div>
        <label>Email<input required type="email" name="email" value={data.email} onChange={update} autoComplete="email"/></label>

        <fieldset className="waitlist-fieldset">
          <legend>Which care path are you most interested in? <small>Optional</small></legend>
          <div className="waitlist-options waitlist-options--paths">
            {[...carePaths.map(path=>path.value),'I am not sure yet'].map(option=><label className="waitlist-option" key={option}><input type="radio" name="carePath" value={option} checked={data.carePath===option} onChange={updateCarePath}/><span>{option}</span></label>)}
          </div>
        </fieldset>

        {data.carePath==='Direct Primary Care membership'&&<div className="waitlist-dpc-household">
          <span className="eyebrow">DPC membership interest</span>
          <fieldset className="waitlist-fieldset">
            <legend>How many people would likely need care? <small>Optional</small></legend>
            <p>Use the buttons to estimate how many people may need DPC membership. Leave it at 0 if you are not sure yet.</p>
            <div className="waitlist-people-stepper" role="group" aria-label="Number of people who may need DPC membership">
              <button type="button" onClick={()=>changeDpcPeopleCount(-1)} disabled={data.dpcPeopleCount===0} aria-label="Decrease number of people">−</button>
              <output className="waitlist-people-stepper__count" aria-live="polite" aria-atomic="true">{data.dpcPeopleCount}</output>
              <button type="button" onClick={()=>changeDpcPeopleCount(1)} aria-label="Increase number of people">+</button>
            </div>
            <p className="waitlist-people-stepper__label">{data.dpcPeopleCount===0?'Not specified yet':`${data.dpcPeopleCount} ${data.dpcPeopleCount===1?'person':'people'} likely needing care`}</p>
            <div className="waitlist-membership-preview" aria-live="polite">
              {data.dpcPeopleCount===0&&<><strong>Individual ${practice.dpcIndividualStartingPrice}/month · Family of four ${practice.dpcFamilyFourPrice}/month</strong><span>Each additional child is +${practice.dpcAdditionalChildPrice}/month.</span></>}
              {data.dpcPeopleCount===1&&<><strong>1 person · ${practice.dpcIndividualStartingPrice}/month</strong><span>Individual DPC membership.</span></>}
              {data.dpcPeopleCount>1&&data.dpcPeopleCount<4&&<><strong>{data.dpcPeopleCount}-person household</strong><span>Individual membership is ${practice.dpcIndividualStartingPrice}/month. Family-of-four membership is ${practice.dpcFamilyFourPrice}/month. The practice can confirm which published membership structure fits your household before enrollment.</span></>}
              {data.dpcPeopleCount===4&&<><strong>Family of four · ${practice.dpcFamilyFourPrice}/month</strong><span>Published family membership price.</span></>}
              {data.dpcPeopleCount>4&&<><strong>Family of four · ${practice.dpcFamilyFourPrice}/month</strong><span>Each additional child is +${practice.dpcAdditionalChildPrice}/month. Because this counter records total people rather than adult/child makeup, the exact total depends on how many people beyond four are additional children.</span></>}
            </div>
          </fieldset>
          <label className="waitlist-consent waitlist-hsa-interest"><input type="checkbox" name="hsaUpdates" checked={data.hsaUpdates} onChange={update}/><span>Send me information about using an HSA if Prickly Pear Care’s final DPC membership structure qualifies.</span></label>
        </div>}

        <details className="waitlist-planning-details">
          <summary>Optional: help Jennifer plan the practice</summary>
          <div className="waitlist-planning-details__body">
            <p>Skip anything you do not want to answer. These preferences are for planning and updates only and do not mean a future service is currently available.</p>
            <div className="field-row"><label>Phone <small>Optional</small><input type="tel" name="phone" value={data.phone} onChange={update} autoComplete="tel"/></label><label>ZIP code <small>Optional</small><input inputMode="numeric" name="zip" value={data.zip} onChange={update} autoComplete="postal-code" maxLength="10"/></label></div>
            <fieldset className="waitlist-fieldset"><legend>What would you like updates about? <small>Optional</small></legend><div className="waitlist-interest-grid">{interestOptions.map(option=><label className="waitlist-interest" key={option}><input type="checkbox" checked={data.interests.includes(option)} onChange={()=>toggleInterest(option)}/><span>{option}</span></label>)}</div></fieldset>
          </div>
        </details>

        <label className="waitlist-consent"><input required type="checkbox" name="consent" checked={data.consent} onChange={update}/><span>I understand this is a non-binding expression of interest. It does not establish a provider-patient relationship, create a DPC membership, guarantee enrollment or an appointment, or provide medical advice. I agree to receive launch-related communications from Prickly Pear Care.</span></label>
        <Notice><LockKeyhole/> Do not enter symptoms, diagnoses, medications, or other medical information. For an emergency, call 911.</Notice>
        <button className="button waitlist-submit" type="submit">Join the Waitlist <Send size={17}/></button>
        <p className="waitlist-helper">Your email app will open with a prepared message. Review it and press Send to complete your registration.</p>
      </form>}
    </div></section>
  </>;
}
