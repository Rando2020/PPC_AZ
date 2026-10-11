import { ArrowRight, Heart, Sparkles, Flower2, Check } from 'lucide-react';
const icons={heart:Heart,sparkle:Sparkles,flower:Flower2};
export function ServiceCard({ item }) { const Icon=icons[item.icon]||Flower2; return <article className="card service-card"><Icon/><span className="status">{item.status}</span><h3>{item.title}</h3><p>{item.description}</p><a href="#/services">Explore care <ArrowRight size={16}/></a></article>; }
export function CTA({ title='Ready when you are.', children='Take the next step toward care that feels more personal.', action='Book a Visit', href='#/booking' }) { return <section className="cta"><div className="shell cta-inner"><div><span className="eyebrow">Prickly Pear Care</span><h2>{title}</h2><p>{children}</p></div><a className="button button--cream" href={href}>{action}<ArrowRight size={17}/></a></div></section>; }
export function Notice({ children }) { return <div className="notice"><Check size={18}/><p>{children}</p></div>; }
