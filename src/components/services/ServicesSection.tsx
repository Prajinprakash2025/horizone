'use client';

import React from 'react';
import { servicesData } from '@/data/services';
import { ServiceCard } from './ServiceCard';
import { ServiceItem } from '@/types';
import { ClipboardCheck, FileSearch, UserCheck, PlaneTakeoff, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const steps = [
    {
      step: '01',
      title: 'Profile Assessment',
      desc: 'Thorough review of academic credentials, clinical experience, and country eligibility.',
      icon: ClipboardCheck,
    },
    {
      step: '02',
      title: 'Dataflow & Licensing',
      desc: 'Complete primary source verification (PSV), Prometric coaching, and authority registration.',
      icon: FileSearch,
    },
    {
      step: '03',
      title: 'Hospital Interviews',
      desc: 'Matching with top healthcare providers, arranging interviews, and contract clarification.',
      icon: UserCheck,
    },
    {
      step: '04',
      title: 'Visa & Departure',
      desc: 'Prompt embassy attestation, visa clearance, flight travel, and relocation support.',
      icon: PlaneTakeoff,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" delayMs={100}>
          <div className="text-center mb-12 sm:mb-16 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FF] border border-[#0866E8]/15 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7A62A]" />
              <span className="text-xs font-bold tracking-widest text-[#0866E8] uppercase">
                WHAT WE OFFER
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F45] tracking-tight">
              Our{' '}
              <span className="text-[#0866E8] relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#D7A62A] rounded-full" />
              </span>
            </h2>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#52627A] font-normal">
              Providing comprehensive recruitment, credentialing, and staffing solutions tailored for healthcare personnel worldwide.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Main Services Grid with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-7 mb-14 sm:mb-18">
          {servicesData.map((service, idx) => (
            <ScrollReveal key={service.id} direction="up" delayMs={100 + idx * 80}>
              <ServiceCard
                service={service}
                onSelect={onSelectService}
              />
            </ScrollReveal>
          ))}
        </div>

        {/* Placement Workflow Timeline with ScrollReveal */}
        <ScrollReveal direction="up" delayMs={200}>
          <div className="bg-gradient-to-r from-[#F8FAFD] via-[#F4F9FF] to-[#F8FAFD] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-12 border border-blue-100/80">
            <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold text-[#0866E8] uppercase tracking-wider">
                HOW IT WORKS
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B1F45] mt-1">
                Our 4-Step Placement Process
              </h3>
              <p className="text-xs sm:text-sm text-[#52627A] mt-2">
                A structured and transparent path designed to fast-track your international career.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {steps.map((st, i) => {
                const Icon = st.icon;
                return (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/70 shadow-xs relative group hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-2xl sm:text-3xl font-black text-blue-100 group-hover:text-blue-200 transition-colors">
                        {st.step}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] text-[#0866E8] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-[#0B1F45] mb-1">
                      {st.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#52627A] leading-relaxed font-normal">
                      {st.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  const el = document.getElementById('contact');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 h-11 px-6 sm:px-7 rounded-full bg-[#0866E8] hover:bg-[#0654c2] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all cursor-pointer"
              >
                <span>Get Started With Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
