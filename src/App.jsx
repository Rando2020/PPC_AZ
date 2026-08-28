import { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Provider from './pages/Provider';
import Booking from './pages/Booking';
import Waitlist from './pages/Waitlist';
import { DPCOverview, DPCPricing, DPCCalculator, DPCExamples } from './pages/DPCPages';
import { About, CareOptions, CommunityGroups, NewPatients, Resources, FAQ, Contact, Portal, Legal } from './pages/ContentPages';

const routeMeta = {
  home: {
    title: 'Prickly Pear Care | Patient-led Direct Primary Care in Marana, AZ',
    description: 'Patient-led care with Jennifer Carlile, MSN, FNP-BC. Prickly Pear Care plans to launch with Direct Primary Care in Marana, Arizona.',
    announcement: 'Prickly Pear Care home page',
  },
  dpc: {
    title: 'Direct Primary Care | Prickly Pear Care',
    description: 'See how Direct Primary Care membership works, review pricing, try the cost calculator, and explore real-life examples.',
    announcement: 'Direct Primary Care overview page',
  },
  'dpc/pricing': {
    title: 'DPC Membership Pricing | Prickly Pear Care',
    description: 'Review published Prickly Pear Care Direct Primary Care membership pricing for individuals and families.',
    announcement: 'Direct Primary Care pricing page',
  },
  'dpc/calculator': {
    title: 'DPC Cost Calculator | Prickly Pear Care',
    description: 'Compare Prickly Pear Care DPC membership fees with the primary-care out-of-pocket costs you enter.',
    announcement: 'Direct Primary Care calculator page',
  },
  'dpc/examples': {
    title: 'DPC Examples for Individuals, Couples, and Families | Prickly Pear Care',
    description: 'See simple examples of how individuals, couples, and families may use Direct Primary Care.',
    announcement: 'Direct Primary Care examples page',
  },
  provider: {
    title: 'Meet Jennifer Carlile, MSN, FNP-BC | Prickly Pear Care',
    description: 'Meet Jennifer Carlile, MSN, FNP-BC, founder of Prickly Pear Care and a Family Nurse Practitioner who has served Marana and Northwest Tucson for more than 10 years.',
    announcement: 'Meet Jennifer page',
  },
  services: {
    title: 'Compare Your Care Options | Prickly Pear Care',
    description: 'Compare insurance-based primary care and Direct Primary Care membership, and learn about select cash-pay services coming soon to Prickly Pear Care.',
    announcement: 'Care and Services page',
  },
  'new-patients': {
    title: 'New Patients | Prickly Pear Care',
    description: 'Learn what to expect as Prickly Pear Care prepares to open enrollment and live patient care in Marana, Arizona.',
    announcement: 'New Patients page',
  },
  'new-patients/community-groups': {
    title: 'Community and Employer DPC | Prickly Pear Care',
    description: 'Learn how Prickly Pear Care is exploring DPC arrangements for local businesses, first responders, teachers, and public servants in Marana and Northwest Tucson.',
    announcement: 'Community and employer Direct Primary Care page',
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
    case 'dpc': return <DPCOverview/>;
    case 'dpc/pricing': return <DPCPricing/>;
    case 'dpc/calculator': return <DPCCalculator/>;
    case 'dpc/examples': return <DPCExamples/>;
    case 'provider': return <Provider/>;
    case 'about': return <About/>;
    case 'services': return <CareOptions/>;
    case 'new-patients': return <NewPatients/>;
    case 'new-patients/community-groups': return <CommunityGroups/>;
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
        try { heading.focus({preventScroll:true}); }
        catch { heading.focus(); }
      }
    });
    return()=>cancelAnimationFrame(frame);
  },[route,meta]);

  return <>
    <div className="route-announcer" aria-live="polite" aria-atomic="true">{meta.announcement}</div>
    <Layout route={route}>{pageForRoute(route)}</Layout>
  </>;
}
