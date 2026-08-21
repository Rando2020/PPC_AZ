import { useMemo, useState } from 'react';
import { Calculator, Check, Info, Users } from 'lucide-react';

const plans = [
  { id: 'individual', name: 'Individual', monthly: 99, covered: '1 person', detail: '$99 per person' },
  { id: 'couple', name: 'Couple', monthly: 150, covered: '2 people', detail: '$75 per person' },
  { id: 'family', name: 'Family of 4', monthly: 200, covered: 'Up to 4 people', detail: '$50 per person' },
];

const includedServices = [
  'Comprehensive primary-care visits',
  'Same-day or next-day access when available',
  'Longer appointment times',
  'Annual preventive and wellness visit',
  'Chronic disease management',
  'Acute illness visits',
  'Medication management',
  'Telemedicine',
  'Secure messaging',
  'Phone access',
  'Care coordination and referrals',
  'Basic in-office procedures',
  'Selected point-of-care testing',
  'No copays for included services',
  'No visit limits for included services',
];

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

export function DPCMembershipOffer() {
  const [planId, setPlanId] = useState('individual');
  const [additionalChildren, setAdditionalChildren] = useState(0);
  const [visits, setVisits] = useState(4);
  const [visitCost, setVisitCost] = useState(125);
  const [otherAnnualCost, setOtherAnnualCost] = useState(0);
  const plan = plans.find((item) => item.id === planId) ?? plans[0];

  const totals = useMemo(() => {
    const monthlyMembership = plan.monthly + (plan.id === 'family' ? additionalChildren * 25 : 0);
    const annualMembership = monthlyMembership * 12;
    const enteredAnnualSpend = visits * visitCost + otherAnnualCost;
    return { monthlyMembership, annualMembership, enteredAnnualSpend, difference: enteredAnnualSpend - annualMembership };
  }, [additionalChildren, otherAnnualCost, plan, visitCost, visits]);

  return <>
    <section className="dpc-offer" aria-labelledby="dpc-pricing-title">
      <header className="dpc-offer__heading">
        <div><span className="eyebrow">Membership pricing</span><h2 id="dpc-pricing-title">Simple monthly pricing for ongoing primary care.</h2></div>
        <p>Select the household option that fits. Membership pricing covers the included primary-care services listed below.</p>
      </header>
      <div className="dpc-pricing-grid">
        {plans.map((item) => <article className={`dpc-price-card ${item.id === 'family' ? 'dpc-price-card--featured' : ''}`} key={item.id}>
          {item.id === 'family' && <span className="dpc-price-card__flag">Best household value</span>}
          <Users aria-hidden="true"/><h3>{item.name}</h3><p>{item.covered}</p>
          <strong><span>$</span>{item.monthly}<small>/month</small></strong><p className="dpc-price-card__effective">{item.detail}</p>
        </article>)}
        <article className="dpc-price-card dpc-price-card--additional"><span className="dpc-price-card__label">Family add-on</span><h3>Additional child</h3><strong><span>$</span>25<small>/month</small></strong><p>For each child beyond the four people included in the family plan.</p></article>
      </div>
      <p className="dpc-offer__terms"><Info size={17}/> Final enrollment documents will define eligibility, included services, communication standards, availability, and any services with separate costs.</p>
    </section>

    <section className="dpc-includes" aria-labelledby="dpc-includes-title">
      <div className="dpc-includes__intro"><span className="eyebrow">What is included</span><h2 id="dpc-includes-title">Substantial care, without a copay at every included visit.</h2><p>Membership is designed to make routine primary care easier to access while creating more room for an ongoing relationship with Jennifer.</p></div>
      <ul>{includedServices.map((service) => <li key={service}><Check aria-hidden="true"/><span>{service}</span></li>)}</ul>
      <div className="dpc-includes__boundary"><strong>Membership does not replace health insurance.</strong><p>Hospital care, emergency care, specialists, imaging, outside laboratory work, medications, and services not listed as included may create separate costs.</p></div>
    </section>

    <section className="dpc-calculator" aria-labelledby="dpc-calculator-title">
      <header className="dpc-calculator__heading"><div className="dpc-calculator__icon"><Calculator aria-hidden="true"/></div><div><span className="eyebrow">Explore the numbers</span><h2 id="dpc-calculator-title">Compare membership with what you currently spend.</h2><p>This educational tool uses your assumptions. It is not a quote or a promise of savings.</p></div></header>
      <div className="dpc-calculator__layout">
        <form className="dpc-calculator__controls" onSubmit={(event) => event.preventDefault()}>
          <fieldset><legend>Choose a membership</legend><div className="dpc-calculator__plans">{plans.map((item) => <label key={item.id}><input type="radio" name="dpc-plan" value={item.id} checked={planId === item.id} onChange={() => setPlanId(item.id)}/><span><strong>{item.name}</strong>{money.format(item.monthly)}/month</span></label>)}</div></fieldset>
          {planId === 'family' && <label className="dpc-calculator__field"><span>Additional children beyond family of four <output>{additionalChildren}</output></span><input type="range" min="0" max="6" step="1" value={additionalChildren} onChange={(event) => setAdditionalChildren(Number(event.target.value))}/></label>}
          <label className="dpc-calculator__field"><span>Expected primary-care visits each year <output>{visits}</output></span><input type="range" min="0" max="24" step="1" value={visits} onChange={(event) => setVisits(Number(event.target.value))}/><small>Move from occasional care to more frequent use.</small></label>
          <label className="dpc-calculator__field"><span>Average amount you pay per visit <output>{money.format(visitCost)}</output></span><input type="range" min="0" max="500" step="25" value={visitCost} onChange={(event) => setVisitCost(Number(event.target.value))}/><small>Include the copay or deductible amount you typically pay.</small></label>
          <label className="dpc-calculator__number"><span>Other annual primary-care spending</span><div><span>$</span><input type="number" min="0" step="25" inputMode="decimal" value={otherAnnualCost} onChange={(event) => setOtherAnnualCost(Math.max(0, Number(event.target.value) || 0))}/></div><small>Optional. Include routine primary-care costs you expect may be covered by membership.</small></label>
        </form>
        <div className="dpc-calculator__result" aria-live="polite">
          <span className="eyebrow">Your comparison</span><h3>{plan.name} membership</h3>
          <dl><div><dt>Monthly membership</dt><dd>{money.format(totals.monthlyMembership)}</dd></div><div><dt>Annual membership</dt><dd>{money.format(totals.annualMembership)}</dd></div><div><dt>Your entered annual estimate</dt><dd>{money.format(totals.enteredAnnualSpend)}</dd></div></dl>
          <div className={`dpc-calculator__difference ${totals.difference >= 0 ? 'is-lower' : ''}`}><small>Based on your entries, membership is</small><strong>{money.format(Math.abs(totals.difference))}</strong><span>{totals.difference >= 0 ? 'less per year than your entered estimate' : 'more per year than your entered estimate'}</span></div>
          <p>This compares only the membership fee with the primary-care spending you entered. It does not calculate insurance premiums or predict total healthcare costs.</p>
        </div>
      </div>
      <aside className="dpc-hsa-note"><Info aria-hidden="true"/><div><strong>A note about HSAs beginning in 2026</strong><p>Otherwise eligible individuals in qualifying Direct Primary Care arrangements may be able to maintain HSA eligibility and use tax-free HSA withdrawals for periodic DPC fees, subject to IRS rules and monthly limits. Confirm your eligibility with a qualified tax professional or plan administrator.</p><a href="https://www.irs.gov/newsroom/understanding-the-working-families-tax-cuts-individual-tax-provisions-youtube-video-text-script" target="_blank" rel="noreferrer">Read the current IRS explanation</a></div></aside>
    </section>
  </>;
}
