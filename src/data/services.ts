import { ServiceItem } from '@/types';

export const servicesData: ServiceItem[] = [
  {
    id: 'recruitment-services',
    title: 'Recruitment Services',
    shortDescription: 'Connecting doctors, nurses and allied healthcare professionals with hospitals across India and the Gulf.',
    description:
      'We provide end-to-end recruitment solutions to healthcare professionals, ensuring them suitable positions at hospitals and medical institutions across India and Gulf countries.',
    icon: 'users',
    colorTheme: 'blue',
    highlights: [
      'Doctors, Specialists & Consultants',
      'Registered Nurses & Allied Healthcare',
      'Top Hospitals in UAE, Saudi, Qatar & Oman',
      'Direct Employer Interviews',
    ],
  },
  {
    id: 'documentation-support',
    title: 'Documentation Support',
    shortDescription: 'Complete support for Dataflow verification, medical licensing, credential checks and Prometric exam preparation.',
    description:
      'We offer complete documentation assistance for medical professionals planning to work in Gulf countries. This includes Dataflow verification, Eligibility, Prometric/Exam coaching, credential checks, translations, and required licensing support.',
    icon: 'document',
    colorTheme: 'sky',
    highlights: [
      'Dataflow Verification & PSV',
      'MOH, DHA, HAAD / DoH, SMLE, OMSB',
      'Prometric Exam Preparation & Coaching',
      'Embassy & HRD Attestation',
    ],
  },
  {
    id: 'staffing-solutions',
    title: 'Staffing Solutions',
    shortDescription: 'Helping hospitals and clinics hire qualified, verified medical professionals with the right skills and credentials.',
    description:
      'Helping hospitals, clinics, and healthcare companies hire verified, skilled, and job-ready medical professionals with the right certifications. Our staffing solutions ensure a smooth and reliable recruitment process by matching the right talent with opportunity.',
    icon: 'staffing',
    colorTheme: 'purple',
    highlights: [
      'Fast-track Candidate Sourcing',
      'Thorough Clinical & Credential Vetting',
      'Reduced Hiring Turnaround Time',
      'Customized Hospital & Clinic Staffing',
    ],
  },
  {
    id: 'candidate-support',
    title: 'End-to-End Candidate Support',
    shortDescription: 'Personal guidance from application and interviews through visa, travel, arrival and onboarding.',
    description:
      'From application to joining — complete guidance at every step of your journey until your safe arrival and onboarding.',
    icon: 'support',
    colorTheme: 'teal',
    highlights: [
      'One-on-One Career Consultation',
      'Offer Letter & Contract Clarification',
      'Visa Processing & Flight Coordination',
      'Relocation & Initial Settling Assistance',
    ],
  },
];
