'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, ShieldCheck, Clock, Car, ChevronRight } from 'lucide-react';

export default function Hero() {
  const features = [
    { title: 'Same-day servicing', icon: Clock },
    { title: 'All makes & models', icon: Car },
    { title: 'Warranty protected', icon: ShieldCheck },
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden border-b border-slate-200 bg-slate-900">
      
      {/* 1. HIGH VISIBILITY BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center sm:bg-right-top lg:bg-center bg-no-repeat transition-all duration-2000 transform scale-105"
        style={{
          backgroundImage: `url('https://images.stockcake.com/public/b/6/8/b6881464-6a5e-42a2-8f56-d8ca35ab0268/mechanic-at-work-stockcake.jpg')`,
        }}
      />

      {/* 2. BALANCED GRADIENT OVERLAY (Enhanced Image Visibility with Crisp Left-side Text Contrast) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/75 via-50% to-transparent sm:to-white/10" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-slate-900/30 via-transparent to-white/40 sm:hidden" />
      
      {/* VIBRANT GLOW ACCENTS */}
      <div className="absolute top-1/4 left-5 sm:left-10 z-0 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-[#FF6B00]/20 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-20 right-5 sm:right-1/4 z-0 w-64 sm:w-[450px] h-64 sm:h-[450px] bg-[#EAB308]/20 rounded-full blur-[90px] sm:blur-[110px] pointer-events-none" />

      {/* 3. HERO CONTENT AREA */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-24 my-auto w-full">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          
          {/* LOCATION BADGE */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border-2 border-[#FF6B00] text-xs font-black tracking-wider text-[#FF6B00] uppercase shadow-lg shadow-[#FF6B00]/20">
              <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
              <span className="text-slate-900">Armadale, Perth WA 6112</span>
            </div>
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.1] text-slate-900">
            Perth&apos;s Trusted <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] to-[#EAB308] drop-shadow-sm">
              Car Mechanic
            </span>
          </h1>

          {/* DESCRIPTION WITH GLASS BACKGROUND */}
          <p className="text-slate-900 text-sm sm:text-base lg:text-lg leading-relaxed font-bold max-w-xl bg-white/80 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/90 shadow-lg">
            Honest, affordable auto repairs and logbook servicing in Armadale. From brakes and diagnostics to air conditioning — we keep Perth drivers safely on the road.
          </p>

          {/* CALL TO ACTION BUTTONS */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#F97316] hover:from-[#e05e00] hover:to-[#ea580c] text-white font-black px-8 sm:px-9 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#FF6B00]/40 hover:shadow-2xl hover:shadow-[#FF6B00]/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get An Appointment</span>
              <ChevronRight className="w-5 h-5" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center bg-white/95 hover:bg-white text-slate-900 font-black px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border-2 border-slate-200 hover:border-[#FF6B00] shadow-lg backdrop-blur-md"
            >
              Explore Services
            </Link>
          </div>

        </div>
      </div>

      {/* 4. BOTTOM FEATURE HIGHLIGHT STRIP */}
      <div className="relative z-10 w-full border-t border-slate-200/80 bg-white/95 backdrop-blur-md py-4 sm:py-5 px-4 sm:px-6 lg:px-12 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-start gap-4 sm:gap-12">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#EAB308] flex items-center justify-center shrink-0 shadow-md shadow-[#FF6B00]/25">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.5]" />
                </div>
                <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight uppercase">
                  {feature.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}