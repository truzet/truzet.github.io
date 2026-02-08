"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import Link from "next/link";

const categories = [
  { keyEn: "all", keyAr: "الكل" },
  { keyEn: "branding", keyAr: "هوية بصرية" },
  { keyEn: "web", keyAr: "مواقع" },
  { keyEn: "social", keyAr: "سوشيال ميديا" },
  { keyEn: "marketing", keyAr: "تسويق" },
];

const projects = [
  {
    id: 1,
    titleEn: "Elegance Fashion",
    titleAr: "إليجانس فاشون",
    category: "branding",
    descEn: "Complete brand identity for a luxury fashion brand",
    descAr: "هوية بصرية كاملة لبراند أزياء فاخر",
    image: "/portfolio/project1.jpg",
  },
  {
    id: 2,
    titleEn: "TechFlow App",
    titleAr: "تك فلو",
    category: "web",
    descEn: "Modern web application with seamless UX",
    descAr: "تطبيق ويب عصري بتجربة مستخدم سلسة",
    image: "/portfolio/project2.jpg",
  },
  {
    id: 3,
    titleEn: "Flavor Restaurant",
    titleAr: "فليفور ريستورانت",
    category: "social",
    descEn: "Social media campaign that doubled engagement",
    descAr: "حملة سوشيال ضاعفت التفاعل",
    image: "/portfolio/project3.jpg",
  },
  {
    id: 4,
    titleEn: "GreenLife Organic",
    titleAr: "جرين لايف",
    category: "branding",
    descEn: "Eco-friendly brand identity and packaging",
    descAr: "هوية بصرية وتغليف صديق للبيئة",
    image: "/portfolio/project4.jpg",
  },
  {
    id: 5,
    titleEn: "StartUp Hub",
    titleAr: "ستارت أب هب",
    category: "marketing",
    descEn: "Growth marketing campaign with 300% ROI",
    descAr: "حملة نمو حققت عائد ٣٠٠٪",
    image: "/portfolio/project5.jpg",
  },
  {
    id: 6,
    titleEn: "Wellness Clinic",
    titleAr: "ويلنس كلينك",
    category: "web",
    descEn: "Healthcare website with booking system",
    descAr: "موقع طبي مع نظام حجز متكامل",
    image: "/portfolio/project6.jpg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function PortfolioPage() {
  const { dictionary, direction, isLoaded } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  if (!isLoaded) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-white animate-spin" />
      </div>
    );
  }

  return (
    <div dir={direction} className="w-full max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 lg:p-16 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <FolderOpen size={16} className="text-white/70" />
            <span className="text-sm text-white/70">
              {dictionary.portfolio.title}
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {direction === "rtl" ? (
              <>
                براندات{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
                  حوّلناها
                </span>{" "}
                لتجربة
              </>
            ) : (
              <>
                Brands We{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
                  Transformed
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            {dictionary.portfolio.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="py-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat.keyEn}
              onClick={() => setActiveCategory(cat.keyEn)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.keyEn
                  ? "bg-white text-black"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              {direction === "rtl" ? cat.keyAr : cat.keyEn}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={`/portfolio/${project.id}`} className="block group">
                <div className="glass overflow-hidden">
                  {/* Image */}
                  <div className="aspect-[4/3] bg-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/10 text-8xl font-bold">
                        {project.id}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                        <ArrowUpRight size={24} className="text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-xs text-white/40 uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-2 mb-2 group-hover:text-white/80 transition-colors">
                      {direction === "rtl" ? project.titleAr : project.titleEn}
                    </h3>
                    <p className="text-white/50 text-sm">
                      {direction === "rtl" ? project.descAr : project.descEn}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {direction === "rtl" ? "عايز شغل زي ده؟" : "Want Results Like These?"}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            {direction === "rtl"
              ? "خلينا نشتغل على براندك ونحوله لقصة نجاح"
              : "Let us work on your brand and turn it into a success story"}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5"
          >
            {direction === "rtl" ? "ابدأ مشروعك" : "Start Your Project"}
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}