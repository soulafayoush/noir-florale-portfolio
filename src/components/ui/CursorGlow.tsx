"use client";

import { useEffect, useState, useCallback, useRef } from "react";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const check = () => {
      const prefersReduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const hasPointer = window.matchMedia("(pointer: fine)").matches;
      const isWide = window.innerWidth > 1024;
      setIsDesktop(!prefersReduced && hasPointer && isWide);
    };

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isDesktop;
}

export function CursorGlow() {
  const [position, setPosition] = useState({ x: -300, y: -300 });
  const [isVisible, setIsVisible] = useState(false);
  const isDesktop = useIsDesktop();
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    });
  }, [isVisible]);

  const handleMouseLeave = useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isDesktop, handleMouseMove, handleMouseLeave]);

  if (!isDesktop || !isVisible) return null;

  return (
    <div
      className="cursor-glow hidden lg:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      aria-hidden="true"
    />
  );
}
