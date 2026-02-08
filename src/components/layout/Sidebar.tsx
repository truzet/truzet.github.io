"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  User,
  Briefcase,
  FolderOpen,
  FileText,
  Mail,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import Logo from "@/components/ui/Logo";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { dictionary, direction, isLoaded } = useLanguage();
  const pathname = usePathname();

  // Scroll detection for mobile navbar
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const navLinks = [
    { href: "/", icon: Home, label: dictionary.nav.home },
    { href: "/about", icon: User, label: dictionary.nav.about },
    { href: "/services", icon: Briefcase, label: dictionary.nav.services },
    { href: "/portfolio", icon: FolderOpen, label: dictionary.nav.portfolio },
    { href: "/blog", icon: FileText, label: dictionary.nav.blog },
    { href: "/contact", icon: Mail, label: dictionary.nav.contact },
  ];

  if (!isLoaded) {
    return null;
  }

  return (
    <>
      {/* ============================================
          DESKTOP SIDEBAR
          ============================================ */}
      <aside
        className={cn(
          "fixed top-1/2 -translate-y-1/2 z-50",
          "h-auto w-16",
          "glass",
          "flex-col items-center justify-between py-6 gap-6",
          "hidden lg:flex",
          "left-4"
        )}
      >
        {/* Logo */}
        <Logo size="sm" />

        {/* Navigation */}
        <nav className="flex-1 flex items-center">
          <ul className="flex flex-col items-center gap-1">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "group relative flex items-center justify-center w-11 h-11 rounded-2xl transition-all duration-300",
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-white/50 hover:text-white hover:bg-white/10"
                    )}
                    title={item.label}
                  >
                    <Icon
                      size={20}
                      strokeWidth={isActive ? 2.5 : 2}
                      className="transition-all duration-300"
                    />

                    {/* Active Indicator */}
                    {isActive && (
                      <span className="absolute top-1/2 -translate-y-1/2 -right-2 w-1 h-5 bg-white rounded-full" />
                    )}

                    {/* Tooltip */}
                    <span
                      className={cn(
                        "absolute top-1/2 -translate-y-1/2 left-full ml-3",
                        "px-3 py-1.5 rounded-lg",
                        "bg-white text-black text-xs font-medium",
                        "opacity-0 pointer-events-none transition-all duration-200",
                        "group-hover:opacity-100",
                        "whitespace-nowrap z-50"
                      )}
                    >
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Language Toggle */}
        <LanguageToggle variant="icon" />
      </aside>

      {/* ============================================
          MOBILE FLOATING NAVBAR - عصري وبوب أب
          ============================================ */}
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "fixed top-4 left-4 right-4 z-50",
          "lg:hidden",
          "glass",
          "px-2 py-2",
          "rounded-2xl"
        )}
      >
        <div className="flex items-center justify-between gap-1">
          {/* Logo */}
          <Link
            href="/"
            className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0"
          >
            <span className="text-white font-bold text-sm">T</span>
          </Link>

          {/* Navigation Icons */}
          <div className="flex items-center gap-1 flex-1 justify-center">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
                    isActive
                      ? "bg-white text-black"
                      : "text-white/50 hover:text-white hover:bg-white/10"
                  )}
                >
                  <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />

                  
                </Link>
              );
            })}
          </div>

          {/* Language Toggle */}
          <LanguageToggle variant="icon" />
        </div>
      </motion.nav>
    </>
  );
};

export default Sidebar;