import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf, Camera, BookOpen, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg border-b-2 border-green-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-800">PlantCare AI</h1>
          </Link>
          
          <nav className="flex space-x-6">
            <Link
              to="/detection"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/detection')
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              <Camera className="h-5 w-5" />
              <span className="font-medium">Detect Disease</span>
            </Link>
            
            <Link
              to="/diseases"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/diseases')
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              <BookOpen className="h-5 w-5" />
              <span className="font-medium">Disease Guide</span>
            </Link>
            
            <Link
              to="/stores"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/stores')
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-green-50 hover:text-green-600'
              }`}
            >
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Find Stores</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;