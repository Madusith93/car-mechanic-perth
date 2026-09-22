'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Sparkles } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const DEFAULTS = {
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3378.6946026900136!2d116.0125880766297!3d-32.14488837393439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a3297a76e7bf72d%3A0x6b09332213b2c9df!2s6%20Aragon%20Crt%2C%20Armadale%20WA%206112%2C%20Australia!5e0!3m2!1sen!2slk!4v1710000000000!5m2!1sen!2slk",
  address: '6 Aragon Crt, Armadale WA 6112',
  googleMapsUrl: 'https://maps.google.com/?q=6+Aragon+Crt,+Armadale+WA+6112',
};

export default function MapSection() {
  const { content } = useCms();
  const site = content?.site;

  const mapEmbedUrl = site?.map_embed_url || DEFAULTS.mapEmbedUrl;
  const address = site?.address || DEFAULTS.address;
  const googleMapsUrl = site?.google_maps_url || DEFAULTS.googleMapsUrl;

  return (
    <section className="relative w-full bg-slate-50 text-slate-900 py-12 sm:py-16 lg:py-20 border-b border-slate-200/80 overflow-hidden">
      
      {/* VIBRANT AMBIENT GLOW ACCENTS (ORANGE & ELECTRIC BLUE) */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-0 w-[450px] h-[250px] bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 z-0 w-[450px] h-[250px] bg-[#00D2FF]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative w-full max-w-5xl mx-auto group"
        >
          
          {/* Tilted Orange & Electric Blue Gradient Accent Frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] via-[#00D2FF] to-[#0052D4] transform -rotate-1 sm:-rotate-2 rounded-2xl shadow-xl shadow-[#FF6B00]/15 group-hover:rotate-0 group-hover:scale-[1.01] transition-all duration-500 translate-x-1.5 translate-y-1.5 sm:translate-x-2.5 sm:translate-y-2.5" />

          {/* Map Container */}
          <div className="relative z-10 w-full rounded-2xl bg-white border-2 border-slate-200/90 overflow-hidden shadow-2xl group-hover:border-[#00D2FF] transition-colors duration-300">
            
            {/* Map Header Bar */}
            <div className="bg-white/90 backdrop-blur-md px-6 py-4 border-b border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#F97316] flex items-center justify-center shrink-0 shadow-md shadow-[#FF6B00]/25">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight">Find Our Workshop</h3>
                    <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
                  </div>
                  <p className="text-xs font-bold text-slate-600">{address}</p>
                </div>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#F97316] hover:from-[#e05e00] hover:to-[#ea580c] text-white font-black px-5 py-2.5 rounded-xl text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FF6B00]/30 hover:shadow-xl hover:shadow-[#FF6B00]/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open Directions</span>
              </a>
            </div>

            {/* Google Map iFrame */}
            <div className="w-full h-[320px] sm:h-[420px] relative bg-slate-100">
              <iframe
                title="Workshop Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}