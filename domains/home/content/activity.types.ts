export const ACTIVITY_CATEGORY_IDS = ["projects", "writing"] as const;
export type ActivityCategoryId = (typeof ACTIVITY_CATEGORY_IDS)[number];

export const ACTIVITY_CATEGORY_HREFS: Record<ActivityCategoryId, string> = {
  projects: "/projects",
  writing: "/writing",
};
