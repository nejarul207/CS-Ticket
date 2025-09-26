import React from 'react';
import { Plus } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-semibold text-gray-900">
            CS — Ticket System
          </h1>
        </div>
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Changelog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Download</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
            <Plus size={20} />
            <span>New Ticket</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;