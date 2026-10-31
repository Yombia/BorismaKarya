// src/components/sections/Hero.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { yearsActive } from "@/lib/data/site";

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
            Konsultan Perencanaan & Pengawasan · Sejak 1989
          </div>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <h1 className="mx-auto mb-6 max-w-5xl text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl">
            Merencanakan Bangunan <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-[#FFD700] to-brand-gold">
              dan Kawasan
            </span>
          </h1>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Selama {yearsActive()} tahun, CV. Borisma Karya membantu pemerintah daerah dan swasta di Sumatera Utara dalam perencanaan arsitektur, sipil, mekanikal-elektrikal, tata kota, studi kelayakan, serta pengurusan PBG dan SLF.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/#portofolio" className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-gold px-8 text-base font-bold text-black transition-all hover:scale-105 hover:bg-brand-gold/90 active:scale-95">
            Lihat Portofolio <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link href="/#kontak" className="inline-flex h-12 items-center justify-center rounded-lg border border-brand-gold/50 px-8 text-base font-semibold text-brand-gold transition-all hover:bg-brand-gold/10">
            Hubungi Kami
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}