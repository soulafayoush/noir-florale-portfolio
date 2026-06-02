"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Clock,
  Send,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { TextReveal } from "@/components/ui/TextReveal";

export function ContactSection() {
  const { t, isRTLLayout } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", service: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    { icon: Mail, text: t.contact.info.email, href: "mailto:hello@noirflorale.com" },
    { icon: MapPin, text: t.contact.info.location, href: "#" },
    { icon: Clock, text: t.contact.info.hours, href: "#" },
  ];

  const socialLinks = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-background">
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
            ✦ Contact ✦
          </motion.span>

          <div className="overflow-hidden">
            <TextReveal
              text={t.contact.title}
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
            {t.contact.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTLLayout ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[10px] sm:text-xs tracking-[0.2em] uppercase text-luxury-text-secondary mb-2.5"
                >
                  {t.contact.nameLabel}
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder={t.contact.placeholder.name}
                  className="w-full bg-luxury-section border border-luxury-border rounded-sm px-4 py-3.5 text-sm text-foreground placeholder:text-luxury-text-secondary/30 focus:outline-none focus:border-luxury-gold/40 focus:ring-1 focus:ring-luxury-gold/15 transition-all duration-300"
                  dir={isRTLLayout ? "rtl" : "ltr"}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[10px] sm:text-xs tracking-[0.2em] uppercase text-luxury-text-secondary mb-2.5"
                >
                  {t.contact.emailLabel}
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder={t.contact.placeholder.email}
                  className="w-full bg-luxury-section border border-luxury-border rounded-sm px-4 py-3.5 text-sm text-foreground placeholder:text-luxury-text-secondary/30 focus:outline-none focus:border-luxury-gold/40 focus:ring-1 focus:ring-luxury-gold/15 transition-all duration-300"
                  dir="ltr"
                />
              </div>

              {/* Service Type */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-[10px] sm:text-xs tracking-[0.2em] uppercase text-luxury-text-secondary mb-2.5"
                >
                  {t.contact.serviceLabel}
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full bg-luxury-section border border-luxury-border rounded-sm px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-luxury-gold/40 focus:ring-1 focus:ring-luxury-gold/15 transition-all duration-300 appearance-none"
                  dir={isRTLLayout ? "rtl" : "ltr"}
                >
                  {t.contact.serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] sm:text-xs tracking-[0.2em] uppercase text-luxury-text-secondary mb-2.5"
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder={t.contact.placeholder.message}
                  className="w-full bg-luxury-section border border-luxury-border rounded-sm px-4 py-3.5 text-sm text-foreground placeholder:text-luxury-text-secondary/30 focus:outline-none focus:border-luxury-gold/40 focus:ring-1 focus:ring-luxury-gold/15 transition-all duration-300 resize-none"
                  dir={isRTLLayout ? "rtl" : "ltr"}
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                disabled={submitted}
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-luxury-gold text-luxury-charcoal text-sm tracking-[0.25em] uppercase font-medium rounded-sm transition-all duration-400 hover:bg-luxury-gold-dark disabled:opacity-60 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                {/* Shimmer on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Send className="w-4 h-4 relative" />
                <span className="relative">
                  {submitted ? "✓ Sent" : t.contact.submitButton}
                </span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTLLayout ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8 sm:space-y-10">
              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + index * 0.12,
                      duration: 0.5,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="flex items-start gap-4 group luxury-link"
                  >
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full border border-luxury-border transition-all duration-400 group-hover:border-luxury-gold/30 group-hover:bg-luxury-gold/5">
                      <info.icon className="w-4 h-4 text-luxury-gold" />
                    </div>
                    <div className="pt-2.5">
                      <p
                        className="text-sm sm:text-base font-light"
                        style={{ color: "var(--luxury-text-color)" }}
                      >
                        {info.text}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="w-20 h-px bg-luxury-gold/20 origin-left rtl:origin-right"
              />

              {/* Social Links */}
              <div>
                <p className="text-[10px] sm:text-xs tracking-[0.25em] uppercase text-luxury-text-secondary mb-4">
                  {t.contact.followUs}
                </p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, i) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 flex items-center justify-center rounded-full border border-luxury-border transition-all duration-400 hover:border-luxury-gold/30 hover:bg-luxury-gold/5"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4 text-luxury-gold" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Decorative Quote */}
              <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="border-s border-luxury-gold/15 ps-6"
              >
                <p
                  className={`font-playfair text-base sm:text-lg italic leading-relaxed ${
                    isRTLLayout ? "font-amiri" : ""
                  }`}
                  style={{ color: "var(--luxury-text-secondary-color)" }}
                >
                  &ldquo;Every flower is a soul blossoming in nature.&rdquo;
                </p>
                <cite className="block mt-3 text-[10px] sm:text-xs tracking-[0.2em] uppercase text-luxury-gold/70 not-italic">
                  — Gérard de Nerval
                </cite>
              </motion.blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
