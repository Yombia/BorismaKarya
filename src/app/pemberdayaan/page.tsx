// src/app/pemberdayaan/page.tsx — Teknologi informasi, pelatihan masyarakat, serta riset dan kajian
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ButtonLink } from "@/components/site/ButtonLink";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Reveal } from "@/components/site/Reveal";
import { ContactCta } from "@/components/site/ContactCta";
import { E_SURAT, RESEARCH, TRAININGS, TRAINING_PLACE } from "@/lib/data/pemberdayaan";
import { waLink } from "@/lib/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pemberdayaan, Digital, dan Riset",
  description:
    "Website desa berbasis e-surat untuk Kecamatan Selesai, Langkat, pelatihan keterampilan warga Kelurahan Bangun Mulia, Medan, serta daftar riset dan kajian kami.",
  path: "/pemberdayaan",
});

export default function PemberdayaanPage() {
  const [pelatihan, sosialisasi] = E_SURAT.photos;
  return (
    <>
      <PageHero
        crumbs={[{ label: "Pemberdayaan", href: "/pemberdayaan" }]}
        eyebrow="Pemberdayaan & digital"
        title="Aplikasi untuk pemerintahan desa dan pelatihan keterampilan warga."
        intro="Selain perencanaan fisik, kami membuat aplikasi untuk pemerintahan, menyelenggarakan pelatihan, dan menyusun riset serta kajian untuk pemerintah daerah."
        actions={
          <>
            <ButtonLink href={waLink()} variant="gold">
              <WhatsAppIcon className="h-5 w-5" />
              Konsultasi via WhatsApp
            </ButtonLink>
            <ButtonLink href="/layanan#pemberdayaan" variant="outline-light">
              Layanan terkait
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </>
        }
      />

      {/* E-Surat */}
      <section aria-labelledby="esurat-judul" className="bg-paper section-y">
        <div className="container-site">
          <SectionHeading
            index="01"
            label="Teknologi informasi"
            title={<span id="esurat-judul">{E_SURAT.title}</span>}
            intro={`${E_SURAT.place}, ${E_SURAT.year}. Pengguna jasa: ${E_SURAT.client}.`}
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-12">
            <div className="space-y-10 lg:col-span-6">
              <Reveal>
                <h3 className="eyebrow text-gold-600">Masalah</h3>
                <ul className="mt-4 space-y-3">
                  {E_SURAT.problems.map((p) => (
                    <li key={p} className="flex gap-3 leading-relaxed text-ink">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-ink-soft" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal>
                <h3 className="eyebrow text-gold-600">Solusi</h3>
                <ul className="mt-4 space-y-3">
                  {E_SURAT.solution.map((s) => (
                    <li key={s} className="flex gap-3 leading-relaxed text-ink">
                      <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal>
                <h3 className="eyebrow text-gold-600">Pelatihan</h3>
                <p className="mt-4 leading-relaxed text-ink">{E_SURAT.training}</p>
              </Reveal>
            </div>
            <div className="space-y-6 lg:col-span-6">
              {[pelatihan, sosialisasi].map((ph) => (
                <figure key={ph.src}>
                  <div className="overflow-hidden border border-line bg-mist">
                    <Image
                      src={ph.src}
                      alt={ph.alt}
                      width={ph.width}
                      height={ph.height}
                      sizes="(min-width: 1024px) 600px, 100vw"
                      className="h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-2 text-sm text-ink-soft">{ph.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pelatihan masyarakat */}
      <section aria-labelledby="pelatihan-judul" className="bg-mist section-y">
        <div className="container-site">
          <SectionHeading
            index="02"
            label="Pelatihan & event"
            title={<span id="pelatihan-judul">Pelatihan keterampilan untuk warga</span>}
            intro={`Pelatihan untuk warga ${TRAINING_PLACE}. Setiap kegiatan berlangsung dua hari, dan peserta langsung mendapat alat serta bahan untuk berlatih.`}
          />
          <ul className="mt-10 grid gap-8 md:grid-cols-2">
            {TRAININGS.map((t) => (
              <li key={t.title}>
                <Reveal className="h-full">
                  <article className="flex h-full flex-col border border-line bg-paper">
                    <div className="relative aspect-[16/9] overflow-hidden bg-mist">
                      <Image src={t.photo.src} alt={t.photo.alt} fill sizes="(min-width: 768px) 600px, 100vw" className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="text-xl font-bold text-ink">{t.title}</h3>
                      <dl className="mt-4 grid grid-cols-[7rem_1fr] gap-x-4 gap-y-2 text-sm">
                        <dt className="text-ink-soft">Peserta</dt>
                        <dd className="text-ink">{t.participants}</dd>
                        <dt className="text-ink-soft">Durasi</dt>
                        <dd className="text-ink">{t.duration}</dd>
                        <dt className="text-ink-soft">Untuk peserta</dt>
                        <dd className="text-ink">{t.provided}</dd>
                      </dl>
                      <p className="mt-4 border-t border-line pt-4 text-[15px] leading-relaxed text-ink-soft">{t.summary}</p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Riset dan kajian */}
      <section aria-labelledby="riset-judul" className="bg-paper section-y">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              index="03"
              label="Riset & kajian"
              title={<span id="riset-judul">Riset dan kajian untuk pemerintah daerah</span>}
              intro="Sebagian riset dan kajian yang dikerjakan Departemen Riset kami."
            />
          </div>
          <ol className="divide-y divide-line border-y border-line lg:col-span-8">
            {RESEARCH.map((r, i) => (
              <li key={r} className="flex gap-5 py-4">
                <span className="w-6 shrink-0 text-sm font-bold tabular-nums text-gold-600">{String(i + 1).padStart(2, "0")}</span>
                <span className="leading-snug text-ink">{r}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
