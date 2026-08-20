import React from 'react';
import { Leaf, ShieldCheck, HeartPulse, RefreshCw } from 'lucide-react';

export const EditorialBenefits: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-b border-blush-deep/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Asymmetrical Benefits Copy Left */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-rose-dark">
              PURE INGREDIENTS • ZERO COMPROMISE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum leading-tight">
              Why women choose Luna over synthetic brands.
            </h2>

            <p className="text-sm md:text-base text-charcoal-muted leading-relaxed">
              Traditional pads hide plastic meshes and artificial scents. Luna is built around soft Texas organic cotton, breathable backsheets, and zero toxic bleaches.
            </p>
          </div>

          {/* Asymmetrical Grid Right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-[#FBF5F4] p-6 rounded-3xl border border-[#E8D7D5] space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-xs">
                <Leaf className="w-5 h-5 text-sage-dark" />
              </div>
              <h3 className="font-serif text-xl font-bold text-plum">100% GOTS Organic Cotton</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Sourced strictly from certified Texas farms. Hypoallergenic, unbleached top layer that feels like pure soft silk.
              </p>
            </div>

            <div className="bg-[#FBF5F4] p-6 rounded-3xl border border-[#E8D7D5] space-y-3 sm:mt-6">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-5 h-5 text-rose" />
              </div>
              <h3 className="font-serif text-xl font-bold text-plum">Zero Toxins & Chlorine</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Formulated without synthetic fragrances, parabens, pesticides, or elemental chlorine. Prevents skin irritation and rashes.
              </p>
            </div>

            <div className="bg-[#FBF5F4] p-6 rounded-3xl border border-[#E8D7D5] space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-xs">
                <HeartPulse className="w-5 h-5 text-plum" />
              </div>
              <h3 className="font-serif text-xl font-bold text-plum">LeakLock™ Micro-Tubes</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Advanced 3D side barriers instantly convert fluid into gel, trapping wetness inside while keeping the surface dry.
              </p>
            </div>

            <div className="bg-[#FBF5F4] p-6 rounded-3xl border border-[#E8D7D5] space-y-3 sm:mt-6">
              <div className="w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-xs">
                <RefreshCw className="w-5 h-5 text-rose-dark" />
              </div>
              <h3 className="font-serif text-xl font-bold text-plum">Plastic-Free Touch</h3>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Conventional pads use plastic touch points. Luna replaces synthetics with biodegradable wood pulp and paper wrappers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
