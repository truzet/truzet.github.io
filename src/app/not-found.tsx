"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Home, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const { direction, isLoaded } = useLanguage();
  const Arrow = direction === "rtl" ? ArrowRight : ArrowLeft;

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
      </div>
    );
  }

  return (
    <div
      dir={direction}
      className="w-full max-w-3xl mx-auto min-h-[80vh] flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass p-8 md:p-12 lg:p-16 text-center"
      >
        {/* 404 */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-8xl md:text-9xl font-bold text-white/10 mb-6"
        >
          404
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {direction === "rtl" ? "الصفحة مش موجودة" : "Page Not Found"}
        </h1>

        {/* Description */}
        <p className="text-white/50 text-lg mb-8 max-w-md mx-auto">
          {direction === "rtl"
            ? "يبدو إن الصفحة اللي بتدور عليها مش موجودة أو اتنقلت"
            : "The page you're looking for doesn't exist or has been moved"}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Home size={18} />
            {direction === "rtl" ? "الرئيسية" : "Go Home"}
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold hover:bg-white/15 transition-all duration-300"
          >
            <Arrow size={18} />
            {direction === "rtl" ? "ارجع للخلف" : "Go Back"}
          </button>
        </div>
      </motion.div>
    </div>
  );
}