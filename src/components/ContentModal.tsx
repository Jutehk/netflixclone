import React, { useEffect } from 'react';
import { X, Play, Plus, ThumbsUp, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentItem } from '../types/content';

interface ContentModalProps {
  item: ContentItem | null;
  onClose: () => void;
}

const ContentModal: React.FC<ContentModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <motion.div
          className="relative bg-[#181818] rounded-md overflow-hidden w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', damping: 30 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-10 bg-[#181818] rounded-full p-1.5 hover:bg-gray-800 transition-colors duration-200"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={24} />
          </button>
          
          {/* Header Image/Video */}
          <div className="relative w-full aspect-video">
            <img 
              src={item.backdrop || item.thumbnail} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent" />
            
            {/* Title and Controls */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{item.title}</h1>
              <div className="flex flex-wrap gap-2">
                <button className="bg-white hover:bg-gray-300 text-black font-bold rounded px-6 py-2 flex items-center transition-colors duration-300">
                  <Play size={20} className="mr-2" />
                  Play
                </button>
                <button className="bg-gray-600/80 hover:bg-gray-500/80 text-white rounded-full p-2 flex items-center transition-colors duration-300">
                  <Plus size={20} />
                </button>
                <button className="bg-gray-600/80 hover:bg-gray-500/80 text-white rounded-full p-2 flex items-center transition-colors duration-300">
                  <ThumbsUp size={20} />
                </button>
                <button className="bg-gray-600/80 hover:bg-gray-500/80 text-white rounded-full p-2 flex items-center transition-colors duration-300 ml-auto">
                  <VolumeX size={20} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Content Details */}
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex-1 min-w-[300px]">
                <div className="flex items-center text-sm mb-4">
                  <span className="text-green-500 font-semibold">{item.match}% Match</span>
                  <span className="mx-2 text-gray-400">{item.year}</span>
                  <span className="border border-gray-600 text-xs px-1 mx-2">{item.rating}</span>
                  <span className="text-gray-400">{item.duration}</span>
                </div>
                <p className="text-sm md:text-base text-gray-200 mb-4">{item.description}</p>
              </div>
              
              <div className="text-sm text-gray-400">
                <div className="mb-2">
                  <span className="text-gray-500">Cast:</span>{" "}
                  {item.cast?.join(', ')}
                </div>
                <div className="mb-2">
                  <span className="text-gray-500">Genres:</span>{" "}
                  {item.genres.join(', ')}
                </div>
                <div>
                  <span className="text-gray-500">Director:</span>{" "}
                  {item.director}
                </div>
              </div>
            </div>
            
            {/* Similar Content Section */}
            <div>
              <h3 className="text-xl font-bold mb-4">More Like This</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {item.similar?.slice(0, 6).map((similar) => (
                  <div key={similar.id} className="rounded-md overflow-hidden bg-gray-900 hover:scale-105 transition-transform duration-200">
                    <img 
                      src={similar.thumbnail} 
                      alt={similar.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="p-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold line-clamp-1">{similar.title}</h4>
                        <span className="text-xs text-green-500">{similar.match}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ContentModal;