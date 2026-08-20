import React, { useState } from 'react';
import { Layers, CheckCircle2, Shield, Sparkles } from 'lucide-react';

export const TechBreakdown: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState(0);

  const layers = [
    {
      name: 'Layer 1: GOTS Organic Cotton Sheet',
      subtitle: '100% Breathable Top Sheet',
      desc: 'Soft Texas organic cotton wicks moisture away instantly without synthetic plastic chafing.',
      tag: 'Soft Touch',
      color: 'bg-rose-light text-rose-dark'
    },
    {
      name: 'Layer 2: Rapid-Flow Wicking Layer',
      subtitle: 'Micro-Fluid Channels',
      desc: 'Distributes liquid evenly across the core to prevent localized overflow and side leakage.',
      tag: 'Anti-Bunching',
      color: 'bg-blush-deep text-plum'
    },
    {
      name: 'Layer 3: Plant-Derived SAP Absorption Core',
      subtitle: 'Bio-Polymer Absorbent Core',
      desc: 'Locks fluid into gel within 3 seconds, holding up to 80ml of liquid without swelling into thick bulk.',
      tag: 'Locks 80ml',
      color: 'bg-plum text-cream'
    },
    {
      name: 'Layer 4: Micro-Porous Breathable Backing',
      subtitle: 'Leakproof Air Membrane',
      desc: 'Allows heat and vapor to pass through while keeping liquid 100% contained, ensuring all-day freshness.',
      tag: 'Zero Sweat',
      color: 'bg-sage-light text-sage-dark'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold tracking-widest text-rose uppercase flex items-center justify-center gap-2">
            <Layers className="w-4 h-4" />
            4-LAYER LEAKLOCK™ ANATOMY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum">
            The Science of Soft, Leak-Proof Protection
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            Click on any layer below to explore how our 4-layer bio-engineered pad structure keeps you 100% dry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 md:p-10 rounded-3xl border border-blush-deep shadow-editorial">
          {/* Interactive Buttons Left */}
          <div className="lg:col-span-5 space-y-3">
            {layers.map((layer, idx) => {
              const isActive = activeLayer === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveLayer(idx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between ${
                    isActive
                      ? 'border-rose bg-rose-light/50 shadow-soft scale-[1.02]'
                      : 'border-blush-deep hover:bg-blush-soft text-charcoal'
                  }`}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-rose-dark block">
                      {layer.subtitle}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-plum">
                      {layer.name}
                    </h4>
                  </div>

                  <span className={`text-xs px-2.5 py-1 rounded-full font-bold shrink-0 ${layer.color}`}>
                    {layer.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Layer Anatomy Visual Right */}
          <div className="lg:col-span-7 bg-blush-soft p-6 md:p-8 rounded-3xl border border-blush-deep space-y-6">
            <div className="relative aspect-[16/9] w-full bg-cream rounded-2xl overflow-hidden shadow-soft border border-blush-deep flex items-center justify-center p-6 text-center">
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
                alt="Luna 4-Layer Pad Anatomy"
                className="absolute inset-0 w-full h-full object-cover opacity-25"
              />

              <div className="relative z-10 space-y-3 max-w-md">
                <span className={`inline-block text-xs px-3 py-1 rounded-full font-bold ${layers[activeLayer].color}`}>
                  {layers[activeLayer].subtitle}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-plum">
                  {layers[activeLayer].name}
                </h3>
                <p className="text-sm text-charcoal-muted leading-relaxed">
                  {layers[activeLayer].desc}
                </p>
                <div className="pt-2 flex items-center justify-center gap-2 text-xs font-semibold text-rose-dark">
                  <CheckCircle2 className="w-4 h-4 text-sage-dark" />
                  <span>Dermatologist Approved & Certified Non-Toxic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
