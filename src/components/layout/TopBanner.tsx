import React from 'react';
import { Sparkles, Leaf } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const TopBanner: React.FC = () => {
  const { setCurrentView } = useCart();

  return (
    <div className="bg-plum text-cream text-xs py-2 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-2 relative z-40">
      <Sparkles className="w-3.5 h-3.5 text-rose-light animate-pulse hidden sm:inline-block" />
      <span>
        ✨ 100% GOTS-Certified Organic Texas Cotton Period Care | Dermatologist Approved & Hypoallergenic
      </span>
      <button 
        onClick={() => setCurrentView('products')}
        className="underline underline-offset-2 hover:text-rose-light ml-2 font-semibold hidden md:inline-block"
      >
        Explore Collection →
      </button>
    </div>
  );
};
