import React from 'react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { ArrowRight, Leaf, ShieldCheck, Heart } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setCurrentView } = useCart();

  return (
    <section className="relative bg-[#F6EBE9] pt-12 pb-20 md:py-28 overflow-hidden border-b border-[#E8D7D5]">
      {/* Editorial Decorative Soft Line Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Text Column Left */}
          <div className="lg:col-span-6 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#E8D7D5] text-xs font-semibold text-plum tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-rose inline-block" />
              <span>Thoughtfully Crafted Period Care</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-plum tracking-tight leading-[1.1]">
              Comfort for every <br className="hidden sm:inline" />
              <span className="italic font-normal text-rose-dark">kind of day.</span>
            </h1>

            <p className="text-base sm:text-lg text-charcoal-muted max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-normal">
              Period care that feels right. Made from 100% GOTS-certified organic Texas cotton—soft, simple, and reassuring protection designed for real bodies.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setCurrentView('products')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-sm"
              >
                Explore Collection
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentView('about')}
                className="w-full sm:w-auto bg-white/50 border-[#D98A7D]"
              >
                Our Story
              </Button>
            </div>

            {/* Subtle Brand Pillars Bar */}
            <div className="pt-8 border-t border-[#E5D2D0] grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0 text-left">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-plum">
                  <Leaf className="w-3.5 h-3.5 text-sage-dark shrink-0" />
                  <span>100% Organic</span>
                </div>
                <p className="text-[11px] text-charcoal-muted">Texas Organic Cotton</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-plum">
                  <ShieldCheck className="w-3.5 h-3.5 text-rose shrink-0" />
                  <span>Zero Toxins</span>
                </div>
                <p className="text-[11px] text-charcoal-muted">0% Fragrance & Dyes</p>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-plum">
                  <Heart className="w-3.5 h-3.5 text-rose-dark shrink-0" />
                  <span>Gentle Touch</span>
                </div>
                <p className="text-[11px] text-charcoal-muted">Dermatologist Approved</p>
              </div>
            </div>
          </div>

          {/* Editorial Visual Column Right */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Large Soft-Framed Photography */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-editorial border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80"
                  alt="Luna Soft Organic Pad Packaging"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Editorial Caption Tag */}
              <div className="absolute -bottom-5 right-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-soft border border-[#E8D7D5] max-w-xs text-xs text-charcoal">
                <p className="font-serif italic text-sm font-bold text-plum">"Something softer for everyday days."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
