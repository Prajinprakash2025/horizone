'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { navigationLinks } from '@/data/siteConfig';

export const Footer: React.FC = () => {
  const [year, setYear] = useState('2024');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-white border-t border-slate-200/60 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Logo */}
          <div className="flex items-center">
            <div className="relative h-9 w-36">
              <Image
                src="/logo.png"
                alt="Horizon Placements"
                fill
                sizes="144px"
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Navigation links matching design */}
          <nav className="flex items-center gap-6 sm:gap-8">
            {navigationLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs sm:text-sm text-[#52627A] hover:text-[#0866E8] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Copyright text */}
          <div className="text-xs text-[#52627A]/80">
            &copy; {year} Horizon Placements. All Rights Reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};
