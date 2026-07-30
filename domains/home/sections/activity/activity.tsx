"use client";

import { useMemo } from "react";

import { useTranslations } from "next-intl";

import { ContentList } from "@/shared/ui/content-list";

import {
  ACTIVITY_CATEGORIES,
  type ActivityItemsByCategory,
} from "../../content/activity";

type Props = {
  itemsByCategory: ActivityItemsByCategory;
};

export function Activity({ itemsByCategory }: Props) {
  const t = useTranslations("home.categories");

  const categories = useMemo(
    () =>
      ACTIVITY_CATEGORIES.map(({ id, href }) => ({
        id,
        href,
        label: t(id),
      })),
    [t],
  );

  return (
    <ContentList
      categories={categories}
      itemsByCategory={itemsByCategory}
      defaultCategory="projects"
    />
  );
}
