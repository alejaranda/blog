"use client";
import Link from "next/link";
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

export function Section({ projects, posts }: CombinedSectionProps) {
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

        <div className="flex items-center gap-4">
          <Link
            href={activeTab === "projects" ? "/projects" : "/blog"}
            className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-600 hover:text-zinc-400 transition-colors duration-150 group"
          >
            <span className="opacity-0 -translate-x-0.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 text-zinc-500">
              /
            </span>
            {" "}View all
          </Link>
          <ViewToggle view={view} onChange={setView} />
        </div>
      </div>

      {activeTab === "projects" ? (
        <List type="projects" items={projects} view={view} />
      ) : (
        <List type="blog" items={posts} view={view} />
      )}
    </section>
  );
}
