"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    labelEn: "Email",
    labelAr: "البريد الإلكتروني",
    value: "hello@truzet.com",
    href: "mailto:hello@truzet.com",
  },
  {
    icon: Phone,
    labelEn: "WhatsApp",
    labelAr: "واتساب",
    value: "+20 123 456 7890",
    href: "https://wa.me/201234567890",
  },
  {
    icon: MapPin,
    labelEn: "Location",
    labelAr: "الموقع",
    valueEn: "Cairo, Egypt",
    valueAr: "القاهرة، مصر",
    href: "#",
  },
  {
    icon: Clock,
    labelEn: "Working Hours",
    labelAr: "ساعات العمل",
    valueEn: "Sun - Thu: 9AM - 6PM",
    valueAr: "الأحد - الخميس: ٩ص - ٦م",
    href: "#",
  },
];

export default function ContactPage() {
  const { dictionary, direction, isLoaded } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", phone: "", service: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
            <MessageSquare size={16} className="text-white/70" />
            <span className="text-sm text-white/70">
              {dictionary.contact.title}
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            {direction === "rtl" ? (
              <>
                جاهزين{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
                  نسمع
                </span>{" "}
                منك
              </>
            ) : (
              <>
                Let's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white">
                  Talk
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto">
            {dictionary.contact.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass p-6 flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <Icon size={22} className="text-white/70" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-white/40 mb-1">
                      {direction === "rtl" ? item.labelAr : item.labelEn}
                    </div>
                    <div className="text-white font-medium">
                      {item.valueEn
                        ? direction === "rtl"
                          ? item.valueAr
                          : item.valueEn
                        : item.value}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-white/20 group-hover:text-white/50 transition-colors"
                  />
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass p-6"
            >
              <h3 className="text-white font-semibold mb-4">
                {direction === "rtl" ? "تابعنا" : "Follow Us"}
              </h3>
              <div className="flex gap-3">
                {["Instagram", "LinkedIn", "Twitter", "Behance"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-colors"
                  >
                    <span className="text-xs font-medium">{social.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="glass p-8 md:p-10">
              <h2 className="text-2xl font-bold text-white mb-6">
                {direction === "rtl" ? "ابعتلنا رسالة" : "Send Us a Message"}
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {direction === "rtl" ? "تم الإرسال بنجاح!" : "Message Sent!"}
                  </h3>
                  <p className="text-white/50">
                    {direction === "rtl"
                      ? "هنرد عليك في أقرب وقت"
                      : "We'll get back to you soon"}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm text-white/50 mb-2">
                        {dictionary.contact.form.name}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                        placeholder={direction === "rtl" ? "اسمك" : "Your name"}
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/50 mb-2">
                        {dictionary.contact.form.email}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                        placeholder={direction === "rtl" ? "بريدك الإلكتروني" : "Your email"}
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm text-white/50 mb-2">
                      {direction === "rtl" ? "رقم الهاتف" : "Phone Number"}
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState({ ...formState, phone: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder={direction === "rtl" ? "رقمك (اختياري)" : "Your phone (optional)"}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-sm text-white/50 mb-2">
                      {direction === "rtl" ? "الخدمة المطلوبة" : "Service Needed"}
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-neutral-900">
                        {direction === "rtl" ? "اختار الخدمة" : "Select a service"}
                      </option>
                      <option value="branding" className="bg-neutral-900">
                        {direction === "rtl" ? "هوية بصرية" : "Brand Identity"}
                      </option>
                      <option value="web" className="bg-neutral-900">
                        {direction === "rtl" ? "تصميم موقع" : "Web Design"}
                      </option>
                      <option value="social" className="bg-neutral-900">
                        {direction === "rtl" ? "سوشيال ميديا" : "Social Media"}
                      </option>
                      <option value="marketing" className="bg-neutral-900">
                        {direction === "rtl" ? "تسويق" : "Marketing"}
                      </option>
                      <option value="other" className="bg-neutral-900">
                        {direction === "rtl" ? "أخرى" : "Other"}
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm text-white/50 mb-2">
                      {dictionary.contact.form.message}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                      placeholder={
                        direction === "rtl"
                          ? "احكيلنا عن مشروعك..."
                          : "Tell us about your project..."
                      }
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 rounded-full border-2 border-black/20 border-t-black animate-spin" />
                    ) : (
                      <>
                        {dictionary.contact.form.send}
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map or Additional CTA */}
      <section className="py-8 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {direction === "rtl" ? "أو ابدأ محادثة مباشرة" : "Or Start a Direct Chat"}
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto mb-8">
            {direction === "rtl"
              ? "تواصل معنا على الواتساب للرد السريع"
              : "Reach us on WhatsApp for a quick response"}
          </p>
          <a
            href="https://wa.me/201234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone size={20} />
            {direction === "rtl" ? "ابدأ محادثة واتساب" : "Start WhatsApp Chat"}
          </a>
        </motion.div>
      </section>
    </div>
  );
}