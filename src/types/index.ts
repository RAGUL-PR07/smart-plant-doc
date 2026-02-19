export interface Disease {
  id: string;
  name: string;
  category: 'fungal' | 'bacterial' | 'viral' | 'nematode' | 'phytoplasma' | 'oomycete' | 'abiotic';
  description: string;
  symptoms: string[];
  affectedPlants: string[];
  treatment: {
    medicines: Medicine[];
    prevention: string[];
  };
  severity: 'low' | 'medium' | 'high';
}

export interface Medicine {
  name: string;
  type: 'fungicide' | 'bactericide' | 'insecticide' | 'organic' | 'chemical';
  dosage: string;
  instructions: string;
}

export interface Store {
  id: string;
  name: string;
  location: string;
  district: string;
  phone: string;
  hours: string;
  specialties: string[];
  rating: number;
  distance: number;
}

export interface DetectionResult {
  disease: string;
  confidence: number;
  severity: 'low' | 'medium' | 'high';
  treatment: {
    medicines: Medicine[];
    prevention: string[];
  };
}