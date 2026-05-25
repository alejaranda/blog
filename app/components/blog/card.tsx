"use client";

import Link from "next/link";
import { BlogPost } from "@/types/blog";

interface CardProps {
  post: BlogPost;
}

export function Card({ post }: CardProps) {
  return (
    <Link
      href={post.href}
      className="group flex flex-col py-4 -mx-3 px-3 rounded-lg transition-colors duration-200 hover:bg-zinc-800/40 border-b border-zinc-800 last:border-none"
    >
      <div className="flex items-baseline gap-2 mb-1">
        <span className="text-base text-zinc-100 font-medium transition-colors duration-200 group-hover:text-zinc-50">
          {post.title}
        </span>
        {post.tag && (
          <span className="text-xs font-medium rounded-full px-2 py-0.5 leading-none border border-zinc-700/50 text-zinc-400 bg-zinc-900/50 shrink-0">
            {post.tag}
          </span>
        )}
      </div>
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-xs font-mono text-zinc-500 whitespace-nowrap">
          {post.date}
        </span>
      </div>
      {post.excerpt && (
        <p className="text-sm text-zinc-400 line-clamp-2">
          {post.excerpt}
        </p>
      )}
    </Link>
  );
}
