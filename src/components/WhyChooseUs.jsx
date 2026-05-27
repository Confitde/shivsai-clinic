import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Cpu, 
  FileHeart, 
  ShieldCheck, 
  Users,
  Sparkles
} from 'lucide-react';

const reasons = [
  {
    id: 1,
    title: 'Experienced Dermatologist',
    icon: Award,
    desc: 'All diagnoses and clinical procedures are directly designed, led, and supervised by Dr. Vijay Raut, MD / DNB in Dermatology.'
  },
  {
    id: 2,
    title: 'Advanced Technology',
    icon: Cpu,
    desc: 'Equipped with gold-standard, US FDA-approved laser technologies and specialized hair transplant suites for high-precision outcomes.'
  },
  {
    id: 3,
    title: 'Safe & Hygienic Procedures',
    icon: ShieldCheck,
    desc: 'We enforce rigorous clinical sterilization, utilize high-quality single-use medical consumables, and follow strict hospital safety protocols.'
  },
  {
    id: 4,
    title: 'Personalized Treatment Plans',
    icon: FileHeart,
    desc: 'No cookie-cutter therapies. We perform a deep analysis of your skin or hair condition and craft a personalized clinical treatment blueprint.'
  },
  {
    id: 5,
    title: 'High Patient Satisfaction',
    icon: Users,
    desc: 'Proudly holding a perfect 5.0 rating on Google from 57+ verified patient reviews praising our diagnostic expertise and gentle care.'
  },
  {
    id: 6,
    title: 'Modern Clinic Setup',
    icon: Sparkles,
    desc: 'Relax and receive treatment inside our elegant, state-of-the-art clinic chambers conveniently located in Laxmipuri, Kolhapur.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-brand-cream/30 relative overflow-hidden">
      
      {/* Dynamic blurred glow shapes */}
      <div className="absolute top-[10%] right-[-5%] w-80 h-80 rounded-full bg-brand-blush/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-80 h-80 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold-dark font-semibold mb-3 block">
            Why DERMAVITA
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-5">
            A Higher Standard of Care
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mb-6"></div>
          <p className="font-sans text-brand-dark-light text-sm md:text-base font-light leading-relaxed">
            We merge medical-grade clinical dermatology and advanced laser tech with the patient-centric comfort of a premium aesthetic clinic.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-8 rounded-[2rem] border border-brand-gold/10 hover:border-brand-gold/30 hover:shadow-brand-gold/5 shadow-sm relative group transition-all duration-300"
              >
                
                {/* Gold aura backdrop glow on icon hover */}
                <div className="absolute top-8 left-8 w-12 h-12 rounded-2xl bg-brand-gold/10 group-hover:scale-[2] group-hover:opacity-0 transition-all duration-700 pointer-events-none" />

                {/* Card Icon */}
                <div className="relative w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center text-brand-gold-dark mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                  <IconComp className="w-5 h-5 transition-transform duration-500 group-hover:rotate-6" />
                </div>

                {/* Card Info */}
                <h3 className="font-serif text-xl font-bold text-brand-dark mb-3">
                  {item.title}
                </h3>
                <p className="font-sans text-brand-dark-light/80 text-xs md:text-sm font-light leading-relaxed text-left">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
