import { useState } from 'react';
import { CheckCircle2, Mail, AlertCircle } from 'lucide-react';
import { PageHero } from '../components/Layout';
import { practice, dpc } from '../config/practice';
import { waitlistAdapter } from '../lib/waitlistAdapter';

const INTERESTS = [
  ['membership', 'Direct primary care membership', 'A flat monthly fee, unhurried visits, direct access.'],
  ['insurance', 'Insurance-based visits', 'Traditional covered primary care.'],
  ['programs', 'Weight management or hormone therapy', 'Cash-pay programs outside insurance.'],
  ['undecided', "I'm not sure yet", 'Tell me more when you open.'],
];

export default function Waitlist() {
  const [form, setForm] = useState({ name: '', email: '', area: '', interest: 'membership', updates: true });
  const [state, setState] = useState({ status: 'idle' });
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value });

  async function submit(e) {
    e.preventDefault();
    setState({ status: 'sending' });
    const res = await waitlistAdapter.join(form);
    setState(res.ok ? { status: 'done' } : { status: 'error', reason: res.reason });
  }

  if (state.status === 'done') return (
    <>
      <PageHero eyebrow="Waitlist" title="You're on the list.">
        We'll email you before we open — with membership pricing, insurance details, and how to book.
      </PageHero>
      <section className="section"><div className="shell narrow centered">
        <div className="success-mark"><CheckCircle2 size={34}/></div>
        <p className="lead">Thanks, {form.name.split(' ')[0] || 'and welcome'}. Nothing else is needed from you right now.</p>
        <p className="small">Wrong address, or want off the list? Email <a className="text-link" href={`mailto:${practice.email}`}>{practice.email}</a>.</p>
      </div></section>
    </>
  );

  return (
    <>
      <PageHero eyebrow="Join the waitlist" title="Be first to know when we open.">
        Prickly Pear is being built in Marana now. Add your name and you'll hear before anyone else — including membership pricing and how to become an established patient.
      </PageHero>

      <section className="section"><div className="shell waitlist-grid">
        <form className="form" onSubmit={submit}>
          <label>Name<input required value={form.name} onChange={set('name')} autoComplete="name"/></label>
          <label>Email<input required type="email" value={form.email} onChange={set('email')} autoComplete="email"/></label>
          <label>Where are you located? <small>Optional — helps us plan.</small>
            <select value={form.area} onChange={set('area')}>
              <option value="">Select an area</option>
              {practice.neighborhoods.map((n) => <option key={n} value={n}>{n}</option>)}
              <option value="Other">Somewhere else</option>
            </select>
          </label>

          <fieldset className="waitlist-interest">
            <legend>What are you most interested in?</legend>
            {INTERESTS.map(([value, title, note]) => (
              <label className="choice" key={value}>
                <input type="radio" name="interest" value={value} checked={form.interest === value} onChange={set('interest')}/>
                <span>{title}<small>{note}</small></span>
              </label>
            ))}
          </fieldset>

          <label className="choice consent">
            <input type="checkbox" checked={form.updates} onChange={set('updates')}/>
            <span className="small">Email me practice updates. You can unsubscribe at any time.</span>
          </label>

          <p className="small waitlist-privacy">
            Please don't include symptoms, conditions, or medications here. This is a contact list, not a medical record — and it isn't a way to request an appointment or reach us urgently. For an emergency, call 911.
          </p>

          <button className="button" type="submit" disabled={state.status === 'sending'}>
            {state.status === 'sending' ? 'Adding you…' : 'Join the waitlist'}
          </button>

          {state.status === 'error' && (
            <div className="notice notice--warn" role="alert">
              <AlertCircle size={18}/>
              <p>{state.reason === 'not-configured'
                ? <>Waitlist signup isn't switched on yet. Email <a className="text-link" href={`mailto:${practice.email}`}>{practice.email}</a> and we'll add you by hand.</>
                : <>That didn't go through. Please try again, or email <a className="text-link" href={`mailto:${practice.email}`}>{practice.email}</a>.</>}</p>
            </div>
          )}
        </form>

        <aside className="waitlist-aside">
          <h2>What joining does</h2>
          <ul className="check-list">
            <li><Mail size={18}/><span>You hear first when membership pricing and opening dates are set.</span></li>
            <li><Mail size={18}/><span>You get the chance to become an established patient before the panel fills.</span></li>
            <li><Mail size={18}/><span>No cost, no commitment, and no obligation to join anything.</span></li>
          </ul>
          <p className="small waitlist-aside__note">{dpc.disclaimer}</p>
        </aside>
      </div></section>
    </>
  );
}
