import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ContentCard from './ContentCard';
import { ContentItem } from '../types/content';

interface ContentRowProps {
  title: string;
  items: ContentItem[];
  onItemClick?: (item: ContentItem) => void;
}

const ContentRow: React.FC<ContentRowProps> = ({ title, items, onItemClick }) => {
  const [showControls, setShowControls] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!rowRef.current) return;
    
    const { scrollLeft, clientWidth } = rowRef.current;
    const scrollAmount = clientWidth * 0.9;
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollLeft - scrollAmount)
      : scrollLeft + scrollAmount;
    
    rowRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });
    
    setScrollPosition(newPosition);
  };

  return (
    <div 
      className="mb-8"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <h2 className="text-xl md:text-2xl font-bold mb-4 px-4 md:px-8">{title}</h2>
      
      <div className="relative group">
        {/* Left Control */}
        <button 
          className={`absolute left-0 top-0 bottom-0 z-10 w-12 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-opacity duration-300 ${
            showControls && scrollPosition > 0 ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => handleScroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft size={30} />
        </button>
        
        {/* Content Row */}
        <div 
          ref={rowRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide px-4 md:px-8 py-2 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <ContentCard 
              key={item.id} 
              item={item} 
              onClick={() => onItemClick && onItemClick(item)} 
            />
          ))}
        </div>
        
        {/* Right Control */}
        <button 
          className={`absolute right-0 top-0 bottom-0 z-10 w-12 bg-black/30 hover:bg-black/60 text-white flex items-center justify-center transition-opacity duration-300 ${
            showControls ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => handleScroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default ContentRow;