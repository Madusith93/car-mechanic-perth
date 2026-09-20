'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Navigation, PhoneCall } from 'lucide-react';

export default function LocalSeoSection() {
  const suburbs = [
    'Armadale',
    'Kelmscott',
    'Gosnells',
    'Thornlie',
    'Cannington',
    'Byford',
    'Seville Grove',
    'Perth Metro',
  ];

  const address = "6 Aragon Crt, Armadale WA 6112";
  const googleMapsUrl = "https://maps.google.com/?q=6+Aragon+Crt,+Armadale+WA+6112";

  return (
    <section id="areas" className="relative w-full bg-slate-50 text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">
      
      {/* VIBRANT AMBIENT GLOW ACCENTS */}
      <div className="absolute top-1/3 -left-20 z-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 z-0 w-80 h-80 bg-[#EAB308]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: LOCAL SEO CONTENT & SUBURBS */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* SUBTITLE BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 text-xs font-black tracking-widest text-slate-900 uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span>LOCAL SEO</span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
              Proudly Serving Armadale & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] to-[#EAB308]">
                Perth&apos;s South-East
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
              Based on Aragon Crt in Armadale, Car Mechanic Perth is the convenient choice for drivers right across Perth&apos;s south-eastern suburbs. If you&apos;re searching for a reliable mechanic near you, we&apos;ve got you covered.
            </p>

            {/* SERVICED SUBURBS GRID */}
            <div className="pt-2 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500">
                Suburbs We Cover Near You:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {suburbs.map((suburb, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/90 rounded-xl py-2.5 px-3 flex items-center gap-2 shadow-xs hover:border-[#FF6B00] hover:shadow-sm transition-all"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800">
                      {suburb}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#F97316] hover:from-[#e05e00] hover:to-[#ea580c] text-white font-black px-8 py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#FF6B00]/30 hover:shadow-2xl hover:shadow-[#FF6B00]/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <Link
                href="tel:0862449888"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-black px-8 py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase border-2 border-slate-200 hover:border-[#FF6B00] shadow-sm transition-all duration-300"
              >
                <PhoneCall className="w-4 h-4 text-[#FF6B00]" />
                <span>Call Workshop</span>
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: LOCATION CARD WITH VISIBLE CAR BACKGROUND IMAGE */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Tilted Vibrant Orange Gradient Accent Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] via-[#F97316] to-[#EAB308] transform -rotate-2 rounded-3xl shadow-xl shadow-[#FF6B00]/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

            {/* Location Card Container */}
            <div className="relative z-10 w-full rounded-2xl bg-white border-4 border-white p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[380px]">
              
              {/* CLEAR BACKGROUND IMAGE WITH SOFT OVERLAY */}
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                style={{
                  backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUscNsNbC_q9mSXtvyZkWh7F1ag7HHwemgPLvHhPzLpcYxatve6-f_Q0w&s=10')`,
                }}
              />
              
              {/* White Gradient Overlay (Makes text easily readable while keeping image sharp) */}
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />

              <div className="flex items-center justify-between relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#EAB308] flex items-center justify-center text-white shadow-md shadow-[#FF6B00]/30">
                  <MapPin className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div className="px-3 py-1 rounded-full bg-[#EAB308]/20 border border-[#EAB308]/50 text-[10px] font-black text-slate-900 tracking-wider uppercase shadow-xs">
                  Armadale WA
                </div>
              </div>

              <div className="space-y-1.5 relative z-10">
                <span className="text-xs font-black uppercase tracking-wider text-[#FF6B00]">
                  WORKSHOP LOCATION
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Car Mechanic Perth
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-bold">
                  {address}
                </p>
              </div>

              {/* Map Preview Callout */}
              <div className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl p-4 space-y-1.5 relative z-10 shadow-sm">
                <div className="flex items-center justify-between text-xs text-slate-500 font-bold uppercase tracking-wider">
                  <span>LOCATION HIGHLIGHT</span>
                  <span className="text-[#FF6B00]">PERTH METRO</span>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  Easy access off Southwest Highway and Albany Highway for all Perth South-East residents.
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 block text-center w-full bg-slate-900 hover:bg-[#FF6B00] text-white font-extrabold py-3.5 rounded-xl text-xs tracking-wider uppercase transition-all duration-300 shadow-md"
              >
                Open in Google Maps
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}