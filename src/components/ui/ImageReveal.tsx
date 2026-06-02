"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

interface ImageRevealProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  children?: React.ReactNode;
}

export function ImageReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
    >
      <div
        className={`transition-transform duration-[1.4s] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          isInView ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
