import Link from "next/link";
import { SITE } from "@/lib/data/site";

type Crumb = { label: string; href: string };

type Props = {
  crumbs: Crumb[];
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
};

// Hero halaman dalam: navy + grid blueprint, breadcrumb, dan JSON-LD BreadcrumbList.
export function PageHero({ crumbs, eyebrow, title, intro, actions, aside }: Props) {
  const all = [{ label: "Beranda", href: "/" }, ...crumbs];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE.url}${c.href === "/" ? "" : c.href}`,
    })),
  };

  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div aria-hidden="true" className="blueprint-grid absolute inset-0" />
      <div className={`container-site relative pb-14 pt-28 md:pb-20 md:pt-36 ${aside ? "grid gap-12 lg:grid-cols-12 lg:items-end" : ""}`}>
        <div className={aside ? "lg:col-span-7" : "max-w-3xl"}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/55">
              {all.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i < all.length - 1 ? (
                    <Link href={c.href} className="hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white/80">
                      {c.label}
                    </span>
                  )}
                  {i < all.length - 1 && <span aria-hidden="true">/</span>}
                </li>
              ))}
            </ol>
          </nav>
          <p className="eyebrow mt-10 flex items-center gap-3 text-gold-500">
            <span aria-hidden="true" className="h-px w-8 bg-gold-500" />
            {eyebrow}
          </p>
          <h1 className="mt-5 text-[clamp(2.25rem,4.2vw,3.5rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
            {title}
          </h1>
          {intro && <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-[1.7] text-white/75">{intro}</p>}
          {actions && <div className="mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>}
        </div>
        {aside && <div className="lg:col-span-5">{aside}</div>}
      </div>
    </section>
  );
}
