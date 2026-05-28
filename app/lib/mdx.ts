import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/utils/date";
import { extractToc } from "@/utils/toc";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

function parsePost(slug: string, data: Record<string, unknown>): BlogPost {
  return {
    id: slug,
    slug,
    href: `/blog/${slug}`,
    title: data.title as string,
    date: formatDate(data.date as string),
    tag: data.tag as string | undefined,
    excerpt: data.excerpt as string | undefined,
    icon: data.icon as string | undefined,
    author_name: (data.author as { name?: string } | undefined)?.name,
    author_role: (data.author as { role?: string } | undefined)?.role,
    author_image: (data.author as { image?: string } | undefined)?.image,
    related: (data.related as string[] | undefined) ?? [],
  };
}

export function getAllPosts(): BlogPost[] {
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(POSTS_DIR, file), "utf-8"));
      return parsePost(slug, data);
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): { post: BlogPost; content: string } | null {
  const filePath = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = matter(fs.readFileSync(filePath, "utf-8"));

  return {
    content,
    post: { ...parsePost(slug, data), toc: extractToc(content) },
  };
}
