import React from 'react';
import { Link } from 'react-router-dom';
import { Database } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Database className="w-8 h-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-800">SureSQL</span>
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link to="/dashboard" className="text-gray-600 hover:text-blue-600">Dashboard</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Docs</a></li>
            </ul>
          </nav>
          <div>
            <Link to="/login" className="text-blue-600 hover:text-blue-800 mr-4">Login</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Sign Up</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;