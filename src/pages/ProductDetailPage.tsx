import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductGrid } from '../components/product/ProductGrid';
import { FlowBadge, OrganicBadge, BestsellerBadge } from '../components/ui/Badge';
import { RatingStars } from '../components/ui/RatingStars';
import { PRODUCTS } from '../data/products';
import { ShieldCheck, Check, ArrowRight, MessageSquare, Sparkles, Droplets } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { selectedProduct, setCurrentView } = useCart();
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'how-to' | 'specs'>('ingredients');

  const variant = selectedProduct.variants[selectedVariantIndex] || selectedProduct.variants[0];

  // Related products
  const relatedProducts = PRODUCTS.filter((p) => p.id !== selectedProduct.id).slice(0, 4);

  return (
    <div className="bg-[#F8F3FC] py-10 md:py-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <button onClick={() => setCurrentView('home')} className="hover:text-brand-purple">Home</button>
          <span>/</span>
          <button onClick={() => setCurrentView('products')} className="hover:text-brand-purple">Makeasy Collection</button>
          <span>/</span>
          <span className="font-semibold text-brand-purple truncate">{selectedProduct.name}</span>
        </div>

        {/* Top Product Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-purple-100 shadow-lg">
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
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                {selectedProduct.name}
              </h1>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed font-light">
                {selectedProduct.tagline}
              </p>

              {/* Rating */}
              <div className="mt-3 flex items-center gap-3">
                <RatingStars rating={selectedProduct.rating} reviewCount={selectedProduct.reviewCount} />
                <span className="text-xs text-emerald-600 font-semibold">✓ 100% Verified Product Specs</span>
              </div>
            </div>

            {/* Pack Size Configurations */}
            {selectedProduct.variants.length > 1 && (
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-800">
                  Available Packaging Configurations:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {selectedProduct.variants.map((v, idx) => (
                    <button
                      key={v.id}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`p-3 rounded-2xl text-left border transition-all ${
                        selectedVariantIndex === idx
                          ? 'border-brand-crimson bg-pink-50 text-brand-purple font-bold shadow-sm'
                          : 'border-purple-200 bg-white text-gray-700 hover:border-brand-purple'
                      }`}
                    >
                      <div className="text-xs font-bold">{v.name}</div>
                      <div className="text-[10px] text-gray-500 font-normal mt-0.5">
                        {v.count} Items per box
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Dimensions & Absorbency Specs */}
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Dimensions:</span>
                <span className="text-brand-purple font-bold">{selectedProduct.dimensions}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-semibold text-gray-700">Absorbency Capacity:</span>
                <span className="text-brand-purple font-bold">{selectedProduct.absorbencyNotes}</span>
              </div>
            </div>

            {/* Inquire CTAs */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => setCurrentView('contact')}
                  className="bg-[#6B1186] hover:bg-[#54096B] text-white rounded-full py-3 px-6 text-xs font-semibold shadow-md flex items-center justify-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire About Makeasy</span>
                </button>
                <button
                  onClick={() => setCurrentView('products')}
                  className="bg-white text-brand-purple border border-purple-200 rounded-full py-3 px-6 text-xs font-semibold shadow-sm hover:bg-purple-50 flex items-center justify-center gap-2 transition-all"
                >
                  <span>View All Products</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Guarantees List */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-purple-100 text-xs text-brand-purple font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Dermatologist Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-crimson" />
                <span>100% Pure Cotton</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-pink" />
                <span>Zero Rash Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="w-4 h-4 text-brand-purple" />
                <span>3D Leaklock™ Barriers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Product Tabs (Description, Materials, Specs) */}
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-purple-100 shadow-xl space-y-6">
          <div className="flex items-center gap-6 border-b border-purple-100 pb-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('ingredients')}
              className={`text-lg font-bold pb-2 transition-all relative whitespace-nowrap ${
                activeTab === 'ingredients' ? 'text-brand-purple' : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              Ingredients & Materials
              {activeTab === 'ingredients' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-crimson rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('how-to')}
              className={`text-lg font-bold pb-2 transition-all relative whitespace-nowrap ${
                activeTab === 'how-to' ? 'text-brand-purple' : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              Key Features & Benefits
              {activeTab === 'how-to' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-crimson rounded-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`text-lg font-bold pb-2 transition-all relative whitespace-nowrap ${
                activeTab === 'specs' ? 'text-brand-purple' : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              Technical Specifications
              {activeTab === 'specs' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-crimson rounded-full" />
              )}
            </button>
          </div>

          {activeTab === 'ingredients' && (
            <div className="space-y-4 animate-fade-in">
              <p className="text-sm text-gray-600 leading-relaxed font-light">
                {selectedProduct.longDescription}
              </p>
              <h4 className="text-base font-bold text-brand-purple pt-2">Transparent Materials List:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-800">
                {selectedProduct.materials.map((m, idx) => (
                  <li key={idx} className="flex items-center gap-2 p-3 bg-purple-50 rounded-xl border border-purple-100">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'how-to' && (
            <div className="space-y-4 animate-fade-in">
              <h4 className="text-base font-bold text-brand-purple">Designed for Maximum Comfort:</h4>
              <ul className="space-y-2 text-xs text-gray-700">
                {selectedProduct.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-crimson mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'specs' && (
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed font-light animate-fade-in">
              <p><strong>Dimensions & Profile:</strong> {selectedProduct.dimensions}</p>
              <p><strong>Absorbency Rating:</strong> {selectedProduct.absorbencyNotes}</p>
              <p><strong>Formulation:</strong> 100% Pure Cotton Top Sheet & Splash-Proof Recyclable Materials.</p>
            </div>
          )}
        </div>

        {/* Related Products Grid */}
        <div className="space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Explore Related Products
          </h3>
          <ProductGrid products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};
