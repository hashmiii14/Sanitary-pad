import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { CartItemRow } from '../components/cart/CartItemRow';
import { Button } from '../components/ui/Button';
import { ShoppingBag, ArrowRight, Truck, Tag, ShieldCheck, ArrowLeft, Trash2 } from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    clearCart,
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

  const [promoCode, setPromoCode] = useState('');
  const [promoMsg, setPromoMsg] = useState<{ success: boolean; message: string } | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode) return;
    const res = applyCoupon(promoCode);
    setPromoMsg(res);
    if (res.success) setPromoCode('');
  };

  if (cart.length === 0) {
    return (
      <div className="bg-[#F8F3FC] py-16 md:py-24 animate-fade-in min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full text-center space-y-6 px-4">
          <div className="w-20 h-20 rounded-full bg-purple-100 text-brand-purple mx-auto flex items-center justify-center border border-purple-200">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Your Bag is Empty</h1>
          <p className="text-sm text-gray-600 font-light leading-relaxed">
            Looks like you haven't added any Makeasy products yet.
          </p>
          <button
            onClick={() => setCurrentView('products')}
            className="bg-[#6B1186] hover:bg-[#54096B] text-white rounded-full px-8 py-3 text-sm font-semibold shadow-md transition-all"
          >
            Explore Makeasy Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F3FC] py-10 md:py-16 animate-fade-in min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-200 pb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Your Shopping Bag
            </h1>
            <p className="text-xs text-gray-500 mt-1 font-light">
              Review your Makeasy items before proceeding to checkout
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentView('products')}
              className="text-xs text-gray-700 hover:text-brand-purple font-semibold flex items-center gap-1"
            >
              <ArrowLeft className="w-4 h-4" /> Continue Shopping
            </button>
            <button
              onClick={clearCart}
              className="text-xs text-brand-crimson hover:underline font-semibold flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" /> Clear Bag
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Cart Item Rows Left */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-md divide-y divide-purple-100">
            {cart.map((item) => (
              <CartItemRow
                key={`${item.product.id}-${item.selectedVariant.id}`}
                item={item}
              />
            ))}
          </div>

          {/* Order Summary Right */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-xl space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b border-purple-100 pb-4">
              Order Summary
            </h3>

            {/* Promo Code Form */}
            <div className="space-y-2">
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                    <Tag className="w-3.5 h-3.5" /> Code "{appliedCoupon}" Active
                  </span>
                  <button onClick={removeCoupon} className="text-xs text-brand-crimson hover:underline font-bold">
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Discount code (e.g. MAKEASY10)"
                    value={promoCode}
                    onChange={(e) => {
                      setPromoCode(e.target.value);
                      setPromoMsg(null);
                    }}
                    className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none uppercase text-gray-800"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-brand-purple text-white text-xs font-semibold rounded-xl hover:bg-brand-purple/90 transition-colors"
                  >
                    Apply
                  </button>
                </form>
              )}
            </div>

            {/* Price Calculations */}
            <div className="space-y-3 text-xs text-gray-600 font-light">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-brand-crimson font-semibold">
                  <span>Coupon Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between text-base font-bold text-gray-900 pt-3 border-t border-purple-100">
                <span>Estimated Total</span>
                <span className="text-2xl text-brand-purple">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={() => setCurrentView('checkout')}
              className="w-full bg-[#6B1186] hover:bg-[#54096B] text-white rounded-full py-3 text-xs font-semibold shadow-md flex items-center justify-center gap-2 transition-all"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 pt-2 text-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Makeasy Care • Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
