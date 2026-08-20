import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PageView } from '../types';
import { PRODUCTS } from '../data/products';

interface ProductContextType {
  selectedProduct: Product;
  setSelectedProduct: (product: Product) => void;
  
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  navigateToProduct: (product: Product) => void;
  
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;

  activeInfoModal: string | null;
  openInfoModal: (key: string) => void;
  closeInfoModal: () => void;
  
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<PageView>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product>(PRODUCTS[0]);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activeInfoModal, setActiveInfoModal] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const openInfoModal = (key: string) => {
    setActiveInfoModal(key);
  };

  const closeInfoModal = () => {
    setActiveInfoModal(null);
  };

  return (
    <ProductContext.Provider
      value={{
        selectedProduct,
        setSelectedProduct,
        currentView,
        setCurrentView,
        navigateToProduct,
        quickViewProduct,
        setQuickViewProduct,
        activeInfoModal,
        openInfoModal,
        closeInfoModal,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
