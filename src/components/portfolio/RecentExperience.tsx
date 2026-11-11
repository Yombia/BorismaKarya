// Tabel pengalaman 2025–2026 (terutama pengurusan PBG dan SLF). Di layar kecil tampil sebagai kartu.
import type { Paket } from "@/lib/data/pengalaman";

const HEAD = ["No", "Nama pekerjaan", "Sub bidang", "Lokasi", "Pengguna jasa", "Tahun"];

export function RecentExperience({ rows }: { rows: Paket[] }) {
  return (
    <>
      <div className="hidden overflow-x-auto border border-line bg-paper md:block">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">Pengalaman CV. Borisma Karya tahun 2025–2026</caption>
          <thead className="bg-navy-900 text-white">
            <tr>
              {HEAD.map((h, i) => (
                <th key={h} scope="col" className={`px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] ${i === 0 || i === 5 ? "text-right" : ""}`}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.no} className="border-t border-line align-top odd:bg-mist/50">
                <td className="px-4 py-3 text-right tabular-nums text-ink-soft">{p.no}</td>
                <td className="max-w-[28rem] px-4 py-3 font-medium leading-snug text-ink">{p.paket}</td>
                <td className="px-4 py-3 text-ink-soft">{p.subBidang}</td>
                <td className="px-4 py-3 text-ink-soft">{p.lokasi}</td>
                <td className="max-w-[16rem] px-4 py-3 text-ink-soft">{p.penggunaJasa}</td>
                <td className="px-4 py-3 text-right font-semibold tabular-nums text-ink">{p.tahun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="space-y-3 md:hidden">
        {rows.map((p) => (
          <li key={p.no} className="border border-line bg-paper p-4">
            <div className="flex items-baseline justify-between gap-3 text-xs text-ink-soft">
              <span className="tabular-nums">No. {p.no}</span>
              <span className="font-semibold tabular-nums text-ink">{p.tahun}</span>
            </div>
            <p className="mt-2 font-semibold leading-snug text-ink">{p.paket}</p>
            <dl className="mt-3 grid grid-cols-[6.5rem_1fr] gap-x-3 gap-y-1 text-sm">
              <dt className="text-ink-soft">Sub bidang</dt>
              <dd className="text-ink">{p.subBidang}</dd>
              <dt className="text-ink-soft">Lokasi</dt>
              <dd className="text-ink">{p.lokasi}</dd>
              <dt className="text-ink-soft">Pengguna jasa</dt>
              <dd className="text-ink">{p.penggunaJasa}</dd>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}
