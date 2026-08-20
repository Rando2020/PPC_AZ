import { ClipboardCheck, Lightbulb, MessageCircle } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'You bring the full story.',
    body: 'Share your questions, symptoms, priorities, and what you want from the visit.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Jennifer makes it clear.',
    body: 'She listens closely, explains the options, and helps you understand the tradeoffs.',
  },
  {
    number: '03',
    icon: ClipboardCheck,
    title: 'You choose what comes next together.',
    body: 'Leave with shared decisions, clear next steps, and a plan that works in real life.',
  },
];

export function PatientLedJourney() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="patient-led-journey" aria-label="What patient-led care looks like">
      <div className="patient-led-journey__rail" aria-hidden="true">
        <motion.span
          initial={{ scaleY: reduceMotion ? 1 : 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: reduceMotion ? 0.01 : 1.05, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <div className="patient-led-journey__steps">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.article
              className="patient-led-journey__step"
              key={step.number}
              initial={{ opacity: 0, x: reduceMotion ? 0 : 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.55 }}
              transition={{ duration: reduceMotion ? 0.01 : 0.52, delay: reduceMotion ? 0 : index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="patient-led-journey__node" aria-hidden="true">
                <span>{step.number}</span>
              </div>
              <div className="patient-led-journey__card">
                <Icon />
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}
