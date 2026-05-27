import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import DoctorProfile from './components/DoctorProfile';
import AboutClinic from './components/AboutClinic';
import Gallery from './components/Gallery';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate luxury clinic brand reveal loader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#FAF9F6] z-50 flex flex-col items-center justify-center select-none"
          >
            {/* Elegant glowing logo container */}
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-brand-gold/10 border border-brand-gold/25 mb-6 animate-pulse-subtle">
              <Sparkles className="w-10 h-10 text-brand-gold" />
            </div>

            {/* Brand Names fading in */}
            <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-widest text-brand-dark uppercase mb-2 text-center px-4">
              DERMAVITA CLINIC
            </h1>
            <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-brand-gold-dark font-medium mb-12 text-center px-4">
              Skin • Hair • Laser • Aesthetics
            </p>

            {/* Glowing line progress bar */}
            <div className="w-48 h-[1px] bg-brand-gold/15 relative overflow-hidden rounded-full">
              <motion.div
                initial={{ left: "-100%" }}
                animate={{ left: "100%" }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
              />
            </div>

          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col min-h-screen"
          >
            {/* Sticky Navigation */}
            <Navbar />

            {/* Core Sections in requested order */}
            <main className="flex-grow">
              <Hero />
              <AboutClinic />
              <Services />
              <DoctorProfile />
              <BeforeAfter />
              <WhyChooseUs />
              <Testimonials />
              <Gallery />
              <BookingForm />
              <FAQ />
            </main>

            {/* Clinic footer */}
            <Footer />

            {/* Fixed CTA items */}
            <WhatsAppButton />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
