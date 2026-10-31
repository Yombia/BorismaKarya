import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CLIENTS, CONTACT, yearsActive } from "@/lib/data/site";
import { PENGALAMAN, RENTANG_TAHUN } from "@/lib/data/pengalaman";
import { SERVICE_GROUPS } from "@/lib/data/services";

export function FactsStrip() {
  const jumlahBidang = SERVICE_GROUPS.reduce((n, g) => n + g.items.length, 0);
  const facts = [
    { value: String(yearsActive()), label: "Tahun berdiri", note: "Sejak 16 Oktober 1989" },
    { value: String(PENGALAMAN.length), label: "Paket pekerjaan", note: `Tercatat ${RENTANG_TAHUN.awal}–${RENTANG_TAHUN.akhir}` },
    { value: String(jumlahBidang), label: "Bidang layanan", note: "Dipimpin tenaga ahli" },
    { value: String(CONTACT.offices.length), label: "Kantor", note: "Medan dan Samosir" },
  ];

  return (
    <section aria-label="Data perusahaan" className="border-b border-line bg-paper">
      <div className="container-site">
        <dl className="grid grid-cols-2 border-x border-line md:grid-cols-4">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`px-5 py-8 md:px-7 md:py-10 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i >= 2 ? "border-t border-line md:border-t-0" : ""
              } ${i === 2 ? "md:border-l" : ""}`}
            >
              <dt className="eyebrow text-ink-soft">{f.label}</dt>
              <dd className="mt-3 text-[clamp(2.25rem,4vw,3.25rem)] font-extrabold leading-none tabular-nums text-navy-900">
                {f.value}
              </dd>
              <dd className="mt-2 text-sm text-ink-soft">{f.note}</dd>
            </div>
          ))}
        </dl>

        <div className="grid gap-4 border-x border-t border-line px-5 py-7 md:grid-cols-12 md:px-7">
          <p className="eyebrow text-gold-600 md:col-span-2 md:pt-0.5">Pengguna jasa</p>
          <div className="md:col-span-10">
            <ul className="flex flex-col gap-y-2 text-sm leading-relaxed text-ink md:flex-row md:flex-wrap md:gap-x-2">
              {CLIENTS.map((c, i) => (
                <li key={c} className="flex items-center gap-2">
                  {c}
                  {i < CLIENTS.length - 1 && <span aria-hidden="true" className="hidden text-gold-600 md:inline">·</span>}
                </li>
              ))}
            </ul>
            <Link
              href="/pengalaman"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 underline-offset-4 hover:underline"
            >
              Lihat daftar lengkap {PENGALAMAN.length} paket pekerjaan
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
