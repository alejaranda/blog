"use client";

import { useTranslations } from "next-intl";

import { ContentList } from "@/shared/ui/content-list/";

import { activityItemsByCategory } from "../../content/activity";
import { ACTIVITY_CATEGORY_HREFS, ACTIVITY_CATEGORY_IDS } from "../../content/activity.types";

export function Activity() {
  const t = useTranslations("home.categories");

  const categories = ACTIVITY_CATEGORY_IDS.map((id) => ({
    id,
    label: t(id),
    href: ACTIVITY_CATEGORY_HREFS[id],
  }));

  return (
    <ContentList
      categories={categories}
      itemsByCategory={activityItemsByCategory}
      defaultCategory="projects"
    />
  );
}
