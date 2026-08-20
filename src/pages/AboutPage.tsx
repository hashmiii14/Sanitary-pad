import React from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles, Heart, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const { setCurrentView } = useCart();

  const stats = [
    { value: '100%', label: 'Pure Cotton Comfort' },
    { value: '500,000+', label: 'Makeasy Products Delivered' },
    { value: '0%', label: 'Rashes & Toxic Bleach' },
    { value: '100,000+', label: 'Women Standing Confident' }
  ];

  return (
    <div className="bg-[#F8F3FC] py-12 md:py-20 animate-fade-in space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Mission Story Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold tracking-widest text-brand-crimson uppercase flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              OUR STORY & PHILOSOPHY
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Women Hygiene & Care <br />
              <span className="font-normal text-brand-purple">Built for Real Life.</span>
            </h1>

            <p className="text-base text-gray-600 font-light leading-relaxed">
              <strong>Makeasy</strong> was established with a passionate desire to revolutionize how women view toilet hygiene and period care. We stand firmly for every woman's right to safe, rash-free period care and public toilet hygiene.
            </p>

            <p className="text-base text-gray-600 font-light leading-relaxed">
              Through products like our <strong>Makeasy Classic Care 100% Cotton Pads</strong> and the <strong>HaPee Female Urination Device</strong>, we work day in and day out to ease your struggle for hygiene—wherever life takes you.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setCurrentView('products')}
                className="bg-[#6B1186] hover:bg-[#54096B] text-white rounded-full px-8 py-3 text-sm font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 inline-flex items-center gap-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="/images/mother-daughter.png"
                alt="Makeasy Mother and Daughter Story Visual"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <section className="bg-gradient-to-r from-[#4A126D] via-[#7B1FA2] to-[#E91E63] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((s, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold text-pink-200">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-purple-100 font-medium max-w-[180px] mx-auto">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-brand-crimson uppercase">
            OUR COMMITMENT
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-gray-900">
            Pillars of <span className="font-semibold text-brand-purple">The Makeasy Standard</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-purple flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">100% Cotton Purity</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              We use 100% pure cotton top sheets that prevent rashes, friction, and moisture buildup. Dermatologist approved for sensitive skin.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-brand-crimson flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Stand & Pee Freedom</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              Our HaPee Urination Device eliminates the fear of dirty public toilet seats, shielding women from Urinary Tract Infections (UTIs).
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-purple-100 shadow-md space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-brand-purple flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Community Outreach</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
              We conduct period awareness workshops and distribute hygiene kits in schools and colleges to foster a healthier community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
