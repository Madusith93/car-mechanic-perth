'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { 
  Wind, 
  Disc, 
  Settings, 
  Car, 
  BookOpen, 
  Wrench, 
  Cpu, 
  ShieldAlert, 
  Gauge, 
  Volume2, 
  CircleDot, 
  Thermometer, 
  ShieldCheck, 
  BatteryCharging, 
  Truck, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

const SERVICES_DATA = [
  {
    title: 'Air Conditioning',
    description: 'Regas, leak detection, and full AC system servicing to keep you cool on hot days.',
    icon: Wind,
  },
  {
    title: 'Brakes Repairs',
    description: 'Brake pad replacement, disc machining, and complete hydraulic safety checks.',
    icon: Disc,
  },
  {
    title: 'Clutch Repairs',
    description: 'Clutch replacement, flywheel machining, and gear engagement problem diagnosis.',
    icon: Settings,
  },
  {
    title: 'Full Car Service',
    description: 'Comprehensive multi-point inspection, oil & filter change, and fluid top-ups.',
    icon: Car,
  },
  {
    title: 'Logbook Service',
    description: 'Manufacturer-compliant servicing that retains your original new car warranty.',
    icon: BookOpen,
  },
  {
    title: 'Maintenance & Repairs',
    description: 'General mechanical repairs and preventive care for smooth driving performance.',
    icon: Wrench,
  },
  {
    title: 'Engine Repair',
    description: 'Advanced computer diagnostics, timing belt replacements, and major engine overhauls.',
    icon: Cpu,
  },
  {
    title: 'Suspension & Shock Absorbers',
    description: 'Struts, shocks, bushes, and steering component replacements for safety & comfort.',
    icon: ShieldAlert,
  },
  {
    title: 'Transmission Services',
    description: 'Automatic & manual gearbox fluid flush, repairs, and filter replacements.',
    icon: Gauge,
  },
  {
    title: 'Muffler Repairs',
    description: 'Exhaust system repairs, muffler replacements, and noise/emission controls.',
    icon: Volume2,
  },
  {
    title: 'Tyres & Wheels',
    description: 'Tyre fitting, balancing, alignment checks, and puncture repairs for road safety.',
    icon: CircleDot,
  },
  {
    title: 'Radiator & Cooling System Service',
    description: 'Overheating diagnostics, coolant flushes, leak repairs, and water pump replacement.',
    icon: Thermometer,
  },
  {
    title: 'Car Warranty Services',
    description: 'Certified servicing and repairs that fully respect and maintain your factory warranty.',
    icon: ShieldCheck,
  },
  {
    title: 'Car Battery Replacement',
    description: 'On-site battery testing, terminal cleaning, and heavy-duty battery replacements.',
    icon: BatteryCharging,
  },
  {
    title: 'Towing Service',
    description: 'Prompt breakdown response and safe vehicle transport to our Perth workshop.',
    icon: Truck,
  },
];

// Staggered Container Animation (Same as Home Page)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// Pop-in Card Animation (Same as Home Page)
const popCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
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
  return (
    <section id="services" className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">
      
      {/* VIBRANT AMBIENT GLOW ACCENTS (EXACT MATCH WITH HOME PAGE) */}
      <div className="absolute top-1/4 -right-20 z-0 w-96 h-96 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 z-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 lg:mb-16">
          
          {/* SUBTITLE BADGE */}
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-[#00D2FF] text-xs font-black tracking-widest text-slate-900 uppercase shadow-md shadow-[#00D2FF]/15 hover:scale-105 transition-transform duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
            <span>EXPERT AUTOMOTIVE SOLUTIONS</span>
          </motion.div>

          {/* MAIN HEADING WITH GRADIENT */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900"
          >
            Our Professional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] via-[#00D2FF] to-[#0052D4]">
              Servies
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium"
          >
            From routine logbook maintenance to complex engine repairs, our fully qualified mechanics in Perth deliver dealership-quality service at honest local prices.
          </motion.p>
        </div>

        {/* SERVICES GRID (ANIMATED STAGGERED POP-IN) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={popCardVariants}
                whileHover={{ scale: 1.02, y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-slate-50 border border-slate-200/90 hover:border-[#00D2FF] rounded-2xl p-6 sm:p-8 transition-colors duration-300 shadow-xs hover:shadow-xl hover:shadow-[#00D2FF]/15 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Top Accent Gradient Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B00] via-[#00D2FF] to-[#0052D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  {/* ICON BOX */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B00] via-[#F97316] to-[#0052D4] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#FF6B00]/20 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white stroke-[2.5]" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#0052D4] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* BOOK LINK / CALL TO ACTION */}
                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    href="/#contact"
                    className="text-xs font-extrabold uppercase tracking-wider text-[#FF6B00] group-hover:text-[#0052D4] flex items-center gap-1.5 transition-colors duration-300"
                  >
                    <span>Book Service</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* BOTTOM CTA CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-slate-50 border border-slate-200/90 rounded-3xl p-8 lg:p-12 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          {/* Accent glow on CTA card */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#00D2FF]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="text-left space-y-2 max-w-2xl">
            <h4 className="text-xl sm:text-2xl font-black uppercase text-slate-900">
              Unsure What Service Your Car Needs?
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              Give our friendly mechanics a call or request a free diagnostic check today.
            </p>
          </div>

          {/* HOME PAGE STYLE GRADIENT BUTTON */}
          <Link
            href="/#contact"
            className="relative group shrink-0 inline-flex overflow-hidden rounded-xl p-[2px] font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-[#FF6B00]/25 hover:shadow-2xl hover:shadow-[#00D2FF]/35"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] via-[#00D2FF] to-[#0052D4] group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative block px-8 py-4 rounded-[10px] bg-gradient-to-r from-[#FF6B00] to-[#F97316] text-white group-hover:bg-transparent transition-all duration-300 flex items-center gap-2">
              <span>GET A FREE QUOTE</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}