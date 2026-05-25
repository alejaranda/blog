"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/app/components/projects/section";
import { PROJECTS } from "@/app/lib/projects";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="mx-auto w-full max-w-xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-wide">Alejandro</h1>
      <h2 className="mt-2 mb-20 text-lg font-light">
        Lorem, ipsum dolor sit amet
      </h2>
      <Section title="Latest" projects={PROJECTS} />
    </div>
  );
}
