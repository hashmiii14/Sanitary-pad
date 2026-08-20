import React from 'react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { ArrowRight, Leaf, Shield, Sparkles, Droplets } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setCurrentView } = useCart();

  return (
    <section className="relative bg-cream pt-10 pb-16 md:py-20 overflow-hidden border-b border-blush-deep/50">
      {/* Background Soft Blobs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blush-deep/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-rose-light/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Left Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blush-soft border border-rose-light text-xs font-bold text-plum tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-rose" />
              <span>PERIOD CARE, REIMAGINED</span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-plum tracking-tight leading-[1.1]">
              Comfort that <br className="hidden sm:inline" />
              <span className="italic font-normal text-rose">moves with you.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-charcoal-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Thoughtfully designed period care for confident, comfortable days. 100% GOTS-certified organic cotton with 360° leak protection—zero harsh chemicals, zero plastic feel.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setCurrentView('products')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-md"
              >
                Explore Our Collection
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentView('about')}
                className="w-full sm:w-auto"
              >
                Explore Our Story
              </Button>
            </div>

            {/* Feature Highlights Trust Badges */}
            <div className="pt-8 grid grid-cols-3 gap-4 border-t border-blush-deep/60 max-w-md mx-auto lg:mx-0">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-plum">
                  <Leaf className="w-4 h-4 text-sage-dark shrink-0" />
                  <span>100% Organic</span>
                </div>
                <p className="text-[11px] text-charcoal-muted">GOTS Texas Cotton</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-plum">
                  <Shield className="w-4 h-4 text-rose shrink-0" />
                  <span>Hypoallergenic</span>
                </div>
                <p className="text-[11px] text-charcoal-muted">0% Fragrance & Dyes</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-plum">
                  <Droplets className="w-4 h-4 text-plum shrink-0" />
                  <span>12-Hour Protection</span>
                </div>
                <p className="text-[11px] text-charcoal-muted">LeakLock™ Tech</p>
              </div>
            </div>
          </div>

          {/* Visual Right Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Visual Image */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-editorial border-4 border-white bg-blush-soft">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80"
                  alt="Luna Organic Sanitary Pads Presentation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/30 via-transparent to-transparent" />
              </div>

              {/* Floating Badge 1 (Top Right) */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-soft border border-blush-deep hidden sm:flex items-center gap-3 animate-slide-down">
                <div className="w-10 h-10 rounded-full bg-rose-light text-rose flex items-center justify-center font-serif text-lg font-bold">
                  ★ 4.9
                </div>
                <div>
                  <p className="text-xs font-bold text-plum">Loved by 50,000+ Women</p>
                  <p className="text-[10px] text-charcoal-muted">Dermatologist Tested</p>
                </div>
              </div>

              {/* Floating Badge 2 (Bottom Left) */}
              <div className="absolute -bottom-6 -left-4 bg-plum text-cream p-4 rounded-2xl shadow-editorial border border-plum-light hidden sm:flex items-center gap-3 animate-slide-up">
                <div className="w-10 h-10 rounded-full bg-rose/30 text-rose-light flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-cream">Zero Plastic Touch</p>
                  <p className="text-[10px] text-cream/70">100% Biodegradable Core</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
