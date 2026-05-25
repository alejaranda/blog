"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES, FADE_UP, IMAGE_VARIANTS, GALLERY_CONFIG } from "@/app/lib/gallery-images";
import { Lightbox } from "./lightbox";

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export function FeaturedGallery() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const currentImage = GALLERY_IMAGES[imageIndex];

  const handleOpenLightbox = () => {
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handlePrev = () => {
    setImageIndex(mod(imageIndex - 1, GALLERY_IMAGES.length));
  };

  const handleNext = () => {
    setImageIndex(mod(imageIndex + 1, GALLERY_IMAGES.length));
  };

  return (
    <>
      <motion.div
        variants={FADE_UP}
        initial="hidden"
        animate="show"
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-16"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage.id}
            variants={IMAGE_VARIANTS}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{
              duration: GALLERY_CONFIG.imageTransitionDuration,
              ease: GALLERY_CONFIG.imageEasing,
            }}
            className="border border-zinc-800 rounded-3xl overflow-hidden cursor-pointer group"
            onClick={handleOpenLightbox}
          >
            <div className="relative aspect-video bg-zinc-900">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-full object-cover transition-all duration-500"
                style={{ filter: `brightness(${GALLERY_CONFIG.imageBrightnessNormal})` }}
                loading="lazy"
                draggable={false}
                onMouseEnter={(e) =>
                ((e.currentTarget as HTMLImageElement).style.filter =
                  `brightness(${GALLERY_CONFIG.imageBrightnessHover})`)
                }
                onMouseLeave={(e) =>
                ((e.currentTarget as HTMLImageElement).style.filter =
                  `brightness(${GALLERY_CONFIG.imageBrightnessNormal})`)
                }
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {currentImage && (
        <Lightbox
          image={currentImage}
          isOpen={isLightboxOpen}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  );
}
