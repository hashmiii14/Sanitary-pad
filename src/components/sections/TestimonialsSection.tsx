import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { setCurrentView } = useCart();
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      name: 'Pooja Kapoor',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      comment:
        'I am a frequent traveller, who encounters the problem of unhygienic toilets everywhere right from Railways to Airports and from Offices to Multiplexes. Makeasy PeeDevice & Sanitary Pads are a great solution to this problem highly recommended for working women.',
    },
    {
      name: 'Ananya Sharma',
      role: 'Marketing Lead & Fitness Specialist',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
      comment:
        'Switching to 100% cotton pads completely eliminated period rashes for me. The 330mm overnight wings keep my bed linens spotless even on peak flow nights.',
    },
    {
      name: 'Ritu Verma',
      role: 'Healthcare Consultant',
      image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
      comment:
        'As a medical professional, I appreciate the zero-toxin, unbleached cotton formulation. It gives women total peace of mind and genuine everyday comfort.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Testimonials Slider Section */}
      <section className="py-20 bg-white border-b border-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight">
            Our <span className="font-semibold text-brand-purple">Testimonials</span>
          </h2>

          {/* Testimonial Card (matching Reference Image 1) */}
          <div className="bg-[#F8F3FC] rounded-3xl p-8 sm:p-12 shadow-lg border border-purple-100 relative space-y-6">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-brand-crimson shrink-0 shadow-md">
                <img
                  src={testimonials[activeIdx].image}
                  alt={testimonials[activeIdx].name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-2">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic font-light">
                  "{testimonials[activeIdx].comment}"
                </p>
                <div>
                  <h4 className="text-base font-bold text-brand-purple">
                    {testimonials[activeIdx].name}
                  </h4>
                  <span className="text-xs text-brand-crimson font-medium">
                    {testimonials[activeIdx].role}
                  </span>
                </div>
              </div>
            </div>

            {/* Slider Dots */}
            <div className="flex items-center justify-center gap-2 pt-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIdx ? 'w-8 bg-brand-crimson' : 'w-2.5 bg-purple-200'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner (matching Reference Image 1) */}
      <section className="bg-gradient-to-r from-[#4A126D] via-[#7B1FA2] to-[#E91E63] text-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-light text-white leading-snug">
              Your health comes first to us, get in touch with us now and <br className="hidden lg:inline" />
              <span className="font-semibold text-pink-100">join the revolution.</span>
            </h3>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setCurrentView('contact')}
              className="bg-white/10 hover:bg-white text-white hover:text-brand-purple border-2 border-white rounded-full px-8 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 shadow-md transform hover:scale-105"
            >
              Contact us
            </button>

            {/* Butterfly Accent Graphic */}
            <div className="w-8 h-8 text-pink-200 animate-float hidden sm:block">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6 2 2 8 2 14c0 4 3 8 7 10-4 2-7 6-7 10 0 6 4 12 10 12s10-6 10-12c0-4-3-8-7-10 4-2 7-6 7-10 0-6-4-12-10-12z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
