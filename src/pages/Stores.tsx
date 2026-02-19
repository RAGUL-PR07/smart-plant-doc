import React, { useState } from 'react';
import { MapPin, Phone, Clock, Search, Navigation } from 'lucide-react';
import { stores } from '../data/stores';
import StoreCard from '../components/StoreCard';

const Stores: React.FC = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  const districts = [
    'all', 'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 
    'Tirunelveli', 'Vellore', 'Erode', 'Thoothukudi', 'Dindigul', 'Thanjavur',
    'Kanchipuram', 'Karur', 'Krishnagiri', 'Cuddalore', 'Viluppuram', 'Sivaganga',
    'Tiruvarur', 'Nagapattinam', 'Ramanathapuram', 'Pudukkottai', 'Dharmapuri',
    'Namakkal', 'Tiruvallur', 'Kanyakumari', 'Virudhunagar', 'Theni', 'Ariyalur',
    'Perambalur', 'Nilgiris', 'Kallakurichi', 'Chengalpattu', 'Tirupathur', 'Ranipet',
    'Tenkasi', 'Tiruppur', 'Mayiladuthurai'
  ];

  const filteredStores = stores.filter(store => {
    const matchesSearch = store.name.toLowerCase().includes(searchLocation.toLowerCase()) ||
                         store.location.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesDistrict = selectedDistrict === 'all' || store.district === selectedDistrict;
    
    return matchesSearch && matchesDistrict;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Agriculture Stores in Tamil Nadu</h1>
        <p className="text-lg text-gray-600 mb-8">
          Find nearby agriculture stores with medicines and supplies for plant disease treatment
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by store name or location..."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {districts.map(district => (
              <option key={district} value={district}>
                {district === 'all' ? 'All Districts' : district}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Store Results */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStores.map((store) => (
          <StoreCard key={store.id} store={store} />
        ))}
      </div>

      {filteredStores.length === 0 && (
        <div className="text-center py-12">
          <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No stores found</h3>
          <p className="text-gray-500">Try adjusting your search terms or district filter</p>
        </div>
      )}

      {/* Statistics */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Store Network Statistics</h2>
        <div className="grid md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{stores.length}</div>
            <div className="text-sm text-green-700">Total Stores</div>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{districts.length - 1}</div>
            <div className="text-sm text-blue-700">Districts Covered</div>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">24/7</div>
            <div className="text-sm text-orange-700">Service Hours</div>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">500+</div>
            <div className="text-sm text-purple-700">Medicine Types</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stores;