'use client';

import React from 'react';
import Link from 'next/link';
import { DollarSign, Car, ShieldCheck, Clock } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

// Icons stay fixed to this order in the CMS — content editors can only edit
// the title/desc text and count on the same four icons.
const ICONS = [DollarSign, Car, ShieldCheck, Clock];

const DEFAULTS = {
  badge: 'WHY CHOOSE US',
  headingLine1: 'Workshop-Quality Care,',
  headingHighlight: 'Local Prices',
  image:
    'https://images.unsplash.com/photo-1727893304219-063d142ce6f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ctaText: 'BOOK YOUR SERVICE',
  reasons: [
    {
      title: 'Honest & Upfront Pricing',
      desc: 'No surprises. We quote before we start and only carry out approved work.',
    },
    {
      title: 'All Makes & Models',
      desc: 'European, Japanese, Australian and 4WDs — our technicians work across every marque.',
    },
    {
      title: 'Warranty Protected',
      desc: 'Logbook servicing that keeps your new-car warranty fully intact.',
    },
    {
      title: 'Fast Turnaround',
      desc: "Most services completed same day so you're back on the road without the wait.",
    },
  ],
};

export default function WhyChooseUsSection() {
  const { content } = useCms();
  const cms = content?.whyUs;

  const badge = cms?.badge || DEFAULTS.badge;
  const headingLine1 = cms?.heading_line1 || DEFAULTS.headingLine1;
  const headingHighlight = cms?.heading_highlight || DEFAULTS.headingHighlight;
  const image = cms?.image || DEFAULTS.image;
  const ctaText = cms?.cta_text || DEFAULTS.ctaText;
  const items = cms?.items?.length ? cms.items : DEFAULTS.reasons;
  const whyReasons = items.map((item, idx) => ({ ...item, icon: ICONS[idx] || ICONS[ICONS.length - 1] }));

  return (
    <section id="why" className="relative w-full bg-[#0B0F17] text-white py-16 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT & FEATURES */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            
            {/* SUBTITLE BADGE */}
            <div className="inline-block text-xs font-bold tracking-[0.2em] text-[#FFC107] uppercase">
              {badge}
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              {headingLine1} <br />
              <span className="text-[#FF6B00]">{headingHighlight}</span>
            </h2>

            {/* REASONS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {whyReasons.map((reason, idx) => {
                const IconComponent = reason.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-2 hover:border-[#FF6B00]/50 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center group-hover:bg-[#FF6B00] transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-[#FF6B00] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-extrabold text-base text-white pt-1">{reason.title}</h3>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CALL TO ACTION BUTTON */}
            <div className="pt-4">
              <Link
                href="#contact"
                className="inline-block bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-8 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FF6B00]/25 active:scale-95"
              >
                {ctaText}
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH-QUALITY MECHANIC WORKSHOP IMAGE */}
          <div className="lg:col-span-5 relative w-full flex justify-center order-1 lg:order-2">
            
            {/* Tilted Orange Accent Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] to-[#FF8800] transform rotate-3 rounded-2xl shadow-xl shadow-[#FF6B00]/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />
            
            {/* Image Box */}
            <div className="relative z-10 w-full h-[380px] sm:h-[450px] lg:h-[500px] overflow-hidden rounded-xl bg-slate-900 shadow-2xl border border-white/10">
              <img
                src={image}
                alt="Modern Automotive Workshop Care"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}