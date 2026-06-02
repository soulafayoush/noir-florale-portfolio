"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Star, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface FlowerModalProps {
  flower: {
    name: string;
    origin: string;
    rarity: string;
    symbolism: string;
    category: string;
  } | null;
  imageSrc: string;
  onClose: () => void;
}

export function FlowerModal({ flower, imageSrc, onClose }: FlowerModalProps) {
  const { t, isRTLLayout } = useLanguage();

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose]
  );

  const rarityStars: Record<string, number> = {
    "Ultra Rare": 5,
    "Extremely Rare": 4,
    Legendary: 5,
    Mythical: 4,
    Priceless: 5,
    Rare: 3,
    "Extinct in Wild": 5,
    "نادر جداً": 5,
    "نادر للغاية": 4,
    "أسطوري": 5,
    "ثمينة لا تقدر بثمن": 5,
    "نادر": 3,
    "منقرض في البرية": 5,
  };

  if (!flower) return null;

  const stars = rarityStars[flower.rarity] || 3;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8"
        onClick={handleBackdropClick}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-luxury-section border border-luxury-border rounded-sm luxury-card-corners"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 end-4 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-luxury-border bg-background/80 backdrop-blur-sm transition-all hover:border-luxury-gold/40 hover:bg-luxury-gold/5"
            aria-label={t.common.close}
          >
            <X className="w-4 h-4 text-luxury-gold" />
          </button>

          {/* Image */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={imageSrc}
              alt={flower.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 672px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-section via-transparent to-transparent" />

            {/* Rarity Badge */}
            <div className="absolute bottom-4 start-4 flex items-center gap-2 px-3 py-2 bg-background/80 backdrop-blur-md border border-luxury-gold/20 rounded-sm">
              <div className="flex gap-0.5">
                {Array.from({ length: stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-luxury-gold text-luxury-gold"
                  />
                ))}
                {Array.from({ length: 5 - stars }).map((_, i) => (
                  <Star key={`e-${i}`} className="w-3 h-3 text-white/30" />
                ))}
              </div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-luxury-gold font-medium">
                {flower.rarity}
              </span>
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 start-4 px-3 py-1.5 bg-background/70 backdrop-blur-md border border-luxury-border rounded-sm">
              <span className="text-[10px] tracking-[0.2em] uppercase text-luxury-text-secondary">
                {flower.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Name */}
            <div>
              <h2
                className={`font-playfair text-2xl sm:text-3xl font-bold ${
                  isRTLLayout ? "font-amiri" : ""
                }`}
                style={{ color: "var(--luxury-text-color)" }}
              >
                {flower.name}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <MapPin className="w-3.5 h-3.5 text-luxury-gold/60" />
                <span className="text-sm tracking-[0.1em] text-luxury-text-secondary">
                  {flower.origin}
                </span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-luxury-border" />

            {/* Symbolism */}
            <div>
              <h4 className="text-[10px] tracking-[0.25em] uppercase text-luxury-gold mb-3">
                {t.vault.modalSymbolism}
              </h4>
              <p
                className="text-sm sm:text-base leading-relaxed font-light"
                style={{ color: "var(--luxury-text-secondary-color)" }}
              >
                {flower.symbolism}
              </p>
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onClose();
                setTimeout(() => {
                  const el = document.getElementById("contact");
                  if (el)
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 300);
              }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex items-center gap-3 px-8 py-3.5 border border-luxury-gold text-luxury-gold text-xs tracking-[0.25em] uppercase rounded-sm transition-all duration-500 hover:bg-luxury-gold hover:text-luxury-charcoal"
            >
              <span>{t.vault.modalCta}</span>
              <span>→</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
