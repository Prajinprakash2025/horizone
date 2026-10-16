export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  icon: 'users' | 'document' | 'staffing' | 'support';
  colorTheme: 'blue' | 'sky' | 'purple' | 'teal';
  highlights?: string[];
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: 'shield' | 'document-check' | 'verified' | 'support';
  badgeColor: 'blue' | 'purple' | 'cyan' | 'royal';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactInfo {
  companyName: string;
  tagline: string;
  eyebrow: string;
  address: string;
  phoneNumbers: string[];
  email: string;
  whatsapp: string;
  workingHours: string;
  instagram?: string;
}
