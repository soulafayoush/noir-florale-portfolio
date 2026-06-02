"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { TextReveal } from "@/components/ui/TextReveal";

export function NewsletterSection() {
  const { t, isRTLLayout } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="relative py-20 sm:py-28 overflow-hidden border-y border-luxury-border">
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/[0.02] via-transparent to-luxury-gold/[0.02]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-14 h-14 flex items-center justify-center rounded-full border border-luxury-gold/20 mb-6"
          >
            <Sparkles className="w-5 h-5 text-luxury-gold" />
          </motion.div>

          {/* Title */}
          <div className="overflow-hidden">
            <TextReveal
              text={t.newsletter.title}
              className={`font-playfair text-2xl sm:text-3xl md:text-4xl font-bold ${
                isRTLLayout ? "font-amiri" : ""
              }`}
              style={{ color: "var(--luxury-text-color)" }}
              staggerDelay={0.06}
              as="h3"
            />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-3 text-sm font-light max-w-lg"
            style={{ color: "var(--luxury-text-secondary-color)" }}
          >
            {t.newsletter.subtitle}
          </motion.p>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 w-full max-w-md flex flex-col sm:flex-row gap-3"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.newsletter.placeholder}
              className="flex-1 bg-luxury-section border border-luxury-border rounded-sm px-4 py-3.5 text-sm text-foreground placeholder:text-luxury-text-secondary/30 focus:outline-none focus:border-luxury-gold/40 focus:ring-1 focus:ring-luxury-gold/15 transition-all duration-300"
              dir="ltr"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitted}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-luxury-gold text-luxury-charcoal text-xs tracking-[0.2em] uppercase font-medium rounded-sm transition-all duration-400 hover:bg-luxury-gold-dark disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              <Send className="w-3.5 h-3.5 relative" />
              <span className="relative">
                {submitted ? t.newsletter.success : t.newsletter.button}
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
