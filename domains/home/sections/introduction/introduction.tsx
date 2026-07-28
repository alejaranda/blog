import { useTranslations } from "next-intl";

export function Introduction() {
  const t = useTranslations("home");

  return (
    <section className="mb-3 mt-8 space-y-4 text-base leading-relaxed text-neutral-600">
      <p>{t("description")}</p>
      <p>{t("about")}</p>
    </section>
  );
}
