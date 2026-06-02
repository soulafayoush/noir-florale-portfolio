"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef } from "react";
import { TextReveal } from "@/components/ui/TextReveal";

const flowerImages = [
  "/images/flower-ghost-orchid.png",
  "/images/flower-black-rose.png",
  "/images/flower-juliet-rose.png",
  "/images/flower-blue-lotus.png",
  "/images/flower-kadupul.png",
];

const rarityStars: Record<string, number> = {
  "Ultra Rare": 5,
  "Extremely Rare": 4,
  Legendary: 5,
  Mythical: 4,
  Priceless: 5,
  "نادر جداً": 5,
  "نادر للغاية": 4,
  "أسطوري": 5,
  "ثمينة لا تقدر بثمن": 5,
};

function FlowerCard({
  flower,
  image,
  stars,
  index,
  isRTLLayout,
}: {
  flower: { name: string; origin: string; rarity: string; symbolism: string };
  image: string;
  stars: number;
  index: number;
  isRTLLayout: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer premium-card"
    >
      {/* Image with reveal animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={isInView ? { scale: 1 } : { scale: 1.2 }}
          transition={{
            duration: 1.4,
            delay: index * 0.12,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          className="w-full h-full"
        >
          <Image
            src={image}
            alt={flower.name}
            fill
            className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>
      </div>

      {/* Default Overlay (subtle gradient) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-700 group-hover:from-black/80 group-hover:via-black/40" />

      {/* Always visible name at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 transition-transform duration-700 group-hover:-translate-y-2">
        <h3
          className={`font-playfair text-lg sm:text-xl font-semibold text-white ${
            isRTLLayout ? "font-amiri" : ""
          }`}
        >
          {flower.name}
        </h3>
        <p className="text-[10px] sm:text-xs tracking-[0.15em] uppercase text-white/40 mt-1">
          {flower.origin}
        </p>
      </div>

      {/* Cinematic Profile - appears on hover */}
      <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-700">
        <div className="space-y-2.5 sm:space-y-3">
          <h3
            className={`font-playfair text-xl sm:text-2xl font-bold text-white ${
              isRTLLayout ? "font-amiri" : ""
            }`}
          >
            {flower.name}
          </h3>

          <p className="text-xs sm:text-sm text-white/60 tracking-wider">
            {flower.origin}
          </p>

          {/* Rarity Stars */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: stars }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 fill-luxury-gold text-luxury-gold"
                />
              ))}
              {Array.from({ length: 5 - stars }).map((_, i) => (
                <Star
                  key={`empty-${i}`}
                  className="w-3 h-3 text-white/20"
                />
              ))}
            </div>
            <span className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-luxury-gold font-medium">
              {flower.rarity}
            </span>
          </div>

          <p className="text-xs sm:text-sm text-white/50 font-light leading-relaxed">
            {flower.symbolism}
          </p>
        </div>
      </div>

      {/* Gold border on hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-luxury-gold/30 transition-all duration-700 rounded-sm pointer-events-none" />
    </motion.div>
  );
}

export function RareVaultSection() {
  const { t, isRTLLayout } = useLanguage();

  const flowers = t.vault.flowers.map((flower, index) => ({
    ...flower,
    image: flowerImages[index],
    stars: rarityStars[flower.rarity] || 4,
  }));

  return (
    <section id="rare-vault" className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-[0.35em] uppercase text-luxury-gold mb-4"
          >
            ✦ Collection ✦
          </motion.span>

          <div className="overflow-hidden">
            <TextReveal
              text={t.vault.title}
              className={`font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ${
                isRTLLayout ? "font-amiri" : ""
              }`}
              style={{ color: "var(--luxury-text-color)" }}
              staggerDelay={0.08}
              as="h2"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 sm:mt-5 text-sm sm:text-base font-light max-w-md mx-auto"
            style={{ color: "var(--luxury-text-secondary-color)" }}
          >
            {t.vault.subtitle}
          </motion.p>
        </div>

        {/* Gallery Grid — premium asymmetric layout on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {flowers.map((flower, index) => (
            <FlowerCard
              key={flower.name}
              flower={flower}
              image={flower.image}
              stars={flower.stars}
              index={index}
              isRTLLayout={isRTLLayout}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
