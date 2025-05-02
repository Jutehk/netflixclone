import React, { useState } from 'react';
import ContentModal from '../components/ContentModal';
import { myListContent } from '../data/mockData';
import { ContentItem } from '../types/content';

const MyListPage: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  
  const handleContentClick = (item: ContentItem) => {
    setSelectedContent(item);
  };
  
  return (
    <div className="pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">My List</h1>
        
        {myListContent.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {myListContent.map((item) => (
              <div 
                key={item.id}
                className="content-card"
                onClick={() => handleContentClick(item)}
              >
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full aspect-video object-cover rounded-md"
                />
                <div className="card-overlay p-2 flex items-end">
                  <h3 className="text-sm font-medium line-clamp-1">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium mb-2">Your list is empty</h2>
            <p className="text-gray-400 mb-6">Add shows and movies to your list to watch them later.</p>
            <button className="netflix-button">Browse Content</button>
          </div>
        )}
      </div>
      
      <ContentModal
        item={selectedContent}
        onClose={() => setSelectedContent(null)}
      />
    </div>
  );
};

export default MyListPage;