"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Section as ProjectSection } from "@/components/projects/section";
import { Section as BlogSection } from "@/components/blog/section";
import { FeaturedGallery } from "@/components/gallery/featured";
import { PROJECTS } from "@/lib/projects";
import { BLOG_POSTS } from "@/lib/blog";
import { fadeUp, container } from "@/animations/variants";
import { ANIMATION_CONFIG } from "@/animations/config";

export default function Home() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto w-full max-w-xl px-6 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.header
            variants={fadeUp}
            transition={{ duration: ANIMATION_CONFIG.duration.slow, ease: ANIMATION_CONFIG.easing.standard }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-zinc-50">
              Alejandro
            </h1>
            <h2 className="mt-3 mb-6 text-base text-zinc-400 font-light leading-relaxed">
              Lorem, ipsum dolor sit amet
            </h2>
            <FeaturedGallery />
          </motion.header>

          <motion.section
            variants={fadeUp}
            transition={{ duration: ANIMATION_CONFIG.duration.slow, ease: ANIMATION_CONFIG.easing.standard }}
          >
            <ProjectSection title="Projects" projects={PROJECTS} />
          </motion.section>

          <motion.section
            variants={fadeUp}
            transition={{ duration: ANIMATION_CONFIG.duration.slow, ease: ANIMATION_CONFIG.easing.standard }}
            className="mt-20"
          >
            <BlogSection title="Writing" posts={BLOG_POSTS} />
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
}
