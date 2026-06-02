"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { TextReveal } from "@/components/ui/TextReveal";

function AnimatedCounter({
  value,
  suffix,
  label,
  isRTLLayout,
}: {
  value: number;
  suffix: string;
  label: string;
  isRTLLayout: boolean;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2500;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className={`block text-4xl sm:text-5xl md:text-6xl font-bold text-luxury-gold font-playfair ${
          isRTLLayout ? "font-amiri" : ""
        }`}
      >
        {count}
        {suffix}
      </motion.span>
      <motion.span
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="block mt-2 sm:mt-3 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-luxury-text-secondary"
      >
        {label}
      </motion.span>
    </div>
  );
}

export function AboutSection() {
  const { t, isRTLLayout } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40 bg-background">
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
            ✦ About ✦
          </motion.span>

          <div className="overflow-hidden">
            <TextReveal
              text={t.about.title}
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
            {t.about.subtitle}
          </motion.p>
        </div>

        {/* Content — Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTLLayout ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-16 h-px bg-luxury-gold/40 mb-8 origin-left rtl:origin-right"
            />

            <p
              className={`text-base sm:text-lg leading-[1.9] sm:leading-[2] font-light ${
                isRTLLayout ? "font-amiri" : ""
              }`}
              style={{ color: "var(--luxury-text-secondary-color)" }}
            >
              {t.about.description}
            </p>

            {/* Decorative element */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 flex items-center gap-3"
            >
              <div className="w-8 h-px bg-luxury-gold/30" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-luxury-gold/50">
                {t.about.established}
              </span>
              <div className="w-8 h-px bg-luxury-gold/30" />
            </motion.div>
          </motion.div>

          {/* Decorative / Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTLLayout ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
            className="relative"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 sm:gap-10 py-10 sm:py-14">
              {t.about.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.4 + index * 0.15,
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className={`relative ${
                    index > 0
                      ? "before:absolute before:top-1/2 before:-translate-y-1/2 before:w-px before:h-16 before:bg-luxury-border before:hidden sm:before:block"
                      : ""
                  } ${index === 1 ? "before:-start-5 sm:before:-start-5" : ""} ${
                    index === 2 ? "before:-start-5 sm:before:-start-5" : ""
                  }`}
                >
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    isRTLLayout={isRTLLayout}
                  />
                </motion.div>
              ))}
            </div>

            {/* Decorative floating ornament */}
            <div className="absolute -top-4 -end-4 w-20 h-20 sm:w-24 sm:h-24 opacity-[0.04] float-element">
              <div className="w-full h-full rounded-full border border-luxury-gold" />
              <div className="absolute inset-3 rounded-full border border-luxury-gold" />
              <div className="absolute inset-6 rounded-full border border-luxury-gold" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="mt-20 sm:mt-28 flex items-center justify-center gap-4">
        <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-luxury-gold/40" />
        <span className="text-luxury-gold/40 text-xs">✦</span>
        <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-luxury-gold/40" />
      </div>
    </section>
  );
}
