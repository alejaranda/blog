import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import { ANIMATION_CONFIG } from "@/animations/config";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ContentSection({ children, className = "" }: SectionProps) {
  return (
    <motion.section
      variants={fadeUp}
      transition={{ duration: ANIMATION_CONFIG.duration.slow, ease: ANIMATION_CONFIG.easing.standard }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
