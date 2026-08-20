import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../data/products';
import { ProductGrid } from '../components/product/ProductGrid';
import { Search, X, SlidersHorizontal, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ShopPage: React.FC = () => {
  const { searchQuery, setSearchQuery } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedFlow, setSelectedFlow] = useState<string>('all');
  const [organicOnly, setOrganicOnly] = useState<boolean>(false);
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'regular', label: 'Regular Flow' },
    { id: 'heavy', label: 'Heavy Flow' },
    { id: 'overnight', label: 'Overnight Wings' },
    { id: 'liners', label: 'Air-Touch Liners' },
    { id: 'starter-kits', label: 'Starter Kits' },
  ];

  const flowLevels = [
    { id: 'all', label: 'All Absorbencies' },
    { id: '1', label: 'Level 1: Liners (155mm)' },
    { id: '2', label: 'Level 2: Regular (240mm)' },
    { id: '3', label: 'Level 3: Active Day (260mm)' },
    { id: '4', label: 'Level 4: Heavy Day (280mm)' },
    { id: '5', label: 'Level 5: Overnight (330mm+)' },
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
    <div className="bg-cream py-10 md:py-16 animate-fade-in min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Page Title & Intro */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold tracking-widest text-rose uppercase">
            ORGANIC PERIOD CARE COLLECTION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-plum">
            Explore Luna Collection
          </h1>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            100% GOTS-certified organic cotton pads and liners. Zero plastic touch, zero toxic dyes.
          </p>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-blush-deep scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-plum text-cream shadow-sm'
                  : 'bg-white text-charcoal hover:bg-blush-soft border border-blush-deep'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-blush-deep shadow-soft">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-72">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-full bg-blush-soft border border-blush-deep focus:outline-none focus:ring-1 focus:ring-rose"
              />
              <Search className="w-3.5 h-3.5 text-charcoal-muted absolute left-3 top-3 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-charcoal-muted hover:text-charcoal"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}
              className={`px-3.5 py-2 rounded-full text-xs font-semibold border flex items-center gap-1.5 transition-all ${
                isFilterDrawerOpen || hasActiveFilters
                  ? 'bg-rose-light text-rose-dark border-rose'
                  : 'bg-white text-charcoal border-blush-deep hover:bg-blush-soft'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
              {hasActiveFilters && (
                <span className="w-2 h-2 rounded-full bg-rose animate-pulse" />
              )}
            </button>
          </div>

          <div className="text-xs text-charcoal-muted font-medium">
            Showing <strong>{filteredProducts.length}</strong> Organic Products
          </div>
        </div>

        {/* Filter Drawer / Expandable Options */}
        {isFilterDrawerOpen && (
          <div className="bg-blush-soft p-6 rounded-3xl border border-blush-deep space-y-4 animate-slide-down">
            <div className="flex items-center justify-between border-b border-blush-deep pb-3">
              <h4 className="font-serif text-lg font-bold text-plum">Filter Products</h4>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs font-bold text-rose-dark hover:underline"
                >
                  Clear All Filters
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Flow Level Filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-charcoal">Absorbency Flow Level</label>
                <select
                  value={selectedFlow}
                  onChange={(e) => setSelectedFlow(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-white border border-blush-deep text-charcoal focus:outline-none"
                >
                  {flowLevels.map((f) => (
                    <option key={f.id} value={f.id}>
                      {f.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Organic Only Checkbox */}
              <div className="space-y-2 flex flex-col justify-end">
                <label className="flex items-center gap-2 cursor-pointer p-2.5 bg-white rounded-xl border border-blush-deep text-xs font-semibold text-charcoal">
                  <input
                    type="checkbox"
                    checked={organicOnly}
                    onChange={(e) => setOrganicOnly(e.target.checked)}
                    className="rounded text-rose focus:ring-rose accent-rose"
                  />
                  <Leaf className="w-3.5 h-3.5 text-sage-dark" />
                  <span>Show 100% GOTS Organic Cotton Only</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Active Filter Badges */}
        {hasActiveFilters && (
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-charcoal-muted font-medium">Active filters:</span>
            {selectedCategory !== 'all' && (
              <span className="px-2.5 py-1 bg-white border border-blush-deep rounded-full text-plum font-semibold flex items-center gap-1">
                Category: {selectedCategory}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedCategory('all')} />
              </span>
            )}
            {selectedFlow !== 'all' && (
              <span className="px-2.5 py-1 bg-white border border-blush-deep rounded-full text-plum font-semibold flex items-center gap-1">
                Flow Level {selectedFlow}
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSelectedFlow('all')} />
              </span>
            )}
            {organicOnly && (
              <span className="px-2.5 py-1 bg-sage-light text-sage-dark border border-sage/40 rounded-full font-semibold flex items-center gap-1">
                Organic Only
                <X className="w-3 h-3 cursor-pointer" onClick={() => setOrganicOnly(false)} />
              </span>
            )}
            {searchQuery && (
              <span className="px-2.5 py-1 bg-white border border-blush-deep rounded-full text-plum font-semibold flex items-center gap-1">
                Search: "{searchQuery}"
                <X className="w-3 h-3 cursor-pointer" onClick={() => setSearchQuery('')} />
              </span>
            )}
            <button
              onClick={clearFilters}
              className="text-xs text-rose-dark hover:underline font-bold ml-2"
            >
              Reset
            </button>
          </div>
        )}

        {/* Product Grid */}
        <div className="pt-2">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};
