import React from 'react';
import { PageView } from '../../types';
import { X, ChevronRight, Leaf, Shield, Sparkles, MessageSquare } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: PageView) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-plum/40 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-cream shadow-editorial flex flex-col justify-between animate-slide-up">
        {/* Top Header */}
        <div className="p-5 border-b border-blush-deep flex items-center justify-between">
          <div>
            <span className="font-serif text-2xl font-bold tracking-widest text-plum block">
              LUNA
            </span>
            <span className="text-[9px] tracking-[0.2em] font-sans text-charcoal-muted uppercase">
              Period Care
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-plum hover:bg-blush transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          <div className="space-y-2">
            <p className="text-xs font-bold tracking-wider text-charcoal-muted uppercase mb-3">
              Menu
            </p>
            <button
              onClick={() => onNavigate('home')}
              className="w-full py-3 px-4 rounded-xl text-left font-serif text-lg font-semibold text-charcoal hover:bg-blush flex items-center justify-between transition-colors"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-rose" />
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="w-full py-3 px-4 rounded-xl text-left font-serif text-lg font-semibold text-charcoal hover:bg-blush flex items-center justify-between transition-colors"
            >
              <span>Our Collection</span>
              <ChevronRight className="w-4 h-4 text-rose" />
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="w-full py-3 px-4 rounded-xl text-left font-serif text-lg font-semibold text-charcoal hover:bg-blush flex items-center justify-between transition-colors"
            >
              <span>Our Story & Mission</span>
              <ChevronRight className="w-4 h-4 text-rose" />
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full py-3 px-4 rounded-xl text-left font-serif text-lg font-semibold text-charcoal hover:bg-blush flex items-center justify-between transition-colors"
            >
              <span>Contact Us</span>
              <ChevronRight className="w-4 h-4 text-rose" />
            </button>
          </div>

          {/* Quick Badges */}
          <div className="p-4 rounded-2xl bg-blush-soft border border-blush-deep space-y-3">
            <div className="flex items-center gap-2.5 text-xs text-plum font-medium">
              <Leaf className="w-4 h-4 text-sage-dark" />
              <span>100% GOTS Organic Cotton</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-plum font-medium">
              <Shield className="w-4 h-4 text-rose" />
              <span>Hypoallergenic & Toxic Free</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-plum font-medium">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Dermatologist Approved</span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-blush-deep space-y-3 bg-blush/30">
          <button
            onClick={() => {
              onClose();
              onNavigate('contact');
            }}
            className="w-full py-3 px-4 rounded-full bg-plum text-cream hover:bg-plum-dark font-medium text-sm flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-rose-light" />
            <span>Inquire About Luna</span>
          </button>
        </div>
      </div>
    </div>
  );
};
