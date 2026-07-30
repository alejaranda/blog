import type { ContentItem } from "@/shared/ui/content-list";

import { projects } from "../../projects/content/projects";
import { writing } from "../../writing/content/writing";
import type { ActivityCategoryId } from "./activity.types";

export const activityItemsByCategory = {
  projects,
  writing,
} satisfies Record<ActivityCategoryId, ContentItem[]>;
