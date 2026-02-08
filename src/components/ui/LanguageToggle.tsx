"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  className?: string;
  variant?: "icon" | "full";
}

export default function LanguageToggle({ 
  className, 
  variant = "icon" 
}: LanguageToggleProps) {
  const { locale, setLocale, isLoaded } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  // Don't render until loaded to prevent hydration mismatch
  if (!isLoaded) {
    return (
      <div className={cn(
        "w-10 h-10 rounded-full bg-white/5 animate-pulse",
        className
      )} />
    );
  }

  if (variant === "icon") {
    return (
      <button
        onClick={toggleLanguage}
        className={cn(
          "group relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 hover:bg-white/10",
          className
        )}
        aria-label="Toggle Language"
        title={locale === "en" ? "العربية" : "English"}
      >
        <Globe 
          size={18} 
          className="text-white/60 transition-colors duration-300 group-hover:text-white" 
        />
        
        {/* Language indicator */}
        <span className="absolute -bottom-1 -right-1 text-[10px] font-bold text-white/80 bg-white/10 rounded px-1">
          {locale === "en" ? "ع" : "EN"}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300",
        className
      )}
      aria-label="Toggle Language"
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {locale === "en" ? "العربية" : "English"}
      </span>
    </button>
  );
}