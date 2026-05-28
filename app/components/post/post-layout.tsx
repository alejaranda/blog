"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PostHeader } from "./header";
import { PostContent } from "./content";
import { PostComment } from "./comment";
import { useAuth } from "@/hooks/use-auth";
import { usePostLikes } from "@/hooks/use-post-likes";
import { TocItem } from "@/types/blog";

interface PostLayoutProps {
  children: React.ReactNode;
  postSlug: string;
  header?: {
    date: string;
    title: string;
  };
  toc?: TocItem[];
  backLink?: string;
  backLabel?: string;
  onShare?: () => void;
  allPosts?: { slug: string; title: string; related?: string[] }[];
}

function useTocScrollSpy(toc?: TocItem[]) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!toc?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    );

    toc.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [toc]);

  return activeId;
}

function PostLikeButton({ postSlug }: { postSlug: string }) {
  const { user } = useAuth();
  const { count, liked, toggle } = usePostLikes(postSlug, user);

  return (
    <div className="mt-10 pt-6 border-t border-zinc-800/60 flex items-center gap-3">
      <button
        onClick={toggle}
        disabled={!user}
        title={!user ? "Sign in to like" : undefined}
        className={`group flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${liked
          ? "border-violet-500/40 bg-violet-500/10 text-violet-300"
          : "border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-300 disabled:opacity-30 disabled:cursor-not-allowed"
          }`}
      >
        <svg
          viewBox="0 0 24 24"
          className={`w-4 h-4 transition-transform group-hover:scale-110 ${liked ? "fill-violet-400 stroke-none" : "fill-none stroke-current"}`}
          strokeWidth={2}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        {count > 0 ? `${count} ${count === 1 ? "like" : "likes"}` : "Like this post"}
      </button>
      {!user && <span className="text-xs text-zinc-700">Sign in to react</span>}
    </div>
  );
}

function TableOfContents({ toc, activeId }: { toc: TocItem[]; activeId: string }) {
  return (
    <aside className="hidden xl:block fixed top-1/2 -translate-y-1/2 w-48" style={{ left: "calc(50% + 340px)" }}>
      <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-3">
        On this page
      </p>
      <ul className="border-l border-zinc-800 space-y-0.5">
        {toc.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block py-1 text-xs leading-relaxed transition-all duration-150 ${item.level === 1 ? "pl-3" : item.level === 2 ? "pl-5" : "pl-7"
                } ${activeId === item.id
                  ? "text-violet-400 border-l-2 border-violet-500 -ml-px"
                  : "text-zinc-600 hover:text-zinc-400"
                }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function PostLayout({
  children,
  postSlug,
  header,
  toc,
  backLink = "/blog",
  backLabel = "Back to Blog",
  onShare,
}: PostLayoutProps) {
  const activeId = useTocScrollSpy(toc);

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-xl px-6 py-20 flex flex-col flex-1 relative">
        {toc && toc.length > 0 && <TableOfContents toc={toc} activeId={activeId} />}

        <Link
          href={backLink}
          className="text-xs font-semibold font-mono text-zinc-400 uppercase tracking-widest hover:text-zinc-300 transition-colors mb-10 inline-block"
        >
          ← {backLabel}
        </Link>

        <article>
          {header && (
            <PostHeader
              date={header.date}
              title={header.title}
            />
          )}

          <PostContent>{children}</PostContent>

          <PostLikeButton postSlug={postSlug} />

          <PostComment postSlug={postSlug} />
        </article>

        <div className="border-t border-zinc-800/60 mt-8 py-4 flex items-center justify-between">
          <p className="text-sm text-zinc-600 tracking-tight">Santiago</p>
          <Link
            href="/"
            className="text-xs font-semibold font-mono text-zinc-500 uppercase tracking-widest hover:text-zinc-300 transition-colors"
          >
            ← Home
          </Link>
        </div>
      </div>
    </div>
  );
}
