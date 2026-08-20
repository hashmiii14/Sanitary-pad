import React from 'react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const PinkCTASection: React.FC = () => {
  const { setCurrentView } = useCart();

  return (
    <section className="py-20 md:py-28 bg-[#F6EBE9] border-t border-[#E8D7D5] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#E8D7D5] text-xs font-bold text-plum tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-rose" />
          <span>YOUR CYCLE, YOUR RHYTHM</span>
        </div>

        <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-plum leading-tight">
          Find your everyday comfort.
        </h2>

        <p className="text-base sm:text-lg text-charcoal-muted max-w-lg mx-auto leading-relaxed">
          Discover 100% GOTS-certified organic Texas cotton period care designed to keep you feeling fresh, confident, and supported.
        </p>

        <div className="pt-4 flex justify-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setCurrentView('products')}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="shadow-md"
          >
            Explore Collection
          </Button>
        </div>
      </div>
    </section>
  );
};
