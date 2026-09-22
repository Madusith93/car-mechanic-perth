'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, Wrench, Sparkles, ArrowRight } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const DEFAULT_SERVICES = [
  { title: 'Logbook Servicing', desc: 'New-car warranty safe logbook servicing for every make and model, stamped and documented.' },
  { title: 'Brake Repairs', desc: 'Pads, rotors, calipers and fluid flushes. Squealing or spongy brakes fixed fast and safely.' },
  { title: 'Engine Diagnostics', desc: "Check-engine light on? Our scan tools pinpoint faults so you only pay for what's needed." },
  { title: 'Suspension & Steering', desc: 'Shocks, struts, bushes and steering components for a smooth, controlled ride.' },
  { title: 'Air Conditioning', desc: 'Re-gas, leak detection and full A/C repairs to keep your cabin cool through the Perth summer.' },
];

const DEFAULTS = {
  badge: 'WHAT WE DO',
  headingLine1: 'Complete Car Servicing',
  headingHighlight: '& Professional Repairs',
  image:
    'https://plus.unsplash.com/premium_photo-1661411128818-08593b7738ba?q=80&w=800&auto=format&fit=crop',
  services: DEFAULT_SERVICES,
};

// Properly Typed Motion Variants for Pop-in Animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Sequential card pop effect
    },
  },
};

const popItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
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

export default function ServicesSection() {
  const { content } = useCms();
  const cms = content?.services;

  const badge = cms?.badge || DEFAULTS.badge;
  const headingLine1 = cms?.heading_line1 || DEFAULTS.headingLine1;
  const headingHighlight = cms?.heading_highlight || DEFAULTS.headingHighlight;
  const image = cms?.image || DEFAULTS.image;
  const services = cms?.items?.length ? cms.items : DEFAULTS.services;

  return (
    <section id="services" className="relative w-full bg-slate-50 text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">

      {/* VIBRANT AMBIENT GLOW ACCENTS (ORANGE & ELECTRIC BLUE) */}
      <div className="absolute top-1/3 -left-20 z-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 z-0 w-80 h-80 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: FEATURED IMAGE WITH DYNAMIC POP IN ANIMATION */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full flex justify-center group"
          >
            {/* Dynamic Multi-Color Gradient Shadow Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] via-[#00D2FF] to-[#0052D4] transform -rotate-2 rounded-3xl opacity-80 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-xl shadow-[#FF6B00]/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

            <div className="relative z-10 w-full h-[320px] xs:h-[380px] sm:h-[450px] lg:h-[520px] overflow-hidden rounded-2xl bg-white shadow-2xl border-4 border-white">
              <img
                src={image}
                alt="Professional Car Mechanic at Work"
                className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700"
              />

              {/* Floating Badge overlay with Subtle Pop Effect */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 shadow-lg flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF6B00] to-[#F97316] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#FF6B00]/30">
                  <Wrench className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-black text-xs text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                    <span>Certified Technicians</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#00D2FF]" />
                  </h4>
                  <p className="text-[11px] font-semibold text-slate-500">Expert auto care & genuine parts</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: SERVICES CONTENT WITH POP-IN CARDS */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* SUBTITLE BADGE WITH ELECTRIC BLUE ACCENT */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-[#00D2FF] text-xs font-black tracking-widest text-slate-900 uppercase shadow-md shadow-[#00D2FF]/15 hover:scale-105 transition-transform duration-300"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
              <span>{badge}</span>
            </motion.div>

            {/* HEADING WITH MULTI-COLOR GRADIENT */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900"
            >
              {headingLine1} <br className="hidden xs:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] via-[#00D2FF] to-[#0052D4]">
                {headingHighlight}
              </span>
            </motion.h2>

            {/* STAGGERED POPPING SERVICE CARDS GRID */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              {services.map((item: { title: string; desc: string }, idx: number) => (
                <motion.div
                  key={idx}
                  variants={popItemVariants}
                  whileHover={{ scale: 1.04, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative bg-white border border-slate-200/90 hover:border-[#00D2FF] p-4 sm:p-5 rounded-2xl space-y-2 transition-colors duration-300 shadow-xs hover:shadow-xl hover:shadow-[#00D2FF]/20 group overflow-hidden cursor-pointer"
                >
                  {/* Subtle Top Gradient Bar on Hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#00D2FF] to-[#0052D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#FF6B00]/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-to-r group-hover:from-[#FF6B00] group-hover:to-[#0052D4] transition-all duration-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF6B00] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-[#0052D4] transition-colors">{item.title}</h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#00D2FF] group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  <p className="text-slate-600 text-xs leading-relaxed pl-9 font-medium">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}