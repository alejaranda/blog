"use client";

import { ViewMode } from "@/types/common";
import { ListIcon, CompactIcon } from "./icons";

interface ViewToggleProps {
  view: ViewMode;
  onChange: (v: ViewMode) => void;
}

export function ViewToggle({ view, onChange }: ViewToggleProps) {
  return (
    <div role="group" aria-label="View" className="flex items-center gap-0.5">
      <button
        type="button"
        aria-pressed={view === "list"}
        aria-label="List view"
        onClick={() => onChange("list")}
        className={`flex items-center justify-center w-7 h-7 rounded-md border-none transition-colors duration-200 ${
          view === "list"
            ? "bg-zinc-800 text-zinc-100"
            : "bg-transparent text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-300"
        }`}
      >
        <ListIcon />
      </button>

      <button
        type="button"
        aria-pressed={view === "compact"}
        aria-label="Compact view"
        onClick={() => onChange("compact")}
        className={`flex items-center justify-center w-7 h-7 rounded-md border-none transition-colors duration-200 ${
          view === "compact"
            ? "bg-zinc-800 text-zinc-100"
            : "bg-transparent text-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-300"
        }`}
      >
        <CompactIcon />
      </button>
    </div>
  );
}
