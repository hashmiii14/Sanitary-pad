import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { CategoryGrid } from '../components/sections/CategoryGrid';
import { BenefitsSection } from '../components/sections/BenefitsSection';
import { TechBreakdown } from '../components/sections/TechBreakdown';
import { PeriodQuiz } from '../components/sections/PeriodQuiz';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { NewsletterSection } from '../components/sections/NewsletterSection';
import { ProductGrid } from '../components/product/ProductGrid';
import { PRODUCTS } from '../data/products';
import { FAQS } from '../data/faqs';
import { Accordion } from '../components/ui/Accordion';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setCurrentView } = useCart();
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-0 animate-fade-in">
      {/* Editorial Hero */}
      <HeroSection />

      {/* Category Highlighting */}
      <CategoryGrid />

      {/* Featured Bestsellers Section */}
      <section className="py-16 md:py-24 bg-cream border-t border-blush-deep/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold tracking-widest text-rose uppercase">
                MOST LOVED PRODUCTS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum">
                Featured Bestselling Period Care
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentView('shop')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Full Shop
            </Button>
          </div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* Product Benefits */}
      <BenefitsSection />

      {/* 4-Layer Pad Anatomy Tech Breakdown */}
      <TechBreakdown />

      {/* Interactive Period Quiz */}
      <PeriodQuiz />

      {/* Customer Testimonials & Press */}
      <TestimonialsSection />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-blush-soft border-t border-blush-deep/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold tracking-widest text-rose uppercase">
              GOT QUESTIONS?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-charcoal-muted max-w-lg mx-auto">
              Everything you need to know about our organic Texas cotton, absorbency levels, and subscription deliveries.
            </p>
          </div>

          <Accordion items={FAQS.slice(0, 5)} />

          <div className="text-center pt-4">
            <Button
              variant="ghost"
              onClick={() => setCurrentView('contact')}
              rightIcon={<ArrowRight className="w-4 h-4 text-rose" />}
            >
              Have another question? Contact our care team
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSection />
    </div>
  );
};
