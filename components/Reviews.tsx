'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const DEFAULTS = {
  badge: 'Reviews',
  headingLine1: 'What Perth Drivers',
  headingHighlight: 'Say',
  description: "Real feedback from local drivers across Armadale and Perth's south-eastern suburbs.",
  reviews: [
    { quote: 'Booked online in minutes and had my Corolla serviced the same day. Honest advice and fair price — my new go-to mechanic in Perth.', author: 'Sarah M.', location: 'Armadale', rating: 5 },
    { quote: "Sorted a brake issue three other places couldn't diagnose. Clear explanation, no upsell. Highly recommend.", author: 'Dave R.', location: 'Kelmscott', rating: 5 },
    { quote: 'Friendly team, spotless workshop and my air con is icy again. Great local mechanic, thanks guys.', author: 'Priya K.', location: 'Gosnells', rating: 5 },
    { quote: 'Extremely professional and transparent with costs before starting any work. Will definitely return for my next service!', author: 'Michael T.', location: 'Byford', rating: 5 },
  ],
};

// FASTER & SNAPPY SLIDE VARIANTS
const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 800 : -800,
    opacity: 0,
    scale: 0.95,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 500, damping: 32 }, // Snappier spring
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 800 : -800,
    opacity: 0,
    scale: 0.95,
    transition: {
      x: { type: 'spring', stiffness: 500, damping: 32 },
      opacity: { duration: 0.2 },
      scale: { duration: 0.2 },
    },
  }),
};

export default function ReviewsSection() {
  const { content } = useCms();
  const cms = content?.reviews;

  const badge = cms?.badge || DEFAULTS.badge;
  const headingLine1 = cms?.heading_line1 || DEFAULTS.headingLine1;
  const headingHighlight = cms?.heading_highlight || DEFAULTS.headingHighlight;
  const description = cms?.description || DEFAULTS.description;
  const reviews = cms?.items?.length ? cms.items : DEFAULTS.reviews;

  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const reviewIndex = ((page % reviews.length) + reviews.length) % reviews.length;

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  // Faster Auto-slide timer (3.5 seconds instead of 5)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      paginate(1);
    }, 3500);

    return () => clearInterval(timer);
  }, [page, isPaused]);

  return (
    <section id="reviews" className="relative w-full bg-slate-50 text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">

      {/* VIBRANT AMBIENT GLOW ACCENTS (ORANGE & ELECTRIC BLUE) */}
      <div className="absolute top-1/2 -left-20 z-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 z-0 w-80 h-80 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-[#00D2FF] text-xs font-black tracking-widest text-slate-900 uppercase shadow-md shadow-[#00D2FF]/15 hover:scale-105 transition-transform duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
            <span>{badge}</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900"
          >
            {headingLine1}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] via-[#00D2FF] to-[#0052D4]">
              {headingHighlight}
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium"
          >
            {description}
          </motion.p>
        </div>

        {/* SLIDING CAROUSEL CONTAINER */}
        <div 
          className="relative max-w-4xl mx-auto min-h-[280px] sm:min-h-[300px] flex items-center justify-center px-2 sm:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full relative bg-white border-2 border-slate-200/90 hover:border-[#00D2FF] p-6 sm:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-[#00D2FF]/15 transition-all duration-300 group overflow-hidden"
            >
              {/* Top Dynamic Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B00] via-[#00D2FF] to-[#0052D4]" />

              <Quote className="absolute top-6 right-6 w-16 h-16 text-slate-100 group-hover:text-[#00D2FF]/15 transition-colors pointer-events-none stroke-[1.5]" />

              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-1.5">
                  {[...Array(reviews[reviewIndex].rating || 5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FF6B00] text-[#FF6B00]" />
                  ))}
                  <Sparkles className="w-4 h-4 text-[#00D2FF] ml-1" />
                </div>

                <p className="text-slate-800 text-base sm:text-xl leading-relaxed font-semibold italic">
                  &ldquo;{reviews[reviewIndex].quote}&rdquo;
                </p>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-slate-900 text-base sm:text-lg">
                      {reviews[reviewIndex].author}
                    </h3>
                    <span className="text-xs font-black uppercase tracking-wider text-[#FF6B00]">
                      {reviews[reviewIndex].location}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase font-black tracking-wider px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-700 shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span>Verified Local</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* NAVIGATION BUTTONS */}
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous Review"
            className="absolute left-0 sm:-left-4 z-20 w-11 h-11 rounded-full bg-white border-2 border-slate-200 text-slate-700 flex items-center justify-center hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] transition-all shadow-md hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => paginate(1)}
            aria-label="Next Review"
            className="absolute right-0 sm:-right-4 z-20 w-11 h-11 rounded-full bg-white border-2 border-slate-200 text-slate-700 flex items-center justify-center hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] transition-all shadow-md hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* DOTS INDICATOR */}
        <div className="flex justify-center items-center gap-2 pt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setPage([idx, idx > reviewIndex ? 1 : -1])}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === reviewIndex
                  ? 'w-8 bg-gradient-to-r from-[#FF6B00] to-[#00D2FF]'
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}