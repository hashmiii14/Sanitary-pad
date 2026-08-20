import React from 'react';
import { ShieldCheck, Trash2, Package, ThumbsUp } from 'lucide-react';

export const BrandPillarsSection: React.FC = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: 'Better Pads',
    },
    {
      icon: <Trash2 className="w-8 h-8 text-white" />,
      title: 'Hassle Free Disposal',
    },
    {
      icon: <Package className="w-8 h-8 text-white" />,
      title: 'Customised Packs',
    },
    {
      icon: <ThumbsUp className="w-8 h-8 text-white" />,
      title: 'Customer approved',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#4A126D] via-[#7B1FA2] to-[#E91E63] text-white py-16 lg:py-20 relative overflow-hidden shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & 4 Circular Icon Badges (matching Reference Image 5) */}
          <div className="lg:col-span-8 space-y-10 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-wide leading-tight max-w-2xl mx-auto lg:mx-0">
              An Innovative Personal Care Brand, <br />
              <span className="font-semibold text-pink-100">Who cares about your Health</span>
            </h2>

            {/* 4 Circular Outlined Icon Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex flex-col items-center space-y-3 group">
                  <div className="w-20 h-20 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-md group-hover:bg-white group-hover:text-brand-purple transition-all duration-300 transform group-hover:scale-110 shadow-lg">
                    {pillar.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-white text-center">
                    {pillar.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Woman Sitting Cross-Legged Image (matching Reference Image 5) */}
          <div className="lg:col-span-4 relative flex justify-center">
            {/* Background Soft Pink Glow Accent Circle */}
            <div className="absolute w-72 h-72 rounded-full bg-white/20 blur-xl pointer-events-none" />

            <div className="relative z-10 w-64 sm:w-80 aspect-square rounded-full overflow-hidden border-4 border-white/40 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
                alt="Smiling confident woman sitting comfortably"
                className="w-full h-full object-cover object-top transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
