import React, { useState, useEffect } from 'react';
import { Play, Info, VolumeX, Volume2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroBannerProps {
  movie: {
    id: number;
    title: string;
    backdrop: string;
    description: string;
    year: number;
    ageRating: string;
    duration: string;
    genres: string[];
  };
}

const HeroBanner: React.FC<HeroBannerProps> = ({ movie }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[56.25vw] max-h-[80vh] min-h-[400px] overflow-hidden">
      {/* Video Background (mocked with an image for this demo) */}
      {isVideoLoaded ? (
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${movie.backdrop})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-pulse bg-gray-900" style={{ backgroundImage: `url(${movie.backdrop})` }}>
          <div className="absolute inset-0 bg-gradient-to-r from-netflix-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-netflix-black via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full h-full flex flex-col justify-end p-8 md:p-16 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{movie.title}</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-4">
            <span className="text-netflix-red font-bold">New</span>
            <span>{movie.year}</span>
            <span className="border border-gray-600 px-1">{movie.ageRating}</span>
            <span>{movie.duration}</span>
          </div>
          <p className="text-lg text-gray-200 mb-6 line-clamp-3 md:line-clamp-none">{movie.description}</p>
          <div className="flex flex-wrap items-center gap-3">
            <button className="bg-white hover:bg-gray-200 text-black font-bold rounded px-6 py-2 flex items-center transition-colors duration-300">
              <Play size={20} className="mr-2" />
              Play
            </button>
            <button className="bg-gray-600/80 hover:bg-gray-500/80 text-white font-bold rounded px-6 py-2 flex items-center transition-colors duration-300">
              <Info size={20} className="mr-2" />
              More Info
            </button>
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="ml-auto bg-gray-900/60 text-white p-2 rounded-full border border-white/30 hover:border-white transition-colors duration-300"
            >
              {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroBanner;