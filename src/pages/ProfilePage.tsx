import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProfilePage: React.FC = () => {
  const profiles = [
    { id: 1, name: 'User 1', avatar: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 2, name: 'User 2', avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 3, name: 'Kids', avatar: 'https://images.pexels.com/photos/1680317/pexels-photo-1680317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 4, name: 'Add Profile', avatar: 'plus' }
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Who's watching?</h1>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {profiles.map((profile) => (
          <motion.div
            key={profile.id}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              show: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <Link to={profile.name === 'Add Profile' ? '#' : '/'} className="block">
              <div className="relative rounded-md overflow-hidden aspect-square mb-2 bg-gray-800 border-2 border-transparent hover:border-white transition-all duration-200">
                {profile.avatar === 'plus' ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-600">
                    <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                ) : (
                  <img 
                    src={profile.avatar} 
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <p className="text-gray-400 hover:text-white transition-colors duration-200">{profile.name}</p>
            </Link>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-10 border border-gray-600 text-gray-400 hover:text-white hover:border-white px-4 py-2 transition-colors duration-200"
      >
        Manage Profiles
      </motion.button>
    </div>
  );
};

export default ProfilePage;