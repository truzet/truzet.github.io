"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  const { dictionary, direction } = useLanguage();
  const Arrow = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-8 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass p-8 md:p-12 lg:p-16"
      >
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-white/70">
            {direction === "rtl" ? "متاحين للمشاريع الجديدة" : "Available for new projects"}
          </span>
        </motion.div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]">
          {dictionary.hero.title}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
            {dictionary.hero.titleHighlight}
          </span>{" "}
          {dictionary.hero.titleEnd}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mb-8 leading-relaxed">
          {dictionary.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
          >
            {dictionary.hero.cta.primary}
            <Arrow size={18} />
          </Link>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            {dictionary.hero.cta.secondary}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}