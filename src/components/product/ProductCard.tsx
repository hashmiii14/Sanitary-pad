import React, { useState } from 'react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { FlowBadge, OrganicBadge, BestsellerBadge, NewBadge } from '../ui/Badge';
import { RatingStars } from '../ui/RatingStars';
import { Button } from '../ui/Button';
import { Eye, ArrowRight, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setQuickViewProduct, navigateToProduct } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white rounded-3xl border border-blush-deep/60 p-4 transition-all duration-300 hover:shadow-editorial hover:-translate-y-1 flex flex-col justify-between relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top Media Image Container */}
      <div
        className="relative w-full aspect-square rounded-2xl overflow-hidden bg-blush-soft cursor-pointer mb-4"
        onClick={() => navigateToProduct(product)}
      >
        <img
          src={isHovered && product.secondaryImage ? product.secondaryImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
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
            className="w-full py-2 bg-cream/95 backdrop-blur-md text-plum rounded-xl font-medium text-xs shadow-soft hover:bg-cream flex items-center justify-center gap-1.5 transition-all"
          >
            <Eye className="w-3.5 h-3.5 text-rose" /> Quick Overview
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="space-y-2 flex-1 flex flex-col justify-between">
        <div>
          {/* Flow Absorbency Badge */}
          <div className="mb-2">
            <FlowBadge level={product.flowLevel} label={product.flowLabel} />
          </div>

          {/* Product Name */}
          <h3
            onClick={() => navigateToProduct(product)}
            className="font-serif text-lg font-bold text-charcoal group-hover:text-rose transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-charcoal-muted line-clamp-2 mt-1 leading-relaxed">
            {product.tagline}
          </p>

          {/* Rating */}
          <div className="mt-2">
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
          </div>
        </div>

        {/* Specifications & CTA */}
        <div className="pt-3 border-t border-blush-soft space-y-3 mt-2">
          {/* Specs note */}
          <div className="text-[11px] text-charcoal-muted flex justify-between">
            <span>Length: <strong>{product.dimensions.split('|')[0].replace('Length:', '').trim()}</strong></span>
            <span className="text-sage-dark font-semibold">GOTS Cotton</span>
          </div>

          {/* Action Button */}
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigateToProduct(product)}
            className="w-full justify-between"
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            Explore Specifications
          </Button>
        </div>
      </div>
    </div>
  );
};
