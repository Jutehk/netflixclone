import React, { useState } from 'react';
import ContentRow from '../components/ContentRow';
import ContentModal from '../components/ContentModal';
import { genres, getContentByGenre } from '../data/mockData';
import { ContentItem } from '../types/content';

const BrowsePage: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  const [activeGenre, setActiveGenre] = useState<string | null>(null);
  
  const handleContentClick = (item: ContentItem) => {
    setSelectedContent(item);
  };
  
  return (
    <div className="pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Browse</h1>
          
          <div className="relative group">
            <button className="bg-black border border-white px-4 py-1 rounded-sm flex items-center">
              <span>{activeGenre || 'Genres'}</span>
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute right-0 mt-1 w-48 bg-black border border-gray-700 rounded shadow-lg z-10 hidden group-hover:block">
              <div className="py-1">
                {activeGenre && (
                  <button
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800"
                    onClick={() => setActiveGenre(null)}
                  >
                    All Genres
                  </button>
                )}
                
                {genres.map((genre) => (
                  <button
                    key={genre}
                    className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800"
                    onClick={() => setActiveGenre(genre)}
                  >
                    {genre}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        {activeGenre ? (
          <ContentRow
            title={activeGenre}
            items={getContentByGenre(activeGenre)}
            onItemClick={handleContentClick}
          />
        ) : (
          genres.map((genre) => (
            <ContentRow
              key={genre}
              title={genre}
              items={getContentByGenre(genre)}
              onItemClick={handleContentClick}
            />
          ))
        )}
      </div>
      
      <ContentModal
        item={selectedContent}
        onClose={() => setSelectedContent(null)}
      />
    </div>
  );
};

export default BrowsePage;