"use client";

import { useState } from "react";
import { GalleryImage } from "@/types/gallery";
import { mod } from "@/lib/utils/math";

interface UseGalleryProps {
  images: GalleryImage[];
}

interface UseGalleryReturn {
  imageIndex: number;
  currentImage: GalleryImage;
  isLightboxOpen: boolean;
  openLightbox: () => void;
  closeLightbox: () => void;
  goToImage: (index: number) => void;
  nextImage: () => void;
  prevImage: () => void;
}

export function useGallery({ images }: UseGalleryProps): UseGalleryReturn {
  const [imageIndex, setImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const currentImage = images[imageIndex];

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  const goToImage = (index: number) => {
    setImageIndex(mod(index, images.length));
  };

  const nextImage = () => goToImage(imageIndex + 1);
  const prevImage = () => goToImage(imageIndex - 1);

  return {
    imageIndex,
    currentImage,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    goToImage,
    nextImage,
    prevImage,
  };
}
