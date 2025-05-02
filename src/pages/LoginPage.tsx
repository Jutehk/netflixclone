import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    
    // Mock successful login
    setError('');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-black bg-opacity-50 bg-blend-overlay" style={{ 
      backgroundImage: "url('https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="block w-32">
          <svg viewBox="0 0 111 30" fill="#E50914">
            <path d="M105.06 14.28L111 30c-1.75-.25-3.499-.563-5.28-.845l-3.345-8.686-3.437 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L94.155 0h5.25l3.194 8.25 3.375-8.25h5.25l-6.155 14.28zm-17.22 0l5.944 15.72c-1.756-.25-3.5-.563-5.28-.845l-3.344-8.686-3.438 7.969c-1.687-.282-3.344-.376-5.031-.595l6.031-13.75L76.945 0h5.25l3.194 8.25 3.375-8.25h5.25l-6.155 14.28zm-33.939-9.22c1.563 0 3.781.313 5.25.875v4.5c-1.594-.938-3.375-1.438-5.25-1.438-3.625 0-6.563 2.75-6.563 6.188 0 3.5 2.938 6.156 6.563 6.156 1.875 0 3.656-.469 5.25-1.406v4.5c-1.5.563-3.75.875-5.25.875-6.156 0-11.063-4.656-11.063-10.125 0-5.406 4.906-10.125 11.063-10.125zm67.159 0c1.563 0 3.781.313 5.25.875v4.5c-1.594-.938-3.375-1.438-5.25-1.438-3.625 0-6.563 2.75-6.563 6.188 0 3.5 2.938 6.156 6.563 6.156 1.875 0 3.656-.469 5.25-1.406v4.5c-1.5.563-3.75.875-5.25.875-6.156 0-11.063-4.656-11.063-10.125 0-5.406 4.906-10.125 11.063-10.125zM0 0h5.625v22.5c0 1.125.563 1.5 1.5 1.5H12v5.25H7.125C3.188 29.25 0 26.25 0 22.5V0zm36.938 0h5.624v29.25h-5.625V0zm-9.376 10.125c0-5.406 4.906-10.125 11.063-10.125 1.5 0 3.75.375 5.25.875v4.5c-1.5-.75-3.563-1.438-5.25-1.438-3.625 0-6.563 2.75-6.563 6.188 0 3.5 2.938 6.156 6.563 6.156 1.687 0 3.75-.469 5.25-1.406v4.5c-1.5.563-3.75.875-5.25.875-6.156 0-11.063-4.656-11.063-10.125z" />
          </svg>
        </Link>
      </header>
      
      <div className="flex-grow flex items-center justify-center p-4">
        <motion.div 
          className="bg-black bg-opacity-70 p-8 rounded-md w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          
          {error && (
            <div className="bg-[#e87c03] text-white p-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm mb-1 sr-only" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded bg-[#333] text-white border border-[#333] focus:border-[#e50914] focus:outline-none"
                placeholder="Email or phone number"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm mb-1 sr-only" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded bg-[#333] text-white border border-[#333] focus:border-[#e50914] focus:outline-none"
                placeholder="Password"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-[#e50914] hover:bg-[#f40612] text-white font-bold py-3 rounded transition-colors duration-300"
            >
              Sign In
            </button>
            
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 bg-[#333] border-0 focus:ring-0"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <Link to="#" className="text-sm text-gray-300 hover:underline">
                Need help?
              </Link>
            </div>
          </form>
          
          <div className="mt-10">
            <p className="text-gray-500">
              New to Netflix?{' '}
              <Link to="#" className="text-white hover:underline">
                Sign up now
              </Link>
            </p>
            
            <p className="text-xs text-gray-500 mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a bot. 
              <Link to="#" className="text-blue-500 hover:underline ml-1">
                Learn more.
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage;