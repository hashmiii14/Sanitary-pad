export type FlowLevel = 1 | 2 | 3 | 4 | 5; // 1: Liners, 2: Light/Regular, 3: Medium, 4: Heavy, 5: Super Heavy Overnight

export interface ProductVariant {
  id: string;
  name: string; // e.g. "Pack of 10", "Box of 24", "Value 3-Pack"
  count: number;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'regular' | 'heavy' | 'overnight' | 'liners' | 'starter-kits';
  categoryLabel: string;
  rating: number;
  reviewCount: number;
  flowLevel: FlowLevel;
  flowLabel: string; // e.g., "Regular Flow (240mm)", "Overnight Heavy (330mm)"
  description: string;
  longDescription: string;
  image: string;
  secondaryImage: string;
  gallery: string[];
  features: string[];
  materials: string[];
  isOrganic: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  variants: ProductVariant[];
  absorbencyNotes: string;
  dimensions: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  location?: string;
  comment: string;
  rating: number;
  productName?: string;
  avatar?: string;
  verifiedPurchase: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'usage' | 'ingredients' | 'sustainability';
}

export type PageView = 'home' | 'products' | 'product-detail' | 'about' | 'contact';

export interface FilterState {
  category: string;
  flowLevel: string;
  searchQuery: string;
  organicOnly: boolean;
}
