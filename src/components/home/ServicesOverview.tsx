import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/site/ButtonLink";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SERVICE_GROUPS } from "@/lib/data/services";

export function ServicesOverview() {
  const total = SERVICE_GROUPS.reduce((n, g) => n + g.items.length, 0);
  return (
    <section aria-labelledby="layanan-judul" className="bg-mist section-y">
      <div className="container-site">
        <SectionHeading
          index="01"
          label="Layanan"
          align="split"
          title={<span id="layanan-judul">{`${total} bidang layanan dalam tiga kelompok`}</span>}
          intro="Setiap bidang dipimpin kepala departemen di bidangnya, sehingga satu pekerjaan bisa ditangani dari kajian awal, perencanaan, sampai perizinan."
          action={
            <ButtonLink href="/layanan" variant="outline-dark">
              Semua layanan
              <ArrowRight className="h-4 w-4" />
            </ButtonLink>
          }
        />

        <div className="mt-12 grid border-t border-ink/15 md:grid-cols-3">
          {SERVICE_GROUPS.map((g, gi) => (
            <Reveal
              key={g.key}
              delay={gi * 0.08}
              className={`border-b border-ink/15 py-8 md:border-b-0 md:py-10 ${gi > 0 ? "md:border-l md:pl-8" : ""} ${
                gi < 2 ? "md:pr-8" : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gold-600">{`Kelompok ${["A", "B", "C"][gi]}`}</p>
              <h3 className="mt-3 text-xl font-bold text-ink">{g.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{g.summary}</p>
              <ul className="mt-6 divide-y divide-ink/10 border-t border-ink/10">
                {g.items.map((s) => (
                  <li key={s.key} className="py-4">
                    <Link href={`/layanan#${s.key}`} className="font-semibold text-ink underline-offset-4 hover:underline">
                      {s.title}
                    </Link>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.scope}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
