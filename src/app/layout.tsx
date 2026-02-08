import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";
import FloatingContact from "@/components/ui/FloatingContact";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import LanguageTransition from "@/components/ui/LanguageTransition";

export const metadata: Metadata = {
  title: "truzet — Built on Trust, Driven by Results",
  description:
    "We don't just make you visible... We make you heard, felt, and remembered.",
  keywords: ["branding", "marketing", "digital agency", "creative agency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen antialiased">
        <LanguageProvider>
          <LoadingScreen />

          {/* Sidebar */}
          <Sidebar />

          {/* Main Content with Language Transition */}
          <LanguageTransition>
            <main
              className={`
                min-h-screen
                pt-24 lg:pt-8
                pb-8
                px-4 lg:px-8
                lg:pl-28
              `}
            >
              {children}
              <Footer />
            </main>
          </LanguageTransition>

          {/* Floating Contact */}
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}