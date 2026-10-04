'use client';

import React from 'react';
import ServiceFaqAccordion from '@/components/ServiceFaqAccordion';

const FAQS = [
  {
    q: 'Why do people call you the best Car Mechanic in Kelmscott?',
    a: 'Mostly because we do what we say we will. Fair prices, certified technicians and honest communication go a long way, and word gets around.',
  },
  {
    q: 'Can you work on any make or model?',
    a: 'Yes. Whether it\u2019s a small hatch, a family SUV or a ute, our technicians can handle the service and repairs it needs.',
  },
  {
    q: 'How often do I actually need a logbook service?',
    a: 'Generally every six to twelve months, but check your manufacturer\u2019s schedule. Sticking to it protects your warranty and keeps small issues from turning into big ones.',
  },
  {
    q: 'Can I get my car serviced the same day?',
    a: 'Often, yes, especially for routine servicing or smaller repairs. Give us a call and we\u2019ll let you know what\u2019s possible for your situation.',
  },
  {
    q: 'What actually sets Car Mechanic Perth apart?',
    a: 'Being upfront. We quote before we start, explain what we find, and don\u2019t push work your car doesn\u2019t need. That\u2019s really the whole reason we\u2019re known as the best Car Mechanic in Kelmscott.',
  },
];

export default function FAQSection() {
  return (
    <section id="faqs" className="relative w-full bg-white text-slate-900 py-16 sm:py-20 border-b border-slate-200/80">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900">
            Frequently Asked <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#FF6B00,#FF8C42,#4A90D9,#1E90FF)]">Questions</span>
          </h2>
        </div>
        <ServiceFaqAccordion items={FAQS} />
      </div>
    </section>
  );
}