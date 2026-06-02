"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/971XXXXXXXXX"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 end-6 z-[80] w-14 h-14 flex items-center justify-center rounded-full bg-green-500 shadow-lg shadow-green-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 group"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-white" />

      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
    </motion.a>
  );
}
