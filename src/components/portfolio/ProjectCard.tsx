import Image from "next/image";
import Link from "next/link";
import { TitleBlock } from "@/components/site/TitleBlock";
import { coverOf, placeOf, type Project } from "@/lib/data/projects";

type Props = { project: Project; priority?: boolean; headingLevel?: "h2" | "h3" };

// Kartu proyek: gambar utama + kop gambar (nama, lokasi, lingkup, tahun, jenis gambar).
export function ProjectCard({ project: p, priority = false, headingLevel = "h2" }: Props) {
  const img = coverOf(p);
  return (
    <Link href={`/portofolio/${p.slug}`} className="group flex h-full flex-col">
      <div className="relative aspect-[4/3] overflow-hidden border border-b-0 border-line bg-mist">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          className={`${img.kind === "gambar" ? "bg-paper object-contain p-3" : "object-cover"} transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100`}
        />
        <span className="absolute left-3 top-3 rounded-[4px] bg-paper/95 px-2 py-1 text-[11px] font-semibold text-ink">
          {p.category}
        </span>
      </div>
      <TitleBlock titleAs={headingLevel} title={p.title} location={placeOf(p)} scope={p.scope} year={p.year} sheet={img.caption} />
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-soft">{p.summary}</p>
      <span className="mt-3 text-sm font-semibold text-navy-800 underline-offset-4 group-hover:underline">
        Lihat proyek
      </span>
    </Link>
  );
}
