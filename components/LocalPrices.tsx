'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { DollarSign, Car, ShieldCheck, Clock, Award, ChevronRight, Sparkles } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

// Fixed icon mapping array matching CMS feature items order
const ICONS = [DollarSign, Car, ShieldCheck, Clock];

const DEFAULTS = {
  badge: 'WHY CHOOSE US',
  headingLine1: 'Workshop-Quality Care,',
  headingHighlight: 'Local Prices',
  image:
    'https://images.unsplash.com/photo-1727893304219-063d142ce6f3?q=80&w=800&auto=format&fit=crop',
  ctaText: 'BOOK YOUR SERVICE',
  reasons: [
    { title: 'Honest & Upfront Pricing', desc: 'No surprises. We quote before we start and only carry out approved work.' },
    { title: 'All Makes & Models', desc: 'European, Japanese, Australian and 4WDs — our technicians work across every marque.' },
    { title: 'Warranty Protected', desc: 'Logbook servicing that keeps your new-car warranty fully intact.' },
    { title: 'Fast Turnaround', desc: "Most services completed same day so you're back on the road without the wait." },
  ],
};

// Properly Typed Framer Motion Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Sequential Pop Effect
    },
  },
};

const popCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85, y: 35 },
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

export default function WhyChooseUsSection() {
  const { content } = useCms();
  const cms = content?.whyUs;

  const badge = cms?.badge || DEFAULTS.badge;
  const headingLine1 = cms?.heading_line1 || DEFAULTS.headingLine1;
  const headingHighlight = cms?.heading_highlight || DEFAULTS.headingHighlight;
  const image = cms?.image || DEFAULTS.image;
  const ctaText = cms?.cta_text || DEFAULTS.ctaText;
  const items = cms?.items?.length ? cms.items : DEFAULTS.reasons;
  const whyReasons = items.map((item: { title: string; desc: string }, idx: number) => ({
    ...item,
    icon: ICONS[idx] || ICONS[ICONS.length - 1],
  }));

  return (
    <section id="why" className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">

      {/* VIBRANT AMBIENT GLOW ACCENTS (ORANGE & ELECTRIC BLUE) */}
      <div className="absolute top-1/4 -right-20 z-0 w-80 h-80 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 z-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: TEXT CONTENT & FEATURES WITH ANIMATIONS */}
          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">

            {/* SUBTITLE BADGE WITH SLIDE & POP-IN */}
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
              {headingLine1} <br className="hidden xs:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] via-[#00D2FF] to-[#0052D4]">
                {headingHighlight}
              </span>
            </motion.h2>

            {/* STAGGERED POP-IN REASONS GRID */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2"
            >
              {whyReasons.map((reason, idx) => {
                const IconComponent = reason.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={popCardVariants}
                    whileHover={{ scale: 1.03, y: -6 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative bg-slate-50 border border-slate-200/90 hover:border-[#00D2FF] p-5 rounded-2xl space-y-2.5 transition-colors duration-300 shadow-xs hover:shadow-xl hover:shadow-[#00D2FF]/15 group overflow-hidden cursor-pointer"
                  >
                    {/* Top Accent Gradient Line on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#00D2FF] to-[#0052D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] via-[#F97316] to-[#0052D4] flex items-center justify-center shrink-0 shadow-md shadow-[#FF6B00]/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-white stroke-[2.5]" />
                    </div>

                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#0052D4] transition-colors">{reason.title}</h3>
                    
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      {reason.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA BUTTON WITH POP & SCALE HOVER */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="pt-3"
            >
              <Link
                href="#contact"
                className="relative group inline-flex overflow-hidden rounded-xl p-[2px] font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-[#FF6B00]/25 hover:shadow-2xl hover:shadow-[#00D2FF]/35"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] via-[#00D2FF] to-[#0052D4] group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative block px-9 py-4 rounded-[10px] bg-gradient-to-r from-[#FF6B00] to-[#F97316] text-white group-hover:bg-transparent transition-all duration-300 flex items-center gap-2">
                  <span>{ctaText}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: FEATURED IMAGE WITH DYNAMIC MULTI-COLOR FRAME */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 relative w-full flex justify-center order-1 lg:order-2 group"
          >
            
            {/* Dynamic Gradient Shadow Frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] via-[#00D2FF] to-[#0052D4] transform rotate-2 rounded-3xl opacity-80 group-hover:rotate-0 group-hover:scale-105 transition-all duration-500 shadow-xl shadow-[#FF6B00]/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

            <div className="relative z-10 w-full h-[320px] xs:h-[380px] sm:h-[450px] lg:h-[520px] overflow-hidden rounded-2xl bg-white shadow-2xl border-4 border-white">
              <img
                src={image}
                alt="Modern Automotive Workshop Care"
                className="w-full h-full object-cover object-center transform group-hover:scale-108 transition-transform duration-700"
              />

              {/* Floating Award Badge overlay with Pop Effect */}
              <motion.div 
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md border border-slate-200/80 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#F97316] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#FF6B00]/30">
                  <Award className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900 leading-none flex items-center gap-1">
                    <span>15+</span>
                    <span className="text-[#FF6B00]">Years</span>
                    <Sparkles className="w-4 h-4 text-[#00D2FF]" />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 pt-1">
                    Serving Perth
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}