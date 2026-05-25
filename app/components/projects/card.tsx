"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/app/lib/projects";

interface CardProps {
  project: Project;
}

export function Card({ project }: CardProps) {
  return (
    <Link
      href={project.href}
      className="group flex items-center gap-3.5 py-3 -mx-3 px-3 rounded-lg transition-colors duration-150"
    >
      <div className="w-9 h-9 rounded-md shrink-0 overflow-hidden flex items-center justify-center">
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
          <span className="text-base font-medium transition-colors">
            {project.name}
          </span>
          {project.badge && (
            <span className="text-xs font-medium rounded-full px-2 py-0.5 leading-none border">
              {project.badge}
            </span>
          )}
        </div>
        <div className="flex items-baseline gap-2 mt-0.5 flex-wrap">
          <span className="text-sm">{project.role}</span>
          <span className="text-sm shrink-0">·</span>
          <span className="text-xs font-mono tabular-nums whitespace-nowrap shrink-0">
            {project.years}
          </span>
        </div>
      </div>
    </Link>
  );
}
