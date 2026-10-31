// src/app/layanan/page.tsx — Layanan (7 departemen dalam 3 kelompok)
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ButtonLink } from "@/components/site/ButtonLink";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Reveal } from "@/components/site/Reveal";
import { ContactCta } from "@/components/site/ContactCta";
import { SERVICE_GROUPS, type Service } from "@/lib/data/services";
import { PENGALAMAN } from "@/lib/data/pengalaman";
import { WA_MESSAGES, waLink } from "@/lib/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Layanan Konsultan Perencanaan",
  description:
    "Layanan CV. Borisma Karya: perencanaan arsitektur, sipil, mekanikal-elektrikal, urban, studi kelayakan, teknologi informasi, dan pelatihan di Sumatera Utara.",
  path: "/layanan",
});

const GROUP_LETTER = ["A", "B", "C"] as const;
const findPaket = (no: number) => PENGALAMAN.find((p) => p.no === no);

function ServiceRow({ service, code }: { service: Service; code: string }) {
  const examples = service.examples.map(findPaket).filter((p) => p !== undefined);
  return (
    <article id={service.key} className="scroll-mt-28 grid gap-8 border-t border-line py-12 first:border-t-0 first:pt-4 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <p className="text-sm font-bold tabular-nums text-gold-600">{code}</p>
        <h3 className="mt-2 text-2xl font-bold text-ink">{service.title}</h3>
        <p className="mt-3 leading-relaxed text-ink-soft">{service.scope}</p>
        <dl className="mt-6 border-l-2 border-gold-500 pl-4">
          <dt className="eyebrow text-ink-soft">Kepala departemen</dt>
          <dd className="mt-1 font-semibold text-ink">{service.head.name}</dd>
          {service.head.note && <dd className="mt-1 text-sm leading-relaxed text-ink-soft">{service.head.note}</dd>}
        </dl>
      </div>

      <div className="lg:col-span-8">
        <p className="eyebrow text-ink-soft">Lingkup pekerjaan</p>
        <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {service.details.map((d) => (
            <li key={d} className="flex gap-3 text-[15px] leading-relaxed text-ink">
              <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
              {d}
            </li>
          ))}
        </ul>

        {service.extra && <p className="mt-6 max-w-[64ch] text-[15px] leading-relaxed text-ink-soft">{service.extra}</p>}

        {examples.length > 0 && (
          <div className="mt-8">
            <p className="eyebrow text-ink-soft">Contoh paket pekerjaan</p>
            <ul className="mt-3 divide-y divide-line border-y border-line">
              {examples.map((p) => (
                <li key={p.no} className="grid gap-1 py-3 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <span className="text-[15px] leading-snug text-ink">{p.paket}</span>
                  <span className="text-sm text-ink-soft sm:text-right">
                    {p.lokasi} · <span className="tabular-nums">{p.tahun}</span>
                  </span>
                </li>
              ))}
            </ul>
            {service.bidangFilter && (
              <Link
                href={`/pengalaman?bidang=${encodeURIComponent(service.bidangFilter)}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy-800 underline-offset-4 hover:underline"
              >
                Lihat paket bidang {service.bidangFilter}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function LayananPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Layanan", href: "/layanan" }]}
        eyebrow="Layanan"
        title="Tujuh bidang layanan dalam tiga kelompok."
        intro="Kami menangani perencanaan bangunan, prasarana, dan kawasan, studi kelayakan, sampai aplikasi dan pelatihan untuk masyarakat. Setiap bidang dipimpin kepala departemen sendiri."
        actions={
          <>
            <ButtonLink href={waLink()} variant="gold">
              <WhatsAppIcon className="h-5 w-5" />
              Konsultasi via WhatsApp
            </ButtonLink>
            <ButtonLink href="/layanan/pbg-slf" variant="outline-light">
              Layanan PBG &amp; SLF
            </ButtonLink>
          </>
        }
        aside={
          <nav aria-label="Kelompok layanan" className="border border-white/15 bg-navy-950/50">
            <ol>
              {SERVICE_GROUPS.map((g, i) => (
                <li key={g.key} className="border-t border-white/10 first:border-t-0">
                  <a href={`#${g.key}`} className="group flex items-center gap-5 p-5 hover:bg-white/5">
                    <span className="text-sm font-bold text-gold-500">{GROUP_LETTER[i]}</span>
                    <span className="flex-1">
                      <span className="block font-semibold">{g.title}</span>
                      <span className="mt-0.5 block text-sm text-white/60">{g.items.map((s) => s.title).join(" · ")}</span>
                    </span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4 text-white/40 group-hover:text-gold-500" />
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        }
      />

      {SERVICE_GROUPS.map((g, i) => (
        <section
          key={g.key}
          id={g.key}
          aria-labelledby={`${g.key}-judul`}
          className={`scroll-mt-20 section-y ${i % 2 === 1 ? "bg-mist" : "bg-paper"}`}
        >
          <div className="container-site">
            <Reveal>
              <SectionHeading label={`Kelompok ${GROUP_LETTER[i]}`} title={<span id={`${g.key}-judul`}>{g.title}</span>} intro={g.summary} />
            </Reveal>
            <div className="mt-10">
              {g.items.map((s, j) => (
                <ServiceRow key={s.key} service={s} code={`${GROUP_LETTER[i]}.${j + 1}`} />
              ))}
            </div>

            {g.key === "pemberdayaan" && (
              <Link
                href="/pemberdayaan"
                className="mt-2 inline-flex min-h-11 items-center gap-2 font-semibold text-navy-800 underline-offset-4 hover:underline"
              >
                Lihat contoh aplikasi dan pelatihan yang sudah kami kerjakan
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            )}

            {g.key === "fisik" && (
              <Reveal>
                <div className="mt-6 flex flex-col gap-6 rounded-md bg-navy-900 p-8 text-white md:flex-row md:items-center md:justify-between md:p-10">
                  <div>
                    <p className="eyebrow text-gold-500">Perizinan bangunan</p>
                    <p className="mt-3 max-w-[48ch] text-xl font-bold leading-snug">
                      Perlu mengurus PBG atau SLF untuk pabrik, gudang, atau gedung usaha?
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href="/layanan/pbg-slf" variant="gold">
                      Lihat layanan PBG &amp; SLF
                      <ArrowRight className="h-4 w-4" />
                    </ButtonLink>
                    <ButtonLink href={waLink(WA_MESSAGES.pbg)} variant="outline-light">
                      <WhatsAppIcon className="h-5 w-5" />
                      Tanya via WhatsApp
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      ))}

      <ContactCta />
    </>
  );
}
