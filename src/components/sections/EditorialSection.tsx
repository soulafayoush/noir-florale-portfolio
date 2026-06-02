"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { TextReveal } from "@/components/ui/TextReveal";

const editorialImages = [
  "/images/editorial-1.png",
  "/images/editorial-2.png",
  "/images/editorial-3.png",
];

export function EditorialSection() {
  const { t, isRTLLayout } = useLanguage();
  const Arrow = isRTLLayout ? ArrowLeft : ArrowRight;

  return (
    <section
      id="journal"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/editorial-bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/96" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs tracking-[0.35em] uppercase text-luxury-gold mb-4"
          >
            ✦ {isRTLLayout ? "المجلة" : "Journal"} ✦
          </motion.span>

          <div className="overflow-hidden">
            <TextReveal
              text={t.editorial.title}
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
            {t.editorial.subtitle}
          </motion.p>
        </div>

        {/* Editorial Cards — Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {t.editorial.articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group premium-card"
            >
              <div className="bg-luxury-section rounded-sm luxury-card-double overflow-hidden hover:border-luxury-gold/25">
                {/* Real editorial thumbnail */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={editorialImages[index]}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent group-hover:from-black/15 transition-all duration-700" />
                  {/* Article number indicator */}
                  <div className="absolute top-3 start-3 w-8 h-8 flex items-center justify-center rounded-full border border-luxury-gold/25 bg-background/70 backdrop-blur-sm">
                    <span className="text-[10px] font-medium tracking-wider text-luxury-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3
                    className={`font-playfair text-lg sm:text-xl font-semibold mb-2.5 transition-colors duration-300 group-hover:text-luxury-gold ${
                      isRTLLayout ? "font-amiri" : ""
                    }`}
                    style={{ color: "var(--luxury-text-color)" }}
                  >
                    {article.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed font-light mb-5"
                    style={{ color: "var(--luxury-text-secondary-color)" }}
                  >
                    {article.excerpt}
                  </p>

                  <motion.a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-luxury-gold cursor-pointer luxury-link group/link"
                    aria-label={`${t.editorial.readMore}: ${article.title}`}
                  >
                    {t.editorial.readMore}
                    <Arrow className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
