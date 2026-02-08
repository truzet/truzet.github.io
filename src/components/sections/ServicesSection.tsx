"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  Palette,
  PenTool,
  Share2,
  Target,
  Sparkles,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  { key: "branding", icon: Palette },
  { key: "content", icon: PenTool },
  { key: "social", icon: Share2 },
  { key: "ads", icon: Target },
  { key: "creative", icon: Sparkles },
  { key: "growth", icon: TrendingUp },
];

export default function ServicesSection() {
  const { dictionary, direction } = useLanguage();

  return (
    <section className="py-8 md:py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {dictionary.services.title}
        </h2>
        <p className="text-white/50 text-lg max-w-xl mx-auto">
          {dictionary.services.subtitle}
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          const serviceData =
            dictionary.services.items[
              service.key as keyof typeof dictionary.services.items
            ];

          return (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href="/services" className="block h-full">
                <div className="glass p-6 h-full flex flex-col group cursor-pointer">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                    <Icon size={24} className="text-white/70" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {serviceData.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed flex-1">
                    {serviceData.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-4 self-end">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-all">
                      <ArrowUpRight
                        size={18}
                        className="text-white/40 group-hover:text-white group-hover:rotate-45 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
        >
          {dictionary.services.cta}
          <ArrowUpRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}