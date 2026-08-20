import React from 'react';
import { useCart } from '../../context/CartContext';
import { FlowBadge, OrganicBadge } from '../ui/Badge';
import { RatingStars } from '../ui/RatingStars';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, navigateToProduct, setCurrentView } = useCart();

  if (!quickViewProduct) return null;

  const handleFullDetails = () => {
    navigateToProduct(quickViewProduct);
    setQuickViewProduct(null);
  };

  const handleInquire = () => {
    setQuickViewProduct(null);
    setCurrentView('contact');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full shadow-2xl border border-purple-100 overflow-hidden z-10 animate-slide-up">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-purple-100 text-gray-700 hover:bg-brand-purple hover:text-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Left */}
          <div className="bg-[#F6F0FA] p-6 flex items-center justify-center relative">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full max-h-80 object-contain"
            />
            <div className="absolute top-4 left-4">
              <OrganicBadge />
            </div>
          </div>

          {/* Product Info Right */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-4">
            <div>
              <FlowBadge level={quickViewProduct.flowLevel} label={quickViewProduct.flowLabel} />
              <h2 className="text-2xl font-bold text-gray-900 mt-2">
                {quickViewProduct.name}
              </h2>
              <p className="text-xs text-gray-600 mt-1 leading-relaxed font-light">
                {quickViewProduct.description}
              </p>

              <div className="mt-3">
                <RatingStars rating={quickViewProduct.rating} reviewCount={quickViewProduct.reviewCount} />
              </div>

              {/* Dimensions & Capacity Specs */}
              <div className="mt-4 p-3 rounded-2xl bg-purple-50 border border-purple-100 space-y-1 text-xs">
                <p><strong>Dimensions:</strong> {quickViewProduct.dimensions}</p>
                <p><strong>Absorbency:</strong> {quickViewProduct.absorbencyNotes}</p>
              </div>

              {/* Pack Sizes Available */}
              <div className="mt-4 space-y-1.5">
                <label className="text-xs font-semibold text-gray-800">Available Configurations:</label>
                <div className="flex flex-wrap gap-1.5">
                  {quickViewProduct.variants.map((v) => (
                    <span
                      key={v.id}
                      className="px-3 py-1 bg-purple-50 border border-purple-200 rounded-xl text-xs font-semibold text-brand-purple"
                    >
                      {v.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-4 border-t border-purple-100">
              <button
                onClick={handleFullDetails}
                className="w-full bg-[#6B1186] hover:bg-[#54096B] text-white rounded-full py-2.5 text-xs font-semibold shadow-md flex items-center justify-center gap-2 transition-all transform hover:scale-103"
              >
                <span>View Full Specifications & Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleInquire}
                className="w-full text-center text-xs font-semibold text-brand-purple hover:text-brand-crimson transition-colors py-1 flex items-center justify-center gap-1"
              >
                <span>Have a question? Contact Makeasy Support</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
