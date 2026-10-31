// src/components/sections/Services.tsx
"use client";

import { motion } from "framer-motion";
import { Hammer, Ruler, Building, HardHat, FileCheck, Landmark } from "lucide-react";

const services = [
  {
    icon: <Ruler className="w-10 h-10" />,
    title: "Civil & Structural Design",
    desc: "Kalkulasi matematis tingkat tinggi untuk stabilitas struktur infrastruktur jangka panjang."
  },
  {
    icon: <Building className="w-10 h-10" />,
    title: "Architectural Consulting",
    desc: "Integrasi estetika modern dengan fungsionalitas ruang yang efisien dan berkelanjutan."
  },
  {
    icon: <HardHat className="w-10 h-10" />,
    title: "Project Management",
    desc: "Orkestrasi lapangan yang disiplin untuk menjamin ketepatan waktu dan efisiensi anggaran."
  },
  {
    icon: <FileCheck className="w-10 h-10" />,
    title: "Technical Auditing",
    desc: "Evaluasi menyeluruh terhadap integritas bangunan untuk menjamin standar keamanan tertinggi."
  },
  {
    icon: <Hammer className="w-10 h-10" />,
    title: "Renovation & Retrofitting",
    desc: "Transformasi dan perkuatan struktur lama dengan teknologi konstruksi terkini."
  },
  {
    icon: <Landmark className="w-10 h-10" />,
    title: "Urban Planning",
    desc: "Perencanaan tata kota strategis untuk mendukung pertumbuhan ekosistem infrastruktur."
  }
];

export function Services() {
  return (
    <section id="layanan" className="py-24 bg-brand-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">Layanan Unggulan</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Solusi Konstruksi <span className="text-brand-gold">End-to-End</span></h3>
          <div className="h-1 w-20 bg-brand-gold mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-2xl border border-white/5 bg-brand-surface/40 backdrop-blur-sm group hover:border-brand-gold/50 transition-all duration-300"
            >
              <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}