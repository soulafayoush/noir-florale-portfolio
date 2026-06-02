"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

interface PageLoaderProps {
  isVisible: boolean;
  onComplete: () => void;
}

export function PageLoader({ isVisible, onComplete }: PageLoaderProps) {
  const { t, language } = useLanguage();

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Brand Name — elegant reveal */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-12"
          >
            <h1 className={`font-playfair text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.3em] text-luxury-gold ${language === "ar" ? "font-amiri" : ""}`}>
              {language === "ar" ? "نوار فلورال" : "NOIR FLORALE"}
            </h1>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-4 mx-auto w-32 h-px bg-gradient-to-r from-transparent via-luxury-gold/50 to-transparent"
            />
          </motion.div>

          {/* Progress Bar — refined */}
          <div className="w-48 sm:w-56 md:w-64 h-px bg-luxury-border overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-luxury-gold/60 via-luxury-gold to-luxury-gold/60"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
            />
          </div>

          {/* Subtle loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-6 text-[9px] tracking-[0.5em] uppercase text-luxury-text-secondary"
          >
            {t.common.loading}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
