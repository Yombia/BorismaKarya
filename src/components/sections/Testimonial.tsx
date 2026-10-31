// src/components/sections/Testimonial.tsx
"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Data Ulasan (Bisa disesuaikan dengan klien asli PT. Borisma Karya nantinya)
const testimonials = [
  {
    client: "Dinas Pekerjaan Umum",
    role: "Sektor Pemerintahan",
    content: "PT. Borisma Karya menunjukkan presisi absolut dalam audit struktural tata kota kami. Tenggat waktu tercapai dengan kualitas yang melampaui standar ISO.",
    rating: 5,
  },
  {
    client: "PT. Logistik Nusantara",
    role: "Manufaktur & Pergudangan",
    content: "Manajemen konstruksi dan perkuatan struktur gudang kami dieksekusi dengan efisiensi luar biasa. Sangat direkomendasikan untuk proyek skala masif.",
    rating: 5,
  },
  {
    client: "Manajemen Eco-Resort",
    role: "Pengembangan Pariwisata",
    content: "Integrasi desain arsitektur yang estetis tanpa mengorbankan integritas sipil. Pendekatan SOTA mereka benar-benar merevolusi cara kami membangun.",
    rating: 5,
  }
];

export function Testimonial() {
  return (
    <section className="py-24 bg-brand-black relative z-10 border-t border-white/5 overflow-hidden">
      {/* Ornamen Latar Belakang */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-brand-gold/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">
            Bukti Kredibilitas
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">Kepercayaan <span className="text-brand-gold">Klien</span></h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Rekam jejak kami tidak hanya tertulis pada cetak biru, melainkan pada kepuasan absolut mitra strategis kami di seluruh Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="p-8 rounded-3xl bg-brand-surface border border-white/5 hover:border-brand-gold/30 transition-all relative group"
            >
              {/* Ikon Kutipan Dekoratif */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-brand-gold/10 transition-colors" />
              
              {/* Bintang Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Konten Ulasan */}
              <p className="text-muted-foreground leading-relaxed mb-8 relative z-10">
                "{item.content}"
              </p>

              {/* Identitas Klien */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
                <div className="w-12 h-12 rounded-full bg-brand-black flex items-center justify-center border border-brand-gold/20 font-bold text-brand-gold">
                  {item.client.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.client}</h4>
                  <p className="text-xs text-brand-gold uppercase tracking-widest mt-1">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}