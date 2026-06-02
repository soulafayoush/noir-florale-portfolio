"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";

const marqueeItems = [
  { icon: "✦", key: "event" },
  { icon: "❋", key: "subscription" },
  { icon: "✦", key: "spatial" },
  { icon: "❋", key: "event" },
  { icon: "✦", key: "subscription" },
  { icon: "❋", key: "spatial" },
  { icon: "✦", key: "event" },
  { icon: "❋", key: "subscription" },
];

function getMarqueeText(key: string, lang: string) {
  const map: Record<string, Record<string, string>> = {
    en: {
      event: "Event Styling",
      subscription: "Subscription Boxes",
      spatial: "Spatial Design",
    },
    ar: {
      event: "تنسيق المناسبات",
      subscription: "اشتراكات دورية",
      spatial: "تصميم مكاني",
    },
  };
  return map[lang]?.[key] || key;
}

export function ServicesMarquee() {
  const { language } = useLanguage();

  const items = marqueeItems.map((item) => ({
    text: getMarqueeText(item.key, language),
    icon: item.icon,
  }));

  return (
    <div className="relative py-5 sm:py-6 overflow-hidden border-y border-luxury-border/50 bg-luxury-section">
      {/* Fade edges */}
      <div className="absolute inset-y-0 start-0 w-16 sm:w-24 bg-gradient-to-r from-luxury-section to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 end-0 w-16 sm:w-24 bg-gradient-to-l from-luxury-section to-transparent z-10 pointer-events-none" />

      <div className="marquee-track">
        {/* Duplicate for seamless loop */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 mx-6 sm:mx-10 whitespace-nowrap"
          >
            <span className="text-luxury-gold/30 text-[10px]">{item.icon}</span>
            <span className="text-xs sm:text-sm tracking-[0.25em] uppercase font-light" style={{ color: "var(--luxury-text-secondary-color)" }}>
              {item.text}
            </span>
            <span className="text-luxury-gold/20 text-[10px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
