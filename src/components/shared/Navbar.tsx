// src/components/shared/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  // State Manager untuk mendeteksi status buka/tutup menu mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Data Navigasi untuk meminimalisir redundansi kode
  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Tentang Kami", path: "/tentang" },
    { name: "Layanan", path: "/#layanan" },
    { name: "Portofolio", path: "/#portofolio" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-brand-black/90 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between relative z-50">
        
        {/* Identitas Brand */}
        <Link href="/" onClick={closeMenu} className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 overflow-hidden rounded-md border border-brand-gold/20">
            <Image 
              src="/assets/images/logo.jpg" 
              alt="Logo PT. Borisma Karya" 
              fill 
              sizes="48px"
              className="object-cover mix-blend-screen transition-transform group-hover:scale-110"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tighter text-white leading-none">
              BORISMA <span className="text-brand-gold text-sm ml-1 tracking-widest uppercase">Karya</span>
            </span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-1">
              General Contractor
            </span>
          </div>
        </Link>

        {/* Navigasi Desktop (SOTA Routing) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className="text-sm font-medium text-muted-foreground hover:text-brand-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-brand-gold text-black font-bold hover:bg-brand-gold/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(245,166,35,0.2)]">
            Mulai Proyek
          </Button>
        </div>

        {/* Tombol Toggle Mobile (Hamburger Menu) */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-brand-gold hover:bg-brand-gold/10 rounded-md transition-colors"
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Panel Navigasi Mobile (Laci SOTA) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 right-0 bg-brand-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl md:hidden z-40"
          >
            <div className="flex flex-col px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={closeMenu}
                  className="text-lg font-medium text-white border-b border-white/5 pb-4 hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button onClick={closeMenu} className="w-full mt-4 bg-brand-gold text-black font-bold hover:bg-brand-gold/90 h-12">
                Konsultasi Sekarang
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}