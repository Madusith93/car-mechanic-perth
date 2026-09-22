'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { MapPin, Navigation, PhoneCall, Sparkles } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const DEFAULTS = {
  badge: 'Our Locations',
  headingLine1: 'Proudly Serving Armadale &',
  headingHighlight: "Perth's South-East",
  description:
    "Based on Aragon Crt in Armadale, Car Mechanic Perth is the convenient choice for drivers right across Perth's south-eastern suburbs. If you're searching for a reliable mechanic near you, we've got you covered.",
  suburbs: ['Armadale', 'Kelmscott', 'Gosnells', 'Thornlie', 'Cannington', 'Byford', 'Seville Grove', 'Perth Metro'],
  address: '6 Aragon Crt, Armadale WA 6112',
  googleMapsUrl: 'https://maps.google.com/?q=6+Aragon+Crt,+Armadale+WA+6112',
  businessName: 'Car Mechanic Perth',
};

// Properly Typed Framer Motion Variants for Staggered Pop Effects
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Sequential pop for suburbs badges
    },
  },
};

const popItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
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
  const phoneTel = site?.phone_tel || '0862449888';
  const businessName = site?.business_name || DEFAULTS.businessName;

  return (
    <section id="areas" className="relative w-full bg-slate-50 text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">

      {/* VIBRANT AMBIENT GLOW ACCENTS (ORANGE & ELECTRIC BLUE) */}
      <div className="absolute top-1/3 -left-20 z-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 z-0 w-80 h-80 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: LOCAL CONTENT & SUBURB POP CARDS */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* SUBTITLE BADGE WITH SLIDE & POP */}
            <motion.div 
              initial={{ opacity: 0, y: -15, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-[#00D2FF] text-xs font-black tracking-widest text-slate-900 uppercase shadow-md shadow-[#00D2FF]/15 hover:scale-105 transition-transform duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
              <span>{badge}</span>
            </motion.div>

            {/* HEADING WITH SMOOTH FADE SLIDE */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900"
            >
              {headingLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] via-[#00D2FF] to-[#0052D4]">
                {headingHighlight}
              </span>
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium"
            >
              {description}
            </motion.p>

            {/* SUBURBS GRID WITH STAGGERED POP ANIMATION */}
            <div className="pt-2 space-y-3">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <span>Suburbs We Cover Near You</span>
                <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
              </h3>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-3"
              >
                {suburbs.map((suburb, idx) => (
                  <motion.div
                    key={idx}
                    variants={popItemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-white border border-slate-200/90 rounded-xl py-2.5 px-3 flex items-center gap-2 shadow-xs hover:border-[#00D2FF] hover:shadow-md hover:shadow-[#00D2FF]/10 transition-colors duration-300 cursor-pointer group"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#FF6B00] group-hover:text-[#00D2FF] shrink-0 transition-colors duration-300" />
                    <span className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-[#0052D4] transition-colors duration-300">
                      {suburb}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* ACTION BUTTONS */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap items-center gap-4 pt-3"
            >
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FF6B00] to-[#F97316] hover:from-[#e05e00] hover:to-[#ea580c] text-white font-black px-8 py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#FF6B00]/25 hover:shadow-2xl hover:shadow-[#FF6B00]/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <Link
                href={`tel:${phoneTel}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 font-black px-8 py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase border-2 border-slate-200 hover:border-[#00D2FF] shadow-xs transition-all duration-300 hover:-translate-y-0.5"
              >
                <PhoneCall className="w-4 h-4 text-[#FF6B00]" />
                <span>Call Workshop</span>
              </Link>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: LOCATION CARD WITH DYNAMIC SHADOW FRAME */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full flex justify-center group"
          >
            {/* Dynamic Gradient Background Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] via-[#00D2FF] to-[#0052D4] transform -rotate-2 rounded-3xl opacity-80 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-xl shadow-[#FF6B00]/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

            <div className="relative z-10 w-full rounded-2xl bg-white border-4 border-white p-6 sm:p-8 space-y-6 shadow-2xl overflow-hidden flex flex-col justify-between min-h-[380px]">

              <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-108"
                style={{
                  backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUscNsNbC_q9mSXtvyZkWh7F1ag7HHwemgPLvHhPzLpcYxatve6-f_Q0w&s=10')`,
                }}
              />

              {/* White Overlay */}
              <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />

              <div className="flex items-center justify-between relative z-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B00] via-[#F97316] to-[#0052D4] flex items-center justify-center text-white shadow-md shadow-[#FF6B00]/30 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div className="px-3.5 py-1 rounded-full bg-white border-2 border-[#00D2FF] text-[10px] font-black text-slate-900 tracking-wider uppercase shadow-xs">
                  Armadale WA
                </div>
              </div>

              <div className="space-y-1.5 relative z-10">
                <span className="text-xs font-black uppercase tracking-wider text-[#FF6B00]">
                  WORKSHOP LOCATION
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  {businessName}
                </h3>
                <p className="text-slate-700 text-sm leading-relaxed font-bold">
                  {address}
                </p>
              </div>

              <div className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-xl p-4 space-y-1.5 relative z-10 shadow-xs group-hover:border-[#00D2FF] transition-colors duration-300">
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
                className="relative z-10 block text-center w-full bg-slate-900 hover:bg-gradient-to-r hover:from-[#FF6B00] hover:to-[#0052D4] text-white font-extrabold py-3.5 rounded-xl text-xs tracking-wider uppercase transition-all duration-300 shadow-md"
              >
                Open in Google Maps
              </a>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}