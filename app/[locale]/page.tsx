"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/hero";
import { FeaturedGallery } from "@/components/gallery/featured";
import { ContentSection } from "@/components/sections/content-section";
import { Container } from "@/components/sections/container";
import { Footer } from "@/app/components/footer/footer";
import { Section as CombinedSection } from "@/components/combined/section";
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
          <CombinedSection projects={PROJECTS} posts={BLOG_POSTS} />
        </ContentSection>
      </motion.div>

      <div className="border-t border-neutral-800 mt-8">
        <Footer />
      </div>
    </Container>
  );
}
