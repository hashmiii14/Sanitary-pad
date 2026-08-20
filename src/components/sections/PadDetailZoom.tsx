import React from 'react';
import { Leaf, Shield, Sparkles, Feather } from 'lucide-react';

export const PadDetailZoom: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-blush-deep/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Zoom Visual Left */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-[#F6EBE9] p-6 sm:p-10 border border-[#E8D7D5] shadow-editorial group">
              <img
                src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80"
                alt="Close-up texture of Luna Organic Cotton Top Sheet"
                className="w-full h-full object-cover rounded-2xl shadow-soft transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-plum border border-[#E8D7D5]">
                🔍 100% GOTS Cotton Weave Detail
              </div>
            </div>
          </div>

          {/* Details & Copy Right */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-dark">
              DESIGNED TO BE FELT, NOT NOTICED
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum leading-tight">
              Soft where it matters most.
            </h2>

            <p className="text-sm md:text-base text-charcoal-muted leading-relaxed">
              Every curve of a Luna pad is shaped around your natural body contours. We removed plastic top-mesh barriers and replaced them with unbleached organic Texas cotton that feels as light as your favorite cotton underwear.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#FBF5F4] border border-[#E8D7D5] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-plum">
                  <Feather className="w-4 h-4 text-rose" />
                  <span>Ultra-Thin 2mm Core</span>
                </div>
                <p className="text-[11px] text-charcoal-muted">Flexible profile that hides under tight athletic wear.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FBF5F4] border border-[#E8D7D5] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-plum">
                  <Shield className="w-4 h-4 text-sage-dark" />
                  <span>360° LeakLock™ Wings</span>
                </div>
                <p className="text-[11px] text-charcoal-muted">Dual-flex wings hold securely in place all day.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
