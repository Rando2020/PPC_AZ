import React from 'react';
import { createRoot } from 'react-dom/client';
import { MotionConfig } from 'motion/react';
import App from './App';
import './styles.css';
import './motion-accessibility.css';
import './visual-moments.css';
// Keep site-fixes.css last: it corrects rules in the sheets above and relies on
// coming after them in the bundle. See the comments in that file for details.
import './site-fixes.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <App />
    </MotionConfig>
  </React.StrictMode>,
);
