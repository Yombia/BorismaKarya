// src/app/layanan/pbg-slf/page.tsx — Layanan pengurusan PBG & SLF (isi dari brosur resmi)
import Image from "next/image";
import { Building2, Check, Factory, Home, Phone, ShieldCheck, Store, Warehouse } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ButtonLink } from "@/components/site/ButtonLink";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Reveal } from "@/components/site/Reveal";
import { ContactCta } from "@/components/site/ContactCta";
import {
  PBG_BUILDING_TYPES,
  PBG_DEFINITIONS,
  PBG_FAQ,
  PBG_GUARANTEES,
  PBG_PHOTOS,
  PBG_REASONS,
  PBG_SCOPE,
  PBG_STEPS,
} from "@/lib/data/pbg";
import { CONTACT, SITE, WA_MESSAGES, toTel, waLink } from "@/lib/data/site";
import { pageMetadata } from "@/lib/seo";

const PATH = "/layanan/pbg-slf";

export const metadata = pageMetadata({
  title: "Pengurusan PBG & SLF Medan dan Samosir",
  description:
    "Pengurusan PBG dan SLF untuk pabrik, gudang, ruko, dan rumah tinggal. Konsultasi, survei, pengujian lapangan, sampai izin terbit. Melayani Medan dan Samosir.",
  path: PATH,
});

const BUILDING_ICONS = [Factory, Warehouse, Store, Home];

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Pengurusan PBG dan SLF",
    serviceType: "Pengurusan Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF)",
    url: `${SITE.url}${PATH}`,
    areaServed: "Sumatera Utara",
    provider: { "@type": "ProfessionalService", name: SITE.name, url: SITE.url },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PBG_FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function PbgSlfPage() {
  const [photoA, photoB, photoC] = PBG_PHOTOS;
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        crumbs={[
          { label: "Layanan", href: "/layanan" },
          { label: "PBG & SLF", href: PATH },
        ]}
        eyebrow="Layanan perizinan bangunan"
        title={<>Urus PBG &amp; SLF: mudah, cepat, dan aman.</>}
        intro="Kami membantu pemilik pabrik, gudang, ruko, dan rumah tinggal mengurus Persetujuan Bangunan Gedung (PBG) dan Sertifikat Laik Fungsi (SLF), dari konsultasi awal sampai izin terbit."
        actions={
          <>
            <ButtonLink href={waLink(WA_MESSAGES.pbg)} variant="gold">
              <WhatsAppIcon className="h-5 w-5" />
              Konsultasi via WhatsApp
            </ButtonLink>
            <ButtonLink href={toTel(CONTACT.phones[1])} variant="outline-light">
              <Phone className="h-4 w-4" />
              Telepon {CONTACT.phones[1]}
            </ButtonLink>
          </>
        }
        aside={
          <figure>
            <div className="grid grid-cols-2 gap-3">
              {[photoA, photoB].map((p) => (
                <div key={p.src} className="relative aspect-[3/4] overflow-hidden rounded-sm bg-navy-800">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1024px) 240px, 50vw" className="object-cover" loading="eager" />
                </div>
              ))}
            </div>
            <figcaption className="mt-3 text-xs text-white/55">Dokumentasi pemeriksaan dan pengujian lapangan.</figcaption>
          </figure>
        }
      />

      {/* Untuk siapa */}
      <section aria-labelledby="siapa-judul" className="bg-paper section-y">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              index="01"
              label="Untuk siapa"
              title={<span id="siapa-judul">Untuk bangunan usaha maupun hunian.</span>}
              intro="Pengurusan PBG dan SLF kami tangani untuk berbagai jenis bangunan."
            />
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-line bg-line lg:grid-cols-4">
            {PBG_BUILDING_TYPES.map((t, i) => {
              const Icon = BUILDING_ICONS[i] ?? Building2;
              return (
                <li key={t} className="flex flex-col gap-6 bg-paper p-6 md:p-8">
                  <Icon aria-hidden="true" className="h-7 w-7 text-gold-600" strokeWidth={1.5} />
                  <span className="text-lg font-semibold text-ink">{t}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* PBG vs SLF */}
      <section aria-labelledby="beda-judul" className="bg-mist section-y">
        <div className="container-site">
          <Reveal>
            <SectionHeading index="02" label="Pengertian" title={<span id="beda-judul">Apa itu PBG dan SLF?</span>} />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {PBG_DEFINITIONS.map((d) => (
              <Reveal key={d.code}>
                <article className="h-full rounded-md border border-line bg-paper p-8 md:p-10">
                  <p className="text-5xl font-extrabold tracking-tight text-navy-900">{d.code}</p>
                  <h3 className="mt-2 text-lg font-semibold text-gold-600">{d.name}</h3>
                  <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink">{d.definition}</p>
                  <p className="mt-5 border-t border-line pt-5 text-[15px] leading-relaxed text-ink-soft">{d.when}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lingkup layanan */}
      <section aria-labelledby="lingkup-judul" className="bg-paper section-y">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading index="03" label="Lingkup layanan" title={<span id="lingkup-judul">Yang kami kerjakan.</span>} />
            </Reveal>
            <ol className="mt-10 divide-y divide-line border-y border-line">
              {PBG_SCOPE.map((s, i) => (
                <li key={s} className="flex gap-5 py-4">
                  <span className="w-6 shrink-0 text-sm font-bold tabular-nums text-gold-600">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[1.0625rem] leading-snug text-ink">{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <Reveal className="lg:col-span-5">
            <figure className="lg:mt-24">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-mist">
                <Image src={photoC.src} alt={photoC.alt} fill sizes="(min-width: 1024px) 460px, 100vw" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-sm text-ink-soft">Dokumentasi pemeriksaan lapangan.</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Alur */}
      <section aria-labelledby="alur-judul" className="relative overflow-hidden bg-navy-900 text-white section-y">
        <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-70" />
        <div className="container-site relative">
          <Reveal>
            <SectionHeading index="04" label="Alur layanan" tone="dark" title={<span id="alur-judul">Empat langkah sampai izin terbit.</span>} />
          </Reveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {PBG_STEPS.map((s, i) => (
              <li key={s.title} className="relative lg:pr-8">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500 text-sm font-bold tabular-nums text-gold-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < PBG_STEPS.length - 1 && <span aria-hidden="true" className="hidden h-px flex-1 bg-white/20 lg:block" />}
                </div>
                <p className="mt-5 text-lg font-semibold">{s.title}</p>
                <p className="mt-2 max-w-[30ch] text-[15px] leading-relaxed text-white/70">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Kenapa pilih kami */}
      <section aria-labelledby="alasan-judul" className="bg-paper section-y">
        <div className="container-site">
          <Reveal>
            <SectionHeading index="05" label="Kenapa memilih kami" title={<span id="alasan-judul">Ditangani tenaga ahli, didampingi sampai tuntas.</span>} />
          </Reveal>
          <ul className="mt-10 grid gap-x-10 gap-y-5 md:grid-cols-2 lg:grid-cols-3">
            {PBG_REASONS.map((r) => (
              <li key={r} className="flex gap-3 border-t border-line pt-5 text-[1.0625rem] leading-snug text-ink">
                <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                {r}
              </li>
            ))}
          </ul>
          <ul className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-md bg-navy-800 lg:grid-cols-4">
            {PBG_GUARANTEES.map((g) => (
              <li key={g} className="flex items-center gap-3 bg-navy-900 p-5 text-[15px] font-semibold text-white md:p-6">
                <ShieldCheck aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-500" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-judul" className="bg-mist section-y">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading index="06" label="Tanya jawab" title={<span id="faq-judul">Pertanyaan yang sering diajukan.</span>} />
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            {PBG_FAQ.map((f) => (
              <details key={f.q} className="group border-b border-line first:border-t">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-[1.0625rem] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span aria-hidden="true" className="relative h-4 w-4 shrink-0">
                    <span className="absolute left-0 top-1/2 h-0.5 w-4 -translate-y-1/2 bg-gold-600" />
                    <span className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-gold-600 transition-transform group-open:scale-y-0" />
                  </span>
                </summary>
                <p className="max-w-[64ch] pb-6 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactCta title="Konsultasikan PBG atau SLF bangunan Anda." message={WA_MESSAGES.pbg} />
    </>
  );
}
