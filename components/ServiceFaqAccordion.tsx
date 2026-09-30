'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '@/lib/service-pages-types';

export default function ServiceFaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-slate-200/90 rounded-2xl overflow-hidden bg-slate-50"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
            >
              <span className="font-extrabold text-sm sm:text-base text-slate-900">{item.q}</span>
              <ChevronDown
                className={`w-4 h-4 text-[#FEA500] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed font-medium">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}