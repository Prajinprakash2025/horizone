'use client';

import React from 'react';
import { featuresData } from '@/data/features';
import { FeatureCard } from './FeatureCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-16 sm:py-20 md:py-24 relative bg-[#F8FAFD] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" delayMs={100}>
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FF] border border-[#0866E8]/15 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7A62A]" />
              <span className="text-xs font-bold tracking-widest text-[#0866E8] uppercase">
                OUR COMMITMENT
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F45] tracking-tight">
              Why <span className="text-[#0866E8]">Choose Us?</span>
            </h2>
            <p className="mt-3.5 text-xs sm:text-sm md:text-base text-[#52627A] max-w-xl mx-auto">
              Trusted by hundreds of healthcare specialists and premier overseas hospital networks.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Feature Cards in a row with Staggered ScrollReveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {featuresData.map((feature, idx) => (
            <ScrollReveal key={feature.id} direction="up" delayMs={100 + idx * 80}>
              <FeatureCard feature={feature} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
