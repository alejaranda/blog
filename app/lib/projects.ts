export interface Project {
  name: string;
  href: string;
  logo: string;
  role: string;
  years: string;
  badge?: string;
  description?: string;
  date?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "Santana",
    href: "/projects/",
    logo: "/logos/Santana.png",
    role: "lorem ipsum dolor sit amet asd",
    years: "2026 –",
    date: "Jan 15",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
  },
];
