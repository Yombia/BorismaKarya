import { MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/site/ButtonLink";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CONTACT, toTel, waLink } from "@/lib/data/site";

const mapsUrl = (address: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

type Props = { title?: string; message?: string };

export function ContactCta({ title = "Ceritakan rencana proyek Anda.", message }: Props) {
  return (
    <section aria-labelledby="kontak-judul" className="relative overflow-hidden bg-navy-900 text-white section-y">
      <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-70" />
      <div className="container-site relative grid gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-6">
          <p className="eyebrow flex items-center gap-3 text-gold-500">
            <span aria-hidden="true" className="h-px w-8 bg-gold-500" />
            Hubungi kami
          </p>
          <h2 id="kontak-judul" className="mt-5 text-[clamp(1.875rem,3vw,2.75rem)] font-bold leading-[1.12]">
            {title}
          </h2>
          <p className="mt-5 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-white/75">
            Konsultasi awal bisa lewat WhatsApp atau telepon. Kami melayani pada {CONTACT.hours}.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={waLink(message)} variant="gold">
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp {CONTACT.whatsappDisplay}
            </ButtonLink>
            <ButtonLink href={toTel(CONTACT.phones[1])} variant="outline-light">
              <Phone className="h-4 w-4" />
              Telepon {CONTACT.phones[1]}
            </ButtonLink>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
          {CONTACT.offices.map((o) => (
            <li key={o.label} className="flex flex-col border border-white/15 bg-navy-950/50 p-6">
              <MapPin aria-hidden="true" className="h-5 w-5 text-gold-500" />
              <p className="mt-4 font-semibold">{o.label}</p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{o.address}</p>
              <a
                href={mapsUrl(o.address)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 text-sm font-semibold text-gold-500 underline-offset-4 hover:underline"
              >
                Buka di Google Maps
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
