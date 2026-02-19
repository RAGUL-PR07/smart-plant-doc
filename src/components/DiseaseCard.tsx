import React from 'react';
import { AlertTriangle, Leaf, Bug, Brush as Virus, Zap } from 'lucide-react';
import { Disease } from '../types';

interface DiseaseCardProps {
  disease: Disease;
}

const DiseaseCard: React.FC<DiseaseCardProps> = ({ disease }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'fungal':
        return <Leaf className="h-5 w-5" />;
      case 'bacterial':
        return <Bug className="h-5 w-5" />;
      case 'viral':
        return <Virus className="h-5 w-5" />;
      case 'nematode':
        return <Bug className="h-5 w-5" />;
      case 'phytoplasma':
        return <Zap className="h-5 w-5" />;
      case 'oomycete':
        return <Leaf className="h-5 w-5" />;
      case 'abiotic':
        return <AlertTriangle className="h-5 w-5" />;
      default:
        return <Leaf className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'fungal':
        return 'green';
      case 'bacterial':
        return 'blue';
      case 'viral':
        return 'red';
      case 'nematode':
        return 'orange';
      case 'phytoplasma':
        return 'purple';
      case 'oomycete':
        return 'teal';
      case 'abiotic':
        return 'yellow';
      default:
        return 'gray';
    }
  };

  const color = getCategoryColor(disease.category);

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex-1">{disease.name}</h3>
        <span className={`flex items-center space-x-1 bg-${color}-100 text-${color}-700 px-2 py-1 rounded-full text-xs font-medium`}>
          {getCategoryIcon(disease.category)}
          <span className="capitalize">{disease.category}</span>
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{disease.description}</p>

      <div className="space-y-3">
        <div>
          <h4 className="font-medium text-gray-800 mb-2">Symptoms:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {disease.symptoms.slice(0, 3).map((symptom, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                <span>{symptom}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium text-gray-800 mb-2">Affected Plants:</h4>
          <div className="flex flex-wrap gap-1">
            {disease.affectedPlants.slice(0, 4).map((plant, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                {plant}
              </span>
            ))}
            {disease.affectedPlants.length > 4 && (
              <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                +{disease.affectedPlants.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiseaseCard;