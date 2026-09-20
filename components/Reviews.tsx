'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useCms } from '@/context/CmsContext';

const DEFAULTS = {
  badge: 'Reviews',
  headingLine1: 'What Perth Drivers',
  headingHighlight: 'Say',
  description: "Real feedback from local drivers across Armadale and Perth's south-eastern suburbs.",
  reviews: [
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
  ],
};

export default function ReviewsSection() {
  const { content } = useCms();
  const cms = content?.reviews;

  const badge = cms?.badge || DEFAULTS.badge;
  const headingLine1 = cms?.heading_line1 || DEFAULTS.headingLine1;
  const headingHighlight = cms?.heading_highlight || DEFAULTS.headingHighlight;
  const description = cms?.description || DEFAULTS.description;
  const reviews = cms?.items?.length ? cms.items : DEFAULTS.reviews;

  return (
    <section id="reviews" className="relative w-full bg-[#0B0F17] text-white py-16 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-block text-xs font-bold tracking-[0.2em] text-[#FFC107] uppercase ">
            {badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white ">
            {headingLine1} <span className="text-[#FF6B00]">{headingHighlight}</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {description}
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="relative bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-[#FF6B00]/50 transition-all duration-300 group"
            >
              {/* QUOTE ICON BACKGROUND DECORATION */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-[#FF6B00]/10 transition-colors pointer-events-none" />

              <div className="space-y-4 relative z-10">
                {/* STAR RATING */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FFC107] text-[#FFC107]"
                    />
                  ))}
                </div>

                {/* REVIEW TEXT */}
                <p className="text-slate-300 text-sm leading-relaxed italic">
                  "{review.quote}"
                </p>
              </div>

              {/* AUTHOR INFO */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
                <div>
                  <h3 className="font-extrabold text-white text-base">
                    {review.author}
                  </h3>
                  <span className="text-xs font-medium text-[#FF6B00]">
                    {review.location}
                  </span>
                </div>

                {/* VERIFIED BADGE */}
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                  Verified Local
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}