'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      quote:
        'Booked online in minutes and had my Corolla serviced the same day. Honest advice and fair price — my new go-to mechanic in Perth.',
      author: 'Sarah M.',
      location: 'Armadale',
      rating: 5,
    },
    {
      quote:
        "Sorted a brake issue three other places couldn't diagnose. Clear explanation, no upsell. Highly recommend.",
      author: 'Dave R.',
      location: 'Kelmscott',
      rating: 5,
    },
    {
      quote:
        'Friendly team, spotless workshop and my air con is icy again. Great local mechanic, thanks guys.',
      author: 'Priya K.',
      location: 'Gosnells',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="relative w-full bg-slate-50 text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">
      
      {/* VIBRANT AMBIENT GLOW ACCENTS */}
      <div className="absolute top-1/2 -left-20 z-0 w-80 h-80 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 z-0 w-80 h-80 bg-[#EAB308]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 text-xs font-black tracking-widest text-slate-900 uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span>REVIEWS</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
            What Perth Drivers{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] to-[#EAB308]">
              Say
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Real feedback from local drivers across Armadale and Perth&apos;s south-eastern suburbs.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-slate-200/90 p-6 sm:p-8 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-[#FF6B00] hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* QUOTE ICON BACKGROUND DECORATION */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 group-hover:text-[#FF6B00]/10 transition-colors pointer-events-none stroke-[1.5]" />

              <div className="space-y-4 relative z-10">
                {/* STAR RATING */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#EAB308] text-[#EAB308]"
                    />
                  ))}
                </div>

                {/* REVIEW TEXT */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium italic">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              {/* AUTHOR INFO */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between relative z-10">
                <div>
                  <h3 className="font-black text-slate-900 text-base">
                    {review.author}
                  </h3>
                  <span className="text-xs font-extrabold text-[#FF6B00]">
                    {review.location}
                  </span>
                </div>

                {/* VERIFIED BADGE */}
                <span className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600">
                  <CheckCircle2 className="w-3 h-3 text-[#FF6B00]" />
                  <span>Verified Local</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}