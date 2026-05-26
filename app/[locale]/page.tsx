"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Hero } from "@/components/hero";
import { FeaturedGallery } from "@/components/gallery/featured";
import { ContentSection } from "@/components/sections/content-section";
import { Container } from "@/components/sections/container";
import { Section as ProjectSection } from "@/components/projects/section";
import { Section as BlogSection } from "@/components/blog/section";
import { PROJECTS } from "@/lib/projects";
import { BLOG_POSTS } from "@/lib/blog";
import { container } from "@/animations/variants";

export default function Home() {
  const t = useTranslations();

  return (
    <Container>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Hero name="Alejandro" subtitle="Updated" />
        
        <FeaturedGallery />

        <ContentSection>
          <ProjectSection title="Projects" projects={PROJECTS} />
        </ContentSection>

        <ContentSection className="mt-20">
          <BlogSection title="Writing" posts={BLOG_POSTS} />
        </ContentSection>
      </motion.div>
    </Container>
  );
}
