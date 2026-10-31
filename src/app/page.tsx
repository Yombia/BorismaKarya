// src/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonial } from "@/components/sections/Testimonial"; // Injeksi Impor SOTA
import { Building2, HardHat, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* 1. Modul Hero (Fasad Utama) */}
      <Hero />

      {/* 2. Modul Indikator Kredibilitas */}
      <section className="relative z-10 border-y border-white/5 bg-brand-surface/80 py-16 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: <Building2 className="h-8 w-8 text-brand-gold" />, title: "Perencanaan Presisi", desc: "Kalkulasi detail tanpa kompromi pada setiap fase desain arsitektural." },
              { icon: <HardHat className="h-8 w-8 text-brand-gold" />, title: "Manajemen Eksekusi", desc: "Orkestrasi sumber daya dan waktu secara efisien di lapangan." },
              { icon: <ShieldCheck className="h-8 w-8 text-brand-gold" />, title: "Integritas Struktural", desc: "Keamanan dan daya tahan jangka panjang adalah metrik prioritas mutlak kami." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-brand-black/50 hover:border-brand-gold/30 transition-all duration-300 hover:bg-brand-surface">
                <div className="mb-4 rounded-full bg-brand-gold/10 p-4 shadow-[0_0_15px_rgba(245,166,35,0.1)]">{item.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Modul Layanan Konsultansi */}
      <Services />

      {/* 4. Modul Portofolio dengan Smart Filter */}
      <Portfolio /> 

      {/* 5. Modul Testimonial (Social Proof Validation) */}
      <Testimonial />
      
    </main>
  );
}