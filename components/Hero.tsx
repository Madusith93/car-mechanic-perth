'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MapPin, ShieldCheck, Clock, Car, ChevronRight, Sparkles } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const FEATURE_ICONS = [Clock, Car, ShieldCheck];

// Image Slide List (Both Provided Images Included)
const HERO_IMAGES = [
  'https://autosense.lk/wp-content/uploads/2024/02/young-mechanic-with-diagnostic-tool-analyzing-car-engine-problem-auto-repair-shop.jpg',
  'https://images.stockcake.com/public/b/6/8/b6881464-6a5e-42a2-8f56-d8ca35ab0268/mechanic-at-work-stockcake.jpg', // Dynamic Mechanical Auto Repair Image
];

const DEFAULTS = {
  locationBadge: 'Armadale, Perth WA 6112',
  headingLine1: "Perth's Trusted",
  headingHighlight: 'Car Mechanic',
  description:
    'Honest, affordable auto repairs and logbook servicing in Armadale. From brakes and diagnostics to air conditioning — we keep Perth drivers safely on the road.',
  ctaText: 'Get An Appointment',
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
  const featureTexts = hero?.features?.length ? hero.features : DEFAULTS.features;
  const features = featureTexts.map((title: string, idx: number) => ({
    title,
    icon: FEATURE_ICONS[idx % FEATURE_ICONS.length],
  }));

  // Auto Slider State
  const [currentBgIdx, setCurrentBgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIdx((prevIdx) => (prevIdx + 1) % HERO_IMAGES.length);
    }, 5000); // Transitions every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden border-b border-slate-200 bg-slate-100">

      {/* 1. SLIDING BACKGROUND IMAGES WITH SMOOTH FADE & SCALE ANIMATION */}
      {HERO_IMAGES.map((imgUrl, index) => (
        <div
          key={imgUrl}
          className={`absolute inset-0 z-0 bg-cover bg-center sm:bg-right-top lg:bg-center bg-no-repeat transition-all duration-1000 transform ${
            index === currentBgIdx
              ? 'opacity-100 scale-100 contrast-110 saturate-125'
              : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ backgroundImage: `url('${imgUrl}')` }}
        />
      ))}

      {/* 2. GRADIENT OVERLAY (Revealing background while keeping text crisp) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b sm:bg-gradient-to-r from-white/95 via-white/75 sm:via-white/70 to-white/30 sm:to-transparent" />

      {/* VIBRANT AMBIENT GLOW ACCENTS (ORANGE, YELLOW & ELECTRIC BLUE) */}
      <div className="absolute top-1/4 left-5 sm:left-10 z-0 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-gradient-to-br from-[#FF6B00]/20 via-[#00D2FF]/20 to-[#0052D4]/20 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute -bottom-20 right-5 sm:right-1/4 z-0 w-64 sm:w-[450px] h-64 sm:h-[450px] bg-[#EAB308]/20 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none" />

      {/* 3. HERO CONTENT AREA */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-24 my-auto w-full">
        <div className="max-w-2xl space-y-6 sm:space-y-8 animate-in slide-in-from-left-4 duration-700">

          {/* LOCATION BADGE WITH ELECTRIC BLUE ACCENT */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/90 backdrop-blur-md border-2 border-[#00D2FF] text-xs font-black tracking-wider uppercase shadow-lg shadow-[#00D2FF]/20 hover:scale-105 transition-transform duration-300">
              <MapPin className="w-4 h-4 text-[#FF6B00] shrink-0 animate-bounce" />
              <span className="text-slate-900">{locationBadge}</span>
              <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping" />
            </div>
          </div>

          {/* MAIN HEADING WITH ORANGE, YELLOW & BLUE GRADIENTS */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] sm:leading-[1.1] text-slate-900">
            {headingLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] via-[#EAB308] to-[#0052D4] drop-shadow-xs">
              {headingHighlight}
            </span>
          </h1>

          {/* DESCRIPTION BOX */}
          <p className="text-slate-800 text-sm sm:text-base lg:text-lg leading-relaxed font-bold max-w-xl bg-white/80 backdrop-blur-xs p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-md transition-all hover:border-[#00D2FF]">
            {description}
          </p>

          {/* CALL TO ACTION BUTTONS WITH HOVER MICRO-ANIMATIONS */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            
            {/* Primary CTA - Dynamic Gradient Hover Button */}
            <Link
              href="#contact"
              className="relative group overflow-hidden rounded-xl p-[2px] font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-[#FF6B00]/30 hover:shadow-2xl hover:shadow-[#00D2FF]/40"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] via-[#00D2FF] to-[#0052D4] group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative block px-8 sm:px-9 py-3.5 sm:py-4 rounded-[10px] bg-gradient-to-r from-[#FF6B00] to-[#F97316] text-white group-hover:bg-transparent transition-all duration-300 flex items-center justify-center gap-2">
                <span>{ctaText}</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Secondary CTA - Clean White with Blue/Orange Border Hover */}
            <Link
              href="#services"
              className="inline-flex items-center justify-center bg-white/90 hover:bg-white text-slate-900 font-black px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 border-2 border-slate-200 hover:border-[#00D2FF] hover:text-[#0052D4] shadow-md backdrop-blur-md hover:scale-[1.02]"
            >
              <span>Explore Services</span>
              <Sparkles className="w-4 h-4 ml-1.5 text-[#EAB308]" />
            </Link>

          </div>

        </div>
      </div>

      {/* 4. BOTTOM FEATURE STRIP WITH GRADIENT ICON BOXES */}
      <div className="relative z-10 w-full border-t border-slate-200/80 bg-white/90 backdrop-blur-md py-4 sm:py-5 px-4 sm:px-6 lg:px-12 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-start gap-4 sm:gap-12">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div key={idx} className="flex items-center gap-3 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#FF6B00] via-[#EAB308] to-[#00D2FF] p-[2px] shadow-md shadow-[#FF6B00]/20 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-white">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D2FF] stroke-[2.5]" />
                  </div>
                </div>
                <span className="text-xs sm:text-sm font-black text-slate-900 tracking-tight uppercase group-hover:text-[#0052D4] transition-colors">
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