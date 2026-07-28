import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

export const CHIP_COLORS = {
  sky: "bg-sky-50 text-sky-700 border-sky-200",
  violet: "bg-violet-50 text-violet-700 border-violet-200",
  emerald: "bg-emerald-50 text-emerald-700 border-emerald-200",
  amber: "bg-amber-50 text-amber-700 border-amber-200",
  rose: "bg-rose-50 text-rose-700 border-rose-200",
  neutral: "bg-neutral-50 text-neutral-600 border-neutral-200",
} as const;

export type ChipColor = keyof typeof CHIP_COLORS;

interface ChipProps extends ComponentPropsWithoutRef<"span"> {
  color: ChipColor;
  icon?: ReactNode;
  children: ReactNode;
}

export function Chip({ color, icon, children, className, ...props }: ChipProps) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex items-center gap-1 overflow-hidden rounded-full border px-2 py-1 text-xs font-medium shadow-sm",
        CHIP_COLORS[color],
        className,
      )}
    >
      {icon}
      <span className="truncate">{children}</span>
    </span>
  );
}
