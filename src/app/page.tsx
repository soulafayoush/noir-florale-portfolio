"use client";

import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesMarquee } from "@/components/sections/ServicesMarquee";
import { AboutSection } from "@/components/sections/AboutSection";
import { RareVaultSection } from "@/components/sections/RareVaultSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { EditorialSection } from "@/components/sections/EditorialSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { CursorGlow } from "@/components/ui/CursorGlow";

function GoldDiamondDivider() {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-luxury-gold/30" />
      <span className="mx-4 text-luxury-gold/40 text-[10px]">✦</span>
      <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-luxury-gold/30" />
    </div>
  );
}

function GradientFadeDivider() {
  return (
    <div className="relative h-20 bg-background overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-background to-transparent" />
    </div>
  );
}

function ThinLineDivider() {
  return (
    <div className="flex justify-center py-6">
      <div className="h-px w-full max-w-xs bg-luxury-border" />
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <CustomCursor />
      <CursorGlow />
      <main className="min-h-screen flex flex-col">
        <Navbar />
        <HeroSection />

        {/* Services Marquee Banner — animated infinite scroll */}
        <ServicesMarquee />

        {/* Divider */}
        <div className="bg-background">
          <GoldDiamondDivider />
        </div>

        <AboutSection />

        <GradientFadeDivider />

        <RareVaultSection />

        <ThinLineDivider />

        <ServicesSection />

        <GradientFadeDivider />

        <EditorialSection />

        <div className="bg-background">
          <GoldDiamondDivider />
        </div>

        <ContactSection />
        <div className="mt-auto">
          <Footer />
        </div>
      </main>
    </>
  );
}
