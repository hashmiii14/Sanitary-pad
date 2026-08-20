import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { CartItemRow } from './CartItemRow';
import { Button } from '../ui/Button';
import { X, ShoppingBag, Truck, Tag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    subtotal,
    shippingFee,
    appliedCoupon,
    discountAmount,
    applyCoupon,
    removeCoupon,
    total,
    freeShippingThreshold,
    amountNeededForFreeShipping,
    setCurrentView,
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handlePromoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput) return;
    const res = applyCoupon(promoInput);
    if (res.success) {
      setPromoInput('');
      setPromoError(null);
    } else {
      setPromoError(res.message);
    }
  };

  const handleCheckoutClick = () => {
    setIsCartOpen(false);
    setCurrentView('checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-plum/40 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-cream shadow-editorial flex flex-col justify-between z-10 animate-slide-up">
        {/* Top Header */}
        <div className="p-5 border-b border-blush-deep flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-rose" />
            <h3 className="font-serif text-xl font-bold text-plum">Your Shopping Bag</h3>
            <span className="text-xs bg-rose-light text-rose-dark px-2 py-0.5 rounded-full font-bold">
              {cart.reduce((a, b) => a + b.quantity, 0)}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-2 rounded-full text-plum hover:bg-blush transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Bar */}
        <div className="bg-blush-soft p-4 border-b border-blush-deep space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-plum">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-rose" />
              {amountNeededForFreeShipping === 0 ? (
                <strong className="text-rose">🎉 You unlocked FREE Express Shipping!</strong>
              ) : (
                <span>Add <strong>${amountNeededForFreeShipping.toFixed(2)}</strong> for Free Shipping</span>
              )}
            </span>
            <span>${subtotal.toFixed(0)} / ${freeShippingThreshold}</span>
          </div>
          <div className="w-full bg-blush-deep h-2 rounded-full overflow-hidden">
            <div
              className="bg-rose h-full transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-blush-deep">
          {cart.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blush text-rose mx-auto flex items-center justify-center">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-xl font-bold text-plum">Your bag is empty</h4>
              <p className="text-xs text-charcoal-muted max-w-xs mx-auto">
                Explore our GOTS-certified organic cotton period care products designed for soft, worry-free days.
              </p>
              <Button
                variant="primary"
                onClick={() => {
                  setIsCartOpen(false);
                  setCurrentView('shop');
                }}
              >
                Shop Organic Pads
              </Button>
            </div>
          ) : (
            cart.map((item) => (
              <CartItemRow
                key={`${item.product.id}-${item.selectedVariant.id}`}
                item={item}
              />
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-blush-deep bg-white space-y-4 shadow-soft">
            {/* Promo Code Input */}
            <div>
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-sage-light border border-sage/40 text-xs">
                  <span className="flex items-center gap-1.5 text-sage-dark font-semibold">
                    <Tag className="w-3.5 h-3.5" /> Code "{appliedCoupon}" applied
                  </span>
                  <button
                    onClick={removeCoupon}
                    className="text-xs text-rose-dark hover:underline font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePromoSubmit} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Discount code (e.g. LUNA10)"
                    value={promoInput}
                    onChange={(e) => {
                      setPromoInput(e.target.value);
                      setPromoError(null);
                    }}
                    className="flex-1 px-3 py-1.5 text-xs rounded-xl bg-blush-soft border border-blush-deep focus:outline-none focus:ring-1 focus:ring-rose uppercase"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-plum text-cream text-xs font-semibold rounded-xl hover:bg-plum-dark transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}
              {promoError && <p className="text-[11px] text-rose-dark mt-1">{promoError}</p>}
            </div>

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-charcoal-muted">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-charcoal">${subtotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-rose-dark font-semibold">
                  <span>Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Express Shipping</span>
                <span>{shippingFee === 0 ? <strong className="text-sage-dark">FREE</strong> : `$${shippingFee.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-plum pt-2 border-t border-blush-deep">
                <span>Total</span>
                <span className="font-serif text-lg">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Action */}
            <Button
              variant="primary"
              size="lg"
              className="w-full shadow-md"
              onClick={handleCheckoutClick}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Proceed to Checkout (${total.toFixed(2)})
            </Button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-charcoal-muted pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-sage-dark" />
              <span>Encrypted 256-Bit SSL Checkout • 100% Satisfaction Guarantee</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
