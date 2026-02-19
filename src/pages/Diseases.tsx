import React, { useState } from 'react';
import { Search, Leaf, Bug, Brush as Virus, Zap } from 'lucide-react';
import { diseases } from '../data/diseases';
import DiseaseCard from '../components/DiseaseCard';

const Diseases: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Diseases', icon: Leaf, color: 'gray' },
    { id: 'fungal', name: 'Fungal', icon: Leaf, color: 'green' },
    { id: 'bacterial', name: 'Bacterial', icon: Bug, color: 'blue' },
    { id: 'viral', name: 'Viral', icon: Virus, color: 'red' },
    { id: 'nematode', name: 'Nematode', icon: Bug, color: 'orange' },
    { id: 'phytoplasma', name: 'Phytoplasma', icon: Zap, color: 'purple' },
    { id: 'oomycete', name: 'Oomycete', icon: Leaf, color: 'teal' },
    { id: 'abiotic', name: 'Abiotic', icon: Zap, color: 'yellow' }
  ];

  const filteredDiseases = diseases.filter(disease => {
    const matchesSearch = disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         disease.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || disease.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Plant Disease Guide</h1>
        <p className="text-lg text-gray-600 mb-8">
          Comprehensive database of plant diseases with symptoms, treatments, and prevention methods
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 space-y-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search diseases..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? `bg-${category.color}-600 text-white shadow-md`
                    : `bg-${category.color}-50 text-${category.color}-700 hover:bg-${category.color}-100`
                }`}
              >
                <IconComponent className="h-4 w-4" />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Disease Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDiseases.map((disease) => (
          <DiseaseCard key={disease.id} disease={disease} />
        ))}
      </div>

      {filteredDiseases.length === 0 && (
        <div className="text-center py-12">
          <Leaf className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No diseases found</h3>
          <p className="text-gray-500">Try adjusting your search terms or category filter</p>
        </div>
      )}
    </div>
  );
};

export default Diseases;