"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutSection() {
  const { dictionary, direction } = useLanguage();

  const principles = [
    dictionary.principles.attention,
    dictionary.principles.clarity,
    dictionary.principles.design,
    dictionary.principles.impact,
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* About Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {dictionary.about.title}
          </h2>
          <p className="text-white/50 text-lg mb-6 leading-relaxed">
            {dictionary.about.story.content}
          </p>

          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 font-medium transition-colors"
          >
            {dictionary.common.learnMore}
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 flex items-center justify-center text-center"
            >
              <p className="text-lg font-medium text-white/80">"{principle}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}