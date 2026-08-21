import { useState } from 'react';
import { ArrowRight, CircleDollarSign, HeartHandshake, Route } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { DPCMembershipOffer } from './DPCMembershipOffer';

const items = [
  {
    id: 'terms',
    eyebrow: '01 · Predictable membership',
    title: 'Pay a straightforward monthly fee.',
    body: 'Instead of billing insurance for included primary-care visits, you pay Prickly Pear Primary Care directly. Membership options begin at $99 per month for an individual.',
    icon: CircleDollarSign,
    note: 'Clear terms before you make a decision.',
  },
  {
    id: 'relationship',
    eyebrow: '02 · Ongoing relationship',
    title: 'Build care around a provider who knows you.',
    body: 'DPC is designed around continuity with Jennifer, so your medical history, questions, priorities, and goals can carry forward rather than restarting at every visit.',
    icon: HeartHandshake,
    note: 'The relationship is the center of the model.',
  },
  {
    id: 'boundaries',
    eyebrow: '03 · Keep insurance protection',
    title: 'Use DPC alongside health insurance.',
    body: 'DPC membership is not health insurance. Many people keep insurance for major or unexpected expenses while using DPC for their ongoing primary care.',
    icon: Route,
    note: 'Two different tools serving different healthcare needs.',
  },
];

export function DPCExplainer() {
  const [activeId, setActiveId] = useState(items[0].id);
  const reduceMotion = useReducedMotion();
  const active = items.find((item) => item.id === activeId) ?? items[0];
  const ActiveIcon = active.icon;

  return (
    <><section className="dpc-explainer" aria-labelledby="dpc-explainer-title">
      <div className="dpc-explainer__intro">
        <span className="eyebrow">DPC, without the jargon</span>
        <h2 id="dpc-explainer-title">A simpler structure for ongoing primary care.</h2>
        <p>The monthly membership changes how included primary care is paid for and accessed. It does not erase the rest of the healthcare system, so both the benefits and boundaries should be clear before you enroll.</p>
      </div>

      <div className="dpc-explainer__grid">
        <div className="dpc-explainer__nav" aria-label="Direct Primary Care explainer choices">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-pressed={activeId === item.id}
              className={activeId === item.id ? 'is-active' : ''}
              onClick={() => setActiveId(item.id)}
            >
              <span>{item.eyebrow}</span>
              <strong>{item.title}</strong>
              <ArrowRight aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="dpc-explainer__stage" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="dpc-explainer__icon"><ActiveIcon /></div>
              <span className="dpc-explainer__step">{active.eyebrow}</span>
              <h3>{active.title}</h3>
              <p>{active.body}</p>
              <small>{active.note}</small>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section><DPCMembershipOffer/></>
  );
}
