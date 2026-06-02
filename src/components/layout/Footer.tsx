"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter, ArrowUp } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

export function Footer() {
  const { t, isRTLLayout } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-luxury-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-10"
        >
          {/* Brand */}
          <div className="text-center">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className={`font-playfair text-2xl sm:text-3xl font-bold tracking-[0.15em] text-luxury-gold ${
                isRTLLayout ? "font-amiri" : ""
              }`}
            >
              {t.footer.brand}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-2.5 text-[10px] sm:text-xs tracking-[0.3em] uppercase text-luxury-text-secondary"
            >
              {t.footer.tagline}
            </motion.p>
          </div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-5"
          >
            {[
              { icon: Instagram, label: "Instagram", href: "#" },
              { icon: Facebook, label: "Facebook", href: "#" },
              { icon: Twitter, label: "Twitter", href: "#" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 flex items-center justify-center rounded-full border border-luxury-border transition-all duration-400 hover:border-luxury-gold/30 hover:bg-luxury-gold/5"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4 text-luxury-gold" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-20 h-px bg-luxury-gold/25"
          />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-[10px] sm:text-xs tracking-[0.15em] text-luxury-text-secondary"
          >
            {t.footer.copyright}
          </motion.p>
        </motion.div>
      </div>

      {/* Back to top — premium button */}
      <motion.button
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute top-7 end-7 w-11 h-11 flex items-center justify-center rounded-full border border-luxury-border bg-background/60 backdrop-blur-sm transition-all duration-400 hover:border-luxury-gold/30 hover:bg-luxury-gold/5"
        aria-label={t.common.scrollToTop}
      >
        <ArrowUp className="w-4 h-4 text-luxury-gold" />
      </motion.button>
    </footer>
  );
}
