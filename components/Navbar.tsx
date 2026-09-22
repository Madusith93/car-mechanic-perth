'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Wrench, Phone, Sparkles } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content } = useCms();

  const phoneNumber = content?.site?.phone_display || "08 6244 9888";
  const telLink = `tel:${content?.site?.phone_tel || "0862449888"}`;

  // /#why, /#areas wage '/' dammaama anith pages wala idanut direct home page ekata redirect wenawa
  const navLinks = [
    { name: 'SERVICES', href: '/services' },
    { name: 'WHY US', href: '/#why' },
    { name: 'AREAS', href: '/#areas' },
    { name: 'REVIEWS', href: '/#reviews' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-sans bg-white/90 backdrop-blur-md text-slate-900 border-b border-slate-200/80 shadow-xs transition-all duration-300">
      
      {/* Dynamic Ambient Color Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#FFB800] via-[#FF6B00] via-[#0052D4] to-[#00D2FF]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
        
        {/* LOGO SECTION MATCHING FOOTER EXACTLY */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          
          {/* Wrench Icon Box - Horizontal / Straight Icon like Footer */}
          <div className="w-10 h-10 sm:w-11 sm:h-11 bg-gradient-to-tr from-[#FF6B00] to-[#F97316] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#FF6B00]/25 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-[#FF6B00]/40 transition-all duration-300 shrink-0">
            <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>

          {/* Typography Matching Footer Style */}
          <div className="flex flex-col leading-none justify-center">
            <span className="font-black text-xl sm:text-2xl tracking-tight uppercase text-slate-900 group-hover:text-[#0052D4] transition-colors duration-300">
              CAR MECHANIC
            </span>
            <span className="font-black text-xs sm:text-sm tracking-[0.22em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#00D2FF] to-[#0052D4] mt-0.5">
              PERTH
            </span>
          </div>

        </Link>

        {/* NAVIGATION LINKS WITH VIBRANT BLUE HOVER ACCENTS */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-[0.15em]">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx}
              href={link.href} 
              className="relative text-slate-700 hover:text-[#0052D4] transition-colors duration-300 py-1 uppercase group"
            >
              <span>{link.name}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FFB800] via-[#00D2FF] to-[#0052D4] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}
        </nav>

        {/* RIGHT SECTION: CALL & BOOK NOW WITH Dynamic Gradient Hover */}
        <div className="hidden sm:flex items-center gap-6 shrink-0">
          
          {/* Click to Call Number */}
          <a 
            href={telLink} 
            className="flex items-center gap-2.5 text-slate-900 hover:text-[#0052D4] font-black text-sm tracking-wider transition-all duration-300 group"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0052D4]/10 border border-[#0052D4]/20 flex items-center justify-center group-hover:bg-[#0052D4] group-hover:text-white transition-all duration-300 shadow-xs">
              <Phone className="w-4 h-4 text-[#0052D4] group-hover:text-white transition-colors" />
            </div>
            <span>{phoneNumber}</span>
          </a>

          {/* BOOK NOW Button - Redirects to Home Page Contact Section */}
          <Link
            href="/#contact"
            className="relative group overflow-hidden rounded-xl p-[2px] font-black text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-[#FF6B00]/20 hover:shadow-xl hover:shadow-[#00D2FF]/30"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#FF6B00] via-[#00D2FF] to-[#0052D4] group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative block px-6 py-2.5 rounded-[10px] bg-gradient-to-r from-[#FF6B00] to-[#F97316] text-white group-hover:bg-transparent transition-all duration-300 flex items-center gap-1.5">
              <span>BOOK NOW</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-200 group-hover:animate-spin" />
            </span>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <div className="flex items-center gap-3 sm:hidden">
          <a 
            href={telLink} 
            className="p-2 text-[#0052D4] hover:text-[#00D2FF] transition-colors" 
            aria-label="Call Us"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-800 hover:text-[#0052D4] transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-6 py-6 space-y-4 font-bold text-xs tracking-wider shadow-xl animate-in slide-in-from-top-2 duration-300">
          <a
            href={telLink}
            className="flex items-center justify-center gap-2 bg-[#0052D4]/10 border border-[#0052D4]/20 text-[#0052D4] py-3 rounded-xl mb-2 font-black text-sm"
          >
            <Phone className="w-4 h-4 text-[#0052D4]" />
            <span>{phoneNumber}</span>
          </a>

          {navLinks.map((link, idx) => (
            <Link 
              key={idx}
              href={link.href} 
              className="block text-slate-800 hover:text-[#0052D4] py-2 border-b border-slate-100 uppercase transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2">
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center bg-gradient-to-r from-[#FF6B00] via-[#F97316] to-[#0052D4] text-white font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-[#FF6B00]/20"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}