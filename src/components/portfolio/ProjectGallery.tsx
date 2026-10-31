"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { ProjectImage } from "@/lib/data/projects";

type Props = { images: ProjectImage[]; title: string };

const KIND_LABEL: Record<ProjectImage["kind"], string> = { gambar: "Gambar kerja", render: "Render", foto: "Foto" };

// Galeri gambar proyek + lightbox: Esc untuk menutup, panah kiri/kanan, geser di layar sentuh,
// fokus terkunci di dalam lightbox dan dikembalikan ke gambar asal setelah ditutup.
export function ProjectGallery({ images, title }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lastIndex = useRef(0);
  const touchX = useRef<number | null>(null);
  const total = images.length;

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback((step: number) => setOpen((i) => (i === null ? i : (i + step + total) % total)), [total]);

  useEffect(() => {
    if (open === null) return;
    lastIndex.current = open;
  }, [open]);

  const isOpen = open !== null;
  useEffect(() => {
    if (!isOpen) return;
    const triggers = triggerRefs.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        go(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      } else if (e.key === "Tab" && dialogRef.current) {
        // Hanya tombol yang terlihat (tombol panah versi desktop/mobile disembunyikan bergantian).
        const items = [...dialogRef.current.querySelectorAll<HTMLElement>("button:not([disabled])")].filter(
          (el) => el.getClientRects().length > 0,
        );
        if (items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (!dialogRef.current.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      triggers[lastIndex.current]?.focus();
    };
  }, [isOpen, close, go]);

  const current = open === null ? null : images[open];

  return (
    <>
      <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              onClick={() => setOpen(i)}
              className="group block w-full text-left"
            >
              <span className="relative block aspect-[4/3] overflow-hidden border border-line bg-paper">
                {/* Alt kosong: nama tombol diambil dari keterangan di bawah; alt lengkap ada di lightbox. */}
                <Image
                  src={img.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className={`${img.kind === "gambar" ? "object-contain p-3" : "object-cover"} transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-md bg-navy-900/85 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  <Expand className="h-4 w-4" />
                </span>
              </span>
              <span className="mt-3 flex items-baseline justify-between gap-4 border-b border-line pb-3">
                <span className="text-[15px] font-semibold text-ink">
                  <span className="sr-only">Perbesar gambar {i + 1} dari {total}: </span>
                  {img.caption}
                </span>
                <span className="shrink-0 text-xs text-ink-soft">{KIND_LABEL[img.kind]}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && open !== null && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`Galeri ${title}`}
          className="fixed inset-0 z-[70] flex flex-col bg-navy-950 text-white"
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          }}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-6">
            <p className="min-w-0 truncate text-sm text-white/70">{title}</p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Tutup galeri"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-20"
            onClick={(e) => e.target === e.currentTarget && close()}
          >
            {/* Ditampilkan maksimal sebesar ukuran aslinya agar gambar kerja tetap tajam. */}
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="100vw"
              className={`h-auto max-h-full w-auto max-w-full object-contain ${current.kind === "gambar" ? "bg-paper p-2" : ""}`}
            />
            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Gambar sebelumnya"
                  className="absolute left-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-navy-950/60 hover:bg-white/10 md:left-5 md:flex"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Gambar berikutnya"
                  className="absolute right-2 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-md border border-white/20 bg-navy-950/60 hover:bg-white/10 md:right-5 md:flex"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}
          </div>

          <div className="flex items-center justify-between gap-4 px-4 py-4 md:px-6">
            <p className="min-w-0 text-[15px]" aria-live="polite">
              <span className="font-semibold">{current.caption}</span>
              <span className="ml-2 text-white/60">{KIND_LABEL[current.kind]}</span>
            </p>
            <div className="flex shrink-0 items-center gap-2">
              {total > 1 && (
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Gambar sebelumnya"
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 hover:bg-white/10 md:hidden"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              )}
              <span className="text-sm tabular-nums text-white/70">
                {open + 1} / {total}
              </span>
              {total > 1 && (
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Gambar berikutnya"
                  className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 hover:bg-white/10 md:hidden"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
