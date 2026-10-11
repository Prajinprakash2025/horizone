'use client';

import React from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Award,
  Globe2,
  Users2,
  CheckCircle2,
  Stethoscope,
  Building,
  ArrowRight,
} from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface AboutSectionProps {
  onExploreClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreClick }) => {
  const destinations = [
    { country: 'United Arab Emirates', exams: 'DHA / MOH / DOH (HAAD)' },
    { country: 'Saudi Arabia', exams: 'MOH / SCFHS (SMLE)' },
    { country: 'State of Qatar', exams: 'MOPH / QCHP' },
    { country: 'Sultanate of Oman', exams: 'OMSB Licensing' },
    { country: 'Kuwait & Bahrain', exams: 'Ministry of Health' },
    { country: 'Pan-India', exams: 'Leading Super-Specialties' },
  ];

  const medicalCategories = [
    'Specialist & Consultant Doctors',
    'General Physicians (MBBS)',
    'Registered Nurses (ICU, OT, ER, NICU)',
    'Clinical Pharmacists',
    'Medical Lab Technologists',
    'Radiology & MRI Technicians',
    'Physiotherapists',
    'Dental Surgeons & Specialists',
  ];

  const pillars = [
    {
      icon: ShieldCheck,
      title: '100% Transparent & Ethical',
      desc: 'No hidden charges or false commitments. Complete clarity from initial document check until joining.',
      color: 'bg-[#EAF4FF] text-[#0866E8] border-blue-100',
    },
    {
      icon: Award,
      title: 'Licensing & Exam Mastery',
      desc: 'Authoritative support in Dataflow Primary Source Verification (PSV), Prometric coaching, and MOH licensing.',
      color: 'bg-purple-50 text-purple-600 border-purple-100',
    },
    {
      icon: Building,
      title: 'Accredited Global Employers',
      desc: 'We collaborate strictly with verified hospitals, government ministries, and accredited medical clinics abroad.',
      color: 'bg-sky-50 text-sky-600 border-sky-100',
    },
    {
      icon: Users2,
      title: 'Dedicated Personal Guidance',
      desc: 'One-on-one counselor guidance covering resume curation, interview preparation, visa clearance, and travel.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-[#F8FAFD] relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0866E8]/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#EAF4FF] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up" delayMs={100}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FF] border border-[#0866E8]/15 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7A62A]" />
              <span className="text-xs font-bold tracking-widest text-[#0866E8] uppercase">
                ABOUT US
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F45] tracking-tight leading-tight">
              Connecting Healthcare Professionals With{' '}
              <span className="text-[#0866E8]">Global Horizons</span>
            </h2>

            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#52627A] leading-relaxed font-normal">
              Based in Kochi, Kerala, Horizon Placements is a trusted international recruitment and documentation partner committed to guiding doctors, nurses, and paramedical staff towards successful medical careers in Gulf countries and beyond.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-Column Overview & Brand Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch mb-12 sm:mb-16">
          
          {/* Left Column: Brand Showcase Card */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="right" delayMs={150} className="h-full">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-9 shadow-xs border border-slate-200/80 relative flex flex-col justify-between h-full">
                <div>
                  <div className="relative h-12 sm:h-14 w-44 sm:w-52 mb-5">
                    <Image
                      src="/logo.png"
                      alt="Horizon Placements"
                      fill
                      sizes="(max-width: 640px) 176px, 208px"
                      className="object-contain object-left"
                    />
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-[#0B1F45] mb-2.5 leading-snug">
                    Your Trusted Pathway to Overseas Healthcare Careers
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52627A] leading-relaxed mb-6 font-normal">
                    Moving abroad for medical practice involves rigorous licensing exams, credential evaluations, and embassy procedures. We handle every complexity with meticulous care so you can focus on what matters most — your medical career.
                  </p>
                </div>

                <div>
                  {/* Quick Stat Highlights - responsive grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-100">
                    <div className="bg-[#EAF4FF] rounded-2xl p-3.5 sm:p-4 border border-blue-100/60 text-center sm:text-left">
                      <span className="text-2xl sm:text-3xl font-black text-[#0866E8]">100%</span>
                      <p className="text-xs text-[#0B1F45] font-semibold mt-0.5">Verified Hospitals &amp; Clinics</p>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-3.5 sm:p-4 border border-slate-200/60 text-center sm:text-left">
                      <span className="text-2xl sm:text-3xl font-black text-[#D7A62A]">6+</span>
                      <p className="text-xs text-[#0B1F45] font-semibold mt-0.5">GCC Destination Countries</p>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="mt-5 pt-3 border-t border-slate-100 text-center sm:text-left">
                    <button
                      onClick={onExploreClick}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0866E8] hover:text-[#0654c2] transition-colors cursor-pointer group"
                    >
                      <span>Book a free profile evaluation</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 4 Key Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <ScrollReveal key={idx} direction="up" delayMs={150 + idx * 75}>
                  <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-full">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3.5 border ${pillar.color}`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0B1F45] mb-1.5">
                      {pillar.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#52627A] leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

        {/* Global Destinations & Medical Fields Section */}
        <ScrollReveal direction="up" delayMs={200}>
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-9 border border-slate-200/80 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Left: Countries & Licensing Exams */}
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF4FF] text-[#0866E8] flex items-center justify-center">
                    <Globe2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-[#0B1F45]">
                    Countries &amp; Licensing Authorities
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#52627A] mb-4 font-normal">
                  Direct recruitment, Dataflow assistance, and exam processing for:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {destinations.map((dest, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-slate-50 hover:bg-[#EAF4FF]/40 border border-slate-200/60 transition-colors"
                    >
                      <p className="text-xs sm:text-sm font-bold text-[#0B1F45]">
                        {dest.country}
                      </p>
                      <span className="text-[11px] font-medium text-[#52627A] mt-0.5 block">
                        {dest.exams}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Medical Specializations */}
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-[#0B1F45]">
                    Specializations We Place
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#52627A] mb-4 font-normal">
                  Open vacancies and career pathways across healthcare disciplines:
                </p>

                <div className="flex flex-wrap gap-2">
                  {medicalCategories.map((cat, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-semibold text-[#0B1F45] hover:border-[#0866E8] hover:text-[#0866E8] transition-colors"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0866E8] shrink-0" />
                      <span>{cat}</span>
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
