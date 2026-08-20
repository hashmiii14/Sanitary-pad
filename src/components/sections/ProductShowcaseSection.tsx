import React from 'react';
import { useCart } from '../../context/CartContext';
import { ChevronRight } from 'lucide-react';

export const ProductShowcaseSection: React.FC = () => {
  const { setCurrentView } = useCart();

  return (
    <section className="py-20 bg-[#F6F0FA] relative overflow-hidden">
      {/* Decorative Lotus Flower Art on Bottom Right (matching Reference Image 3) */}
      <div className="absolute right-[-40px] bottom-[-40px] pointer-events-none opacity-80 w-80 h-80 z-0">
        <svg viewBox="0 0 200 200" className="w-full h-full text-pink-300">
          <path
            fill="currentColor"
            d="M100 20 C110 50 140 70 170 70 C140 100 130 130 100 170 C70 130 60 100 30 70 C60 70 90 50 100 20 Z"
            opacity="0.3"
          />
          <path
            fill="currentColor"
            d="M100 40 C108 65 130 80 150 80 C130 105 120 125 100 150 C80 125 70 105 50 80 C70 80 92 65 100 40 Z"
            opacity="0.5"
          />
          <circle cx="100" cy="100" r="15" fill="#E91E63" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight">
            Check out <span className="font-semibold text-brand-purple">our products</span>
          </h2>
        </div>

        {/* 2-Column Wide Product Cards (matching Reference Image 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: PeeDevice */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100 flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-300 group">
            <div className="space-y-6">
              {/* Product Visual Mockup */}
              <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-pink-500 via-purple-600 to-purple-900 p-6 flex items-center justify-center relative overflow-hidden shadow-md">
                <div className="text-center text-white space-y-2">
                  <span className="font-script text-3xl block">Ha Pee</span>
                  <span className="text-[10px] tracking-widest uppercase font-bold bg-white/20 px-3 py-1 rounded-full inline-block">
                    Stand & Pee Urination Device
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-brand-magenta transition-colors">
                  PeeDevice
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  A product, for camping, travelling, festivals, long car journeys, and any kind of outdoor pursuit where the toilet facilities are absent or less than desirable.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setCurrentView('products')}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-crimson hover:text-brand-purple transition-colors uppercase tracking-wider"
              >
                <span>Read More</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Sanitary Napkin */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-purple-100 flex flex-col justify-between transform hover:-translate-y-2 transition-all duration-300 group">
            <div className="space-y-6">
              {/* Product Visual Mockup */}
              <div className="aspect-[16/9] rounded-2xl bg-gradient-to-br from-purple-700 via-pink-600 to-rose-500 p-6 flex items-center justify-center relative overflow-hidden shadow-md">
                <div className="text-center text-white space-y-2">
                  <span className="font-script text-3xl block">Makeasy</span>
                  <span className="text-[10px] tracking-widest uppercase font-bold bg-emerald-500 text-white px-3 py-1 rounded-full inline-block">
                    100% Cotton XL+ 7 Pads
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-brand-magenta transition-colors">
                  Sanitary Napkin
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
                  Need an assurance that your sanitary pads provide you reliable absorbency with no leakages? Makeasy has the one that suits your needs.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={() => setCurrentView('products')}
                className="inline-flex items-center gap-1 text-xs font-bold text-brand-crimson hover:text-brand-purple transition-colors uppercase tracking-wider"
              >
                <span>Read More</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
