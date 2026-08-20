import React, { useState } from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { FlowBadge, OrganicBadge, BestsellerBadge, NewBadge } from '../ui/Badge';
import { RatingStars } from '../ui/RatingStars';
import { Eye, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setQuickViewProduct, navigateToProduct } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white rounded-3xl border border-purple-100 p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Media Image Container */}
      <div
        className="relative w-full aspect-square rounded-2xl overflow-hidden bg-[#F6F0FA] cursor-pointer mb-4 flex items-center justify-center p-3"
        onClick={() => navigateToProduct(product)}
      >
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          className="w-full h-full object-contain object-center transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start z-10 pointer-events-none">
          {product.isBestseller && <BestsellerBadge />}
          {product.isNew && <NewBadge />}
          {product.isOrganic && <OrganicBadge />}
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-x-0 bottom-3 px-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setQuickViewProduct(product);
            }}
            className="w-full py-2 bg-white/95 backdrop-blur-md text-brand-purple rounded-xl font-bold text-xs shadow-md hover:bg-brand-purple hover:text-white flex items-center justify-center gap-1.5 transition-all"
          >
            <Eye className="w-3.5 h-3.5" /> Quick Overview
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="space-y-3 flex-1 flex flex-col justify-between">
        <div>
          {/* Flow Absorbency Badge */}
          <div className="mb-2">
            <FlowBadge level={product.flowLevel} label={product.flowLabel} />
          </div>

          {/* Product Name */}
          <h3
            onClick={() => navigateToProduct(product)}
            className="text-lg font-bold text-gray-900 group-hover:text-brand-magenta transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-gray-600 line-clamp-2 mt-1 leading-relaxed font-light">
            {product.tagline}
          </p>

          {/* Rating */}
          <div className="mt-2">
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
          </div>
        </div>

        {/* Specifications & CTA */}
        <div className="pt-3 border-t border-purple-100 space-y-3 mt-2">
          {/* Specs note */}
          <div className="text-[11px] text-gray-500 flex justify-between">
            <span>Dimensions: <strong>{product.dimensions.split('|')[0].replace('Length:', '').trim()}</strong></span>
            <span className="text-brand-crimson font-semibold">100% Cotton</span>
          </div>

          {/* Action Button */}
          <button
            onClick={() => navigateToProduct(product)}
            className="w-full bg-purple-50 hover:bg-[#6B1186] text-brand-purple hover:text-white border border-purple-200 rounded-full py-2 px-4 text-xs font-semibold flex items-center justify-between transition-all duration-300"
          >
            <span>View Specifications</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
