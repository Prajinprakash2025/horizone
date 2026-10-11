'use client';

import React from 'react';
import { MapPin, Phone, Mail, MessageSquare, ExternalLink, Clock } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

interface ContactBannerProps {
  onOpenModal?: () => void;
}

export const ContactBanner: React.FC<ContactBannerProps> = ({ onOpenModal }) => {
  return (
    <section id="contact" className="py-12 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dark Navy Card matching Image 2 */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#031329] via-[#071F42] to-[#0A2E63] text-white p-8 sm:p-10 lg:p-12 shadow-2xl border border-blue-900/40">
          
          {/* Subtle Background Pattern Watermark */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Glowing City Skyline silhouette on right background */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 opacity-15 pointer-events-none hidden lg:block bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-sky-400 via-transparent to-transparent" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Side: Contact Us Branding with Pin Icon */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shadow-inner">
                  <MapPin className="w-6 h-6 fill-sky-400/20" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-[1.5px] bg-sky-400 inline-block" />
                    <span className="text-xs font-bold tracking-widest text-sky-300 uppercase">
                      CONTACT US
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
                    Horizon Placements
                  </h3>
                </div>
              </div>

              <p className="text-slate-300 text-sm max-w-sm mb-6 leading-relaxed">
                Connect with our dedicated overseas placement advisors for personalized consultation and smooth documentation.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {onOpenModal && (
                  <button
                    onClick={onOpenModal}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0070F3] hover:bg-[#005cd4] text-white text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/30 transition-all cursor-pointer"
                  >
                    <span>Request Callback</span>
                  </button>
                )}
                
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Horizon%20Placements,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs sm:text-sm font-semibold transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Vertical Divider for desktop */}
            <div className="hidden lg:block lg:col-span-1 h-32 w-[1px] bg-gradient-to-b from-transparent via-blue-700/60 to-transparent mx-auto" />

            {/* Right Side: Contact Information Details */}
            <div className="lg:col-span-6 space-y-4">
              
              {/* Address */}
              <div className="flex items-start gap-3.5 group">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <p className="text-slate-200 group-hover:text-white transition-colors leading-relaxed">
                    {siteConfig.contact.address}
                  </p>
                  <span className="text-[11px] text-sky-300/80 mt-0.5 inline-block">
                    (Branch: St Martin Rd, Shankar Nagar, Maradu, Kochi)
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3.5 group">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-sky-400 shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-200">
                  <span className="text-slate-400 text-xs">Phone:</span>
                  <a
                    href={`tel:${siteConfig.contact.phoneNumbers[0].replace(/\s+/g, '')}`}
                    className="font-semibold text-white hover:text-sky-300 transition-colors"
                  >
                    {siteConfig.contact.phoneNumbers[0]}
                  </a>
                  <span className="text-slate-500">|</span>
                  <a
                    href={`tel:${siteConfig.contact.phoneNumbers[1].replace(/\s+/g, '')}`}
                    className="font-semibold text-white hover:text-sky-300 transition-colors"
                  >
                    {siteConfig.contact.phoneNumbers[1]}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3.5 group">
                <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center text-sky-400 shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-sm">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-slate-200 hover:text-sky-300 transition-colors font-medium break-all"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-center gap-3.5 pt-1 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-sky-400/70 ml-2.5" />
                <span>Office Hours: {siteConfig.contact.workingHours}</span>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
