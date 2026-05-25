"use client";

import { useState } from "react";
import { Project } from "@/app/lib/projects";
import { ViewToggle } from "../ui/view-toggle";
import { List } from "./list";

interface SectionProps {
  title?: string;
  projects: Project[];
}

export function Section({
  title = "Latest",
  projects,
}: SectionProps) {
  const [view, setView] = useState<"list" | "compact">("list");

  return (
    <section>
      <div className="flex items-center justify-between mb-0.5">
        <span className="text-xs font-semibold font-mono">
          {title}
        </span>
        <ViewToggle view={view} onChange={setView} />
      </div>

      <List projects={projects} view={view} />
    </section>
  );
}
