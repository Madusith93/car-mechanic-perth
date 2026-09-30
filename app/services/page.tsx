'use client';

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  Wind, Disc, Settings, Car, BookOpen, Wrench, Cpu, ShieldAlert,
  Gauge, Volume2, CircleDot, Thermometer, ShieldCheck, BatteryCharging, Truck,
  ChevronRight,
} from 'lucide-react';
import { useCms } from '@/context/CmsContext';
import servicePagesData from '@/lib/service-pages-data.json';
import type { ServicePageData } from '@/lib/service-pages-types';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind, Disc, Settings, Car, BookOpen, Wrench, Cpu, ShieldAlert,
  Gauge, Volume2, CircleDot, Thermometer, ShieldCheck, BatteryCharging, Truck,
};

const servicesData = servicePagesData as ServicePageData[];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const popCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

const DEFAULTS_PAGE = {
  badge: 'EXPERT AUTOMOTIVE SOLUTIONS',
  headingLine1: 'Our Professional',
  headingHighlight: 'Services',
  description:
    'From routine logbook maintenance to complex engine repairs, our fully qualified mechanics in Perth deliver dealership-quality service at honest local prices. Tap any service below for full details.',
  ctaHeading: 'Unsure What Service Your Car Needs?',
  ctaDescription: 'Give our friendly mechanics a call or request a free diagnostic check today.',
  ctaButtonText: 'GET A FREE QUOTE',
};

export default function ServicesSection() {
  const { content } = useCms();

  const servicesPage = content?.servicesPage;
  const badge = servicesPage?.badge || DEFAULTS_PAGE.badge;
  const headingLine1 = servicesPage?.heading_line1 || DEFAULTS_PAGE.headingLine1;
  const headingHighlight = servicesPage?.heading_highlight || DEFAULTS_PAGE.headingHighlight;
  const introDescription = servicesPage?.description || DEFAULTS_PAGE.description;
  const ctaHeading = servicesPage?.cta_heading || DEFAULTS_PAGE.ctaHeading;
  const ctaDescription = servicesPage?.cta_description || DEFAULTS_PAGE.ctaDescription;
  const ctaButtonText = servicesPage?.cta_button_text || DEFAULTS_PAGE.ctaButtonText;

  return (
    <section id="services" className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">

      <div className="absolute top-1/4 -right-20 z-0 w-96 h-96 bg-[#FEA500]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 z-0 w-96 h-96 bg-[#1E90FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 lg:mb-16">

          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-[#FEA500] text-xs font-black tracking-widest text-slate-900 uppercase shadow-md shadow-[#FEA500]/15 hover:scale-105 transition-transform duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-[#FEA500] animate-ping" />
            <span>{badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900"
          >
            {headingLine1}{' '}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#FEA500,#FF8C00,#1E90FF)]">
              {headingHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium"
          >
            {introDescription}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {servicesData.map((service) => {
            const IconComponent = ICONS[service.icon] || Wrench;
            return (
              <motion.div key={service.slug} variants={popCardVariants} whileHover={{ scale: 1.02, y: -6 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative block text-left bg-slate-50 border border-slate-200/90 hover:border-[#FEA500] rounded-2xl p-6 sm:p-8 transition-colors duration-300 shadow-xs hover:shadow-xl hover:shadow-[#FEA500]/15 h-full flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[linear-gradient(to_right,#FEA500,#FF8C00,#1E90FF)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[linear-gradient(135deg,#FEA500,#FF8C00)] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#FEA500]/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white stroke-[2.5]" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#FEA500] transition-colors duration-300">
                      {service.h1}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3">
                      {service.lead}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#FEA500] flex items-center gap-1.5 transition-colors duration-300">
                      <span>View Details</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-slate-50 border border-slate-200/90 rounded-3xl p-8 lg:p-12 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#FEA500]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="text-left space-y-2 max-w-2xl">
            <h4 className="text-xl sm:text-2xl font-black uppercase text-slate-900">
              {ctaHeading}
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              {ctaDescription}
            </p>
          </div>

          <Link
            href="/#contact"
            className="relative group shrink-0 inline-flex overflow-hidden rounded-xl p-[2px] font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-[#FEA500]/25 hover:shadow-2xl hover:shadow-[#FEA500]/40"
          >
            <span className="absolute inset-0 bg-[linear-gradient(to_right,#FEA500,#FF8C00,#1E90FF)] group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative block px-8 py-4 rounded-[10px] bg-[linear-gradient(to_right,#FEA500,#FF8C00)] text-white group-hover:bg-transparent transition-all duration-300 flex items-center gap-2">
              <span>{ctaButtonText}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

      </div>

    </section>
  );
}