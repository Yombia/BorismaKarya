// Halaman 404 (dipakai Cloudflare lewat not_found_handling: "404-page").
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/site/ButtonLink";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { waLink } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Halaman tidak ditemukan",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div aria-hidden="true" className="blueprint-grid absolute inset-0" />
      <div className="container-site relative pb-24 pt-36 md:pb-32 md:pt-44">
        <p className="eyebrow flex items-center gap-3 text-gold-500">
          <span aria-hidden="true" className="h-px w-8 bg-gold-500" />
          404
        </p>
        <h1 className="mt-5 max-w-2xl text-[clamp(2.25rem,4.2vw,3.5rem)] font-extrabold leading-[1.08]">
          Halaman tidak ditemukan.
        </h1>
        <p className="mt-5 max-w-[56ch] text-[1.0625rem] leading-[1.7] text-white/75">
          Alamat yang Anda buka mungkin sudah dipindahkan atau salah ketik. Silakan kembali ke beranda atau lihat
          portofolio kami.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" variant="gold">
            Ke beranda
            <ArrowRight className="h-4 w-4" />
          </ButtonLink>
          <ButtonLink href="/portofolio" variant="outline-light">
            Lihat portofolio
          </ButtonLink>
          <ButtonLink href={waLink()} variant="text-light" className="sm:ml-2">
            <WhatsAppIcon className="h-5 w-5" />
            Tanya via WhatsApp
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
