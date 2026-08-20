import React from 'react';
import { useCart } from '../../context/CartContext';
import { FlowBadge, OrganicBadge } from '../ui/Badge';
import { RatingStars } from '../ui/RatingStars';
import { Button } from '../ui/Button';
import { X, ArrowRight, ShieldCheck, Check, Leaf } from 'lucide-react';

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
        className="fixed inset-0 bg-plum/50 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Card */}
      <div className="relative bg-cream rounded-3xl max-w-3xl w-full shadow-editorial border border-blush-deep overflow-hidden z-10 animate-slide-up">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 text-charcoal hover:bg-white transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Left */}
          <div className="bg-blush-soft p-6 flex items-center justify-center relative">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full max-h-80 object-cover rounded-2xl shadow-soft"
            />
            <div className="absolute top-4 left-4">
              <OrganicBadge />
            </div>
          </div>

          {/* Product Info Right */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-4">
            <div>
              <FlowBadge level={quickViewProduct.flowLevel} label={quickViewProduct.flowLabel} />
              <h2 className="font-serif text-2xl font-bold text-plum mt-2">
                {quickViewProduct.name}
              </h2>
              <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                {quickViewProduct.description}
              </p>

              <div className="mt-3">
                <RatingStars rating={quickViewProduct.rating} reviewCount={quickViewProduct.reviewCount} />
              </div>

              {/* Dimensions & Capacity Specs */}
              <div className="mt-4 p-3 rounded-2xl bg-blush-soft border border-blush-deep space-y-1 text-xs">
                <p><strong>Dimensions:</strong> {quickViewProduct.dimensions}</p>
                <p><strong>Absorbency:</strong> {quickViewProduct.absorbencyNotes}</p>
              </div>

              {/* Pack Sizes Available */}
              <div className="mt-4 space-y-1.5">
                <label className="text-xs font-semibold text-charcoal">Available Configurations:</label>
                <div className="flex flex-wrap gap-1.5">
                  {quickViewProduct.variants.map((v) => (
                    <span
                      key={v.id}
                      className="px-2.5 py-1 bg-white border border-blush-deep rounded-xl text-xs font-semibold text-plum"
                    >
                      {v.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-4 border-t border-blush-deep">
              <Button
                variant="primary"
                className="w-full"
                onClick={handleFullDetails}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                View Full Specs & Gallery
              </Button>
              <button
                onClick={handleInquire}
                className="w-full text-center text-xs font-semibold text-plum hover:text-rose transition-colors py-1 flex items-center justify-center gap-1"
              >
                <span>Have a question? Inquire with our team</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
