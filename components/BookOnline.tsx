'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { useCms } from '@/context/CmsContext';
import { submitBooking } from '@/lib/cms';

const DEFAULT_SERVICES = [
  'Logbook Service',
  'Brake Repair',
  'Engine Diagnostics',
  'Suspension & Steering',
  'Air Conditioning',
  'Pre-Purchase Inspection',
  'Other',
];

const DEFAULTS = {
  address: '6 Aragon Crt, Armadale WA 6112',
  phoneDisplay: '08 6244 9888',
  phoneTel: '0862449888',
  email: 'cmechanicperth@gmail.com',
  hours: { weekdays: '7:30am – 5:30pm', saturday: '8:00am – 1:00pm', sunday: 'Closed' },
};

export default function BookingSection() {
  const { content } = useCms();
  const site = content?.site;
  const serviceOptions = content?.booking?.services?.length ? content.booking.services : DEFAULT_SERVICES;

  const address = site?.address || DEFAULTS.address;
  const phoneDisplay = site?.phone_display || DEFAULTS.phoneDisplay;
  const phoneTel = site?.phone_tel || DEFAULTS.phoneTel;
  const email = site?.email || DEFAULTS.email;
  const hours = site?.hours || DEFAULTS.hours;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicle: '',
    service: serviceOptions[0] || 'Logbook Service',
    preferredDate: '',
    issue: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const result = await submitBooking(formData);

    if (result.success) {
      setStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        vehicle: '',
        service: serviceOptions[0] || 'Logbook Service',
        preferredDate: '',
        issue: '',
      });
    } else {
      setStatus('error');
      setErrorMessage(result.error || 'Something went wrong. Please call us instead.');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-slate-50 text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">

      {/* VIBRANT AMBIENT GLOW ACCENTS (ORANGE & ELECTRIC BLUE) */}
      <div className="absolute top-10 left-10 z-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 z-0 w-96 h-96 bg-[#00D2FF]/12 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12 lg:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-[#00D2FF] text-xs font-black tracking-widest text-slate-900 uppercase shadow-md shadow-[#00D2FF]/15 hover:scale-105 transition-transform duration-300"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-ping" />
            <span>BOOK ONLINE</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900"
          >
            Schedule Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] via-[#00D2FF] to-[#0052D4]">
              Appointment
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium"
          >
            Fill in the form and our team will call to confirm your booking. Prefer to talk? Call us on{' '}
            <a href={`tel:${phoneTel}`} className="text-[#FF6B00] font-black hover:underline underline-offset-2 inline-block whitespace-nowrap">
              {phoneDisplay}
            </a>.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* LEFT COLUMN: BOOKING FORM */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white border-2 border-slate-200/90 hover:border-[#00D2FF]/50 p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl hover:shadow-2xl hover:shadow-[#00D2FF]/10 transition-all duration-300 space-y-6 relative group overflow-hidden"
          >
            {/* Top Glow Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B00] via-[#00D2FF] to-[#0052D4]" />

            {status === 'success' ? (
              <div className="flex flex-col items-center text-center gap-3 py-10">
                <div className="w-16 h-16 rounded-full bg-[#FF6B00]/10 border-2 border-[#FF6B00] flex items-center justify-center shadow-lg shadow-[#FF6B00]/20">
                  <CheckCircle2 className="w-8 h-8 text-[#FF6B00]" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">Booking Request Sent!</h3>
                <p className="text-slate-600 text-sm max-w-sm font-semibold">
                  Thanks — we&apos;ve got your details and our team will call to confirm shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 text-xs font-black uppercase tracking-wider text-[#FF6B00] hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm rounded-xl px-4 py-3 font-semibold">
                    {errorMessage}
                  </div>
                )}

                {/* FULL NAME & PHONE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Full Name <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* EMAIL & VEHICLE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Vehicle (Make, Model, Year)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Toyota Camry 2018"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* SERVICE REQUIRED & PREFERRED DATE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Service Required <span className="text-[#FF6B00]">*</span>
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all font-semibold"
                    >
                      {serviceOptions.map((option: string) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* DESCRIBE THE ISSUE */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                    Describe the Issue
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what's happening with your car or any specific requests..."
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#00D2FF] focus:ring-2 focus:ring-[#00D2FF]/20 transition-all resize-none font-medium"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-[#FF6B00] via-[#F97316] to-[#00D2FF] hover:from-[#e05e00] hover:to-[#00b2da] disabled:opacity-60 disabled:cursor-not-allowed text-white font-black py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-xl shadow-[#FF6B00]/25 hover:shadow-2xl hover:shadow-[#FF6B00]/40 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'SENDING…' : 'REQUEST BOOKING'}</span>
                </button>

              </form>
            )}
          </motion.div>

          {/* RIGHT COLUMN: GET IN TOUCH / WORKSHOP DETAILS */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative w-full flex justify-center group"
          >
            {/* Tilted Accent Background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] via-[#00D2FF] to-[#0052D4] transform rotate-2 sm:rotate-3 rounded-3xl shadow-xl shadow-[#FF6B00]/15 group-hover:rotate-1 transition-transform duration-500 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

            <div className="relative z-10 w-full rounded-3xl bg-white border-2 border-slate-200/90 p-6 sm:p-8 space-y-8 shadow-xl">

              <div className="space-y-1.5 border-b border-slate-100 pb-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-[#FF6B00]">
                    GET IN TOUCH
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                    Workshop Info
                  </h3>
                </div>
                <Sparkles className="w-5 h-5 text-[#00D2FF]" />
              </div>

              <div className="space-y-6">

                {/* WORKSHOP ADDRESS */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#F97316] flex items-center justify-center shrink-0 shadow-md shadow-[#FF6B00]/20">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Workshop Address</h4>
                    <p className="text-slate-800 text-sm font-extrabold pt-0.5">
                      {address}
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#F97316] flex items-center justify-center shrink-0 shadow-md shadow-[#FF6B00]/20">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Phone</h4>
                    <a
                      href={`tel:${phoneTel}`}
                      className="text-slate-800 hover:text-[#FF6B00] text-sm font-extrabold pt-0.5 block transition-colors"
                    >
                      {phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#F97316] flex items-center justify-center shrink-0 shadow-md shadow-[#FF6B00]/20">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Email</h4>
                    <a
                      href={`mailto:${email}`}
                      className="text-slate-800 hover:text-[#FF6B00] text-sm font-extrabold pt-0.5 block transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                {/* OPENING HOURS */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6B00] to-[#F97316] flex items-center justify-center shrink-0 shadow-md shadow-[#FF6B00]/20">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div className="space-y-2 w-full">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Opening Hours</h4>
                    <div className="text-xs text-slate-600 space-y-1.5 pt-1">
                      <div className="flex justify-between border-b border-slate-100 pb-1.5">
                        <span className="font-semibold">Monday – Friday</span>
                        <span className="font-extrabold text-slate-900">{hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-1.5">
                        <span className="font-semibold">Saturday</span>
                        <span className="font-extrabold text-slate-900">{hours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">Sunday</span>
                        <span className="font-extrabold text-[#FF6B00]">{hours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}