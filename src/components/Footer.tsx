import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">CS — Ticket System</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
            <div className="space-y-2">
              <p className="text-sm hover:text-white transition-colors cursor-pointer">Our Mission</p>
              <p className="text-sm hover:text-white transition-colors cursor-pointer">Contact Sales</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Company</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="hover:text-white transition-colors cursor-pointer">About Us</p>
              <p className="hover:text-white transition-colors cursor-pointer">Our Mission</p>
              <p className="hover:text-white transition-colors cursor-pointer">Contact Sales</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="hover:text-white transition-colors cursor-pointer">Products & Services</p>
              <p className="hover:text-white transition-colors cursor-pointer">Customer Stories</p>
              <p className="hover:text-white transition-colors cursor-pointer">Download Apps</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4">Information</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="hover:text-white transition-colors cursor-pointer">Privacy Policy</p>
              <p className="hover:text-white transition-colors cursor-pointer">Terms & Conditions</p>
              <p className="hover:text-white transition-colors cursor-pointer">Join Us</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 CS — Ticket System. All rights reserved.
            </div>
            <div className="space-y-1 text-sm text-gray-400">
              <p>📧 support@cs-ticketsystem.com</p>
              <p>📧 info@cs-ticketsystem.com</p>
              <p>🌐 www.cs-ticketsystem.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;