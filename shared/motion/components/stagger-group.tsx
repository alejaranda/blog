"use client";

import type { ReactNode } from "react";

import { inView } from "../config";
import type { StaggerOptions } from "../variants/container";
import { staggerContainer } from "../variants/container";
import type { MotionTagName } from "./motion-tag";
import { MOTION_TAGS } from "./motion-tag";

type StaggerGroupProps = {
  as?: MotionTagName;
  className?: string;
  children: ReactNode;
} & StaggerOptions;

export function StaggerGroup({
  as = "div",
  delayChildren,
  staggerChildren,
  className,
  children,
}: StaggerGroupProps) {
  const MotionTag = MOTION_TAGS[as];

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={inView}
      variants={staggerContainer({
        ...(delayChildren !== undefined && {
          delayChildren,
        }),

        ...(staggerChildren !== undefined && {
          staggerChildren,
        }),
      })}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
