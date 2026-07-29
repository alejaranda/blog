"use client";

import type { ReactNode } from "react";

import { inView } from "../config";
import { useEntranceVariants } from "../hooks/use-reduced-motion-safe";
import type { MotionTagName } from "./motion-tag";
import { MOTION_TAGS } from "./motion-tag";

type FadeInProps = {
  as?: MotionTagName;
  y?: number;
  delay?: number;
  duration?: number;
  className?: string;
  children: ReactNode;
};

export function FadeIn({ as = "div", y, delay, duration, className, children }: FadeInProps) {
  const MotionTag = MOTION_TAGS[as];

  const variants = useEntranceVariants({
    ...(y !== undefined && { y }),
    ...(delay !== undefined && { delay }),
    ...(duration !== undefined && { duration }),
  });

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={variants}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
