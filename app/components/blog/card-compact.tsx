"use client";

import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface CardCompactProps {
  post: BlogPost;
}

export function CardCompact({ post }: CardCompactProps) {
  return (
    <Link
      href={post.href}
      className="group flex items-center justify-between py-3 -mx-3 px-3 rounded-lg transition-colors duration-200 hover:bg-zinc-800/40 border-b border-zinc-800 last:border-none"
    >
      <div className="flex items-center gap-3 min-w-0 flex-1">
        <span className="text-xs font-mono text-zinc-500 shrink-0 whitespace-nowrap">
          {post.date}
        </span>
        <span className="text-sm text-zinc-300 transition-colors duration-200 group-hover:text-zinc-50 truncate">
          {post.title}
        </span>
      </div>
      {post.tag && (
        <span className="text-xs font-medium rounded-full px-2 py-0.5 leading-none border border-zinc-700/50 text-zinc-400 bg-zinc-900/50 shrink-0 ml-2">
          {post.tag}
        </span>
      )}
    </Link>
  );
}
