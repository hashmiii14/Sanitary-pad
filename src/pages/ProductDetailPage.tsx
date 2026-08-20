import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductGrid } from '../components/product/ProductGrid';
import { FlowBadge, OrganicBadge, BestsellerBadge } from '../components/ui/Badge';
import { RatingStars } from '../components/ui/RatingStars';
import { Button } from '../components/ui/Button';
import { PRODUCTS } from '../data/products';
import { ShieldCheck, Leaf, Check, ArrowRight, MessageSquare, Sparkles, Droplets } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { selectedProduct, setCurrentView } = useCart();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'how-to' | 'specs'>('ingredients');

  const variant = selectedProduct.variants[selectedVariantIndex] || selectedProduct.variants[0];

  // Related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== selectedProduct.id).slice(0, 4);

  return (
    <div className="bg-cream py-10 md:py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-charcoal-muted">
          <button onClick={() => setCurrentView('home')} className="hover:text-plum">Home</button>
          <span>/</span>
          <button onClick={() => setCurrentView('products')} className="hover:text-plum">Collection</button>
          <span>/</span>
          <span className="font-semibold text-plum truncate">{selectedProduct.name}</span>
        </div>

        {/* Top Product Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6">
            <ProductGallery images={selectedProduct.gallery} productName={selectedProduct.name} />
          </div>

          {/* Right Column: Specifications & Purchasing Controls */}
          <div className="lg:col-span-6 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <FlowBadge level={selectedProduct.flowLevel} label={selectedProduct.flowLabel} />
              {selectedProduct.isOrganic && <OrganicBadge />}
              {selectedProduct.isBestseller && <BestsellerBadge />}
            </div>

            {/* Title & Tagline */}
            <div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-plum">
                {selectedProduct.name}
              </h1>
              <p className="text-sm text-charcoal-muted mt-2 leading-relaxed">
                {selectedProduct.tagline}
              </p>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-3">
                <RatingStars rating={selectedProduct.rating} reviewCount={selectedProduct.reviewCount} />
                <span className="text-xs text-sage-dark font-semibold">✓ 100% Verified Product Specs</span>
              </div>
            </div>

            {/* Pack Size Configurations */}
            {selectedProduct.variants.length > 1 && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  Available Packaging Configurations:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedProduct.variants.map((v, idx) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`p-3 rounded-2xl text-left border transition-all ${
                        selectedVariantIndex === idx
                          ? 'border-rose bg-rose-light/70 text-plum font-bold shadow-xs'
                          : 'border-blush-deep bg-white text-charcoal hover:border-rose/40'
                      }`}
                    >
                      <div className="text-xs font-bold">{v.name}</div>
                      <div className="text-[10px] text-charcoal-muted font-normal mt-0.5">
                        {v.count} Items per box
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dimensions & Absorbency Specs */}
            <div className="p-4 rounded-2xl bg-blush-soft border border-blush-deep space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="font-semibold text-charcoal">Dimensions:</span>
                <span className="text-plum font-bold">{selectedProduct.dimensions}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-charcoal">Absorbency Capacity:</span>
                <span className="text-plum font-bold">{selectedProduct.absorbencyNotes}</span>
              </div>
            </div>

            {/* Inquire CTAs */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setCurrentView('contact')}
                  leftIcon={<MessageSquare className="w-5 h-5" />}
                >
                  Inquire About Luna
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setCurrentView('products')}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  View All Products
                </Button>
              </div>
            </div>

            {/* Guarantees List */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-blush-deep text-xs text-plum font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sage-dark" />
                <span>Dermatologist Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-sage-dark" />
                <span>100% GOTS Organic Cotton</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose" />
                <span>Zero Synthetic Toxins</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-plum" />
                <span>360° LeakLock™ Protection</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Product Tabs (Description, Materials, Specs) */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-blush-deep shadow-editorial space-y-6">
          <div className="flex items-center gap-6 border-b border-blush-deep pb-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('ingredients')}
              className={`font-serif text-lg font-bold pb-2 transition-all relative whitespace-nowrap ${
                activeTab === 'ingredients' ? 'text-plum' : 'text-gray-400 hover:text-charcoal'
              }`}
            >
              Ingredients & Materials
              {activeTab === 'ingredients' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('how-to')}
              className={`font-serif text-lg font-bold pb-2 transition-all relative whitespace-nowrap ${
                activeTab === 'how-to' ? 'text-plum' : 'text-gray-400 hover:text-charcoal'
              }`}
            >
              Key Features & Benefits
              {activeTab === 'how-to' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`font-serif text-lg font-bold pb-2 transition-all relative whitespace-nowrap ${
                activeTab === 'specs' ? 'text-plum' : 'text-gray-400 hover:text-charcoal'
              }`}
            >
              Technical Specifications
              {activeTab === 'specs' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose rounded-full" />
              )}
            </button>
          </div>

          {activeTab === 'ingredients' && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-sm text-charcoal-muted leading-relaxed">
                {selectedProduct.longDescription}
              </p>
              <h4 className="font-serif text-lg font-bold text-plum pt-2">Complete Transparent Materials List:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-charcoal">
                {selectedProduct.materials.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-2.5 bg-blush-soft rounded-xl border border-blush-deep">
                    <Check className="w-4 h-4 text-sage-dark shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'how-to' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="font-serif text-lg font-bold text-plum">Designed for Maximum Comfort:</h4>
              <ul className="space-y-2 text-xs text-charcoal">
                {selectedProduct.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-3 text-sm text-charcoal-muted leading-relaxed animate-fade-in">
              <p><strong>Dimensions & Profile:</strong> {selectedProduct.dimensions}</p>
              <p><strong>Absorbency Rating:</strong> {selectedProduct.absorbencyNotes}</p>
              <p><strong>Organic Certification:</strong> Global Organic Textile Standard (GOTS) Texas Cotton.</p>
            </div>
          )}
        </div>

        {/* Related Products Grid */}
        <div className="space-y-8">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-plum">
            Explore Related Products
          </h3>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};
