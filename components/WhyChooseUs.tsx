'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const DEFAULTS = {
  badge: 'WHAT WE DO',
  headingLine1: 'Complete Car Servicing',
  headingHighlight: '& Repairs',
  image:
    'https://plus.unsplash.com/premium_photo-1661411128818-08593b7738ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  services: [
    {
      title: 'Logbook Servicing',
      desc: 'New-car warranty safe logbook servicing for every make and model, stamped and documented.',
    },
    {
      title: 'Brake Repairs',
      desc: 'Pads, rotors, calipers and fluid flushes. Squealing or spongy brakes fixed fast and safely.',
    },
    {
      title: 'Engine Diagnostics',
      desc: 'Check-engine light on? Our scan tools pinpoint faults so you only pay for what\'s needed.',
    },
    {
      title: 'Suspension & Steering',
      desc: 'Shocks, struts, bushes and steering components for a smooth, controlled ride.',
    },
    {
      title: 'Air Conditioning',
      desc: 'Re-gas, leak detection and full A/C repairs to keep your cabin cool through the Perth summer.',
    },
    {
      title: 'Tyres & Alignment',
      desc: 'Tyre fitting, balancing and precision wheel alignment to extend tyre life and improve handling.',
    },
  ],
};

export default function ServicesSection() {
  const { content } = useCms();
  const cms = content?.services;

  const badge = cms?.badge || DEFAULTS.badge;
  const headingLine1 = cms?.heading_line1 || DEFAULTS.headingLine1;
  const headingHighlight = cms?.heading_highlight || DEFAULTS.headingHighlight;
  const image = cms?.image || DEFAULTS.image;
  const services = cms?.items?.length ? cms.items : DEFAULTS.services;

  return (
    <section id="services" className="relative w-full bg-[#0B0F17] text-white py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: FIXED IMAGE WITH TILTED BACKGROUND BORDER */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Tilted Orange Background Box */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] to-[#FF8800] transform -rotate-3 rounded-2xl shadow-xl shadow-[#FF6B00]/20 translate-x-1.5 translate-y-1.5 sm:translate-x-3 sm:translate-y-3" />
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full h-[280px] xs:h-[340px] sm:h-[420px] lg:h-[500px] overflow-hidden rounded-xl bg-slate-900 shadow-2xl border border-white/10">
              <img
                src={image}
                alt="Professional Car Mechanic at Work"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>

          {/* RIGHT COLUMN: SERVICES CONTENT */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left">
            
            {/* SUBTITLE BADGE */}
            <div className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#FFC107] uppercase">
              {badge}
            </div>

            {/* MAIN HEADING (NORMAL TITLE CASE) */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              {headingLine1} <br className="hidden xs:block" />
              <span className="text-[#FF6B00]">{headingHighlight}</span>
            </h2>

            {/* SERVICES LIST */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              {services.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 border border-white/10 p-3.5 sm:p-4 rounded-xl space-y-1 sm:space-y-1.5 hover:border-[#FF6B00]/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6B00] shrink-0" />
                    <h3 className="font-extrabold text-xs sm:text-sm text-white">{item.title}</h3>
                  </div>
                  <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}