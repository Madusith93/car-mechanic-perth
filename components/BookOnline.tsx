'use client';

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

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
    <section id="contact" className="relative w-full bg-slate-50 text-slate-900 py-16 sm:py-20 lg:py-28 overflow-hidden border-b border-slate-200/80">
      
      {/* VIBRANT AMBIENT GLOW ACCENTS */}
      <div className="absolute top-10 left-10 z-0 w-96 h-96 bg-[#FF6B00]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 z-0 w-96 h-96 bg-[#EAB308]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAB308]/15 border border-[#EAB308]/40 text-xs font-black tracking-widest text-slate-900 uppercase shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00]" />
            <span>BOOK ONLINE</span>
          </div>

          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black tracking-tight leading-[1.15] text-slate-900">
            Schedule Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] via-[#F97316] to-[#EAB308]">
              Appointment
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
            Fill in the form and our team will call to confirm your booking. Prefer to talk? Call us on{' '}
            <a href="tel:0862449888" className="text-[#FF6B00] font-black hover:underline underline-offset-2">
              08 6244 9888
            </a>.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: BOOKING FORM */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl shadow-slate-200/50 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all font-medium"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all font-medium"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all font-medium"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all font-medium"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all font-semibold"
                  >
                    <option value="Logbook Service">Logbook Service</option>
                    <option value="Brake Repair">Brake Repair</option>
                    <option value="Engine Diagnostics">Engine Diagnostics</option>
                    <option value="Suspension & Steering">Suspension & Steering</option>
                    <option value="Air Conditioning">Air Conditioning</option>
                
                    <option value="Pre-Purchase Inspection">Pre-Purchase Inspection</option>
                    <option value="Other">Other</option>
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all font-medium"
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
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:outline-none focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-all resize-none font-medium"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FF6B00] to-[#F97316] hover:from-[#e05e00] hover:to-[#ea580c] text-white font-black py-4 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 shadow-lg shadow-[#FF6B00]/25 active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                REQUEST BOOKING
              </button>

            </form>
          </div>

          {/* RIGHT COLUMN: GET IN TOUCH / WORKSHOP DETAILS */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            
            {/* Tilted Orange Background Box */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF6B00] via-[#F97316] to-[#EAB308] transform rotate-3 rounded-2xl shadow-xl shadow-[#FF6B00]/20 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3" />

            {/* Workshop Details Container */}
            <div className="relative z-10 w-full rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-8 shadow-xl">
              
              <div className="space-y-1.5 border-b border-slate-100 pb-5">
                <span className="text-xs font-black uppercase tracking-widest text-[#FF6B00]">
                  GET IN TOUCH
                </span>
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                  Workshop Info
                </h3>
              </div>

              {/* DETAILS LIST */}
              <div className="space-y-6">
                
                {/* WORKSHOP ADDRESS */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Workshop Address</h4>
                    <p className="text-slate-800 text-sm font-extrabold pt-0.5">
                      6 Aragon Crt, Armadale WA 6112
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Phone</h4>
                    <a
                      href="tel:0862449888"
                      className="text-slate-800 hover:text-[#FF6B00] text-sm font-extrabold pt-0.5 block transition-colors"
                    >
                      08 6244 9888
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Email</h4>
                    <a
                      href="mailto:cmechanicperth@gmail.com"
                      className="text-slate-800 hover:text-[#FF6B00] text-sm font-extrabold pt-0.5 block transition-colors"
                    >
                      cmechanicperth@gmail.com
                    </a>
                  </div>
                </div>

                {/* OPENING HOURS */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 border border-[#FF6B00]/20 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#FF6B00]" />
                  </div>
                  <div className="space-y-2 w-full">
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Opening Hours</h4>
                    <div className="text-xs text-slate-600 space-y-1.5 pt-1">
                      <div className="flex justify-between border-b border-slate-100 pb-1.5">
                        <span className="font-medium">Monday – Friday</span>
                        <span className="font-extrabold text-slate-900">7:30am – 5:30pm</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-1.5">
                        <span className="font-medium">Saturday</span>
                        <span className="font-extrabold text-slate-900">8:00am – 1:00pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Sunday</span>
                        <span className="font-extrabold text-[#FF6B00]">Closed</span>
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