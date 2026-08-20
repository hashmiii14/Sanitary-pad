import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { ShieldCheck, Lock, CheckCircle2, Truck, CreditCard, ArrowLeft, Package } from 'lucide-react';
import { OrderDetails } from '../types';

export const CheckoutPage: React.FC = () => {
  const { cart, subtotal, shippingFee, discountAmount, total, clearCart, setCurrentView } = useCart();

  const [formData, setFormData] = useState({
    firstName: 'Pooja',
    lastName: 'Kapoor',
    email: 'pooja.kapoor@example.com',
    phone: '+91-888-956-781',
    address: '101/B, New Apollo Area, Railway Road',
    city: 'Faridabad',
    state: 'Haryana',
    zipCode: '121001',
    paymentMethod: 'credit' as 'credit' | 'paypal' | 'applepay',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '12/28',
    cardCvc: '888',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<OrderDetails | null>(null);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const order: OrderDetails = {
        orderId: `MAKEASY-${Math.floor(100000 + Math.random() * 900000)}`,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        zipCode: formData.zipCode,
        paymentMethod: formData.paymentMethod,
        items: [...cart],
        subtotal,
        shipping: shippingFee,
        discount: discountAmount,
        total,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        estimatedDelivery: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      };

      setCompletedOrder(order);
      setIsSubmitting(false);
      clearCart();
    }, 1500);
  };

  // SUCCESS ORDER RECEIPT VIEW
  if (completedOrder) {
    return (
      <div className="bg-[#F8F3FC] py-12 md:py-20 animate-fade-in min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-100 shadow-2xl text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center animate-slide-down">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
                ORDER CONFIRMED & DISPATCHED
              </span>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Thank You for Your Order, {completedOrder.firstName}!
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto font-light">
                We’ve received your order and sent a confirmation receipt to <strong>{completedOrder.email}</strong>.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100 text-left space-y-4 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-100 pb-3">
                <div>
                  <span className="text-gray-500">Order Number:</span>
                  <span className="font-bold text-brand-purple ml-2">{completedOrder.orderId}</span>
                </div>
                <div>
                  <span className="text-gray-500">Estimated Delivery:</span>
                  <span className="font-bold text-emerald-700 ml-2">📦 {completedOrder.estimatedDelivery}</span>
                </div>
              </div>

              {/* Items Table */}
              <div className="space-y-3">
                <h4 className="font-bold text-brand-purple">Items Ordered:</h4>
                {completedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-gray-800">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-brand-crimson" />
                      <span>{item.product.name} ({item.selectedVariant.name}) × {item.quantity}</span>
                    </div>
                    <span className="font-semibold">${(item.selectedVariant.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-purple-100 space-y-1.5 text-gray-600">
                <div className="flex justify-between">
                  <span>Shipping Address:</span>
                  <span className="font-semibold text-gray-800">{completedOrder.address}, {completedOrder.city}, {completedOrder.state} {completedOrder.zipCode}</span>
                </div>
                <div className="flex justify-between font-bold text-brand-purple text-sm pt-2 border-t border-purple-100">
                  <span>Total Paid:</span>
                  <span className="text-2xl">${completedOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={() => setCurrentView('products')}
                className="bg-[#6B1186] hover:bg-[#54096B] text-white rounded-full px-8 py-3 text-xs font-semibold shadow-md"
              >
                Continue Shopping
              </button>
              <button
                onClick={() => setCurrentView('home')}
                className="bg-white text-gray-700 border border-purple-200 rounded-full px-8 py-3 text-xs font-semibold hover:bg-purple-50"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // CHECKOUT FORM VIEW
  return (
    <div className="bg-[#F8F3FC] py-10 md:py-16 animate-fade-in min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-purple-200 pb-4">
          <button
            onClick={() => setCurrentView('cart')}
            className="text-xs font-bold text-brand-purple hover:text-brand-crimson flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Bag
          </button>
          <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
            <Lock className="w-4 h-4" /> 256-Bit Encrypted Secure Checkout
          </div>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Customer Contact */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-purple text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-800">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-800">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-800">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-800">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Address */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-purple text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="text-xl font-bold text-gray-900">Shipping Address</h3>
              </div>

              <div>
                <label className="text-xs font-bold text-gray-800">Street Address *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-gray-800">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-800">State *</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-800">Zip Code *</label>
                  <input
                    type="text"
                    required
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method UI */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-md space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-brand-purple text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="text-xl font-bold text-gray-900">Payment Method</h3>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'credit', name: 'Credit Card', icon: <CreditCard className="w-4 h-4" /> },
                  { id: 'paypal', name: 'PayPal', icon: '🅿️' },
                  { id: 'applepay', name: 'Apple Pay', icon: '🍎' },
                ].map((pm) => (
                  <button
                    key={pm.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: pm.id as any })}
                    className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                      formData.paymentMethod === pm.id
                        ? 'border-brand-crimson bg-pink-50 text-brand-purple shadow-sm'
                        : 'border-purple-200 text-gray-700 hover:border-brand-purple'
                    }`}
                  >
                    <span>{pm.icon}</span>
                    <span>{pm.name}</span>
                  </button>
                ))}
              </div>

              {formData.paymentMethod === 'credit' && (
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-xs font-bold text-gray-800">Card Number</label>
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-gray-800">Expiration</label>
                      <input
                        type="text"
                        required
                        value={formData.cardExp}
                        onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                        className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-gray-800">CVC Security</label>
                      <input
                        type="text"
                        required
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Order Summary Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-purple-100 shadow-xl space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 border-b border-purple-100 pb-4">
              Your Order ({cart.reduce((a, b) => a + b.quantity, 0)} Items)
            </h3>

            {/* Items Preview */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 divide-y divide-purple-100">
              {cart.map((item, idx) => (
                <div key={idx} className="pt-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 rounded-xl object-contain bg-[#F6F0FA] border border-purple-100 p-1"
                    />
                    <div>
                      <h5 className="font-bold text-gray-900">{item.product.name}</h5>
                      <span className="text-gray-500">{item.selectedVariant.name} × {item.quantity}</span>
                    </div>
                  </div>
                  <span className="font-bold text-brand-purple">${(item.selectedVariant.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2 text-xs text-gray-600 font-light pt-3 border-t border-purple-100">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-brand-crimson font-semibold">
                  <span>Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-base font-bold text-gray-900 pt-3 border-t border-purple-100">
                <span>Total Due</span>
                <span className="text-2xl text-brand-purple">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Place Order CTA */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#6B1186] hover:bg-[#54096B] text-white rounded-full py-3 text-xs font-semibold shadow-md flex items-center justify-center gap-2 transition-all transform hover:scale-103"
            >
              {isSubmitting ? 'Processing Order...' : `Place Demo Order ($${total.toFixed(2)})`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
