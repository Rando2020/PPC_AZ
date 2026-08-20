import { useEffect, useState } from 'react';
import { BellRing, Check, LockKeyhole, MapPin, Send, Sparkles } from 'lucide-react';
import { PageHero } from '../components/Layout';
import { Notice } from '../components/UI';
import { practice } from '../config/practice';

const careModes = ['In-person care in Marana', 'Telehealth, if offered', 'Either option works for me'];
const timeframes = ['As soon as care is available', 'Within the first three months', 'I am exploring future options'];
const interestOptions = ['Direct Primary Care', 'General primary care updates', 'Future weight management updates', 'Future hormone support updates', 'Other future services / not sure yet'];
const consentVersion = 'waitlist-2026-08';
const jotformId = (import.meta.env.VITE_JOTFORM_WAITLIST_FORM_ID || '').trim();

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
  const [data,setData]=useState({firstName:'',lastName:'',email:'',phone:'',zip:'',careMode:'',timeframe:'',interests:[],consent:false});
  const update=e=>setData({...data,[e.target.name]:e.target.type==='checkbox'?e.target.checked:e.target.value});
  const toggleInterest=option=>setData(current=>({...current,interests:current.interests.includes(option)?current.interests.filter(item=>item!==option):[...current.interests,option]}));

  function submit(e){
    e.preventDefault();
    const name=`${data.firstName} ${data.lastName}`;
    const body=[
      'Prickly Pear Care Waitlist registration',
      '',
      `Name: ${name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone||'Not provided'}`,
      `ZIP code: ${data.zip||'Not provided'}`,
      `Care preference: ${data.careMode||'Not provided'}`,
      `Preferred timeframe: ${data.timeframe||'Not provided'}`,
      `Interested in updates about: ${data.interests.length?data.interests.join(', '):'Not provided'}`,
      `Consent version: ${consentVersion}`,
      `Prepared at: ${new Date().toISOString()}`,
      '',
      'I understand this is a non-binding expression of interest. It does not establish a provider-patient relationship, guarantee enrollment or an appointment, or provide medical advice. I agree to receive launch-related communications from Prickly Pear Care.'
    ].join('\n');
    setDone(true);
    window.location.assign(`mailto:${practice.email}?subject=${encodeURIComponent(`Prickly Pear Care Waitlist - ${name}`)}&body=${encodeURIComponent(body)}`);
  }

  if(!jotformId&&done)return <><PageHero eyebrow="Join the Waitlist" title="Almost there.">Your email app should open with your registration ready to review.</PageHero><section className="section"><div className="shell narrow centered"><div className="success-mark"><Check/></div><h2>Send the prepared email to complete your registration.</h2><p>After you press Send, Prickly Pear Care can use your contact information for opening and DPC enrollment updates. Joining the Waitlist does not guarantee enrollment or an appointment.</p><div className="waitlist-next"><span className="eyebrow">While you’re here</span><div className="button-row centered-row"><a className="button" href="#/provider">Meet Jennifer</a><a className="button button--ghost" href="#/dpc">Understand DPC</a></div></div></div></section></>;

  return <>
    <PageHero eyebrow="Join the Waitlist" title="Interested in DPC with Jennifer?">Join the Prickly Pear Care Waitlist for opening information, finalized membership details, and enrollment updates. No payment. No commitment. No appointment is created today.</PageHero>
    <section className="section waitlist-section"><div className="shell waitlist-layout">
      <div className="waitlist-copy">
        <span className="eyebrow">A simple first step</span>
        <h2>Stay close to what comes next.</h2>
        <p className="large-copy">Your name and email are enough to join. A few optional questions can also help Jennifer understand what the community is looking for as the practice grows.</p>
        <div className="waitlist-points">
          <div><BellRing/><span><strong>Get the important details</strong>Hear when opening, DPC membership, enrollment, or scheduling information is ready.</span></div>
          <div><MapPin/><span><strong>Help shape the launch</strong>Optional preferences can help Jennifer understand local demand without asking for medical information.</span></div>
          <div><Sparkles/><span><strong>No obligation</strong>Joining the Waitlist is not enrollment and does not reserve or guarantee an appointment.</span></div>
        </div>
      </div>

      {jotformId?<SecureWaitlistForm/>:<form className="waitlist-form" onSubmit={submit}>
        <div><span className="eyebrow">Join the Waitlist</span><h2>Keep me updated</h2><p>Only your name, email, and consent are required. Do not include medical details.</p></div>
        <div className="field-row"><label>First name<input required name="firstName" value={data.firstName} onChange={update} autoComplete="given-name"/></label><label>Last name<input required name="lastName" value={data.lastName} onChange={update} autoComplete="family-name"/></label></div>
        <label>Email<input required type="email" name="email" value={data.email} onChange={update} autoComplete="email"/></label>

        <div className="waitlist-optional-intro"><span className="eyebrow">Optional: help Jennifer plan the practice</span><p>Skip any question you do not want to answer. These preferences are for planning and updates only. They do not mean a future service is currently available.</p></div>

        <div className="field-row"><label>Phone <small>Optional</small><input type="tel" name="phone" value={data.phone} onChange={update} autoComplete="tel"/></label><label>ZIP code <small>Optional</small><input inputMode="numeric" name="zip" value={data.zip} onChange={update} autoComplete="postal-code" maxLength="10"/></label></div>

        <fieldset className="waitlist-fieldset"><legend>How would you prefer to receive care? <small>Optional</small></legend><div className="waitlist-options">{careModes.map(option=><label className="waitlist-option" key={option}><input type="radio" name="careMode" value={option} checked={data.careMode===option} onChange={update}/><span>{option}</span></label>)}</div></fieldset>

        <label>When are you interested? <small>Optional</small><select name="timeframe" value={data.timeframe} onChange={update}><option value="">Select if you’d like</option>{timeframes.map(option=><option key={option}>{option}</option>)}</select></label>

        <fieldset className="waitlist-fieldset"><legend>What would you like updates about? <small>Optional</small></legend><div className="waitlist-interest-grid">{interestOptions.map(option=><label className="waitlist-interest" key={option}><input type="checkbox" checked={data.interests.includes(option)} onChange={()=>toggleInterest(option)}/><span>{option}</span></label>)}</div></fieldset>

        <label className="waitlist-consent"><input required type="checkbox" name="consent" checked={data.consent} onChange={update}/><span>I understand this is a non-binding expression of interest. It does not establish a provider-patient relationship, guarantee enrollment or an appointment, or provide medical advice. I agree to receive launch-related communications from Prickly Pear Care.</span></label>
        <Notice><LockKeyhole/> Do not enter symptoms, diagnoses, medications, or other medical information. For an emergency, call 911.</Notice>
        <button className="button waitlist-submit" type="submit">Join the Waitlist <Send size={17}/></button>
        <p className="waitlist-helper">Your email app will open with a prepared message. Review it and press Send to complete your registration.</p>
      </form>}
    </div></section>
  </>;
}
