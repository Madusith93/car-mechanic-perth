'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, Wrench, ArrowRight } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const DEFAULTS = {
  badge: 'WHAT WE DO',
  headingLine1: 'Complete Car Servicing',
  headingHighlight: '& Repairs',
  image:
    'https://plus.unsplash.com/premium_photo-1661411128818-08593b7738ba?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  intro: 'Car Mechanic Perth covers most of what a Kelmscott or Armadale driver will ever need, from a basic service to more involved repair work. Here\u2019s a breakdown of what we do.',
  services: [
    {
      title: 'Expert Vehicle Servicing',
      desc: 'A full logbook service means oil, filters, fluids and safety checks done properly, not rushed. This is where being the best car mechanic actually shows, in the details most workshops skip.',
    },
    {
      title: 'Professional Brake Repairs',
      desc: 'Worn brakes don\u2019t always make noise before they fail. We check pads, discs and fluid properly, replace what\u2019s needed and explain exactly what we found, so nothing gets swapped out unnecessarily.',
    },
    {
      title: 'Advanced Engine Diagnostics',
      desc: 'When a warning light comes on, guessing isn\u2019t good enough. We run proper diagnostics to find the actual fault, then explain the fix and the cost before touching anything.',
    },
    {
      title: 'Suspension & Steering Care',
      desc: 'A rough ride or a car pulling to one side usually points to suspension or steering wear. We inspect shocks, struts, bushes and alignment, then fix only what\u2019s actually worn.',
    },
    {
      title: 'Complete Air Conditioning',
      desc: 'Air conditioning that struggles in a Perth summer is more than an inconvenience. We check refrigerant levels, hunt down leaks and service the whole system so it actually cools again.',
    },
    {
      title: 'Tyres & Wheel Services',
      desc: 'We stock a range of tyre brands and fit, balance and align wheels correctly the first time. If you\u2019re not sure what tyre suits your car and budget, just ask us.',
    },
  ],
};

export default function ServicesSection() {
  const { content } = useCms();
  const cms = content?.services;

  const badge = cms?.badge || DEFAULTS.badge;
  const headingLine1 = cms?.heading_line1 || DEFAULTS.headingLine1;
  const headingHighlight = cms?.heading_highlight || DEFAULTS.headingHighlight;
  const image = cms?.image || DEFAULTS.image;
  const services = DEFAULTS.services;

  return (
    <section id="services" className="relative w-full bg-slate-50 text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">

      <div className="absolute top-1/3 -left-20 z-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 z-0 w-80 h-80 bg-[#EAB308]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: FEATURED IMAGE */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] via-[#F97316] to-[#EAB308] transform -rotate-2 rounded-3xl shadow-xl shadow-[#FF6B00]/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

            <div className="relative z-10 w-full h-[320px] xs:h-[380px] sm:h-[450px] lg:h-[520px] overflow-hidden rounded-2xl bg-white shadow-2xl border-4 border-white">
              <img
                src={image}
                alt="Professional Car Mechanic at Work"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#FF6B00] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#FF6B00]/30">
                  <Wrench className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-black text-xs text-slate-900 uppercase tracking-wider">Certified Technicians</h4>
                  <p className="text-[11px] font-semibold text-slate-500">Expert auto care & genuine parts</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SERVICES CONTENT */}
          <div className="lg:col-span-7 space-y-6 text-left">

            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 text-xs font-black tracking-widest text-slate-900 uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span>{badge}</span>
            </div>

            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
              {headingLine1} <br className="hidden xs:block" />
              <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#FF6B00,#FF8C42,#4A90D9,#1E90FF)]">
                {headingHighlight}
              </span>
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              {DEFAULTS.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {services.map((item, idx) => (
                <Link
                  key={idx}
                  href="/services"
                  className="group bg-white border border-slate-200/90 hover:border-[#FF6B00] p-4 sm:p-5 rounded-2xl space-y-2 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#FF6B00]/10 block"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-md bg-[#FF6B00]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF6B00] transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B00] group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-900 group-hover:text-[#FF6B00] transition-colors">{item.title}</h3>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed pl-8 font-medium">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-extrabold text-[#FF6B00] hover:text-[#e05e00] transition-colors group"
              >
                <span>View All Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}