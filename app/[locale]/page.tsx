"use client";

import { useTranslations } from "next-intl";
import { Section } from "@/app/components/projects/section";
import { PROJECTS } from "@/app/lib/projects";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-xl px-6 py-20">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-50">
          Alejandro
        </h1>
        <h2 className="mt-3 mb-16 text-base text-zinc-400 font-light leading-relaxed">
          Lorem, ipsum dolor sit amet
        </h2>
        <Section title="Latest" projects={PROJECTS} />
      </div>
    </div>
  );
}
