import { ContentItem, ContentRow } from '../types/content';

// Featured movie for hero banner
export const mockFeaturedMovie = {
  id: 1,
  title: 'Stranger Things',
  backdrop: 'https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  description: 'In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.',
  year: 2022,
  ageRating: 'TV-14',
  duration: '3 Seasons',
  genres: ['Sci-Fi', 'Horror', 'Drama'],
};

// Array of genres
export const genres = [
  'Trending Now',
  'Popular on Netflix',
  'Sci-Fi & Fantasy',
  'Action & Adventure',
  'Drama',
  'Crime',
  'Comedy',
  'Horror',
  'Documentaries'
];

// Generate mock content items
const generateContentItems = (count: number, genreFilter?: string): ContentItem[] => {
  return Array.from({ length: count }, (_, i) => {
    const id = Math.floor(Math.random() * 10000) + i;
    const genrePool = ['Action', 'Adventure', 'Comedy', 'Crime', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller'];
    const selectedGenres = genreFilter 
      ? [genreFilter, ...genrePool.filter(g => g !== genreFilter).slice(0, 2)] 
      : genrePool.sort(() => 0.5 - Math.random()).slice(0, 3);
    
    const images = [
      'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2531236/pexels-photo-2531236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1816714/pexels-photo-1816714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/910329/pexels-photo-910329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ];
    
    const randomImageIndex = Math.floor(Math.random() * images.length);
    
    return {
      id,
      title: `Movie Title ${id}`,
      thumbnail: images[randomImageIndex],
      backdrop: images[(randomImageIndex + 3) % images.length],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, lorem eget aliquam rhoncus, nisl nisl aliquet nisl, eget aliquam nisl nisl eget aliquam nisl.',
      year: 2020 + Math.floor(Math.random() * 3),
      rating: ['PG', 'PG-13', 'R'][Math.floor(Math.random() * 3)],
      duration: `${Math.floor(Math.random() * 3) + 1}h ${Math.floor(Math.random() * 59) + 1}m`,
      genres: selectedGenres,
      match: Math.floor(Math.random() * 30) + 70, // 70-99% match
      cast: ['Actor One', 'Actor Two', 'Actor Three', 'Actor Four'],
      director: 'Director Name',
      similar: Array.from({ length: 6 }, (_, i) => ({
        id: id * 100 + i,
        title: `Similar Movie ${id * 100 + i}`,
        thumbnail: images[(randomImageIndex + i) % images.length],
        match: Math.floor(Math.random() * 30) + 70,
      })),
    };
  });
};

// Content rows for the homepage
export const contentRows: ContentRow[] = genres.map((genre, index) => ({
  id: `row-${index}`,
  title: genre,
  items: generateContentItems(10),
}));

// Content for "My List" page
export const myListContent = generateContentItems(8);

// Function to get content by genre
export const getContentByGenre = (genre: string): ContentItem[] => {
  return generateContentItems(15, genre);
};