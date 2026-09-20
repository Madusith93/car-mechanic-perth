'use client';

import React from 'react';
import Link from 'next/link';
import { DollarSign, Car, ShieldCheck, Clock, Award, ChevronRight } from 'lucide-react';

export default function WhyChooseUsSection() {
  const whyReasons = [
    {
      icon: DollarSign,
      title: 'Honest & Upfront Pricing',
      desc: 'No surprises. We quote before we start and only carry out approved work.',
    },
    {
      icon: Car,
      title: 'All Makes & Models',
      desc: 'European, Japanese, Australian and 4WDs — our technicians work across every marque.',
    },
    {
      icon: ShieldCheck,
      title: 'Warranty Protected',
      desc: 'Logbook servicing that keeps your new-car warranty fully intact.',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      desc: "Most services completed same day so you're back on the road without the wait.",
    },
  ];

  return (
    <section id="why" className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">
      
      {/* VIBRANT AMBIENT GLOW ACCENTS */}
      <div className="absolute top-1/4 -right-20 z-0 w-80 h-80 bg-[#EAB308]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 z-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT & FEATURES */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
            
            {/* SUBTITLE BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 text-xs font-black tracking-widest text-slate-900 uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span>WHY CHOOSE US</span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
              Workshop-Quality Care, <br className="hidden xs:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] to-[#EAB308]">
                Local Prices
              </span>
            </h2>

            {/* REASONS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {whyReasons.map((reason, idx) => {
                const IconComponent = reason.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-slate-50 border border-slate-200/90 hover:border-[#FF6B00] p-5 rounded-2xl space-y-2.5 transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-[#FF6B00]/10 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#EAB308] flex items-center justify-center shrink-0 shadow-md shadow-[#FF6B00]/20 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5 text-white stroke-[2.5]" />
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#FF6B00] transition-colors">{reason.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      {reason.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CALL TO ACTION BUTTON */}
            <div className="pt-3">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#F97316] hover:from-[#e05e00] hover:to-[#ea580c] text-white font-black px-9 py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#FF6B00]/30 hover:shadow-2xl hover:shadow-[#FF6B00]/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Book Your Service</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH-QUALITY MECHANIC WORKSHOP IMAGE WITH FLOATING BADGE */}
          <div className="lg:col-span-5 relative w-full flex justify-center order-1 lg:order-2">
            
            {/* Tilted Vibrant Orange Gradient Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] via-[#F97316] to-[#EAB308] transform rotate-2 rounded-3xl shadow-xl shadow-[#FF6B00]/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />
            
            {/* Image Box */}
            <div className="relative z-10 w-full h-[320px] xs:h-[380px] sm:h-[450px] lg:h-[520px] overflow-hidden rounded-2xl bg-white shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1727893304219-063d142ce6f3?q=80&w=800&auto=format&fit=crop"
                alt="Modern Automotive Workshop Care"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />

              {/* FLOATING OVERLAY BADGE */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl shadow-xl flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#EAB308] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#FF6B00]/30">
                  <Award className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900 leading-none">
                    15+ <span className="text-[#FF6B00]">Years</span>
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 pt-1">
                    Serving Perth
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}