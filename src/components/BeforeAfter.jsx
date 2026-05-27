import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, UserCheck } from 'lucide-react';

const cases = [
  {
    id: 1,
    title: 'FUE Hair Transplant',
    category: 'Hair',
    before: import.meta.env.BASE_URL + 'before.jpg',
    after: import.meta.env.BASE_URL + 'after.jpg',
    sessions: '1 Session',
    timeframe: '6 Months',
    desc: 'Advanced FUE micro-grafts successfully filled the receded hairline and temples, achieving natural density and a youthful framing.'
  },
  {
    id: 2,
    title: 'Laser Pigmentation Toning',
    category: 'Laser',
    before: import.meta.env.BASE_URL + 'before.jpg',
    after: import.meta.env.BASE_URL + 'after.jpg',
    sessions: '5 Sessions',
    timeframe: '3 Months',
    desc: 'FDA-approved Q-Switched laser toning combined with medical peels deep-cleared stubborn melasma, restoring a clear and even complexion.'
  },
  {
    id: 3,
    title: 'Acne Scar MNRF',
    category: 'Skin',
    before: import.meta.env.BASE_URL + 'before.jpg',
    after: import.meta.env.BASE_URL + 'after.jpg',
    sessions: '4 Sessions',
    timeframe: '4 Months',
    desc: 'Deep Microneedling Fractional RF (MNRF) stimulated massive dermal collagen remodeling, smoothing severe textural acne scar pitting.'
  }
];

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCase, setActiveCase] = useState(cases[0]);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <section id="transformations" className="py-24 bg-gradient-to-b from-white to-brand-cream/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.25em] text-brand-gold-dark font-semibold mb-3 block">
            Proven Clinical Outcomes
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-5">
            Results You Can Truly Feel
          </h2>
          <div className="w-16 h-[1px] bg-brand-gold mx-auto mb-6"></div>
          <p className="font-sans text-brand-dark-light text-sm md:text-base font-light leading-relaxed">
            Every skin and hair texture is unique. Explore raw, unretouched transformations achieved through our customized medical protocols.
          </p>
        </div>

        {/* Interactive Comparison and Gallery Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Dynamic Slider View */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Visual Title indicator */}
            <div className="flex justify-between w-full max-w-[500px] mb-4 text-xs font-sans tracking-widest uppercase font-semibold text-brand-dark">
              <span>Before Care</span>
              <span className="text-brand-gold-dark">Active Transformation</span>
              <span>After 12 Weeks</span>
            </div>

            {/* Main Slider Shell */}
            <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white shadow-xl select-none">
              
              {/* Background Image (BEFORE - left side) */}
              <img
                src={activeCase.before}
                alt="Before treatment texture"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Foreground Image Wrap (AFTER - right side) */}
              <div
                className="absolute inset-y-0 right-0 overflow-hidden pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.after}
                  alt="After treatment texture"
                  className="absolute inset-y-0 right-0 w-full h-full object-cover max-w-none pointer-events-none"
                  style={{ width: '500px', right: 0 }}
                />
              </div>

              {/* Gold Divider Line */}
              <div
                className="absolute inset-y-0 w-1 bg-brand-gold pointer-events-none flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Gold sliding handle */}
                <div className="w-10 h-10 rounded-full bg-brand-gold text-white flex items-center justify-center shadow-lg border-2 border-white pointer-events-none transform -translate-x-1/2">
                  <div className="flex gap-0.5 text-[10px] font-bold">
                    <span>‹</span><span>›</span>
                  </div>
                </div>
              </div>

              {/* Range Input Overlay for Drag / Swipe Support */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                aria-label="Before and after transformation slider"
              />

            </div>

            <p className="text-[11px] font-sans text-brand-dark-light/60 mt-4 italic">
              *Interactive: Drag the slider left and right to compare
            </p>

          </div>

          {/* Right: Transformations Gallery Info Panel */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Case selector tabs */}
            <div className="flex gap-3 mb-8 w-full border-b border-brand-gold/15 pb-4">
              {cases.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveCase(c);
                    setSliderPosition(50); // Reset slider position
                  }}
                  className={`font-sans text-xs tracking-wider uppercase font-semibold pb-2 transition-all duration-300 relative ${
                    activeCase.id === c.id
                      ? 'text-brand-gold-dark'
                      : 'text-brand-dark-light/60 hover:text-brand-dark'
                  }`}
                >
                  {c.title}
                  {activeCase.id === c.id && (
                    <motion.div
                      layoutId="activeTabUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-gold"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Active Case Details Card */}
            <motion.div
              key={activeCase.id}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm w-full"
            >
              
              <div className="flex items-center gap-2 text-brand-gold-dark font-sans text-xs uppercase tracking-widest font-bold mb-4">
                <Sparkles className="w-4 h-4 animate-pulse-subtle" />
                <span>Clinical Success Case</span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-brand-dark mb-4">
                {activeCase.title}
              </h3>

              <p className="font-sans text-brand-dark-light font-light text-sm md:text-base leading-relaxed mb-6">
                {activeCase.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 border-t border-brand-gold/10 pt-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/10 text-brand-gold-dark flex items-center justify-center shrink-0">
                    <Calendar className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-sans text-brand-dark-light/60 uppercase tracking-wider">Duration</h5>
                    <p className="text-xs font-sans font-bold text-brand-dark">{activeCase.timeframe}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-gold/10 text-brand-gold-dark flex items-center justify-center shrink-0">
                    <UserCheck className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-sans text-brand-dark-light/60 uppercase tracking-wider">Protocol</h5>
                    <p className="text-xs font-sans font-bold text-brand-dark">{activeCase.sessions}</p>
                  </div>
                </div>
              </div>

              <a
                href="#booking"
                className="mt-8 inline-flex justify-center items-center font-sans text-xs tracking-widest uppercase font-semibold text-white bg-brand-dark hover:bg-brand-gold hover:shadow-brand-gold/10 px-6 py-4 rounded-xl shadow-md transition-all duration-300 w-full text-center"
              >
                Achieve Similar Results
              </a>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
