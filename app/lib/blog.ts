export interface BlogPost {
  title: string;
  href: string;
  date: string;
  tag?: string;
  excerpt?: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Santana is here",
    href: "#",
    date: "May 25",
    tag: "is top",
    excerpt: "lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
];
