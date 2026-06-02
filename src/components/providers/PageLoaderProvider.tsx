"use client";

import { useState, useEffect, useCallback, useRef, type ReactNode } from "react";
import { PageLoader } from "@/components/ui/PageLoader";

export function PageLoaderProvider({ children }: { children: ReactNode }) {
  // Default to showing loader — will be dismissed by effect
  const [showLoader, setShowLoader] = useState(true);
  const [isReady, setIsReady] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const hasLoaded = sessionStorage.getItem("noir-florale-loaded");

    if (hasLoaded) {
      // Already loaded in this session — immediately dismiss loader
      const timer = setTimeout(() => {
        setShowLoader(false);
        setIsReady(true);
      }, 0);
      return () => clearTimeout(timer);
    } else {
      // First visit — show loader animation, mark session
      sessionStorage.setItem("noir-florale-loaded", "true");
      const timer = setTimeout(() => {
        setShowLoader(false);
        setIsReady(true);
      }, 2200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleLoaderComplete = useCallback(() => {
    setIsReady(true);
  }, []);

  return (
    <>
      <PageLoader isVisible={showLoader} onComplete={handleLoaderComplete} />
      <div
        style={{
          opacity: isReady ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        {children}
      </div>
    </>
  );
}
