import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

/* Adaptive motion gate. Scales animation to the device, not just the OS
   setting — matters for an older, partly rural patient base on weak
   connections. Runs once, before paint. */
{
  const nav = navigator;
  const weak =
    nav.connection?.saveData === true ||
    /2g|slow-2g|3g/.test(nav.connection?.effectiveType || '') ||
    (nav.deviceMemory && nav.deviceMemory <= 4) ||
    (nav.hardwareConcurrency && nav.hardwareConcurrency <= 4);
  document.documentElement.dataset.motion = weak ? 'minimal' : 'full';
}
import './styles.css';

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
