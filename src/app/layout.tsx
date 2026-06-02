import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  Geist,
  Geist_Mono,
  Amiri,
  Noto_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/hooks/useLanguage";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { PageLoaderProvider } from "@/components/providers/PageLoaderProvider";

// Google Fonts
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  display: "swap",
  weight: ["400", "700"],
});

const notoSansArabic = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
  display: "swap",
  weight: ["300", "400", "500"],
});

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Noir Florale",
  alternateName: "نوار فلورال",
  description:
    "A premium boutique specializing in rare flowers, artistic floral arrangements, and luxury botanical services.",
  url: "https://noirflorale.com",
  logo: "https://noirflorale.com/logo.svg",
  image: "https://noirflorale.com/images/hero-bg.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Downtown Atelier",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  telephone: "+971-XX-XXX-XXXX",
  email: "hello@noirflorale.com",
  priceRange: "$$$$",
  openingHours: "By Appointment Only",
  sameAs: [
    "https://instagram.com/noirflorale",
    "https://facebook.com/noirflorale",
    "https://twitter.com/noirflorale",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://noirflorale.com"),
  title: "Noir Florale | Rare Botanical Atelier",
  description:
    "Where rarity meets artistry. Curating the world's most extraordinary blooms for the most discerning connoisseurs. Premium rare flowers, bespoke floral design, and luxury botanical services.",
  keywords: [
    "rare flowers",
    "luxury floral",
    "botanical atelier",
    "premium flowers",
    "ghost orchid",
    "Juliet rose",
    "black baccara",
    "bespoke floral design",
    "luxury events",
    "Dubai flowers",
    "نوار فلورال",
    "زهور نادرة",
    "أتيلي زهور",
  ],
  authors: [{ name: "Noir Florale" }],
  creator: "Noir Florale",
  publisher: "Noir Florale",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Noir Florale | Rare Botanical Atelier",
    description:
      "Where rarity meets artistry. Curating the world's most extraordinary blooms.",
    url: "https://noirflorale.com",
    siteName: "Noir Florale",
    images: [
      {
        url: "/images/hero-bg.png",
        width: 1344,
        height: 768,
        alt: "Noir Florale - Rare Botanical Atelier",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noir Florale | Rare Botanical Atelier",
    description:
      "Where rarity meets artistry. Curating the world's most extraordinary blooms.",
    images: ["/images/hero-bg.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${inter.variable} ${amiri.variable} ${notoSansArabic.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={true}
        >
          <LanguageProvider>
            <PageLoaderProvider>
              <SmoothScrollProvider>{children}</SmoothScrollProvider>
            </PageLoaderProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
