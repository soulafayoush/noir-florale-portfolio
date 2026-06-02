"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === "en" ? "ar" : "en")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-luxury-border bg-background/50 backdrop-blur-sm transition-colors hover:border-luxury-gold/30 text-sm"
      aria-label={`Switch to ${language === "en" ? "Arabic" : "English"}`}
    >
      <Languages className="w-4 h-4 text-luxury-gold" />
      <span className="text-xs font-medium tracking-wider uppercase text-luxury-text">
        {language === "en" ? "AR" : "EN"}
      </span>
    </motion.button>
  );
}
