'use client';

import React from 'react';
import { Wrench } from 'lucide-react';

export default function AboutUs() {
  return (
    <section className="relative w-full bg-white text-slate-900 py-16 sm:py-20 overflow-hidden border-b border-slate-200/80">

      {/* AMBIENT GLOW ACCENTS */}
      <div className="absolute top-0 left-1/4 z-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 z-0 w-80 h-80 bg-[#EAB308]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center space-y-4 mb-8">

          {/* SUBTITLE BADGE */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 text-xs font-black tracking-widest text-slate-900 uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span>Who We Are</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
            About <span className="text-[#FF6B00]">Us</span>
          </h2>
        </div>

        {/* CONTENT CARD */}
        <div className="relative bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="absolute -top-5 left-8 w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#F97316] flex items-center justify-center text-white shadow-lg shadow-[#FF6B00]/25">
            <Wrench className="w-5 h-5 stroke-[2.5]" />
          </div>

          <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium text-justify hyphens-auto">
            Car Mechanic Perth started with a simple idea, give Kelmscott and Armadale drivers a workshop they don&apos;t have to second guess. Years later, we&apos;re known as the best car technician in Kelmscott because we stuck to that idea. Our technicians are fully certified and comfortable working on any make or model, from routine logbook servicing to brake repairs and engine diagnostics. Prices are agreed before work starts, warranties are respected, and same day appointments are available whenever the job allows. That&apos;s the whole approach, nothing complicated.
          </p>
        </div>

      </div>
    </section>
  );
}