import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Calendar, ShieldCheck, HeartPulse } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-tr from-brand-cream via-white to-brand-blush">
      
      {/* Decorative Luxury Background Elements */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-blush/20 blur-[120px] pointer-events-none" />
      
      {/* Premium Floating Skincare Particles */}
      <motion.div 
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[25%] left-[8%] w-12 h-12 rounded-full border border-brand-gold/15 bg-white/20 backdrop-blur-sm pointer-events-none hidden md:block"
      />
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[20%] right-[40%] w-16 h-16 rounded-full border border-brand-gold/10 bg-brand-blush/30 backdrop-blur-sm pointer-events-none hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Typography and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Trust Badge / Trust Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-brand-gold/30 shadow-sm mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-brand-gold-dark" />
            <span className="text-xs uppercase tracking-widest font-sans font-semibold text-brand-dark-light">
              Trusted Dermatology Clinic in Kolhapur
            </span>
          </motion.div>

          {/* Luxury Serif Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-dark leading-[1.1] mb-6"
          >
            Advanced Skin, Hair<br />
            & Aesthetic Care<br />
            <span className="gold-gradient-text">in Kolhapur</span>
          </motion.h1>

          {/* Subheadline explaining services */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-brand-dark-light text-base md:text-lg max-w-xl mb-10 leading-relaxed font-light"
          >
            Expert dermatology, hair restoration, laser treatments, and cosmetic procedures by experienced specialists. Experience clinical excellence and personalized aesthetic care under Dr. Vijay Raut.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12"
          >
            <a
              href="#booking"
              className="flex items-center justify-center gap-2 font-sans text-sm tracking-widest uppercase font-semibold text-white bg-brand-dark hover:bg-brand-gold-dark px-8 py-5 rounded-2xl shadow-lg hover:shadow-brand-gold/10 transition-all duration-300 hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </a>
            <a
              href="https://wa.me/919876543210?text=Hi%20DermaVita%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 font-sans text-sm tracking-widest uppercase font-semibold text-brand-green hover:text-white border-2 border-brand-green/30 hover:border-brand-green bg-white/50 hover:bg-brand-green px-8 py-5 rounded-2xl shadow-sm transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Consultation
            </a>
          </motion.div>

          {/* Trust Indicators / Stats */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-3 gap-6 md:gap-10 border-t border-brand-gold/20 pt-8 w-full max-w-lg"
          >
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <span className="text-2xl md:text-3xl font-serif font-bold text-brand-dark">5.0</span>
                <div className="flex text-brand-gold mb-1">
                  <Star className="w-4 h-4 fill-brand-gold" />
                </div>
              </div>
              <span className="text-xs uppercase tracking-wider text-brand-dark-light/70 font-medium">57+ Reviews</span>
            </div>
            
            <div className="flex flex-col items-start border-l border-brand-gold/20 pl-6 md:pl-10">
              <span className="text-2xl md:text-3xl font-serif font-bold text-brand-dark">Advanced</span>
              <span className="text-xs uppercase tracking-wider text-brand-dark-light/70 font-medium">Technology</span>
            </div>

            <div className="flex flex-col items-start border-l border-brand-gold/20 pl-6 md:pl-10">
              <span className="text-2xl md:text-3xl font-serif font-bold text-brand-dark">Trusted</span>
              <span className="text-xs uppercase tracking-wider text-brand-dark-light/70 font-medium">Dermatology</span>
            </div>
          </motion.div>

        </div>

        {/* Right Side: Professional Dermatologist Image */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Circular Gold Aura Rotating Backdrop */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute w-[95%] h-[95%] border border-dashed border-brand-gold/30 rounded-full"
          />

          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute w-[85%] h-[85%] border border-brand-gold/10 rounded-full"
          />

          {/* Premium Skincare Leaf/Blob Backdrop */}
          <div className="absolute top-[8%] left-[8%] w-[84%] h-[84%] rounded-[40%_60%_70%_30%_/_40%_50%_65%_55%] bg-gradient-to-tr from-brand-gold/10 to-brand-blush/60 blur-[10px]" />

          {/* Main Portrait with Elegant Rounded Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-[340px] h-[450px] md:w-[380px] md:h-[500px] overflow-hidden rounded-[2.5rem] border-[12px] border-white shadow-2xl z-10 bg-brand-beige"
          >
            <img 
              src={`${import.meta.env.BASE_URL}doctor.jpg`} 
              alt="Dr. Vijay Raut - Chief Dermatologist" 
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              loading="eager"
            />
          </motion.div>

          {/* Subtle Float Medal Overlay */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-0 z-20 glass-panel shadow-lg rounded-2xl p-4 border border-brand-gold/30 flex items-center gap-3 max-w-[200px]"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-gold/20 flex items-center justify-center text-brand-gold-dark shrink-0">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="text-[11px] font-sans font-bold uppercase tracking-wider text-brand-dark">MD / DNB</h4>
              <p className="text-[9px] font-sans text-brand-dark-light/80">Expert hair transplant & clinical dermatosurgery</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
