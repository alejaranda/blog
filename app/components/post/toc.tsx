"use client";

interface PostTableOfContentsProps {
  sections: {
    id: string;
    title: string;
    level: 1 | 2 | 3;
  }[];
}

export function PostTableOfContents({ sections }: PostTableOfContentsProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
          On this page
        </h4>
        <ul className="space-y-3 text-sm text-zinc-400 border-l border-zinc-800 pl-4">
          {sections.map((section) => (
            <li key={section.id} style={{ marginLeft: `${(section.level - 1) * 12}px` }}>
              <a
                href={`#${section.id}`}
                className="hover:text-zinc-100 transition-colors"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
