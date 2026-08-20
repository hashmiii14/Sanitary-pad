import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'luna-daily-organic',
    name: 'Luna Daily Organic',
    tagline: 'Ultra-thin regular pads for everyday flow and lightweight comfort.',
    category: 'regular',
    categoryLabel: 'Regular Flow',
    rating: 4.9,
    reviewCount: 324,
    flowLevel: 2,
    flowLabel: 'Regular Flow (240mm)',
    description: 'Engineered with a 100% organic cotton top sheet and a super-absorbent core that locks in fluid in seconds without bulk.',
    longDescription: 'Luna Daily Organic pads provide invisible protection for moderate flow days. Crafted with 100% GOTS-certified organic Texas cotton, our wing design stays firmly in place whether you are working out or lounging at home. Hypoallergenic, chlorine-free, and 100% biodegradable core.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '100% GOTS-Certified Organic Cotton Top Sheet',
      'LeakLock™ 3D Side Barriers to Prevent Edge Leakage',
      'Ultra-thin 2mm Profile for Maximum Discretion',
      'Chlorine-Free & Fragrance-Free Guarantee',
      'Flexible Ergonomic Wings'
    ],
    materials: ['Organic Cotton Top Sheet', 'Sustainable Elemental Chlorine-Free Wood Pulp', 'Bio-Based Leakproof Backsheet', 'Non-Toxic Food-Grade Adhesive'],
    isOrganic: true,
    isBestseller: true,
    variants: [
      { id: 'v1', name: 'Pack of 10 Pads', count: 10 },
      { id: 'v2', name: 'Box of 24 Pads', count: 24 },
      { id: 'v3', name: 'Bundle 3-Pack (30 Pads)', count: 30 }
    ],
    absorbencyNotes: 'Holds up to 40ml of liquid. Suitable for days 2 to 5.',
    dimensions: 'Length: 240mm | Thickness: 2mm | Width: 70mm'
  },
  {
    id: 'luna-ultra-night',
    name: 'Luna Ultra Night Wings',
    tagline: 'Extra long 330mm overnight protection for 12 hours of worry-free sleep.',
    category: 'overnight',
    categoryLabel: 'Overnight Flow',
    rating: 4.95,
    reviewCount: 488,
    flowLevel: 5,
    flowLabel: 'Super Heavy Overnight (330mm)',
    description: 'Extra-wide flared back design offers complete 360° coverage for side and back sleepers during heavy night flows.',
    longDescription: 'Sleep peacefully without worrying about leaks. Luna Ultra Night Wings combines a 40% wider flared tail with dual micro-channels that trap liquid instantaneously. Gentle against sensitive skin with zero harsh chemicals.',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Extended 330mm Length for Full Coverage',
      'Flared Back Tail Protects Bed Linens',
      '12-Hour Continuous Leak Guard',
      'Double Flexing Secure Wings',
      'Velvety Organic Soft Touch'
    ],
    materials: ['Organic Cotton Top Sheet', 'Super Absorbent Polymer (SAP) Core', 'Breathable Non-Woven Polyethylene', 'Medical-Grade Safe Adhesive'],
    isOrganic: true,
    isBestseller: true,
    variants: [
      { id: 'v1', name: 'Pack of 8 Night Pads', count: 8 },
      { id: 'v2', name: 'Box of 20 Night Pads', count: 20 },
      { id: 'v3', name: 'Night Owl 3-Pack (24 Pads)', count: 24 }
    ],
    absorbencyNotes: 'Holds up to 80ml of liquid. Ideal for heavy overnight flow.',
    dimensions: 'Length: 330mm | Thickness: 3mm | Flared Tail Width: 120mm'
  },
  {
    id: 'luna-heavy-flow-max',
    name: 'Luna Heavy Flow Max',
    tagline: 'High-absorbency day pads for peak flow days and active movement.',
    category: 'heavy',
    categoryLabel: 'Heavy Flow',
    rating: 4.85,
    reviewCount: 215,
    flowLevel: 4,
    flowLabel: 'Heavy Day Flow (280mm)',
    description: 'Designed specifically for Day 1 and Day 2 peak flow with reinforced core micro-tubes that pull wetness away from your skin.',
    longDescription: 'Feel completely secure even on your heaviest days. Luna Heavy Flow Max features quick-wicking technology that instantly converts liquid into gel, keeping your surface completely dry and fresh for hours.',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '280mm High-Capacity Contour Shape',
      'RapidDry Gel Technology',
      'Soft Wings Prevent Side Friction',
      'Breathable Lower Membrane Keeps Skin Cool',
      'Zero Synthetic Fragrance or Dyes'
    ],
    materials: ['GOTS Certified Organic Cotton', 'Plant-Derived Absorbent Core', 'Micro-porous Air Flow Sheet'],
    isOrganic: true,
    variants: [
      { id: 'v1', name: 'Pack of 10 Heavy Pads', count: 10 },
      { id: 'v2', name: 'Box of 24 Heavy Pads', count: 24 }
    ],
    absorbencyNotes: 'Holds up to 60ml of liquid. Perfect for heavy daytime flow.',
    dimensions: 'Length: 280mm | Thickness: 2.5mm | Width: 75mm'
  },
  {
    id: 'luna-bamboo-liners',
    name: 'Luna Air-Touch Liners',
    tagline: 'Featherlight daily liners for pre/post-period freshness and daily discharge.',
    category: 'liners',
    categoryLabel: 'Panty Liners',
    rating: 4.88,
    reviewCount: 192,
    flowLevel: 1,
    flowLabel: 'Featherlight (155mm)',
    description: 'Ultra-thin, breathable organic liners so light you will forget you are wearing them.',
    longDescription: 'Designed for everyday confidence, ovulation discharge, or light spotting. Our Air-Touch Liners feature a micro-perforated cotton sheet that allows your skin to breathe naturally, eliminating odor-causing moisture.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '1mm Ultra-Flexible Contour fit',
      'Individually Paper-Wrapped for On-the-Go',
      'Hypoallergenic Dermatologist Approved',
      'Breathable Air-Permeable Backing',
      'Fits All Underwear Styles'
    ],
    materials: ['100% Organic Cotton Cover Sheet', 'Air-Laid Paper Core', 'Food-Grade Adhesive'],
    isOrganic: true,
    variants: [
      { id: 'v1', name: 'Box of 24 Liners', count: 24 },
      { id: 'v2', name: 'Value Box of 50 Liners', count: 50 }
    ],
    absorbencyNotes: 'Holds up to 15ml of liquid. Ideal for daily freshness.',
    dimensions: 'Length: 155mm | Thickness: 1mm | Width: 60mm'
  },
  {
    id: 'luna-starter-kit',
    name: 'Luna First Period & Cycle Starter Box',
    tagline: 'Complete care curated box featuring Day, Night, Heavy Pads & Organic Liners.',
    category: 'starter-kits',
    categoryLabel: 'Starter Kits',
    rating: 4.98,
    reviewCount: 512,
    flowLevel: 3,
    flowLabel: 'All-Flow Combination Box',
    description: 'The ultimate cycle companion box containing everything you need for your entire monthly period.',
    longDescription: 'Take the guesswork out of period care. Our Starter Box contains 10 Daily Organic Pads, 8 Heavy Flow Max Pads, 6 Ultra Night Wings, and 12 Air-Touch Liners, plus a waterproof travel pouch and a bonus soothing heat patch sample.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      '36 Total Organic Period Care Items',
      'Includes Canvas Organic Storage Pouch',
      'Free Herbal Heating Patch Included',
      'Educational Cycle Tracker & Guide Included'
    ],
    materials: ['Assorted Organic Cotton Pads & Liners', 'Organic Canvas Storage Pouch'],
    isOrganic: true,
    isBestseller: true,
    isNew: true,
    variants: [
      { id: 'v1', name: '1 Month Starter Kit Box', count: 36 },
      { id: 'v2', name: '3 Months Supply Box', count: 108 }
    ],
    absorbencyNotes: 'Covers light, medium, heavy daytime and overnight flow.',
    dimensions: 'Full Cycle Box (36 Items)'
  },
  {
    id: 'luna-active-flex',
    name: 'Luna Active-Flex Sports Pads',
    tagline: '3D motion-adaptive pads designed for workout, yoga, and active lifestyles.',
    category: 'regular',
    categoryLabel: 'Regular Flow',
    rating: 4.89,
    reviewCount: 178,
    flowLevel: 3,
    flowLabel: 'Active Medium Flow (260mm)',
    description: 'Stays 100% in place during high-impact movement with dynamic memory-channel grooves.',
    longDescription: 'Don’t let your period slow you down. Luna Active-Flex features dynamic wing grips and micro-grooves that flex with your body posture during running, Pilates, cycling, or gym sessions.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Flexi-Fit Memory Channel Grooves',
      'Anti-Bunching Structural Core',
      'Sweat-Wicking Breathable Border',
      'Ultra Grip Multi-Tab Wings',
      'Friction-Free Organic Surface'
    ],
    materials: ['Organic Cotton Layer', 'Flexible Cellulosic Matrix', 'Breathable Active Backing'],
    isOrganic: true,
    variants: [
      { id: 'v1', name: 'Pack of 12 Active Pads', count: 12 },
      { id: 'v2', name: 'Box of 24 Active Pads', count: 24 }
    ],
    absorbencyNotes: 'Holds up to 45ml during intense physical exercise.',
    dimensions: 'Length: 260mm | Thickness: 2mm | Width: 72mm'
  },
  {
    id: 'luna-charcoal-detox',
    name: 'Luna Bamboo Charcoal Pure',
    tagline: 'Natural odor-neutralizing bamboo charcoal infused organic pad.',
    category: 'heavy',
    categoryLabel: 'Heavy Flow',
    rating: 4.91,
    reviewCount: 142,
    flowLevel: 4,
    flowLabel: 'Heavy Flow + Odor Lock (290mm)',
    description: 'Activated bamboo charcoal core naturally eliminates odor without synthetic perfumes or chemicals.',
    longDescription: 'Pure freshness from nature. Infused with natural activated bamboo charcoal micro-fibers, this pad traps odors organically while maintaining gentle biocompatibility with intimate skin balance.',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Activated Bamboo Charcoal Core',
      '100% Natural Odor Neutralization',
      'pH-Balanced Surface Layer',
      'Eco-Friendly Biodegradable Wrapping',
      'Extra Wide Side Wings'
    ],
    materials: ['Organic Cotton Top Sheet', 'Activated Bamboo Charcoal Fibers', 'Plant Pulp Core'],
    isOrganic: true,
    isNew: true,
    variants: [
      { id: 'v1', name: 'Pack of 10 Charcoal Pads', count: 10 },
      { id: 'v2', name: 'Box of 20 Charcoal Pads', count: 20 }
    ],
    absorbencyNotes: 'Holds up to 65ml. Superior natural odor lock.',
    dimensions: 'Length: 290mm | Thickness: 2.5mm | Width: 75mm'
  },
  {
    id: 'luna-postpartum-max',
    name: 'Luna Postpartum & Maternity Care',
    tagline: 'Extra gentle, maximum capacity cushion pads for postpartum & recovery care.',
    category: 'overnight',
    categoryLabel: 'Maternity & Postpartum',
    rating: 4.97,
    reviewCount: 310,
    flowLevel: 5,
    flowLabel: 'Maternity Super Heavy (360mm)',
    description: 'Cloud-soft plush organic cotton top layer designed for post-birth recovery and maximum comfort.',
    longDescription: 'Created in collaboration with midwives and gynecologists, Luna Postpartum pads offer gentle, cloud-soft cushioning with a 360mm ultra-absorbent core that protects tender tissue without causing chafing or friction.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Ultra Soft Pillow-Touch Surface',
      '360mm Extended Postpartum Coverage',
      'Gynecologist Approved for Sensitive Recovery',
      'Non-Irritating Organic Weave',
      'Holds 100ml+ Liquid Volume'
    ],
    materials: ['Unbleached Organic Cotton Cushion', 'Absorbent Cellulosic Core', 'Bio-Membrane Guard'],
    isOrganic: true,
    variants: [
      { id: 'v1', name: 'Pack of 10 Postpartum Pads', count: 10 },
      { id: 'v2', name: 'Box of 20 Postpartum Pads', count: 20 }
    ],
    absorbencyNotes: 'Holds over 100ml liquid capacity. Ideal for postpartum weeks 1 to 4.',
    dimensions: 'Length: 360mm | Cushion Thickness: 4mm | Flared Back: 140mm'
  }
];
