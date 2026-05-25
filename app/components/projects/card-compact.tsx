"use client";

import Link from "next/link";
import { Project } from "@/app/lib/projects";

interface CardCompactProps {
  project: Project;
}

export function CardCompact({ project }: CardCompactProps) {
  const truncateDescription = (text?: string, maxLength: number = 45) => {
    if (!text) return "";
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  };

  return (
    <Link
      href={project.href}
      className="group flex items-center gap-3 py-3 px-3 -mx-3 border-b border-zinc-800 transition-colors duration-200 hover:bg-zinc-800/40"
    >
      <span className="font-mono text-xs text-zinc-500 shrink-0 w-14">
        {project.date}
      </span>

      <div className="flex items-baseline gap-1.5 min-w-0 flex-1">
        <span className="text-sm text-zinc-100 font-medium transition-colors duration-200 group-hover:text-zinc-50 shrink-0">
          {project.name}
        </span>
        <span className="text-zinc-700/50 shrink-0">·</span>
        {project.description && (
          <span className="text-xs text-zinc-400 truncate transition-colors duration-200 group-hover:text-zinc-300">
            {truncateDescription(project.description)}
          </span>
        )}
        {project.badge && (
          <span className="text-xs font-medium border border-zinc-700/50 text-zinc-400 bg-zinc-900/50 rounded px-1.5 py-px whitespace-nowrap shrink-0 ml-auto">
            {project.badge}
          </span>
        )}
      </div>
    </Link>
  );
}
