import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { MotherDaughterStory } from '../components/sections/MotherDaughterStory';
import { PadDetailZoom } from '../components/sections/PadDetailZoom';
import { PeriodConversation } from '../components/sections/PeriodConversation';
import { EditorialBenefits } from '../components/sections/EditorialBenefits';
import { PinkCTASection } from '../components/sections/PinkCTASection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { PeriodQuiz } from '../components/sections/PeriodQuiz';
import { NewsletterSection } from '../components/sections/NewsletterSection';
import { ProductGrid } from '../components/product/ProductGrid';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const HomePage: React.FC = () => {
  const { setCurrentView } = useCart();
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-0 animate-fade-in bg-cream">
      {/* 1. PINK INTRO / HERO */}
      <HeroSection />

      {/* 2. PRODUCT SHOWCASE TRANSITION (Clean White Section) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-blush-deep pb-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold tracking-widest text-rose-dark uppercase">
                OUR COLLECTION
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-plum">
                Made for your flow, day or night.
              </h2>
            </div>
            <Button
              variant="outline"
              onClick={() => setCurrentView('products')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              View All Collection
            </Button>
          </div>

          <ProductGrid products={featuredProducts} />
        </div>
      </section>

      {/* 3. MOTHER + DAUGHTER EMOTIONAL STORYTELLING */}
      <MotherDaughterStory />

      {/* 4. PAD DETAIL ZOOM FEATURE */}
      <PadDetailZoom />

      {/* 5. ASYMMETRICAL EDITORIAL BENEFITS */}
      <EditorialBenefits />

      {/* 6. EMOTIONAL BRAND PERIOD CONVERSATION */}
      <PeriodConversation />

      {/* 7. INTERACTIVE FLOW FINDER QUIZ */}
      <PeriodQuiz />

      {/* 8. REAL BELIEVABLE TESTIMONIALS */}
      <TestimonialsSection />

      {/* 9. BOTTOM PINK CTA BANNER */}
      <PinkCTASection />

      {/* 10. NEWSLETTER SIGNUP */}
      <NewsletterSection />
    </div>
  );
};
