import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { ShieldCheck, Lock, CheckCircle2, Truck, CreditCard, ShoppingBag, ArrowLeft, Package } from 'lucide-react';
import { OrderDetails } from '../types';

export const CheckoutPage: React.FC = () => {
  const { cart, subtotal, shippingFee, discountAmount, total, clearCart, setCurrentView } = useCart();

  const [formData, setFormData] = useState({
    firstName: 'Jessica',
    lastName: 'Miller',
    email: 'jessica.m@example.com',
    phone: '(555) 234-5678',
    address: '742 Evergreen Terrace',
    city: 'Austin',
    state: 'TX',
    zipCode: '78701',
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
        orderId: `LUNA-${Math.floor(100000 + Math.random() * 900000)}`,
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
      <div className="bg-cream py-12 md:py-20 animate-fade-in min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-blush-deep shadow-editorial text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-sage-light text-sage-dark mx-auto flex items-center justify-center animate-slide-down">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold tracking-widest text-sage-dark uppercase">
                ORDER CONFIRMED & DISPATCHED
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-plum">
                Thank You for Your Order, {completedOrder.firstName}!
              </h1>
              <p className="text-xs sm:text-sm text-charcoal-muted max-w-md mx-auto">
                We’ve received your order and sent a confirmation receipt to <strong>{completedOrder.email}</strong>.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-blush-soft p-6 rounded-2xl border border-blush-deep text-left space-y-4 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-blush-deep pb-3">
                <div>
                  <span className="text-charcoal-muted">Order Number:</span>
                  <span className="font-bold text-plum ml-2">{completedOrder.orderId}</span>
                </div>
                <div>
                  <span className="text-charcoal-muted">Estimated Delivery:</span>
                  <span className="font-bold text-sage-dark ml-2">📦 {completedOrder.estimatedDelivery}</span>
                </div>
              </div>

              {/* Items Table */}
              <div className="space-y-3">
                <h4 className="font-bold text-plum">Items Ordered:</h4>
                {completedOrder.items.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-charcoal">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-rose" />
                      <span>{item.product.name} ({item.selectedVariant.name}) × {item.quantity}</span>
                    </div>
                    <span className="font-semibold">${(item.selectedVariant.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-blush-deep space-y-1.5 text-charcoal-muted">
                <div className="flex justify-between">
                  <span>Shipping Address:</span>
                  <span className="font-semibold text-charcoal">{completedOrder.address}, {completedOrder.city}, {completedOrder.state} {completedOrder.zipCode}</span>
                </div>
                <div className="flex justify-between font-bold text-plum text-sm pt-2 border-t border-blush-deep">
                  <span>Total Paid:</span>
                  <span className="font-serif text-lg">${completedOrder.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setCurrentView('shop')}
              >
                Continue Shopping
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setCurrentView('home')}
              >
                Back to Homepage
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // CHECKOUT FORM VIEW
  return (
    <div className="bg-cream py-10 md:py-16 animate-fade-in min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-blush-deep pb-4">
          <button
            onClick={() => setCurrentView('cart')}
            className="text-xs font-bold text-plum hover:text-rose flex items-center gap-1"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Bag
          </button>
          <div className="flex items-center gap-1.5 text-xs text-sage-dark font-semibold">
            <Lock className="w-4 h-4" /> 256-Bit Encrypted Secure Checkout
          </div>
        </div>

        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Form Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Customer Contact */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-blush-deep shadow-soft space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-plum text-cream text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="font-serif text-xl font-bold text-plum">Contact Information</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-charcoal">First Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-blush-soft border border-blush-deep focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-charcoal">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-blush-soft border border-blush-deep focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-charcoal">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-blush-soft border border-blush-deep focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-charcoal">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-blush-soft border border-blush-deep focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Shipping Address */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-blush-deep shadow-soft space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-plum text-cream text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="font-serif text-xl font-bold text-plum">Shipping Address</h3>
              </div>

              <div>
                <label className="text-xs font-bold text-charcoal">Street Address *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-blush-soft border border-blush-deep focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-charcoal">City *</label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-blush-soft border border-blush-deep focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-charcoal">State *</label>
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-blush-soft border border-blush-deep focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-charcoal">Zip Code *</label>
                  <input
                    type="text"
                    required
                    value={formData.zipCode}
                    onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                    className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-blush-soft border border-blush-deep focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Step 3: Payment Method UI */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-blush-deep shadow-soft space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-plum text-cream text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="font-serif text-xl font-bold text-plum">Payment Method</h3>
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
                        ? 'border-rose bg-rose-light text-plum shadow-xs'
                        : 'border-blush-deep text-charcoal hover:border-rose/40'
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
                    <label className="text-xs font-bold text-charcoal">Card Number</label>
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-blush-soft border border-blush-deep focus:outline-none font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-charcoal">Expiration</label>
                      <input
                        type="text"
                        required
                        value={formData.cardExp}
                        onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                        className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-blush-soft border border-blush-deep focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-charcoal">CVC Security</label>
                      <input
                        type="text"
                        required
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        className="w-full mt-1 px-3.5 py-2 text-xs rounded-xl bg-blush-soft border border-blush-deep focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Order Summary Column */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-blush-deep shadow-editorial space-y-6">
            <h3 className="font-serif text-2xl font-bold text-plum border-b border-blush-deep pb-4">
              Your Order ({cart.reduce((a, b) => a + b.quantity, 0)} Items)
            </h3>

            {/* Items Preview */}
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 divide-y divide-blush-deep">
              {cart.map((item, idx) => (
                <div key={idx} className="pt-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-12 h-12 rounded-xl object-cover bg-blush-soft border border-blush-deep"
                    />
                    <div>
                      <h5 className="font-bold text-plum">{item.product.name}</h5>
                      <span className="text-charcoal-muted">{item.selectedVariant.name} × {item.quantity}</span>
                    </div>
                  </div>
                  <span className="font-bold text-plum">${(item.selectedVariant.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2 text-xs text-charcoal-muted pt-3 border-t border-blush-deep">
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
                <span>Express Shipping</span>
                <span>{shippingFee === 0 ? <strong className="text-sage-dark">FREE</strong> : `$${shippingFee.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-plum pt-3 border-t border-blush-deep">
                <span>Total Due</span>
                <span className="font-serif text-2xl">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Place Order CTA */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full shadow-md"
              isLoading={isSubmitting}
            >
              Place Demo Order (${total.toFixed(2)})
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
