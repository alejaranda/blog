import { AlertCircle, GitBranch, GitCommit, Tag } from "lucide-react";

export const BUILD_CHIP_CLASS = {
  version: "border-neutral-200 bg-neutral-50 text-neutral-700",
  commit: "border-sky-200 bg-sky-50 text-sky-700",
  branch: "border-violet-200 bg-violet-50 text-violet-700",
  dirty: "border-amber-200 bg-amber-50 text-amber-700",
} as const;

export const BUILD_ICONS = {
  version: Tag,
  commit: GitCommit,
  branch: GitBranch,
  dirty: AlertCircle,
} as const;
