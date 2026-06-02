"use client";

import { motion } from "framer-motion";
import { Home, ArrowUp } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";

export default function NotFound() {
  const { t, isRTLLayout } = useLanguage();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Decorative number */}
        <motion.span
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="block font-playfair text-8xl sm:text-9xl md:text-[12rem] font-bold text-luxury-gold/20 leading-none"
        >
          404
        </motion.span>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-luxury-gold/40 mx-auto mt-4 sm:mt-6"
        />

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className={`mt-6 sm:mt-8 font-playfair text-xl sm:text-2xl md:text-3xl font-semibold ${
            isRTLLayout ? "font-amiri" : ""
          }`}
          style={{ color: "var(--luxury-text-color)" }}
        >
          {isRTLLayout ? "هذه الصفحة غير موجودة" : "This Page Has Bloomed Elsewhere"}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-3 text-sm text-luxury-text-secondary font-light"
        >
          {isRTLLayout
            ? "يبدو أن هذه الصفحة قد ذبلت أو تم نقلها إلى مكان آخر."
            : "The page you seek has wilted or been moved to another garden."}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-luxury-gold text-luxury-gold text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-luxury-gold hover:text-luxury-charcoal rounded-sm group"
          >
            <Home className="w-4 h-4" />
            <span>{isRTLLayout ? "العودة للرئيسية" : "Return Home"}</span>
          </Link>
          <button
            onClick={() => {
              if (typeof window !== "undefined") {
                window.history.back();
              }
            }}
            className="inline-flex items-center gap-3 px-8 py-3.5 border border-luxury-border text-luxury-text-secondary text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:border-luxury-gold/30 hover:text-luxury-gold rounded-sm"
          >
            <ArrowUp className="w-4 h-4" />
            <span>{isRTLLayout ? "العودة" : "Go Back"}</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Footer branding */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 text-center"
      >
        <span className="font-playfair text-sm tracking-wider text-luxury-gold/30">
          NOIR FLORALE
        </span>
      </motion.div>
    </main>
  );
}
