import React from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { TopBanner } from './components/layout/TopBanner';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { QuickViewModal } from './components/product/QuickViewModal';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

const AppContent: React.FC = () => {
  const { currentView } = useCart();

  return (
    <div className="flex flex-col min-h-screen bg-cream text-charcoal font-sans selection:bg-rose-light selection:text-plum">
      {/* Announcement Banner */}
      <TopBanner />

      {/* Main Header Navbar */}
      <Navbar />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        {currentView === 'home' && <HomePage />}
        {currentView === 'products' && <ShopPage />}
        {currentView === 'product-detail' && <ProductDetailPage />}
        {currentView === 'about' && <AboutPage />}
        {currentView === 'contact' && <ContactPage />}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Interactive Overlays */}
      <QuickViewModal />
    </div>
  );
};

export function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
