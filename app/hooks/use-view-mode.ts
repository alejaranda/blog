"use client";

import { useState } from "react";
import { ViewMode } from "@/types/common";

interface UseViewModeReturn {
  view: ViewMode;
  setView: (view: ViewMode) => void;
  isCompact: boolean;
}

export function useViewMode(initialView: ViewMode = "list"): UseViewModeReturn {
  const [view, setView] = useState<ViewMode>(initialView);

  return {
    view,
    setView,
    isCompact: view === "compact",
  };
}
