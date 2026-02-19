import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, BookOpen, MapPin, Shield, Zap, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
             Smart Plant Doc: AI-Based Plant Disease                  
Detection and Treatment Recommendation
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Detect plant diseases instantly using advanced CNN, KVM, and KNN algorithms. 
            Get accurate diagnoses, treatment recommendations, and find nearby agriculture stores in Tamil Nadu.
          </p>
          <Link
            to="/detection"
            className="inline-flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            <Camera className="h-6 w-6" />
            <span>Start Disease Detection</span>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
          <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Zap className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Advanced AI Detection</h3>
          <p className="text-gray-600 leading-relaxed">
            Our sophisticated algorithms combine CNN for image recognition, KVM for pattern matching, 
            and KNN for similarity analysis to provide accurate disease identification.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Shield className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Treatment Recommendations</h3>
          <p className="text-gray-600 leading-relaxed">
            Get detailed medicine recommendations and treatment plans for detected diseases, 
            including organic and chemical solutions tailored to your specific needs.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-green-100">
          <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
            <Users className="h-8 w-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Local Store Network</h3>
          <p className="text-gray-600 leading-relaxed">
            Find agriculture stores across Tamil Nadu with real-time availability of recommended medicines. 
            Connect directly with local suppliers and get the best prices.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-white rounded-2xl p-8 shadow-lg border border-green-100">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Quick Actions</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            to="/detection"
            className="flex flex-col items-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200 group"
          >
            <Camera className="h-12 w-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Detect Disease</h3>
            <p className="text-gray-600 text-center text-sm">Upload or capture plant photos for instant analysis</p>
          </Link>

          <Link
            to="/diseases"
            className="flex flex-col items-center p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200 group"
          >
            <BookOpen className="h-12 w-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Disease Guide</h3>
            <p className="text-gray-600 text-center text-sm">Browse comprehensive disease database</p>
          </Link>

          <Link
            to="/stores"
            className="flex flex-col items-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors duration-200 group"
          >
            <MapPin className="h-12 w-12 text-orange-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Find Stores</h3>
            <p className="text-gray-600 text-center text-sm">Locate nearby agriculture stores in Tamil Nadu</p>
          </Link>
        </div>
      </section>

      {/* Statistics */}
      <section className="grid md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md text-center border border-green-100">
          <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
          <div className="text-gray-600">Detection Accuracy</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center border border-blue-100">
          <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
          <div className="text-gray-600">Disease Types</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center border border-orange-100">
          <div className="text-3xl font-bold text-orange-600 mb-2">200+</div>
          <div className="text-gray-600">Partner Stores</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center border border-purple-100">
          <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
          <div className="text-gray-600">Support Available</div>
        </div>
      </section>
    </div>
  );
};

export default Home;