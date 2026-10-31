// src/app/tentang/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  History, Eye, Target, ShieldCheck, 
  Lightbulb, Award, Users, CheckCircle2,
  Building2, Ruler, Map, Zap, Search, Cpu
} from "lucide-react";

// Data Sejarah 
const timeline = [
  { year: "1989", title: "Fondasi Awal", desc: "Didirikan oleh Ir. Christop Risman Sinaga, dkk dengan fokus Perencanaan Sipil & Irigasi." },
  { year: "2010", title: "Restrukturisasi", desc: "Perluasan ke bidang Arsitektur & Tata Ruang di bawah pimpinan Sri Rezeki Mariswaty, ST." },
  { year: "2015", title: "Diversifikasi Bisnis", desc: "Ekspansi ke studi Ekonomi, Kelayakan Bisnis, dan Riset Kewirausahaan." },
  { year: "2017", title: "Transformasi Digital", desc: "Inisiasi layanan Teknologi Informasi dan Manajemen Event/Pelatihan." },
  { year: "2023", title: "Konsolidasi SOTA", desc: "Pemantapan 7 divisi layanan terintegrasi untuk infrastruktur masa depan." },
];

// Data 7 Pilar Divisi
const divisions = [
  {
    title: "Architecture Department",
    desc: "Membidangi Perencanaan Arsitektur, Interior, Lansekap, serta pengurusan PBG dan SLF.",
    image: "/assets/images/portfolio/project-1.png",
    icon: <Building2 className="w-6 h-6" />
  },
  {
    title: "Civil Department",
    desc: "Spesialisasi struktur bangunan gedung, transportasi, dan rekayasa air sejak awal berdiri.",
    image: "/assets/images/portfolio/project-2.png",
    icon: <Ruler className="w-6 h-6" />
  },
  {
    title: "Urban Department",
    desc: "Fokus pada studi komprehensif dan perencanaan tata kota yang berkelanjutan.",
    image: "/assets/images/portfolio/project-3.png",
    icon: <Map className="w-6 h-6" />
  },
  {
    title: "Mechanical & Electrical",
    desc: "Integrasi sistem mekanis HVAC, plumbing, lift, dan infrastruktur kelistrikan modern.",
    image: "/assets/images/portfolio/project-4.png",
    icon: <Zap className="w-6 h-6" />
  },
  {
    title: "Research Department",
    desc: "Pusat studi bisnis, riset pertanian, pemberdayaan UMKM, dan penelitian ekonomi.",
    image: "/assets/images/portfolio/project-5.png",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "IT Department",
    desc: "Layanan teknologi informasi, pengembangan aplikasi, website, dan media promosi digital.",
    image: "/assets/images/portfolio/project-6.png",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Training & Event",
    desc: "Penyelenggara pelatihan teknik, manajemen, dan event profesional berskala nasional.",
    image: "/assets/images/portfolio/project-1.png",
    icon: <Users className="w-6 h-6" />
  }
];

export default function TentangPage() {
  return (
    <div className="bg-brand-black pt-32 pb-24">
      <div className="container mx-auto px-4">
        
        {/* HERO TENTANG KAMI */}
        <section className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Mengenal Lebih Dekat
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold mb-8"
          >
            Warisan <span className="text-brand-gold">Integritas</span> & Inovasi
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed"
          >
            Sejak 16 Oktober 1989, PT. Borisma Karya telah menjadi mitra terpercaya dalam membangun lanskap infrastruktur Indonesia melalui presisi teknis dan komitmen kualitas yang absolut.
          </motion.p>
        </section>

        {/* STATISTIK KREDIBILITAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { label: "Tahun Pengalaman", value: "34+", icon: <History /> },
            { label: "Proyek Diselesaikan", value: "500+", icon: <Target /> },
            { label: "Tenaga Ahli", value: "150+", icon: <Users /> },
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-2xl border border-white/5 bg-brand-surface/50 text-center">
              <div className="text-brand-gold mb-4 flex justify-center">{stat.icon}</div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground uppercase text-xs tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* VISI & MISI */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-brand-gold/10 to-transparent border border-brand-gold/20">
            <Eye className="text-brand-gold w-12 h-12 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Visi Kami</h3>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi pelopor dalam industri konstruksi yang dikenal melalui inovasi, kualitas, dan komitmen terhadap keberlanjutan, menciptakan nilai tambah bagi pemangku kepentingan.
            </p>
          </div>
          <div className="p-10 rounded-3xl bg-brand-surface border border-white/5">
            <Target className="text-brand-gold w-12 h-12 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Misi Strategis</h3>
            <ul className="space-y-4">
              {[
                "Solusi konstruksi terpadu & unggul",
                "Keutamaan keselamatan & ketepatan waktu",
                "Pengembangan SDM berintegritas tinggi",
                "Praktik bisnis etis & bertanggung jawab"
              ].map((misi, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="text-brand-gold w-5 h-5 shrink-0 mt-1" />
                  <span>{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TIMELINE SEJARAH */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">Lini Masa Evolusi</h3>
            <div className="h-1 w-20 bg-brand-gold mx-auto"></div>
          </div>
          <div className="relative border-l border-brand-gold/30 ml-4 md:mx-auto md:max-w-4xl">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="mb-12 ml-8 relative"
              >
                <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-brand-gold shadow-[0_0_15px_rgba(245,166,35,0.5)]"></div>
                <div className="text-brand-gold font-bold text-xl mb-1">{item.year}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* NILAI PERUSAHAAN */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold">Nilai Inti Borisma</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "Integritas", i: <ShieldCheck />, d: "Kejujuran & transparansi dalam setiap fase proyek." },
              { t: "Inovasi", i: <Lightbulb />, d: "Penerapan teknologi terbaru untuk nilai tambah maksimal." },
              { t: "Kualitas", i: <Award />, d: "Standar tertinggi tanpa kompromi pada detail terkecil." },
              { t: "Kolaborasi", i: <Users />, d: "Kemitraan kuat adalah kunci kesuksesan bersama." },
            ].map((val, i) => (
              <div key={i} className="p-8 rounded-2xl border border-white/5 bg-brand-surface hover:border-brand-gold/50 transition-colors group text-center">
                <div className="text-brand-gold mb-4 flex justify-center group-hover:scale-110 transition-transform">{val.i}</div>
                <h4 className="font-bold mb-2">{val.t}</h4>
                <p className="text-sm text-muted-foreground">{val.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MODUL 7 DIVISI SPESIFIK */}
        <section className="pt-16 border-t border-white/5">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4">7 Pilar Divisi Spesifik</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ekosistem layanan terpadu yang dirancang untuk menangani setiap spektrum pembangunan dengan keahlian mendalam.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((div, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl bg-brand-surface border border-white/5"
              >
                {/* Gambar Latar Divisi */}
                <div className="relative h-48 w-full opacity-40 group-hover:opacity-60 transition-opacity">
                  <Image 
                    src={div.image} 
                    alt={div.title} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-surface to-transparent" />
                </div>
                
                {/* Konten Teknis */}
                <div className="p-8 relative z-10 -mt-10">
                  <div className="w-12 h-12 rounded-xl bg-brand-black flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20 shadow-[0_0_15px_rgba(245,166,35,0.15)] relative z-20">
                    {div.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-brand-gold transition-colors">
                    {div.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {div.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}