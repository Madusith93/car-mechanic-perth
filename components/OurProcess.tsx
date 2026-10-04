'use client';

import React from 'react';
import { CalendarCheck, Search, FileCheck2, Wrench, ClipboardCheck } from 'lucide-react';

const STEPS = [
  { icon: CalendarCheck, text: 'Booking and consultation to understand your needs' },
  { icon: Search, text: 'Thorough inspection and accurate diagnostics' },
  { icon: FileCheck2, text: 'Transparent quote before any work starts' },
  { icon: Wrench, text: 'Quality repairs using genuine parts' },
  { icon: ClipboardCheck, text: 'Final check and handover with servicing notes' },
];

export default function OurProcess() {
  return (
    <section className="relative w-full bg-slate-50 text-slate-900 py-16 sm:py-20 border-b border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
            Our <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#FF6B00,#FF8C42,#4A90D9,#1E90FF)]">Process</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium text-justify">
            At Car Mechanic Perth, our process is built around clarity and reliability. We begin with a detailed vehicle inspection and honest diagnosis. Our process typically includes:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-5 space-y-3 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#F97316] flex items-center justify-center text-white shrink-0 shadow-md shadow-[#FF6B00]/20">
                    <Icon className="w-4.5 h-4.5 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-black text-slate-400">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <p className="text-slate-700 text-sm font-semibold leading-relaxed">{step.text}</p>
              </div>
            );
          })}
        </div>

        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium text-center max-w-2xl mx-auto mt-10">
          This structured approach keeps every client informed from start to finish.
        </p>
      </div>
    </section>
  );
}