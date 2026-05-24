"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations();

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">{t("welcome")}</h1>
    </>
  );
}
