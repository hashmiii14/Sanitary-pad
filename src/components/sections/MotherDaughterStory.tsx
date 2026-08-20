import React from 'react';
import { useCart } from '../../context/CartContext';
import { Button } from '../ui/Button';
import { ArrowRight, Heart } from 'lucide-react';

export const MotherDaughterStory: React.FC = () => {
  const { setCurrentView } = useCart();

  return (
    <section className="py-16 md:py-24 bg-[#F9F1F0] border-y border-[#E8D7D5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Image Left */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-editorial border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80"
                alt="Mother and daughter sharing a comforting moment"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Emotional Story Copy Right */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-dark uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 fill-rose text-rose" />
              <span>CARE STARTS WITH UNDERSTANDING</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-plum leading-tight">
              Made for her first period, <br className="hidden sm:inline" />
              <span className="italic font-normal text-rose-dark">and every day after.</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans font-normal">
              Whether it’s her very first cycle or a routine day, period care should be something you can pass along with total confidence. We created Luna so every conversation around period health feels warm, open, and completely natural.
            </p>

            <p className="text-sm text-charcoal-muted leading-relaxed">
              No clinical jargon, no awkward stigma—just 100% organic cotton softness that lets girls and women move through their days feeling supported.
            </p>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                onClick={() => setCurrentView('about')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="bg-white/80 border-[#D98A7D]"
              >
                Read Our Story & Values
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
