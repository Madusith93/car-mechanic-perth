'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Wrench } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { title: 'Logbook Servicing', href: '#services' },
    { title: 'Brake Repairs', href: '#services' },
    { title: 'Engine Diagnostics', href: '#services' },
    { title: 'Suspension & Steering', href: '#services' },
    { title: 'Air Conditioning', href: '#services' },
  ];

  return (
    <footer className="w-full bg-[#070A0F] text-white border-t border-white/10 relative overflow-hidden">
      
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* COLUMN 1: BRAND INFO */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#FF6B00] flex items-center justify-center text-white shadow-md shadow-[#FF6B00]/30">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-xl font-black  tracking-wider text-white">
                Car Mechanic <span className="text-[#FF6B00]">Perth</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Your local Armadale mechanic for logbook servicing, brakes, diagnostics and repairs. Trusted by drivers across Perth's south-east.
            </p>
          </div>

          {/* COLUMN 2: SERVICES LINKS */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#FFC107]">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-slate-300 hover:text-[#FF6B00] transition-colors inline-block"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: CONTACT INFO */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-[#FFC107]">
              Contact Us
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 mt-0.5" />
                <span>6 Aragon Crt, Armadale WA 6112</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <a href="tel:0862449888" className="hover:text-[#FFC107] transition-colors">
                  08 6244 9888
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FF6B00] shrink-0" />
                <a href="mailto:cmechanicperth@gmail.com" className="hover:text-[#FFC107] transition-colors">
                  cmechanicperth@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT & INCARNATE CREDIT */}
      <div className="w-full bg-black/40 border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-400">
          
          <div>
            © {currentYear} Car Mechanic Perth. All rights reserved. Auto repairs & servicing in Armadale, WA.
          </div>

          <div>
            Designed & Developed by{' '}
            <a
              href="https://incarnate.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFC107] font-bold hover:text-[#FF6B00] transition-colors underline underline-offset-4"
            >
              Incarnate
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}