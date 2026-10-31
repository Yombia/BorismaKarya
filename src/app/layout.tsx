// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

/**
 * Optimasi Tipografi Geometris (SOTA)
 * Menggunakan Geist untuk estetika industrial yang presisi.
 */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * Meta Tags Infrastruktur & SEO
 * Dirancang untuk otoritas pencarian maksimal bagi PT. Borisma Karya.
 */
export const metadata: Metadata = {
  title: "PT. Borisma Karya | Konsultan Konstruksi Presisi Tinggi",
  description: "Solusi konsultansi teknis kelas dunia dengan integritas struktural absolut untuk masa depan infrastruktur Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // INJEKSI SOTA: Tambahkan data-scroll-behavior="smooth"
    <html lang="id" suppressHydrationWarning className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        {/* State Manager: Mengunci Dark Mode secara absolut 
          untuk menjaga konsistensi brand 'Elite & Dark' PT. Borisma Karya.
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          forcedTheme="dark"
        >
          {/* Fasad Navigasi Utama */}
          <Navbar />
          
          {/* Main Container: flex-1 menjamin elemen ini mengisi sisa ruang 
            dan mendorong Footer ke posisi terbawah secara otomatis.
          */}
          <main className="flex-1 flex flex-col">
            {children}
          </main>

          {/* Fondasi Penutup Arsitektural */}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}