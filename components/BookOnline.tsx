'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Calendar } from 'lucide-react';

export default function BookingSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    vehicle: '',
    service: 'Logbook Service',
    preferredDate: '',
    issue: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submit logic here
    console.log('Booking Data:', formData);
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
            <a href="tel:0862449888" className="text-[#FFC107] font-bold hover:underline">
              08 6244 9888
            </a>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: BOOKING FORM */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl shadow-2xl space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              
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
                    <option value="Logbook Service">Logbook Service</option>
                    <option value="Brake Repair">Brake Repair</option>
                    <option value="Engine Diagnostics">Engine Diagnostics</option>
                    <option value="Suspension & Steering">Suspension & Steering</option>
                    <option value="Air Conditioning">Air Conditioning</option>
                    <option value="Tyres & Wheel Alignment">Tyres & Wheel Alignment</option>
                    <option value="Pre-Purchase Inspection">Pre-Purchase Inspection</option>
                    <option value="Other">Other</option>
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
                className="w-full bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold py-4 rounded-full text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FF6B00]/25 active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                REQUEST BOOKING
              </button>

            </form>
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
                      6 Aragon Crt, Armadale WA 6112
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
                      href="tel:0862449888"
                      className="text-slate-200 hover:text-[#FFC107] text-sm font-semibold pt-0.5 block transition-colors"
                    >
                      08 6244 9888
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
                      href="mailto:cmechanicperth@gmail.com"
                      className="text-slate-200 hover:text-[#FFC107] text-sm font-semibold pt-0.5 block transition-colors"
                    >
                      cmechanicperth@gmail.com
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
                        <span className="font-semibold text-white">7:30am – 5:30pm</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span>Saturday</span>
                        <span className="font-semibold text-white">8:00am – 1:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-semibold text-[#FF6B00]">Closed</span>
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