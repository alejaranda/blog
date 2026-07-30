import type { ContentItem } from "@/shared/ui/content-list";

import type { ActivityCategoryId } from "./activity.types";
import { projects } from "./projects";
import { writing } from "./writing";

export const activityItemsByCategory = {
  projects,
  writing,
} satisfies Record<ActivityCategoryId, ContentItem[]>;
