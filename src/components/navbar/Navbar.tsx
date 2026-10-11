'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, ArrowRight, MessageSquare } from 'lucide-react';
import { navigationLinks, siteConfig } from '@/data/siteConfig';

interface NavbarProps {
  onOpenModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check current visible section for active indicator
      const sections = ['home', 'about', 'services', 'why-us', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_4px_20px_rgba(11,31,69,0.06)] py-2.5 sm:py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 sm:h-12">
            
            {/* Logo on Left - responsive dimensions */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0866E8] rounded-lg"
              aria-label="Horizon Placements - Home"
            >
              <div className="relative h-10 w-40 sm:h-14 sm:w-56 overflow-hidden transition-opacity hover:opacity-90">
                <Image
                  src="/logo-full.png"
                  alt="Horizon Placements"
                  fill
                  sizes="(max-width: 640px) 160px, 224px"
                  className="object-cover object-left"
                  priority
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-9">
              {navigationLinks.map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`text-sm font-semibold transition-colors duration-200 relative py-2 ${
                      isActive
                        ? 'text-[#0866E8]'
                        : 'text-[#52627A] hover:text-[#0866E8]'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#D7A62A] rounded-full animate-fade-in" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right Action: Explore Services Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => {
                  if (onOpenModal) {
                    onOpenModal();
                  } else {
                    handleNavClick('#services');
                  }
                }}
                className="inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[#0866E8] hover:bg-[#0654c2] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md hover:shadow-[#0866E8]/20 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0866E8]/30"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Menu Hamburger Toggle */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-[#0B1F45] hover:text-[#0866E8] hover:bg-[#EAF4FF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0866E8]/30"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-1">
              {navigationLinks.map((item) => {
                const targetId = item.href.replace('#', '');
                const isActive = activeSection === targetId;

                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#EAF4FF] text-[#0866E8]'
                        : 'text-[#0B1F45] hover:bg-slate-50 hover:text-[#0866E8]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#D7A62A]" />}
                  </button>
                );
              })}

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenModal) {
                      onOpenModal();
                    } else {
                      handleNavClick('#services');
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 h-11 rounded-full bg-[#0866E8] hover:bg-[#0654c2] text-white text-sm font-semibold shadow-sm transition-colors cursor-pointer"
                >
                  <span>Explore Services</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 h-10 rounded-full border border-slate-200 text-[#0B1F45] text-xs font-semibold hover:bg-slate-50 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Consultation</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs z-40 md:hidden animate-fade-in"
          aria-hidden="true"
        />
      )}
    </>
  );
};
