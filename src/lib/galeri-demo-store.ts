// Penyimpanan foto DEMO galeri di browser (IndexedDB).
// Hanya untuk demonstrasi ke klien: foto tidak dikirim ke server dan hanya ada di browser yang dipakai.
// Setelah disetujui, bagian ini diganti dengan halaman admin + penyimpanan di server.

import type { GaleriKategori } from "@/lib/data/galeri";

export type DemoFoto = {
  id: string;
  blob: Blob;
  caption: string;
  category: GaleriKategori;
  width: number;
  height: number;
  createdAt: number;
};

const DB_NAME = "borisma-galeri-demo";
const STORE = "foto";

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => {
      if (!req.result.objectStoreNames.contains(STORE)) req.result.createObjectStore(STORE, { keyPath: "id" });
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

async function run<T>(mode: IDBTransactionMode, fn: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  const db = await openDb();
  return new Promise<T>((resolve, reject) => {
    const tx = db.transaction(STORE, mode);
    const req = fn(tx.objectStore(STORE));
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
    tx.oncomplete = () => db.close();
  });
}

export async function listDemoFoto(): Promise<DemoFoto[]> {
  const all = await run<DemoFoto[]>("readonly", (s) => s.getAll() as IDBRequest<DemoFoto[]>);
  return all.sort((a, b) => b.createdAt - a.createdAt);
}

export const addDemoFoto = (foto: DemoFoto) => run("readwrite", (s) => s.put(foto));
export const deleteDemoFoto = (id: string) => run("readwrite", (s) => s.delete(id));
export const clearDemoFoto = () => run("readwrite", (s) => s.clear());

/** Perkecil foto (sisi terpanjang maks. 1600 px) dan ubah ke WebP agar hemat ruang. */
export async function prepareImage(file: File, maxSide = 1600): Promise<{ blob: Blob; width: number; height: number }> {
  const bitmap = await createImageBitmap(file);
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d")?.drawImage(bitmap, 0, 0, width, height);
  bitmap.close();
  const blob = await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("Gagal memproses gambar"))), "image/webp", 0.82),
  );
  return { blob, width, height };
}
