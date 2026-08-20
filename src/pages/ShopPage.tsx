import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';
import { Search, X, SlidersHorizontal, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ShopPage: React.FC = () => {
  const { searchQuery, setSearchQuery } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFlow, setSelectedFlow] = useState<string>('all');
  const [organicOnly, setOrganicOnly] = useState<boolean>(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'regular', label: 'Sanitary Napkins' },
    { id: 'pee-device', label: 'PeeDevice (Female Urination)' },
    { id: 'overnight', label: 'Overnight Care' },
    { id: 'liners', label: 'Air-Touch Liners' },
    { id: 'starter-kits', label: 'Hygiene Kits' },
  ];

  const flowLevels = [
    { id: 'all', label: 'All Hygiene Categories' },
    { id: '1', label: 'Level 1: Liners & Travel Funnels' },
    { id: '3', label: 'Level 3: Regular Flow (280mm)' },
    { id: '5', label: 'Level 5: Heavy Overnight (330mm+)' },
  ];

  // Filtering Logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      if (selectedFlow !== 'all' && product.flowLevel.toString() !== selectedFlow) {
        return false;
      }
      if (organicOnly && !product.isOrganic) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesTag = product.tagline.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesCat = product.categoryLabel.toLowerCase().includes(q);
        if (!matchesName && !matchesTag && !matchesDesc && !matchesCat) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedFlow, organicOnly, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory('all');
    setSelectedFlow('all');
    setOrganicOnly(false);
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedFlow !== 'all' ||
    organicOnly ||
    searchQuery.trim() !== '';

  return (
    <div className="bg-[#F8F3FC] py-12 md:py-20 animate-fade-in min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Page Title & Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-purple-200 text-xs font-bold text-brand-purple tracking-wider uppercase shadow-sm">
            <ShieldCheck className="w-4 h-4 text-brand-pink" />
            <span>MAKEASY WOMEN HYGIENE & HEALTHCARE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            Explore <span className="font-normal text-brand-purple">Makeasy Collection</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            100% Cotton Sanitary Napkins, HaPee Stand & Pee Urination Devices, and complete travel hygiene products.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-purple-200/60 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-800 to-pink-600 text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-purple-100 shadow-md">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-72">
              <input
                type="text"
                placeholder="Search Makeasy pads, PeeDevice..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-full bg-purple-50/60 border border-purple-200 focus:outline-none focus:ring-2 focus:ring-brand-magenta text-gray-800"
              />
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-3 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                isFilterDrawerOpen || hasActiveFilters
                  ? 'bg-pink-100 text-brand-crimson border-brand-crimson'
                  : 'bg-white text-gray-700 border-purple-200 hover:bg-purple-50'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-brand-crimson animate-pulse" />
              )}
            </button>
          </div>

          <div className="text-xs text-gray-500 font-medium">
            Showing <strong>{filteredProducts.length}</strong> Makeasy Hygiene Products
          </div>
        </div>

        {/* Filter Drawer / Expandable Options */}
        {isFilterDrawerOpen && (
          <div className="bg-white p-6 rounded-3xl border border-purple-200 shadow-xl space-y-4 animate-slide-down">
            <div className="flex items-center justify-between border-b border-purple-100 pb-3">
              <h4 className="font-bold text-gray-900 text-sm">Filter Products</h4>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs font-bold text-brand-crimson hover:underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Flow Level Filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-800">Product Category</label>
                <select
                  value={selectedFlow}
                  onChange={(e) => setSelectedFlow(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-purple-50/50 border border-purple-200 text-gray-800 focus:outline-none"
                >
                  {flowLevels.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* 100% Cotton Only Checkbox */}
              <div className="space-y-2 flex flex-col justify-end">
                <label className="flex items-center gap-2 cursor-pointer p-2.5 bg-purple-50/50 rounded-xl border border-purple-200 text-xs font-semibold text-gray-800">
                  <input
                    type="checkbox"
                    checked={organicOnly}
                    onChange={(e) => setOrganicOnly(e.target.checked)}
                    className="rounded text-brand-crimson focus:ring-brand-crimson accent-brand-crimson"
                  />
                  <span>Show 100% Cotton Formulations Only</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className="pt-4">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};
