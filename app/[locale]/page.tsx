"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/hero";
import { FeaturedGallery } from "@/components/gallery/featured";
import { ContentSection } from "@/components/sections/content-section";
import { Container } from "@/components/sections/container";
import { Section as ProjectSection } from "@/components/projects/section";
import { Section as BlogSection } from "@/components/blog/section";
import { PROJECTS } from "@/lib/projects";
import { BLOG_POSTS } from "@/lib/blog";
import { LAST_UPDATED } from "@/lib/site";
import { container } from "@/animations/variants";

export default function Home() {
  return (
    <Container>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        <Hero name="Alejandro" lastUpdated={LAST_UPDATED} />
        
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
