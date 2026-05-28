import { getAllPosts } from "@/lib/mdx";
import { PROJECTS } from "@/lib/projects";
import { HomeClient } from "./home-client";

export default function Home() {
  const posts = getAllPosts();
  return <HomeClient projects={PROJECTS} posts={posts} />;
}
