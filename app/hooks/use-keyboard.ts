"use client";

import { useEffect } from "react";

interface UseKeyboardProps {
  enabled?: boolean;
  onEscape?: () => void;
  onArrowLeft?: () => void;
  onArrowRight?: () => void;
}

export function useKeyboard({
  enabled = true,
  onEscape,
  onArrowLeft,
  onArrowRight,
}: UseKeyboardProps): void {
  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onEscape) {
        onEscape();
      }
      if (event.key === "ArrowLeft" && onArrowLeft) {
        onArrowLeft();
      }
      if (event.key === "ArrowRight" && onArrowRight) {
        onArrowRight();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, onEscape, onArrowLeft, onArrowRight]);
}
