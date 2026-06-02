"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Package, Trees } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { TextReveal } from "@/components/ui/TextReveal";

const serviceIcons = [Sparkles, Package, Trees];

export function ServicesSection() {
  const { t, isRTLLayout } = useLanguage();

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/services-bg.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-background/92" />
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
            ✦ Services ✦
          </motion.span>

          <div className="overflow-hidden">
            <TextReveal
              text={t.services.title}
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
            className="mt-4 sm:mt-5 text-sm sm:text-base font-light max-w-lg mx-auto"
            style={{ color: "var(--luxury-text-secondary-color)" }}
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* Service Cards — Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group relative p-7 sm:p-9 lg:p-10 bg-luxury-section rounded-sm border border-luxury-border premium-card hover:border-luxury-gold/25"
              >
                {/* Hover glow background */}
                <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-luxury-gold/0 to-luxury-gold/0 group-hover:from-luxury-gold/5 group-hover:to-transparent transition-all duration-700 pointer-events-none" />

                {/* Icon */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border border-luxury-gold/15 mb-6 sm:mb-7 transition-all duration-500 group-hover:border-luxury-gold/40 group-hover:bg-luxury-gold/5 group-hover:scale-110">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold transition-transform duration-500 group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3
                  className={`relative font-playfair text-lg sm:text-xl font-semibold mb-3 ${
                    isRTLLayout ? "font-amiri" : ""
                  } group-hover:text-luxury-gold transition-colors duration-400`}
                  style={{ color: "var(--luxury-text-color)" }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="relative text-sm leading-relaxed font-light"
                  style={{ color: "var(--luxury-text-secondary-color)" }}
                >
                  {service.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 start-0 end-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/0 to-transparent group-hover:via-luxury-gold/30 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
