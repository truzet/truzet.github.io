"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";

interface LanguageTransitionProps {
  children: ReactNode;
}

export default function LanguageTransition({ children }: LanguageTransitionProps) {
  const { isTransitioning, direction } = useLanguage();

  return (
    <div dir={direction}>
      <AnimatePresence mode="wait">
        {isTransitioning ? (
          // Transition Overlay
          <motion.div
            key="transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-[#0a0a0b]/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              {/* Loading Spinner */}
              <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white animate-spin" />
              
              {/* Language Switch Text */}
              <motion.p
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-white/60 text-sm"
              >
                Switching language...
              </motion.p>
            </motion.div>
          </motion.div>
        ) : (
          // Main Content
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}