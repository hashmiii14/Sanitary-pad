export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  comment: string;
  rating: number;
  productName: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Pooja Kapoor',
    role: 'Software Engineer',
    location: 'Faridabad, India',
    avatar: '/images/avatar-pooja.jpg',
    comment: 'I am a frequent traveller, who encounters the problem of unhygienic toilets everywhere right from Railways to Airports and from Offices to Multiplexes. Makeasy Pee Devices is a great solution to this problem highly recommended for working women.',
    rating: 5,
    productName: 'Makeasy HaPee PeeDevice'
  },
  {
    id: 't2',
    name: 'Ananya Sharma',
    role: 'Marketing Manager & Fitness Enthusiast',
    location: 'New Delhi, India',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    comment: 'Switching to Makeasy 100% cotton pads completely eliminated period rashes for me. The XL+ wings keep my bed linens spotless even on peak flow nights.',
    rating: 5,
    productName: 'Makeasy Classic Care Sanitary Napkins'
  },
  {
    id: 't3',
    name: 'Ritu Verma',
    role: 'Healthcare Consultant',
    location: 'Bengaluru, India',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    comment: 'As a medical professional, I appreciate the zero-toxin, unbleached cotton formulation. It gives women total peace of mind and genuine everyday comfort.',
    rating: 5,
    productName: 'Makeasy Complete Hygiene Box'
  }
];
