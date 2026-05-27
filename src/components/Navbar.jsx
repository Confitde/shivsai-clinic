import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctor', href: '#doctor' },
    { name: 'Transformations', href: '#transformations' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-panel py-3 shadow-md'
          : 'bg-transparent py-5 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-brand-gold/10 border border-brand-gold/20 transition-all duration-500 group-hover:bg-brand-gold/20 group-hover:scale-105">
            <Sparkles className="w-5 h-5 text-brand-gold animate-pulse-subtle" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold tracking-widest text-brand-dark uppercase">
              DERMAVITA
            </span>
            <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-brand-gold-dark font-medium -mt-1">
              Skin • Hair • Laser • Clinic
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-sm tracking-wider uppercase text-brand-dark hover:text-brand-gold transition-colors duration-300 relative group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#booking"
            className="font-sans text-xs tracking-widest uppercase text-white bg-brand-dark hover:bg-brand-gold-dark px-6 py-3 rounded-full border border-brand-dark hover:border-brand-gold-dark shadow-sm transition-all duration-300 hover:scale-105"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Navigation Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-brand-dark hover:text-brand-gold p-2 transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer (Smooth Transition overlay) */}
      <div
        className={`fixed inset-0 top-[70px] bg-brand-cream/95 backdrop-blur-lg z-40 transition-all duration-500 lg:hidden flex flex-col items-center justify-center gap-8 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="font-sans text-lg tracking-wider uppercase text-brand-dark hover:text-brand-gold transition-colors duration-300 py-2 border-b border-brand-gold/10 w-4/5 text-center"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#booking"
          onClick={() => setIsOpen(false)}
          className="font-sans text-sm tracking-widest uppercase text-white bg-brand-dark hover:bg-brand-gold hover:border-brand-gold px-8 py-4 rounded-full border border-brand-dark shadow-md transition-all duration-300 w-4/5 text-center mt-4"
        >
          Book Appointment
        </a>
      </div>
    </nav>
  );
}
