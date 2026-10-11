'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-2.5 bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Chat with our counselors
      </div>

      <a
        href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Horizon%20Placements,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/35 hover:scale-108 active:scale-95 transition-all duration-200"
        aria-label="Direct WhatsApp Contact"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-white/20" />
      </a>
    </aside>
  );
};
