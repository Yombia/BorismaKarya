// Ringkasan data total proyek (company profile + pengalaman 2025–2026). Semua angka dihitung dari data.
import { JUMLAH_PENGGUNA_JASA, RENTANG_TAHUN, hitungPerBidang, hitungPerLokasi } from "@/lib/data/pengalaman";

const lokasiLabel = (l: string) => (l === "Sumatera Utara" ? "Provinsi Sumatera Utara" : l);

function BarList({ title, rows }: { title: string; rows: { label: string; jumlah: number }[] }) {
  const max = Math.max(...rows.map((r) => r.jumlah), 1);
  return (
    <table className="w-full border-collapse text-sm">
      <caption className="eyebrow mb-3 text-left text-ink-soft">{title}</caption>
      <tbody>
        {rows.map((r) => (
          <tr key={r.label} className="border-b border-ink/10">
            <th scope="row" className="w-[46%] py-2.5 pr-4 text-left font-medium text-ink">
              {r.label}
            </th>
            <td className="py-2.5">
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 bg-ink/[0.06]">
                  <div className="h-2 bg-navy-900" style={{ width: `${(r.jumlah / max) * 100}%` }} />
                </div>
                <span className="w-7 text-right font-semibold tabular-nums text-ink">{r.jumlah}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export function ProjectStats() {
  const perBidang = hitungPerBidang().map((r) => ({ label: r.bidang, jumlah: r.jumlah }));
  const lokasi = hitungPerLokasi();
  const topLokasi = lokasi.slice(0, 6).map((r) => ({ label: lokasiLabel(r.lokasi), jumlah: r.jumlah }));
  const sisa = lokasi.slice(6);
  if (sisa.length) topLokasi.push({ label: `${sisa.length} lokasi lain`, jumlah: sisa.reduce((n, r) => n + r.jumlah, 0) });

  const facts = [
    { v: `${RENTANG_TAHUN.awal}–${RENTANG_TAHUN.akhir}`, k: "Rentang tahun" },
    { v: String(lokasi.length), k: "Kabupaten/kota dan provinsi" },
    { v: String(JUMLAH_PENGGUNA_JASA), k: "Pengguna jasa" },
  ];

  return (
    <div>
      <dl className="grid gap-px border-y border-ink/20 bg-ink/10 sm:grid-cols-3">
        {facts.map((f) => (
          <div key={f.k} className="bg-paper py-6 pr-4 sm:[&:not(:first-child)]:pl-6">
            <dt className="eyebrow text-ink-soft">{f.k}</dt>
            <dd className="mt-2 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-none tabular-nums text-navy-900">{f.v}</dd>
          </div>
        ))}
      </dl>
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <BarList title="Paket per bidang" rows={perBidang} />
        <BarList title="Paket per kabupaten/kota" rows={topLokasi} />
      </div>
    </div>
  );
}
