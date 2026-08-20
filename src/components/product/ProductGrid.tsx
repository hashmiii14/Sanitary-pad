import React from 'react';
import { Product } from '../../types';
import { ProductCard } from './ProductCard';
import { Sparkles } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  emptyMessage = 'No organic period care products match your selected filters.',
}) => {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center bg-white rounded-3xl border border-blush-deep max-w-lg mx-auto p-8 space-y-4">
        <div className="w-12 h-12 rounded-full bg-blush-soft text-rose mx-auto flex items-center justify-center">
          <Sparkles className="w-6 h-6" />
        </div>
        <h3 className="font-serif text-xl font-bold text-plum">No Products Found</h3>
        <p className="text-sm text-charcoal-muted leading-relaxed">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
