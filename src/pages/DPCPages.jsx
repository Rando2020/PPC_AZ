import { useMemo, useState } from 'react';
import { ArrowRight, Calculator, Check, HeartHandshake, ShieldCheck, Stethoscope, UserRound, Users } from 'lucide-react';
import { PageHero } from '../components/Layout';
import { CTA, Notice } from '../components/UI';
import { practice } from '../config/practice';
import './dpc-pages.css';

const dpcLinks = [
  ['Overview', '#/dpc', 'overview'],
  ['Pricing', '#/dpc/pricing', 'pricing'],
  ['Calculator', '#/dpc/calculator', 'calculator'],
  ['Real-life examples', '#/dpc/examples', 'examples'],
  ['FAQ', '#/faq', 'faq'],
];

function DPCNav({ active }) {
  return <nav className="dpc-subnav" aria-label="Direct Primary Care guide">
    <div className="shell dpc-subnav__inner">
      {dpcLinks.map(([label,href,key])=><a className={active===key?'active':''} aria-current={active===key?'page':undefined} href={href} key={key}>{label}</a>)}
    </div>
  </nav>;
}

function SimpleHero({ eyebrow, title, children }) {
  return <section className="dpc-simple-hero">
    <div className="shell narrow">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      {children&&<p className="lead">{children}</p>}
    </div>
  </section>;
}

const benefitCards = [
  [Stethoscope, 'Start with primary care', 'When a question comes up, begin with the relationship instead of first deciding whether another visit charge is worth it.'],
  [HeartHandshake, 'One provider who knows you', 'Continuity means less time retelling your history and more time deciding what comes next.'],
  [ShieldCheck, 'Keep insurance for bigger expenses', 'DPC is primary care, not health insurance. Hospital care, specialists, imaging, and other outside services remain separate.'],
  [Check, 'A predictable monthly fee', 'You know the membership cost before you need care, with the covered services defined in the DPC agreement.'],
];

const scenarioCards = [
  {
    label: 'Individual',
    icon: UserRound,
    title: 'You have a high-deductible plan and tend to wait.',
    copy: 'DPC can make the primary-care portion of your budget more predictable and reduce the hesitation that comes from another visit-by-visit charge.',
  },
  {
    label: 'Couple',
    icon: HeartHandshake,
    title: 'One person needs ongoing follow-up. The other needs care occasionally.',
    copy: 'The value can be continuity, easier questions, and one primary-care home rather than starting over with a different clinician each time.',
  },
  {
    label: 'Family',
    icon: Users,
    title: 'Several needs can come up in the same month.',
    copy: 'A sick-day question, a medication follow-up, and routine primary care can all start with the same relationship instead of feeling like separate billing decisions.',
  },
];

export function DPCOverview(){
  return <>
    <PageHero eyebrow="Direct Primary Care Membership" title="Primary care without the insurance runaround.">A monthly primary-care relationship built to make the first step simpler: start with Jennifer.</PageHero>
    <DPCNav active="overview"/>

    <section className="section dpc-start"><div className="shell">
      <header className="dpc-start__heading">
        <span className="eyebrow">Start with the two things people ask first</span>
        <h2>What does it cost, and does it make sense for me?</h2>
      </header>
      <div className="dpc-start__grid">
        <a className="dpc-action-card dpc-action-card--pricing" href="#/dpc/pricing">
          <span>Membership pricing</span>
          <strong>${practice.dpcIndividualStartingPrice}<small>/month</small></strong>
          <p>Individual membership. Family of four is ${practice.dpcFamilyFourPrice}/month, plus ${practice.dpcAdditionalChildPrice} for each additional child.</p>
          <b>See pricing <ArrowRight size={17}/></b>
        </a>
        <a className="dpc-action-card" href="#/dpc/calculator">
          <Calculator aria-hidden="true"/>
          <span>Try the calculator</span>
          <h3>Compare the membership fee with what you spend now.</h3>
          <p>Use your own visit costs. The calculator can also tell you when DPC costs more based on the numbers you enter.</p>
          <b>Open calculator <ArrowRight size={17}/></b>
        </a>
      </div>
    </div></section>

    <section className="section section--cream dpc-benefits"><div className="shell">
      <header className="section-heading"><div><span className="eyebrow">What changes with DPC</span><h2>Think membership, not transactions.</h2></div><p>The value is not simply more visits. It is having primary care already available as an ongoing relationship.</p></header>
      <div className="dpc-benefit-grid">{benefitCards.map(([Icon,title,copy])=><article key={title}><Icon/><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>

    <section className="section dpc-scenarios-preview"><div className="shell">
      <header className="section-heading"><div><span className="eyebrow">Picture it in real life</span><h2>Different households can value DPC for different reasons.</h2></div><a className="editorial-link editorial-link--dark" href="#/dpc/examples">See all examples <ArrowRight size={15}/></a></header>
      <div className="dpc-scenario-grid">{scenarioCards.map(({label,icon:Icon,title,copy})=><article key={label}><div><Icon/><span>{label}</span></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      <p className="dpc-example-note">These examples are illustrative, not patient testimonials. What can be handled through DPC always depends on the clinical situation and the final membership agreement.</p>
    </div></section>

    <CTA title="Want the details without the clutter?" href="#/dpc/pricing" action="See Membership Pricing">Review the monthly prices first, then use the calculator or FAQ only if you need them.</CTA>
  </>;
}

export function DPCPricing(){
  return <>
    <SimpleHero eyebrow="DPC membership pricing" title="Know the monthly number first.">Simple published pricing for the membership options Prickly Pear Care has confirmed.</SimpleHero>
    <DPCNav active="pricing"/>
    <section className="section dpc-pricing"><div className="shell">
      <div className="dpc-price-grid">
        <article className="dpc-price-card dpc-price-card--featured"><span>Individual</span><strong>${practice.dpcIndividualStartingPrice}<small>/month</small></strong><p>${practice.dpcIndividualStartingPrice*12} per year.</p></article>
        <article className="dpc-price-card"><span>Family of four</span><strong>${practice.dpcFamilyFourPrice}<small>/month</small></strong><p>${practice.dpcFamilyFourPrice*12} per year.</p></article>
        <article className="dpc-price-card"><span>Additional child</span><strong>+${practice.dpcAdditionalChildPrice}<small>/month</small></strong><p>Added to the family membership for each additional child.</p></article>
      </div>

      <div className="dpc-price-next">
        <div><span className="eyebrow">What the fee is designed to support</span><h2>A primary-care relationship you can actually use.</h2></div>
        <ul>
          <li><Check/>Included primary-care services as defined in your membership agreement</li>
          <li><Check/>Continuity with Jennifer rather than starting over at each visit</li>
          <li><Check/>A predictable primary-care membership cost</li>
          <li><Check/>Care coordination when testing or specialist care is clinically appropriate</li>
        </ul>
      </div>

      <Notice>DPC is not health insurance. Hospital care, emergency care, specialist bills, advanced imaging, outside medications, and other services outside the membership remain separate. The final included-service list and access standards will be shown before enrollment.</Notice>
      <div className="button-row"><a className="button" href="#/dpc/calculator">Try the calculator <ArrowRight size={16}/></a><a className="editorial-link editorial-link--dark" href="#/dpc/examples">See real-life examples <ArrowRight size={15}/></a></div>
    </div></section>
  </>;
}

export function DPCCalculator(){
  const [plan,setPlan] = useState('individual');
  const [extraChildren,setExtraChildren] = useState(0);
  const [visits,setVisits] = useState(4);
  const [visitCost,setVisitCost] = useState(75);
  const [otherAnnual,setOtherAnnual] = useState(0);

  const monthlyMembership = plan==='individual'
    ? practice.dpcIndividualStartingPrice
    : practice.dpcFamilyFourPrice + (extraChildren * practice.dpcAdditionalChildPrice);
  const annualMembership = monthlyMembership * 12;
  const currentEstimate = Math.max(0,visits) * Math.max(0,visitCost) + Math.max(0,otherAnnual);
  const difference = currentEstimate - annualMembership;

  const result = useMemo(()=>{
    if (Math.abs(difference) < 1) return 'The amounts are about the same based on what you entered.';
    if (difference > 0) return `The membership fee is $${Math.round(difference).toLocaleString()} less than the primary-care costs you entered.`;
    return `The membership fee is $${Math.round(Math.abs(difference)).toLocaleString()} more than the primary-care costs you entered.`;
  },[difference]);

  return <>
    <SimpleHero eyebrow="DPC cost calculator" title="Use your numbers, not a generic savings claim.">This calculator compares the published membership fee with the primary-care out-of-pocket costs you enter.</SimpleHero>
    <DPCNav active="calculator"/>
    <section className="section dpc-calculator"><div className="shell dpc-calculator__grid">
      <form className="dpc-calculator__form" onSubmit={event=>event.preventDefault()}>
        <fieldset>
          <legend>1. Choose a published membership</legend>
          <label className={plan==='individual'?'selected':''}><input type="radio" name="plan" value="individual" checked={plan==='individual'} onChange={()=>setPlan('individual')}/><span><strong>Individual</strong>${practice.dpcIndividualStartingPrice}/month</span></label>
          <label className={plan==='family'?'selected':''}><input type="radio" name="plan" value="family" checked={plan==='family'} onChange={()=>setPlan('family')}/><span><strong>Family of four</strong>${practice.dpcFamilyFourPrice}/month</span></label>
        </fieldset>

        {plan==='family'&&<div className="dpc-calculator__field"><label htmlFor="extra-children">Additional children</label><div className="dpc-stepper"><button type="button" onClick={()=>setExtraChildren(value=>Math.max(0,value-1))} disabled={extraChildren===0} aria-label="Remove one additional child">−</button><output id="extra-children" aria-live="polite">{extraChildren}</output><button type="button" onClick={()=>setExtraChildren(value=>value+1)} aria-label="Add one additional child">+</button></div><small>Each additional child adds ${practice.dpcAdditionalChildPrice}/month.</small></div>}

        <div className="dpc-calculator__field"><label htmlFor="visits">Primary-care visits in a typical year</label><input id="visits" type="number" min="0" value={visits} onChange={event=>setVisits(Number(event.target.value)||0)}/></div>
        <div className="dpc-calculator__field"><label htmlFor="visit-cost">Typical out-of-pocket cost per visit</label><div className="money-input"><span>$</span><input id="visit-cost" type="number" min="0" value={visitCost} onChange={event=>setVisitCost(Number(event.target.value)||0)}/></div></div>
        <div className="dpc-calculator__field"><label htmlFor="other-costs">Other annual primary-care costs you want to compare</label><div className="money-input"><span>$</span><input id="other-costs" type="number" min="0" value={otherAnnual} onChange={event=>setOtherAnnual(Number(event.target.value)||0)}/></div><small>Only enter costs you reasonably consider part of primary care. Do not include insurance premiums.</small></div>
      </form>

      <aside className="dpc-calculator__result" aria-live="polite">
        <span className="eyebrow">Your comparison</span>
        <div className="dpc-result-row"><span>Membership</span><strong>${monthlyMembership.toLocaleString()}/month</strong><small>${annualMembership.toLocaleString()}/year</small></div>
        <div className="dpc-result-row"><span>Costs you entered</span><strong>${currentEstimate.toLocaleString()}/year</strong></div>
        <p className="dpc-result-summary">{result}</p>
        <p className="small">This is not a savings guarantee. It compares only the costs you entered with the membership fee and does not determine whether every service would be covered by the DPC agreement. DPC does not replace health insurance.</p>
        {difference<0&&<p className="dpc-result-context"><strong>DPC can still be valuable when it costs more on paper.</strong> Some people choose it for continuity, predictable access, and fewer visit-by-visit decisions rather than pure dollar savings.</p>}
        <a className="button" href="#/waitlist">Join the Waitlist <ArrowRight size={16}/></a>
      </aside>
    </div></section>
  </>;
}

export function DPCExamples(){
  return <>
    <SimpleHero eyebrow="DPC in real life" title="The benefit can look different for every household.">These examples show the kinds of friction DPC can reduce. They are illustrative, not patient testimonials or promises of a specific clinical outcome.</SimpleHero>
    <DPCNav active="examples"/>
    <section className="section dpc-examples"><div className="shell">
      <div className="dpc-example-list">
        <article><div className="dpc-example-list__label"><UserRound/><span>Individual example</span></div><div><h2>High deductible. Several primary-care needs each year.</h2><p>Imagine an adult who pays most routine visit costs out of pocket and sometimes waits because every question can become another bill. With DPC, the monthly fee is known in advance and the first step can be the ongoing primary-care relationship.</p><ul><li><Check/>More predictable primary-care spending</li><li><Check/>Continuity with one provider</li><li><Check/>Less hesitation about whether a question is worth starting</li></ul></div></article>
        <article><div className="dpc-example-list__label"><HeartHandshake/><span>Couple example</span></div><div><h2>One person needs ongoing follow-up. One needs care only occasionally.</h2><p>A couple may value DPC even when their healthcare use is very different. The common benefit is having a primary-care home that knows both histories and can help each person navigate next steps without starting from scratch.</p><ul><li><Check/>Ongoing chronic-care follow-up for one partner</li><li><Check/>A familiar place to start when the other partner gets sick</li><li><Check/>Shared understanding of how primary care fits alongside insurance</li></ul></div></article>
        <article><div className="dpc-example-list__label"><Users/><span>Family example</span></div><div><h2>A sick-day question, a refill question, and routine care can all happen close together.</h2><p>For a family of four, the published membership is ${practice.dpcFamilyFourPrice}/month. The practical value can be reducing the feeling that every new concern starts another separate billing decision. When clinically appropriate, the family starts with the same primary-care relationship and Jennifer helps determine the next step.</p><ul><li><Check/>Family of four: ${practice.dpcFamilyFourPrice}/month</li><li><Check/>Each additional child: +${practice.dpcAdditionalChildPrice}/month</li><li><Check/>Insurance still matters for care outside DPC</li></ul></div></article>
      </div>

      <section className="dpc-research-note" aria-labelledby="dpc-research-title"><span className="eyebrow">What we saw across DPC case studies</span><h2 id="dpc-research-title">The recurring theme is access and continuity, not just cheaper visits.</h2><p>Published DPC examples commonly emphasize direct communication, longer or more accessible primary-care visits, continuity, predictable fees, care coordination, and employer-sponsored membership options. Prickly Pear Care will publish its own exact access standards and included services before enrollment.</p></section>
      <div className="button-row"><a className="button" href="#/dpc/pricing">Review pricing <ArrowRight size={16}/></a><a className="editorial-link editorial-link--dark" href="#/dpc/calculator">Try the calculator <ArrowRight size={15}/></a></div>
    </div></section>
    <CTA title="Does this sound like the way you want to use primary care?" href="#/waitlist" action="Join the Waitlist">Get enrollment updates and the final membership agreement before you decide.</CTA>
  </>;
}
