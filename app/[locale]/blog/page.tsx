import { getAllPosts } from "@/lib/mdx";
import { BlogList } from "./blog-list";

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogList posts={posts} />;
}
