import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Camera, BookOpen, Store } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/detection', icon: Camera, label: 'Camera' },
    { path: '/diseases', icon: BookOpen, label: 'Map' },
    { path: '/stores', icon: Store, label: 'Store' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
                isActive(item.path)
                  ? 'text-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-green-600 hover:bg-green-50'
              }`}
            >
              <IconComponent className="h-6 w-6 mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;