"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  const { direction, isLoaded } = useLanguage();

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
      </div>
    );
  }

  return (
    <div dir={direction} className="w-full max-w-7xl mx-auto">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <CTASection />
    </div>
  );
}