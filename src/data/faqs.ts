export interface FAQItem {
  question: string;
  answer: string;
  category?: 'products' | 'health' | 'ordering';
}

export const FAQS: FAQItem[] = [
  {
    question: 'Are Makeasy pads made from 100% pure cotton?',
    answer: 'Yes! All Makeasy pads feature a 100% pure unbleached cotton top sheet. We use non-GMO cotton processed without elemental chlorine bleaching, synthetic perfumes, or toxic dyes.',
    category: 'products'
  },
  {
    question: 'How often should I change my Makeasy pad?',
    answer: 'We recommend changing your pad every 4 to 6 hours during daytime flow to maintain peak skin freshness. For overnight sleep, Makeasy Ultra Night Wings (330mm) offers continuous 12-hour protection.',
    category: 'health'
  },
  {
    question: 'What is the Makeasy HaPee Urination Device?',
    answer: 'Makeasy HaPee is a single-use, waterproof paperboard funnel that allows women to stand and pee safely in unhygienic public restrooms, preventing contact with dirty seats and guarding against UTIs.',
    category: 'products'
  },
  {
    question: 'Are Makeasy products safe for sensitive skin or eczema?',
    answer: 'Absolutely. Makeasy pads are dermatologist-tested, hypoallergenic, and free from synthetic fragrances and chlorine bleach—making them ideal for skin prone to rashes.',
    category: 'health'
  },
  {
    question: 'How do I order Makeasy products online?',
    answer: 'You can explore our full range on the Our Products page, select your preferred pack configurations, and inquire or place orders directly with our team.',
    category: 'ordering'
  }
];
