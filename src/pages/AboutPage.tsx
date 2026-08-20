import React from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { Leaf, Heart, Shield, Sparkles, RefreshCw, Award, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentView } = useCart();

  const stats = [
    { value: '100%', label: 'GOTS Texas Organic Cotton' },
    { value: '10M+', label: 'Synthetic Plastic Pads Replaced' },
    { value: '0%', label: 'Chlorine, Fragrance & Toxins' },
    { value: '50,000+', label: 'Happy Women Worldwide' }
  ];

  return (
    <div className="bg-cream py-12 md:py-20 animate-fade-in space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Mission Story Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-rose uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              OUR STORY & PHILOSOPHY
            </span>

            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum leading-tight">
              Period Care Designed for Real Days, Real Bodies.
            </h1>

            <p className="text-base text-charcoal-muted leading-relaxed">
              LUNA was born out of a simple, uncomfortable truth: traditional period products were quiet about what went inside them. Hidden synthetic plastic meshes, harsh chemical bleaches, and artificial fragrances were accepted as standard.
            </p>

            <p className="text-base text-charcoal-muted leading-relaxed">
              We set out to build a new standard. Period care crafted from 100% GOTS-certified organic cotton—soft where it matters, obsessively leakproof, and transparent down to every fiber.
            </p>

            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setCurrentView('shop')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Shop Organic Collection
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-editorial border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80"
                alt="Luna Brand Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <section className="bg-plum text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="space-y-2">
                <div className="font-serif text-4xl sm:text-5xl font-bold text-rose-light">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-cream/80 font-medium max-w-[180px] mx-auto">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-rose uppercase">
            OUR PROMISE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum">
            Pillars of the Luna Standard
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-blush-deep shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-sage-light text-sage-dark flex items-center justify-center">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-plum">Organic Purity</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              We source only GOTS-certified organic cotton grown without synthetic pesticides or herbicides. Pure, breathable softness against intimate skin.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-blush-deep shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-light text-rose-dark flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-plum">Zero Toxins</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              0% fragrance, 0% chlorine bleach, 0% dyes. Dermatologist tested to protect skin health and maintain delicate pH balance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-blush-deep shadow-soft space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blush-deep text-plum flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-plum">Period Equity</h3>
            <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
              For every box purchased, Luna donates a month supply of organic period products to schools and women's shelters nationwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
