import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: 'What clinical specialties does DERMAVITA CLINIC offer?',
    answer: 'We are a comprehensive medical-aesthetic clinic offering advanced diagnostic and therapeutic care across 10 main specialties: skin treatments, hair treatments, high-density hair transplants, FDA-approved laser hair removal, acne & scar remodelling, pigmentation treatments, anti-aging solutions, minor dermatosurgical excisions, nail fungal/ingrown nail care, and modern cosmetic procedures.'
  },
  {
    id: 2,
    question: 'How is your Hair Transplant procedure performed?',
    answer: 'We specialize in advanced FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation) hair transplant techniques under local anesthesia. Directed by Dr. Vijay Raut, we extract individual healthy hair follicles from your donor area and precisely micro-implant them at correct natural angles and densities, ensuring a natural-looking hairline with maximum survivability.'
  },
  {
    id: 3,
    question: 'Is Laser Hair Removal safe and painful?',
    answer: 'Yes, it is extremely safe! We utilize gold-standard triple-wavelength diode laser technology that targets hair follicles precisely without affecting surrounding skin tissues. The laser handpiece features a built-in sapphire contact cooling system that keeps the skin chilled at 4°C, completely neutralizing heat sensations and making the procedure virtually painless.'
  },
  {
    id: 4,
    question: 'What treatments are available for deep acne scars?',
    answer: 'For structural acne scars, we utilize combined medical modalities for the best results: subcision to break fibrous under-scar bands, Microneedling Fractional RF (MNRF) to stimulate deep dermal collagen remodeling, and fractional CO2 laser resurfacing to smooth surface texture and pitting.'
  },
  {
    id: 5,
    question: 'How do I book a consultation with Dr. Vijay Raut?',
    answer: 'You can easily book a clinical consultation by filling out our online booking form, calling us directly, or clicking the floating WhatsApp button. Our administrative team will reach out via WhatsApp/Call to confirm your slot within 2 business hours.'
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative vectors */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-brand-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-brand-blush/20 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold-dark font-semibold mb-3 block">
            Got Questions?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-5">
            Frequently Asked Queries
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mb-6"></div>
          <p className="font-sans text-brand-dark-light text-sm md:text-base font-light leading-relaxed">
            Clear, honest answers to help you make informed decisions regarding clinical treatments.
          </p>
        </div>

        {/* Accordions Wrapper */}
        <div className="flex flex-col gap-5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`glass-panel rounded-[2rem] border transition-all duration-500 overflow-hidden ${
                  isOpen 
                    ? 'border-brand-gold/40 shadow-md bg-white/90' 
                    : 'border-brand-gold/10 hover:border-brand-gold/30 hover:bg-white/60'
                }`}
              >
                {/* Accordion Trigger header */}
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-500 ${isOpen ? 'text-brand-gold-dark' : 'text-brand-dark-light/45'}`} />
                    <span className="font-serif text-base md:text-lg font-bold text-brand-dark">
                      {faq.question}
                    </span>
                  </div>

                  {/* Toggle Indicator icon */}
                  <div className={`w-8 h-8 rounded-full border border-brand-gold/15 flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'bg-brand-gold text-white rotate-180' : 'bg-brand-gold/5 text-brand-gold-dark'}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-2 border-t border-brand-gold/10 text-left">
                        <p className="font-sans text-brand-dark-light/90 text-xs md:text-sm font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
