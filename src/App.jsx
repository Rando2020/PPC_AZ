import { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Waitlist from './pages/Waitlist';
import { Provider, About, DPC, Services, NewPatients, Resources, FAQ, Contact, Portal, Legal } from './pages/ContentPages';

const routeMeta = {
  home: {
    title: 'Prickly Pear Care | Patient-led Direct Primary Care in Marana, AZ',
    description: 'Patient-led care with Jennifer Carlile, MSN, FNP-BC. Prickly Pear Care plans to launch with Direct Primary Care in Marana, Arizona.',
    announcement: 'Prickly Pear Care home page',
  },
  dpc: {
    title: 'Direct Primary Care in Marana, AZ | Prickly Pear Care',
    description: 'Learn how Prickly Pear Care plans to use Direct Primary Care to support continuity, clear expectations, and patient-led primary care with Jennifer Carlile.',
    announcement: 'Direct Primary Care page',
  },
  provider: {
    title: 'Meet Jennifer Carlile, MSN, FNP-BC | Prickly Pear Care',
    description: 'Meet Jennifer Carlile, MSN, FNP-BC, founder of Prickly Pear Care and a Family Nurse Practitioner who has served Marana and Northwest Tucson for more than nine years.',
    announcement: 'Meet Jennifer page',
  },
  services: {
    title: 'Care & Services | Prickly Pear Care',
    description: 'See the current launch focus and planned future care pathways at Prickly Pear Care. Direct Primary Care is the launch focus.',
    announcement: 'Care and Services page',
  },
  'new-patients': {
    title: 'New Patients | Prickly Pear Care',
    description: 'Learn what to expect as Prickly Pear Care prepares to open enrollment and live patient care in Marana, Arizona.',
    announcement: 'New Patients page',
  },
  about: {
    title: 'About Prickly Pear Care | Marana, AZ',
    description: 'Learn about the patient-led philosophy, local roots, and purpose behind Prickly Pear Care in Southern Arizona.',
    announcement: 'About Prickly Pear Care page',
  },
  waitlist: {
    title: 'Join the Waitlist | Prickly Pear Care',
    description: 'Join the Prickly Pear Care Waitlist for opening, Direct Primary Care membership, and enrollment updates. No payment or appointment is created today.',
    announcement: 'Join the Waitlist page',
  },
  contact: {
    title: 'Contact Prickly Pear Care | Marana, AZ',
    description: 'Contact Prickly Pear Care with a general practice question or join the Waitlist for launch updates.',
    announcement: 'Contact page',
  },
  resources: {
    title: 'Patient Resources | Prickly Pear Care',
    description: 'Future home for clinically reviewed Direct Primary Care education, patient guides, practice updates, and forms.',
    announcement: 'Patient Resources page',
  },
  faq: {
    title: 'Frequently Asked Questions | Prickly Pear Care',
    description: 'Answers about the Prickly Pear Care launch, Direct Primary Care, future services, and how to stay updated.',
    announcement: 'Frequently Asked Questions page',
  },
  portal: {
    title: 'Patient Portal | Prickly Pear Care',
    description: 'Patient portal access will connect to the practice health record system when the secure clinical workflow is finalized.',
    announcement: 'Patient Portal page',
  },
  booking: {
    title: 'Scheduling | Prickly Pear Care',
    description: 'Live patient scheduling is not open yet. Join the Waitlist for opening and enrollment updates.',
    announcement: 'Scheduling page',
  },
  'legal/privacy': {
    title: 'Privacy Notice | Prickly Pear Care',
    description: 'Website privacy information for Prickly Pear Care.',
    announcement: 'Privacy Notice page',
  },
  'legal/terms': {
    title: 'Terms & Accessibility | Prickly Pear Care',
    description: 'Website terms, accessibility information, and important use information for Prickly Pear Care.',
    announcement: 'Terms and Accessibility page',
  },
};

function getRoute(){return location.hash.replace(/^#\/?/,'').replace(/\/$/,'')||'home'}

function upsertMeta(selector, attribute, value){
  const element = document.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
}

function pageForRoute(route){
  switch(route){
    case 'dpc': return <DPC/>;
    case 'provider': return <Provider/>;
    case 'about': return <About/>;
    case 'services': return <Services/>;
    case 'new-patients': return <NewPatients/>;
    case 'booking': return <Booking/>;
    case 'waitlist': return <Waitlist/>;
    case 'contact': return <Contact/>;
    case 'portal': return <Portal/>;
    case 'resources': return <Resources/>;
    case 'faq': return <FAQ/>;
    case 'legal/privacy': return <Legal type="privacy"/>;
    case 'legal/terms': return <Legal type="terms"/>;
    default: return <Home/>;
  }
}

export default function App(){
  const [route,setRoute]=useState(getRoute());

  useEffect(()=>{
    const f=()=>setRoute(getRoute());
    addEventListener('hashchange',f);
    return()=>removeEventListener('hashchange',f);
  },[]);

  const meta = routeMeta[route] || routeMeta.home;

  useEffect(()=>{
    document.title = meta.title;
    upsertMeta('meta[name="description"]','content',meta.description);
    upsertMeta('meta[property="og:title"]','content',meta.title);
    upsertMeta('meta[property="og:description"]','content',meta.description);

    const frame = requestAnimationFrame(()=>{
      const heading = document.querySelector('#main h1');
      if (heading) {
        heading.setAttribute('tabindex','-1');
        heading.focus({preventScroll:true});
      }
    });
    return()=>cancelAnimationFrame(frame);
  },[route,meta]);

  return <>
    <div className="route-announcer" aria-live="polite" aria-atomic="true">{meta.announcement}</div>
    <Layout route={route}>{pageForRoute(route)}</Layout>
  </>;
}
