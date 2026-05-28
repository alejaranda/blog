"use client";

import { Project } from "@/types/project";
import { BlogPost } from "@/types/blog";
import { Card } from "../shared/card";

interface ListProps {
  type: "projects" | "blog";
  items: Project[] | BlogPost[];
  view: "list" | "compact";
}

export function List({ type, items, view }: ListProps) {
  const containerClass =
    type === "projects"
      ? "border-t border-zinc-800 flex flex-col gap-0"
      : "border-t border-zinc-800";

  if (type === "projects") {
    const projects = items as Project[];
    return (
      <div className={containerClass}>
        {projects.map((project) => (
          <Card
            key={project.name}
            type="project"
            view={view}
            href={project.href}
            title={project.name}
            logo={project.logo}
            role={project.role}
            years={project.years}
            badge={project.badge}
            description={project.description}
            date={project.date}
          />
        ))}
      </div>
    );
  }

  const posts = items as BlogPost[];
  return (
    <div className={containerClass}>
      {posts.map((post) => (
        <Card
          key={post.href}
          type="blog"
          view={view}
          href={post.href}
          title={post.title}
          date={post.date}
          badge={post.tag}
          icon={post.icon}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  );
}
