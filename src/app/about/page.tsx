"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Target,
    titleEn: "Attention is Earned",
    titleAr: "الانتباه بيتكسب",
    descEn: "We don't buy attention, we earn it through meaningful work.",
    descAr: "مش بنشتري الانتباه، بنكسبه بشغل له معنى.",
  },
  {
    icon: Eye,
    titleEn: "Clarity Beats Noise",
    titleAr: "الوضوح يكسب",
    descEn: "In a world full of noise, clarity is your superpower.",
    descAr: "في عالم مليان دوشة، الوضوح هو قوتك الخارقة.",
  },
  {
    icon: Heart,
    titleEn: "Design Serves Purpose",
    titleAr: "التصميم يخدم هدف",
    descEn: "Beautiful design that doesn't convert is just decoration.",
    descAr: "التصميم الجميل اللي مش بيحقق نتيجة مجرد ديكور.",
  },
  {
    icon: Zap,
    titleEn: "Impact Over Vanity",
    titleAr: "التأثير أهم",
    descEn: "We measure success by impact, not vanity metrics.",
    descAr: "بنقيس النجاح بالتأثير، مش بالأرقام الفاضية.",
  },
];

const stats = [
  { valueEn: "50+", valueAr: "٥٠+", labelEn: "Projects Completed", labelAr: "مشروع مكتمل" },
  { valueEn: "30+", valueAr: "٣٠+", labelEn: "Happy Clients", labelAr: "عميل سعيد" },
  { valueEn: "3+", valueAr: "٣+", labelEn: "Years Experience", labelAr: "سنوات خبرة" },
  { valueEn: "100%", valueAr: "١٠٠٪", labelEn: "Client Satisfaction", labelAr: "رضا العملاء" },
];

const team = [
  {
    nameEn: "Ahmed Hassan",
    nameAr: "أحمد حسن",
    roleEn: "Founder & Creative Director",
    roleAr: "المؤسس والمدير الإبداعي",
  },
  {
    nameEn: "Sara Mohamed",
    nameAr: "سارة محمد",
    roleEn: "Brand Strategist",
    roleAr: "استراتيجية البراند",
  },
  {
    nameEn: "Omar Ali",
    nameAr: "عمر علي",
    roleEn: "Lead Designer",
    roleAr: "رئيس التصميم",
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

export default function AboutPage() {
  const { dictionary, direction, isLoaded } = useLanguage();

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
          className="glass p-8 md:p-12 lg:p-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <Users size={16} className="text-white/70" />
            <span className="text-sm text-white/70">
              {dictionary.about.title}
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl">
            {direction === "rtl" ? (
              <>
                نقطة التحول بين براند{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
                  بيتشاف
                </span>{" "}
                وبراند{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
                  بيتحس
                </span>
              </>
            ) : (
              <>
                The turning point between a brand that&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
                  seen
                </span>{" "}
                and a brand that&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
                  felt
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
            {dictionary.about.story.content}
          </p>
        </motion.div>
      </section>

      {/* Vision & Mission */}
      <section className="py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <Eye size={24} className="text-white/70" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {dictionary.about.vision.title}
            </h2>
            <p className="text-white/50 leading-relaxed text-lg">
              {dictionary.about.vision.content}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass p-8 md:p-10"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <Target size={24} className="text-white/70" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {dictionary.about.mission.title}
            </h2>
            <p className="text-white/50 leading-relaxed text-lg">
              {dictionary.about.mission.content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {direction === "rtl" ? "قيمنا" : "Our Values"}
          </h2>
          <p className="text-white/50 text-lg">
            {direction === "rtl"
              ? "المبادئ اللي بنشتغل بيها كل يوم"
              : "The principles we work by every day"}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 transition-colors">
                  <Icon size={28} className="text-white/70" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {direction === "rtl" ? value.titleAr : value.titleEn}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {direction === "rtl" ? value.descAr : value.descEn}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-8 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="glass p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {direction === "rtl" ? stat.valueAr : stat.valueEn}
                </div>
                <div className="text-white/50">
                  {direction === "rtl" ? stat.labelAr : stat.labelEn}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team */}
      <section className="py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {direction === "rtl" ? "فريقنا" : "Our Team"}
          </h2>
          <p className="text-white/50 text-lg">
            {direction === "rtl"
              ? "الناس اللي بتحول الأفكار لواقع"
              : "The people who turn ideas into reality"}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 text-center group"
            >
              {/* Avatar Placeholder */}
              <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white/30">
                  {(direction === "rtl" ? member.nameAr : member.nameEn).charAt(0)}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-1">
                {direction === "rtl" ? member.nameAr : member.nameEn}
              </h3>
              <p className="text-white/50">
                {direction === "rtl" ? member.roleAr : member.roleEn}
              </p>
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
          className="glass p-8 md:p-12 lg:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {direction === "rtl" ? "جاهز تشتغل معانا؟" : "Ready to Work With Us?"}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            {direction === "rtl"
              ? "خلينا نحول براندك لتجربة تتحس وتتفتكر"
              : "Let's transform your brand into an experience"}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5"
          >
            {direction === "rtl" ? "تواصل معنا" : "Get in Touch"}
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}