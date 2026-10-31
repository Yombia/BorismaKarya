// src/app/portofolio/page.tsx — Daftar proyek (studi kasus)
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ButtonLink } from "@/components/site/ButtonLink";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { ContactCta } from "@/components/site/ContactCta";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PROJECTS } from "@/lib/data/projects";
import { PENGALAMAN, RENTANG_TAHUN } from "@/lib/data/pengalaman";
import { waLink } from "@/lib/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portofolio Proyek Perencanaan",
  description:
    "Portofolio CV. Borisma Karya: kawasan wisata dan budaya di sekitar Danau Toba, fasilitas publik, dan hunian, lengkap dengan konsep desain dan gambar kerja.",
  path: "/portofolio",
});

export default function PortofolioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Portofolio", href: "/portofolio" }]}
        eyebrow="Portofolio"
        title="Proyek perencanaan kami, lengkap dengan gambar kerjanya."
        intro={`${PROJECTS.length} proyek dengan konsep desain yang terdokumentasi: kawasan wisata dan budaya di sekitar Danau Toba, fasilitas publik dan sosial, serta hunian.`}
        actions={
          <>
            <ButtonLink href={waLink()} variant="gold">
              <WhatsAppIcon className="h-5 w-5" />
              Konsultasi via WhatsApp
            </ButtonLink>
            <ButtonLink href="/pengalaman" variant="outline-light">
              Daftar {PENGALAMAN.length} paket pekerjaan
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </>
        }
      />

      <section aria-label="Daftar proyek" className="bg-paper section-y">
        <div className="container-site">
          <PortfolioGrid projects={PROJECTS} />
          <p className="mt-16 max-w-[64ch] border-t border-line pt-6 text-[15px] leading-relaxed text-ink-soft">
            Halaman ini memuat proyek yang konsep desainnya kami dokumentasikan. Seluruh paket pekerjaan sejak {RENTANG_TAHUN.awal},
            termasuk perencanaan jalan, jembatan, dan studi, tercantum di halaman{" "}
            <Link href="/pengalaman" className="font-semibold text-navy-800 underline underline-offset-4">
              Pengalaman
            </Link>
            .
          </p>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
