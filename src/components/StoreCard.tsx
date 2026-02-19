import React from 'react';
import { MapPin, Phone, Clock, Navigation, Star } from 'lucide-react';
import { Store } from '../types';

interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  const handleCall = () => {
    window.open(`tel:${store.phone}`, '_self');
  };

  const handleDirections = () => {
    const query = encodeURIComponent(`${store.name}, ${store.location}, ${store.district}, Tamil Nadu`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex-1">{store.name}</h3>
        <div className="flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-medium text-gray-700">{store.rating}</span>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-start space-x-2">
          <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-gray-600">{store.location}, {store.district}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
          <span className="text-sm text-gray-600">{store.phone}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-gray-500 flex-shrink-0" />
          <span className="text-sm text-gray-600">{store.hours}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="font-medium text-gray-800 mb-2">Specialties:</h4>
        <div className="flex flex-wrap gap-1">
          {store.specialties.slice(0, 3).map((specialty, index) => (
            <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">
              {specialty}
            </span>
          ))}
          {store.specialties.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              +{store.specialties.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="flex space-x-2">
        <button 
          onClick={handleCall}
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex-1 justify-center text-sm"
        >
          <Phone className="h-4 w-4" />
          <span>Call</span>
        </button>
        
        <button 
          onClick={handleDirections}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center text-sm"
        >
          <Navigation className="h-4 w-4" />
          <span>Directions</span>
        </button>
      </div>

      <div className="mt-3 text-center">
        <span className="text-xs text-gray-500">{store.distance} km away</span>
      </div>
    </div>
  );
};

export default StoreCard;