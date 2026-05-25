"use client";

import { useState } from "react";
import { Project } from "@/app/lib";
import { ViewToggle } from "../ui/view-toggle";
import { ProjectsList } from "./ProjectsList";

interface ProjectsSectionProps {
  title?: string;
  projects: Project[];
}

export function ProjectsSection({
  title = "Title",
  projects,
}: ProjectsSectionProps) {
  const [view, setView] = useState<"list" | "compact">("list");

  return (
    <section>
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-xs font-semibold font-mono">
          {title}
        </span>
        <ViewToggle view={view} onChange={setView} />
      </div>

      <ProjectsList projects={projects} view={view} />
    </section>
  );
}
