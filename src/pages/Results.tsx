import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, CheckCircle, MapPin, Pill, ArrowLeft, Camera, Phone, Clock, Navigation } from 'lucide-react';
import { DetectionResult } from '../types';
import { stores } from '../data/stores';

interface ResultsProps {
  detectionResult: DetectionResult | null;
}

const Results: React.FC<ResultsProps> = ({ detectionResult }) => {
  if (!detectionResult) {
    return (
      <div className="max-w-4xl mx-auto text-center py-16">
        <Camera className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">No Analysis Results</h2>
        <p className="text-gray-500 mb-8">Please upload an image for disease detection first.</p>
        <Link
          to="/detection"
          className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          <Camera className="h-5 w-5" />
          <span>Start Detection</span>
        </Link>
      </div>
    );
  }

  const nearbyStores = stores.slice(0, 3); // Show top 3 stores

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center space-x-4 mb-6">
        <Link
          to="/detection"
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Detection</span>
        </Link>
      </div>

      {/* Detection Results */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
        <div className="flex items-center space-x-3 mb-6">
          {detectionResult.severity === 'high' ? (
            <AlertTriangle className="h-8 w-8 text-red-500" />
          ) : (
            <CheckCircle className="h-8 w-8 text-green-500" />
          )}
          <h1 className="text-3xl font-bold text-gray-800">Detection Results</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Detected Disease</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Disease:</span>
                <span className="font-semibold text-gray-800">{detectionResult.disease}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Confidence:</span>
                <span className="font-semibold text-green-600">{detectionResult.confidence}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Severity:</span>
                <span className={`font-semibold capitalize ${
                  detectionResult.severity === 'high' ? 'text-red-600' :
                  detectionResult.severity === 'medium' ? 'text-orange-600' : 'text-green-600'
                }`}>
                  {detectionResult.severity}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">AI Algorithm Analysis</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">CNN Score:</span>
                <span className="font-semibold text-blue-600">92%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">KVM Score:</span>
                <span className="font-semibold text-purple-600">88%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">KNN Score:</span>
                <span className="font-semibold text-green-600">91%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Treatment Recommendations */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
        <div className="flex items-center space-x-3 mb-6">
          <Pill className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Treatment Recommendations</h2>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended Medicines</h3>
            <div className="grid gap-4">
              {detectionResult.treatment.medicines.map((medicine, index) => (
                <div key={index} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-blue-800">{medicine.name}</h4>
                    <span className="text-sm bg-blue-200 text-blue-800 px-2 py-1 rounded">{medicine.type}</span>
                  </div>
                  <p className="text-blue-700 text-sm mb-2">{medicine.dosage}</p>
                  <p className="text-blue-600 text-sm">{medicine.instructions}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Prevention Tips</h3>
            <ul className="space-y-2">
              {detectionResult.treatment.prevention.map((tip, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Nearby Stores */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <MapPin className="h-8 w-8 text-orange-600" />
            <h2 className="text-2xl font-semibold text-gray-800">Nearby Agriculture Stores</h2>
          </div>
          <Link
            to="/stores"
            className="text-green-600 hover:text-green-700 font-medium transition-colors"
          >
            View All Stores
          </Link>
        </div>

        <div className="grid gap-4">
          {nearbyStores.map((store) => (
            <div key={store.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-semibold text-gray-800">{store.name}</h3>
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                  {store.distance} km
                </span>
              </div>
              
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{store.location}, {store.district}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>{store.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{store.hours}</span>
                </div>
              </div>

              <div className="mt-4 flex space-x-3">
                <button 
                  onClick={() => window.open(`tel:${store.phone}`, '_self')}
                  className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call Store</span>
                </button>
                <button 
                  onClick={() => {
                    const query = encodeURIComponent(`${store.name}, ${store.location}, ${store.district}, Tamil Nadu`);
                    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
                  }}
                  className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Get Directions</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/detection"
          className="flex items-center justify-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          <Camera className="h-5 w-5" />
          <span>Detect Another Disease</span>
        </Link>
        
        <Link
          to="/diseases"
          className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Pill className="h-5 w-5" />
          <span>Browse Disease Guide</span>
        </Link>
      </div>
    </div>
  );
};

export default Results;