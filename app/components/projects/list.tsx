"use client";

import { Project } from "@/types/project";
import { Card } from "./card";
import { CardCompact } from "./card-compact";

interface ListProps {
  projects: Project[];
  view: "list" | "compact";
}

export function List({ projects, view }: ListProps) {
  return (
    <div className="border-t border-zinc-800 flex flex-col gap-0">
      {projects.map((project) =>
        view === "compact" ? (
          <CardCompact key={project.name} project={project} />
        ) : (
          <Card key={project.name} project={project} />
        )
      )}
    </div>
  );
}
