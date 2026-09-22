'use client';

import React from 'react';
import { motion } from 'framer-motion';
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
  ArrowRight,
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

export default function ServicesSection() {
  return (
    <section id="services" className="relative w-full bg-slate-900 text-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      
      {/* VIBRANT BACKGROUND AMBIENT GLOW ACCENTS */}
      <div className="absolute top-1/4 left-10 z-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 z-0 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-[#00D2FF]/40 text-xs font-black tracking-widest text-[#00D2FF] uppercase shadow-lg shadow-[#00D2FF]/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B00]" />
            <span>EXPERT AUTOMOTIVE SOLUTIONS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] uppercase"
          >
            OUR PROFESSIONAL{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] via-[#00D2FF] to-[#0052D4]">
              SERVICES
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-400 text-sm sm:text-base leading-relaxed font-medium"
          >
            From routine logbook maintenance to complex engine repairs, our fully qualified mechanics in Perth deliver dealership-quality service at honest local prices.
          </motion.p>
        </div>

        {/* SERVICES GRID (15 CARDS) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-slate-800/80 backdrop-blur-md border border-slate-700/80 hover:border-[#00D2FF]/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#00D2FF]/10 flex flex-col justify-between"
              >
                {/* Top Glowing Gradient Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#FF6B00] via-[#00D2FF] to-[#0052D4] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  {/* ICON BOX */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#FF6B00] to-[#F97316] text-white flex items-center justify-center shadow-md shadow-[#FF6B00]/25 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#FF6B00]/40 transition-all duration-300">
                    <IconComponent className="w-6 h-6 stroke-[2.2]" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-[#00D2FF] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* BOOK LINK - HOME PAGE CONTACT SECTION LINK */}
                <div className="pt-6 mt-4 border-t border-slate-700/60 flex items-center justify-between">
                  <a
                    href="/#contact"
                    className="text-xs font-extrabold uppercase tracking-wider text-[#FF6B00] group-hover:text-[#00D2FF] flex items-center gap-1.5 transition-colors duration-300"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA CARD */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-gradient-to-r from-slate-800 via-slate-800 to-slate-900 border-2 border-slate-700/80 rounded-3xl p-8 lg:p-12 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#00D2FF]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="text-left space-y-2 max-w-2xl">
            <h4 className="text-xl sm:text-2xl font-black uppercase text-white">
              Unsure What Service Your Car Needs?
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm font-medium">
              Give our friendly mechanics a call or request a free diagnostic check today.
            </p>
          </div>

          {/* GET A FREE QUOTE BUTTON - HOME PAGE CONTACT SECTION LINK */}
          <a
            href="/#contact"
            className="shrink-0 bg-gradient-to-r from-[#FF6B00] via-[#F97316] to-[#00D2FF] text-white font-black px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#FF6B00]/25 hover:shadow-xl hover:shadow-[#00D2FF]/40 hover:scale-105 transition-all duration-300"
          >
            GET A FREE QUOTE
          </a>
        </motion.div>

      </div>
    </section>
  );
}