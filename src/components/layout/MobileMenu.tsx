import React from 'react';
import { PageView } from '../../types';
import { X, Heart, ShieldCheck } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: PageView) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer panel right */}
      <div className="relative ml-auto w-full max-w-xs bg-[#2A0548] text-white h-full shadow-2xl p-6 flex flex-col justify-between z-10 animate-slide-left border-l border-purple-900">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-purple-800">
            <span className="font-script text-3xl text-white">Makeasy</span>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav links list */}
          <nav className="mt-8 space-y-4 font-semibold text-sm">
            <button
              onClick={() => onNavigate('home')}
              className="w-full text-left py-2 px-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="w-full text-left py-2 px-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="w-full text-left py-2 px-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Our Products
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="w-full text-left py-2 px-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="w-full text-left py-2 px-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Survey
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full text-left py-2 px-3 rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact Us
            </button>
          </nav>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-purple-800 space-y-4">
          <button
            onClick={() => onNavigate('products')}
            className="w-full bg-gradient-to-r from-pink-600 to-purple-700 text-white rounded-full py-3 text-xs font-bold shadow-lg"
          >
            Buy Now
          </button>
          <div className="flex items-center gap-2 text-[11px] text-purple-300 font-light justify-center">
            <ShieldCheck className="w-4 h-4 text-pink-400" />
            <span>100% Cotton & UTI Prevention</span>
          </div>
        </div>
      </div>
    </div>
  );
};
