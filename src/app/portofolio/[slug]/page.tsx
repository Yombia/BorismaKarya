// src/app/portofolio/[slug]/page.tsx — Detail proyek (studi kasus)
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ButtonLink } from "@/components/site/ButtonLink";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Reveal } from "@/components/site/Reveal";
import { ContactCta } from "@/components/site/ContactCta";
import { ProjectGallery } from "@/components/portfolio/ProjectGallery";
import { PROJECTS, coverOf, getProject, placeOf } from "@/lib/data/projects";
import { SITE, WA_MESSAGES, waLink } from "@/lib/data/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

/** Deskripsi meta: ringkasan + lingkup, tahun, lokasi, dan nama konsultan; dipilih yang terpanjang ≤160 karakter. */
function metaDescription(p: NonNullable<ReturnType<typeof getProject>>) {
  const place = placeOf(p);
  const scopeYear = `${p.scope}${p.year ? ` ${p.year}` : ""}`;
  const by = "Konsultan: CV. Borisma Karya.";
  const candidates = [
    `${p.summary} ${scopeYear}${place ? `, ${place}` : ""}. ${by}`,
    `${p.summary} ${scopeYear}${place ? `, ${place}` : ""}.`,
    `${p.summary} ${scopeYear}. ${by}`,
    `${p.summary} ${scopeYear}.`,
    p.summary,
  ].filter((t) => t.length <= 160);
  return candidates.sort((x, y) => y.length - x.length)[0] ?? `${p.summary.slice(0, 157).replace(/\s+\S*$/, "")}…`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  const cover = coverOf(p);
  const description = metaDescription(p);
  const path = `/portofolio/${p.slug}`;
  return {
    title: p.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: "id_ID",
      siteName: SITE.name,
      url: `${SITE.url}${path}`,
      title: `${p.title} | ${SITE.name}`,
      description,
      images: [{ url: cover.src, width: cover.width, height: cover.height, alt: cover.alt }],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const index = PROJECTS.findIndex((x) => x.slug === p.slug);
  const prev = PROJECTS[(index - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  const cover = coverOf(p);
  const place = placeOf(p);

  const facts = [
    { k: "Lokasi", v: place },
    { k: "Pengguna jasa", v: p.client },
    { k: "Tahun", v: p.year ? String(p.year) : undefined },
    { k: "Lingkup", v: p.scope },
    { k: "Kategori", v: p.category },
  ].filter((f): f is { k: string; v: string } => Boolean(f.v));

  const story = [
    { n: "01", label: "Konteks", body: [p.context] },
    { n: "02", label: "Tantangan", body: [p.challenge] },
    { n: "03", label: "Konsep desain", body: p.concept },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: p.title,
    description: p.summary,
    url: `${SITE.url}/portofolio/${p.slug}`,
    image: p.images.map((img) => `${SITE.url}${img.src}`),
    genre: p.category,
    ...(p.year ? { dateCreated: String(p.year) } : {}),
    ...(place ? { locationCreated: { "@type": "Place", name: place } } : {}),
    creator: { "@type": "ProfessionalService", name: SITE.name, url: SITE.url },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        crumbs={[
          { label: "Portofolio", href: "/portofolio" },
          { label: p.title, href: `/portofolio/${p.slug}` },
        ]}
        eyebrow={p.category}
        title={p.title}
        intro={p.summary}
        actions={
          <ButtonLink href={waLink(WA_MESSAGES.proyek(p.title))} variant="gold">
            <WhatsAppIcon className="h-5 w-5" />
            Konsultasi proyek serupa
          </ButtonLink>
        }
        aside={
          <dl className="border border-white/20 bg-navy-950/60">
            {facts.map((f) => (
              <div key={f.k} className="grid grid-cols-[8.5rem_1fr] gap-4 border-t border-white/10 px-5 py-3.5 first:border-t-0">
                <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-white/55">{f.k}</dt>
                <dd className="text-[15px] font-semibold leading-snug text-white">{f.v}</dd>
              </div>
            ))}
          </dl>
        }
      />

      {/* Gambar utama */}
      <section aria-label="Gambar utama" className="bg-paper pt-12 md:pt-16">
        <div className="container-site">
          <figure>
            <div className={`relative overflow-hidden border border-line ${cover.kind === "gambar" ? "bg-paper" : "bg-mist"}`}>
              <Image
                src={cover.src}
                alt={cover.alt}
                width={cover.width}
                height={cover.height}
                loading="eager"
                sizes="(min-width: 1280px) 1200px, 100vw"
                className={`mx-auto h-auto max-h-[78vh] w-auto max-w-full ${cover.kind === "gambar" ? "p-4" : ""}`}
              />
            </div>
            <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm text-ink-soft">
              <span className="font-semibold text-ink">{cover.caption}</span>
              <span>Gambar 1 dari {p.images.length}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Konteks → Tantangan → Konsep */}
      <section aria-labelledby="cerita-judul" className="bg-paper section-y">
        <div className="container-site">
          <h2 id="cerita-judul" className="sr-only">
            Konteks, tantangan, dan konsep desain
          </h2>
          <div className="divide-y divide-line border-y border-line">
            {story.map((s) => (
              <Reveal key={s.n}>
                <div className="grid gap-4 py-10 md:grid-cols-12 md:gap-8">
                  <p className="eyebrow flex items-center gap-3 text-gold-600 md:col-span-4">
                    <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
                    <span className="tabular-nums">{s.n}</span>
                    <span aria-hidden="true">—</span>
                    <span>{s.label}</span>
                  </p>
                  <div className="space-y-4 md:col-span-8">
                    {s.body.map((t) => (
                      <p key={t.slice(0, 32)} className="max-w-[68ch] text-[1.0625rem] leading-[1.75] text-ink">
                        {t}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section aria-labelledby="galeri-judul" className="bg-mist section-y">
        <div className="container-site">
          <p className="eyebrow flex items-center gap-3 text-gold-600">
            <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
            <span className="tabular-nums">04</span>
            <span aria-hidden="true">—</span>
            <span>Gambar</span>
          </p>
          <h2 id="galeri-judul" className="mt-4 text-[clamp(1.875rem,3vw,2.75rem)] font-bold leading-[1.12] text-ink">
            Gambar kerja dan perspektif
          </h2>
          <p className="mt-4 max-w-[62ch] text-[1.0625rem] leading-[1.7] text-ink-soft">
            Pilih gambar untuk memperbesar. Gunakan tombol panah atau geser layar untuk berpindah gambar.
          </p>
          <div className="mt-10">
            <ProjectGallery images={p.images} title={p.title} />
          </div>
        </div>
      </section>

      {/* Proyek sebelumnya / berikutnya */}
      <nav aria-label="Proyek lain" className="border-t border-line bg-paper">
        <div className="container-site grid sm:grid-cols-2">
          <Link
            href={`/portofolio/${prev.slug}`}
            className="group flex items-center gap-4 border-b border-line py-8 sm:border-b-0 sm:border-r sm:pr-8"
          >
            <ArrowLeft aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-600 transition-transform group-hover:-translate-x-1" />
            <span>
              <span className="eyebrow block text-ink-soft">Proyek sebelumnya</span>
              <span className="mt-1 block text-lg font-semibold text-ink group-hover:underline group-hover:underline-offset-4">{prev.title}</span>
            </span>
          </Link>
          <Link href={`/portofolio/${next.slug}`} className="group flex items-center justify-end gap-4 py-8 text-right sm:pl-8">
            <span>
              <span className="eyebrow block text-ink-soft">Proyek berikutnya</span>
              <span className="mt-1 block text-lg font-semibold text-ink group-hover:underline group-hover:underline-offset-4">{next.title}</span>
            </span>
            <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-600 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </nav>

      <ContactCta title="Punya rencana proyek serupa?" message={WA_MESSAGES.proyek(p.title)} />
    </>
  );
}
