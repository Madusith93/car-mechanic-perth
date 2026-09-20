'use client';

import React from 'react';
import { CheckCircle2, Wrench } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Logbook Servicing',
      desc: 'New-car warranty safe logbook servicing for every make and model, stamped and documented.',
    },
    {
      title: 'Brake Repairs',
      desc: 'Pads, rotors, calipers and fluid flushes. Squealing or spongy brakes fixed fast and safely.',
    },
    {
      title: 'Engine Diagnostics',
      desc: 'Check-engine light on? Our scan tools pinpoint faults so you only pay for what\'s needed.',
    },
    {
      title: 'Suspension & Steering',
      desc: 'Shocks, struts, bushes and steering components for a smooth, controlled ride.',
    },
    {
      title: 'Air Conditioning',
      desc: 'Re-gas, leak detection and full A/C repairs to keep your cabin cool through the Perth summer.',
    },
  ];

  return (
    <section id="services" className="relative w-full bg-slate-50 text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">
      
      {/* VIBRANT AMBIENT GLOW ACCENTS */}
      <div className="absolute top-1/3 -left-20 z-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 z-0 w-80 h-80 bg-[#EAB308]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: FEATURED IMAGE WITH TILTED VIBRANT ACCENT FRAME */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Tilted Vibrant Orange Gradient Box */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] via-[#F97316] to-[#EAB308] transform -rotate-2 rounded-3xl shadow-xl shadow-[#FF6B00]/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />
            
            {/* Main Image Container */}
            <div className="relative z-10 w-full h-[320px] xs:h-[380px] sm:h-[450px] lg:h-[520px] overflow-hidden rounded-2xl bg-white shadow-2xl border-4 border-white">
              <img
                src="https://plus.unsplash.com/premium_photo-1661411128818-08593b7738ba?q=80&w=800&auto=format&fit=crop"
                alt="Professional Car Mechanic at Work"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge on Image */}
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
            
            {/* SUBTITLE BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 text-xs font-black tracking-widest text-slate-900 uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
              <span>WHAT WE DO</span>
            </div>

            {/* MAIN HEADING */}
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
              Complete Car Servicing <br className="hidden xs:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] to-[#EAB308]">
                & Professional Repairs
              </span>
            </h2>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {services.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-slate-200/90 hover:border-[#FF6B00] p-4 sm:p-5 rounded-2xl space-y-2 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-[#FF6B00]/10 group"
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
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}