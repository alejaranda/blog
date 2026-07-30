// domains/writing/view.tsx
"use client";

import { useTranslations } from "next-intl";

import { ListPage } from "@/shared/ui/list-page/list-page";

import { writing } from "./content/writing";

export function WritingView() {
  const t = useTranslations("domains.writing");

  return (
    <ListPage
      title={t("title")}
      description={t("description")}
      emptyLabel={t("empty")}
      items={writing}
    />
  );
}
