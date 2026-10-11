'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Pause, Play, ShieldCheck, FileCheck, CheckCircle2, HeartHandshake } from 'lucide-react';
import { featuresData } from '@/data/features';

const visuals = [
  { image: '/images/why-advisory.webp', alt: 'A healthcare professional discussing her career with an advisor', icon: ShieldCheck, label: 'Clarity at every step' },
  { image: '/images/why-documentation.webp', alt: 'A documentation specialist reviewing paperwork with a nurse', icon: FileCheck, label: 'The details, taken care of' },
  { image: '/images/why-hospital.webp', alt: 'A team of healthcare professionals in a modern hospital', icon: CheckCircle2, label: 'Connections you can trust' },
  { image: '/hero-professionals-hd.jpg', alt: 'Professionals looking towards new opportunities in Dubai', icon: HeartHandshake, label: 'Your journey. Our commitment.' },
];

export const WhyChooseUsSection: React.FC = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const changeSlide = (direction: number) => setActive(current => (current + direction + featuresData.length) % featuresData.length);

  useEffect(() => {
    if (paused || hovered || focused) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setInterval> | undefined;
    const schedule = () => {
      clearInterval(timer);
      if (!motion.matches && !document.hidden) timer = setInterval(() => setActive(current => (current + 1) % featuresData.length), 6500);
    };
    schedule();
    motion.addEventListener('change', schedule);
    document.addEventListener('visibilitychange', schedule);
    return () => {
      clearInterval(timer);
      motion.removeEventListener('change', schedule);
      document.removeEventListener('visibilitychange', schedule);
    };
  }, [paused, hovered, focused, active]);

  return (
    <section id="why-us" className="why-section">
      <div className="site-container">
        <div className="why-heading"><div><p className="design-eyebrow"><span />Our commitment</p><h2 className="design-heading">Why choose <span>Horizon?</span></h2><p className="why-intro">More than a placement. A partner for every step of your career.</p></div></div>
        <div className="why-carousel" role="region" aria-roledescription="carousel" aria-label="Why choose Horizon Placements" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }} onTouchStart={event => { touchStart.current = { x: event.touches[0].clientX, y: event.touches[0].clientY }; }} onTouchEnd={event => { const start = touchStart.current; touchStart.current = null; if (!start) return; const dx = event.changedTouches[0].clientX - start.x; const dy = event.changedTouches[0].clientY - start.y; if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) changeSlide(dx < 0 ? 1 : -1); }} onTouchCancel={() => { touchStart.current = null; }} onKeyDown={event => { if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); changeSlide(event.key === 'ArrowRight' ? 1 : -1); } }}>
          {featuresData.map((feature, index) => {
            const visual = visuals[index];
            const Icon = visual.icon;
            return (
              <div key={feature.id} className="why-slide" hidden={index !== active} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${featuresData.length}`}>
                <div className="why-photo"><Image src={visual.image} alt={visual.alt} fill sizes="(max-width: 767px) 100vw, 620px" className="object-cover" style={{ objectPosition: index === 3 ? 'right center' : 'center' }} /><span className="why-photo-caption">HORIZON PLACEMENTS <span /> YOUR CAREER PARTNER</span></div>
                <div className="why-content">
                  <div className="why-slide-top"><span className="why-feature-icon"><Icon size={27} strokeWidth={1.6} /></span><span className="why-number">0{index + 1} <span>/ 04</span></span></div>
                  <p className="why-label">{visual.label}</p>
                  <h3>{feature.title}</h3>
                  <p className="why-description">{feature.description}</p>
                  <a href="#contact" className="why-link">Talk to our team <ArrowRight size={18} /></a>
                </div>
              </div>
            );
          })}
          <div className="why-controls">
            <div className="why-dots" aria-label="Choose a slide">{featuresData.map((feature, index) => <button key={feature.id} onClick={() => setActive(index)} aria-label={`Show ${feature.title}`} aria-current={index === active ? 'true' : undefined} className={index === active ? 'active' : ''} />)}</div>
            <div className="why-arrows"><button onClick={() => setPaused(value => !value)} aria-label={paused ? 'Play carousel' : 'Pause carousel'}>{paused ? <Play size={16} /> : <Pause size={16} />}</button><button onClick={() => changeSlide(-1)} aria-label="Previous slide"><ArrowLeft size={20} /></button><button onClick={() => changeSlide(1)} aria-label="Next slide"><ArrowRight size={20} /></button></div>
          </div>
        </div>
        <div className="why-feature-tabs">{featuresData.map((feature, index) => <button key={feature.id} onClick={() => setActive(index)} aria-pressed={active === index} className={active === index ? 'active' : ''}><span>0{index + 1}</span>{feature.title}</button>)}</div>
      </div>
    </section>
  );
};
