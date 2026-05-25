"use client";

import { BlogPost } from "@/types/blog";
import { Card } from "./card";
import { CardCompact } from "./card-compact";

interface ListProps {
  posts: BlogPost[];
  view: "list" | "compact";
}

export function List({ posts, view }: ListProps) {
  return (
    <div className="border-t border-zinc-800">
      {posts.map((post) =>
        view === "list" ? (
          <Card key={post.href} post={post} />
        ) : (
          <CardCompact key={post.href} post={post} />
        )
      )}
    </div>
  );
}
