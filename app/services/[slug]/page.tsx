import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Wind, Disc, Settings, Car, BookOpen, Wrench, Cpu, ShieldAlert,
  Gauge, Volume2, CircleDot, Thermometer, ShieldCheck, BatteryCharging, Truck,
  ChevronRight, CheckCircle2, Phone, CalendarCheck,
} from 'lucide-react';
import servicePagesData from '@/lib/service-pages-data.json';
import type { ServicePageData, FaqItem } from '@/lib/service-pages-types';
import ServiceFaqAccordion from '@/components/ServiceFaqAccordion';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Wind, Disc, Settings, Car, BookOpen, Wrench, Cpu, ShieldAlert,
  Gauge, Volume2, CircleDot, Thermometer, ShieldCheck, BatteryCharging, Truck,
};

const pages = servicePagesData as ServicePageData[];

const DEFAULTS = {
  phoneDisplay: '08 6244 9888',
  phoneTel: '0862449888',
};

export function generateStaticParams() {
  return pages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = pages.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: `${page.h1} | Car Mechanic Perth`,
    description: page.lead.slice(0, 160),
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = pages.find((p) => p.slug === slug);
  if (!page) notFound();

  const IconComponent = ICONS[page.icon] || Wrench;
  
  return (
    <main className="bg-white text-slate-900">

      {/* HEADER */}
      <section className="relative w-full bg-slate-50 border-b border-slate-200/80 overflow-hidden">
        <div className="absolute top-0 -right-20 z-0 w-96 h-96 bg-[#FEA500]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 z-0 w-96 h-96 bg-[#1E90FF]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-[#FEA500] transition-colors mb-6"
          >
            <ChevronRight className="w-3.5 h-3.5 rotate-180" />
            <span>All Services</span>
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-[linear-gradient(135deg,#FEA500,#FF8C00)] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#FEA500]/25">
              <IconComponent className="w-7 h-7 stroke-[2.5]" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-slate-900 mb-4">
            {page.h1}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium max-w-2xl text-justify">
            {page.lead}
          </p>
        </div>
      </section>

      {/* BODY CONTENT */}
      <section className="relative w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 space-y-8">
          {page.blocks.map((block, idx) => {
            if (block.type === 'h2') {
              return (
                <h2 key={idx} className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 pt-4">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'h3') {
              return (
                <h3 key={idx} className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 pt-2">
                  {block.text}
                </h3>
              );
            }
            if (block.type === 'p') {
            return (
                <p key={idx} className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium text-justify">
                {block.text}
                </p>
            );
            }
            if (block.type === 'list') {
              const items = block.items as string[];
              return (
                <ul key={idx} className="space-y-2.5 pl-1">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FEA500] shrink-0 mt-1" />
                      <span className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === 'faq') {
              const items = block.items as FaqItem[];
              return (
                <div key={idx} className="pt-4">
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <ServiceFaqAccordion items={items} />
                </div>
              );
            }
            return null;
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative w-full bg-slate-50 border-t border-slate-200/80 overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#FEA500]/10 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 lg:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left space-y-1.5">
              <h4 className="text-lg sm:text-xl font-black uppercase text-slate-900">Ready to Book?</h4>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Get in touch and we&apos;ll take it from there.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[linear-gradient(to_right,#FEA500,#FF8C00)] hover:brightness-95 text-white font-black px-6 py-3.5 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FEA500]/30"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Request a Booking</span>
              </Link>
              <a
                href={`tel:${DEFAULTS.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 bg-white border-2 border-[#FEA500] hover:bg-[#FEA500]/5 text-[#FEA500] font-black px-6 py-3.5 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Call {DEFAULTS.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}