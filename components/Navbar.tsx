'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Wrench, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const phoneNumber = "08 6244 9888";
  const telLink = "tel:0862449888";

  const navLinks = [
    { name: 'SERVICES', href: '#services' },
    { name: 'WHY US', href: '#why' },
    { name: 'AREAS', href: '#areas' },
    { name: 'REVIEWS', href: '#reviews' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full font-sans bg-[#0B0F17]/80 backdrop-blur-md text-white border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between gap-4">
        
        {/* LOGO SECTION WITH TANGERINE ORANGE & ACCENT YELLOW */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B00] to-[#FF8800] rounded-lg flex items-center justify-center text-slate-950 font-bold shadow-md shadow-[#FF6B00]/20">
            <Wrench className="w-5 h-5 stroke-[2.5] text-slate-950" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-lg tracking-wider uppercase text-white">
              CAR MECHANIC
            </span>
            <span className="font-bold text-[10px] tracking-[0.25em] uppercase text-[#FFC107] mt-1">
              PERTH
            </span>
          </div>
        </Link>

        {/* NAVIGATION LINKS */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-bold tracking-[0.15em]">
          {navLinks.map((link, idx) => (
            <Link 
              key={idx}
              href={link.href} 
              className="text-slate-200 hover:text-[#FF6B00] transition-colors py-1 uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT SECTION: PHONE NUMBER + BOOK NOW BUTTON */}
        <div className="hidden sm:flex items-center gap-6 shrink-0">
          {/* Click to Call Number */}
          <a 
            href={telLink} 
            className="flex items-center gap-2 text-slate-100 hover:text-[#FFC107] font-extrabold text-sm tracking-wider transition-colors"
          >
            <Phone className="w-4 h-4 text-[#FF6B00]" />
            <span>{phoneNumber}</span>
          </a>

          {/* BOOK NOW Button with Tangerine Orange Background */}
          <Link
            href="#contact"
            className="bg-[#FF6B00] hover:bg-[#e05e00] text-white font-black px-6 py-2.5 rounded-md text-xs uppercase tracking-wider transition-all duration-300 shadow-lg shadow-[#FF6B00]/25 active:scale-95"
          >
            BOOK NOW
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE BUTTON */}
        <div className="flex items-center gap-3 sm:hidden">
          <a 
            href={telLink} 
            className="p-2 text-[#FF6B00]" 
            aria-label="Call Us"
          >
            <Phone className="w-5 h-5" />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-[#FFC107]"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-[#0B0F17]/95 backdrop-blur-lg border-b border-white/10 px-6 py-6 space-y-4 font-bold text-xs tracking-wider">
          <a
            href={telLink}
            className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-[#FFC107] py-3 rounded-md mb-2 font-black text-sm"
          >
            <Phone className="w-4 h-4 text-[#FF6B00]" />
            <span>{phoneNumber}</span>
          </a>

          {navLinks.map((link, idx) => (
            <Link 
              key={idx}
              href={link.href} 
              className="block text-slate-200 hover:text-[#FF6B00] py-2 border-b border-white/5 uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2">
            <Link
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block w-full text-center bg-[#FF6B00] hover:bg-[#e05e00] text-white font-black py-3 rounded-md uppercase tracking-wider shadow-md shadow-[#FF6B00]/20"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}