// src/components/sections/Hero.tsx
"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Konfigurasi fisika animasi (SOTA) dengan Strict Typing
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Jeda antar elemen (layering effect)
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.15),transparent_60%)] blur-2xl" />

      <motion.div 
        className="container relative z-10 px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6 flex justify-center">
          <div className="inline-flex items-center rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-sm font-semibold text-brand-gold shadow-[0_0_10px_rgba(245,166,35,0.2)]">
            <span className="mr-2 h-2 w-2 rounded-full bg-brand-gold animate-pulse" />
            Konsultan Konstruksi SOTA (State-of-the-Art)
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
            Membangun Struktur <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-[#FFD700] to-brand-gold">
              Presisi Tinggi
            </span>
          </h1>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            PT. Borisma Karya menyediakan solusi konsultansi teknis mutakhir. Kami mengintegrasikan inovasi desain arsitektural dengan integritas struktural absolut untuk masa depan infrastruktur Indonesia.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-12 bg-brand-gold px-8 text-base font-bold text-black transition-all hover:scale-105 hover:bg-brand-gold/90 active:scale-95">
            Lihat Portofolio <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 border-brand-gold/50 px-8 text-base font-semibold text-brand-gold transition-all hover:bg-brand-gold/10">
            Hubungi Tim Ahli
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}