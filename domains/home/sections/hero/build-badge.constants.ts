import type { LucideIcon } from "lucide-react";
import { PackageCheck, PackageMinus, PackageX } from "lucide-react";

import type { ChipColor } from "@/shared/ui/chip";

import type { BuildStatus } from "./build-badge.types";

interface BuildStatusStyle {
  chipColor: ChipColor;
  textClass: string;
  Icon: LucideIcon;
}

export const BUILD_STATUS: Record<BuildStatus, BuildStatusStyle> = {
  deployed: {
    chipColor: "emerald",
    textClass: "text-emerald-600",
    Icon: PackageCheck,
  },
  building: {
    chipColor: "amber",
    textClass: "text-amber-600",
    Icon: PackageMinus,
  },
  failed: {
    chipColor: "rose",
    textClass: "text-rose-600",
    Icon: PackageX,
  },
};
