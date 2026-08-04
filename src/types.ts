export interface Leader {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  scriptureQuote?: string;
}

export interface Sermon {
  id: string;
  title: string;
  date: string;
  speaker: string;
  description: string;
  image: string;
  type: 'video' | 'audio';
  duration: string;
  featured?: boolean;
  audioUrl?: string;
  summaryPoints?: string[];
}

export interface Lesson {
  id: string;
  title: string;
  category: 'Prophetic Insight' | 'Bible Study' | 'Sermon Outline' | 'Community Focus';
  readTime: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
}

export interface Branch {
  name: string;
  location: string;
  leader: string;
  phone: string;
}
