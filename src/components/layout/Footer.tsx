"use client";

import { useLanguage } from "@/i18n/LanguageContext";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { dictionary, direction } = useLanguage();

  const quickLinks = [
    { href: "/about", label: dictionary.nav.about },
    { href: "/services", label: dictionary.nav.services },
    { href: "/portfolio", label: dictionary.nav.portfolio },
    { href: "/blog", label: dictionary.nav.blog },
    { href: "/contact", label: dictionary.nav.contact },
  ];

  const contactInfo = [
    {
      icon: Mail,
      value: "hello@truzet.com",
      href: "mailto:hello@truzet.com",
    },
    {
      icon: Phone,
      value: "+20 123 456 7890",
      href: "tel:+201234567890",
    },
    {
      icon: MapPin,
      value: direction === "rtl" ? "القاهرة، مصر" : "Cairo, Egypt",
      href: "#",
    },
  ];

  return (
    <footer className="mt-16 pt-16 border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Logo size="md" showText className="mb-4" />
          <p className="text-white/50 max-w-md mb-6">
            {dictionary.footer.description}
          </p>
          <p className="text-sm text-white/30 font-medium">
            {dictionary.footer.tagline}
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            {dictionary.footer.links}
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/50 hover:text-white transition-colors inline-flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight
                    size={14}
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            {dictionary.footer.contact}
          </h4>
          <ul className="space-y-3">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-white transition-colors inline-flex items-center gap-3"
                  >
                    <Icon size={16} />
                    {item.value}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} truzet. {dictionary.footer.copyright}
        </p>

        <div className="flex items-center gap-6">
          <a href="#" className="text-white/30 hover:text-white/50 text-sm transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-white/30 hover:text-white/50 text-sm transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}