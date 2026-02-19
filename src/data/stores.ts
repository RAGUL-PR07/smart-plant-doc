import { Store } from '../types';

export const stores: Store[] = [
  // Chennai District
  {
    id: 'store-001',
    name: 'Green Valley Agro Center',
    location: 'T Nagar',
    district: 'Chennai',
    phone: '+91 9876543210',
    hours: '8:00 AM - 8:00 PM',
    specialties: ['Fungicides', 'Insecticides', 'Organic fertilizers', 'Seeds'],
    rating: 4.5,
    distance: 2.3
  },
  {
    id: 'store-002',
    name: 'Tamil Nadu Agri Supplies',
    location: 'Perambur',
    district: 'Chennai',
    phone: '+91 9876543211',
    hours: '7:00 AM - 9:00 PM',
    specialties: ['Pesticides', 'Herbicides', 'Plant nutrients', 'Farm equipment'],
    rating: 4.2,
    distance: 5.1
  },
  {
    id: 'store-003',
    name: 'Modern Farm Store',
    location: 'Adyar',
    district: 'Chennai',
    phone: '+91 9876543212',
    hours: '8:30 AM - 7:30 PM',
    specialties: ['Bio-fertilizers', 'Nematicides', 'Growth regulators'],
    rating: 4.7,
    distance: 3.8
  },

  // Coimbatore District
  {
    id: 'store-004',
    name: 'Kovai Agro Mart',
    location: 'RS Puram',
    district: 'Coimbatore',
    phone: '+91 9876543213',
    hours: '7:30 AM - 8:30 PM',
    specialties: ['Cotton pesticides', 'Drip irrigation', 'Soil conditioners'],
    rating: 4.4,
    distance: 1.2
  },
  {
    id: 'store-005',
    name: 'Western Agri Solutions',
    location: 'Gandhipuram',
    district: 'Coimbatore',
    phone: '+91 9876543214',
    hours: '8:00 AM - 8:00 PM',
    specialties: ['Fungicides', 'Bactericides', 'Micro nutrients'],
    rating: 4.3,
    distance: 2.7
  },

  // Madurai District
  {
    id: 'store-006',
    name: 'Meenakshi Agro Center',
    location: 'Anna Nagar',
    district: 'Madurai',
    phone: '+91 9876543215',
    hours: '8:00 AM - 7:00 PM',
    specialties: ['Rice chemicals', 'Weed control', 'Plant protection'],
    rating: 4.1,
    distance: 4.2
  },
  {
    id: 'store-007',
    name: 'Pandya Agri Stores',
    location: 'Sellur',
    district: 'Madurai',
    phone: '+91 9876543216',
    hours: '7:00 AM - 8:00 PM',
    specialties: ['Organic inputs', 'Biocontrol agents', 'Vermicompost'],
    rating: 4.6,
    distance: 6.1
  },

  // Tiruchirappalli District
  {
    id: 'store-008',
    name: 'Trichy Agricultural Hub',
    location: 'Cantonment',
    district: 'Tiruchirappalli',
    phone: '+91 9876543217',
    hours: '8:00 AM - 8:00 PM',
    specialties: ['Paddy chemicals', 'Fertilizers', 'Spraying equipment'],
    rating: 4.2,
    distance: 3.4
  },

  // Salem District
  {
    id: 'store-009',
    name: 'Salem Crop Care',
    location: 'New Fairlands',
    district: 'Salem',
    phone: '+91 9876543218',
    hours: '8:30 AM - 7:30 PM',
    specialties: ['Mango pesticides', 'Fruit care', 'Post-harvest chemicals'],
    rating: 4.3,
    distance: 2.9
  },
  {
    id: 'store-010',
    name: 'Steel City Agro Mart',
    location: 'Swarnapuri',
    district: 'Salem',
    phone: '+91 9876543219',
    hours: '7:30 AM - 8:00 PM',
    specialties: ['Vegetable seeds', 'Greenhouse supplies', 'Drip systems'],
    rating: 4.5,
    distance: 5.3
  },

  // Tirunelveli District
  {
    id: 'store-011',
    name: 'Nellai Agri World',
    location: 'Palayamkottai',
    district: 'Tirunelveli',
    phone: '+91 9876543220',
    hours: '8:00 AM - 7:30 PM',
    specialties: ['Coconut fertilizers', 'Palm care', 'Plantation chemicals'],
    rating: 4.1,
    distance: 7.2
  },

  // Vellore District
  {
    id: 'store-012',
    name: 'Vellore Farm Solutions',
    location: 'Gandhi Nagar',
    district: 'Vellore',
    phone: '+91 9876543221',
    hours: '8:00 AM - 8:00 PM',
    specialties: ['Groundnut chemicals', 'Soil testing', 'Custom spraying'],
    rating: 4.4,
    distance: 4.6
  },

  // Erode District
  {
    id: 'store-013',
    name: 'Erode Turmeric Agro',
    location: 'Perundurai Road',
    district: 'Erode',
    phone: '+91 9876543222',
    hours: '7:00 AM - 8:30 PM',
    specialties: ['Turmeric cultivation', 'Spice crop care', 'Rhizome treatment'],
    rating: 4.7,
    distance: 3.1
  },

  // Thanjavur District
  {
    id: 'store-014',
    name: 'Tanjore Rice Hub',
    location: 'Medical College Road',
    district: 'Thanjavur',
    phone: '+91 9876543223',
    hours: '8:00 AM - 7:00 PM',
    specialties: ['Paddy expertise', 'Water management', 'Rice pest control'],
    rating: 4.3,
    distance: 2.8
  },

  // Kanchipuram District
  {
    id: 'store-015',
    name: 'Kanchi Agro Services',
    location: 'Pillaiyarpalayam',
    district: 'Kanchipuram',
    phone: '+91 9876543224',
    hours: '8:30 AM - 7:30 PM',
    specialties: ['Silk mulberry', 'Sericulture supplies', 'Leaf diseases'],
    rating: 4.2,
    distance: 6.7
  },

  // Krishnagiri District
  {
    id: 'store-016',
    name: 'KGF Horticulture Center',
    location: 'Hosur Road',
    district: 'Krishnagiri',
    phone: '+91 9876543225',
    hours: '7:30 AM - 8:00 PM',
    specialties: ['Mango orchards', 'Grape cultivation', 'Fruit tree care'],
    rating: 4.6,
    distance: 4.9
  },

  // Dindigul District
  {
    id: 'store-017',
    name: 'Dindigul Farm Care',
    location: 'Begampet',
    district: 'Dindigul',
    phone: '+91 9876543226',
    hours: '8:00 AM - 7:00 PM',
    specialties: ['Banana cultivation', 'Flower crops', 'Greenhouse farming'],
    rating: 4.1,
    distance: 8.3
  },

  // Karur District
  {
    id: 'store-018',
    name: 'Karur Agri Tech',
    location: 'Thanthoni Road',
    district: 'Karur',
    phone: '+91 9876543227',
    hours: '8:00 AM - 8:00 PM',
    specialties: ['Coconut palm care', 'Betel cultivation', 'Organic farming'],
    rating: 4.4,
    distance: 5.8
  },

  // Tiruppur District
  {
    id: 'store-019',
    name: 'Tiruppur Cotton Care',
    location: 'Avinashi Road',
    district: 'Tiruppur',
    phone: '+91 9876543228',
    hours: '7:00 AM - 8:30 PM',
    specialties: ['Cotton cultivation', 'Textile crop care', 'Bollworm control'],
    rating: 4.5,
    distance: 3.7
  },

  // Villupuram District
  {
    id: 'store-020',
    name: 'Villupuram Agri Depot',
    location: 'Bus Stand Road',
    district: 'Viluppuram',
    phone: '+91 9876543229',
    hours: '8:00 AM - 7:30 PM',
    specialties: ['Sugarcane care', 'Cashew cultivation', 'Plantation crops'],
    rating: 4.2,
    distance: 7.5
  }
];