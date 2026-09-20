'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useCms } from '@/context/CmsContext';
import { submitBooking } from '@/lib/cms';

const DEFAULT_SERVICES = [
  'Logbook Service',
  'Brake Repair',
  'Engine Diagnostics',
  'Suspension & Steering',
  'Air Conditioning',
  'Tyres & Wheel Alignment',
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
    <section id="contact" className="relative w-full bg-[#0B0F17] text-white py-16 lg:py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3 max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-block text-xs font-bold tracking-[0.2em] text-[#FFC107] uppercase">
            Book Online
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
            Schedule Your <span className="text-[#FF6B00]">Appointment</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Fill in the form and our team will call to confirm your booking. Prefer to talk? Call us on{' '}
            <a href={`tel:${phoneTel}`} className="text-[#FFC107] font-bold hover:underline">
              {phoneDisplay}
            </a>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: BOOKING FORM */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6">
            {status === 'success' ? (
              <div className="flex flex-col items-center text-center gap-3 py-10">
                <div className="w-14 h-14 rounded-full bg-[#FF6B00]/10 border border-[#FF6B00]/30 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[#FF6B00]" />
                </div>
                <h3 className="text-xl font-extrabold text-white">Booking Request Sent</h3>
                <p className="text-slate-400 text-sm max-w-sm">
                  Thanks — we've got your details and our team will call to confirm shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-xs font-bold uppercase tracking-wider text-[#FFC107] hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm rounded-lg px-4 py-3">
                    {errorMessage}
                  </div>
                )}

                {/* FULL NAME & PHONE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      Full Name <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      Phone Number <span className="text-[#FF6B00]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                    />
                  </div>
                </div>

                {/* EMAIL & VEHICLE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      Vehicle (Make, Model, Year)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Toyota Camry 2018"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                    />
                  </div>
                </div>

                {/* SERVICE REQUIRED & PREFERRED DATE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      Service Required <span className="text-[#FF6B00]">*</span>
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors"
                    />
                  </div>
                </div>

                {/* DESCRIBE THE ISSUE */}
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-300 mb-1.5">
                    Describe the Issue
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what's happening with your car or any specific requests..."
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full bg-slate-900 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#FF6B00] transition-colors resize-none"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#FF6B00] hover:bg-[#e05e00] disabled:opacity-60 disabled:cursor-not-allowed text-white font-extrabold py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FF6B00]/25 active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  {status === 'submitting' ? 'Sending…' : 'Request Booking'}
                </button>

              </form>
            )}
          </div>

          {/* RIGHT COLUMN: GET IN TOUCH / WORKSHOP DETAILS */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Tilted Orange Background Box */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] to-[#FF8800] transform rotate-3 rounded-2xl shadow-xl shadow-[#FF6B00]/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

            {/* Workshop Details Container */}
            <div className="relative z-10 w-full rounded-xl bg-slate-900 border border-white/10 p-6 sm:p-8 space-y-8 shadow-2xl">
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FFC107]">
                  GET IN TOUCH
                </span>
                <h3 className="text-2xl font-black text-white uppercase">
                  Workshop Info
                </h3>
              </div>

              {/* DETAILS LIST */}
              <div className="space-y-6">
                
                {/* WORKSHOP */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400">Workshop Address</h4>
                    <p className="text-slate-200 text-sm font-semibold pt-0.5">
                      {address}
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400">Phone</h4>
                    <a
                      href={`tel:${phoneTel}`}
                      className="text-slate-200 hover:text-[#FFC107] text-sm font-semibold pt-0.5 block transition-colors"
                    >
                      {phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase text-slate-400">Email</h4>
                    <a
                      href={`mailto:${email}`}
                      className="text-slate-200 hover:text-[#FFC107] text-sm font-semibold pt-0.5 block transition-colors"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                {/* OPENING HOURS */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div className="space-y-1 w-full">
                    <h4 className="text-xs font-bold uppercase text-slate-400">Opening Hours</h4>
                    <div className="text-xs text-slate-300 space-y-1 pt-1">
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span>Monday – Friday</span>
                        <span className="font-semibold text-white">{hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span>Saturday</span>
                        <span className="font-semibold text-white">{hours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-semibold text-[#FF6B00]">{hours.sunday}</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
