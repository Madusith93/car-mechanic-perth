'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, CheckCircle2 } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const DEFAULTS = {
  locationBadge: 'Armadale, Perth WA 6112',
  headingLine1: "Perth's Trusted",
  headingHighlight: 'Car Mechanic',
  description:
    "Honest, affordable auto repairs and logbook servicing in Armadale. From brakes and diagnostics to air conditioning — we keep Perth drivers safely on the road.",
  ctaText: 'Get An Appointment',
  backgroundImage:
    'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  features: ['Same-day servicing', 'All makes & models', 'Warranty protected'],
};

export default function Hero() {
  const { content } = useCms();
  const hero = content?.hero;

  const locationBadge = hero?.location_badge || DEFAULTS.locationBadge;
  const headingLine1 = hero?.heading_line1 || DEFAULTS.headingLine1;
  const headingHighlight = hero?.heading_highlight || DEFAULTS.headingHighlight;
  const description = hero?.description || DEFAULTS.description;
  const ctaText = hero?.cta_text || DEFAULTS.ctaText;
  const backgroundImage = hero?.background_image || DEFAULTS.backgroundImage;
  const features = hero?.features?.length ? hero.features : DEFAULTS.features;
import { MapPin, ShieldCheck, Clock, Car, ChevronRight } from 'lucide-react';

export default function Hero() {
  const features = [
    { title: 'Same-day servicing', icon: Clock },
    { title: 'All makes & models', icon: Car },
    { title: 'Warranty protected', icon: ShieldCheck },
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden border-b border-slate-200 bg-slate-100">
      
      {/* 1. FULL BACKGROUND IMAGE (Optimized background position for Mobile vs Desktop) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center sm:bg-right-top lg:bg-center bg-no-repeat transition-all duration-500 transform scale-100"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundImage: `url('https://autosense.lk/wp-content/uploads/2024/02/young-mechanic-with-diagnostic-tool-analyzing-car-engine-problem-auto-repair-shop.jpg')`,
        }}
      />

      {/* 2. GRADIENT OVERLAY (Desktop looks exactly as original, Mobile has softer gradient for image visibility) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b sm:bg-gradient-to-r from-white via-white/85 sm:via-white/85 to-white/40 sm:to-white/30" />
      
      {/* VIBRANT GLOW ACCENTS (Exact Original Desktop Sizes) */}
      <div className="absolute top-1/4 left-5 sm:left-10 z-0 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-[#FF6B00]/25 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-20 right-5 sm:right-1/4 z-0 w-64 sm:w-[450px] h-64 sm:h-[450px] bg-[#EAB308]/25 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      {/* 3. HERO CONTENT AREA (Original PC Heights & Paddings, Mobile-adjusted) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-24 my-auto w-full">
        <div className="max-w-2xl space-y-6 sm:space-y-8">
          
          {/* LOCATION BADGE WITH ACCENT YELLOW / TANGERINE */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#FFC107] uppercase">
            <MapPin className="w-4 h-4 text-[#FF6B00]" />
            <span>{locationBadge}</span>
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
            {headingLine1} <br />
            <span className="text-[#FF6B00]">{headingHighlight}</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
            {description}
          {/* LOCATION BADGE */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/90 backdrop-blur-md border-2 border-[#FF6B00] text-xs font-black tracking-wider text-[#FF6B00] uppercase shadow-lg shadow-[#FF6B00]/20">
              <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0" />
              <span className="text-slate-900">Armadale, Perth WA 6112</span>
            </div>
          </div>

          {/* MAIN HEADING (PC size 6xl exactly preserved) */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.1] text-slate-900">
            Perth&apos;s Trusted <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] to-[#EAB308] drop-shadow-sm">
              Car Mechanic
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-slate-800 text-sm sm:text-base lg:text-lg leading-relaxed font-bold max-w-xl bg-white/60 backdrop-blur-xs p-3.5 sm:p-3 rounded-xl border border-white/80 shadow-xs">
            Honest, affordable auto repairs and logbook servicing in Armadale. From brakes and diagnostics to air conditioning — we keep Perth drivers safely on the road.
          </p>

          {/* CALL TO ACTION BUTTONS (Original PC Button Sizes & Styling) */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#F97316] hover:from-[#e05e00] hover:to-[#ea580c] text-white font-black px-8 sm:px-9 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#FF6B00]/40 hover:shadow-2xl hover:shadow-[#FF6B00]/50 hover:-translate-y-0.5 active:translate-y-0"
            >
              {ctaText}
              <span>Get An Appointment</span>
              <ChevronRight className="w-5 h-5" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center bg-white/90 hover:bg-white text-slate-900 font-black px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border-2 border-slate-200 hover:border-[#FF6B00] shadow-md backdrop-blur-md"
            >
              Explore Services
            </Link>
          </div>

        </div>
      </div>

      {/* 4. BOTTOM FEATURE HIGHLIGHT STRIP (Original Flex Layout for PC, Grid for Mobile) */}
      <div className="relative z-10 w-full border-t border-slate-200/80 bg-white/90 backdrop-blur-md py-4 sm:py-5 px-4 sm:px-6 lg:px-12 shadow-inner">
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