"use client";

import { BlogPost } from "@/types/blog";
import { useViewMode } from "@/hooks/use-view-mode";
import { ViewToggle } from "../ui/view-toggle";
import { List } from "./list";

interface SectionProps {
  title?: string;
  posts: BlogPost[];
}

export function Section({
  title = "Writing",
  posts,
}: SectionProps) {
  const { view, setView } = useViewMode("list");

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold font-mono text-zinc-400 uppercase tracking-widest">
          {title}
        </span>
        <ViewToggle view={view} onChange={setView} />
      </div>

      <List posts={posts} view={view} />
    </section>
  );
}
