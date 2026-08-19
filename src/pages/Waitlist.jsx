import { useEffect, useState } from 'react';
import { BellRing, Check, LockKeyhole, MapPin, Send, Video } from 'lucide-react';
import { PageHero } from '../components/Layout';
import { Notice } from '../components/UI';
import { practice } from '../config/practice';

const careModes = ['In-person care in Marana', 'Telehealth, when available', 'Either option works for me'];
const timeframes = ['As soon as care is available', 'Within the first three months', 'I am exploring future options'];
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
      title="Prickly Pear Care patient interest registration"
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
  const [data,setData]=useState({firstName:'',lastName:'',email:'',phone:'',zip:'',careMode:careModes[2],timeframe:timeframes[0],consent:false});
  const update=e=>setData({...data,[e.target.name]:e.target.type==='checkbox'?e.target.checked:e.target.value});

  function submit(e){
    e.preventDefault();
    const name=`${data.firstName} ${data.lastName}`;
    const body=[
      'Prickly Pear Care patient interest registration',
      '',
      `Name: ${name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone||'Not provided'}`,
      `ZIP code: ${data.zip||'Not provided'}`,
      `Care preference: ${data.careMode}`,
      `Preferred timeframe: ${data.timeframe}`,
      `Consent version: ${consentVersion}`,
      `Prepared at: ${new Date().toISOString()}`,
      '',
      'I understand this is a non-binding expression of interest. It does not establish a provider-patient relationship, guarantee enrollment or an appointment, or provide medical advice. I agree to receive launch-related communications from Prickly Pear Care.'
    ].join('\n');
    setDone(true);
    window.location.assign(`mailto:${practice.email}?subject=${encodeURIComponent(`Patient interest registration - ${name}`)}&body=${encodeURIComponent(body)}`);
  }

  if(!jotformId&&done)return <><PageHero eyebrow="Patient interest list" title="One final step.">Your email app should open with your registration ready to review.</PageHero><section className="section"><div className="shell narrow centered"><div className="success-mark"><Check/></div><h2>Send the email to complete your registration.</h2><p>Once sent, Prickly Pear Care can contact you with opening, availability, and telehealth updates. Joining the list does not guarantee enrollment or an appointment.</p><a className="button" href="#/">Return Home</a></div></section></>;

  return <>
    <PageHero eyebrow="Patient interest list" title="Be among the first to know when care opens.">Share your interest in Prickly Pear Care’s Marana practice and future telehealth services. There is no commitment, and no appointment is created today.</PageHero>
    <section className="section waitlist-section"><div className="shell waitlist-layout">
      <div className="waitlist-copy">
        <span className="eyebrow">A non-binding expression of interest</span>
        <h2>Help Jennifer plan care around the community.</h2>
        <p className="large-copy">Your response helps estimate interest in local and virtual care while the practice’s opening plans are finalized.</p>
        <div className="waitlist-points">
          <div><BellRing/><span><strong>Receive launch updates</strong>Hear when registration, scheduling, or new information becomes available.</span></div>
          <div><MapPin/><span><strong>Share your preference</strong>Tell us whether in-person care, telehealth, or either option would work for you.</span></div>
          <div><Video/><span><strong>No obligation</strong>Joining is not enrollment and does not reserve or guarantee an appointment.</span></div>
        </div>
      </div>

      {jotformId?<SecureWaitlistForm/>:<form className="waitlist-form" onSubmit={submit}>
        <div><span className="eyebrow">Join the list</span><h2>Patient interest registration</h2><p>Fields marked required help Jennifer send the right launch information. Do not include medical details.</p></div>
        <div className="field-row"><label>First name<input required name="firstName" value={data.firstName} onChange={update} autoComplete="given-name"/></label><label>Last name<input required name="lastName" value={data.lastName} onChange={update} autoComplete="family-name"/></label></div>
        <label>Email<input required type="email" name="email" value={data.email} onChange={update} autoComplete="email"/></label>
        <div className="field-row"><label>Phone <small>Optional</small><input type="tel" name="phone" value={data.phone} onChange={update} autoComplete="tel"/></label><label>ZIP code <small>Optional</small><input inputMode="numeric" name="zip" value={data.zip} onChange={update} autoComplete="postal-code" maxLength="10"/></label></div>

        <fieldset className="waitlist-fieldset"><legend>How would you prefer to receive care?</legend><div className="waitlist-options">{careModes.map(option=><label className="waitlist-option" key={option}><input type="radio" name="careMode" value={option} checked={data.careMode===option} onChange={update}/><span>{option}</span></label>)}</div></fieldset>

        <label>When are you interested?<select name="timeframe" value={data.timeframe} onChange={update}>{timeframes.map(option=><option key={option}>{option}</option>)}</select></label>

        <label className="waitlist-consent"><input required type="checkbox" name="consent" checked={data.consent} onChange={update}/><span>I understand this is a non-binding expression of interest. It does not establish a provider-patient relationship, guarantee enrollment or an appointment, or provide medical advice. I agree to receive launch-related communications from Prickly Pear Care.</span></label>
        <Notice><LockKeyhole/> Do not enter symptoms, diagnoses, medications, or other medical information. For an emergency, call 911.</Notice>
        <button className="button waitlist-submit" type="submit">Prepare Registration Email <Send size={17}/></button>
        <p className="waitlist-helper">Your email app will open with a prepared message. Review it and press Send to complete your registration.</p>
      </form>}
    </div></section>
  </>;
}
