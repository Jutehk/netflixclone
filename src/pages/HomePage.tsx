import React, { useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import ContentRow from '../components/ContentRow';
import ContentModal from '../components/ContentModal';
import { mockFeaturedMovie, contentRows } from '../data/mockData';
import { ContentItem } from '../types/content';

const HomePage: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null);
  
  const handleContentClick = (item: ContentItem) => {
    setSelectedContent(item);
  };
  
  return (
    <div className="pt-16">
      <HeroBanner movie={mockFeaturedMovie} />
      
      <div className="mt-6 md:mt-10">
        {contentRows.map((row) => (
          <ContentRow
            key={row.id}
            title={row.title}
            items={row.items}
            onItemClick={handleContentClick}
          />
        ))}
      </div>
      
      <ContentModal
        item={selectedContent}
        onClose={() => setSelectedContent(null)}
      />
    </div>
  );
};

export default HomePage;