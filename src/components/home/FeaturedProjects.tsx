import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TitleBlock } from "@/components/site/TitleBlock";
import { FEATURED_PROJECTS, coverOf, placeOf, type Project } from "@/lib/data/projects";

function ProjectCard({ p, size, className = "" }: { p: Project; size: "lg" | "md" | "sm"; className?: string }) {
  const img = coverOf(p);
  const aspect = size === "lg" ? "aspect-[4/3]" : "aspect-[16/10]";
  const sizes = size === "lg" ? "(min-width: 1024px) 700px, 100vw" : "(min-width: 1024px) 420px, 100vw";
  return (
    <Link href={`/portofolio/${p.slug}`} className={`group block ${className}`}>
      <div className={`relative ${aspect} overflow-hidden border border-line border-b-0 bg-mist`}>
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes={sizes}
          className={`${img.kind === "gambar" ? "object-contain bg-paper p-3" : "object-cover"} transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
        />
        <span className="absolute left-3 top-3 rounded-[4px] bg-paper/95 px-2 py-1 text-[11px] font-semibold text-ink">
          {p.category}
        </span>
      </div>
      <TitleBlock title={p.title} location={placeOf(p)} scope={p.scope} year={p.year} sheet={img.caption} />
      {size === "lg" && <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-ink-soft">{p.summary}</p>}
    </Link>
  );
}

export function FeaturedProjects() {
  const [a, b, c, d, e, f] = FEATURED_PROJECTS;
  return (
    <section aria-labelledby="proyek-judul" className="bg-paper section-y">
      <div className="container-site">
        <SectionHeading
          index="02"
          label="Proyek"
          align="split"
          title={<span id="proyek-judul">Proyek pilihan</span>}
          intro="Sebagian karya perencanaan kami: kawasan wisata di sekitar Danau Toba, fasilitas sosial, dan hunian."
          action={
            <ButtonLink href="/portofolio" variant="outline-dark">
              Semua proyek
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          }
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ProjectCard p={a} size="lg" />
          </Reveal>
          <div className="grid gap-8 lg:col-span-5">
            <Reveal delay={0.06}>
              <ProjectCard p={b} size="md" />
            </Reveal>
            <Reveal delay={0.12}>
              <ProjectCard p={c} size="md" />
            </Reveal>
          </div>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {[d, e, f].map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.06}>
              <ProjectCard p={p} size="sm" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
