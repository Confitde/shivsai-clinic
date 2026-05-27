import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Apurv Kulkarni',
    treatment: 'FUE Hair Transplant',
    rating: 5,
    date: '1 week ago',
    text: 'DermaVita Clinic has completely changed my confidence. Dr. Vijay Raut performed my FUE hair transplant. The density is outstanding, and the hairline looks incredibly natural. Best transplant clinic in Kolhapur!',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 2,
    name: 'Priyanka Patil',
    treatment: 'Pigmentation Treatment',
    rating: 5,
    date: '3 weeks ago',
    text: 'I had stubborn melasma that did not fade with other treatments. Dr. Vijay Raut recommended a combination of Q-Switched laser and clinical depigmenting peels. In 5 sessions, my skin is clear, bright, and even!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 3,
    name: 'Rohan Deshmukh',
    treatment: 'Acne & Scar Treatment',
    rating: 5,
    date: '1 month ago',
    text: 'Excellent diagnostic expertise! Dr. Vijay Raut explained my acne scar treatment plan clearly. After 4 sessions of microneedling RF and subcision, my deep pits are mostly smooth. Highly professional setup!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80'
  },
  {
    id: 4,
    name: 'Sneha Joshi',
    treatment: 'Laser Hair Removal',
    rating: 5,
    date: '2 months ago',
    text: 'Best laser hair removal experience. The triple-wavelength cooling diode laser is virtually painless. The clinic space in Laxmipuri is pristine, hygienic, and extremely luxurious. Fully recommended!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 8000); // Auto rotate every 8 seconds
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-brand-cream/40 to-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold-dark font-semibold mb-3 block">
            Patient Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-5">
            Loved By Our Patients
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mb-6"></div>
          
          {/* Google Verified Review Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-sm border border-brand-gold/10 text-xs text-brand-dark-light">
            <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V13.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.859-3.578-7.859-8s3.53-8 7.859-8c2.46 0 4.105 1.025 5.047 1.926l2.427-2.334C17.955 2.192 15.34 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.478 0 10.793-4.537 10.793-10.986 0-.746-.08-1.32-.176-1.785H12.24z"/>
            </svg>
            <span className="font-sans font-semibold">Google Verified</span>
            <span className="text-brand-gold font-bold">5.0 ★★★★★ (57+ Reviews)</span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto flex items-center">
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-[-20px] md:left-[-60px] z-20 w-12 h-12 rounded-full glass-panel border border-brand-gold/20 flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all duration-300 hover:scale-105"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Testimonial Active Slide */}
          <div className="w-full min-h-[350px] md:min-h-[280px] flex items-center justify-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full glass-panel p-8 md:p-12 rounded-[2.5rem] border border-brand-gold/15 shadow-xl relative flex flex-col justify-between"
              >
                {/* Quote Icon watermark */}
                <Quote className="absolute right-8 top-8 w-20 h-20 text-brand-gold/5 pointer-events-none" />

                {/* Rating & Text */}
                <div className="text-left">
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-brand-gold mb-6">
                    {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-brand-gold" />
                    ))}
                  </div>

                  {/* Testimonial Message */}
                  <p className="font-sans text-brand-dark text-base md:text-lg leading-relaxed mb-8 font-light italic">
                    "{reviews[activeIndex].text}"
                  </p>

                </div>

                {/* Patient Profile info */}
                <div className="flex items-center gap-4 border-t border-brand-gold/15 pt-6 text-left">
                  <img
                    src={reviews[activeIndex].avatar}
                    alt={reviews[activeIndex].name}
                    className="w-12 h-12 rounded-full object-cover border border-brand-gold/20"
                  />
                  <div>
                    <h4 className="font-serif text-lg font-bold text-brand-dark">
                      {reviews[activeIndex].name}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-brand-dark-light/80">
                      <span className="font-semibold text-brand-gold-dark">{reviews[activeIndex].treatment}</span>
                      <span className="text-brand-dark-light/40">•</span>
                      <span>{reviews[activeIndex].date}</span>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-[-20px] md:right-[-60px] z-20 w-12 h-12 rounded-full glass-panel border border-brand-gold/20 flex items-center justify-center text-brand-dark hover:bg-brand-gold hover:text-white transition-all duration-300 hover:scale-105"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex gap-2 justify-center mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-6 bg-brand-gold' : 'w-2 bg-brand-gold/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
