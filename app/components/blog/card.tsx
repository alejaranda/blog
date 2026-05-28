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
      className="group flex items-center gap-3.5 py-3 -mx-3 px-3 rounded-lg transition-colors duration-200 hover:bg-zinc-800/40"
    >
      {post.icon && (
        <div className="w-9 h-9 rounded-md shrink-0 border border-zinc-700/50 bg-zinc-900/50 flex items-center justify-center text-base">
          <div dangerouslySetInnerHTML={{ __html: post.icon }} />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-base text-zinc-100 font-medium transition-colors duration-200 group-hover:text-zinc-50">
            {post.title}
          </span>

          {post.tag && (
            <span className="text-xs font-medium rounded-full px-2 py-0.5 leading-none border border-zinc-700/50 text-zinc-400 bg-zinc-900/50 shrink-0">
              {post.tag}
            </span>
          )}
        </div>


        {post.excerpt && (
          <p className="text-sm text-zinc-400 mt-0.5 truncate">
            {post.excerpt}
          </p>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <span className="text-xs font-mono text-zinc-500 tabular-nums whitespace-nowrap">
          {post.date}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-zinc-600 opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0"
          aria-hidden="true"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
