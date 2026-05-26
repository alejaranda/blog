import { motion } from "framer-motion";
import { Intro } from "./intro";
import { SocialLinks } from "./social-links";
import { fadeUp } from "@/animations/variants";
import { ANIMATION_CONFIG } from "@/animations/config";

interface HeroProps {
  name: string;
  subtitle: string;
}

export function Hero({ name, subtitle }: HeroProps) {
  return (
    <motion.header
      variants={fadeUp}
      transition={{ duration: ANIMATION_CONFIG.duration.slow, ease: ANIMATION_CONFIG.easing.standard }}
    >
      <h1 className="text-4xl font-bold tracking-tight text-zinc-50">{name}</h1>
      <h2 className="mt-2 mb-8 text-sm font-semibold text-zinc-400 leading-relaxed">{subtitle}</h2>
      <Intro />
      <SocialLinks />
    </motion.header>
  );
}
