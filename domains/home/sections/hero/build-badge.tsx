"use client";
import { cn } from "@/shared/lib/cn";
import { Clock3, GitBranch, GitCommit, Radio } from "lucide-react";
import { useLocale } from "next-intl";

import { Chip } from "@/shared/ui/chip";

import { BUILD_STATUS } from "./build-badge.constants";
import type { BuildInfo } from "./build-badge.types";
import { formatBuildDate, shortBranchName } from "./build-badge.utils";

interface BuildBadgeProps {
  build: BuildInfo;
}

const tooltipPosition = cn(
  "absolute left-1/2 top-full mt-2 -translate-x-1/2",
  "sm:left-full sm:top-1/2 sm:ml-2 sm:mt-0",
  "sm:translate-x-0 sm:-translate-y-1/2",
);

const tooltipClassName = cn(
  "z-50 flex w-max flex-col items-stretch gap-1.5",
  "sm:flex-row sm:flex-nowrap sm:items-center",
  "pointer-events-none opacity-0 transition-all duration-200",
  "group-hover:pointer-events-auto group-hover:opacity-100",
  "group-focus-within:pointer-events-auto group-focus-within:opacity-100",
);

export function BuildBadge({ build }: BuildBadgeProps) {
  const locale = useLocale();

  const { Icon, chipColor, textClass } = BUILD_STATUS[build.status];

  return (
    <button
      type="button"
      aria-describedby="build-tooltip"
      className="group relative inline-flex cursor-default font-mono text-xs text-neutral-500"
    >
      <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-2.5 py-1 transition-colors group-hover:border-neutral-300 group-focus-within:border-neutral-300">
        <Icon className={`size-3 ${textClass}`} />
        <span>v{build.version}</span>
      </span>

      <div id="build-tooltip" role="tooltip" className={cn(tooltipPosition, tooltipClassName)}>
        <Chip color="sky" icon={<GitCommit className="size-3" />}>
          {build.commit.slice(0, 7)}
        </Chip>

        <Chip color="violet" icon={<GitBranch className="size-3" />} title={build.branch}>
          <span className="inline-block max-w-40 truncate sm:max-w-45">
            {shortBranchName(build.branch)}
          </span>
        </Chip>

        <Chip color="neutral" icon={<Clock3 className="size-3" />}>
          {formatBuildDate(build.date, locale)}
        </Chip>

        <Chip color={chipColor} icon={<Radio className="size-3" />}>
          <span className="capitalize">{build.status}</span>
        </Chip>
      </div>
    </button>
  );
}
