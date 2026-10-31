import { ArrowRight, Check } from "lucide-react";
import { ButtonLink } from "@/components/site/ButtonLink";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Reveal } from "@/components/site/Reveal";
import { WA_MESSAGES, waLink } from "@/lib/data/site";
import { PBG_STEPS } from "@/lib/data/pbg";

// Isi diambil dari brosur resmi layanan PBG & SLF.
const points = [
  "Pendampingan sampai izin terbit",
  "Tenaga ahli bersertifikat untuk arsitektur, struktur, dan MEP",
  "Kerahasiaan dokumen dijamin",
];

const steps = PBG_STEPS;

export function PbgHighlight() {
  return (
    <section aria-labelledby="pbg-judul" className="bg-paper section-y">
      <div className="container-site">
        <Reveal>
          <div className="grid overflow-hidden rounded-md bg-navy-900 text-white lg:grid-cols-12">
            <div className="relative p-8 md:p-12 lg:col-span-7">
              <p className="eyebrow flex items-center gap-3 text-gold-500">
                <span aria-hidden="true" className="h-px w-8 bg-gold-500" />
                Layanan perizinan bangunan
              </p>
              <h2 id="pbg-judul" className="mt-5 text-[clamp(1.875rem,3vw,2.75rem)] font-bold leading-[1.12]">
                Urus PBG &amp; SLF: mudah, cepat, dan aman.
              </h2>
              <p className="mt-5 max-w-[56ch] text-[1.0625rem] leading-[1.7] text-white/75">
                Kami membantu pemilik pabrik, gudang, dan gedung mengurus Persetujuan Bangunan Gedung (PBG) dan
                Sertifikat Laik Fungsi (SLF) secara profesional, sesuai regulasi terbaru, dan tepat waktu.
              </p>
              <ul className="mt-7 space-y-3">
                {points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] text-white/90">
                    <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/layanan/pbg-slf" variant="gold">
                  Pelajari layanan PBG &amp; SLF
                  <ArrowRight className="h-4 w-4" />
                </ButtonLink>
                <ButtonLink href={waLink(WA_MESSAGES.pbg)} variant="outline-light">
                  <WhatsAppIcon className="h-5 w-5" />
                  Tanya via WhatsApp
                </ButtonLink>
              </div>
            </div>

            <div className="border-t border-white/10 bg-navy-950/40 p-8 md:p-12 lg:col-span-5 lg:border-l lg:border-t-0">
              <p className="eyebrow text-white/60">Alur layanan</p>
              <ol className="mt-6">
                {steps.map((s, i) => (
                  <li key={s.title} className="relative flex gap-5 pb-7 last:pb-0">
                    {i < steps.length - 1 && (
                      <span aria-hidden="true" className="absolute left-[17px] top-10 bottom-1 w-px bg-white/15" />
                    )}
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold-500 text-xs font-bold tabular-nums text-gold-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-semibold text-white">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-white/65">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
