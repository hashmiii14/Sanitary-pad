import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { Leaf, Heart, ArrowRight, Instagram, Facebook, Twitter, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const { setCurrentView } = useCart();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-plum text-cream pt-16 pb-12 border-t border-plum-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-plum-light/20">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col items-start">
              <span className="font-serif text-3xl font-bold tracking-widest text-cream">
                LUNA
              </span>
              <span className="text-[10px] tracking-[0.25em] font-sans text-rose-light uppercase font-semibold -mt-1">
                Period Care
              </span>
            </div>
            <p className="text-sm text-cream/80 max-w-sm leading-relaxed">
              Thoughtfully designed period care for confident, comfortable days. 100% GOTS-certified organic cotton, toxin-free, zero plastic touch.
            </p>
            <div className="pt-2 flex items-center gap-4 text-rose-light">
              <a href="#" className="p-2 rounded-full bg-plum-dark/60 hover:bg-rose hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-plum-dark/60 hover:bg-rose hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded-full bg-plum-dark/60 hover:bg-rose hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Product Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-rose-light">Collection</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <button onClick={() => setCurrentView('products')} className="hover:text-cream transition-colors">
                  Daily Organic Pads
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('products')} className="hover:text-cream transition-colors">
                  Ultra Night Wings
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('products')} className="hover:text-cream transition-colors">
                  Heavy Flow Max
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('products')} className="hover:text-cream transition-colors">
                  Air-Touch Liners
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('products')} className="hover:text-cream transition-colors">
                  Cycle Starter Boxes
                </button>
              </li>
            </ul>
          </div>

          {/* About & Values */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-rose-light">Our World</h4>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>
                <button onClick={() => setCurrentView('about')} className="hover:text-cream transition-colors">
                  Our Story & Mission
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('about')} className="hover:text-cream transition-colors">
                  Ingredient Transparency
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('about')} className="hover:text-cream transition-colors">
                  Sustainability Report
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('contact')} className="hover:text-cream transition-colors">
                  Contact Us & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-rose-light">Stay Connected</h4>
            <p className="text-xs text-cream/75 leading-normal">
              Subscribe for period tips, cycle self-care guides, and Luna product updates.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-plum-dark text-xs text-rose-light font-medium flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sage-dark shrink-0" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-full bg-plum-dark/80 text-xs text-cream placeholder-cream/40 border border-plum-light focus:outline-none focus:border-rose text-left"
                  />
                  <button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-rose text-white rounded-full hover:bg-rose-hover transition-colors flex items-center justify-center text-xs font-semibold"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream/60">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} LUNA Period Care Inc. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline flex items-center gap-1 text-rose-light">
              Crafted with <Heart className="w-3 h-3 fill-rose text-rose inline" /> for women worldwide
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-cream transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
