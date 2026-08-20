import React from 'react';
import { Leaf, ShieldCheck, HeartPulse, RefreshCw, Feather, Sparkles } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const pillars = [
    {
      icon: <Leaf className="w-6 h-6 text-sage-dark" />,
      title: '100% GOTS Organic Cotton',
      desc: 'Sourced strictly from certified Texas farms. Hypoallergenic, unbleached top layer that feels like pure cloud silk against intimate skin.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-rose" />,
      title: 'Zero Toxins & Chlorine-Free',
      desc: 'Formulated without synthetic fragrances, parabens, pesticides, or elemental chlorine. Prevent rashes, itching, and hormone disruptors.'
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-plum" />,
      title: 'LeakLock™ Micro-Tubes',
      desc: 'Advanced 3D side barriers instantly convert fluid into gel, trapping wetness inside while leaving your outer surface completely dry.'
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-amber-500" />,
      title: '98% Plastic-Free & Eco-Conscious',
      desc: 'Plastics take 500 years to decompose. Makeasy replaces synthetic touch points with biodegradable plant fibers and recyclable wrappers.'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-[#C2185B]" />,
      title: 'Zero Chemical Rash',
      desc: 'Formulated without elemental chlorine bleach, synthetic dyes, or perfumes.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-blush-soft border-y border-blush-deep/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold tracking-widest text-rose uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              PURE INGREDIENTS • ZERO COMPROMISE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum leading-tight">
              Why 50,000+ Women Trust Makeasy Every Month
            </h2>

            <p className="text-sm md:text-base text-charcoal-muted leading-relaxed">
              Conventional pads hide synthetic plastic meshes, harsh perfumes, and chemical bleaches. We believe period care should be transparent, gentle, and obsessively performant.
            </p>

            <div className="p-4 rounded-2xl bg-white border border-blush-deep shadow-soft space-y-2">
              <p className="text-xs font-bold text-plum">
                🌿 Dermatologist Tested & Gynecologist Approved
              </p>
              <p className="text-xs text-charcoal-muted">
                Proven safe for sensitive skin types, post-partum recovery, and girls experiencing their first period.
              </p>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-blush-deep shadow-soft hover:shadow-editorial transition-all duration-300 space-y-3"
              >
                <div className="w-12 h-12 rounded-2xl bg-blush-soft flex items-center justify-center">
                  {p.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-plum">
                  {p.title}
                </h3>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
