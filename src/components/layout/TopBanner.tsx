import React from 'react';
import { Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const TopBanner: React.FC = () => {
  const { setCurrentView } = useCart();

  return (
    <div className="bg-gradient-to-r from-[#2A0548] via-[#4A126D] to-[#821160] text-white text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 relative z-50 border-b border-white/10">
      <Sparkles className="w-3.5 h-3.5 text-pink-300 animate-pulse hidden sm:inline-block" />
      <span>
        ✨ 100% Cotton Sanitary Napkins & PeeDevice Hygiene | Dedicated to Your Health & Hygiene
      </span>
      <button 
        onClick={() => setCurrentView('products')}
        className="underline underline-offset-2 hover:text-pink-200 ml-2 font-semibold hidden md:inline-block"
      >
        Explore Products →
      </button>
    </div>
  );
};
