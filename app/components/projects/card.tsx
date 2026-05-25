"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/projects";

interface CardProps {
  project: Project;
}

export function Card({ project }: CardProps) {
  return (
    <Link
      href={project.href}
      className="group flex items-center gap-3.5 py-3 -mx-3 px-3 rounded-lg transition-colors duration-200 hover:bg-zinc-800/40"
    >
      <div className="w-9 h-9 rounded-md shrink-0 overflow-hidden flex items-center justify-center bg-zinc-900/50">
        <Image
          src={project.logo}
          alt={project.name}
          width={36}
          height={36}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-base text-zinc-100 font-medium transition-colors duration-200 group-hover:text-zinc-50">
            {project.name}
          </span>
          {project.badge && (
            <span className="text-xs font-medium rounded-full px-2 py-0.5 leading-none border border-zinc-700/50 text-zinc-400 bg-zinc-900/50">
              {project.badge}
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
          <span className="text-sm text-zinc-400">{project.role}</span>
          <span className="text-sm text-zinc-700 shrink-0">·</span>
          <span className="text-xs font-mono text-zinc-500 tabular-nums whitespace-nowrap shrink-0">
            {project.years}
          </span>
        </div>
      </div>
    </Link>
  );
}
