import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#2D2622] text-[#F5F2EB] pt-20 pb-10 overflow-hidden">
      
      {/* Decorative blurred shapes */}
      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-blush/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 border-b border-white/10 pb-16">
        
        {/* Col 1: Brand Info & Socials */}
        <div className="lg:col-span-4 flex flex-col items-start text-left">
          
          <a href="#" className="flex items-center gap-2 mb-6 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold/20 border border-brand-gold/30">
              <Sparkles className="w-5 h-5 text-brand-gold" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-widest text-white uppercase">
                DERMAVITA
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-brand-gold-light font-medium -mt-1">
                Skin • Hair • Laser • Clinic
              </span>
            </div>
          </a>

          <p className="font-sans text-xs md:text-sm text-brand-beige/85 font-light leading-relaxed mb-8 max-w-sm">
            Experience gold-standard clinical dermatology, advanced FUE/DHI hair transplants, and premium laser treatments directed by Dr. Vijay Raut in Laxmipuri, Kolhapur.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center border border-white/10 transition-all duration-300" aria-label="Instagram Profile">
              <Instagram className="w-4.5 h-4.5" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center border border-white/10 transition-all duration-300" aria-label="Facebook Page">
              <Facebook className="w-4.5 h-4.5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 hover:bg-brand-gold hover:text-brand-dark flex items-center justify-center border border-white/10 transition-all duration-300" aria-label="YouTube Channel">
              <Youtube className="w-4.5 h-4.5" />
            </a>
          </div>

        </div>

        {/* Col 2: Services Links */}
        <div className="lg:col-span-2 flex flex-col items-start text-left">
          <h4 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-wider">Treatments</h4>
          <div className="flex flex-col gap-3 font-sans text-xs text-brand-beige/80 font-light">
            <a href="#services" className="hover:text-brand-gold transition-colors duration-300">Skin Treatment</a>
            <a href="#services" className="hover:text-brand-gold transition-colors duration-300">Hair Transplant</a>
            <a href="#services" className="hover:text-brand-gold transition-colors duration-300">Laser Removal</a>
            <a href="#services" className="hover:text-brand-gold transition-colors duration-300">Acne & Scars</a>
            <a href="#services" className="hover:text-brand-gold transition-colors duration-300">Cosmetic Procedures</a>
          </div>
        </div>

        {/* Col 3: Operating Hours */}
        <div className="lg:col-span-3 flex flex-col items-start text-left">
          <h4 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-wider">Working Hours</h4>
          
          <div className="flex flex-col gap-4 font-sans text-xs text-brand-beige/80 w-full">
            
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="font-medium text-brand-gold-light flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Mon - Sat</span>
              <span className="font-light">10:30 AM - 8:00 PM</span>
            </div>

            <div className="flex justify-between pb-2">
              <span className="font-medium text-red-400/80 flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-red-400" /> Sunday</span>
              <span className="font-semibold text-red-400/80 uppercase">Closed</span>
            </div>

          </div>
        </div>

        {/* Col 4: Contact & Maps */}
        <div className="lg:col-span-3 flex flex-col items-start text-left">
          
          <h4 className="font-serif text-lg font-bold text-white mb-6 uppercase tracking-wider">Contact Info</h4>
          
          <div className="flex flex-col gap-4 font-sans text-xs text-brand-beige/80 w-full mb-6">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
              <span className="font-light leading-relaxed">
                DermaVita Clinic, Landmark Building, 1st Floor, Near Laxmipuri Police Station, Laxmipuri, Kolhapur, MH 416002
              </span>
            </div>
            
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-brand-gold shrink-0" />
              <a href="tel:+919876543210" className="hover:text-brand-gold transition-colors duration-300 font-light">+91 98765 43210</a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-brand-gold shrink-0" />
              <a href="mailto:info@dermavitaclinic.com" className="hover:text-brand-gold transition-colors duration-300 font-light font-sans">info@dermavitaclinic.com</a>
            </div>
          </div>

          {/* Interactive Google Map embed (Responsive styled frame) */}
          <div className="w-full h-24 rounded-2xl overflow-hidden border border-white/10 shadow-inner relative group">
            {/* Embedded high-fidelity google map centered on Rajarampuri, Kolhapur */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.670399120612!2d74.22748887473574!3d16.69324548407843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc100135d56b0d9%3A0x8670bf67be5ef05d!2sLaxmipuri%2C%20Kolhapur%2C%20Maharashtra%20416002!5e0!3m2!1sen!2sin!4v1716650499999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DERMAVITA CLINIC Location Map"
            />
            {/* Map overlay action */}
            <a
              href="https://maps.google.com/?q=Balaji+Apartment,+Rajarampuri+3rd+Lane,+Kolhapur"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-all duration-300 flex items-center justify-center pointer-events-auto"
            />
          </div>

        </div>

      </div>

      {/* Bottom Bar: Copyright details */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-brand-beige/50 font-light">
        <span>© {currentYear} DERMAVITA CLINIC. All Rights Reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-gold transition-colors duration-300 font-light">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-brand-gold transition-colors duration-300 font-light">Terms of Service</a>
        </div>
      </div>

    </footer>
  );
}
