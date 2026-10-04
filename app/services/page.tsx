'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import {
  Wind, Disc, Settings, Car, BookOpen, Wrench, Cpu, ShieldAlert,
  Gauge, Volume2, CircleDot, Thermometer, ShieldCheck, BatteryCharging, Truck,
  ChevronRight, X, Phone, CalendarCheck, CheckCircle2,
} from 'lucide-react';
import { useCms } from '@/context/CmsContext';
import servicePagesData from '@/lib/service-pages-data.json';
import type { ServicePageData, FaqItem } from '@/lib/service-pages-types';
import ServiceFaqAccordion from '@/components/ServiceFaqAccordion';

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

const DEFAULTS = {
  phoneDisplay: '08 6244 9888',
  phoneTel: '0862449888',
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
  const site = content?.site;
  const phoneDisplay = site?.phone_display || DEFAULTS.phoneDisplay;
  const phoneTel = site?.phone_tel || DEFAULTS.phoneTel;

  const servicesPage = content?.servicesPage;
  const badge = servicesPage?.badge || DEFAULTS_PAGE.badge;
  const headingLine1 = servicesPage?.heading_line1 || DEFAULTS_PAGE.headingLine1;
  const headingHighlight = servicesPage?.heading_highlight || DEFAULTS_PAGE.headingHighlight;
  const introDescription = servicesPage?.description || DEFAULTS_PAGE.description;
  const ctaHeading = servicesPage?.cta_heading || DEFAULTS_PAGE.ctaHeading;
  const ctaDescription = servicesPage?.cta_description || DEFAULTS_PAGE.ctaDescription;
  const ctaButtonText = servicesPage?.cta_button_text || DEFAULTS_PAGE.ctaButtonText;

  const [activeService, setActiveService] = useState<ServicePageData | null>(null);

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
              <motion.button
                key={service.slug}
                type="button"
                onClick={() => setActiveService(service)}
                variants={popCardVariants}
                whileHover={{ scale: 1.02, y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="group relative text-left bg-slate-50 border border-slate-200/90 hover:border-[#FEA500] rounded-2xl p-6 sm:p-8 transition-colors duration-300 shadow-xs hover:shadow-xl hover:shadow-[#FEA500]/15 flex flex-col justify-between overflow-hidden"
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
              </motion.button>
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

      {/* ===== SERVICE DETAIL MODAL ===== */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200/80"
            >
              <div className="h-1.5 w-full bg-[linear-gradient(to_right,#FEA500,#FF8C00,#1E90FF)] rounded-t-3xl sticky top-0 z-10" />

              <button
                type="button"
                onClick={() => setActiveService(null)}
                aria-label="Close"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 sm:p-8 lg:p-10 space-y-5">

                {(() => {
                  const IconComponent = ICONS[activeService.icon] || Wrench;
                  return (
                    <div className="flex items-center gap-4 pr-10">
                      <div className="w-14 h-14 rounded-2xl bg-[linear-gradient(135deg,#FEA500,#FF8C00)] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#FEA500]/25">
                        <IconComponent className="w-7 h-7 stroke-[2.5]" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                        {activeService.h1}
                      </h3>
                    </div>
                  );
                })()}

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  {activeService.lead}
                </p>

                {activeService.blocks.map((block, idx) => {
                  if (block.type === 'h2') {
                    return (
                      <h4 key={idx} className="text-lg sm:text-xl font-black tracking-tight text-slate-900 pt-2">
                        {block.text}
                      </h4>
                    );
                  }
                  if (block.type === 'h3') {
                    return (
                      <h4 key={idx} className="text-base sm:text-lg font-black tracking-tight text-[#1E90FF] pt-1">
                        {block.text}
                      </h4>
                    );
                  }
                  if (block.type === 'p') {
                    return (
                      <p key={idx} className="text-slate-600 text-sm leading-relaxed font-medium">
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === 'list') {
                    const items = block.items as string[];
                    return (
                      <ul key={idx} className="space-y-2">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#FEA500] shrink-0 mt-0.5" />
                            <span className="text-slate-700 text-sm font-medium leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (block.type === 'faq') {
                    const items = block.items as FaqItem[];
                    return (
                      <div key={idx} className="pt-2">
                        <h4 className="text-base sm:text-lg font-black tracking-tight text-slate-900 mb-3">
                          Frequently Asked Questions
                        </h4>
                        <ServiceFaqAccordion items={items} />
                      </div>
                    );
                  }
                  return null;
                })}

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Link
                    href="/#contact"
                    onClick={() => setActiveService(null)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[linear-gradient(to_right,#FEA500,#FF8C00)] hover:brightness-95 text-white font-black px-6 py-3.5 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FEA500]/30"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Request a Booking</span>
                  </Link>
                  <a
                    href={`tel:${phoneTel}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-[#FEA500] hover:bg-[#FEA500]/5 text-[#FEA500] font-black px-6 py-3.5 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {phoneDisplay}</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}