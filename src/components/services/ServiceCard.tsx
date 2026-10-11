'use client';

import React from 'react';
import { Users, FileText, Building2, Briefcase, ArrowUpRight, Check } from 'lucide-react';
import { ServiceItem } from '@/types';

interface ServiceCardProps { service: ServiceItem; onSelect?: (service: ServiceItem) => void; }
const icons = { users: Users, document: FileText, staffing: Building2, support: Briefcase };

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const Icon = icons[service.icon];
  return (
    <article className="service-card">
      <div className="service-card-top"><span className="service-icon"><Icon size={27} strokeWidth={1.6} /></span><span className="service-card-rule" /></div>
      <h3>{service.title}</h3>
      <p>{service.shortDescription || service.description}</p>
      <ul>{service.highlights?.slice(0, 2).map(item => <li key={item}><Check size={15} /><span>{item}</span></li>)}</ul>
      <button onClick={() => onSelect?.(service)} className="service-inquiry">Inquire for this service <ArrowUpRight size={18} /></button>
    </article>
  );
};
