import React from 'react';
import { useCart } from '../../context/CartContext';

export const HealthierCommunitySection: React.FC = () => {
  const { setCurrentView } = useCart();

  return (
    <section className="py-20 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Mother & Daughter framed photo with 3D feet pop-out effect (matching Reference Image 2) */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg">
              <img
                src="/images/mother-daughter.png"
                alt="Mother and daughter sitting together in window frame"
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-103 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: Copy & Solid Purple Pill Button */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight">
              We aspire a <span className="font-semibold text-brand-purple">healthier community</span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              Makeasy is a women hygiene and healthcare brand. Makeasy was established with the desire to revolutionize the way women view toilets. We stand for every woman’s right to stand and pee. We work with a team of dedicated individuals who work day in and day out to ease your struggle for hygiene. We strive to come up with innovative products and upgrade the standard and quality of existing products.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setCurrentView('about')}
                className="bg-[#6B1186] hover:bg-[#54096B] text-white rounded-full px-8 py-2.5 text-sm font-semibold transition-all duration-300 shadow-md transform hover:scale-105"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
