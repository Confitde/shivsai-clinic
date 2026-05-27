import React from 'react';
import { MessageSquareCode } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20DermaVita%20Clinic,%20I%20would%20like%20to%20book%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2 select-none"
      aria-label="Contact us on WhatsApp"
    >
      {/* Hover tooltip label */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out font-sans text-xs uppercase tracking-wider font-semibold text-brand-dark bg-white border border-brand-gold/25 px-0 py-2.5 rounded-full shadow-md group-hover:px-5 pointer-events-none whitespace-nowrap">
        WhatsApp Consultation
      </span>

      {/* Button icon container */}
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-105 transition-all duration-300">
        
        {/* Pulsing emerald rings */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25" />
        <span className="absolute inset-[-4px] rounded-full border border-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-subtle" />

        {/* WhatsApp Icon */}
        <MessageSquareCode className="w-6 h-6 relative z-10" />

      </div>

    </a>
  );
}
