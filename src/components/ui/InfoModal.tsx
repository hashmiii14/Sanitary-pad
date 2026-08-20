import React from 'react';
import { useCart } from '../../context/CartContext';
import { X, ShieldCheck, CheckCircle2, Heart, Sparkles, AlertCircle } from 'lucide-react';

export const InfoModal: React.FC = () => {
  const { activeInfoModal, closeInfoModal, setCurrentView } = useCart();

  if (!activeInfoModal) return null;

  const modalData: Record<string, { title: string; subtitle: string; content: React.ReactNode }> = {
    'hero-read-more': {
      title: 'Makeasy Hygiene & Care Vision',
      subtitle: 'Dedicated to your health, hygiene, and everyday freedom.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p>
            Makeasy was founded with a clear, uncompromising mission: to revolutionize how women experience period care and daily personal hygiene.
          </p>
          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 space-y-2">
            <h4 className="font-bold text-brand-purple flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-pink" />
              <span>100% Pure Cotton Assurance</span>
            </h4>
            <p className="text-xs text-gray-600">
              Unlike synthetic plastic top-sheets that trap moisture and cause painful friction rashes, Makeasy pads use 100% pure unbleached cotton cover sheets.
            </p>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-xs font-medium text-gray-800">
              <CheckCircle2 className="w-4 h-4 text-[#C2185B]" />
              <span>Dermatologist tested & hypoallergenic</span>
            </li>
            <li className="flex items-center gap-2 text-xs font-medium text-gray-800">
              <CheckCircle2 className="w-4 h-4 text-[#C2185B]" />
              <span>Zero elemental chlorine, fragrance, or artificial dyes</span>
            </li>
            <li className="flex items-center gap-2 text-xs font-medium text-gray-800">
              <CheckCircle2 className="w-4 h-4 text-[#C2185B]" />
              <span>3D LeakLock™ barriers for 100% edge security</span>
            </li>
          </ul>
        </div>
      ),
    },
    'community-read-more': {
      title: 'We Aspire a Healthier Community',
      subtitle: 'Empowering women with dignity, hygiene, and safer public facilities.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p>
            Clean, safe, and hygienic restroom facilities are a fundamental human right. Yet millions of women face daily struggles in offices, railway stations, highway stops, and public spaces.
          </p>
          <div className="p-4 rounded-2xl bg-pink-50 border border-pink-100 space-y-2">
            <h4 className="font-bold text-brand-crimson flex items-center gap-2">
              <Heart className="w-4 h-4 text-brand-pink" />
              <span>Our Community Pledge</span>
            </h4>
            <p className="text-xs text-gray-600">
              We work tirelessly to distribute hygiene awareness kits across schools, colleges, and workplace communities—eliminating the stigma surrounding period health.
            </p>
          </div>
          <p>
            Through innovative products like the <strong>Makeasy HaPee Urination Device</strong> and <strong>Classic Care 100% Cotton Napkins</strong>, we ensure women never have to compromise their health or peace of mind.
          </p>
        </div>
      ),
    },
    'pee-device': {
      title: 'Makeasy HaPee Urination Device (PeeDevice)',
      subtitle: 'Stand & Pee safely in any public restroom. Prevent UTIs effortlessy.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900 to-pink-700 text-white space-y-2 shadow-md">
            <span className="text-[10px] uppercase tracking-widest font-bold text-pink-200 block">
              INNOVATIVE FEMALE HYGIENE
            </span>
            <h4 className="font-bold text-lg">No More Crouching or Touching Dirty Seats!</h4>
            <p className="text-xs text-purple-100 font-light">
              Makeasy HaPee is a coated, splash-proof, disposable female urination device designed for travel, highway car trips, pregnancy, and unhygienic toilets.
            </p>
          </div>
          
          <h4 className="font-bold text-brand-purple text-xs uppercase tracking-wider">How To Use In 3 Simple Steps:</h4>
          <ol className="space-y-2 list-decimal list-inside text-xs text-gray-700">
            <li className="font-medium">Pop open the funnel device gently with your thumbs.</li>
            <li className="font-medium">Place the wider ergonomic end comfortably against your body.</li>
            <li className="font-medium">Direct the stream forward, dispose of after use in a waste bin.</li>
          </ol>
        </div>
      ),
    },
    'sanitary-napkins': {
      title: 'Makeasy Classic Care Sanitary Napkins',
      subtitle: '100% Cotton Stay Soft XL+ 7 Pads with 3D Leaklock Barrier.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <p>
            Experience superior absorption without irritation. Makeasy Classic Care pads are designed specifically for active women who demand 100% reliability.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 rounded-xl bg-purple-50 border border-purple-100 text-center">
              <span className="block text-xs font-bold text-brand-purple">XL+ 280mm Length</span>
              <span className="text-[10px] text-gray-500">Maximum Coverage</span>
            </div>
            <div className="p-3 rounded-xl bg-pink-50 border border-pink-100 text-center">
              <span className="block text-xs font-bold text-brand-crimson">100% Pure Cotton</span>
              <span className="text-[10px] text-gray-500">Zero Friction Rash</span>
            </div>
          </div>
        </div>
      ),
    },
    'uti-guide': {
      title: 'Preventing UTIs in Women',
      subtitle: 'Understanding the risks and protecting your personal hygiene.',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-brand-crimson shrink-0 mt-0.5" />
            <p className="text-xs text-gray-700">
              Over 50% of women will experience a Urinary Tract Infection (UTI) in their lifetime—most commonly triggered by contact with contaminated public toilet seats.
            </p>
          </div>
          <h4 className="font-bold text-brand-purple text-xs uppercase tracking-wider">Key Prevention Practices:</h4>
          <ul className="space-y-2 text-xs text-gray-700">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Use <strong>Makeasy HaPee Urination Device</strong> to stand and avoid contact.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Wear breathable 100% cotton underwear and pads.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Stay hydrated and change pads every 4 to 6 hours.</span>
            </li>
          </ul>
        </div>
      ),
    },
  };

  const currentModal = modalData[activeInfoModal] || modalData['hero-read-more'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-purple-100 overflow-hidden transform animate-slide-up relative">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#4A126D] via-[#7B1FA2] to-[#E91E63] text-white p-6 relative">
          <button
            onClick={closeInfoModal}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-brand-purple transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-pink-200 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 text-pink-300" />
            <span>MAKEASY CARE INFO</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">{currentModal.title}</h3>
          <p className="text-xs text-purple-100 font-light mt-1">{currentModal.subtitle}</p>
        </div>

        {/* Content Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {currentModal.content}
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-purple-50/50 border-t border-purple-100 flex items-center justify-between">
          <button
            onClick={closeInfoModal}
            className="text-xs font-semibold text-gray-600 hover:text-gray-900 px-4 py-2"
          >
            Close
          </button>

          <button
            onClick={() => {
              closeInfoModal();
              setCurrentView('products');
            }}
            className="bg-[#6B1186] hover:bg-[#54096B] text-white rounded-full px-6 py-2 text-xs font-semibold shadow-md transition-all transform hover:scale-105"
          >
            Explore Products
          </button>
        </div>
      </div>
    </div>
  );
};
