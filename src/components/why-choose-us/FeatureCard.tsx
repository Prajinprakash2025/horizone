'use client';

import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, HeartHandshake } from 'lucide-react';
import { FeatureItem } from '@/types';

interface FeatureCardProps {
  feature: FeatureItem;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  const getBadgeStyle = () => {
    switch (feature.badgeColor) {
      case 'blue':
        return 'bg-[#EAF4FF] text-[#0866E8] border-blue-100/80';
      case 'purple':
        return 'bg-purple-50 text-purple-600 border-purple-100';
      case 'cyan':
        return 'bg-sky-50 text-sky-600 border-sky-100';
      case 'royal':
        return 'bg-[#EAF4FF] text-[#0866E8] border-blue-100/80';
      default:
        return 'bg-[#EAF4FF] text-[#0866E8] border-blue-100/80';
    }
  };

  const renderIcon = () => {
    switch (feature.icon) {
      case 'shield':
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'document-check':
        return <FileCheck className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'verified':
        return <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'support':
        return <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />;
      default:
        return <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/70 shadow-xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
      <div className="flex items-start gap-4">
        {/* Icon Container */}
        <div
          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 border transition-transform group-hover:scale-105 duration-200 ${getBadgeStyle()}`}
        >
          {renderIcon()}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-bold text-[#0B1F45] group-hover:text-[#0866E8] transition-colors leading-snug mb-1">
            {feature.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#52627A] leading-relaxed font-normal">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};
