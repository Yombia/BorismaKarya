// src/app/layout.tsx
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { CONTACT, SITE } from "@/lib/data/site";

// Plus Jakarta Sans (variabel 200–800), di-host sendiri agar build tidak bergantung pada Google Fonts.
const jakarta = localFont({
  src: "./fonts/plus-jakarta-sans-latin-wght-normal.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Konsultan Perencanaan & Pengawasan di Sumatera Utara`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "Borisma Karya",
    "CV Borisma Karya",
    "konsultan perencanaan Medan",
    "konsultan perencanaan Samosir",
    "jasa pengurusan PBG Medan",
    "pengurusan SLF pabrik",
    "konsultan arsitektur Sumatera Utara",
    "studi kelayakan",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Konsultan Perencanaan & Pengawasan`,
    description: SITE.description,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/assets/images/logo.jpg`,
  image: `${SITE.url}/opengraph-image.jpg`,
  foundingDate: String(SITE.foundedYear),
  description: SITE.description,
  email: CONTACT.email,
  telephone: "+628137220414",
  areaServed: "Sumatera Utara",
  openingHours: "Mo-Sa 08:00-17:00",
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
  sameAs: CONTACT.socials.map((s) => s.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${jakarta.variable} scroll-smooth`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Menandai bahwa JavaScript aktif, supaya animasi .reveal hanya menyembunyikan konten bila nanti bisa ditampilkan lagi. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-paper focus:px-4 focus:py-2 focus:text-ink"
        >
          Lewati ke konten
        </a>
        <SiteHeader />
        <main id="konten" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
