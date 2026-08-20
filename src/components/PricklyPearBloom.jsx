import { motion, useReducedMotion } from 'motion/react';

export function PricklyPearBloom({ className = '' }) {
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0.01 : 0.65;
  const padTransition = (delay) => ({ duration, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] });

  return (
    <motion.svg
      className={`prickly-bloom ${className}`.trim()}
      viewBox="0 0 220 250"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: reduceMotion ? 0.01 : 0.35 }}
    >
      <motion.g
        className="prickly-bloom__pad"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.88, y: reduceMotion ? 0 : 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={padTransition(0.12)}
        style={{ transformOrigin: '112px 195px' }}
      >
        <path d="M76 214c-3-32 2-65 9-84 8-22 20-32 35-28 17 5 23 22 19 48-4 25-5 47 2 65z" />
      </motion.g>
      <motion.g
        className="prickly-bloom__pad"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.86, rotate: reduceMotion ? 0 : -5 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={padTransition(0.22)}
        style={{ transformOrigin: '82px 124px' }}
      >
        <path d="M55 153c-13-19-16-42-8-57 8-14 22-17 35-8 12 9 16 27 11 48-3 12-2 24 3 33z" />
      </motion.g>
      <motion.g
        className="prickly-bloom__pad"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.86, rotate: reduceMotion ? 0 : 6 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={padTransition(0.3)}
        style={{ transformOrigin: '151px 118px' }}
      >
        <path d="M139 160c3-20 2-37-2-50-5-17 1-31 13-37 14-7 29 2 33 20 4 19-6 43-25 62z" />
      </motion.g>
      <motion.g
        className="prickly-bloom__flower"
        initial={{ opacity: 0, scale: reduceMotion ? 1 : 0.4, rotate: reduceMotion ? 0 : -12 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={padTransition(0.48)}
        style={{ transformOrigin: '153px 71px' }}
      >
        <path d="M153 49c7 0 11 8 9 15 7-5 16-2 18 5 2 8-5 14-13 14 5 6 3 15-4 18-8 3-15-4-14-12-6 5-15 3-18-4-4-8 2-16 10-18-6-4-6-13-1-19 5-6 14-5 19 1-1-8 4-15 13-15z" />
      </motion.g>
      <g className="prickly-bloom__spines">
        <circle cx="102" cy="131" r="2"/><circle cx="120" cy="151" r="2"/><circle cx="105" cy="178" r="2"/><circle cx="78" cy="111" r="2"/><circle cx="69" cy="135" r="2"/><circle cx="158" cy="102" r="2"/><circle cx="154" cy="132" r="2"/>
      </g>
    </motion.svg>
  );
}
