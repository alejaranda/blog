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
      className="group flex items-center gap-3 py-3 px-3 -mx-3 border-b transition-colors duration-100"
    >
      <span className="font-mono text-xs shrink-0 w-14">
        {project.date}
      </span>

      <div className="flex items-baseline gap-1.5 min-w-0 flex-1">
        <span className="text-sm font-medium transition-colors shrink-0">
          {project.name}
        </span>
        <span className="shrink-0">·</span>
        {project.description && (
          <span className="text-xs truncate transition-colors">
            {truncateDescription(project.description)}
          </span>
        )}
        {project.badge && (
          <span className="text-xs font-medium border rounded px-1.5 py-px whitespace-nowrap shrink-0 ml-auto">
            {project.badge}
          </span>
        )}
      </div>
    </Link>
  );
}
