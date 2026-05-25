"use client";

import { motion, AnimatePresence } from "framer-motion";
import { GalleryImage } from "@/types/gallery";
import { GALLERY_CONFIG } from "@/lib/gallery-images";
import { useKeyboard } from "@/hooks/use-keyboard";

interface LightboxProps {
  image: GalleryImage;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function Lightbox({
  image,
  isOpen,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useKeyboard({
    enabled: isOpen,
    onEscape: onClose,
    onArrowLeft: onPrev,
    onArrowRight: onNext,
  });

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: GALLERY_CONFIG.lightboxBackdropDuration, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={onClose}
          style={{
            backdropFilter: "blur(24px)",
            background: "rgba(0,0,0,0.92)",
          }}
        >
          <motion.div
            key={`lightbox-${image.id}`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{
              ...GALLERY_CONFIG.springConfig,
              duration: GALLERY_CONFIG.lightboxTransitionDuration,
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-4xl overflow-hidden cursor-pointer"
            style={{
              maxWidth: "min(90vw, 1100px)",
              maxHeight: "80vh",
              boxShadow: "0 60px 180px rgba(0,0,0,0.6)",
            }}
            onClickCapture={(e) => {
              const rect = (
                e.currentTarget as HTMLDivElement
              ).getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              if (clickX < rect.width / 2) {
                onPrev();
              } else {
                onNext();
              }
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              key={image.id}
              src={image.src}
              alt={image.alt}
              className="block w-full h-full object-cover"
              style={{ maxHeight: "80vh" }}
              loading="eager"
              draggable={false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: GALLERY_CONFIG.lightboxImageTransitionDuration,
                ease: GALLERY_CONFIG.imageEasing,
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: GALLERY_CONFIG.captionDelay,
                duration: GALLERY_CONFIG.captionDuration,
                ease: GALLERY_CONFIG.captionEasing,
              }}
              className="absolute bottom-0 left-0 right-0 px-8 py-8"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)",
              }}
            >
              {image.label && (
                <p className="text-white text-2xl font-light tracking-wide uppercase">
                  {image.label}
                </p>
              )}
              {image.year && (
                <p className="text-white/50 text-xs mt-2 tracking-wide">
                  {image.year}
                </p>
              )}
            </motion.div>
          </motion.div>

          <motion.button
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute top-8 right-8 w-10 h-10 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
            }}
          >
            <span className="text-lg">✕</span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
