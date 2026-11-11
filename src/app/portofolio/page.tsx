// src/app/portofolio/page.tsx — Proyek unggulan, pengalaman 2025–2026 (PBG & SLF), dan data total proyek
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ButtonLink } from "@/components/site/ButtonLink";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { ContactCta } from "@/components/site/ContactCta";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { ProjectStats } from "@/components/portfolio/ProjectStats";
import { RecentExperience } from "@/components/portfolio/RecentExperience";
import { PROJECTS } from "@/lib/data/projects";
import { PENGALAMAN_TERBARU, RENTANG_TAHUN } from "@/lib/data/pengalaman";
import { WA_MESSAGES, waLink } from "@/lib/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Portofolio Proyek Perencanaan",
  description:
    "Portofolio CV. Borisma Karya: kawasan wisata di sekitar Danau Toba, fasilitas publik, hunian, serta pengurusan PBG dan SLF untuk gudang, kantor, dan rumah.",
  path: "/portofolio",
});

export default function PortofolioPage() {
  const tahunTerbaru = [...new Set(PENGALAMAN_TERBARU.map((p) => p.tahun))].sort();
  const periode = tahunTerbaru.length > 1 ? `${tahunTerbaru[0]}–${tahunTerbaru[tahunTerbaru.length - 1]}` : String(tahunTerbaru[0]);

  return (
    <>
      <PageHero
        crumbs={[{ label: "Portofolio", href: "/portofolio" }]}
        eyebrow="Portofolio"
        title="Proyek perencanaan kami, lengkap dengan gambar kerjanya."
        intro={`${PROJECTS.length} proyek dengan konsep desain yang terdokumentasi, pengalaman pengurusan PBG dan SLF ${periode}, serta data proyek kami sejak ${RENTANG_TAHUN.awal}.`}
        actions={
          <>
            <ButtonLink href={waLink()} variant="gold">
              <WhatsAppIcon className="h-5 w-5" />
              Konsultasi via WhatsApp
            </ButtonLink>
            <ButtonLink href="#pbg-slf" variant="outline-light">
              Pengalaman PBG &amp; SLF
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </>
        }
      />

      {/* Proyek unggulan */}
      <section aria-labelledby="proyek-judul" className="bg-paper section-y">
        <div className="container-site">
          <SectionHeading
            index="01"
            label="Proyek unggulan"
            title={<span id="proyek-judul">Proyek dengan konsep desain</span>}
            intro="Kawasan wisata dan budaya di sekitar Danau Toba, fasilitas publik dan sosial, serta hunian."
          />
          <div className="mt-10">
            <PortfolioGrid projects={PROJECTS} />
          </div>
        </div>
      </section>

      {/* Pengalaman 2025–2026 */}
      <section id="pbg-slf" aria-labelledby="terbaru-judul" className="scroll-mt-20 bg-mist section-y">
        <div className="container-site">
          <SectionHeading
            index="02"
            label={`Pengalaman ${periode}`}
            align="split"
            title={<span id="terbaru-judul">Pengurusan PBG &amp; SLF dan perencanaan terbaru</span>}
            intro="Pekerjaan terbaru kami, sebagian besar pengurusan Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF) untuk gudang, kantor, usaha, dan rumah tinggal."
            action={
              <ButtonLink href={waLink(WA_MESSAGES.pbg)} variant="navy">
                <WhatsAppIcon className="h-5 w-5" />
                Konsultasi PBG &amp; SLF
              </ButtonLink>
            }
          />
          <div className="mt-10">
            <RecentExperience rows={PENGALAMAN_TERBARU} />
          </div>
        </div>
      </section>

      {/* Data total proyek */}
      <section id="data-proyek" aria-labelledby="data-judul" className="scroll-mt-20 bg-paper section-y">
        <div className="container-site">
          <SectionHeading
            index="03"
            label="Data proyek"
            title={<span id="data-judul">{`Pekerjaan kami ${RENTANG_TAHUN.awal}–${RENTANG_TAHUN.akhir}`}</span>}
            intro="Dihitung dari tabel pengalaman di company profile dan daftar pengalaman terbaru. Sebagian besar pengguna jasa adalah pemerintah daerah di Sumatera Utara."
          />
          <div className="mt-10">
            <ProjectStats />
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
