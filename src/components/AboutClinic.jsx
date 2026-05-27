import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldAlert, Award, HeartHandshake } from 'lucide-react';

export default function AboutClinic() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      
      {/* Soft luxurious background shapes */}
      <div className="absolute top-[10%] left-[-5%] w-[450px] h-[450px] rounded-full bg-brand-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-[450px] h-[450px] rounded-full bg-brand-blush/15 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Side: Elegant Branding and Text */}
        <div className="lg:col-span-6 text-left">
          
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold-dark font-semibold mb-3 block">
            About the Clinic
          </span>
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-6 leading-tight">
            Science Meets Luxury at <span className="gold-gradient-text">DERMAVITA</span>
          </h2>
          
          <div className="w-16 h-[1px] bg-brand-gold mb-8"></div>

          <div className="flex flex-col gap-6 font-sans text-brand-dark-light text-sm md:text-base font-light leading-relaxed">
            <p>
              Located in the heart of Kolhapur at Laxmipuri, <strong>DERMAVITA CLINIC</strong> is a premier destination for advanced dermatological care and high-performance medical aesthetics. Founded on the principles of medical integrity and exceptional patient care, we specialize in a 360-degree approach to hair, skin, nail, and cosmetic wellness.
            </p>
            <p>
              Under the expert leadership of <strong>Dr. Vijay Raut</strong>, our clinic merges decades of clinical expertise with the world's most advanced, US FDA-approved laser and hair restoration technologies. We understand that your skin is unique; hence, we reject one-size-fits-all treatments, designing highly customized clinical blueprints that respect your natural anatomy while delivering visible, transformative results.
            </p>
            <p className="border-l-2 border-brand-gold pl-6 italic font-serif text-base md:text-lg text-brand-dark/95">
              "We believe that true aesthetic excellence is achieved when cutting-edge medical science is delivered with safe, ethical, and meticulously hygienic protocols."
            </p>
          </div>

        </div>

        {/* Right Side: Glassmorphic Core Values Cards */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Card 1: Medical Integrity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel p-8 rounded-[2rem] border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-brand-gold/5 shadow-sm text-left relative group transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold-dark mb-5 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-brand-dark mb-2">Medical Expertise</h4>
            <p className="font-sans text-brand-dark-light/80 text-xs font-light leading-relaxed">
              Led by Dr. Vijay Raut, an experienced dermatologist specializing in advanced hair transplants and dermatosurgery.
            </p>
          </motion.div>

          {/* Card 2: FDA-Approved Tech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-8 rounded-[2rem] border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-brand-gold/5 shadow-sm text-left relative group transition-all duration-300"
          >
            <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold-dark mb-5 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-serif text-lg font-bold text-brand-dark mb-2">Advanced Systems</h4>
            <p className="font-sans text-brand-dark-light/80 text-xs font-light leading-relaxed">
              Equipped with state-of-the-art US FDA-approved lasers and high-precision clinical cosmetology platforms.
            </p>
          </motion.div>

          {/* Card 3: Safe & Sterile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel p-8 rounded-[2rem] border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-brand-gold/5 shadow-sm text-left relative group transition-all duration-300 sm:col-span-2"
          >
            <div className="flex gap-5 items-start">
              <div className="w-10 h-10 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold-dark mb-5 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-brand-dark mb-2">Patient-Centric Safe Environment</h4>
                <p className="font-sans text-brand-dark-light/80 text-xs font-light leading-relaxed">
                  We enforce hospital-grade clinical sterilization protocols and utilize single-use premium consumables for your absolute health, hygiene, and comfort during every laser session, hair transplant, or minor cosmetic surgical procedure.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
