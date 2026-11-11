"use client";

import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { ImagePlus, Trash2 } from "lucide-react";
import { ProjectGallery } from "@/components/portfolio/ProjectGallery";
import { GALERI_KATEGORI, type GaleriFoto, type GaleriKategori } from "@/lib/data/galeri";
import type { ProjectImage } from "@/lib/data/projects";
import { addDemoFoto, clearDemoFoto, deleteDemoFoto, listDemoFoto, prepareImage, type DemoFoto } from "@/lib/galeri-demo-store";

type Filter = "Semua" | GaleriKategori;
type DemoItem = GaleriFoto & { id: string };

// Formulir tambah foto hanya tampil saat `npm run dev`, atau di website live dengan alamat /galeri?demo=1.
const IS_DEV = process.env.NODE_ENV !== "production";
const subscribe = (cb: () => void) => {
  window.addEventListener("popstate", cb);
  return () => window.removeEventListener("popstate", cb);
};

export function GaleriView({ photos }: { photos: GaleriFoto[] }) {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  const demoMode = IS_DEV || new URLSearchParams(search).has("demo");

  const [filter, setFilter] = useState<Filter>("Semua");
  const [demo, setDemo] = useState<DemoItem[]>([]);
  const urls = useRef<string[]>([]);

  // Ubah data dari IndexedDB menjadi item galeri (dengan URL blob sementara).
  const apply = useCallback((rows: DemoFoto[]) => {
    urls.current.forEach((u) => URL.revokeObjectURL(u));
    const items = rows.map((r) => {
      const src = URL.createObjectURL(r.blob);
      return { id: r.id, src, width: r.width, height: r.height, alt: r.caption, caption: r.caption, category: r.category };
    });
    urls.current = items.map((i) => i.src);
    setDemo(items);
  }, []);

  // Muat ulang foto demo (dipanggil setelah menambah atau menghapus).
  // Bila IndexedDB tidak tersedia (mis. mode privat tertentu), galeri tetap tampil tanpa foto demo.
  const reload = useCallback(() => listDemoFoto().then(apply).catch(() => undefined), [apply]);

  useEffect(() => {
    listDemoFoto()
      .then(apply)
      .catch(() => undefined);
    const list = urls;
    return () => list.current.forEach((u) => URL.revokeObjectURL(u));
  }, [apply]);

  const all = useMemo<GaleriFoto[]>(() => [...demo, ...photos], [demo, photos]);
  const counts = useMemo(
    () => Object.fromEntries(GALERI_KATEGORI.map((c) => [c, all.filter((p) => p.category === c).length])) as Record<GaleriKategori, number>,
    [all],
  );
  const shown = filter === "Semua" ? all : all.filter((p) => p.category === filter);
  const images: ProjectImage[] = shown.map((p) => ({ ...p, kind: "foto" }));

  return (
    <div>
      {demoMode && <DemoUploader items={demo} onChange={reload} />}

      <div role="group" aria-label="Filter kategori foto" className="-mx-1 flex flex-wrap gap-2">
        {(["Semua", ...GALERI_KATEGORI] as Filter[]).map((c) => {
          const active = filter === c;
          const count = c === "Semua" ? all.length : counts[c];
          return (
            <button
              key={c}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(c)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-md border px-4 text-[15px] font-semibold transition-colors ${
                active ? "border-navy-900 bg-navy-900 text-white" : "border-line bg-paper text-ink hover:border-ink"
              }`}
            >
              {c}
              <span className={`tabular-nums ${active ? "text-gold-500" : "text-ink-soft"}`}>{count}</span>
            </button>
          );
        })}
      </div>
      <p aria-live="polite" className="sr-only">
        Menampilkan {shown.length} foto{filter === "Semua" ? "" : ` kategori ${filter}`}.
      </p>

      <div className="mt-10">
        {images.length > 0 ? (
          <ProjectGallery images={images} title="Galeri CV. Borisma Karya" />
        ) : (
          <p className="border border-line bg-paper p-8 text-center text-ink-soft">Belum ada foto di kategori ini.</p>
        )}
      </div>
    </div>
  );
}

function DemoUploader({ items, onChange }: { items: DemoItem[]; onChange: () => Promise<unknown> }) {
  const [files, setFiles] = useState<File[]>([]);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState<GaleriKategori>(GALERI_KATEGORI[0]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (files.length === 0) {
      setMessage("Pilih minimal satu foto terlebih dahulu.");
      return;
    }
    setBusy(true);
    setMessage("");
    try {
      for (const [i, file] of files.entries()) {
        const { blob, width, height } = await prepareImage(file);
        const base = caption.trim() || file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ");
        await addDemoFoto({
          id: crypto.randomUUID(),
          blob,
          width,
          height,
          caption: files.length > 1 && caption.trim() ? `${base} (${i + 1})` : base,
          category,
          createdAt: Date.now() + i,
        });
      }
      await onChange();
      setMessage(`${files.length} foto ditambahkan ke galeri.`);
      setFiles([]);
      setCaption("");
      if (inputRef.current) inputRef.current.value = "";
    } catch {
      setMessage("Foto gagal diproses. Coba file JPG atau PNG lain.");
    } finally {
      setBusy(false);
    }
  };

  const remove = async (id: string) => {
    await deleteDemoFoto(id);
    await onChange();
  };

  const removeAll = async () => {
    await clearDemoFoto();
    await onChange();
  };

  const field = "h-11 w-full rounded-md border border-line bg-paper px-3 text-[15px] text-ink";

  return (
    <section aria-labelledby="demo-judul" className="mb-12 border-2 border-dashed border-gold-500 bg-gold-100/40 p-5 md:p-8">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-[4px] bg-gold-500 px-2 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-navy-950">
          Mode demo
        </span>
        <h2 id="demo-judul" className="text-xl font-bold text-ink">
          Tambah foto ke galeri
        </h2>
      </div>
      <p className="mt-3 max-w-[70ch] text-sm leading-relaxed text-ink-soft">
        Simulasi halaman admin. Foto hanya tersimpan di browser ini dan belum dikirim ke server. Pada versi final, menu ini
        ada di halaman admin dengan login, dan foto yang ditambahkan langsung tampil untuk semua pengunjung.
      </p>

      <form onSubmit={submit} className="mt-6 grid gap-4 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-3">
          <label htmlFor="demo-file" className="eyebrow mb-2 block text-ink-soft">
            Foto
          </label>
          <input
            ref={inputRef}
            id="demo-file"
            type="file"
            accept="image/*"
            multiple
            onChange={(e) => setFiles([...(e.target.files ?? [])])}
            className="block w-full text-sm text-ink file:mr-3 file:h-11 file:cursor-pointer file:rounded-md file:border-0 file:bg-navy-900 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-navy-800"
          />
        </div>
        <div className="lg:col-span-4">
          <label htmlFor="demo-caption" className="eyebrow mb-2 block text-ink-soft">
            Keterangan
          </label>
          <input
            id="demo-caption"
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Contoh: Pemeriksaan gudang di Medan"
            className={field}
          />
        </div>
        <div className="lg:col-span-3">
          <label htmlFor="demo-category" className="eyebrow mb-2 block text-ink-soft">
            Kategori
          </label>
          <select id="demo-category" value={category} onChange={(e) => setCategory(e.target.value as GaleriKategori)} className={field}>
            {GALERI_KATEGORI.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="lg:col-span-2">
          <button
            type="submit"
            disabled={busy}
            className="inline-flex h-11 w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-gold-500 px-4 text-[15px] font-semibold text-navy-950 transition-colors hover:bg-[#d4a668] disabled:opacity-60"
          >
            <ImagePlus aria-hidden="true" className="h-4 w-4" />
            {busy ? "Memproses…" : "Tambahkan"}
          </button>
        </div>
      </form>
      <p aria-live="polite" className="mt-3 min-h-5 text-sm font-medium text-ink">
        {message}
      </p>

      {items.length > 0 && (
        <div className="mt-4 border-t border-gold-500/40 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold text-ink">Foto yang ditambahkan ({items.length})</p>
            <button
              type="button"
              onClick={removeAll}
              className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy-800 underline-offset-4 hover:underline"
            >
              <Trash2 aria-hidden="true" className="h-4 w-4" />
              Hapus semua foto demo
            </button>
          </div>
          <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {items.map((it) => (
              <li key={it.id} className="border border-line bg-paper">
                {/* eslint-disable-next-line @next/next/no-img-element -- pratinjau dari blob di browser */}
                <img src={it.src} alt={it.caption} className="aspect-[4/3] w-full object-cover" />
                <div className="flex items-start justify-between gap-2 p-2">
                  <span className="line-clamp-2 text-xs leading-snug text-ink">{it.caption}</span>
                  <button
                    type="button"
                    onClick={() => remove(it.id)}
                    aria-label={`Hapus foto ${it.caption}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-ink-soft hover:bg-mist hover:text-ink"
                  >
                    <Trash2 aria-hidden="true" className="h-4 w-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
