'use client';

import React, { useSyncExternalStore } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  MessageSquare,
  CheckCircle2,
  ChevronRight,
  Globe2,
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { navigationLinks, siteConfig } from '@/data/siteConfig';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const subscribeYear = () => () => {};
const currentYear = () => new Date().getFullYear().toString();
const serverYear = () => '';

export const Footer: React.FC = () => {
  const year = useSyncExternalStore(subscribeYear, currentYear, serverYear);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#071738] via-[#0B1F45] to-[#040E24] text-white overflow-hidden">
      
      {/* Top Animated Shimmer Accent Line */}
      <div className="h-[3px] w-full bg-slate-800 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0866E8] via-[#D7A62A] to-[#0866E8] animate-shimmer" />
      </div>

      {/* Ambient background glow elements */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#0866E8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#D7A62A]/5 rounded-full blur-3xl" />
        {/* Subtle grid watermark */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#38BDF8 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Fast Connect Banner inside Footer */}
        <ScrollReveal direction="up" delayMs={50}>
          <div className="pt-12 pb-10 border-b border-white/10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-white/[0.04] backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center gap-4 text-center lg:text-left">
                <div className="w-12 h-12 rounded-2xl bg-[#0866E8]/20 border border-[#0866E8]/40 flex items-center justify-center text-[#D7A62A] shrink-0 hidden sm:flex">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Planning Your Healthcare Career in Gulf or Abroad?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                    Connect with our dedicated overseas placement advisors for personalized consultation.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Horizon%20Placements,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Instant WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phoneNumbers[0].replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>Call Admissions</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Main 4-Column Footer Content */}
        <div className="py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand & Overview (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <ScrollReveal direction="up" delayMs={100}>
              <div className="relative h-12 w-48 sm:w-52">
                <Image
                  src="/logo.png"
                  alt="Horizon Placements"
                  fill
                  sizes="208px"
                  className="object-contain object-left brightness-110"
                />
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                Horizon Placements is a premier international healthcare recruitment and documentation agency based in Kothamangalam, Kerala. Empowering medical professionals with genuine overseas opportunities and streamlined licensing.
              </p>

              {/* Trust badges */}
              <div className="space-y-2 pt-1 text-xs text-slate-300 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D7A62A] shrink-0" />
                  <span>MOH, DHA, HAAD, SMLE &amp; OMSB Licensing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D7A62A] shrink-0" />
                  <span>100% Primary Source Dataflow Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#D7A62A] shrink-0" />
                  <span>Accredited Hospitals in UAE, Saudi &amp; GCC</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <ScrollReveal direction="up" delayMs={150}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#D7A62A]" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Navigation
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                {navigationLinks.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#0866E8]" />
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => handleNavClick('#why-us')}
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#0866E8]" />
                    <span>Why Choose Us</span>
                  </button>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Column 3: Services & GCC (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <ScrollReveal direction="up" delayMs={200}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#D7A62A]" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Services &amp; GCC
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0866E8] mt-1.5 shrink-0" />
                  <span>Healthcare Recruitment (Doctors &amp; Nurses)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0866E8] mt-1.5 shrink-0" />
                  <span>Dataflow Verification (PSV)</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0866E8] mt-1.5 shrink-0" />
                  <span>Prometric &amp; Ministry Exam Coaching</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0866E8] mt-1.5 shrink-0" />
                  <span>Hospital Staffing &amp; Manpower</span>
                </li>
                <li className="flex items-start gap-1.5 text-slate-400 pt-1 text-[11px]">
                  <span>UAE • Saudi Arabia • Qatar • Oman • Kuwait</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Column 4: Contact & Office (From the removed banner!) (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <ScrollReveal direction="up" delayMs={250}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#D7A62A]" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Contact Office
                </h4>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
                {/* Location */}
                <div className="flex items-start gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#D7A62A] shrink-0 mt-0.5 group-hover:bg-[#0866E8]/30 transition-colors">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-200 leading-snug">
                      {siteConfig.contact.address}
                    </p>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      P O Junction, Kothamangalam, Kerala – 686691
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#D7A62A] shrink-0 group-hover:bg-[#0866E8]/30 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 text-slate-200">
                    <a
                      href={`tel:${siteConfig.contact.phoneNumbers[0].replace(/\s+/g, '')}`}
                      className="font-medium hover:text-white transition-colors"
                    >
                      {siteConfig.contact.phoneNumbers[0]}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#D7A62A] shrink-0 group-hover:bg-[#0866E8]/30 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-slate-200 hover:text-white transition-colors break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                {siteConfig.contact.instagram && (
                  <div className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#D7A62A] shrink-0 group-hover:bg-pink-500/30 transition-colors">
                      <InstagramIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <a
                        href={`https://www.instagram.com/${siteConfig.contact.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-200 hover:text-pink-400 transition-colors"
                      >
                        @{siteConfig.contact.instagram}
                      </a>
                    </div>
                  </div>
                )}

                {/* Working Hours */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-400 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400">
                    <span>Mon - Sat: 9:00 AM - 6:30 PM (Sun Closed)</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top Scroll */}
        <div className="border-t border-white/10 py-6 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {year} Horizon Placements. All Rights Reserved. Ethical Healthcare Placement &amp; Documentation.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#D7A62A] transition-colors cursor-pointer group"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
};
