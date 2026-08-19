import { useState } from 'react';
import { ArrowRight, CircleDollarSign, HeartHandshake, Route } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const items = [
  {
    id: 'terms',
    eyebrow: '01 · Start with the terms',
    title: 'See the membership clearly before you enroll.',
    body: 'Before enrollment opens, Prickly Pear Care will publish membership pricing, what is included, what is outside the membership, and the key enrollment terms.',
    icon: CircleDollarSign,
    note: 'No guessing. No hidden model assumptions.',
  },
  {
    id: 'relationship',
    eyebrow: '02 · Build continuity',
    title: 'Use DPC as your ongoing primary-care home.',
    body: 'The model is designed around an ongoing primary-care relationship with Jennifer, so your questions, priorities, and story can carry forward over time.',
    icon: HeartHandshake,
    note: 'The relationship is the center of the model.',
  },
  {
    id: 'boundaries',
    eyebrow: '03 · Know the boundaries',
    title: 'Understand what DPC does and does not replace.',
    body: 'DPC membership is not health insurance. Final enrollment materials will explain how outside services such as labs, imaging, specialists, and medications may fit in.',
    icon: Route,
    note: 'Primary care can be simpler without pretending everything is included.',
  },
];

export function DPCExplainer() {
  const [activeId, setActiveId] = useState(items[0].id);
  const reduceMotion = useReducedMotion();
  const active = items.find((item) => item.id === activeId) ?? items[0];
  const ActiveIcon = active.icon;

  return (
    <section className="dpc-explainer" aria-labelledby="dpc-explainer-title">
      <div className="dpc-explainer__intro">
        <span className="eyebrow">DPC, without the jargon</span>
        <h2 id="dpc-explainer-title">Three things to understand before enrollment.</h2>
        <p>Direct Primary Care changes how the primary-care relationship is structured. It does not erase the rest of the healthcare system, so the boundaries should be easy to understand before you sign up.</p>
      </div>

      <div className="dpc-explainer__grid">
        <div className="dpc-explainer__nav" role="tablist" aria-label="Direct Primary Care explainer">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={activeId === item.id}
              aria-controls={`dpc-panel-${item.id}`}
              id={`dpc-tab-${item.id}`}
              className={activeId === item.id ? 'is-active' : ''}
              onClick={() => setActiveId(item.id)}
            >
              <span>{item.eyebrow}</span>
              <strong>{item.title}</strong>
              <ArrowRight aria-hidden="true" />
            </button>
          ))}
        </div>

        <div className="dpc-explainer__stage">
          <AnimatePresence mode="wait" initial={false}>
            <motion.article
              key={active.id}
              id={`dpc-panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`dpc-tab-${active.id}`}
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
    </section>
  );
}
