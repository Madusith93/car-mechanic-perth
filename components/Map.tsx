'use client';

import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export default function MapSection() {
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.6946026900136!2d116.0125880766297!3d-32.14488837393439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a3297a76e7bf72d%3A0x6b09332213b2c9df!2s6%20Aragon%20Crt%2C%20Armadale%20WA%206112%2C%20Australia!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk";

  return (
    <section className="relative w-full bg-[#0B0F17] text-white py-12 lg:py-16 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <div className="relative w-full max-w-5xl mx-auto">
          
          {/* Tilted Orange Accent Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] to-[#FF8800] transform -rotate-1 sm:-rotate-2 rounded-2xl shadow-xl shadow-[#FF6B00]/20 translate-x-1.5 translate-y-1.5 sm:translate-x-2.5 sm:translate-y-2.5" />

          {/* Map Container */}
          <div className="relative z-10 w-full rounded-xl bg-slate-900 border border-white/10 overflow-hidden shadow-2xl">
            
            {/* Map Header Bar */}
            <div className="bg-slate-950/80 backdrop-blur-md px-6 py-4 border-b border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#FF6B00]" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">Find Our Workshop</h3>
                  <p className="text-xs text-slate-400">6 Aragon Crt, Armadale WA 6112</p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=6+Aragon+Crt,+Armadale+WA+6112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-4 py-2 rounded-lg text-xs tracking-wider uppercase transition-all duration-300"
              >
                <Navigation className="w-3.5 h-3.5" />
                Open Directions
              </a>
            </div>

            {/* Google Map iFrame */}
            <div className="w-full h-[320px] sm:h-[400px] relative bg-slate-950">
              <iframe
                title="Workshop Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 transition-all duration-500"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}