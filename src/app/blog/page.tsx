"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { FileText, ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    id: 1,
    titleEn: "Why Brand Identity Matters More Than Ever",
    titleAr: "ليه الهوية البصرية أهم من أي وقت",
    excerptEn: "In a crowded market, your brand identity is what makes you stand out. Learn why investing in branding is crucial for success.",
    excerptAr: "في سوق مزدحم، هويتك البصرية هي اللي بتميزك. اعرف ليه الاستثمار في البراندينج مهم للنجاح.",
    category: "Branding",
    dateEn: "Jan 15, 2024",
    dateAr: "١٥ يناير ٢٠٢٤",
    readTimeEn: "5 min read",
    readTimeAr: "٥ دقائق قراءة",
  },
  {
    id: 2,
    titleEn: "The Power of Consistent Social Media",
    titleAr: "قوة الاستمرارية في السوشيال ميديا",
    excerptEn: "Consistency is key to building a strong social media presence. Discover strategies that actually work.",
    excerptAr: "الاستمرارية هي المفتاح لبناء حضور قوي على السوشيال. اكتشف استراتيجيات بتشتغل فعلاً.",
    category: "Social Media",
    dateEn: "Jan 10, 2024",
    dateAr: "١٠ يناير ٢٠٢٤",
    readTimeEn: "4 min read",
    readTimeAr: "٤ دقائق قراءة",
  },
  {
    id: 3,
    titleEn: "Design Trends to Watch in 2024",
    titleAr: "ترندات التصميم في ٢٠٢٤",
    excerptEn: "Stay ahead of the curve with these emerging design trends that will dominate the creative landscape.",
    excerptAr: "ابقى في المقدمة مع ترندات التصميم الجديدة اللي هتسيطر على المشهد الإبداعي.",
    category: "Design",
    dateEn: "Jan 5, 2024",
    dateAr: "٥ يناير ٢٠٢٤",
    readTimeEn: "6 min read",
    readTimeAr: "٦ دقائق قراءة",
  },
  {
    id: 4,
    titleEn: "How to Measure Marketing ROI",
    titleAr: "إزاي تقيس عائد التسويق",
    excerptEn: "Understanding your marketing ROI is essential for making smart business decisions. Here's how to do it right.",
    excerptAr: "فهم عائد التسويق ضروري لاتخاذ قرارات ذكية. إليك الطريقة الصحيحة.",
    category: "Marketing",
    dateEn: "Dec 28, 2023",
    dateAr: "٢٨ ديسمبر ٢٠٢٣",
    readTimeEn: "7 min read",
    readTimeAr: "٧ دقائق قراءة",
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

export default function BlogPage() {
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
          className="glass p-8 md:p-12 lg:p-16 text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
          >
            <FileText size={16} className="text-white/70" />
            <span className="text-sm text-white/70">
              {dictionary.nav.blog}
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {direction === "rtl" ? (
              <>
                أفكار و{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
                  رؤى
                </span>
              </>
            ) : (
              <>
                Ideas &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
                  Insights
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            {direction === "rtl"
              ? "مقالات ونصائح عن البراندينج والتسويق والتصميم"
              : "Articles and tips about branding, marketing, and design"}
          </p>
        </motion.div>
      </section>

      {/* Featured Post */}
      <section className="py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href={`/blog/${posts[0].id}`} className="block group">
            <div className="glass p-8 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image */}
              <div className="aspect-video bg-white/5 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/10 text-9xl font-bold">1</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <span className="text-xs text-white/40 uppercase tracking-wider mb-3">
                  {posts[0].category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-white/80 transition-colors">
                  {direction === "rtl" ? posts[0].titleAr : posts[0].titleEn}
                </h2>
                <p className="text-white/50 leading-relaxed mb-6">
                  {direction === "rtl" ? posts[0].excerptAr : posts[0].excerptEn}
                </p>

                <div className="flex items-center gap-4 text-sm text-white/40">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{direction === "rtl" ? posts[0].dateAr : posts[0].dateEn}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={14} />
                    <span>{direction === "rtl" ? posts[0].readTimeAr : posts[0].readTimeEn}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* Posts Grid */}
      <section className="py-8 md:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {posts.slice(1).map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <Link href={`/blog/${post.id}`} className="block group h-full">
                <div className="glass p-6 h-full flex flex-col">
                  {/* Image */}
                  <div className="aspect-video bg-white/5 rounded-xl overflow-hidden relative mb-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-white/10 text-6xl font-bold">{post.id}</span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                        <ArrowUpRight size={18} className="text-black" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <span className="text-xs text-white/40 uppercase tracking-wider mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-white/80 transition-colors flex-1">
                    {direction === "rtl" ? post.titleAr : post.titleEn}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-white/40 mt-auto">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{direction === "rtl" ? post.dateAr : post.dateEn}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{direction === "rtl" ? post.readTimeAr : post.readTimeEn}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {direction === "rtl" ? "اشترك في نشرتنا" : "Subscribe to Our Newsletter"}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            {direction === "rtl"
              ? "احصل على أحدث المقالات والنصائح في بريدك"
              : "Get the latest articles and tips delivered to your inbox"}
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder={direction === "rtl" ? "بريدك الإلكتروني" : "Your email"}
              className="flex-1 px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5"
            >
              {direction === "rtl" ? "اشترك" : "Subscribe"}
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}