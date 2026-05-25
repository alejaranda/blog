"use client";

import { ListIcon, CompactIcon } from "./icons";

interface ViewToggleProps {
  view: "list" | "compact";
  onChange: (v: "list" | "compact") => void;
}

export function ViewToggle({ view, onChange }: ViewToggleProps) {
  return (
    <div role="group" aria-label="View" className="flex items-center gap-0.5">
      <button
        type="button"
        aria-pressed={view === "list"}
        aria-label="List view"
        onClick={() => onChange("list")}
        className={`flex items-center justify-center w-7 h-7 rounded-md border-none transition-colors duration-150 ${
          view === "list" ? "" : ""
        }`}
      >
        <ListIcon />
      </button>

      <button
        type="button"
        aria-pressed={view === "compact"}
        aria-label="Compact view"
        onClick={() => onChange("compact")}
        className={`flex items-center justify-center w-7 h-7 rounded-md border-none transition-colors duration-150 ${
          view === "compact" ? "" : ""
        }`}
      >
        <CompactIcon />
      </button>
    </div>
  );
}
