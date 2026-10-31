// src/app/kontak/page.tsx — Kontak (tanpa formulir; konsultasi lewat WhatsApp, telepon, atau email)
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { ButtonLink } from "@/components/site/ButtonLink";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Reveal } from "@/components/site/Reveal";
import { CONTACT, toTel, waLink } from "@/lib/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Kontak dan Alamat Kantor",
  description:
    "Hubungi CV. Borisma Karya lewat WhatsApp 0813-7220-414, telepon, atau email. Kantor di Medan Selayang dan Pangururan, Samosir. Buka Senin–Sabtu 08.00–17.00 WIB.",
  path: "/kontak",
});

const embedUrl = (address: string) => `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
const searchUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
const directionsUrl = (address: string) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

export default function KontakPage() {
  const quick = [
    {
      icon: WhatsAppIcon,
      label: "WhatsApp",
      value: CONTACT.whatsappDisplay,
      href: waLink(),
      note: "Cara tercepat untuk konsultasi awal.",
    },
    {
      icon: Phone,
      label: "Telepon",
      value: CONTACT.phones.map((p, i) => <span key={p} className="block">{p}{i === 0 && <span className="sr-only">,</span>}</span>),
      href: toTel(CONTACT.phones[1]),
      note: "Senin–Sabtu pada jam kerja.",
    },
    { icon: Mail, label: "Email", value: <>{CONTACT.email.split("@")[0]}<wbr />@{CONTACT.email.split("@")[1]}</>, href: `mailto:${CONTACT.email}`, note: "Untuk pengiriman dokumen." },
    { icon: Clock, label: "Jam layanan", value: CONTACT.hours, note: "Waktu Indonesia Barat." },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Kontak", href: "/kontak" }]}
        eyebrow="Kontak"
        title="Hubungi kami."
        intro="Konsultasi awal bisa lewat WhatsApp, telepon, atau email. Anda juga dapat datang ke kantor kami di Medan atau di Samosir."
        actions={
          <>
            <ButtonLink href={waLink()} variant="gold">
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp {CONTACT.whatsappDisplay}
            </ButtonLink>
            <ButtonLink href={toTel(CONTACT.phones[1])} variant="outline-light">
              <Phone className="h-4 w-4" />
              Telepon {CONTACT.phones[1]}
            </ButtonLink>
          </>
        }
      />

      {/* Kontak cepat */}
      <section aria-label="Kontak cepat" className="bg-paper pt-14 md:pt-20">
        <div className="container-site">
          <ul className="grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {quick.map((q) => {
              const Icon = q.icon;
              const body = (
                <>
                  <Icon aria-hidden="true" className="h-5 w-5 text-gold-600" />
                  <p className="eyebrow mt-5 text-ink-soft">{q.label}</p>
                  <p className="mt-2 font-semibold text-ink">{q.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{q.note}</p>
                </>
              );
              return (
                <li key={q.label} className="bg-paper">
                  {q.href ? (
                    <a
                      href={q.href}
                      className="block h-full p-6 hover:bg-mist md:p-7"
                      {...(q.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="h-full p-6 md:p-7">{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Kantor */}
      <section aria-labelledby="kantor-judul" className="bg-paper section-y">
        <div className="container-site">
          <p className="eyebrow flex items-center gap-3 text-gold-600">
            <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
            Alamat kantor
          </p>
          <h2 id="kantor-judul" className="mt-4 text-[clamp(1.875rem,3vw,2.75rem)] font-bold leading-[1.12] text-ink">
            Dua kantor: Medan dan Samosir.
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {CONTACT.offices.map((o) => (
              <Reveal key={o.label} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-md border border-line">
                  <div className="relative aspect-[16/10] bg-mist">
                    <iframe
                      src={embedUrl(o.address)}
                      title={`Peta lokasi ${o.label}`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full border-0"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <div className="flex flex-1 items-start gap-3">
                      <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600" />
                      <div>
                        <h3 className="text-lg font-semibold text-ink">{o.label}</h3>
                        <p className="mt-1 leading-relaxed text-ink-soft">{o.address}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                      <ButtonLink href={directionsUrl(o.address)} variant="navy">
                        <Navigation className="h-4 w-4" />
                        Petunjuk arah
                      </ButtonLink>
                      <ButtonLink href={searchUrl(o.address)} variant="outline-dark">
                        Buka di Google Maps
                      </ButtonLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media sosial */}
      <section aria-labelledby="sosmed-judul" className="border-t border-line bg-mist py-14 md:py-16">
        <div className="container-site flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="sosmed-judul" className="text-xl font-bold text-ink">
              Ikuti kegiatan kami
            </h2>
            <p className="mt-2 text-ink-soft">Dokumentasi proyek dan kegiatan terbaru di media sosial.</p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {CONTACT.socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-md border border-ink/15 bg-paper px-5 text-[15px] font-semibold text-ink hover:border-ink"
                >
                  {s.label}
                  <span className="font-normal text-ink-soft">{s.handle}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
