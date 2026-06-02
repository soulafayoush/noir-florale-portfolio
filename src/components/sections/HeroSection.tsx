"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef } from "react";
import { TextReveal, MagneticButton } from "@/components/ui/TextReveal";

export function HeroSection() {
  const { t, isRTLLayout } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textBlur = useTransform(scrollYProgress, [0, 0.5], [0, 4]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen min-h-[700px] overflow-hidden"
    >
      {/* Background Image with Parallax + Slow Zoom */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src="/images/hero-bg.png"
          alt="Luxury rare flowers backdrop"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Multi-layer gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20" />

      {/* Grain/noise texture overlay for cinematic feel */}
      <div className="grain-overlay absolute inset-0" />

      {/* Vignette effect — deepened for cinematic depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 start-[10%] float-element opacity-[0.03] pointer-events-none">
        <div className="w-32 h-32 rounded-full border border-luxury-gold" />
      </div>
      <div className="absolute bottom-1/3 end-[8%] float-element-reverse opacity-[0.03] pointer-events-none">
        <div className="w-24 h-24 rounded-full border border-luxury-gold" />
        <div className="absolute inset-4 rounded-full border border-luxury-gold/50" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6"
        style={{ opacity, filter: textBlur.get() > 0 ? `blur(${textBlur.get()}px)` : "none" }}
      >
        {/* Tagline — clipPath reveal animation */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-4 sm:mb-6 overflow-hidden"
        >
          <span className="inline-block px-5 py-2 text-[10px] sm:text-xs tracking-[0.35em] uppercase text-luxury-gold border border-luxury-gold/25 rounded-sm backdrop-blur-sm bg-luxury-gold/5">
            {t.hero.tagline}
          </span>
        </motion.div>

        {/* Headline — Text Reveal with word stagger */}
        <div className="overflow-hidden">
          <TextReveal
            text={t.hero.headline}
            className={`font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] max-w-5xl ${
              isRTLLayout ? "font-amiri" : ""
            }`}
            style={{ color: "var(--luxury-text-color)" }}
            delay={0.6}
            staggerDelay={0.1}
            as="h1"
          />
        </div>

        {/* Subtitle — fade + slide up with blur */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-5 sm:mt-7 text-sm sm:text-base md:text-lg max-w-xl font-light leading-relaxed"
          style={{ color: "var(--luxury-text-secondary-color)" }}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* CTA Button — Magnetic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-10 sm:mt-12"
        >
          <MagneticButton
            href="#rare-vault"
            strength={0.2}
            className="inline-flex items-center gap-3 px-10 py-4 border border-luxury-gold text-luxury-gold text-sm tracking-[0.25em] uppercase transition-all duration-500 hover:bg-luxury-gold hover:text-luxury-charcoal rounded-sm group relative overflow-hidden"
            ariaLabel={t.hero.cta}
          >
            {/* Shimmer on hover */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative">{t.hero.cta}</span>
            <motion.span
              className="relative inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator — refined */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-3 group"
          aria-label="Scroll down"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-luxury-gold/40 group-hover:text-luxury-gold/60 transition-colors duration-300">
            {t.hero.scroll}
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-luxury-gold/40 to-transparent" />
        </motion.a>
      </motion.div>
    </section>
  );
}
