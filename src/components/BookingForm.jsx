import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarRange, User, Phone, Sparkles, MessageCircleCode, CheckCircle, Clock } from 'lucide-react';

const treatments = [
  'Skin Treatment',
  'Hair Treatment',
  'Hair Transplant',
  'Laser Hair Removal',
  'Acne & Scar Treatment',
  'Pigmentation Treatment',
  'Anti-Aging Treatments',
  'Dermatosurgery',
  'Nail Treatments',
  'Cosmetic Procedures'
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | loading | success

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.treatment || !formData.date) {
      alert('Please fill in all required fields.');
      return;
    }
    
    setStatus('loading');
    
    // Simulate API call for premium UX
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <section id="booking" className="py-24 relative overflow-hidden bg-gradient-to-t from-white to-brand-cream/40">
      
      {/* Decorative backdrop blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-blush/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Contact Information & Trust Elements */}
        <div className="lg:col-span-5 text-left">
          
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold-dark font-semibold mb-3 block">
            Begin Your Skin Journey
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            Schedule a <span className="gold-gradient-text">Clinical Consultation</span>
          </h2>
          
          <div className="w-16 h-[1px] bg-brand-gold mb-6"></div>

          <p className="font-sans text-brand-dark-light text-sm md:text-base font-light leading-relaxed mb-8">
            Select your preferred treatment interest and timing. Our specialized clinical coordinators will review your clinical history and reach out via WhatsApp/Call to confirm your slot within 2 business hours.
          </p>

          {/* Quick FAQ / Bullet Guides */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-4 items-start">
              <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold-dark shrink-0">
                <Clock className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-brand-dark">Rapid Response</h4>
                <p className="font-sans text-brand-dark-light/80 text-xs font-light">Confirmations are sent via WhatsApp within 2 hours.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-9 h-9 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold-dark shrink-0">
                <CheckCircle className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-brand-dark">Confidential consultation</h4>
                <p className="font-sans text-brand-dark-light/80 text-xs font-light">All skin and cosmetic treatments remain strictly confidential.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Glassmorphic Booking Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-brand-gold/15 shadow-xl relative overflow-hidden">
            
            {/* Top golden border ribbon */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-gold-light via-brand-gold to-brand-gold-dark" />

            <AnimatePresence mode="wait">
              
              {status === 'idle' && (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                  
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs uppercase tracking-wider font-semibold text-brand-dark">Full Name *</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Dr. Apurv Kulkarni"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-brand-gold/20 bg-white/40 focus:outline-none focus:ring-1 focus:ring-brand-gold text-xs text-brand-dark transition-all duration-300"
                      />
                      <User className="w-4.5 h-4.5 text-brand-dark-light/40 absolute left-4 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>

                  {/* Phone & Date fields in a row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-xs uppercase tracking-wider font-semibold text-brand-dark">Phone Number *</label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-brand-gold/20 bg-white/40 focus:outline-none focus:ring-1 focus:ring-brand-gold text-xs text-brand-dark transition-all duration-300"
                        />
                        <Phone className="w-4.5 h-4.5 text-brand-dark-light/40 absolute left-4 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-sans text-xs uppercase tracking-wider font-semibold text-brand-dark">Preferred Date *</label>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-brand-gold/20 bg-white/40 focus:outline-none focus:ring-1 focus:ring-brand-gold text-xs text-brand-dark transition-all duration-300"
                        />
                        <CalendarRange className="w-4.5 h-4.5 text-brand-dark-light/40 absolute left-4 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>

                  </div>

                  {/* Treatment Selector */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs uppercase tracking-wider font-semibold text-brand-dark">Treatment Interest *</label>
                    <div className="relative">
                      <select
                        name="treatment"
                        required
                        value={formData.treatment}
                        onChange={handleChange}
                        className="w-full pl-11 pr-10 py-3.5 rounded-2xl border border-brand-gold/20 bg-white/40 focus:outline-none focus:ring-1 focus:ring-brand-gold text-xs text-brand-dark transition-all duration-300 appearance-none"
                      >
                        <option value="" disabled>Select a signature treatment</option>
                        {treatments.map((treat) => (
                          <option key={treat} value={treat}>{treat}</option>
                        ))}
                      </select>
                      <Sparkles className="w-4.5 h-4.5 text-brand-dark-light/40 absolute left-4 top-1/2 -translate-y-1/2" />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-dark-light/40 text-xs">▼</div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-xs uppercase tracking-wider font-semibold text-brand-dark">Your Concern / Message</label>
                    <div className="relative">
                      <textarea
                        name="message"
                        placeholder="Tell us briefly about your skin or hair concern (optional)..."
                        value={formData.message}
                        onChange={handleChange}
                        rows="3"
                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-brand-gold/20 bg-white/40 focus:outline-none focus:ring-1 focus:ring-brand-gold text-xs text-brand-dark transition-all duration-300 resize-none"
                      />
                      <MessageCircleCode className="w-4.5 h-4.5 text-brand-dark-light/40 absolute left-4 top-5" />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="mt-4 flex items-center justify-center gap-2 font-sans text-xs tracking-widest uppercase font-semibold text-white bg-brand-dark hover:bg-brand-gold-dark py-4.5 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    Submit Booking Request
                  </button>

                </form>
              )}

              {status === 'loading' && (
                <div key="loading" className="py-16 flex flex-col items-center justify-center">
                  <div className="relative flex items-center justify-center w-16 h-16 rounded-full border border-brand-gold/25 bg-brand-gold/5 mb-6">
                    <div className="w-10 h-10 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-brand-dark mb-2">Verifying Calendar Slots</h3>
                  <p className="font-sans text-xs text-brand-dark-light/70 font-light">Securely processing clinical booking inquiry...</p>
                </div>
              )}

              {status === 'success' && (
                <div key="success" className="py-8 flex flex-col items-center justify-center text-center">
                  
                  {/* Glowing success seal */}
                  <div className="w-16 h-16 rounded-full bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold-dark mb-6 animate-bounce">
                    <CheckCircle className="w-8 h-8 fill-brand-gold/10" />
                  </div>

                  <h3 className="font-serif text-3xl font-bold text-brand-dark mb-4">
                    Inquiry Received Successfully!
                  </h3>
                  
                  <p className="font-sans text-brand-dark-light font-light text-sm max-w-md leading-relaxed mb-8">
                    Thank you, <strong className="font-bold text-brand-dark">{formData.name}</strong>. We have logged your request for <strong className="font-semibold text-brand-gold-dark">{formData.treatment}</strong> on <strong className="font-semibold text-brand-dark">{formData.date}</strong>.
                  </p>

                  <div className="w-full max-w-sm p-5 rounded-2xl bg-brand-gold/5 border border-brand-gold/10 text-left text-xs mb-8">
                    <h5 className="font-sans font-bold uppercase tracking-wider text-brand-dark mb-2">What Happens Next?</h5>
                    <ul className="list-disc pl-4 flex flex-col gap-2 font-light text-brand-dark-light/95">
                      <li>Our clinic counselor will verify slot availability.</li>
                      <li>You will receive a WhatsApp message/Call to confirm within 2 hours.</li>
                      <li>Instructions regarding pre-procedure prep will be shared.</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', phone: '', treatment: '', date: '', message: '' });
                    }}
                    className="font-sans text-xs tracking-widest uppercase font-semibold text-brand-dark hover:text-brand-gold border border-brand-dark/20 hover:border-brand-gold px-6 py-3.5 rounded-xl transition-all duration-300"
                  >
                    Submit Another Inquiry
                  </button>

                </div>
              )}

            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
}
