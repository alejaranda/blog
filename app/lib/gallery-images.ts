import { GalleryImage } from "@/types/gallery";
import { GALLERY_ANIMATION_VARIANTS, GALLERY_ANIMATION_CONFIG } from "@/animations/gallery";

export const FADE_UP = GALLERY_ANIMATION_VARIANTS.fadeUp;
export const IMAGE_VARIANTS = GALLERY_ANIMATION_VARIANTS.image;
export const GALLERY_CONFIG = GALLERY_ANIMATION_CONFIG;

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/logos/Santana.png",
    alt: "Santana",
    label: "Project",
    year: "2026",
  }
];
