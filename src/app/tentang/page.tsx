// src/app/tentang/page.tsx — Profil, sejarah, struktur organisasi, dan tim ahli
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ButtonLink } from "@/components/site/ButtonLink";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Reveal } from "@/components/site/Reveal";
import { ContactCta } from "@/components/site/ContactCta";
import { HISTORY, VISI_MISI } from "@/lib/data/company";
import { DEPARTMENT_HEADS, DIRECTOR, ORGANIZATION, initials, type TeamMember } from "@/lib/data/team";
import { PENGALAMAN } from "@/lib/data/pengalaman";
import { CONTACT, SITE, waLink, yearsActive } from "@/lib/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Tentang Kami",
  description:
    "Profil CV. Borisma Karya: konsultan perencanaan dan pengawasan sejak 16 Oktober 1989, sejarah perusahaan, struktur organisasi, dan kepala departemen.",
  path: "/tentang",
});

function Monogram({ name, size = "md" }: { name: string; size?: "md" | "lg" }) {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-md bg-navy-900 font-bold tracking-wide text-gold-500 ${
        size === "lg" ? "h-16 w-16 text-xl" : "h-12 w-12 text-base"
      }`}
    >
      {initials(name)}
    </span>
  );
}

function MemberCard({ m, featured = false }: { m: TeamMember; featured?: boolean }) {
  return (
    <article className={`flex h-full flex-col border border-line bg-paper p-6 ${featured ? "md:p-8" : ""}`}>
      <div className="flex items-start gap-4">
        <Monogram name={m.name} size={featured ? "lg" : "md"} />
        <div>
          <h3 className={`font-bold leading-snug text-ink ${featured ? "text-xl" : "text-[1.0625rem]"}`}>{m.name}</h3>
          <p className="mt-1 text-sm font-semibold text-gold-600">{m.role}</p>
        </div>
      </div>
      <dl className={`mt-6 space-y-5 text-sm ${featured ? "md:grid md:grid-cols-2 md:gap-8 md:space-y-0" : ""}`}>
        <div>
          <dt className="eyebrow text-ink-soft">Pendidikan</dt>
          <dd className="mt-2">
            <ul className="space-y-1.5 text-ink">
              {m.education.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </dd>
        </div>
        {m.certifications.length > 0 && (
          <div>
            <dt className="eyebrow text-ink-soft">{m.department === "ti" ? "Sertifikasi dan pelatihan" : "Sertifikasi"}</dt>
            <dd className="mt-2">
              <ul className="space-y-1.5 text-ink">
                {m.certifications.map((c) => (
                  <li key={c} className="flex gap-2">
                    <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 bg-gold-500" />
                    {c}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        )}
      </dl>
      {m.note && <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-ink-soft">{m.note}</p>}
    </article>
  );
}

export default function TentangPage() {
  const facts = [
    { v: String(SITE.foundedYear), k: "Tahun berdiri" },
    { v: `${yearsActive()} tahun`, k: "Pengalaman" },
    { v: String(PENGALAMAN.length), k: "Paket pekerjaan tercatat" },
    { v: String(CONTACT.offices.length), k: "Kantor: Medan dan Samosir" },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Tentang", href: "/tentang" }]}
        eyebrow="Tentang kami"
        title={`Konsultan perencanaan dan pengawasan sejak ${SITE.foundedYear}.`}
        intro="CV. Borisma Karya didirikan pada 16 Oktober 1989. Kami merencanakan bangunan, prasarana, dan kawasan, menyusun studi, serta mengurus PBG dan SLF. Sebagian besar pekerjaan kami untuk pemerintah daerah di Sumatera Utara, dari kantor di Medan dan Pangururan, Samosir."
        actions={
          <>
            <ButtonLink href={waLink()} variant="gold">
              <WhatsAppIcon className="h-5 w-5" />
              Konsultasi via WhatsApp
            </ButtonLink>
            <ButtonLink href="/layanan" variant="outline-light">
              Lihat layanan
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </>
        }
      />

      {/* Angka */}
      <section aria-label="Ringkasan perusahaan" className="bg-paper pt-14 md:pt-20">
        <div className="container-site">
          <dl className="grid grid-cols-2 gap-px border-y border-ink/20 bg-ink/10 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.k} className="bg-paper py-6 pr-4 [&:nth-child(even)]:pl-5 lg:[&:not(:first-child)]:pl-6">
                <dt className="eyebrow text-ink-soft">{f.k}</dt>
                <dd className="mt-2 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-none tabular-nums text-navy-900">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Sejarah */}
      <section aria-labelledby="sejarah-judul" className="bg-paper section-y">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading index="01" label="Sejarah" title={<span id="sejarah-judul">Perjalanan sejak 1989</span>} />
          </div>
          <ol className="relative lg:col-span-8">
            {HISTORY.map((h, i) => (
              <li key={h.year} className="relative grid gap-2 pb-10 pl-10 last:pb-0 md:grid-cols-[9rem_1fr] md:gap-8 md:pl-0">
                {i < HISTORY.length - 1 && (
                  <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-6 w-px bg-line md:left-[9.45rem]" />
                )}
                <span aria-hidden="true" className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-gold-500 bg-paper md:left-[9rem]" />
                <p className="text-2xl font-extrabold tabular-nums text-navy-900 md:text-right md:pr-8">{h.year}</p>
                <Reveal className="md:pl-8">
                  <h3 className="text-lg font-semibold text-ink">{h.title}</h3>
                  <p className="mt-2 max-w-[62ch] leading-relaxed text-ink-soft">{h.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Visi & misi: tampil otomatis setelah data dari klien diisi di company.ts */}
      {VISI_MISI && (
        <section aria-labelledby="visi-judul" className="bg-mist section-y">
          <div className="container-site grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeading label="Visi & misi" title={<span id="visi-judul">Visi dan misi</span>} />
            </div>
            <div className="lg:col-span-8">
              <p className="text-xl font-semibold leading-relaxed text-ink">{VISI_MISI.visi}</p>
              <ol className="mt-6 list-decimal space-y-2 pl-5 text-ink-soft">
                {VISI_MISI.misi.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}

      {/* Struktur organisasi */}
      <section aria-labelledby="struktur-judul" className="relative overflow-hidden bg-navy-900 text-white section-y">
        <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-70" />
        <div className="container-site relative">
          <SectionHeading
            index="02"
            label="Struktur organisasi"
            tone="dark"
            title={<span id="struktur-judul">Satu direktur, tujuh departemen</span>}
          />
          <div className="mt-12">
            <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
              {ORGANIZATION.commissioners.map((c) => (
                <div key={c} className="border border-white/20 bg-navy-950/60 px-5 py-4 text-center">
                  <p className="eyebrow text-white/55">Komisaris</p>
                  <p className="mt-1 font-semibold">{c}</p>
                </div>
              ))}
            </div>
            <div aria-hidden="true" className="mx-auto h-8 w-px bg-white/30" />
            <div className="mx-auto max-w-sm border border-gold-500 bg-navy-950/60 px-5 py-4 text-center">
              <p className="eyebrow text-gold-500">Direktur</p>
              <p className="mt-1 font-semibold">{ORGANIZATION.director}</p>
            </div>
            <div aria-hidden="true" className="mx-auto h-8 w-px bg-white/30" />
            <ul className="grid gap-3 border-t border-white/30 pt-8 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
              {ORGANIZATION.departments.map((d) => (
                <li key={d.unit} className="border border-white/20 bg-navy-950/60 px-4 py-4">
                  <p className="eyebrow leading-snug text-white/55">{d.unit}</p>
                  <p className="mt-2 text-sm font-semibold leading-snug">{d.name}</p>
                </li>
              ))}
            </ul>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {ORGANIZATION.support.map((s) => (
                <li key={s.unit} className="flex flex-wrap items-baseline justify-between gap-2 border border-white/10 px-4 py-3">
                  <span className="eyebrow text-white/55">{s.unit}</span>
                  <span className="text-sm font-semibold">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Tim ahli */}
      <section aria-labelledby="tim-judul" className="bg-mist section-y">
        <div className="container-site">
          <SectionHeading
            index="03"
            label="Tim ahli"
            title={<span id="tim-judul">Direktur dan kepala departemen</span>}
            intro="Pendidikan dan jenis sertifikasi sesuai profil personel perusahaan."
          />
          <div className="mt-10">
            <MemberCard m={DIRECTOR} featured />
          </div>
          <ul className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {DEPARTMENT_HEADS.map((m) => (
              <li key={m.name}>
                <MemberCard m={m} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
