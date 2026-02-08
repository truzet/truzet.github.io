export const siteConfig = {
  name: "Truzet",
  description: {
    en: "The turning point between a brand that's seen and a brand that's felt. We create presence, build emotion, and transform attention into real value.",
    ar: "نقطة التحوّل بين براند بيتشاف وبراند بيتِحسّ. نخلق حضور، نبني إحساس، ونحوّل الانتباه لقيمة حقيقية.",
  },
  url: "https://truzet.com",
  ogImage: "https://truzet.com/og-image.jpg",
  links: {
    twitter: "https://twitter.com/truzet",
    instagram: "https://instagram.com/truzet",
    linkedin: "https://linkedin.com/company/truzet",
  },
  creator: "Truzet",
  keywords: {
    en: ["branding", "marketing", "social media", "web design", "brand identity", "creative agency", "digital marketing"],
    ar: ["براندينج", "تسويق", "سوشيال ميديا", "تصميم مواقع", "هوية بصرية", "وكالة إبداعية", "تسويق رقمي"],
  },
};

export type PageSEO = {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  noIndex?: boolean;
};

export function generateMetadata(page: PageSEO, locale: "en" | "ar" = "en") {
  const title = `${page.title} | ${siteConfig.name}`;
  const description = page.description;
  const keywords = page.keywords || siteConfig.keywords[locale];

  return {
    title,
    description,
    keywords: keywords.join(", "),
    openGraph: {
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: page.ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [page.ogImage || siteConfig.ogImage],
      creator: "@truzet",
    },
    robots: {
      index: !page.noIndex,
      follow: !page.noIndex,
    },
  };
}