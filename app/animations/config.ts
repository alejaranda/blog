export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
  },
  easing: {
    standard: "easeOut" as const,
    inOut: "easeInOut" as const,
  },
  stagger: 0.15,
  spring: {
    type: "spring" as const,
    stiffness: 100,
    damping: 40,
    mass: 1,
  },
} as const;
