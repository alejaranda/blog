export const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
} as const;

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
} as const;

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1 },
} as const;

export const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
} as const;
