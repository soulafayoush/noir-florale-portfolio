"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef } from "react";
import { TextReveal } from "@/components/ui/TextReveal";
import { FlowerModal } from "@/components/ui/FlowerModal";

const flowerImages: Record<string, string> = {
  "Ghost Orchid": "/images/flower-ghost-orchid.png",
  "Black Baccara Rose": "/images/flower-black-rose.png",
  "Juliet Rose": "/images/flower-juliet-rose.png",
  "Blue Lotus": "/images/flower-blue-lotus.png",
  "Kadupul Flower": "/images/flower-kadupul.png",
  "Middlemist Red": "/images/flower-middlemist.png",
  "Rothschild Orchid": "/images/flower-rothschild.png",
  "Chocolate Cosmos": "/images/flower-chocolate-cosmos.png",
  "Franklinia Tree": "/images/flower-franklinia.png",
  "Fire Lily": "/images/flower-fire-lily.png",
  "أوركيد الشبح": "/images/flower-ghost-orchid.png",
  "وردة البكارا السوداء": "/images/flower-black-rose.png",
  "وردة جولييت": "/images/flower-juliet-rose.png",
  "اللوتس الأزرق": "/images/flower-blue-lotus.png",
  "زهرة كادوبول": "/images/flower-kadupul.png",
  "كميليا ميدلمست الحمراء": "/images/flower-middlemist.png",
  "أوركيد روثتشايلد": "/images/flower-rothschild.png",
  "كوزموس الشوكولاتة": "/images/flower-chocolate-cosmos.png",
  "شجرة فرانكلينيا": "/images/flower-franklinia.png",
  "زنبق النار": "/images/flower-fire-lily.png",
};

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

const filters = ["all", "orchids", "roses", "exotic", "legendary"] as const;

function FlowerCard({
  flower,
  index,
  isRTLLayout,
  onClick,
}: {
  flower: { name: string; origin: string; rarity: string; symbolism: string; category: string };
  index: number;
  isRTLLayout: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const stars = rarityStars[flower.rarity] || 3;
  const imageSrc = flowerImages[flower.name] || "/images/flower-ghost-orchid.png";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{
        duration: 0.6,
        delay: (index % 6) * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      layout
      className="group relative aspect-[3/4] overflow-hidden premium-card luxury-card-border cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      aria-label={`View details: ${flower.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {/* Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.2, delay: (index % 6) * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full h-full"
        >
          <Image
            src={imageSrc}
            alt={flower.name}
            fill
            className="object-cover transition-transform duration-[1s] ease-out group-hover:scale-110"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent transition-all duration-700 group-hover:from-black/85 group-hover:via-black/40" />

      {/* Category badge */}
      <div className="absolute top-3 start-3 z-10">
        <span className="px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase bg-background/70 backdrop-blur-md text-luxury-gold rounded-sm border border-luxury-gold/20">
          {flower.category}
        </span>
      </div>

      {/* "View" indicator on hover */}
      <div className="absolute top-3 end-3 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
        <span className="px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase bg-luxury-gold/90 text-luxury-charcoal rounded-sm font-medium">
          {isRTLLayout ? "عرض" : "View"}
        </span>
      </div>

      {/* Always visible info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 transition-transform duration-700 group-hover:-translate-y-1 z-10">
        <h3
          className={`font-playfair text-base sm:text-lg font-semibold text-white ${
            isRTLLayout ? "font-amiri" : ""
          }`}
        >
          {flower.name}
        </h3>
        <p className="text-[10px] sm:text-xs tracking-[0.12em] uppercase text-white/35 mt-1">
          {flower.origin}
        </p>
      </div>

      {/* Hover details */}
      <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
        <div className="space-y-2">
          <h3
            className={`font-playfair text-lg sm:text-xl font-bold text-white ${
              isRTLLayout ? "font-amiri" : ""
            }`}
          >
            {flower.name}
          </h3>

          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: stars }).map((_, i) => (
                <Star key={i} className="w-2.5 h-2.5 fill-luxury-gold text-luxury-gold" />
              ))}
              {Array.from({ length: 5 - stars }).map((_, i) => (
                <Star key={`e-${i}`} className="w-2.5 h-2.5 text-white/20" />
              ))}
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-luxury-gold font-medium">
              {flower.rarity}
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-white/50 font-light leading-relaxed line-clamp-2">
            {flower.symbolism}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function RareVaultSection() {
  const { t, isRTLLayout } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedFlower, setSelectedFlower] = useState<{
    name: string;
    origin: string;
    rarity: string;
    symbolism: string;
    category: string;
  } | null>(null);

  const flowers = t.vault.flowers.map((flower) => ({
    ...flower,
    category: (flower as unknown as { category: string }).category || "exotic",
  }));

  const filtered = activeFilter === "all"
    ? flowers
    : flowers.filter((f) => f.category === activeFilter);

  const selectedImageSrc = selectedFlower
    ? flowerImages[selectedFlower.name] || "/images/flower-ghost-orchid.png"
    : "";

  const filterButtons = [
    { key: "all", label: t.vault.filterAll },
    { key: "orchids", label: t.vault.filterOrchids },
    { key: "roses", label: t.vault.filterRoses },
    { key: "exotic", label: t.vault.filterExotic },
    { key: "legendary", label: t.vault.filterLegendary },
  ];

  return (
    <section id="rare-vault" className="py-24 sm:py-32 lg:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-[0.35em] uppercase text-luxury-gold mb-4"
          >
            ✦ {isRTLLayout ? "المجموعة" : "Collection"} ✦
          </motion.span>

          <div className="overflow-hidden">
            <TextReveal
              text={t.vault.title}
              className={`font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${
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
            className="mt-4 text-sm font-light max-w-md mx-auto"
            style={{ color: "var(--luxury-text-secondary-color)" }}
          >
            {t.vault.subtitle}
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14"
        >
          {filterButtons.map((btn) => (
            <button
              key={btn.key}
              onClick={() => setActiveFilter(btn.key)}
              className={`filter-btn ${activeFilter === btn.key ? "active" : ""}`}
            >
              {btn.label}
            </button>
          ))}
        </motion.div>

        {/* Flower count */}
        <motion.p
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-[10px] tracking-[0.2em] uppercase mb-6 sm:mb-8"
          style={{ color: "var(--luxury-text-secondary-color)" }}
        >
          {filtered.length} {filtered.length === 1 ? t.vault.bloomCountSingle : t.vault.bloomCount}
        </motion.p>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((flower, index) => (
              <FlowerCard
                key={flower.name}
                flower={flower}
                index={index}
                isRTLLayout={isRTLLayout}
                onClick={() => setSelectedFlower(flower)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Flower Detail Modal */}
      <FlowerModal
        flower={selectedFlower}
        imageSrc={selectedImageSrc}
        onClose={() => setSelectedFlower(null)}
      />
    </section>
  );
}
