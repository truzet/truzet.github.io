"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Placeholder projects - استبدلها بمشاريعك الحقيقية
const projects = [
  {
    id: 1,
    titleEn: "Brand Identity",
    titleAr: "هوية بصرية",
    category: "Branding",
    image: "/portfolio/project1.jpg",
  },
  {
    id: 2,
    titleEn: "Social Campaign",
    titleAr: "حملة سوشيال",
    category: "Marketing",
    image: "/portfolio/project2.jpg",
  },
  {
    id: 3,
    titleEn: "Website Design",
    titleAr: "تصميم موقع",
    category: "Web",
    image: "/portfolio/project3.jpg",
  },
];

export default function PortfolioSection() {
  const { dictionary, direction } = useLanguage();

  return (
    <section className="py-8 md:py-16">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {dictionary.portfolio.title}
          </h2>
          <p className="text-white/50 text-lg">
            {dictionary.portfolio.subtitle}
          </p>
        </div>

        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors"
        >
          {dictionary.portfolio.cta}
          <ArrowUpRight size={18} />
        </Link>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={`/portfolio/${project.id}`} className="block group">
              <div className="glass overflow-hidden">
                {/* Image */}
                <div className="aspect-[4/3] bg-white/5 relative overflow-hidden">
                  {/* Placeholder - استبدله بـ Image component */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/20 text-6xl font-bold">
                      {project.id}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <ArrowUpRight size={20} className="text-black" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <span className="text-xs text-white/40 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mt-1">
                    {direction === "rtl" ? project.titleAr : project.titleEn}
                  </h3>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}