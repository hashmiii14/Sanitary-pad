import React from 'react';
import { useCart } from '../../context/CartContext';

export const UTIQuoteSection: React.FC = () => {
  const { setCurrentView } = useCart();

  return (
    <section className="py-20 bg-white overflow-hidden relative border-b border-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Quote Text + Flying Butterfly Accent (matching Reference Image 4) */}
          <div className="lg:col-span-4 space-y-6 text-center lg:text-left relative">
            <div className="relative z-10 space-y-2">
              <span className="text-4xl text-purple-300 font-serif leading-none block">“</span>
              <h3 className="font-serif text-2xl sm:text-3xl text-gray-800 font-light leading-snug">
                For women, the lifetime risk of having a <span className="font-semibold text-brand-purple">UTI is greater than 50 percent</span>
              </h3>
              <span className="text-4xl text-purple-300 font-serif leading-none block text-right">”</span>
            </div>

            {/* Flying Butterfly Graphic with Dotted Path Line */}
            <div className="relative h-16 w-full hidden sm:block">
              <svg className="w-full h-full text-pink-500" viewBox="0 0 200 60" fill="none">
                <path
                  d="M 10 50 Q 80 10 180 30"
                  stroke="#E91E63"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                {/* Butterfly SVG */}
                <g transform="translate(165, 15) scale(0.7)" fill="#E91E63" className="animate-float">
                  <path d="M12 2C6 2 2 8 2 14c0 4 3 8 7 10-4 2-7 6-7 10 0 6 4 12 10 12s10-6 10-12c0-4-3-8-7-10 4-2 7-6 7-10 0-6-4-12-10-12z" opacity="0.8" />
                  <circle cx="12" cy="14" r="2" fill="#FFFFFF" />
                </g>
              </svg>
            </div>
          </div>

          {/* Center Column: Woman Outdoor Lifestyle Photo */}
          <div className="lg:col-span-4 relative flex justify-center">
            <div className="aspect-[3/4] w-full max-w-xs rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
                alt="Joyful woman feeling free outdoors"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Purple-to-Magenta Gradient Card (matching Reference Image 4) */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-br from-[#4A126D] via-[#7B1FA2] to-[#E91E63] text-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 transform hover:scale-102 transition-transform duration-300">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold tracking-tight">Pee Device</h3>
                <div className="w-12 h-1 bg-pink-300 rounded-full" />
                <p className="text-sm font-semibold text-pink-100 uppercase tracking-wider pt-2">
                  For Women Who Don't want to stop.
                </p>
              </div>

              <p className="text-xs sm:text-sm text-purple-100 leading-relaxed font-light">
                An innovative urinating device, which allow to stand and Pee. Thus, prevents the possibility of UTI. It is easy to use, carry and dispose off.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setCurrentView('products')}
                  className="bg-white/10 hover:bg-white text-white hover:text-brand-purple border-2 border-white rounded-full px-8 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
