"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/sections/container";
import { ContentSection } from "@/components/sections/content-section";
import { Footer } from "@/app/components/footer/footer";
import { List } from "@/components/shared/list";
import { PROJECTS } from "@/lib/projects";
import { container } from "@/animations/variants";

export default function ProjectsPage() {
  return (
    <Container>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="mb-12 pt-5">
          <Link
            href="/"
            className="text-xs font-semibold font-mono text-zinc-400 uppercase tracking-widest hover:text-zinc-300 transition-colors mb-6 inline-block"
          >
            ← Back
          </Link>
          <h1 className="text-4xl font-light tracking-tight text-zinc-100 mb-2">
            Projects
          </h1>
          <p className="text-zinc-400">
            Lorem ipsum dolor sit
          </p>
        </div>

        <ContentSection>
          <List type="projects" items={PROJECTS} view="list" />
        </ContentSection>
      </motion.div>

      <div className="border-t border-neutral-800 mt-8">
        <Footer />
      </div>
    </Container>
  );
}
