import type { ContentItem } from "@/shared/ui/content-list";

import type { ActivityCategoryId } from "./activity.types";
import { projects } from "../../projects/content/projects";
import { writing } from "../../writing/content/writing";

export const activityItemsByCategory = {
  projects,
  writing,
} satisfies Record<ActivityCategoryId, ContentItem[]>;
