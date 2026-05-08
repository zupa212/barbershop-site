
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  content?: string;
  tags?: string[];
  image?: string;
  featured?: boolean;
  relatedPosts?: { id: string; title: string; image?: string }[];
}
