// src/components/sections/Services.tsx
"use client";

import { motion } from "framer-motion";
import { Building, Ruler, Zap, Map, Search, Cpu, Users } from "lucide-react";
import { SERVICES } from "@/lib/data/site";

const icons: Record<string, React.ReactNode> = {
  arsitektur: <Building className="w-10 h-10" />,
  sipil: <Ruler className="w-10 h-10" />,
  me: <Zap className="w-10 h-10" />,
  urban: <Map className="w-10 h-10" />,
  riset: <Search className="w-10 h-10" />,
  ti: <Cpu className="w-10 h-10" />,
  pelatihan: <Users className="w-10 h-10" />,
};

export function Services() {
  return (
    <section id="layanan" className="py-24 bg-brand-black scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">Bidang Layanan</h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Tujuh Bidang, <span className="text-brand-gold">Satu Tim</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mt-6">
            Setiap bidang dipimpin oleh tenaga ahli bersertifikat, sehingga satu pekerjaan bisa ditangani dari perencanaan sampai perizinan.
          </p>
          <div className="h-1 w-20 bg-brand-gold mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="p-8 rounded-2xl border border-white/5 bg-brand-surface/40 backdrop-blur-sm group hover:border-brand-gold/50 transition-all duration-300"
            >
              <div className="text-brand-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                {icons[service.key]}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
