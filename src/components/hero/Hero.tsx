'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Globe, Stethoscope, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface HeroProps {
  onExploreClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const handleScrollToServices = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const el = document.getElementById('services');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-20 sm:pt-28 lg:pt-32 bg-gradient-to-b from-white via-[#F6FAFF] to-[#EAF4FF] overflow-hidden">
      
      {/* Background Depth Elements (3-4% Opacity Texture strictly behind content) */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        
        {/* Soft Radial Gradients for Seamless Depth */}
        <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-[#0866E8]/[0.05] rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[#EAF4FF] rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] bg-[#D7A62A]/[0.03] rounded-full blur-3xl" />

        {/* Faint World Map Texture (approx 3.5% opacity - never competes with text) */}
        <svg
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full max-w-6xl h-auto opacity-[0.035] text-[#0B1F45] fill-current"
          viewBox="0 0 1000 480"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M140,110 Q190,90 230,105 Q270,125 255,175 Q235,215 195,205 Q145,185 135,145 Z" />
          <path d="M255,255 Q295,265 305,325 Q295,395 255,425 Q235,385 235,315 Z" />
          <path d="M455,85 Q505,75 535,105 Q525,145 485,155 Q445,135 455,85 Z" />
          <path d="M475,175 Q545,175 565,235 Q575,315 525,365 Q465,345 455,255 Z" />
          <path d="M565,85 Q675,65 775,115 Q815,175 745,215 Q685,205 645,255 Q615,285 595,225 Q575,165 565,85 Z" />
          <path d="M775,305 Q835,295 865,335 Q855,385 795,385 Q755,355 775,305 Z" />
        </svg>

      </div>

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-14 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left Column: Heading, Subtitle, & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center items-start space-y-5 sm:space-y-6 lg:space-y-7">
            
            <ScrollReveal direction="down" delayMs={100}>
              {/* Small Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EAF4FF] border border-[#0866E8]/15 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D7A62A]" />
                <span className="text-[11px] sm:text-xs font-bold tracking-wider text-[#0866E8] uppercase">
                  YOUR GLOBAL CAREER PARTNER
                </span>
              </div>
            </ScrollReveal>

            {/* Main Heading: "Horizon" (primary blue) + "Placements" (deep navy) */}
            <ScrollReveal direction="up" delayMs={200}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight leading-[1.1] sm:leading-[1.08] break-words">
                <span className="text-[#0866E8] block">Horizon</span>
                <span className="text-[#0B1F45] block">Placements</span>
              </h1>
            </ScrollReveal>

            {/* Supporting Text */}
            <ScrollReveal direction="up" delayMs={300}>
              <p className="text-sm sm:text-lg lg:text-xl text-[#52627A] font-normal leading-relaxed max-w-lg">
                Providing end-to-end solutions for candidates and employers worldwide.
              </p>
            </ScrollReveal>

            {/* CTA Buttons: Responsive Stacking on Mobile */}
            <ScrollReveal direction="up" delayMs={400} className="w-full sm:w-auto">
              <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                
                {/* Primary CTA */}
                <button
                  onClick={handleScrollToServices}
                  className="h-11 sm:h-12 px-6 sm:px-8 rounded-full bg-[#0866E8] hover:bg-[#0654c2] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md hover:shadow-[#0866E8]/25 transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0866E8]/40"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>

                {/* Secondary CTA */}
                <button
                  onClick={handleScrollToContact}
                  className="h-11 sm:h-12 px-6 sm:px-8 rounded-full bg-white hover:bg-[#F8FAFC] text-[#0B1F45] border border-slate-300 hover:border-[#0B1F45] font-semibold text-sm sm:text-base shadow-xs hover:shadow-sm transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0B1F45]/20"
                >
                  <span>Contact Us</span>
                </button>

              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Existing Recruitment Professionals Image */}
          <div className="lg:col-span-6 mt-4 lg:mt-0">
            <ScrollReveal direction="up" delayMs={300}>
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                
                {/* Ambient Glow for Natural Background Integration */}
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#0866E8]/10 via-[#EAF4FF] to-[#D7A62A]/10 rounded-3xl blur-xl pointer-events-none" />

                {/* Clean Image Container with Refined Rounded Corners & Thin Border */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-slate-900/8 border border-blue-100/80 bg-white">
                  <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] w-full">
                    <Image
                      src="/hero-professionals-hd.jpg"
                      alt="Horizon Placements Healthcare Recruitment Professionals in Dubai"
                      fill
                      sizes="(max-width: 1024px) 100vw, 560px"
                      className="object-cover object-center"
                      priority
                    />
                    {/* Subtle, soft light overlay at very bottom for seamless integration */}
                    <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/30 to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Trust / Feature Strip: Clean Horizontal Strip Below Hero */}
      <div className="relative z-10 border-t border-slate-200/70 bg-white/95 backdrop-blur-sm py-4 sm:py-6 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            
            {/* 1. Verified Gulf Placements */}
            <div className="flex items-center justify-start sm:justify-center gap-3.5 px-2 sm:px-4 py-3 md:py-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EAF4FF] text-[#0866E8] flex items-center justify-center shrink-0 border border-blue-100/60 shadow-xs">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0B1F45] tracking-tight">
                  Verified Gulf Placements
                </h4>
                <p className="text-xs text-[#52627A]">
                  Accredited hospitals across UAE, Saudi &amp; GCC
                </p>
              </div>
            </div>

            {/* 2. MOH & Prometric Assistance */}
            <div className="flex items-center justify-start sm:justify-center gap-3.5 px-2 sm:px-4 py-3 md:py-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EAF4FF] text-[#0866E8] flex items-center justify-center shrink-0 border border-blue-100/60 shadow-xs">
                <Stethoscope className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0B1F45] tracking-tight">
                  MOH &amp; Prometric Assistance
                </h4>
                <p className="text-xs text-[#52627A]">
                  Dataflow verification, licensing &amp; exam coaching
                </p>
              </div>
            </div>

            {/* 3. Transparent Process */}
            <div className="flex items-center justify-start sm:justify-center gap-3.5 px-2 sm:px-4 py-3 md:py-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EAF4FF] text-[#0866E8] flex items-center justify-center shrink-0 border border-blue-100/60 shadow-xs">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-[#0B1F45] tracking-tight">
                  Transparent Process
                </h4>
                <p className="text-xs text-[#52627A]">
                  Zero hidden charges &amp; ethical recruitment
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
