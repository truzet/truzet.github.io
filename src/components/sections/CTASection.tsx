"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  const { dictionary, direction } = useLanguage();
  const Arrow = direction === "rtl" ? ArrowLeft : ArrowRight;

  return (
    <section className="py-8 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 md:p-12 lg:p-16 text-center"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {direction === "rtl" ? "جاهز تبدأ رحلتك؟" : "Ready to Start Your Journey?"}
        </h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
          {direction === "rtl"
            ? "خلينا نحول براندك لتجربة تتحس وتتفتكر"
            : "Let's transform your brand into an experience that's felt and remembered"}
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
        >
          {dictionary.hero.cta.primary}
          <Arrow size={18} />
        </Link>
      </motion.div>
    </section>
  );
}