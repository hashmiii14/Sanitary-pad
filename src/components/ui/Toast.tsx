import React from 'react';
import { useCart } from '../../context/CartContext';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast, hideToast, toggleCartDrawer } = useCart();

  if (!toast || !toast.show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-toast-in max-w-sm w-full">
      <div className="bg-plum text-cream p-4 rounded-2xl shadow-editorial border border-plum-light flex items-center gap-3">
        <div className="p-2 rounded-full bg-rose/20 text-rose-light shrink-0">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium text-cream/90">{toast.message}</p>
        </div>
        <button
          onClick={toggleCartDrawer}
          className="px-2.5 py-1 text-xs font-semibold bg-rose text-white rounded-full hover:bg-rose-hover transition-colors shrink-0 flex items-center gap-1"
        >
          <ShoppingBag className="w-3 h-3" /> View Bag
        </button>
        <button
          onClick={hideToast}
          className="text-cream/60 hover:text-cream transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
