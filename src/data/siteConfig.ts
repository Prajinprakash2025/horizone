import { ContactInfo, NavItem } from '@/types';

export const navigationLinks: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
];

export const siteConfig: {
  name: string;
  tagline: string;
  eyebrow: string;
  description: string;
  contact: ContactInfo;
} = {
  name: 'Horizon Placements',
  tagline: 'EXPAND THE OPPORTUNITIES',
  eyebrow: 'EXPAND THE OPPORTUNITIES —',
  description: 'Providing end-to-end solutions for candidates and employers worldwide.',
  contact: {
    companyName: 'Horizon Placements',
    tagline: 'Providing end-to-end solutions for candidates and employers worldwide.',
    eyebrow: 'CONTACT US',
    address: '1st Main Rd, Shakthi Nagar, Nadur Payyam, Maradu, Kochi, Kerala – 682304',
    phoneNumbers: ['+91 75919 88867', '+91 79079 98807'],
    email: 'infohorizonplacements@gmail.com',
    whatsapp: '917591988867',
    workingHours: 'Mon - Sat: 9:00 AM - 6:30 PM',
  },
};
