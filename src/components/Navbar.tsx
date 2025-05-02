import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setTimeout(() => document.getElementById('search-input')?.focus(), 100);
    }
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-netflix-black' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4 md:space-x-8">
            <Link to="/" className="flex-shrink-0">
              <svg className="w-24 h-8" viewBox="0 0 111 30" fill="#E50914">
                <path d="M105.06 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.155 0h5.25l3.194 8.25 3.375-8.25h5.25l-6.155 14.28zm-17.22 0l5.944 15.72c-1.756-.25-3.5-.563-5.28-.845l-3.344-8.686-3.438 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L76.945 0h5.25l3.194 8.25 3.375-8.25h5.25l-6.155 14.28zm-33.939-9.22c1.563 0 3.781.313 5.25.875v4.5c-1.594-.938-3.375-1.438-5.25-1.438-3.625 0-6.563 2.75-6.563 6.188 0 3.5 2.938 6.156 6.563 6.156 1.875 0 3.656-.469 5.25-1.406v4.5c-1.5.563-3.75.875-5.25.875-6.156 0-11.063-4.656-11.063-10.125 0-5.406 4.906-10.125 11.063-10.125zm67.159 0c1.563 0 3.781.313 5.25.875v4.5c-1.594-.938-3.375-1.438-5.25-1.438-3.625 0-6.563 2.75-6.563 6.188 0 3.5 2.938 6.156 6.563 6.156 1.875 0 3.656-.469 5.25-1.406v4.5c-1.5.563-3.75.875-5.25.875-6.156 0-11.063-4.656-11.063-10.125 0-5.406 4.906-10.125 11.063-10.125zM0 0h5.625v22.5c0 1.125.563 1.5 1.5 1.5H12v5.25H7.125C3.188 29.25 0 26.25 0 22.5V0zm36.938 0h5.624v29.25h-5.625V0zm-9.376 10.125c0-5.406 4.906-10.125 11.063-10.125 1.5 0 3.75.375 5.25.875v4.5c-1.5-.75-3.563-1.438-5.25-1.438-3.625 0-6.563 2.75-6.563 6.188 0 3.5 2.938 6.156 6.563 6.156 1.687 0 3.75-.469 5.25-1.406v4.5c-1.5.563-3.75.875-5.25.875-6.156 0-11.063-4.656-11.063-10.125z" />
              </svg>
            </Link>
            <div className="hidden md:block">
              <div className="flex items-center space-x-4">
                <Link to="/" className={`px-2 py-1 rounded-md text-sm font-medium ${location.pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                  Home
                </Link>
                <Link to="/browse" className={`px-2 py-1 rounded-md text-sm font-medium ${location.pathname === '/browse' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                  TV Shows
                </Link>
                <Link to="/browse" className={`px-2 py-1 rounded-md text-sm font-medium ${location.pathname === '/browse' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                  Movies
                </Link>
                <Link to="/browse" className={`px-2 py-1 rounded-md text-sm font-medium ${location.pathname === '/browse' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                  New & Popular
                </Link>
                <Link to="/my-list" className={`px-2 py-1 rounded-md text-sm font-medium ${location.pathname === '/my-list' ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
                  My List
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className={`flex items-center transition-all duration-300 ${showSearch ? 'w-60' : 'w-auto'}`}>
                <button onClick={toggleSearch} className="text-gray-300 hover:text-white">
                  <Search size={20} />
                </button>
                {showSearch && (
                  <input
                    id="search-input"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="ml-2 bg-black/80 text-white border border-gray-700 rounded px-2 py-1 w-full text-sm focus:outline-none focus:border-white"
                    placeholder="Titles, people, genres"
                  />
                )}
              </div>
            </div>
            <button className="text-gray-300 hover:text-white">
              <Bell size={20} />
            </button>
            <div className="relative group">
              <button className="flex items-center text-gray-300 hover:text-white">
                <img
                  className="h-8 w-8 rounded"
                  src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  alt="User profile"
                />
                <ChevronDown size={16} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 w-48 mt-2 origin-top-right bg-black border border-gray-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="py-1">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                    Profile
                  </Link>
                  <Link to="/login" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white">
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;