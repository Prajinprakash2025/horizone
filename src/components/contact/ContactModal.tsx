'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Loader2 } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { ServiceItem } from '@/types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: ServiceItem | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  selectedService,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: selectedService?.title || 'Recruitment Services',
    destination: 'Gulf (UAE / Saudi / Qatar / Oman)',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({
        ...prev,
        service: selectedService.title,
      }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppSubmit = () => {
    const text = encodeURIComponent(
      `Hello Horizon Placements,\nName: ${formData.name}\nPhone: ${formData.phone}\nService Needed: ${formData.service}\nPreferred Destination: ${formData.destination}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/${siteConfig.contact.whatsapp}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      <div className="relative bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full p-5 sm:p-8 shadow-2xl border border-blue-100 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F45]">Thank You!</h3>
            <p className="text-[#52627A] text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
              Your inquiry has been received. Our senior recruitment officer will contact you shortly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={handleWhatsAppSubmit}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Connect</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-5 py-2.5 rounded-full border border-slate-200 text-[#0B1F45] text-xs sm:text-sm font-medium hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-5 sm:mb-6">
              <span className="text-xs font-bold text-[#0866E8] uppercase tracking-wider">
                FREE CONSULTATION
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1F45] mt-1">
                Begin Your Career Journey
              </h3>
              <p className="text-[#52627A] text-xs sm:text-sm mt-1">
                Fill in your details below and our expert counselors will evaluate your profile.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Dr. Rahul / Neha V."
                  className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8] focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1F45] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8] focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1F45] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full px-3.5 sm:px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1F45] mb-1">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8] bg-white text-[#0B1F45]"
                  >
                    <option value="Recruitment Services">Recruitment Services</option>
                    <option value="Documentation Support">Documentation Support (Dataflow / Licensing)</option>
                    <option value="Prometric Coaching">Prometric / Exam Coaching</option>
                    <option value="Staffing Solutions">Staffing Solutions (For Employers)</option>
                    <option value="End-to-End Support">End-to-End Candidate Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1F45] mb-1">
                    Target Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8] bg-white text-[#0B1F45]"
                  >
                    <option value="Gulf (UAE / Saudi / Qatar / Oman)">Gulf Countries (UAE, Saudi, Qatar, Oman)</option>
                    <option value="United Arab Emirates (DHA / MOH / DOH)">United Arab Emirates</option>
                    <option value="Saudi Arabia (MOH / SCFHS)">Saudi Arabia</option>
                    <option value="Qatar / Oman / Kuwait / Bahrain">Other GCC Countries</option>
                    <option value="India Placement">India Medical Institutions</option>
                    <option value="Other Overseas">Other Overseas</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B1F45] mb-1">
                  Message / Specialization (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. BSc Nursing with 3 years ICU experience, seeking DHA/Dataflow..."
                  className="w-full px-3.5 sm:px-4 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0866E8]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-[#0866E8] hover:bg-[#0654c2] text-white text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppSubmit}
                  className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
