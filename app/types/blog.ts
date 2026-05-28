export interface TocItem {
  id: string;
  title: string;
  level: 1 | 2 | 3;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  href: string;
  date: string;
  tag?: string;
  excerpt?: string;
  icon?: string;
  read_time?: string;
  author_name?: string;
  author_role?: string;
  author_image?: string;
  toc?: TocItem[];
  related?: string[];
}
