// src/app/galeri/page.tsx — Galeri foto dokumentasi (menggantikan halaman Pengalaman)
import { PageHero } from "@/components/site/PageHero";
import { ContactCta } from "@/components/site/ContactCta";
import { GaleriView } from "@/components/galeri/GaleriView";
import { GALERI } from "@/lib/data/galeri";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Galeri Dokumentasi",
  description:
    "Galeri CV. Borisma Karya: foto pemeriksaan dan pengujian lapangan, bangunan yang sudah berdiri, serta pelatihan dan sosialisasi untuk masyarakat di Sumatera Utara.",
  path: "/galeri",
});

export default function GaleriPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Galeri", href: "/galeri" }]}
        eyebrow="Galeri"
        title="Dokumentasi pekerjaan dan kegiatan kami."
        intro="Foto pemeriksaan dan pengujian lapangan, bangunan yang sudah berdiri, serta pelatihan dan sosialisasi untuk masyarakat."
      />
      <section aria-label="Foto galeri" className="bg-paper section-y">
        <div className="container-site">
          <GaleriView photos={GALERI} />
        </div>
      </section>
      <ContactCta />
    </>
  );
}
