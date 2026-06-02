"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
      const isWideEnough = window.innerWidth > 768;
      setIsDesktop(!prefersReducedMotion && hasFinePointer && isWideEnough);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return isDesktop;
}

export function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const isDesktop = useIsDesktop();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const rafRef = useRef<number>(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    });
  }, [cursorX, cursorY]);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover], .cursor-hover"
      )
    ) {
      setIsHovering(true);
    }
  }, []);

  const handleMouseOut = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (
      target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor-hover], .cursor-hover"
      )
    ) {
      setIsHovering(false);
    }
  }, []);

  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);
  const handleTouchStart = useCallback(() => {
    setIsTouchDevice(true);
  }, []);

  useEffect(() => {
    if (!isDesktop || isTouchDevice) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseout", handleMouseOut, { passive: true });
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchstart", handleTouchStart, { once: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchstart", handleTouchStart);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isDesktop, isTouchDevice, handleMouseMove, handleMouseOver, handleMouseOut, handleMouseDown, handleMouseUp, handleTouchStart]);

  if (!isDesktop || isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* Outer ring */}
      <motion.div
        className="rounded-full border transition-colors duration-300"
        animate={{
          width: isHovering ? 48 : 20,
          height: isHovering ? 48 : 20,
          opacity: isHovering ? 0.6 : 0.35,
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          marginTop: isHovering ? -24 : -10,
          marginLeft: isHovering ? -24 : -10,
          borderColor: "rgba(212, 175, 55, 0.5)",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="absolute top-1/2 left-1/2 rounded-full bg-luxury-gold"
        animate={{
          width: isHovering ? 6 : 4,
          height: isHovering ? 6 : 4,
          opacity: isHovering ? 1 : 0.7,
          x: "-50%",
          y: "-50%",
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
