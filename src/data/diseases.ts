import { Disease } from '../types';

export const diseases: Disease[] = [
  // Fungal Diseases
  {
    id: 'powdery-mildew',
    name: 'Powdery Mildew',
    category: 'fungal',
    description: 'White powdery spots that appear on leaves, stems, and sometimes fruits. This fungal disease thrives in warm, dry conditions.',
    symptoms: [
      'White powdery coating on leaves',
      'Yellowing and browning of affected leaves',
      'Stunted plant growth',
      'Premature leaf drop',
      'Reduced fruit quality'
    ],
    affectedPlants: ['Tomato', 'Cucumber', 'Grapes', 'Roses', 'Zucchini', 'Pumpkin'],
    treatment: {
      medicines: [
        {
          name: 'Myclobutanil',
          type: 'fungicide',
          dosage: '2ml per liter of water',
          instructions: 'Spray every 7-10 days during infection period'
        },
        {
          name: 'Potassium Bicarbonate',
          type: 'organic',
          dosage: '5g per liter of water',
          instructions: 'Apply as preventive spray weekly'
        }
      ],
      prevention: [
        'Ensure good air circulation around plants',
        'Avoid overhead watering',
        'Remove infected plant debris',
        'Apply preventive fungicide sprays'
      ]
    },
    severity: 'medium'
  },
  {
    id: 'downy-mildew',
    name: 'Downy Mildew',
    category: 'fungal',
    description: 'Yellow or white patches that appear on the undersides of leaves, often accompanied by fuzzy growth.',
    symptoms: [
      'Yellow patches on upper leaf surface',
      'White or gray fuzzy growth on leaf undersides',
      'Leaf yellowing and wilting',
      'Brown leaf spots',
      'Plant stunting'
    ],
    affectedPlants: ['Lettuce', 'Spinach', 'Onions', 'Grapes', 'Cucumbers'],
    treatment: {
      medicines: [
        {
          name: 'Copper Oxychloride',
          type: 'fungicide',
          dosage: '3g per liter of water',
          instructions: 'Spray at first sign of disease, repeat every 7 days'
        },
        {
          name: 'Mancozeb',
          type: 'fungicide',
          dosage: '2.5g per liter of water',
          instructions: 'Apply preventively during humid conditions'
        }
      ],
      prevention: [
        'Improve air circulation',
        'Water at soil level',
        'Remove infected leaves immediately',
        'Use resistant varieties when available'
      ]
    },
    severity: 'high'
  },
  {
    id: 'rust-disease',
    name: 'Rust Disease',
    category: 'fungal',
    description: 'Orange, red, or brown pustules that appear on leaves, reducing photosynthesis and plant vigor.',
    symptoms: [
      'Orange or rust-colored pustules on leaves',
      'Yellow spots on upper leaf surface',
      'Premature leaf drop',
      'Weakened plant growth',
      'Black spores in advanced stages'
    ],
    affectedPlants: ['Wheat', 'Coffee', 'Beans', 'Corn', 'Roses'],
    treatment: {
      medicines: [
        {
          name: 'Propiconazole',
          type: 'fungicide',
          dosage: '1ml per liter of water',
          instructions: 'Apply at first sign of infection'
        },
        {
          name: 'Sulfur Dust',
          type: 'organic',
          dosage: 'Dust infected areas',
          instructions: 'Apply during cool morning hours'
        }
      ],
      prevention: [
        'Plant resistant varieties',
        'Remove infected plant debris',
        'Ensure proper plant spacing',
        'Apply preventive fungicide during humid seasons'
      ]
    },
    severity: 'high'
  },

  // Bacterial Diseases
  {
    id: 'bacterial-wilt',
    name: 'Bacterial Wilt',
    category: 'bacterial',
    description: 'Caused by Ralstonia solanacearum, this disease causes rapid wilting and death of plants.',
    symptoms: [
      'Sudden wilting of leaves',
      'Brown discoloration of vascular tissue',
      'Stunted growth',
      'Yellowing of lower leaves',
      'Plant death in severe cases'
    ],
    affectedPlants: ['Tomato', 'Potato', 'Eggplant', 'Pepper', 'Banana'],
    treatment: {
      medicines: [
        {
          name: 'Streptomycin Sulfate',
          type: 'bactericide',
          dosage: '1g per liter of water',
          instructions: 'Apply as soil drench and foliar spray'
        },
        {
          name: 'Copper Hydroxide',
          type: 'bactericide',
          dosage: '2g per liter of water',
          instructions: 'Spray weekly during disease season'
        }
      ],
      prevention: [
        'Use disease-free planting material',
        'Practice crop rotation',
        'Improve soil drainage',
        'Remove and destroy infected plants immediately'
      ]
    },
    severity: 'high'
  },
  {
    id: 'bacterial-blight',
    name: 'Bacterial Blight',
    category: 'bacterial',
    description: 'Angular leaf spots with water-soaked appearance, often affecting rice and other crops.',
    symptoms: [
      'Water-soaked lesions on leaves',
      'Angular brown spots',
      'Yellowing around lesions',
      'Premature leaf drop',
      'Reduced grain quality in cereals'
    ],
    affectedPlants: ['Rice', 'Cotton', 'Beans', 'Citrus', 'Pomegranate'],
    treatment: {
      medicines: [
        {
          name: 'Copper Oxychloride',
          type: 'bactericide',
          dosage: '3g per liter of water',
          instructions: 'Spray at weekly intervals'
        },
        {
          name: 'Kasugamycin',
          type: 'bactericide',
          dosage: '2ml per liter of water',
          instructions: 'Apply during early infection stage'
        }
      ],
      prevention: [
        'Use certified disease-free seeds',
        'Avoid overhead irrigation',
        'Practice field sanitation',
        'Apply copper-based preventive sprays'
      ]
    },
    severity: 'medium'
  },

  // Viral Diseases
  {
    id: 'tobacco-mosaic-virus',
    name: 'Tobacco Mosaic Virus (TMV)',
    category: 'viral',
    description: 'Creates characteristic mosaic pattern on leaves with alternating light and dark green areas.',
    symptoms: [
      'Mosaic pattern on leaves',
      'Light and dark green mottling',
      'Leaf distortion',
      'Stunted plant growth',
      'Reduced fruit yield'
    ],
    affectedPlants: ['Tobacco', 'Tomato', 'Pepper', 'Cucumber', 'Beans'],
    treatment: {
      medicines: [
        {
          name: 'Imidacloprid',
          type: 'insecticide',
          dosage: '0.5ml per liter of water',
          instructions: 'Control vector insects that spread virus'
        },
        {
          name: 'Neem Oil',
          type: 'organic',
          dosage: '5ml per liter of water',
          instructions: 'Spray to repel virus-carrying insects'
        }
      ],
      prevention: [
        'Remove infected plants immediately',
        'Control aphids and other vectors',
        'Use virus-free planting material',
        'Disinfect tools between plants'
      ]
    },
    severity: 'high'
  },
  {
    id: 'tomato-yellow-leaf-curl',
    name: 'Tomato Yellow Leaf Curl Virus',
    category: 'viral',
    description: 'Causes severe stunting and curling of tomato leaves, transmitted by whiteflies.',
    symptoms: [
      'Upward curling of leaves',
      'Yellowing of leaf margins',
      'Stunted plant growth',
      'Reduced fruit production',
      'Small, distorted fruits'
    ],
    affectedPlants: ['Tomato', 'Chili', 'Tobacco', 'Bean'],
    treatment: {
      medicines: [
        {
          name: 'Thiamethoxam',
          type: 'insecticide',
          dosage: '0.3g per liter of water',
          instructions: 'Control whitefly vectors'
        },
        {
          name: 'Reflective Mulch',
          type: 'organic',
          dosage: 'Apply around plants',
          instructions: 'Use silver reflective mulch to repel whiteflies'
        }
      ],
      prevention: [
        'Use whitefly-resistant varieties',
        'Install yellow sticky traps',
        'Remove weeds that harbor whiteflies',
        'Use protective nets during early growth'
      ]
    },
    severity: 'high'
  },

  // Nematode Diseases
  {
    id: 'root-knot-nematode',
    name: 'Root-Knot Nematode',
    category: 'nematode',
    description: 'Microscopic roundworms that create characteristic galls or knots on plant roots.',
    symptoms: [
      'Galls or knots on roots',
      'Stunted plant growth',
      'Yellowing of leaves',
      'Wilting despite adequate moisture',
      'Reduced fruit yield'
    ],
    affectedPlants: ['Tomato', 'Cucumber', 'Carrot', 'Okra', 'Eggplant'],
    treatment: {
      medicines: [
        {
          name: 'Carbofuran',
          type: 'chemical',
          dosage: '2kg per hectare',
          instructions: 'Apply as soil treatment before planting'
        },
        {
          name: 'Neem Cake',
          type: 'organic',
          dosage: '200kg per hectare',
          instructions: 'Mix into soil before planting'
        }
      ],
      prevention: [
        'Practice crop rotation with non-host plants',
        'Use nematode-resistant varieties',
        'Solarize soil before planting',
        'Add organic matter to improve soil health'
      ]
    },
    severity: 'medium'
  },

  // Phytoplasma Diseases
  {
    id: 'aster-yellows',
    name: 'Aster Yellows',
    category: 'phytoplasma',
    description: 'Wall-less bacteria-like organisms causing yellowing and stunting in many crops.',
    symptoms: [
      'Yellowing of entire plant',
      'Stunted growth',
      'Abnormal flower development',
      'Witches broom effect',
      'Premature senescence'
    ],
    affectedPlants: ['Aster', 'Lettuce', 'Carrot', 'Celery', 'Tomato'],
    treatment: {
      medicines: [
        {
          name: 'Oxytetracycline',
          type: 'bactericide',
          dosage: '1g per liter of water',
          instructions: 'Inject into plant stem or apply as foliar spray'
        },
        {
          name: 'Malathion',
          type: 'insecticide',
          dosage: '2ml per liter of water',
          instructions: 'Control leafhopper vectors'
        }
      ],
      prevention: [
        'Control leafhopper populations',
        'Remove infected plants promptly',
        'Use insect-proof nets',
        'Eliminate weed hosts nearby'
      ]
    },
    severity: 'medium'
  },

  // Oomycete Diseases
  {
    id: 'late-blight',
    name: 'Late Blight',
    category: 'oomycete',
    description: 'Devastating disease caused by Phytophthora infestans, affecting potatoes and tomatoes.',
    symptoms: [
      'Dark, water-soaked lesions on leaves',
      'White fuzzy growth on leaf undersides',
      'Brown lesions on stems and fruits',
      'Rapid plant death in humid conditions',
      'Foul smell from infected tissues'
    ],
    affectedPlants: ['Potato', 'Tomato'],
    treatment: {
      medicines: [
        {
          name: 'Metalaxyl + Mancozeb',
          type: 'fungicide',
          dosage: '2.5g per liter of water',
          instructions: 'Apply at first sign of disease'
        },
        {
          name: 'Cymoxanil',
          type: 'fungicide',
          dosage: '1g per liter of water',
          instructions: 'Use in rotation with other fungicides'
        }
      ],
      prevention: [
        'Use certified disease-free seed potatoes',
        'Provide good air circulation',
        'Avoid overhead watering',
        'Apply preventive fungicide during humid weather'
      ]
    },
    severity: 'high'
  },

  // Abiotic Diseases
  {
    id: 'nitrogen-deficiency',
    name: 'Nitrogen Deficiency',
    category: 'abiotic',
    description: 'Nutritional disorder causing yellowing of older leaves due to insufficient nitrogen availability.',
    symptoms: [
      'Yellowing of older leaves first',
      'Stunted plant growth',
      'Pale green coloration',
      'Reduced leaf size',
      'Poor fruit development'
    ],
    affectedPlants: ['All crops', 'Vegetables', 'Fruits', 'Cereals'],
    treatment: {
      medicines: [
        {
          name: 'Urea',
          type: 'chemical',
          dosage: '20-30kg per hectare',
          instructions: 'Apply as soil application or foliar spray'
        },
        {
          name: 'Compost',
          type: 'organic',
          dosage: '5-10 tons per hectare',
          instructions: 'Apply before planting and top-dress during growth'
        }
      ],
      prevention: [
        'Regular soil testing',
        'Balanced fertilization program',
        'Use of organic matter',
        'Proper irrigation management'
      ]
    },
    severity: 'low'
  },
  {
    id: 'iron-deficiency',
    name: 'Iron Deficiency (Chlorosis)',
    category: 'abiotic',
    description: 'Nutritional disorder causing yellowing of young leaves while veins remain green.',
    symptoms: [
      'Yellowing between leaf veins',
      'Green veins on yellow leaves',
      'Affects young leaves first',
      'Reduced chlorophyll production',
      'Poor plant vigor'
    ],
    affectedPlants: ['Citrus', 'Grapes', 'Roses', 'Fruit trees'],
    treatment: {
      medicines: [
        {
          name: 'Iron Chelate (EDTA)',
          type: 'chemical',
          dosage: '2-3g per liter of water',
          instructions: 'Apply as foliar spray or soil drench'
        },
        {
          name: 'Ferrous Sulfate',
          type: 'chemical',
          dosage: '5g per liter of water',
          instructions: 'Apply to soil around plant base'
        }
      ],
      prevention: [
        'Maintain proper soil pH (6.0-7.0)',
        'Improve soil drainage',
        'Add organic matter to soil',
        'Avoid over-watering'
      ]
    },
    severity: 'low'
  }
];