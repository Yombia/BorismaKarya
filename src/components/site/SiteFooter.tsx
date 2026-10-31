import Link from "next/link";
import { CONTACT, SITE, toTel, waLink } from "@/lib/data/site";
import { SERVICE_GROUPS } from "@/lib/data/services";
import { Logo } from "./Logo";
import { NAV_LINKS } from "./nav";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const heading = "eyebrow text-gold-500";
  const link = "text-sm text-white/70 transition-colors hover:text-white";

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container-site pb-28 pt-16 md:pb-24">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/70">
              Konsultan perencanaan dan pengawasan di Sumatera Utara sejak 16 Oktober {SITE.foundedYear}.
              Melayani pemerintah daerah dan swasta dari kantor Medan dan Samosir.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center rounded-md border border-white/20 px-4 text-sm font-semibold text-white transition-colors hover:border-gold-500 hover:text-gold-500"
            >
              WhatsApp {CONTACT.whatsappDisplay}
            </a>
          </div>

          <nav aria-label="Navigasi footer" className="md:col-span-2">
            <p className={heading}>Navigasi</p>
            <ul className="mt-5 space-y-3">
              {[...NAV_LINKS, { label: "Pemberdayaan", href: "/pemberdayaan" }].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className={link}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2">
            <p className={heading}>Layanan</p>
            <ul className="mt-5 space-y-3">
              {SERVICE_GROUPS.flatMap((g) => g.items).map((s) => (
                <li key={s.key}>
                  <Link href={`/layanan#${s.key}`} className={link}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className={heading}>Kantor</p>
            <ul className="mt-5 space-y-5">
              {CONTACT.offices.map((o) => (
                <li key={o.label}>
                  <p className="text-sm font-semibold text-white">{o.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{o.address}</p>
                </li>
              ))}
            </ul>
            <dl className="mt-6 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm">
              <dt className="text-white/50">Telepon</dt>
              <dd className="text-white/80">
                {CONTACT.phones.map((p, i) => (
                  <span key={p}>
                    <a href={toTel(p)} className="hover:text-white">
                      {p}
                    </a>
                    {i < CONTACT.phones.length - 1 && " / "}
                  </span>
                ))}
              </dd>
              <dt className="text-white/50">Email</dt>
              <dd className="break-all text-white/80">
                <a href={`mailto:${CONTACT.email}`} className="hover:text-white">
                  {CONTACT.email}
                </a>
              </dd>
              <dt className="text-white/50">Jam buka</dt>
              <dd className="text-white/80">{CONTACT.hours}</dd>
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {SITE.name}. Hak cipta dilindungi.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {CONTACT.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  {s.label} {s.handle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
