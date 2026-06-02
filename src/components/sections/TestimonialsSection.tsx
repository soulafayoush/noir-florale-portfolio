"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { TextReveal } from "@/components/ui/TextReveal";

export function TestimonialsSection() {
  const { t, isRTLLayout } = useLanguage();

  return (
    <section
      id="testimonials"
      className="relative py-24 sm:py-32 lg:py-40 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
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
            ✦ {t.testimonials.label} ✦
          </motion.span>

          <div className="overflow-hidden">
            <TextReveal
              text={t.testimonials.title}
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
            className="mt-4 sm:mt-5 text-sm sm:text-base font-light max-w-md mx-auto"
            style={{ color: "var(--luxury-text-secondary-color)" }}
          >
            {t.testimonials.subtitle}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {t.testimonials.items.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative p-7 sm:p-8 bg-luxury-section rounded-sm luxury-card-double luxury-card-corners premium-card"
            >
              {/* Quote Icon */}
              <div className="absolute top-5 end-6 opacity-[0.06] pointer-events-none">
                <Quote className="w-12 h-12 text-luxury-gold" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold"
                  />
                ))}
              </div>

              {/* Quote Text */}
              <p
                className={`text-sm sm:text-[15px] leading-[1.8] font-light mb-6 ${
                  isRTLLayout ? "font-amiri" : ""
                }`}
                style={{ color: "var(--luxury-text-secondary-color)" }}
              >
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-10 h-px bg-luxury-gold/20 mb-4" />

              {/* Author */}
              <div>
                <p
                  className={`text-sm font-semibold ${
                    isRTLLayout ? "font-amiri" : ""
                  }`}
                  style={{ color: "var(--luxury-text-color)" }}
                >
                  {testimonial.name}
                </p>
                <p
                  className="text-[11px] tracking-[0.1em] mt-1"
                  style={{ color: "var(--luxury-text-secondary-color)" }}
                >
                  {testimonial.role}
                </p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 start-0 end-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/0 to-transparent group-hover:via-luxury-gold/25 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
