import type { Locale } from "./settings";
import en from "./locales/en";
import ar from "./locales/ar";

const dictionaries = {
  en,
  ar,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale] || dictionaries.en;
}

export type Dictionary = typeof en;