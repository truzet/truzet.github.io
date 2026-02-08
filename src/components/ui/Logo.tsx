"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export default function Logo({ 
  className, 
  size = "sm", 
  showText = false 
}: LogoProps) {
  const sizes = {
    sm: "w-9 h-9",
    md: "w-11 h-11", 
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  return (
    <Link
      href="/"
      className={cn(
        "group flex items-center gap-2 transition-all duration-300",
        className
      )}
    >
      {/* Logo Icon */}
      <div 
        className={cn(
          "relative rounded-2xl bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-white/20 group-hover:scale-105",
          sizes[size]
        )}
      >
        <span className="text-white font-bold text-sm tracking-tight">T</span>
      </div>

      {/* Logo Text - Optional */}
      {showText && (
        <span 
          className={cn(
            "font-semibold text-white/90 group-hover:text-white transition-colors duration-300",
            textSizes[size]
          )}
        >
          truzet
        </span>
      )}
    </Link>
  );
}