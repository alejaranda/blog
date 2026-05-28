"use client";

import { Project } from "@/types/project";
import { BlogPost } from "@/types/blog";
import { useState } from "react";
import { useViewMode } from "@/hooks/use-view-mode";
import { ViewToggle } from "../ui/view-toggle";
import { List } from "../shared/list";

interface CombinedSectionProps {
  projects: Project[];
  posts: BlogPost[];
}

type TabType = "projects" | "writing";

export function Section({
  projects,
  posts,
}: CombinedSectionProps) {
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const { view, setView } = useViewMode("list");

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("projects")}
            className={`text-xs font-semibold font-mono uppercase tracking-widest transition-colors ${activeTab === "projects"
              ? "text-zinc-100"
              : "text-zinc-500 hover:text-zinc-400"
              }`}
          >
            Projects
          </button>
          <span className="text-zinc-600">/</span>
          <button
            onClick={() => setActiveTab("writing")}
            className={`text-xs font-semibold font-mono uppercase tracking-widest transition-colors ${activeTab === "writing"
              ? "text-zinc-100"
              : "text-zinc-500 hover:text-zinc-400"
              }`}
          >
            Writing
          </button>
        </div>
        <ViewToggle view={view} onChange={setView} />
      </div>

      {activeTab === "projects" ? (
        <List type="projects" items={projects} view={view} />
      ) : (
        <List type="blog" items={posts} view={view} />
      )}
    </section>
  );
}
