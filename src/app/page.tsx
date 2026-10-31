// src/app/page.tsx
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { Building2, ClipboardCheck, FileSearch } from "lucide-react";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const highlights = [
  {
    icon: <Building2 className="h-8 w-8 text-brand-gold" />,
    title: "Perencanaan",
    desc: "Perencanaan arsitektur, sipil, mekanikal-elektrikal, dan kawasan, dari konsep sampai Detail Engineering Design (DED).",
  },
  {
    icon: <ClipboardCheck className="h-8 w-8 text-brand-gold" />,
    title: "Pengawasan",
    desc: "Pengawasan teknis pembangunan gedung, jalan, dermaga, dan fasilitas umum agar sesuai rencana dan standar.",
  },
  {
    icon: <FileSearch className="h-8 w-8 text-brand-gold" />,
    title: "Studi & Perizinan",
    desc: "Studi kelayakan, kajian teknis, serta pendampingan pengurusan PBG dan SLF sampai izin terbit.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <section className="relative z-10 border-y border-white/5 bg-brand-surface/80 py-16 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-brand-black/50 hover:border-brand-gold/30 transition-all duration-300 hover:bg-brand-surface"
              >
                <div className="mb-4 rounded-full bg-brand-gold/10 p-4">{item.icon}</div>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Portfolio />
    </div>
  );
}
