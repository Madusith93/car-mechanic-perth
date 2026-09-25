'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { ServicePageItem } from '@/lib/cms';
import {
  Wind,
  Disc,
  Settings,
  Car,
  BookOpen,
  Wrench,
  Cpu,
  ShieldAlert,
  Gauge,
  Volume2,
  CircleDot,
  Thermometer,
  ShieldCheck,
  BatteryCharging,
  Truck,
  ChevronRight,
  X,
  Phone,
  CalendarCheck,
  CheckCircle2,
} from 'lucide-react';
import { useCms } from '@/context/CmsContext';

interface ServiceDetail {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  whatsIncluded: string[];
  signs: string;
  closing: string;
}

// Icons stay fixed to this position order — the CMS lets editors change the
// text of each service, but the icon is tied to that item's index, same
// pattern as the "Why Choose Us" section.
const SERVICE_ICONS = [
  Wind, Disc, Settings, Car, BookOpen, Wrench, Cpu, ShieldAlert,
  Gauge, Volume2, CircleDot, Thermometer, ShieldCheck, BatteryCharging, Truck,
];

const SERVICES_DATA: ServiceDetail[] = [
  {
    title: 'Air Conditioning',
    description:
      "Perth summers regularly push past 35°C, and a car air conditioning system that's lost its charge or developed a leak turns every drive into an endurance test. Our air conditioning service covers a full system check — regassing, leak testing, and inspection of the compressor, condenser, and cabin filter — to restore cold, consistent airflow.",
    icon: Wind,
    whatsIncluded: [
      'A/C performance test and pressure check',
      'Regas with the correct refrigerant for your vehicle',
      'Leak detection and repair',
      'Cabin filter inspection and replacement',
      'Compressor and belt condition check',
    ],
    signs:
      "Signs you need this service: warm air instead of cold, a musty smell from the vents, a noisy compressor, or air conditioning that worked fine last summer but won't cool now. WA's heat and dust also mean cabin filters clog faster than in cooler climates, so we check that as standard.",
    closing: 'Book an air conditioning service before the next heatwave hits, not after.',
  },
  {
    title: 'Brakes Repairs',
    description:
      "Brakes are the one system on your car you can't afford to compromise on. Grinding, squealing, a soft or spongy pedal, or your car pulling to one side under braking are all signs your braking system needs attention now, not next service.",
    icon: Disc,
    whatsIncluded: [
      'Full inspection of pads, rotors, calipers, and brake lines',
      'Brake fluid check and flush where needed',
      'Pad and rotor replacement',
      'Handbrake adjustment',
      'Road test to confirm even, responsive braking',
    ],
    signs:
      "Signs you need this service: squealing or grinding noises, a pedal that feels low or soft, vibration when braking, or a dashboard brake warning light. Perth's mix of highway driving and stop-start city traffic wears pads and rotors differently, so we assess your actual driving pattern rather than just going by kilometres.",
    closing: "Don't wait for a warning light — have your brakes checked at the first unusual sound or feel.",
  },
  {
    title: 'Clutch Repairs',
    description:
      "A clutch that slips, judders, or feels heavy is telling you it's on the way out — and driving on a failing clutch risks stranding you or causing damage to the gearbox. We diagnose whether the issue is the clutch plate, pressure plate, release bearing, or hydraulic system, and carry out the repair or full replacement needed.",
    icon: Settings,
    whatsIncluded: [
      'Clutch system diagnosis (mechanical or hydraulic)',
      'Clutch plate, pressure plate, and release bearing replacement',
      'Flywheel inspection and resurfacing where required',
      'Hydraulic clutch line and slave cylinder repairs',
      'Test drive to confirm smooth engagement',
    ],
    signs:
      "Signs you need this service: difficulty changing gears, a burning smell, the clutch pedal sitting higher or lower than usual, or slipping under acceleration (engine revs rise without matching speed increase). Perth's hilly suburbs and heavy traffic corridors put extra strain on clutches from frequent stop-start use.",
    closing: 'Catching clutch wear early is far cheaper than a breakdown on the freeway.',
  },
  {
    title: 'Full Car Service',
    description:
      "A full car service is the single best thing you can do to protect your vehicle's value, reliability, and safety. It's a comprehensive, top-to-bottom check that goes well beyond an oil change — covering the engine, brakes, suspension, steering, and all major safety systems.",
    icon: Car,
    whatsIncluded: [
      'Engine oil and filter change',
      'Multi-point safety inspection (brakes, suspension, steering, lights)',
      'Fluid level checks and top-ups (coolant, brake fluid, power steering)',
      'Belt, hose, and battery condition check',
      'Tyre pressure and tread inspection',
      'Full report on any issues found, with no-obligation quotes for repairs',
    ],
    signs:
      "When to book: most manufacturers recommend a full service every 10,000–15,000km or 6–12 months, whichever comes first. If you're planning a long trip — down south, up to the Pilbara, or across the Nullarbor — a full service beforehand is worth the peace of mind.",
    closing: "We'll give you an honest picture of your car's condition, not just a tick-box checklist.",
  },
  {
    title: 'Logbook Service',
    description:
      "Keep your new car's manufacturer warranty valid without paying dealership prices. Our logbook servicing follows your manufacturer's exact schedule and specifications — the parts, fluids, and checks required at each interval — and we stamp your logbook to prove it.",
    icon: BookOpen,
    whatsIncluded: [
      "Servicing to the manufacturer's specified schedule and parts list",
      'Genuine or OEM-equivalent parts and fluids',
      'Official logbook stamping',
      'Full itemised invoice for your records',
      'All checks required to keep your new-car warranty intact',
    ],
    signs:
      "Why it matters: Australian Consumer Law protects your right to have your car serviced by an independent mechanic without voiding your warranty, as long as the correct parts and procedures are used — which is exactly what logbook servicing guarantees. It's a straightforward way to save money while keeping full manufacturer cover.",
    closing: "Ask us about your specific make and model's logbook requirements when you book.",
  },
  {
    title: 'Maintenance & Repairs',
    description:
      'Not every car problem fits neatly into one category — sometimes it\u2019s a warning light, a strange noise, or a "can you just check this" kind of issue. Our general maintenance and repair service covers the full range of mechanical work across all makes and models, from routine upkeep to unexpected fixes.',
    icon: Wrench,
    whatsIncluded: [
      'Diagnostic scanning to identify warning lights and fault codes',
      'General mechanical repairs across engine, electrical, and drivetrain systems',
      'Scheduled maintenance outside logbook requirements',
      'Pre-trip and roadworthy checks',
      'Honest advice on what needs fixing now versus what can wait',
    ],
    signs:
      'Common reasons customers book this service: a dashboard warning light, an unusual noise or smell, reduced performance, or simply wanting a second opinion before a big repair bill elsewhere. We explain what we find in plain language, with clear pricing before any work starts.',
    closing: "If something doesn't feel right about your car, get it looked at before it becomes a bigger job.",
  },
  {
    title: 'Engine Repair',
    description:
      "The engine is the heart of your vehicle, and problems here — rough idling, loss of power, unusual noises, excessive smoke, or a check engine light — need proper diagnosis before they escalate into a full rebuild. We use professional diagnostic equipment to pinpoint the actual fault, not just guess.",
    icon: Cpu,
    whatsIncluded: [
      'Computer diagnostics and fault code reading',
      'Engine performance and compression testing',
      'Repair of common faults: timing belts/chains, gaskets, sensors, ignition components',
      'Major engine work including rebuilds where necessary',
      'Post-repair road testing and follow-up checks',
    ],
    signs:
      "Signs you need this service: a check engine light, knocking or ticking noises, poor fuel economy, excessive exhaust smoke, or the engine stalling or struggling to start. Perth's long highway stretches and hot climate can accelerate wear on cooling and lubrication-related engine components, so we pay close attention to those areas.",
    closing: 'Early diagnosis is the difference between a minor repair and a replacement engine.',
  },
  {
    title: 'Suspension & Shock Absorbers',
    description:
      "Perth's roads — from pothole-prone suburban streets to corrugated gravel on the way to the coast or hills — take a real toll on suspension components. Worn shocks and struts show up as a bouncier, less controlled ride, uneven tyre wear, and longer stopping distances.",
    icon: ShieldAlert,
    whatsIncluded: [
      'Full suspension inspection (shocks, struts, springs, bushes, control arms)',
      'Shock absorber and strut replacement',
      'Wheel alignment check following suspension work',
      'Steering and handling assessment',
      'Noise and vibration diagnosis',
    ],
    signs:
      'Signs you need this service: a rougher ride than usual, the car "bouncing" after bumps, uneven or premature tyre wear, nose-diving under braking, or clunking noises over speed bumps. If you regularly drive unsealed roads or load your car with passengers and gear, suspension wear happens faster and is worth checking more often.',
    closing: "Good suspension isn't just about comfort — it directly affects how well your car handles and stops.",
  },
  {
    title: 'Transmission Services',
    description:
      'Whether you drive a manual or automatic, transmission problems tend to get worse quickly if ignored, and repairs can become expensive once internal damage sets in. We service, diagnose, and repair transmissions to keep gear changes smooth and protect your drivetrain long-term.',
    icon: Gauge,
    whatsIncluded: [
      'Transmission fluid change and filter replacement',
      'Diagnostic scanning for transmission fault codes',
      'Manual transmission and clutch-linked repairs',
      'Automatic transmission servicing and repairs',
      'Road testing to confirm smooth shifting under load',
    ],
    signs:
      'Signs you need this service: slipping gears, delayed or jerky engagement, unusual whining or grinding noises, fluid leaks (often reddish in colour), or the transmission overheating on longer drives. Regular fluid changes are one of the most overlooked services — and one of the cheapest ways to extend the life of your transmission.',
    closing: "If your gear changes don't feel right, get it checked before minor wear becomes major damage.",
  },
  {
    title: 'Muffler Repairs',
    description:
      "A damaged, rusted, or leaking exhaust system doesn't just sound bad — it can affect fuel efficiency, engine performance, and your car's ability to pass a roadworthy inspection. We repair and replace mufflers and exhaust components to restore quiet, compliant, efficient running.",
    icon: Volume2,
    whatsIncluded: [
      'Full exhaust system inspection (muffler, pipes, catalytic converter, mounts)',
      'Muffler repair or replacement',
      'Rust and leak repairs',
      'Exhaust mount and bracket replacement',
      'Noise and emissions check',
    ],
    signs:
      'Signs you need this service: noticeably louder engine noise, rattling under the car, a smell of exhaust fumes in the cabin, or reduced fuel economy. Coastal areas around Perth can accelerate rust on exhaust systems due to salt air, so mufflers closer to the coast are worth checking more regularly.',
    closing: 'A quick inspection can often catch a small rust patch before it becomes a full exhaust replacement.',
  },
  {
    title: 'Tyres & Wheels',
    description:
      'Your tyres are the only part of your car actually touching the road, and correctly fitted, balanced tyres are essential for safe handling, braking, and fuel efficiency. We supply and fit a wide range of tyres for all vehicle types, plus balancing, rotation, and wheel repairs.',
    icon: CircleDot,
    whatsIncluded: [
      'Tyre supply and fitting for passenger, 4WD, and light commercial vehicles',
      'Wheel balancing and rotation',
      'Tyre pressure and tread depth checks',
      'Puncture repairs',
      'Wheel alignment to prevent uneven wear',
    ],
    signs:
      "Signs you need this service: tread wearing unevenly or below the legal minimum, vibration at speed, a slow leak, or visible sidewall damage. Perth's hot bitumen roads can accelerate tyre wear over summer, and long country trips make tread condition and pressure especially important before you set off.",
    closing: 'Regular rotation and correct pressure can significantly extend the life of a tyre set.',
  },
  {
    title: 'Radiator & Cooling System Service',
    description:
      "Overheating is one of the fastest ways to cause serious, expensive engine damage — and Perth's summer heat means a cooling system running below par gets found out quickly. We inspect and service the full cooling system to make sure your engine stays at a safe operating temperature.",
    icon: Thermometer,
    whatsIncluded: [
      'Radiator inspection for leaks, corrosion, and blockages',
      'Coolant flush and refill to manufacturer specification',
      'Thermostat, water pump, and hose inspection',
      'Radiator cap and pressure testing',
      'Cooling fan and temperature sensor checks',
    ],
    signs:
      "Signs you need this service: the temperature gauge creeping up, coolant warning lights, sweet-smelling steam from under the bonnet, or visible coolant puddles under the car. Stop-start traffic in Perth summer heat is exactly the kind of driving that exposes a cooling system that's due for attention.",
    closing: 'A cooling system check before summer is far cheaper than an overheated, damaged engine.',
  },
  {
    title: 'Car Warranty Services',
    description:
      "Under Australian Consumer Law, you can have your new car serviced at an independent workshop without voiding the manufacturer's warranty — as long as the correct parts, fluids, and procedures are used. We carry out fully warranty-compliant servicing and repairs, documented every step of the way.",
    icon: ShieldCheck,
    whatsIncluded: [
      'Servicing to manufacturer specifications and intervals',
      'Use of genuine or OEM-equivalent parts and fluids',
      'Detailed, itemised documentation for warranty records',
      "Advice on what's covered under your specific warranty",
      'Logbook stamping alongside warranty-compliant service records',
    ],
    signs:
      "Why choose independent warranty servicing: it's typically more affordable than dealership pricing, with the same accountability and paperwork trail if a warranty claim is ever needed. We're happy to talk through your car's specific warranty terms before you book.",
    closing: 'Save money on servicing without putting your new-car warranty at risk.',
  },
  {
    title: 'Car Battery Replacement',
    description:
      "A flat or failing battery is one of the most common breakdown causes — and often happens with no warning, usually on a cold morning or after the car's sat unused for a few days. We test your battery and charging system, then supply and fit a quality replacement on the spot.",
    icon: BatteryCharging,
    whatsIncluded: [
      'Battery and charging system load test',
      'Alternator and starter motor check',
      'Battery terminal and connection cleaning',
      'Supply and fitting of a correctly rated replacement battery',
      'Old battery disposal and recycling',
    ],
    signs:
      "Signs you need this service: slow or struggling engine cranking, dimming headlights or interior lights, a battery warning light, or a battery older than 3–4 years. Heat is hard on car batteries, and Perth's summer temperatures shorten battery lifespan compared to cooler climates — so batteries here often need replacing sooner than the manufacturer's stated life.",
    closing: "If your battery's on the older side, it's worth testing before it leaves you stranded.",
  },
  {
    title: 'Towing Service',
    description:
      "Breakdowns and accidents don't happen at convenient times, and once your car won't move, getting it somewhere safe becomes the priority. Our towing service collects your vehicle from wherever you are across the Perth metro area and brings it to our workshop — or another location of your choice — quickly and safely.",
    icon: Truck,
    whatsIncluded: [
      'Prompt pickup from breakdown or accident locations',
      'Safe, secure loading for all vehicle types',
      'Transport to our workshop or a location you nominate',
      'Assistance coordinating with insurance where needed',
      'Clear communication on timing and cost before we arrive',
    ],
    signs:
      "When to call: a breakdown that leaves your car undriveable, an accident, a flat battery you can't jump-start, or any situation where continuing to drive isn't safe. Having a towing number saved means one less thing to think about when something goes wrong.",
    closing: "We're here to get your car — and you — off the road safely and sorted quickly.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const popCardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

const DEFAULTS = {
  phoneDisplay: '08 6244 9888',
  phoneTel: '0862449888',
};

const DEFAULTS_PAGE = {
  badge: 'EXPERT AUTOMOTIVE SOLUTIONS',
  headingLine1: 'Our Professional',
  headingHighlight: 'Services',
  description:
    'From routine logbook maintenance to complex engine repairs, our fully qualified mechanics in Perth deliver dealership-quality service at honest local prices. Tap any service below for full details.',
  ctaHeading: 'Unsure What Service Your Car Needs?',
  ctaDescription: 'Give our friendly mechanics a call or request a free diagnostic check today.',
  ctaButtonText: 'GET A FREE QUOTE',
};

export default function ServicesSection() {
  const { content } = useCms();
  const site = content?.site;
  const phoneDisplay = site?.phone_display || DEFAULTS.phoneDisplay;
  const phoneTel = site?.phone_tel || DEFAULTS.phoneTel;

  const servicesPage = content?.servicesPage;
  const badge = servicesPage?.badge || DEFAULTS_PAGE.badge;
  const headingLine1 = servicesPage?.heading_line1 || DEFAULTS_PAGE.headingLine1;
  const headingHighlight = servicesPage?.heading_highlight || DEFAULTS_PAGE.headingHighlight;
  const introDescription = servicesPage?.description || DEFAULTS_PAGE.description;
  const ctaHeading = servicesPage?.cta_heading || DEFAULTS_PAGE.ctaHeading;
  const ctaDescription = servicesPage?.cta_description || DEFAULTS_PAGE.ctaDescription;
  const ctaButtonText = servicesPage?.cta_button_text || DEFAULTS_PAGE.ctaButtonText;

  const servicesData: ServiceDetail[] = servicesPage?.items?.length
    ? servicesPage.items.map((item: ServicePageItem, idx: number) => ({
        ...item,
        icon: SERVICE_ICONS[idx] || Wrench,
      }))
    : SERVICES_DATA;

  const [activeService, setActiveService] = useState<ServiceDetail | null>(null);

  return (
    <section id="services" className="relative w-full bg-white text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">

      <div className="absolute top-1/4 -right-20 z-0 w-96 h-96 bg-[#FEA500]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 z-0 w-96 h-96 bg-[#1E90FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12 lg:mb-16">

          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-[#FEA500] text-xs font-black tracking-widest text-slate-900 uppercase shadow-md shadow-[#FEA500]/15 hover:scale-105 transition-transform duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-[#FEA500] animate-ping" />
            <span>{badge}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900"
          >
            {headingLine1}{' '}
            <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#FEA500,#FF8C00,#1E90FF)]">
              {headingHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium"
          >
            {introDescription}
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.button
                key={index}
                type="button"
                onClick={() => setActiveService(service)}
                variants={popCardVariants}
                whileHover={{ scale: 1.02, y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="group relative text-left bg-slate-50 border border-slate-200/90 hover:border-[#FEA500] rounded-2xl p-6 sm:p-8 transition-colors duration-300 shadow-xs hover:shadow-xl hover:shadow-[#FEA500]/15 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[linear-gradient(to_right,#FEA500,#FF8C00,#1E90FF)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[linear-gradient(135deg,#FEA500,#FF8C00)] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#FEA500]/20 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-white stroke-[2.5]" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-slate-900 group-hover:text-[#FEA500] transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FEA500] flex items-center gap-1.5 transition-colors duration-300">
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </div>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 bg-slate-50 border border-slate-200/90 rounded-3xl p-8 lg:p-12 text-center flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-[#FEA500]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="text-left space-y-2 max-w-2xl">
            <h4 className="text-xl sm:text-2xl font-black uppercase text-slate-900">
              {ctaHeading}
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">
              {ctaDescription}
            </p>
          </div>

          <Link
            href="/#contact"
            className="relative group shrink-0 inline-flex overflow-hidden rounded-xl p-[2px] font-black text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-[#FEA500]/25 hover:shadow-2xl hover:shadow-[#FEA500]/40"
          >
            <span className="absolute inset-0 bg-[linear-gradient(to_right,#FEA500,#FF8C00,#1E90FF)] group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative block px-8 py-4 rounded-[10px] bg-[linear-gradient(to_right,#FEA500,#FF8C00)] text-white group-hover:bg-transparent transition-all duration-300 flex items-center gap-2">
              <span>{ctaButtonText}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        </motion.div>

      </div>

      {/* ===== SERVICE DETAIL MODAL ===== */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveService(null)}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto bg-white rounded-3xl shadow-2xl border border-slate-200/80"
            >
              <div className="h-1.5 w-full bg-[linear-gradient(to_right,#FEA500,#FF8C00,#1E90FF)] rounded-t-3xl" />

              <button
                type="button"
                onClick={() => setActiveService(null)}
                aria-label="Close"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6 sm:p-8 lg:p-10 space-y-6">

                <div className="flex items-center gap-4 pr-10">
                  <div className="w-14 h-14 rounded-2xl bg-[linear-gradient(135deg,#FEA500,#FF8C00)] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#FEA500]/25">
                    {React.createElement(activeService.icon, { className: 'w-7 h-7 stroke-[2.5]' })}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                    {activeService.title}
                  </h3>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                  {activeService.description}
                </p>

                <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-5 sm:p-6 space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#FEA500]">
                    What&apos;s Included
                  </h4>
                  <ul className="space-y-2">
                    {activeService.whatsIncluded.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#FEA500] shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium border-l-4 border-[#FEA500] pl-4">
                  {activeService.signs}
                </p>

                <p className="text-slate-900 text-sm sm:text-base font-black italic">
                  {activeService.closing}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <Link
                    href="/#contact"
                    onClick={() => setActiveService(null)}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-[linear-gradient(to_right,#FEA500,#FF8C00)] hover:brightness-95 text-white font-black px-6 py-3.5 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FEA500]/30"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>Request a Booking</span>
                  </Link>
                  
                  <a
                    href={`tel:${phoneTel}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-white border-2 border-[#FEA500] hover:bg-[#FEA500]/5 text-[#FEA500] font-black px-6 py-3.5 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {phoneDisplay}</span>
                  </a>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}