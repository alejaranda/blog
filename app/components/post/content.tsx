"use client";

import React from "react";

export function PostContent({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        prose prose-zinc prose-invert max-w-none

        prose-p:text-zinc-300 prose-p:leading-8 prose-p:text-base

        prose-headings:text-zinc-100 prose-headings:font-semibold prose-headings:tracking-tight
        prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:pb-2
        prose-h2:border-b prose-h2:border-zinc-800
        prose-h3:text-base prose-h3:mt-8 prose-h3:mb-2 prose-h3:text-zinc-200

        prose-a:text-violet-400 prose-a:no-underline prose-a:font-medium
        hover:prose-a:underline hover:prose-a:text-violet-300

        prose-strong:text-zinc-100
        prose-em:text-zinc-300

        prose-code:text-sm prose-code:font-mono
        prose-code:text-violet-300 prose-code:bg-violet-950/30
        prose-code:border prose-code:border-violet-900/30
        prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md
        prose-code:before:content-none prose-code:after:content-none

        prose-blockquote:border-l-4 prose-blockquote:border-violet-500/60
        prose-blockquote:bg-violet-950/10 prose-blockquote:rounded-r-lg
        prose-blockquote:px-5 prose-blockquote:py-px
        prose-blockquote:text-zinc-400 prose-blockquote:not-italic
        prose-blockquote:my-6
        [&_blockquote_p]:my-2

        prose-ul:text-zinc-300 prose-ol:text-zinc-300
        prose-li:my-1 prose-li:leading-7
        prose-li:marker:text-violet-500

        prose-img:rounded-xl prose-img:border prose-img:border-zinc-800
        prose-img:shadow-lg prose-img:shadow-black/30 prose-img:my-8

        prose-hr:border-zinc-800 prose-hr:my-10

        [&_table]:w-full [&_table]:text-sm [&_table]:border-collapse
        [&_table]:border [&_table]:border-zinc-800 [&_table]:rounded-xl [&_table]:overflow-hidden
        [&_thead]:bg-zinc-900 [&_thead_th]:py-2.5 [&_thead_th]:px-4
        [&_thead_th]:text-left [&_thead_th]:text-zinc-300 [&_thead_th]:font-semibold
        [&_thead_th]:border-b [&_thead_th]:border-zinc-700
        [&_tbody_td]:py-2 [&_tbody_td]:px-4 [&_tbody_td]:text-zinc-400
        [&_tbody_td]:border-b [&_tbody_td]:border-zinc-800/60
        [&_tbody_tr:last-child_td]:border-none
        [&_tbody_tr:hover]:bg-zinc-900/40

        [&_figure[data-rehype-pretty-code-figure]]:my-6
        [&_figure[data-rehype-pretty-code-figure]_pre]:rounded-xl
        [&_figure[data-rehype-pretty-code-figure]_pre]:border
        [&_figure[data-rehype-pretty-code-figure]_pre]:border-zinc-800
        [&_figure[data-rehype-pretty-code-figure]_pre]:bg-zinc-950
        [&_figure[data-rehype-pretty-code-figure]_pre]:shadow-lg
        [&_figure[data-rehype-pretty-code-figure]_pre]:shadow-black/40
        [&_figure[data-rehype-pretty-code-figure]_pre]:overflow-x-auto
        [&_figure[data-rehype-pretty-code-figure]_pre]:p-5
        [&_figure[data-rehype-pretty-code-figure]_pre]:text-sm
        [&_figure[data-rehype-pretty-code-figure]_pre_code]:bg-transparent
        [&_figure[data-rehype-pretty-code-figure]_pre_code]:border-none
        [&_figure[data-rehype-pretty-code-figure]_pre_code]:p-0
        [&_figure[data-rehype-pretty-code-figure]_pre_code]:text-sm
        [&_figure[data-rehype-pretty-code-figure]_pre_code]:before:content-none
        [&_figure[data-rehype-pretty-code-figure]_pre_code]:after:content-none
        [&_[data-rehype-pretty-code-figure]_[data-line]]:leading-6

        [&_figcaption[data-rehype-pretty-code-title]]:text-xs
        [&_figcaption[data-rehype-pretty-code-title]]:font-mono
        [&_figcaption[data-rehype-pretty-code-title]]:text-zinc-500
        [&_figcaption[data-rehype-pretty-code-title]]:bg-zinc-900
        [&_figcaption[data-rehype-pretty-code-title]]:border
        [&_figcaption[data-rehype-pretty-code-title]]:border-zinc-800
        [&_figcaption[data-rehype-pretty-code-title]]:border-b-0
        [&_figcaption[data-rehype-pretty-code-title]]:rounded-t-xl
        [&_figcaption[data-rehype-pretty-code-title]]:px-4
        [&_figcaption[data-rehype-pretty-code-title]]:py-2
        [&_figcaption[data-rehype-pretty-code-title]+pre]:rounded-t-none
      "
    >
      {children}
    </div>
  );
}
