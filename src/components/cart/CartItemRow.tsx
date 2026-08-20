import React from 'react';
import { CartItem } from '../../types';
import { useCart } from '../../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartItemRowProps {
  item: CartItem;
}

export const CartItemRow: React.FC<CartItemRowProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, selectedVariant, quantity } = item;

  const itemTotal = selectedVariant.price * quantity;

  return (
    <div className="flex items-center gap-4 py-4 border-b border-blush-deep/60">
      {/* Item Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover bg-blush-soft border border-blush-deep shrink-0"
      />

      {/* Item Details */}
      <div className="flex-1 min-w-0">
        <h4 className="font-serif text-sm sm:text-base font-bold text-plum truncate">
          {product.name}
        </h4>
        <p className="text-xs text-charcoal-muted mt-0.5">
          {selectedVariant.name}
        </p>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity Controls */}
          <div className="flex items-center border border-blush-deep rounded-full bg-white px-2 py-0.5">
            <button
              onClick={() => updateQuantity(product.id, selectedVariant.id, quantity - 1)}
              className="p-1 text-charcoal hover:text-rose transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-xs font-bold px-2.5 min-w-[20px] text-center">
              {quantity}
            </span>
            <button
              onClick={() => updateQuantity(product.id, selectedVariant.id, quantity + 1)}
              className="p-1 text-charcoal hover:text-rose transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => removeFromCart(product.id, selectedVariant.id)}
            className="text-xs text-charcoal-light hover:text-rose-dark transition-colors p-1 flex items-center gap-1"
            title="Remove item"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Remove</span>
          </button>
        </div>
      </div>

      {/* Item Subtotal Price */}
      <div className="text-right shrink-0">
        <span className="font-serif text-base font-bold text-plum block">
          ${itemTotal.toFixed(2)}
        </span>
        <span className="text-[10px] text-charcoal-muted">
          ${selectedVariant.price.toFixed(2)} ea
        </span>
      </div>
    </div>
  );
};
