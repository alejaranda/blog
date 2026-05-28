"use client";

import { motion } from "framer-motion";
import { Hero } from "@/components/hero";
import { FeaturedGallery } from "@/components/gallery/featured";
import { ContentSection } from "@/components/sections/content-section";
import { Container } from "@/components/sections/container";
import { Footer } from "@/app/components/footer/footer";
import { Section as WorkSection } from "@/components/work/section";
import { LAST_UPDATED } from "@/lib/site";
import { container } from "@/animations/variants";
import { Project } from "@/types/project";
import { BlogPost } from "@/types/blog";

interface Props {
  projects: Project[];
  posts: BlogPost[];
}

export function HomeClient({ projects, posts }: Props) {
  return (
    <Container>
      <motion.div variants={container} initial="hidden" animate="show">
        <Hero name="Alejandro" lastUpdated={LAST_UPDATED} />

        <FeaturedGallery />

        <ContentSection>
          <WorkSection projects={projects} posts={posts} />
        </ContentSection>
      </motion.div>

      <div className="border-t border-neutral-800 mt-8">
        <Footer />
      </div>
    </Container>
  );
}
