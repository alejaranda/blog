"use client";

import { Project } from "@/types/project";
import { useViewMode } from "@/hooks/use-view-mode";
import { ViewToggle } from "../ui/view-toggle";
import { List } from "./list";

interface SectionProps {
  title?: string;
  projects: Project[];
}

export function Section({
  title = "Projects",
  projects,
}: SectionProps) {
  const { view, setView } = useViewMode("list");

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-semibold font-mono text-zinc-400 uppercase tracking-widest">
          {title}
        </span>
        <ViewToggle view={view} onChange={setView} />
      </div>

      <List projects={projects} view={view} />
    </section>
  );
}
