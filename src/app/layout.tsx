// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { SITE } from "@/lib/data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline} di Sumatera Utara`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Borisma Karya",
    "CV Borisma Karya",
    "konsultan perencanaan Medan",
    "konsultan arsitektur Sumatera Utara",
    "konsultan Samosir",
    "pengurusan PBG",
    "pengurusan SLF",
    "studi kelayakan",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.tagline}`,
    description: SITE.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/assets/images/logo.jpg`,
  foundingDate: String(SITE.foundedYear),
  description: SITE.description,
  email: "borismakarya.consulting@gmail.com",
  telephone: "+628137220414",
  areaServed: "Sumatera Utara",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "Mega Setia Budi Village No. B2, Kec. Medan Selayang",
      addressLocality: "Medan",
      postalCode: "20132",
      addressRegion: "Sumatera Utara",
      addressCountry: "ID",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "Jl. Sianjur Mulamula No. 3 Tajur",
      addressLocality: "Pangururan, Kabupaten Samosir",
      postalCode: "22390",
      addressRegion: "Sumatera Utara",
      addressCountry: "ID",
    },
  ],
  sameAs: [
    "https://www.instagram.com/borisma_karya",
    "https://www.facebook.com/706286335902224",
    "https://www.tiktok.com/@borisma.karya7",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
