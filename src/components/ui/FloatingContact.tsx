"use client";

import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { MessageCircle, X, Mail, Phone, MapPin, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function FloatingContact() {
  const { direction, isLoaded } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const contactOptions = [
    {
      icon: Phone,
      labelEn: "WhatsApp",
      labelAr: "واتساب",
      value: "+20 123 456 7890",
      href: "https://wa.me/201234567890",
      bgColor: "bg-green-500/20",
      iconColor: "text-green-400",
    },
    {
      icon: Mail,
      labelEn: "Email",
      labelAr: "الإيميل",
      value: "hello@truzet.com",
      href: "mailto:hello@truzet.com",
      bgColor: "bg-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: MapPin,
      labelEn: "Location",
      labelAr: "الموقع",
      value: direction === "rtl" ? "القاهرة، مصر" : "Cairo, Egypt",
      href: "https://maps.google.com",
      bgColor: "bg-red-500/20",
      iconColor: "text-red-400",
    },
  ];

  if (!isLoaded) return null;

  return (
    <div
      className={cn(
        // ثابت على اليمين دائماً بغض النظر عن اللغة
        "fixed bottom-6 right-6 z-50",
        "hidden lg:block"
      )}
      // منع التأثر بـ RTL
      style={{ direction: "ltr" }}
    >
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10"
              onClick={() => setIsOpen(false)}
            />

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              className="absolute bottom-20 right-0 w-80 glass rounded-3xl p-6"
              dir={direction}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">
                  {direction === "rtl" ? "تواصل معنا" : "Get in Touch"}
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X size={18} className="text-white/60" />
                </button>
              </div>

              {/* Contact Options */}
              <div className="space-y-2">
                {contactOptions.map((option, index) => {
                  const Icon = option.icon;
                  return (
                    <motion.a
                      key={index}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div
                        className={cn(
                          "w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
                          option.bgColor
                        )}
                      >
                        <Icon size={20} className={option.iconColor} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-white/50 mb-0.5">
                          {direction === "rtl" ? option.labelAr : option.labelEn}
                        </div>
                        <div className="text-white font-medium text-sm truncate">
                          {option.value}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Quick Message */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <a
                  href="https://wa.me/201234567890?text=Hello%20truzet!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-full bg-white text-black font-medium hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Send size={16} />
                  {direction === "rtl" ? "ابدأ محادثة" : "Start a Chat"}
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300",
          isOpen
            ? "glass"
            : "bg-white text-black shadow-lg shadow-white/20"
        )}
      >
        {/* Pulse Effect */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-white/50 animate-ping opacity-30" />
        )}

        {/* Icon */}
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={22} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle size={22} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}