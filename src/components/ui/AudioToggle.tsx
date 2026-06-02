"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

function getStoredAudio(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("noir-florale-audio") === "true";
}

export function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(getStoredAudio);

  const toggle = useCallback(() => {
    setIsPlaying((prev) => {
      const next = !prev;
      localStorage.setItem("noir-florale-audio", String(next));
      return next;
    });
  }, []);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
      className="w-9 h-9 flex items-center justify-center rounded-full border border-luxury-border bg-background/50 backdrop-blur-sm transition-colors hover:border-luxury-gold/30"
      aria-label={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div
            key="volume-on"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Volume2 className="w-4 h-4 text-luxury-gold" />
          </motion.div>
        ) : (
          <motion.div
            key="volume-off"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <VolumeX className="w-4 h-4 text-luxury-gold" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
