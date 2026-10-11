'use client';

import React, { useState } from 'react';
import { PageLoader } from '@/components/ui/PageLoader';
import { ScrollProgressBar } from '@/components/ui/ScrollProgressBar';
import { BackToTop } from '@/components/ui/BackToTop';
import { Navbar } from '@/components/navbar/Navbar';
import { Hero } from '@/components/hero/Hero';
import { AboutSection } from '@/components/about/AboutSection';
import { ServicesSection } from '@/components/services/ServicesSection';
import { WhyChooseUsSection } from '@/components/why-choose-us/WhyChooseUsSection';
import { ContactSection } from '@/components/contact/ContactSection';
import { Footer } from '@/components/footer/Footer';
import { ContactModal } from '@/components/contact/ContactModal';
import { FloatingWhatsApp } from '@/components/ui/FloatingWhatsApp';
import { ServiceItem } from '@/types';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenModal = (service?: ServiceItem) => {
    setSelectedService(service || null);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      {/* Branded Loading Splash Effect */}
      <PageLoader />

      {/* Top Scroll Progress Indicator Bar */}
      <ScrollProgressBar />

      <main className="min-h-screen flex flex-col bg-white overflow-x-clip max-w-[100vw]">
        {/* 1. Sticky Navigation Bar */}
        <Navbar onOpenModal={() => handleOpenModal()} />

        {/* Main Sections in Requested Order: Home -> About Us -> Services -> Contact Us */}
        <div className="flex-1 w-full overflow-x-clip">
          {/* Section 1: Home (Hero) */}
          <Hero onExploreClick={() => handleOpenModal()} />

          {/* Section 2: About Us */}
          <AboutSection onExploreClick={() => handleOpenModal()} />

          {/* Section 3: Services (Services + 4-Step Process) */}
          <ServicesSection onSelectService={(service) => handleOpenModal(service)} />

          {/* Section 3.1: Why Choose Us */}
          <WhyChooseUsSection />

          {/* Section 4: Contact Us (Office info + Contact Form + Dark Navy Banner) */}
          <ContactSection />
        </div>

        {/* Footer */}
        <Footer />

        {/* Interactive Consultation / Inquiry Modal */}
        <ContactModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          selectedService={selectedService}
        />

        {/* Floating WhatsApp Quick Action Button (Bottom-Right) */}
        <FloatingWhatsApp />

        {/* Floating Smooth Back to Top Button (Bottom-Left) */}
        <BackToTop />
      </main>
    </>
  );
}
