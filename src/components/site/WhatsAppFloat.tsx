import { waLink } from "@/lib/data/site";
import { WhatsAppIcon } from "./WhatsAppIcon";

// Tombol WhatsApp melayang di kanan bawah semua halaman.
export function WhatsAppFloat() {
  return (
    <aside aria-label="Kontak cepat">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tanya via WhatsApp"
        className="fixed bottom-5 right-5 z-40 inline-flex h-14 min-w-14 items-center justify-center gap-2 rounded-full bg-navy-900 px-4 text-sm font-semibold text-white shadow-[0_6px_20px_rgb(3_21_33/0.28)] ring-1 ring-white/10 transition-colors hover:bg-navy-800 md:bottom-6 md:right-6 md:px-5"
      >
        <WhatsAppIcon className="h-6 w-6 text-[#25D366]" />
        <span className="hidden md:inline">Tanya via WhatsApp</span>
      </a>
    </aside>
  );
}
