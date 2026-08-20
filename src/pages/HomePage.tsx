import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { HealthierCommunitySection } from '../components/sections/HealthierCommunitySection';
import { ProductShowcaseSection } from '../components/sections/ProductShowcaseSection';
import { UTIQuoteSection } from '../components/sections/UTIQuoteSection';
import { BrandPillarsSection } from '../components/sections/BrandPillarsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0 animate-fade-in bg-white">
      {/* 1. ANGLED GRADIENT HERO SECTION (Matching Reference Image 2) */}
      <HeroSection />

      {/* 2. HEALTHIER COMMUNITY / MOTHER & DAUGHTER SECTION (Matching Reference Image 3) */}
      <HealthierCommunitySection />

      {/* 3. CHECK OUT OUR PRODUCTS & LOTUS SECTION (Matching Reference Image 3) */}
      <ProductShowcaseSection />

      {/* 4. UTI QUOTE & PEE DEVICE HIGHLIGHT SECTION (Matching Reference Image 4) */}
      <UTIQuoteSection />

      {/* 5. BRAND PILLARS & 4 CIRCULAR BADGES BANNER (Matching Reference Image 5) */}
      <BrandPillarsSection />

      {/* 6. TESTIMONIALS & BOTTOM REVOLUTION CTA BANNER (Matching Reference Image 1) */}
      <TestimonialsSection />
    </div>
  );
};
