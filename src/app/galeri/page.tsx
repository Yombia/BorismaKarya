// src/app/galeri/page.tsx — URL lama yang sudah diindeks Google. Dialihkan ke /portofolio.
// Di Cloudflare, pengalihan 301 juga diatur lewat public/_redirects; halaman ini cadangan bila aturan itu tidak berlaku.
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Galeri dipindahkan ke Portofolio",
  description: "Halaman galeri CV. Borisma Karya sudah dipindahkan ke halaman Portofolio.",
  alternates: { canonical: "/portofolio" },
  robots: { index: false, follow: true },
};

export default function GaleriRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/portofolio" />
      <section className="bg-paper pb-24 pt-36">
        <div className="container-site max-w-2xl">
          <h1 className="text-3xl font-bold text-ink">Galeri sudah pindah ke Portofolio</h1>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Anda akan dialihkan otomatis. Jika tidak, buka halaman{" "}
            <Link href="/portofolio" className="font-semibold text-navy-800 underline underline-offset-4">
              Portofolio
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
