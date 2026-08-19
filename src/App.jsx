import { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Waitlist from './pages/Waitlist';
import { Provider, About, Services, NewPatients, Resources, FAQ, Contact, Portal, Legal } from './pages/ContentPages';

function getRoute(){return location.hash.replace(/^#\/?/,'').replace(/\/$/,'')||'home'}
export default function App(){const [route,setRoute]=useState(getRoute());useEffect(()=>{const f=()=>setRoute(getRoute());addEventListener('hashchange',f);return()=>removeEventListener('hashchange',f)},[]);let Page={home:Home,provider:Provider,about:About,services:Services,'new-patients':NewPatients,booking:Booking,waitlist:Waitlist,contact:Contact,portal:Portal,resources:Resources,faq:FAQ}[route];if(route==='legal/privacy')Page=()=> <Legal type="privacy"/>;if(route==='legal/terms')Page=()=> <Legal type="terms"/>;if(!Page)Page=Home;return <Layout route={route}><Page/></Layout>}
