'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function MapSection() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.6946026900136!2d116.0125880766297!3d-32.14488837393439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a3297a76e7bf72d%3A0x6b09332213b2c9df!2s6%20Aragon%20Crt%2C%20Armadale%20WA%206112%2C%20Australia!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk";

  return (
    <section className="relative w-full bg-slate-50 text-slate-900 py-12 lg:py-16 border-b border-slate-200/80 overflow-hidden">
      
      {/* VIBRANT AMBIENT GLOW ACCENTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[500px] h-[300px] bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Tilted Orange Accent Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] via-[#F97316] to-[#EAB308] transform -rotate-1 sm:-rotate-2 rounded-2xl shadow-xl shadow-[#FF6B00]/20 translate-x-1.5 translate-y-1.5 sm:translate-x-2.5 sm:translate-y-2.5" />

          {/* Map Container */}
          <div className="relative z-10 w-full rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-xl">
            
            {/* Map Header Bar */}
            <div className="bg-slate-50/90 backdrop-blur-md px-6 py-4 border-b border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF6B00]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Find Our Workshop</h3>
                  <p className="text-xs font-semibold text-slate-500">6 Aragon Crt, Armadale WA 6112</p>
                </div>
              </div>

             <a
  href="https://maps.google.com/?q=6+Aragon+Crt,+Armadale+WA+6112"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#F97316] hover:from-[#e05e00] hover:to-[#ea580c] text-white font-black px-4 py-2.5 rounded-xl text-xs tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#FF6B00]/40 hover:shadow-2xl hover:shadow-[#FF6B00]/50 hover:-translate-y-0.5 active:translate-y-0"
>
  <Navigation className="w-3.5 h-3.5" />
  <span>Open Directions</span>
</a>
            </div>

            {/* Google Map iFrame */}
            <div className="w-full h-[320px] sm:h-[400px] relative bg-slate-100">
              <iframe
                title="Workshop Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full transition-all duration-500"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}