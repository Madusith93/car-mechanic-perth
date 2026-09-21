'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Wrench } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const DEFAULTS = {
  tagline:
    "Your local Armadale mechanic for logbook servicing, brakes, diagnostics and repairs. Trusted by drivers across Perth's south-east.",
  services: [
    { title: 'Logbook Servicing', href: '#services' },
    { title: 'Brake Repairs', href: '#services' },
    { title: 'Engine Diagnostics', href: '#services' },
    { title: 'Suspension & Steering', href: '#services' },
    { title: 'Air Conditioning', href: '#services' },
  ],
  copyrightSuffix: 'Car Mechanic Perth. All rights reserved. Auto repairs & servicing in Armadale, WA.',
  address: '6 Aragon Crt, Armadale WA 6112',
  phoneDisplay: '08 6244 9888',
  phoneTel: '0862449888',
  email: 'cmechanicperth@gmail.com',
  businessName: 'Car Mechanic Perth',
};

export default function Footer() {
  const { content } = useCms();
  const site = content?.site;
  const footer = content?.footer;
  const currentYear = new Date().getFullYear();

  const tagline = footer?.tagline || DEFAULTS.tagline;
  const services = footer?.services?.length ? footer.services : DEFAULTS.services;
  const copyrightSuffix = footer?.copyright_suffix || DEFAULTS.copyrightSuffix;
  const address = site?.address || DEFAULTS.address;
  const phoneDisplay = site?.phone_display || DEFAULTS.phoneDisplay;
  const phoneTel = site?.phone_tel || DEFAULTS.phoneTel;
  const email = site?.email || DEFAULTS.email;
  const businessNameParts = (site?.business_name || DEFAULTS.businessName).split(' ');
  const businessNameLast = businessNameParts.pop();
  const businessNameRest = businessNameParts.join(' ');

  return (
    <footer className="w-full bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      
      {/* VIBRANT AMBIENT GLOW ACCENTS */}
      <div className="absolute top-0 left-1/4 z-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 z-0 w-96 h-96 bg-[#EAB308]/10 rounded-full blur-3xl pointer-events-none" />

      {/* MAIN FOOTER CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* COLUMN 1: BRAND INFO */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF6B00] to-[#F97316] flex items-center justify-center text-white shadow-lg shadow-[#FF6B00]/25">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xl font-black  tracking-wider text-white">
                {businessNameRest} <span className="text-[#FF6B00]">{businessNameLast}</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              {tagline}
              <span className="text-xl font-black tracking-tight text-white uppercase">
                Car Mechanic <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-[#EAB308]">Perth</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-medium">
              Your local Armadale mechanic for logbook servicing, brakes, diagnostics and repairs. Trusted by drivers across Perth&apos;s south-east.
            </p>
          </div>

          {/* COLUMN 2: SERVICES LINKS */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#EAB308]">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-[#FF6B00] transition-colors font-medium inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFO */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-[#EAB308]">
              Contact Us
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <a href={`tel:${phoneTel}`} className="hover:text-[#FFC107] transition-colors">
                  {phoneDisplay}
                <a href="tel:0862449888" className="hover:text-[#EAB308] transition-colors">
                  08 6244 9888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-[#FFC107] transition-colors">
                  {email}
                <a href="mailto:cmechanicperth@gmail.com" className="hover:text-[#EAB308] transition-colors">
                  cmechanicperth@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT & INCARNATE CREDIT */}
      <div className="relative z-10 w-full bg-slate-950/80 border-t border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-400 font-medium">
          
          <div>
            © {currentYear} {copyrightSuffix}
          </div>

        

        </div>
      </div>

    </footer>
  );
}