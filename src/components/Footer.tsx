import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-netflix-black text-gray-400 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-4 mb-6">
          <a href="#" className="hover:text-white transition-colors duration-200">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-white transition-colors duration-200">
            <Youtube size={24} />
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:underline">Audio Description</Link></li>
              <li><Link to="#" className="hover:underline">Investor Relations</Link></li>
              <li><Link to="#" className="hover:underline">Legal Notices</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:underline">Help Center</Link></li>
              <li><Link to="#" className="hover:underline">Jobs</Link></li>
              <li><Link to="#" className="hover:underline">Cookie Preferences</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:underline">Gift Cards</Link></li>
              <li><Link to="#" className="hover:underline">Terms of Use</Link></li>
              <li><Link to="#" className="hover:underline">Corporate Information</Link></li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li><Link to="#" className="hover:underline">Media Center</Link></li>
              <li><Link to="#" className="hover:underline">Privacy</Link></li>
              <li><Link to="#" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6 text-xs">
          <p className="mb-4">
            <button className="border border-gray-600 px-2 py-1 hover:text-white transition-colors">
              Service Code
            </button>
          </p>
          <p>&copy; 1997-{new Date().getFullYear()} Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;