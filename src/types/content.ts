export interface ContentItem {
  id: number;
  title: string;
  thumbnail: string;
  backdrop?: string;
  description?: string;
  year?: number;
  rating?: string;
  duration: string;
  genres: string[];
  match: number;
  cast?: string[];
  director?: string;
  similar?: {
    id: number;
    title: string;
    thumbnail: string;
    match: number;
  }[];
}

export interface ContentRow {
  id: string;
  title: string;
  items: ContentItem[];
}