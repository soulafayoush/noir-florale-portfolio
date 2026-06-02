"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { AudioToggle } from "@/components/ui/AudioToggle";

const navLinks = [
  { key: "about", href: "#about" },
  { key: "rareVault", href: "#rare-vault" },
  { key: "services", href: "#services" },
  { key: "journal", href: "#journal" },
  { key: "contact", href: "#contact" },
] as const;

const sectionIds = ["about", "rare-vault", "services", "journal", "contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { t, isRTLLayout } = useLanguage();

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navItems = navLinks.map((link) => ({
    label: t.nav[link.key as keyof typeof t.nav] as string,
    href: link.href,
    key: link.key,
  }));

  const getIsActive = useCallback(
    (href: string) => {
      const id = href.replace("#", "");
      return activeSection === id;
    },
    [activeSection]
  );

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-background/85 backdrop-blur-2xl border-b border-luxury-border/50 shadow-sm shadow-black/5"
            : "bg-transparent"
        }`}
      >
        {/* Scroll Progress Bar — refined */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-luxury-gold/60 via-luxury-gold to-luxury-gold/60 origin-left z-10"
          style={{ scaleX }}
        />

        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Brand */}
            <a
              href="#"
              className="flex items-center gap-2 group"
              aria-label={isRTLLayout ? "نوار فلورال - الرئيسية" : "Noir Florale - Home"}
            >
              <span
                className={`font-playfair text-lg sm:text-xl font-bold tracking-[0.12em] text-luxury-gold gold-shimmer ${
                  isRTLLayout ? "font-amiri" : ""
                }`}
              >
                {t.nav.brand}
              </span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative text-xs tracking-[0.15em] uppercase transition-colors duration-300 luxury-link ${
                    getIsActive(item.href)
                      ? "text-luxury-gold"
                      : "text-luxury-text-secondary hover:text-luxury-gold"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              <AudioToggle />
              <LanguageToggle />
              <ThemeToggle />

              {/* Mobile menu button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-luxury-border bg-background/60 backdrop-blur-sm transition-colors"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
              >
                <AnimatePresence mode="wait">
                  {mobileOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-4 h-4 text-luxury-gold" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-4 h-4 text-luxury-gold" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 left-0 right-0 z-50 md:hidden"
            >
              <div className="bg-background/95 backdrop-blur-2xl border-b border-luxury-border/50 pt-24 pb-10 px-6">
                {/* Decorative gold line */}
                <div className="absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-luxury-gold/30 to-transparent" />

                <nav className="flex flex-col gap-7">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.3 }}
                      onClick={() => setMobileOpen(false)}
                      className={`text-xl font-playfair tracking-[0.1em] transition-colors duration-300 luxury-link ${
                        getIsActive(item.href)
                          ? "text-luxury-gold"
                          : "text-luxury-text hover:text-luxury-gold"
                      } ${isRTLLayout ? "font-amiri" : ""}`}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
