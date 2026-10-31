import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/site/ButtonLink";
import { SectionHeading } from "@/components/site/SectionHeading";
import { PENGALAMAN, hitungPerLokasi } from "@/lib/data/pengalaman";

export function WorkArea() {
  const rows = hitungPerLokasi();
  const top = rows.slice(0, 7);
  const lainnya = rows.slice(7);
  const sisa = lainnya.reduce((n, r) => n + r.jumlah, 0);
  const max = top[0]?.jumlah ?? 1;
  const total = PENGALAMAN.length;
  const samosir = rows.find((r) => r.lokasi === "Samosir")?.jumlah ?? 0;

  return (
    <section aria-labelledby="wilayah-judul" className="bg-mist section-y">
      <div className="container-site grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            index="04"
            label="Wilayah kerja"
            title={<span id="wilayah-judul">Paling banyak bekerja di Kawasan Danau Toba</span>}
            intro={`${samosir} dari ${total} paket pekerjaan kami berada di Kabupaten Samosir. Sisanya tersebar di Medan, Pematangsiantar, Simalungun, dan kabupaten lain di Sumatera Utara.`}
          />
          <div className="mt-8">
            <ButtonLink href="/pengalaman" variant="navy">
              Lihat daftar pengalaman
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-10">
          <table className="w-full border-collapse text-sm">
            <caption className="sr-only">Jumlah paket pekerjaan per kabupaten/kota</caption>
            <thead>
              <tr className="border-b border-ink/20 text-left">
                <th scope="col" className="eyebrow pb-3 font-semibold text-ink-soft">Kabupaten/Kota</th>
                <th scope="col" className="eyebrow pb-3 text-right font-semibold text-ink-soft">Paket</th>
              </tr>
            </thead>
            <tbody>
              {top.map((r) => (
                <tr key={r.lokasi} className="border-b border-ink/10">
                  <th scope="row" className="w-[42%] py-3.5 pr-4 text-left font-medium text-ink">
                    {r.lokasi === "Sumatera Utara" ? "Lintas kabupaten (Provinsi Sumut)" : r.lokasi}
                  </th>
                  <td className="py-3.5">
                    <div className="flex items-center gap-4">
                      <div className="h-2 flex-1 bg-ink/[0.06]">
                        <div className="h-2 bg-navy-900" style={{ width: `${(r.jumlah / max) * 100}%` }} />
                      </div>
                      <span className="w-8 text-right font-semibold tabular-nums text-ink">{r.jumlah}</span>
                    </div>
                  </td>
                </tr>
              ))}
              {sisa > 0 && (
                <tr className="border-b border-ink/10">
                  <th scope="row" className="py-3.5 pr-4 text-left font-medium text-ink-soft">
                    {lainnya.length} lokasi lainnya
                  </th>
                  <td className="py-3.5">
                    <div className="flex items-center gap-4">
                      <div className="h-2 flex-1 bg-ink/[0.06]">
                        <div className="h-2 bg-gold-500" style={{ width: `${(sisa / max) * 100}%` }} />
                      </div>
                      <span className="w-8 text-right font-semibold tabular-nums text-ink">{sisa}</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <p className="mt-4 text-xs text-ink-soft">Sumber: daftar pengalaman perusahaan 2005–2024.</p>
        </div>
      </div>
    </section>
  );
}
