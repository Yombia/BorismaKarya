import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/site/ButtonLink";
import { TitleBlock } from "@/components/site/TitleBlock";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { SITE, waLink } from "@/lib/data/site";
import { FEATURED_PROJECTS, coverOf, placeOf } from "@/lib/data/projects";

export function HomeHero() {
  const hero = FEATURED_PROJECTS[0];
  const img = coverOf(hero);
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div aria-hidden="true" className="blueprint-grid absolute inset-0" />
      <div className="container-site relative grid gap-12 pb-16 pt-32 md:pb-20 md:pt-40 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-7 lg:pr-6">
          <p className="eyebrow flex flex-wrap items-center gap-x-3 gap-y-1 text-gold-500">
            <span aria-hidden="true" className="h-px w-8 bg-gold-500" />
            Konsultan Perencanaan & Pengawasan
          </p>
          <h1 className="mt-6 text-[clamp(2.375rem,4.4vw,3.625rem)] font-extrabold leading-[1.06] tracking-[-0.02em]">
            Merencanakan bangunan dan kawasan di Sumatera Utara sejak {SITE.foundedYear}.
          </h1>
          <p className="mt-6 max-w-[56ch] text-[1.0625rem] leading-[1.7] text-white/75">
            CV. Borisma Karya mengerjakan perencanaan arsitektur, sipil, mekanikal-elektrikal, dan kawasan,
            pengawasan teknis, studi kelayakan, serta pengurusan PBG dan SLF untuk pemerintah daerah dan
            swasta.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={waLink()} variant="gold">
              <WhatsAppIcon className="h-5 w-5" />
              Konsultasi via WhatsApp
            </ButtonLink>
            <ButtonLink href="/portofolio" variant="outline-light">
              Lihat Portofolio
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          </div>
          <p className="mt-8 text-sm text-white/55">Kantor di Medan dan Pangururan, Samosir.</p>
        </div>

        <figure className="lg:col-span-5">
          <div className="relative aspect-[16/10] overflow-hidden border border-white/15 bg-navy-800">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="eager"
              sizes="(min-width: 1024px) 500px, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption>
            <TitleBlock
              tone="dark"
              title={hero.title}
              location={placeOf(hero)}
              scope={hero.scope}
              year={hero.year}
              sheet={img.caption}
              className="border-t-0"
            />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
