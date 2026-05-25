export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  label?: string;
  year?: string;
}
export const FADE_UP = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 },
} as const;

export const IMAGE_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
} as const;

export const GALLERY_CONFIG = {
  imageTransitionDuration: 0.8,
  imageEasing: "easeInOut" as const,
  lightboxBackdropDuration: 0.5,
  lightboxTransitionDuration: 0.7,
  lightboxImageTransitionDuration: 0.8,
  captionDelay: 0.4,
  captionDuration: 0.7,
  captionEasing: "easeOut" as const,
  springConfig: {
    type: "spring" as const,
    stiffness: 100,
    damping: 40,
    mass: 1,
  },
  imageBrightnessNormal: 0.85,
  imageBrightnessHover: 1.0,
  imageObjectFit: "cover" as const,
  borderRadius: "rounded-3xl",
  lightboxBorderRadius: "rounded-[32px]",
  aspectRatio: "aspect-video",
  fadeUpDelay: 0.6,
  fadeUpEasing: "easeOut" as const,
} as const;
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/logos/Santana.png",
    alt: "Santana",
    label: "Project",
    year: "2026",
  }
];
