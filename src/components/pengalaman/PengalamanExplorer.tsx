"use client";

import { useMemo, useSyncExternalStore } from "react";
import { Search, X } from "lucide-react";
import type { Paket } from "@/lib/data/pengalaman";

// Tabel pengalaman dengan pencarian, filter, dan urutan.
// Filter disimpan di URL (?bidang=Arsitektur&tahun=2016 ...) supaya bisa dibagikan dan ditautkan dari /layanan.
// HTML statis menampilkan semua paket; filter dari URL diterapkan setelah halaman dimuat.

type Key = "q" | "bidang" | "tahun" | "lokasi" | "pengguna" | "urut";
const KEYS: Key[] = ["q", "bidang", "tahun", "lokasi", "pengguna", "urut"];

const listeners = new Set<() => void>();
function subscribe(cb: () => void) {
  listeners.add(cb);
  window.addEventListener("popstate", cb);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("popstate", cb);
  };
}
const getSearch = () => window.location.search;
const getServerSearch = () => "";

function setParam(key: Key, value: string) {
  const params = new URLSearchParams(window.location.search);
  if (value) params.set(key, value);
  else params.delete(key);
  const qs = params.toString();
  window.history.replaceState(null, "", `${window.location.pathname}${qs ? `?${qs}` : ""}`);
  listeners.forEach((l) => l());
}
function resetParams() {
  window.history.replaceState(null, "", window.location.pathname);
  listeners.forEach((l) => l());
}

const lokasiLabel = (l: string) => (l === "Sumatera Utara" ? "Provinsi Sumatera Utara" : l);

function options(values: string[], sortBy: "count" | "desc" = "count") {
  const counts = new Map<string, number>();
  values.forEach((v) => counts.set(v, (counts.get(v) ?? 0) + 1));
  const list = [...counts.entries()].map(([value, count]) => ({ value, count }));
  return sortBy === "desc"
    ? list.sort((a, b) => Number(b.value) - Number(a.value))
    : list.sort((a, b) => b.count - a.count || a.value.localeCompare(b.value, "id"));
}

export function PengalamanExplorer({ data }: { data: Paket[] }) {
  const search = useSyncExternalStore(subscribe, getSearch, getServerSearch);
  const params = useMemo(() => new URLSearchParams(search), [search]);
  const f = Object.fromEntries(KEYS.map((k) => [k, params.get(k) ?? ""])) as Record<Key, string>;

  const opts = useMemo(
    () => ({
      bidang: options(data.map((p) => p.bidang)),
      tahun: options(data.map((p) => String(p.tahun)), "desc"),
      lokasi: options(data.map((p) => p.lokasi)),
      pengguna: options(data.map((p) => p.penggunaJasa)),
    }),
    [data],
  );

  const rows = useMemo(() => {
    const q = f.q.trim().toLowerCase();
    const filtered = data.filter(
      (p) =>
        (!f.bidang || p.bidang === f.bidang) &&
        (!f.tahun || String(p.tahun) === f.tahun) &&
        (!f.lokasi || p.lokasi === f.lokasi) &&
        (!f.pengguna || p.penggunaJasa === f.pengguna) &&
        (!q || `${p.paket} ${p.subBidang} ${p.lokasi} ${p.penggunaJasa} ${p.tahun}`.toLowerCase().includes(q)),
    );
    const sorted = [...filtered];
    if (f.urut === "lama") sorted.sort((a, b) => a.tahun - b.tahun || a.no - b.no);
    else if (f.urut === "nomor") sorted.sort((a, b) => a.no - b.no);
    else sorted.sort((a, b) => b.tahun - a.tahun || b.no - a.no);
    return sorted;
  }, [data, f.q, f.bidang, f.tahun, f.lokasi, f.pengguna, f.urut]);

  const active = KEYS.some((k) => k !== "urut" && f[k]);
  const field = "h-11 w-full rounded-md border border-line bg-paper px-3 text-[15px] text-ink";
  const label = "eyebrow mb-2 block text-ink-soft";

  return (
    <div>
      <form role="search" aria-label="Cari paket pekerjaan" onSubmit={(e) => e.preventDefault()} className="grid gap-4 border border-line bg-paper p-5 md:p-6 lg:grid-cols-12">
        <div className="lg:col-span-12">
          <label htmlFor="cari" className={label}>
            Cari paket pekerjaan
          </label>
          <div className="relative">
            <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
            <input
              id="cari"
              type="search"
              value={f.q}
              onChange={(e) => setParam("q", e.target.value)}
              placeholder="Contoh: jembatan, pasar, Dinas Pariwisata"
              className={`${field} pl-9`}
            />
          </div>
        </div>
        <div className="sm:col-span-1 lg:col-span-3">
          <label htmlFor="f-bidang" className={label}>
            Bidang
          </label>
          <select id="f-bidang" value={f.bidang} onChange={(e) => setParam("bidang", e.target.value)} className={field}>
            <option value="">Semua bidang</option>
            {opts.bidang.map((o) => (
              <option key={o.value} value={o.value}>
                {o.value} ({o.count})
              </option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-2">
          <label htmlFor="f-tahun" className={label}>
            Tahun
          </label>
          <select id="f-tahun" value={f.tahun} onChange={(e) => setParam("tahun", e.target.value)} className={field}>
            <option value="">Semua tahun</option>
            {opts.tahun.map((o) => (
              <option key={o.value} value={o.value}>
                {o.value} ({o.count})
              </option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-3">
          <label htmlFor="f-lokasi" className={label}>
            Kabupaten/kota
          </label>
          <select id="f-lokasi" value={f.lokasi} onChange={(e) => setParam("lokasi", e.target.value)} className={field}>
            <option value="">Semua lokasi</option>
            {opts.lokasi.map((o) => (
              <option key={o.value} value={o.value}>
                {lokasiLabel(o.value)} ({o.count})
              </option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-4">
          <label htmlFor="f-pengguna" className={label}>
            Pengguna jasa
          </label>
          <select id="f-pengguna" value={f.pengguna} onChange={(e) => setParam("pengguna", e.target.value)} className={field}>
            <option value="">Semua pengguna jasa</option>
            {opts.pengguna.map((o) => (
              <option key={o.value} value={o.value}>
                {o.value} ({o.count})
              </option>
            ))}
          </select>
        </div>
      </form>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite" className="text-[15px] text-ink">
          Menampilkan <strong className="tabular-nums">{rows.length}</strong> dari <span className="tabular-nums">{data.length}</span> paket
          {active && (
            <button
              type="button"
              onClick={resetParams}
              className="ml-3 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-navy-800 underline-offset-4 hover:underline"
            >
              <X aria-hidden="true" className="h-4 w-4" />
              Hapus filter
            </button>
          )}
        </p>
        <div className="flex items-center gap-3">
          <label htmlFor="urut" className="text-sm text-ink-soft">
            Urutkan
          </label>
          <select id="urut" value={f.urut} onChange={(e) => setParam("urut", e.target.value)} className="h-11 rounded-md border border-line bg-paper px-3 text-[15px] text-ink">
            <option value="">Tahun terbaru</option>
            <option value="lama">Tahun terlama</option>
            <option value="nomor">Nomor urut dokumen</option>
          </select>
        </div>
      </div>

      {rows.length === 0 ? (
        <p className="mt-6 border border-line bg-paper p-8 text-center text-ink-soft">
          Tidak ada paket yang cocok. Coba kata kunci lain atau hapus filter.
        </p>
      ) : (
        <>
          {/* Desktop: tabel */}
          <div className="mt-6 hidden overflow-x-auto border border-line bg-paper md:block">
            <table className="w-full border-collapse text-left text-sm">
              <caption className="sr-only">Daftar paket pekerjaan CV. Borisma Karya</caption>
              <thead className="bg-navy-900 text-white">
                <tr>
                  {["No", "Paket pekerjaan", "Sub bidang", "Lokasi", "Pengguna jasa", "Tahun"].map((h, i) => (
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
                    <td className="px-4 py-3 text-ink-soft">{lokasiLabel(p.lokasi)}</td>
                    <td className="max-w-[16rem] px-4 py-3 text-ink-soft">{p.penggunaJasa}</td>
                    <td className="px-4 py-3 text-right font-semibold tabular-nums text-ink">{p.tahun}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile: kartu */}
          <ul className="mt-6 space-y-3 md:hidden">
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
                  <dd className="text-ink">{lokasiLabel(p.lokasi)}</dd>
                  <dt className="text-ink-soft">Pengguna jasa</dt>
                  <dd className="text-ink">{p.penggunaJasa}</dd>
                </dl>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
