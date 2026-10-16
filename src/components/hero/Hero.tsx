'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Globe, Stethoscope, ShieldCheck } from 'lucide-react';

interface HeroProps { onExploreClick?: () => void; }

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const promises = [
    {
      icon: Globe,
      title: '01 — Healthcare Recruitment & Placements',
      description: 'Opportunities across India and the Gulf through our recruitment network and licensed recruitment partners.',
    },
    {
      icon: Stethoscope,
      title: '02 — Licensing & Exam Assistance',
      description: 'DataFlow/PSV, professional licensing, Prometric and destination-specific exam support.',
    },
    {
      icon: ShieldCheck,
      title: '03 — Complete Career Support',
      description: 'Clear guidance and coordination from profile evaluation and recruitment to documentation and joining.',
    },
  ];
  return (
    <section id="home" className="blended-hero">
      <div className="hero-stage">
        <div className="hero-photograph">
          <Image src="/hero-professionals-hd.jpg" alt="Two recruitment professionals overlooking the Dubai skyline" fill sizes="(max-width: 1023px) 100vw, 65vw" className="hero-photo" preload />
          <div className="hero-photo-fade" />
        </div>
        <svg className="hero-curve" viewBox="0 0 1000 700" preserveAspectRatio="none" aria-hidden="true">
          <path d="M420 0 C120 230 330 525 0 700 H-10 V0 Z" fill="#f5faff" />
          <path d="M420 0 C120 230 330 525 0 700" fill="none" stroke="#d8ecff" strokeWidth="22" />
        </svg>
        <div className="hero-gold-sweep" aria-hidden="true" />
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <p className="design-eyebrow"><span />Global healthcare recruitment</p>
            <h1 className="design-heading">Your career.<br /><span>Beyond borders.</span></h1>
            <p className="hero-description">Connecting healthcare professionals with opportunities across India and the Gulf. From licensing to placement, we guide every step.</p>
            <div className="hero-actions">
              <button className="design-button primary" onClick={() => onExploreClick ? onExploreClick() : scrollTo('services')}>Explore Services <ArrowRight size={18} /></button>
              <button className="design-button secondary" onClick={() => scrollTo('contact')}>Contact Our Team</button>
            </div>
            <div className="hero-destinations" aria-label="Placement destinations">{['India', 'UAE', 'Saudi Arabia', 'Qatar', 'Oman'].map(country => <span key={country}>{country}</span>)}</div>
          </div>
        </div>
      </div>
      <div className="hero-promise-strip">
        <div className="site-container hero-promises">
          {promises.map(({ icon: Icon, title, description }) => (
            <div className="hero-promise" key={title}><span className="hero-promise-icon"><Icon size={25} strokeWidth={1.7} /></span><div><h2>{title}</h2><p>{description}</p></div></div>
          ))}
        </div>
      </div>
    </section>
  );
};
