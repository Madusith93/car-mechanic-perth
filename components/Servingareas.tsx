'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Navigation, PhoneCall } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const DEFAULTS = {
  badge: 'LOCAL SEO',
  headingLine1: 'Proudly Serving Armadale &',
  headingHighlight: "Perth's South-East",
  description:
    "Based on Aragon Crt in Armadale, Car Mechanic Perth is the convenient choice for drivers right across Perth's south-eastern suburbs. If you're searching for a reliable mechanic near you, we've got you covered.",
  suburbs: ['Armadale', 'Kelmscott', 'Gosnells', 'Thornlie', 'Cannington', 'Byford', 'Seville Grove', 'Perth Metro'],
  address: '6 Aragon Crt, Armadale WA 6112',
  googleMapsUrl: 'https://maps.google.com/?q=6+Aragon+Crt,+Armadale+WA+6112',
};

export default function LocalSeoSection() {
  const { content } = useCms();
  const areas = content?.areas;
  const site = content?.site;

  const badge = areas?.badge || DEFAULTS.badge;
  const headingLine1 = areas?.heading_line1 || DEFAULTS.headingLine1;
  const headingHighlight = areas?.heading_highlight || DEFAULTS.headingHighlight;
  const description = areas?.description || DEFAULTS.description;
  const suburbs = areas?.suburbs?.length ? areas.suburbs : DEFAULTS.suburbs;
  const address = site?.address || DEFAULTS.address;
  const googleMapsUrl = site?.google_maps_url || DEFAULTS.googleMapsUrl;

  return (
    <section id="areas" className="relative w-full bg-[#0B0F17] text-white py-16 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: LOCAL SEO CONTENT & SUBURBS */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* SUBTITLE BADGE */}
            <div className="inline-block text-xs font-bold tracking-[0.2em] text-[#FFC107] uppercase">
              {badge}
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
              {headingLine1} <br />
              <span className="text-[#FF6B00]">{headingHighlight}</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {description}
            </p>

            {/* SERVICED SUBURBS GRID */}
            <div className="pt-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Suburbs We Cover Near You:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {suburbs.map((suburb, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 rounded-lg py-2.5 px-3 flex items-center gap-2 hover:border-[#FF6B00]/50 transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#FF6B00] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      {suburb}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-8 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FF6B00]/25 active:scale-95"
              >
                <Navigation className="w-4 h-4" />
                GET DIRECTIONS
              </a>

              <Link
                href={`tel:${site?.phone_tel || '0862449888'}`}
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white/20 hover:border-[#FFC107] text-white hover:text-[#FFC107] font-extrabold px-8 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                CALL WORKSHOP
              </Link>
            </div>

          </div>

          {/* RIGHT COLUMN: LOCATION CARD WITH MAP HIGHLIGHT */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Tilted Orange Background Box */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] to-[#FF8800] transform -rotate-3 rounded-2xl shadow-xl shadow-[#FF6B00]/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

            {/* Location Card Container */}
            <div className="relative z-10 w-full rounded-xl bg-slate-900 border border-white/10 p-6 sm:p-8 space-y-6 shadow-2xl">
              
              <div className="w-12 h-12 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-[#FF6B00]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFC107]">
                  WORKSHOP LOCATION
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {site?.business_name || 'Car Mechanic Perth'}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {address}
                </p>
              </div>

              {/* Map Preview Box / Callout */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span>LOCATION HIGHLIGHT</span>
                  <span className="text-[#FF6B00]">Armadale WA</span>
                </div>
                <p className="text-xs text-slate-300">
                  Easy access off Southwest Highway and Albany Highway for all Perth South-East residents.
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-white/10 hover:bg-[#FF6B00] text-white font-extrabold py-3 rounded-lg text-xs tracking-wider uppercase transition-all duration-300"
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