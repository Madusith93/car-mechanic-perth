'use client';

import React from 'react';
import Link from 'next/link';
import { DollarSign, Car, ShieldCheck, Clock, Award } from 'lucide-react';

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
    <section id="why" className="relative w-full bg-[#0B0F17] text-white py-12 sm:py-16 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: TEXT CONTENT & FEATURES */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left order-2 lg:order-1">
            
            {/* SUBTITLE BADGE */}
            <div className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#FFC107] uppercase">
              WHY CHOOSE US
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              Workshop-Quality Care, <br className="hidden xs:block" />
              <span className="text-[#FF6B00]">Local Prices</span>
            </h2>

            {/* REASONS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 pt-1 sm:pt-2">
              {whyReasons.map((reason, idx) => {
                const IconComponent = reason.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white/5 border border-white/10 p-4 sm:p-5 rounded-xl space-y-1.5 sm:space-y-2 hover:border-[#FF6B00]/50 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center group-hover:bg-[#FF6B00] transition-all duration-300">
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF6B00] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-extrabold text-sm sm:text-base text-white pt-1">{reason.title}</h3>
                    <p className="text-slate-300 text-[11px] sm:text-xs leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CALL TO ACTION BUTTON */}
            <div className="pt-2 sm:pt-4">
              <Link
                href="#contact"
                className="inline-block bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-8 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FF6B00]/25 active:scale-95"
              >
                BOOK YOUR SERVICE
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: HIGH-QUALITY MECHANIC WORKSHOP IMAGE WITH FLOATING BADGE */}
          <div className="lg:col-span-5 relative w-full flex justify-center order-1 lg:order-2">
            
            {/* Tilted Orange Accent Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] to-[#FF8800] transform rotate-3 rounded-2xl shadow-xl shadow-[#FF6B00]/20 translate-x-1.5 translate-y-1.5 sm:translate-x-3 sm:translate-y-3" />
            
            {/* Image Box */}
            <div className="relative z-10 w-full h-[320px] xs:h-[380px] sm:h-[450px] lg:h-[500px] overflow-hidden rounded-xl bg-slate-900 shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1727893304219-063d142ce6f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern Automotive Workshop Care"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
              />

              {/* 15+ YEARS SERVING PERTH FLOATING OVERLAY BADGE */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-[#0B0F17]/90 backdrop-blur-md border border-white/15 p-3.5 sm:p-4 rounded-xl shadow-2xl flex items-center gap-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#FF6B00] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#FF6B00]/30">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-white leading-none">
                    15+ <span className="text-[#FF6B00]">Years</span>
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 pt-0.5">
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