'use client';

import React from 'react';
import { Users, FileText, Building2, Briefcase, ChevronRight } from 'lucide-react';
import { ServiceItem } from '@/types';

interface ServiceCardProps {
  service: ServiceItem;
  onSelect?: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const getThemeStyles = () => {
    switch (service.colorTheme) {
      case 'blue':
        return {
          iconBg: 'bg-[#EAF4FF] text-[#0866E8]',
          hoverBorder: 'hover:border-[#0866E8]/40',
        };
      case 'sky':
        return {
          iconBg: 'bg-sky-50 text-sky-600',
          hoverBorder: 'hover:border-sky-300',
        };
      case 'purple':
        return {
          iconBg: 'bg-purple-50 text-purple-600',
          hoverBorder: 'hover:border-purple-300',
        };
      case 'teal':
        return {
          iconBg: 'bg-emerald-50 text-emerald-600',
          hoverBorder: 'hover:border-emerald-300',
        };
      default:
        return {
          iconBg: 'bg-[#EAF4FF] text-[#0866E8]',
          hoverBorder: 'hover:border-[#0866E8]/40',
        };
    }
  };

  const theme = getThemeStyles();

  const renderIcon = () => {
    switch (service.icon) {
      case 'users':
        return <Users className="w-6 h-6" />;
      case 'document':
        return <FileText className="w-6 h-6" />;
      case 'staffing':
        return <Building2 className="w-6 h-6" />;
      case 'support':
        return <Briefcase className="w-6 h-6" />;
      default:
        return <Users className="w-6 h-6" />;
    }
  };

  return (
    <div
      onClick={() => onSelect && onSelect(service)}
      className={`group relative bg-white rounded-2xl sm:rounded-3xl p-7 border border-slate-200/70 shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between cursor-pointer ${theme.hoverBorder}`}
    >
      <div>
        {/* Icon Container */}
        <div
          className={`w-13 h-13 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-105 duration-200 ${theme.iconBg}`}
        >
          {renderIcon()}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#0B1F45] mb-2.5 group-hover:text-[#0866E8] transition-colors leading-snug">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#52627A] leading-relaxed font-normal mb-5">
          {service.description}
        </p>

        {/* Key Highlights list */}
        {service.highlights && service.highlights.length > 0 && (
          <div className="space-y-1.5 mb-5 pt-3 border-t border-slate-100">
            {service.highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#52627A]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0866E8] shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Card Action Link */}
      <div className="pt-2 flex items-center text-xs font-semibold text-[#0866E8] group-hover:underline">
        <span>Inquire for this service</span>
        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};
