"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_IMAGES, FADE_UP, IMAGE_VARIANTS, GALLERY_CONFIG } from "@/lib/gallery-images";
import { useGallery } from "@/hooks/use-gallery";
import { useKeyboard } from "@/hooks/use-keyboard";
import { Lightbox } from "./lightbox";

export function FeaturedGallery() {
  const {
    currentImage,
    isLightboxOpen,
    openLightbox,
    closeLightbox,
    nextImage,
    prevImage,
  } = useGallery({ images: GALLERY_IMAGES });

  useKeyboard({
    enabled: isLightboxOpen,
    onEscape: closeLightbox,
    onArrowLeft: prevImage,
    onArrowRight: nextImage,
  });

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
            className="border border-zinc-800 rounded-3xl overflow-hidden cursor-pointer group"
            onClick={openLightbox}
            whileTap={{ scale: 0.97 }}
            transition={{
              duration: GALLERY_CONFIG.imageTransitionDuration,
              ease: GALLERY_CONFIG.imageEasing,
            }}
          >
            <div
              className="relative aspect-video bg-zinc-900"
            >
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
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}
