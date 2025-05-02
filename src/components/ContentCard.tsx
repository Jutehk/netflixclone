import React, { useState } from 'react';
import { Play, Plus, ThumbsUp, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContentItem } from '../types/content';

interface ContentCardProps {
  item: ContentItem;
  onClick?: () => void;
}

const ContentCard: React.FC<ContentCardProps> = ({ item, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="flex-shrink-0 w-[175px] md:w-[220px] lg:w-[260px] rounded-md overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      initial={false}
      animate={isHovered ? { 
        scale: 1.05, 
        zIndex: 10,
        transition: { duration: 0.3 }
      } : { 
        scale: 1, 
        zIndex: 0,
        transition: { duration: 0.3, delay: 0.2 }
      }}
    >
      {/* Card Image */}
      <div className="relative aspect-video bg-gray-800">
        <img 
          src={item.thumbnail} 
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Overlay */}
        {isHovered && (
          <motion.div 
            className="absolute inset-0 bg-black/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src={item.thumbnail} 
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </motion.div>
        )}
      </div>
      
      {/* Card Info (visible on hover) */}
      {isHovered && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 bg-[#181818] p-3 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex space-x-2 mb-2">
            <button className="bg-white hover:bg-gray-200 text-black rounded-full p-1 transition-colors duration-200">
              <Play size={18} fill="black" />
            </button>
            <button className="border border-gray-400 rounded-full p-1 hover:border-white transition-colors duration-200">
              <Plus size={18} />
            </button>
            <button className="border border-gray-400 rounded-full p-1 hover:border-white transition-colors duration-200">
              <ThumbsUp size={18} />
            </button>
            <button className="border border-gray-400 rounded-full p-1 hover:border-white transition-colors duration-200 ml-auto">
              <ChevronDown size={18} />
            </button>
          </div>
          
          <h3 className="font-semibold text-sm mb-1 line-clamp-1">{item.title}</h3>
          
          <div className="flex text-xs space-x-2 text-gray-400 mb-1">
            <span className="text-green-500 font-semibold">{item.match}% Match</span>
            <span>{item.duration}</span>
          </div>
          
          <div className="flex flex-wrap text-xs text-gray-400">
            {item.genres.slice(0, 3).map((genre, index) => (
              <React.Fragment key={genre}>
                <span>{genre}</span>
                {index < Math.min(item.genres.length, 3) - 1 && <span className="mx-1">•</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContentCard;