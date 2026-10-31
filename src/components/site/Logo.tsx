import Image from "next/image";
import Link from "next/link";

type Props = { tone?: "light" | "dark"; onClick?: () => void; compact?: boolean };

// Logo resmi (tiga batang kuning + koin "K") dengan nama perusahaan.
export function Logo({ tone = "light", onClick, compact = false }: Props) {
  const name = tone === "light" ? "text-white" : "text-ink";
  const sub = tone === "light" ? "text-white/60" : "text-ink-soft";
  return (
    <Link href="/" onClick={onClick} className="flex items-center gap-3">
      <span className="relative block h-10 w-10 shrink-0 overflow-hidden rounded-[4px] bg-[#111]">
        <Image src="/assets/images/logo-96.webp" alt="" fill sizes="40px" className="object-cover" loading="eager" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-[15px] font-extrabold tracking-[0.06em] ${name}`}>
          <span className="sr-only">CV. </span>BORISMA KARYA
        </span>
        <span className={`mt-1 text-[10px] font-medium uppercase tracking-[0.14em] ${sub} ${compact ? "hidden sm:block" : ""}`}>
          Konsultan Perencanaan & Pengawasan
        </span>
        <span className="sr-only">, ke beranda</span>
      </span>
    </Link>
  );
}
