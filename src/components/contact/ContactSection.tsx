'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import { InstagramIcon } from '@/components/ui/Icons';
import { siteConfig } from '@/data/siteConfig';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    profession: 'Registered Nurse (BSc / GNM)',
    destination: 'United Arab Emirates (DHA / MOH / DOH)',
    service: 'Recruitment & Job Placement',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Smooth, realistic submission loading effect
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 650);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Horizon Placements,\n` +
      `*Name*: ${formData.name || 'Candidate'}\n` +
      `*Phone*: ${formData.phone || 'N/A'}\n` +
      `*Email*: ${formData.email || 'N/A'}\n` +
      `*Profession*: ${formData.profession}\n` +
      `*Target Country*: ${formData.destination}\n` +
      `*Service Required*: ${formData.service}\n` +
      `*Message*: ${formData.message || 'I would like to inquire about opportunities.'}`
    );
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with ScrollReveal */}
        <ScrollReveal direction="up" delayMs={100}>
          <div className="contact-heading text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF4FF] border border-[#0866E8]/15 mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D7A62A]" />
              <span className="text-xs font-bold tracking-widest text-[#0866E8] uppercase">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F45] tracking-tight">
              Let’s plan your <span className="text-[#0866E8]">next step.</span>
            </h2>

            <p className="mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#52627A] font-normal">
              Have questions regarding overseas licensing, Dataflow, or open healthcare vacancies? Reach out to our dedicated team in Kothamangalam today.
            </p>
          </div>
        </ScrollReveal>

        {/* 2-Column Grid: Left Details & Right Form */}
        <div className="contact-shell grid grid-cols-1 lg:grid-cols-12 items-stretch">
          
          {/* Left Column: Contact Cards & Information */}
          <div className="contact-details lg:col-span-5">
            <ScrollReveal direction="none" delayMs={150} className="contact-office-wrapper">
              {/* Quick Contact Info Card */}
              <div className="contact-office p-6 sm:p-9 space-y-6 sm:space-y-8">
                <h3 className="text-lg sm:text-xl font-bold text-[#0B1F45] mb-1">
                  Office Information
                </h3>
                <p className="text-xs sm:text-sm text-[#52627A] leading-relaxed font-normal">
                  Visit our office or get in touch through phone or WhatsApp for prompt career guidance.
                </p>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] text-[#0866E8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100/60">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Our Location
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#0B1F45] mt-0.5 leading-snug">
                      {siteConfig.contact.address}
                    </p>
                    <span className="text-[11px] sm:text-xs text-[#52627A] block mt-1">
                      P O Junction, Kothamangalam, Ernakulam, Kerala – 686691
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Call Us
                    </h4>
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-3 text-xs sm:text-sm font-bold text-[#0B1F45] mt-0.5">
                      <a
                        href={`tel:${siteConfig.contact.phoneNumbers[0].replace(/\s+/g, '')}`}
                        className="hover:text-[#0866E8] transition-colors"
                      >
                        {siteConfig.contact.phoneNumbers[0]}
                      </a>
                    </div>
                    <span className="text-[11px] sm:text-xs text-[#52627A] block mt-0.5">
                      Lines open Mon–Sat 9:00 AM – 6:30 PM
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EAF4FF] text-[#0866E8] flex items-center justify-center shrink-0 mt-0.5 border border-blue-100/60">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Email Inquiries
                    </h4>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#0866E8] hover:underline block mt-0.5 break-all"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                {siteConfig.contact.instagram && (
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 mt-0.5 border border-pink-100">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        Instagram
                      </h4>
                      <a
                        href={`https://www.instagram.com/${siteConfig.contact.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-pink-600 hover:underline block mt-0.5"
                      >
                        @{siteConfig.contact.instagram}
                      </a>
                    </div>
                  </div>
                )}

                {/* Working Hours */}
                <div className="flex items-start gap-3.5 pt-2 border-t border-slate-200/60">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#D7A62A] flex items-center justify-center shrink-0 border border-amber-100">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Office Timings
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#0B1F45] mt-0.5">
                      {siteConfig.contact.workingHours}
                    </p>
                    <span className="text-[11px] sm:text-xs text-[#52627A]">Sunday Closed</span>
                  </div>
                </div>

              </div>
            </ScrollReveal>

            {/* Direct WhatsApp Callout */}
            <ScrollReveal direction="up" delayMs={200}>
              <div className="contact-chat text-white p-6 sm:p-9 flex flex-col items-stretch gap-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold">Fast WhatsApp Response</h4>
                    <p className="text-xs text-emerald-100">Send your CV for immediate profile evaluation</p>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hello%20Horizon%20Placements,%20I%20would%20like%20to%20know%20more%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-chat-button w-full h-11 px-5 rounded-full text-sm font-bold text-center inline-flex items-center justify-center transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Full Interactive Contact Form */}
          <div className="contact-form-column lg:col-span-7">
            <ScrollReveal direction="none" delayMs={150} className="h-full">
              <div className="contact-form-card bg-white p-6 sm:p-9 lg:p-11 h-full">
                
                {isSubmitted ? (
                  <div className="text-center py-10 sm:py-12 space-y-4 animate-fade-in">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F45]">
                      Inquiry Submitted Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#52627A] max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-[#0B1F45]">{formData.name}</span>. Our recruitment officer will review your qualification and contact you within 24 hours.
                    </p>
                    <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={handleWhatsAppDirect}
                        className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Forward to WhatsApp</span>
                      </button>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="h-11 px-6 rounded-full border border-slate-200 text-[#0B1F45] text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors cursor-pointer"
                      >
                        Submit Another Query
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <span className="text-xs font-bold text-[#0866E8] uppercase tracking-wider">
                        SEND US A MESSAGE
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F45] mt-1">
                        Register Your Profile With Us
                      </h3>
                      <p className="text-xs sm:text-sm text-[#52627A] mt-1">
                        Fill out the form below. All information is held strictly confidential.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label htmlFor="contact-name" className="block text-xs font-semibold text-[#0B1F45] mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input id="contact-name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Dr. Mohammed / Ananya R."
                            className="w-full h-11 px-3.5 sm:px-4 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8] focus:border-transparent transition-all"
                          />
                        </div>

                        <div>
                          <label htmlFor="contact-phone" className="block text-xs font-semibold text-[#0B1F45] mb-1.5">
                            Phone / WhatsApp Number <span className="text-red-500">*</span>
                          </label>
                          <input id="contact-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full h-11 px-3.5 sm:px-4 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8] focus:border-transparent transition-all"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold text-[#0B1F45] mb-1.5">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="youremail@example.com"
                          className="w-full h-11 px-3.5 sm:px-4 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8] focus:border-transparent transition-all"
                        />
                      </div>

                      {/* Profession & Target Country */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                        <div>
                          <label htmlFor="contact-profession" className="block text-xs font-semibold text-[#0B1F45] mb-1.5">
                            Profession / Specialization
                          </label>
                          <select id="contact-profession"
                            value={formData.profession}
                            onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                            className="w-full h-11 px-3 sm:px-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8] bg-white text-[#0B1F45]"
                          >
                            <option value="Specialist / Consultant Doctor">Specialist / Consultant Doctor</option>
                            <option value="General Physician (MBBS)">General Physician (MBBS)</option>
                            <option value="Registered Nurse (BSc / GNM)">Registered Nurse (BSc / GNM)</option>
                            <option value="Clinical Pharmacist (B.Pharm / Pharm.D)">Clinical Pharmacist</option>
                            <option value="Medical Lab Technologist (MLT)">Medical Lab Technologist (MLT)</option>
                            <option value="Radiographer / MRI Tech">Radiographer / MRI Tech</option>
                            <option value="Physiotherapist (BPT / MPT)">Physiotherapist</option>
                            <option value="Dentist (BDS / MDS)">Dentist (BDS / MDS)</option>
                            <option value="Healthcare Administrative / Hospital">Hospital / Management</option>
                            <option value="Other Medical Staff">Other Medical Staff</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="contact-destination" className="block text-xs font-semibold text-[#0B1F45] mb-1.5">
                            Preferred Country / Authority
                          </label>
                          <select id="contact-destination"
                            value={formData.destination}
                            onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                            className="w-full h-11 px-3 sm:px-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8] bg-white text-[#0B1F45]"
                          >
                            <option value="United Arab Emirates (DHA / MOH / DOH)">United Arab Emirates (DHA / MOH / DOH)</option>
                            <option value="Saudi Arabia (MOH / SCFHS)">Saudi Arabia (MOH / SCFHS)</option>
                            <option value="State of Qatar (MOPH)">State of Qatar (MOPH)</option>
                            <option value="Sultanate of Oman (OMSB)">Sultanate of Oman (OMSB)</option>
                            <option value="Kuwait / Bahrain">Kuwait / Bahrain</option>
                            <option value="Pan-India Institutions">India Institutions</option>
                            <option value="Other Overseas Destination">Other Overseas</option>
                          </select>
                        </div>
                      </div>

                      {/* Service Needed */}
                      <div>
                        <label htmlFor="contact-service" className="block text-xs font-semibold text-[#0B1F45] mb-1.5">
                          Service Needed
                        </label>
                        <select id="contact-service"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full h-11 px-3 sm:px-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8] bg-white text-[#0B1F45]"
                        >
                          <option value="Recruitment & Job Placement">Recruitment &amp; Hospital Placement</option>
                          <option value="Documentation & Dataflow PSV">Documentation &amp; Dataflow Verification (PSV)</option>
                          <option value="Prometric Coaching & Licensing">Prometric / DHA / MOH Exam Coaching</option>
                          <option value="Institutional Staffing (For Employers)">Staffing &amp; Manpower Hiring (For Hospitals)</option>
                          <option value="Complete End-to-End Package">Complete End-to-End Career Package</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-semibold text-[#0B1F45] mb-1.5">
                          Your Query or Experience Details (Optional)
                        </label>
                        <textarea id="contact-message"
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please mention your clinical years of experience, current registration, or questions..."
                          className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8]"
                        />
                      </div>

                      {/* Buttons with loading effect & clear hierarchy */}
                      <div className="pt-2 space-y-3">
                        {/* Primary Submit Button */}
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-xl sm:rounded-full bg-[#0866E8] hover:bg-[#0654c2] text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:shadow-[#0866E8]/20 transition-all cursor-pointer disabled:opacity-75 focus:outline-none focus:ring-2 focus:ring-[#0866E8]/40"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>Submitting Registration...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>Submit Registration</span>
                            </>
                          )}
                        </button>

                        {/* Subtle Divider */}
                        <div className="flex items-center gap-3 py-0.5">
                          <span className="h-px flex-1 bg-slate-200" />
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                            Or Chat Directly
                          </span>
                          <span className="h-px flex-1 bg-slate-200" />
                        </div>

                        {/* Secondary WhatsApp Direct Action */}
                        <button
                          type="button"
                          onClick={handleWhatsAppDirect}
                          className="w-full inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl sm:rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/90 text-xs sm:text-sm font-semibold transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
                        >
                          <MessageSquare className="w-4 h-4 text-emerald-600" />
                          <span>Send Details via WhatsApp</span>
                        </button>
                      </div>
                    </form>
                  </div>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
};
