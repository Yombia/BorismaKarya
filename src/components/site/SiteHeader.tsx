"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "./nav";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { CONTACT, toTel, waLink } from "@/lib/data/site";

// Header: transparan di atas hero navy, berubah putih setelah halaman digulir.
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled && !open;
  // Tautan aktif = yang paling spesifik cocok dengan path (mis. /layanan/pbg-slf tidak ikut menyalakan /layanan).
  const matches = (href: string) => (href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`));
  const activeHref = NAV_LINKS.map((l) => l.href)
    .filter(matches)
    .sort((a, b) => b.length - a.length)[0];
  const isActive = (href: string) => href === activeHref;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-paper/95 backdrop-blur-sm" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-site flex h-[72px] items-center justify-between gap-6">
        <Logo tone={solid ? "dark" : "light"} onClick={() => setOpen(false)} compact />

        <nav aria-label="Navigasi utama" className="hidden xl:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`relative py-2 text-sm font-medium transition-colors ${
                    solid ? "text-ink-soft hover:text-ink" : "text-white/75 hover:text-white"
                  } ${isActive(l.href) ? (solid ? "!text-ink" : "!text-white") : ""}`}
                >
                  {l.label}
                  {isActive(l.href) && (
                    <span aria-hidden="true" className="absolute inset-x-0 -bottom-0.5 h-px bg-gold-500" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-md bg-gold-500 px-4 text-sm font-semibold text-navy-950 transition-colors hover:bg-[#d4a668] sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Konsultasi
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-seluler"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-md xl:hidden ${
              solid ? "text-ink hover:bg-mist" : "text-white hover:bg-white/10"
            }`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu seluler: panel layar penuh */}
      {open && (
        <div id="menu-seluler" className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto bg-navy-900 xl:hidden">
          <nav aria-label="Navigasi seluler" className="container-site py-6">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {NAV_LINKS.map((l, i) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className="flex items-baseline gap-4 py-4 text-xl font-semibold text-white"
                  >
                    <span className="w-6 text-xs font-medium tabular-nums text-gold-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-gold-500 font-semibold text-navy-950"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Konsultasi via WhatsApp
              </a>
              <a
                href={toTel(CONTACT.phones[0])}
                className="inline-flex h-12 items-center justify-center rounded-md border border-white/20 font-semibold text-white"
              >
                Telepon {CONTACT.phones[0]}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
