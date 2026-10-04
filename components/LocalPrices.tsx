'use client';

import React from 'react';
import Link from 'next/link';
import { DollarSign, Car, ShieldCheck, Clock } from 'lucide-react';

const ICONS = [DollarSign, Car, ShieldCheck, Clock];

const DEFAULTS = {
  badge: 'WHY CHOOSE US',
  headingLine1: 'The Kelmscott Difference,',
  headingHighlight: 'Done Right',
  image:
    'https://images.unsplash.com/photo-1727893304219-063d142ce6f3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ctaText: 'BOOK YOUR SERVICE',
  intro: 'There are plenty of mechanics around Kelmscott and Armadale, but not all of them are equal. Here\u2019s what actually separates us and why customers keep calling us the best car mechanic in Kelmscott.',
  reasons: [
    {
      title: 'Transparent Pricing',
      desc: 'You\u2019ll get a quote before we touch your car, not after. No surprise line items, no vague labour charges. If something changes mid job, we call and explain it first.',
    },
    {
      title: 'All Makes & Models',
      desc: 'Small hatchback, family SUV or a four wheel drive, our technicians have worked on most of them. We keep up with servicing requirements across brands, so nothing catches us off guard.',
    },
    {
      title: 'Warranty Safe Servicing',
      desc: 'Servicing your car outside a dealership doesn\u2019t have to void your warranty. We follow manufacturer schedules and keep detailed records of every job, so your cover stays fully intact.',
    },
    {
      title: 'Fast & Reliable Service',
      desc: 'We know a car off the road is a problem, not just an inconvenience. Where the job allows, we get you booked in and back on the road the same day.',
    },
  ],
};

export default function WhyChooseUsSection() {
  const badge = DEFAULTS.badge;
  const headingLine1 = DEFAULTS.headingLine1;
  const headingHighlight = DEFAULTS.headingHighlight;
  const image = DEFAULTS.image;
  const ctaText = DEFAULTS.ctaText;
  const whyReasons = DEFAULTS.reasons.map((item, idx) => ({ ...item, icon: ICONS[idx] }));

  return (
    <section id="why" className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">

      <div className="absolute top-1/4 -right-20 z-0 w-80 h-80 bg-[#EAB308]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 z-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">

          <div className="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">

            <div className="inline-block text-xs font-bold tracking-[0.2em] text-[#FFC107] uppercase">
              {badge}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900">
              {headingLine1} <br />
              <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#FF6B00,#FF8C42,#4A90D9,#1E90FF)]">{headingHighlight}</span>
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              {DEFAULTS.intro}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {whyReasons.map((reason, idx) => {
                const IconComponent = reason.icon;
                return (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200/90 hover:border-[#FF6B00] p-5 rounded-2xl space-y-2.5 transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-[#FF6B00]/10 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#EAB308] flex items-center justify-center shrink-0 shadow-md shadow-[#FF6B00]/20 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-5 h-5 text-white stroke-[2.5]" />
                    </div>
                    <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#FF6B00] transition-colors">{reason.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-medium">
                      {reason.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="pt-3">
              <Link
                href="#contact"
                className="inline-block bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold px-8 py-3.5 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FF6B00]/25 active:scale-95"
              >
                {ctaText}
              </Link>
            </div>

          </div>

          <div className="lg:col-span-5 relative w-full flex justify-center order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] via-[#F97316] to-[#EAB308] transform rotate-2 rounded-3xl shadow-xl shadow-[#FF6B00]/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

            <div className="relative z-10 w-full h-[320px] xs:h-[380px] sm:h-[450px] lg:h-[520px] overflow-hidden rounded-2xl bg-white shadow-2xl border-4 border-white">
              <img
                src={image}
                alt="Modern Automotive Workshop Care"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}