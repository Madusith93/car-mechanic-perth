'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  const phoneNumber = "08 6244 9888";
  const telLink = "tel:0862449888";

  const features = [
    'Same-day servicing',
    'All makes & models',
    'Warranty protected',
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] bg-[#0B0F17] text-white flex flex-col justify-between overflow-hidden">
      
      {/* BACKGROUND IMAGE WITH TANGERINE / DARK GRADIENT OVERLAY */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/50" />
      </div>

      {/* HERO MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 my-auto w-full">
        <div className="max-w-2xl space-y-6">
          
          {/* LOCATION BADGE WITH ACCENT YELLOW / TANGERINE */}
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#FFC107] uppercase">
            <MapPin className="w-4 h-4 text-[#FF6B00]" />
            <span>Armadale, Perth WA 6112</span>
          </div>

          {/* MAIN HEADING */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
            Perth's Trusted <br />
            <span className="text-[#FF6B00]">Car Mechanic</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal max-w-xl">
            Honest, affordable auto repairs and logbook servicing in Armadale. From brakes and diagnostics to air conditioning — we keep Perth drivers safely on the road.
          </p>

          {/* ACTION BUTTON WITH TANGERINE ORANGE */}
          <div className="pt-2">
            <Link
              href="#contact"
              className="inline-block bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-9 py-4 rounded-md text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#FF6B00]/25 active:scale-95"
            >
              Get An Appointment
            </Link>
          </div>

        </div>
      </div>

      {/* BOTTOM FEATURE HIGHLIGHT STRIP */}
      <div className="relative z-10 w-full border-t border-white/10 bg-black/60 backdrop-blur-md py-4 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-start gap-6 sm:gap-12 text-slate-200 text-xs sm:text-sm font-semibold">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#FF6B00]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}