"use client";

interface PostHeaderProps {
  date: string;
  title: string;
}

export function PostHeader({ date, title }: PostHeaderProps) {
  return (
    <header className="mb-10">
      <div className="flex items-center gap-3 text-sm text-zinc-500 mb-4">
        <time>{date}</time>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-100 mb-6">
        {title}
      </h1>

    </header>
  );
}
