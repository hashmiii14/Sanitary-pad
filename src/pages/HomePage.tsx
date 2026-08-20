import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { HealthierCommunitySection } from '../components/sections/HealthierCommunitySection';
import { ProductShowcaseSection } from '../components/sections/ProductShowcaseSection';
import { UTIQuoteSection } from '../components/sections/UTIQuoteSection';
import { BrandPillarsSection } from '../components/sections/BrandPillarsSection';
import { UsageGuideSection } from '../components/sections/UsageGuideSection';
import { FAQSection } from '../components/sections/FAQSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { InfoModal } from '../components/ui/InfoModal';

export const HomePage: React.FC = () => {
  return (
    <div className="space-y-0 animate-fade-in bg-white">
      {/* 1. ANGLED GRADIENT HERO SECTION (Matching Reference Image 1) */}
      <HeroSection />

      {/* 2. HEALTHIER COMMUNITY / MOTHER & DAUGHTER SECTION (Matching Reference Image 2) */}
      <HealthierCommunitySection />

      {/* 3. CHECK OUT OUR PRODUCTS & LOTUS SECTION (Matching Reference Image 2) */}
      <ProductShowcaseSection />

      {/* 4. UTI QUOTE & PEE DEVICE HIGHLIGHT SECTION (Matching Reference Image 3) */}
      <UTIQuoteSection />

      {/* 5. BRAND PILLARS & 4 CIRCULAR BADGES BANNER (Matching Reference Image 4) */}
      <BrandPillarsSection />

      {/* 6. STEP-BY-STEP HYGIENE & USAGE GUIDE SECTION */}
      <UsageGuideSection />

      {/* 7. FREQUENTLY ASKED QUESTIONS ACCORDION SECTION */}
      <FAQSection />

      {/* 8. TESTIMONIALS & BOTTOM REVOLUTION CTA BANNER (Matching Reference Image 5) */}
      <TestimonialsSection />

      {/* GLOBAL INTERACTIVE READ MORE INFO MODAL */}
      <InfoModal />
    </div>
  );
};
