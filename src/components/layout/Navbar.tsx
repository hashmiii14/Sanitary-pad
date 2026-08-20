import React, { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { PageView } from '../../types';
import { Search, Menu, X, MessageSquare, Sparkles } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const {
    currentView,
    setCurrentView,
    searchQuery,
    setSearchQuery,
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentView('products');
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-soft border-b border-blush-deep/60 py-3'
            : 'bg-cream py-4 border-b border-blush-deep/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-full text-plum hover:bg-blush transition-colors"
              aria-label="Open Mobile Navigation"
            >
              <Menu className="w-6 h-6" />
            </button>
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 rounded-full text-plum hover:bg-blush transition-colors sm:hidden"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Desktop Navigation Links (Left) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-charcoal">
            <button
              onClick={() => handleNavClick('home')}
              className={`hover:text-rose transition-colors relative py-1 ${
                currentView === 'home' ? 'text-rose font-semibold' : ''
              }`}
            >
              Home
              {currentView === 'home' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose rounded-full animate-fade-in" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('products')}
              className={`hover:text-rose transition-colors relative py-1 ${
                currentView === 'products' ? 'text-rose font-semibold' : ''
              }`}
            >
              Our Collection
              {currentView === 'products' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose rounded-full animate-fade-in" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`hover:text-rose transition-colors relative py-1 ${
                currentView === 'about' ? 'text-rose font-semibold' : ''
              }`}
            >
              Our Story
              {currentView === 'about' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-rose rounded-full animate-fade-in" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`hover:text-rose transition-colors relative py-1 ${
                currentView === 'contact' ? 'text-rose font-semibold' : ''
              }`}
            >
              Contact Us
            </button>
          </nav>

          {/* Brand Logo (Center) */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => handleNavClick('home')}
              className="group text-center focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-widest text-plum group-hover:text-rose transition-colors block">
                LUNA
              </span>
              <span className="text-[9px] tracking-[0.25em] font-sans text-charcoal-muted uppercase font-semibold block -mt-1">
                Period Care
              </span>
            </button>
          </div>

          {/* Actions (Right) */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Search Bar */}
            <form
              onSubmit={handleSearchSubmit}
              className="hidden sm:flex items-center relative"
            >
              <input
                type="text"
                placeholder="Search organic pads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-40 md:w-48 pl-9 pr-3 py-1.5 text-xs rounded-full bg-blush-soft border border-blush-deep focus:outline-none focus:ring-2 focus:ring-rose/50 focus:w-56 transition-all text-charcoal placeholder-charcoal-light"
              />
              <Search className="w-3.5 h-3.5 text-charcoal-muted absolute left-3 pointer-events-none" />
            </form>

            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('contact')}
              leftIcon={<MessageSquare className="w-3.5 h-3.5" />}
            >
              Inquire Now
            </Button>
          </div>
        </div>

        {/* Expandable Mobile Search Bar */}
        {isSearchOpen && (
          <div className="sm:hidden px-4 pt-3 pb-1 border-t border-blush-deep animate-slide-down">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search organic pads, overnight..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 text-xs rounded-full bg-blush-soft border border-blush-deep focus:outline-none focus:ring-2 focus:ring-rose"
                autoFocus
              />
              <Search className="w-4 h-4 text-charcoal-muted absolute left-3 top-2.5" />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-2.5 text-charcoal-muted"
              >
                <X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
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
