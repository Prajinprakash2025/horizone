'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const PageLoader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // Quick, smooth loading timer so the user gets an instant premium impression without waiting long
    const timer = setTimeout(() => {
      setFading(true);
      const removeTimer = setTimeout(() => {
        setLoading(false);
      }, 600);
      return () => clearTimeout(removeTimer);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white transition-opacity duration-600 ease-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden={fading}
    >
      <div className="flex flex-col items-center space-y-5 px-4 text-center">
        {/* Logo Badge with soft glowing pulse */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 transition-transform animate-pulse-glow">
          <Image
            src="/logo-mark.png"
            alt="Horizon Placements"
            fill
            sizes="96px"
            className="object-contain"
            priority
          />
        </div>

        {/* Brand Text */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl font-extrabold tracking-wider text-[#0B1F45]">
            HORIZON <span className="text-[#0866E8]">PLACEMENTS</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#52627A] font-medium tracking-wide">
            Your Global Healthcare Career Partner
          </p>
        </div>

        {/* Sleek Animated Loading Bar */}
        <div className="w-40 sm:w-48 h-1 bg-slate-100 rounded-full overflow-hidden relative mt-2">
          <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#0866E8] via-[#2563EB] to-[#D7A62A] rounded-full w-full animate-shimmer" />
        </div>
      </div>
    </div>
  );
};
