import React from 'react';
import { useCart } from '../../context/CartContext';
import { ChevronLeft, ChevronRight, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const { setCurrentView } = useCart();

  return (
    <section className="relative bg-gradient-to-r from-[#3A0CA3] via-[#7B1FA2] to-[#E91E63] text-white pt-28 pb-36 lg:pt-36 lg:pb-48 clip-diagonal overflow-hidden shadow-2xl">
      {/* Decorative Sparkles Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/15 via-transparent to-transparent pointer-events-none" />

      {/* Fixed Vertical Social Bar Right Margin (matching Reference Image 1) */}
      <div className="hidden xl:flex flex-col items-center gap-4 absolute right-8 top-1/3 z-20">
        <div className="w-px h-16 bg-white/40" />
        <a href="#facebook" className="text-white/80 hover:text-white transition-transform hover:scale-125">
          <Facebook className="w-4 h-4" />
        </a>
        <a href="#instagram" className="text-white/80 hover:text-white transition-transform hover:scale-125">
          <Instagram className="w-4 h-4" />
        </a>
        <a href="#linkedin" className="text-white/80 hover:text-white transition-transform hover:scale-125">
          <Linkedin className="w-4 h-4" />
        </a>
        <a href="#twitter" className="text-white/80 hover:text-white transition-transform hover:scale-125">
          <Twitter className="w-4 h-4" />
        </a>
        <div className="w-px h-16 bg-white/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-light tracking-wide leading-tight text-white">
              The One That Suits <br />
              <span className="font-semibold font-serif italic text-pink-100">Your Needs</span>
            </h1>

            <p className="text-base sm:text-lg text-purple-100/90 font-light tracking-wide max-w-md mx-auto lg:mx-0">
              Dedicated to your health and hygiene.
            </p>

            <div className="pt-4">
              <button
                onClick={() => setCurrentView('products')}
                className="bg-transparent hover:bg-white hover:text-brand-purple text-white border-2 border-white rounded-full px-8 py-2.5 text-sm font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center gap-2"
              >
                Read More
              </button>
            </div>
          </div>

          {/* Right Column: Reference Hero Product Image (matching Reference Image 1) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xl flex items-center justify-center">
              <img
                src="/images/hero-product.png"
                alt="Makeasy Classic Care Sanitary Napkin Box & Napkin Render"
                className="w-full h-auto max-h-[380px] object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar: Angled Hashtag Overlay (Left) + Slider Pagination (Right) */}
        <div className="mt-12 lg:mt-16 flex items-center justify-between border-t border-white/10 pt-6">
          <div className="font-bold text-lg sm:text-xl tracking-wide text-white/90 transform -rotate-1 font-script">
            #Don'tStopYourself
          </div>

          <div className="flex items-center gap-3 text-sm font-semibold text-white/90">
            <span className="font-bold text-base text-pink-200">02</span>
            <span className="text-xs text-white/60">/ 05</span>
            <div className="flex items-center gap-1 ml-2">
              <button className="p-1.5 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1.5 rounded-full bg-white/10 hover:bg-white/30 text-white transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
