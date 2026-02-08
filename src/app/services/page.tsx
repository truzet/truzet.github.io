"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  Palette,
  Monitor,
  Megaphone,
  Sparkles,
  Camera,
  TrendingUp,
  Check,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Palette,
    titleEn: "Brand Identity",
    titleAr: "الهوية البصرية",
    descEn:
      "We craft unique visual identities that capture your brand's essence and make lasting impressions.",
    descAr:
      "نصمم هويات بصرية فريدة تعكس جوهر براندك وتترك انطباعاً دائماً.",
    featuresEn: [
      "Logo Design",
      "Color System",
      "Typography",
      "Brand Guidelines",
      "Visual Assets",
      "Stationery Design",
    ],
    featuresAr: [
      "تصميم اللوجو",
      "نظام الألوان",
      "الخطوط",
      "دليل الهوية",
      "العناصر البصرية",
      "تصميم المطبوعات",
    ],
  },
  {
    icon: Monitor,
    titleEn: "Web Design & Development",
    titleAr: "تصميم وتطوير المواقع",
    descEn:
      "Modern, responsive websites that convert visitors into customers with stunning UI/UX.",
    descAr: "مواقع عصرية ومتجاوبة تحوّل الزوار لعملاء بتصميم مذهل.",
    featuresEn: [
      "UI/UX Design",
      "Responsive Design",
      "Web Development",
      "E-commerce",
      "CMS Integration",
      "Performance Optimization",
    ],
    featuresAr: [
      "تصميم واجهات",
      "تصميم متجاوب",
      "تطوير المواقع",
      "متاجر إلكترونية",
      "أنظمة إدارة",
      "تحسين الأداء",
    ],
  },
  {
    icon: Megaphone,
    titleEn: "Social Media Management",
    titleAr: "إدارة السوشيال ميديا",
    descEn:
      "Strategic content that builds engagement and grows your community organically.",
    descAr: "محتوى استراتيجي يبني تفاعل حقيقي وينمّي مجتمعك.",
    featuresEn: [
      "Content Strategy",
      "Content Creation",
      "Community Management",
      "Analytics & Reports",
      "Paid Campaigns",
      "Influencer Marketing",
    ],
    featuresAr: [
      "استراتيجية المحتوى",
      "صناعة المحتوى",
      "إدارة المجتمع",
      "التحليلات والتقارير",
      "الحملات المدفوعة",
      "التسويق بالمؤثرين",
    ],
  },
  {
    icon: Sparkles,
    titleEn: "Creative Direction",
    titleAr: "الإخراج الإبداعي",
    descEn:
      "Guiding your brand's visual journey with innovative and strategic creativity.",
    descAr: "نوجّه رحلة براندك البصرية بإبداع استراتيجي ومبتكر.",
    featuresEn: [
      "Art Direction",
      "Campaign Concepts",
      "Visual Storytelling",
      "Brand Photography",
      "Video Direction",
      "Motion Graphics",
    ],
    featuresAr: [
      "التوجيه الفني",
      "مفاهيم الحملات",
      "القصص البصرية",
      "تصوير البراند",
      "إخراج الفيديو",
      "الموشن جرافيك",
    ],
  },
  {
    icon: Camera,
    titleEn: "Content Creation",
    titleAr: "صناعة المحتوى",
    descEn:
      "High-quality visual content that tells your story and captivates your audience.",
    descAr: "محتوى بصري عالي الجودة يحكي قصتك ويأسر جمهورك.",
    featuresEn: [
      "Photography",
      "Videography",
      "Reels & Stories",
      "Product Shots",
      "Lifestyle Content",
      "Behind the Scenes",
    ],
    featuresAr: [
      "التصوير الفوتوغرافي",
      "تصوير الفيديو",
      "الريلز والستوريز",
      "تصوير المنتجات",
      "محتوى الحياة",
      "كواليس العمل",
    ],
  },
  {
    icon: TrendingUp,
    titleEn: "Growth Strategy",
    titleAr: "استراتيجية النمو",
    descEn:
      "Data-driven strategies that scale your brand and maximize your ROI.",
    descAr: "استراتيجيات مبنية على البيانات تنمّي براندك وتعظّم عائدك.",
    featuresEn: [
      "Market Research",
      "Competitor Analysis",
      "Growth Planning",
      "Performance Marketing",
      "Conversion Optimization",
      "ROI Tracking",
    ],
    featuresAr: [
      "بحث السوق",
      "تحليل المنافسين",
      "تخطيط النمو",
      "التسويق بالأداء",
      "تحسين التحويلات",
      "تتبع العائد",
    ],
  },
];

const packages = [
  {
    nameEn: "Starter",
    nameAr: "البداية",
    descEn: "Perfect for new brands starting their journey",
    descAr: "مثالي للبراندات الجديدة اللي لسه بتبدأ",
    featuresEn: [
      "Logo Design",
      "Brand Colors",
      "Social Media Kit",
      "1 Month Support",
    ],
    featuresAr: ["تصميم اللوجو", "ألوان البراند", "كيت السوشيال", "دعم شهر"],
    popular: false,
  },
  {
    nameEn: "Growth",
    nameAr: "النمو",
    descEn: "For brands ready to scale and expand",
    descAr: "للبراندات الجاهزة للتوسع والنمو",
    featuresEn: [
      "Full Brand Identity",
      "Website Design",
      "Social Media Management",
      "3 Months Support",
      "Monthly Reports",
    ],
    featuresAr: [
      "هوية بصرية كاملة",
      "تصميم موقع",
      "إدارة السوشيال",
      "دعم 3 شهور",
      "تقارير شهرية",
    ],
    popular: true,
  },
  {
    nameEn: "Premium",
    nameAr: "المميز",
    descEn: "Complete solution for established brands",
    descAr: "حل متكامل للبراندات الراسخة",
    featuresEn: [
      "Everything in Growth",
      "Paid Campaigns",
      "Content Creation",
      "Priority Support",
      "Strategy Consulting",
    ],
    featuresAr: [
      "كل مميزات النمو",
      "حملات مدفوعة",
      "صناعة المحتوى",
      "دعم أولوية",
      "استشارات استراتيجية",
    ],
    popular: false,
  },
];

// Animation variants
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

export default function ServicesPage() {
  const { dictionary, direction, isLoaded } = useLanguage();
  const Arrow = direction === "rtl" ? ArrowLeft : ArrowRight;

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
            <Sparkles size={16} className="text-white/70" />
            <span className="text-sm text-white/70">
              {dictionary.services.title}
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {direction === "rtl" ? (
              <>
                كل اللي براندك{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
                  محتاجه
                </span>
              </>
            ) : (
              <>
                Everything Your Brand{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
                  Needs
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            {dictionary.services.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-8 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass p-6 md:p-8 group"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-white/10 transition-colors">
                    <Icon size={28} className="text-white/70" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                      {direction === "rtl" ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="text-white/50 leading-relaxed mb-6">
                      {direction === "rtl" ? service.descAr : service.descEn}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {(direction === "rtl"
                        ? service.featuresAr
                        : service.featuresEn
                      ).map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-white/40"
                        >
                          <Check
                            size={14}
                            className="text-white/60 shrink-0"
                          />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Packages Section */}
      <section className="py-8 md:py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {direction === "rtl" ? "اختار باكدجك" : "Choose Your Package"}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {direction === "rtl"
              ? "باكدجات مرنة تناسب احتياجاتك وميزانيتك"
              : "Flexible packages that fit your needs and budget"}
          </p>
        </motion.div>

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative glass p-6 md:p-8 ${
                pkg.popular ? "border-2 border-white/30" : ""
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-xs font-semibold">
                  {direction === "rtl" ? "الأكثر طلباً" : "Most Popular"}
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-2xl font-bold text-white mb-2">
                {direction === "rtl" ? pkg.nameAr : pkg.nameEn}
              </h3>

              {/* Description */}
              <p className="text-white/50 mb-6">
                {direction === "rtl" ? pkg.descAr : pkg.descEn}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {(direction === "rtl" ? pkg.featuresAr : pkg.featuresEn).map(
                  (feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-white/60"
                    >
                      <Check size={16} className="text-white shrink-0" />
                      <span>{feature}</span>
                    </li>
                  )
                )}
              </ul>

              {/* CTA Button */}
              <Link
                href="/contact"
                className={`flex items-center justify-center gap-2 w-full py-4 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  pkg.popular
                    ? "bg-white text-black hover:bg-white/90"
                    : "bg-white/10 text-white border border-white/10 hover:bg-white/15 hover:border-white/20"
                }`}
              >
                {direction === "rtl" ? "تواصل معنا" : "Get Started"}
                <Arrow size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 lg:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {direction === "rtl"
              ? "مش لاقي اللي بتدور عليه؟"
              : "Can't Find What You Need?"}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            {direction === "rtl"
              ? "تواصل معنا وهنعملك باكدج مخصوص يناسب احتياجاتك"
              : "Contact us and we'll create a custom package for your needs"}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
          >
            {direction === "rtl" ? "تواصل معنا" : "Get in Touch"}
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}