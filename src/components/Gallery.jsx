import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Eye } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    title: 'Luxury Welcome Lobby',
    desc: 'Our calming reception, crafted in warm marble, gold detailing, and organic textures, offers a soothing sanctuary.',
    img: import.meta.env.BASE_URL + 'gallery1.jpg',
    span: 'md:col-span-2'
  },
  {
    id: 2,
    title: 'Precision Laser Suite',
    desc: 'Equipped with medical-grade, cooling diode laser technologies for highly effective hair reduction & toning.',
    img: import.meta.env.BASE_URL + 'gallery2.jpg',
    span: 'md:col-span-1'
  },
  {
    id: 3,
    title: 'Bespoke Skincare Flatlay',
    desc: 'We curate clean, medical-grade, nutrient-dense skincare formulas to maintain clinical results at home.',
    img: import.meta.env.BASE_URL + 'gallery3.jpg',
    span: 'md:col-span-3'
  }
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-brand-cream/15 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold-dark font-semibold mb-3 block">
            Inside the Clinic
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-5">
            A Sanctuary of Science & Solace
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mb-6"></div>
          <p className="font-sans text-brand-dark-light text-sm md:text-base font-light leading-relaxed">
            Every room at DERMAVITA CLINIC is engineered with absolute hygiene protocols, advanced equipment, and calming luxury palettes.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedImg(item)}
              className={`relative overflow-hidden rounded-[2.5rem] border border-brand-gold/15 shadow-md aspect-[4/3] cursor-pointer group ${item.span}`}
            >
              {/* Image element */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              {/* Gold gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              {/* Hover content details */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-left text-white z-10 pointer-events-none">
                
                {/* Visual Eye Icon */}
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <Eye className="w-4.5 h-4.5" />
                </div>

                <h3 className="font-serif text-xl font-bold mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                
                <p className="font-sans text-[11px] text-white/80 font-light leading-relaxed max-w-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75">
                  {item.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal (Framer Motion entry) */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-dark/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-6"
            onClick={() => setSelectedImg(null)}
          >
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 z-50"
              aria-label="Close photo"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image container */}
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="relative max-w-5xl max-h-[75svh] overflow-hidden rounded-[2rem] border-4 border-white/10 shadow-2xl z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.img}
                alt={selectedImg.title}
                className="w-full max-h-[75svh] object-contain"
              />
            </motion.div>

            {/* Text details in Lightbox */}
            <div 
              className="mt-6 text-center max-w-xl text-white select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-serif text-2xl font-bold mb-2">{selectedImg.title}</h3>
              <p className="font-sans text-xs text-white/70 font-light leading-relaxed">{selectedImg.desc}</p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
