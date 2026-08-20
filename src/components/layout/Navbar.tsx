import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { PageView } from '../../types';
import { ChevronDown, Menu, X, Search } from 'lucide-react';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const { currentView, setCurrentView, searchQuery, setSearchQuery } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (view: PageView) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#3A0CA3]/95 backdrop-blur-md shadow-xl py-3 border-b border-white/10'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo (Left - Cursive Script Style matching Reference) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group text-left focus:outline-none"
          >
            <span className="font-script text-4xl sm:text-5xl text-white drop-shadow-md group-hover:scale-105 transition-transform">
              Makeasy
            </span>
            <span className="text-[10px] uppercase font-montserrat tracking-widest text-pink-200 border border-white/30 rounded-full px-2 py-0.5 ml-1 hidden sm:inline-block">
              LUNA Care
            </span>
          </button>

          {/* Desktop Navigation Links (Center) */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-white/90">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-white transition-colors relative py-1 ${
                currentView === 'home' ? 'text-white font-semibold' : ''
              }`}
            >
              Home
              {currentView === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full animate-fade-in" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-white transition-colors relative py-1 ${
                currentView === 'about' ? 'text-white font-semibold' : ''
              }`}
            >
              About Us
              {currentView === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full animate-fade-in" />
              )}
            </button>

            {/* Dropdown for Our Products */}
            <div className="relative">
              <button
                onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                onMouseEnter={() => setIsProductsDropdownOpen(true)}
                className="flex items-center gap-1 hover:text-white transition-colors py-1 focus:outline-none"
              >
                <span>Our Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProductsDropdownOpen && (
                <div
                  onMouseLeave={() => setIsProductsDropdownOpen(false)}
                  className="absolute top-full left-0 w-52 bg-white text-gray-800 rounded-2xl shadow-2xl py-3 border border-purple-100 animate-slide-down"
                >
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-purple-50 hover:text-brand-magenta transition-colors"
                  >
                    Sanitary Napkins (XL+ 100% Cotton)
                  </button>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-purple-50 hover:text-brand-magenta transition-colors"
                  >
                    PeeDevice (Urination Device)
                  </button>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-purple-50 hover:text-brand-magenta transition-colors"
                  >
                    Overnight Wing Protection
                  </button>
                  <button
                    onClick={() => handleNavClick('products')}
                    className="w-full text-left px-4 py-2 text-xs font-semibold hover:bg-purple-50 hover:text-brand-magenta transition-colors"
                  >
                    Starter Cycle Kits
                  </button>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('products')}
              className="hover:text-white transition-colors py-1"
            >
              Events
            </button>

            <button
              onClick={() => handleNavClick('home')}
              className="hover:text-white transition-colors py-1"
            >
              Survey
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-white transition-colors relative py-1 ${
                currentView === 'contact' ? 'text-white font-semibold' : ''
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Action Right (Buy Now Button matching Reference) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('products')}
              className="bg-white/10 hover:bg-white/20 text-white border-2 border-white rounded-full px-6 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
            >
              Buy Now
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-full text-white hover:bg-white/10 transition-colors lg:hidden"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavClick}
      />
    </>
  );
};
