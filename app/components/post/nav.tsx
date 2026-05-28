"use client";

import Link from "next/link";

interface PostNavProps {
  backLink?: string;
  backLabel?: string;
  onShare?: () => void;
}

export function PostNav({ backLink = "/blog", backLabel = "Back to Blog", onShare }: PostNavProps) {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto max-w-4xl px-6 flex h-16 items-center justify-between">
        <Link
          href={backLink}
          className="text-sm font-medium text-zinc-400 hover:text-zinc-100 flex items-center gap-2 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          {backLabel}
        </Link>

        {onShare && (
          <button
            onClick={onShare}
            className="text-zinc-500 hover:text-zinc-100 transition-colors"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </button>
        )}
      </div>
    </nav>
  );
}
