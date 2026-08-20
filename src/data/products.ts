import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'makeasy-classic-care-napkin',
    name: 'Makeasy Classic Care Sanitary Napkin',
    tagline: '100% Cotton Stay Soft XL+ 7 Pads with 3D Leaklock Barrier.',
    category: 'regular',
    categoryLabel: 'Sanitary Napkins',
    rating: 4.95,
    reviewCount: 428,
    flowLevel: 3,
    flowLabel: 'Regular to Heavy Flow (XL+ 280mm)',
    description: 'Engineered with 100% pure cotton cover sheet and rapid-gel core that locks in wetness instantaneously with zero leakage.',
    longDescription: 'Makeasy Classic Care Sanitary Napkins provide reliable, rush-free absorbency. Crafted with 100% cotton top sheet and flexing wings, our design stays firmly in place whether you are working, travelling, or relaxing at home. Hypoallergenic, rash-free, and 100% breathable.',
    image: '/images/card-sanitary-napkin.png',
    secondaryImage: '/images/hero-product.png',
    gallery: [
      '/images/card-sanitary-napkin.png',
      '/images/hero-product.png',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '100% Pure Cotton Soft Top Sheet',
      '3D Leak Barrier to Prevent Edge Leakage',
      'Ultra-thin Profile for Maximum Comfort',
      'Zero Rash & Fragrance-Free Guarantee',
      'Flexible Ergonomic Double Wings'
    ],
    materials: ['100% Pure Cotton Top Layer', 'Super Absorbent Polymer (SAP) Core', 'Breathable Leakproof Backsheet', 'Medical-Grade Safe Adhesive'],
    isOrganic: true,
    isBestseller: true,
    variants: [
      { id: 'v1', name: 'Pack of 7 XL+ Pads', count: 7 },
      { id: 'v2', name: 'Box of 20 XL+ Pads', count: 20 },
      { id: 'v3', name: 'Value Bundle 3-Pack (30 Pads)', count: 30 }
    ],
    absorbencyNotes: 'Holds up to 50ml of liquid. Suitable for days 1 to 5.',
    dimensions: 'Length: 280mm | Width: 75mm | XL+ Extra Coverage'
  },
  {
    id: 'makeasy-ha-pee-device',
    name: 'Makeasy HaPee Urination Device (PeeDevice)',
    tagline: 'Revolutionary disposable female urination device that allows women to stand and pee safely.',
    category: 'pee-device',
    categoryLabel: 'PeeDevice (Female Urination)',
    rating: 4.98,
    reviewCount: 654,
    flowLevel: 1,
    flowLabel: 'Hygiene & Travel Companion',
    description: 'An innovative, ergonomic disposable device that lets women stand and pee safely in unhygienic public restrooms, preventing UTIs.',
    longDescription: 'No more crouching or touching dirty toilet seats! Makeasy HaPee Urination Device is made from coated water-resistant, biodegradable paperboard. Ideal for travelling, highway car trips, railway stations, airports, outdoor camping, festivals, and pregnancy.',
    image: '/images/card-pee-device.png',
    secondaryImage: '/images/ha-pee-box.png',
    gallery: [
      '/images/card-pee-device.png',
      '/images/ha-pee-box.png',
      '/images/uti-woman.jpg'
    ],
    features: [
      'Ergonomic Splash-Proof Funnel Design',
      'Prevents UTI & Public Toilet Infections',
      '100% Waterproof Biodegradable Coated Board',
      'Compact & Pocket-Friendly Packaging',
      'Single-Use Hygienic Throw-Away Design'
    ],
    materials: ['Waterproof Coated Recyclable Paperboard', 'Eco-Friendly Inks'],
    isOrganic: true,
    isBestseller: true,
    isNew: true,
    variants: [
      { id: 'v1', name: 'Pack of 5 PeeDevices', count: 5 },
      { id: 'v2', name: 'Travel Box of 10 PeeDevices', count: 10 },
      { id: 'v3', name: 'Explorer Pack of 20 PeeDevices', count: 20 }
    ],
    absorbencyNotes: 'Immediate directional flow. 100% leak-proof spill guard.',
    dimensions: 'Pocket Size: 15cm x 6cm | Lightweight (10g)'
  },
  {
    id: 'makeasy-ultra-night-wings',
    name: 'Makeasy Ultra Night Wings Pads',
    tagline: 'Extra long 330mm overnight protection for 12 hours of leak-free sleep.',
    category: 'overnight',
    categoryLabel: 'Overnight Care',
    rating: 4.92,
    reviewCount: 388,
    flowLevel: 5,
    flowLabel: 'Super Heavy Overnight (330mm)',
    description: 'Extra-wide flared back tail offers complete 360° coverage for side and back sleepers during heavy night flows.',
    longDescription: 'Sleep peacefully without worrying about leaks. Makeasy Ultra Night Wings combines a 40% wider flared tail with double flexing wings that trap liquid instantaneously.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    secondaryImage: '/images/hero-product.png',
    gallery: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      '/images/card-sanitary-napkin.png'
    ],
    features: [
      'Extended 330mm Length for Full Back Coverage',
      'Flared Back Tail Protects Bed Linens',
      '12-Hour Continuous Leak Guard',
      'Double Flexing Secure Wings'
    ],
    materials: ['100% Cotton Top Sheet', 'SAP Micro-gel Core', 'Breathable Non-Woven Backsheet'],
    isOrganic: true,
    variants: [
      { id: 'v1', name: 'Pack of 8 Night Pads', count: 8 },
      { id: 'v2', name: 'Box of 20 Night Pads', count: 20 }
    ],
    absorbencyNotes: 'Holds up to 80ml of liquid. Ideal for heavy overnight flow.',
    dimensions: 'Length: 330mm | Flared Tail Width: 120mm'
  },
  {
    id: 'makeasy-air-touch-liners',
    name: 'Makeasy Air-Touch Daily Liners',
    tagline: 'Featherlight daily liners for pre/post-period freshness and discharge.',
    category: 'liners',
    categoryLabel: 'Panty Liners',
    rating: 4.88,
    reviewCount: 192,
    flowLevel: 1,
    flowLabel: 'Featherlight (155mm)',
    description: 'Ultra-thin, breathable cotton liners so light you will forget you are wearing them.',
    longDescription: 'Designed for everyday confidence, ovulation discharge, or light spotting. Air-Touch Liners feature a micro-perforated cotton sheet that allows your skin to breathe naturally.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    secondaryImage: '/images/card-sanitary-napkin.png',
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '1mm Ultra-Flexible Contour fit',
      'Individually Paper-Wrapped for On-the-Go',
      'Hypoallergenic Dermatologist Approved'
    ],
    materials: ['100% Cotton Cover Sheet', 'Air-Laid Paper Core'],
    isOrganic: true,
    variants: [
      { id: 'v1', name: 'Box of 24 Liners', count: 24 },
      { id: 'v2', name: 'Value Box of 50 Liners', count: 50 }
    ],
    absorbencyNotes: 'Holds up to 15ml of liquid.',
    dimensions: 'Length: 155mm | Thickness: 1mm'
  },
  {
    id: 'makeasy-complete-hygiene-box',
    name: 'Makeasy Complete Hygiene & Cycle Box',
    tagline: 'Curated box featuring Sanitary Napkins, HaPee PeeDevices & Air-Touch Liners.',
    category: 'starter-kits',
    categoryLabel: 'Hygiene Kits',
    rating: 4.99,
    reviewCount: 512,
    flowLevel: 3,
    flowLabel: 'Complete Hygiene Kit',
    description: 'The ultimate hygiene box containing everything a woman needs for monthly period care and travel toilet safety.',
    longDescription: 'Everything you need in one box. Contains 14 Makeasy Classic Cotton Pads, 10 HaPee Female Urination Devices, 10 Air-Touch Liners, plus a travel hygiene pouch.',
    image: '/images/card-sanitary-napkin.png',
    secondaryImage: '/images/card-pee-device.png',
    gallery: [
      '/images/card-sanitary-napkin.png',
      '/images/card-pee-device.png',
      '/images/mother-daughter.png'
    ],
    features: [
      '34 Total Hygiene & Care Items',
      'Includes Waterproof Travel Pouch',
      'Free Educational UTI Prevention Guide'
    ],
    materials: ['100% Cotton Pads', 'Coated Paperboard PeeDevices', 'Canvas Pouch'],
    isOrganic: true,
    isBestseller: true,
    isNew: true,
    variants: [
      { id: 'v1', name: '1 Month Hygiene Box', count: 34 },
      { id: 'v2', name: '3 Months Hygiene Supply', count: 102 }
    ],
    absorbencyNotes: 'Covers light, medium, heavy daytime, overnight, and travel hygiene.',
    dimensions: 'Full Hygiene Box (34 Items)'
  }
];
