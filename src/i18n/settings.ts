export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

// اللغة الافتراضية إنجليزي
export const defaultLocale: Locale = "en";

export const localeDirection: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
};