// src/components/shared/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Clock, ChevronRight } from "lucide-react";
import { CONTACT, SERVICES, SITE, toTel } from "@/lib/data/site";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang Kami", href: "/tentang" },
  { name: "Layanan", href: "/#layanan" },
  { name: "Portofolio", href: "/#portofolio" },
  { name: "Galeri", href: "/galeri" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  const linkClass =
    "text-muted-foreground hover:text-brand-gold transition-colors text-sm flex items-center group";
  const chevron = (
    <ChevronRight className="h-4 w-4 mr-2 text-brand-gold opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
  );

  return (
    <footer id="kontak" className="border-t border-white/10 bg-brand-black pt-16 pb-8 relative z-10 scroll-mt-20">
      <div className="container mx-auto px-4 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Identitas */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6 transition-opacity hover:opacity-80">
              <div className="relative h-10 w-10 overflow-hidden rounded-md border border-white/10">
                <Image src="/assets/images/logo.jpg" alt="Logo CV. Borisma Karya" fill sizes="40px" className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white uppercase tracking-tighter leading-none">
                  Borisma <span className="text-brand-gold">Karya</span>
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
                  {SITE.tagline}
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Konsultan perencanaan dan pengawasan di Sumatera Utara sejak 16 Oktober 1989.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigasi</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <Link href={l.href} className={linkClass}>
                    {chevron}
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Layanan</h4>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.key}>
                  <Link href="/#layanan" className={linkClass}>
                    {chevron}
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              {CONTACT.offices.map((o) => (
                <li key={o.label} className="flex items-start">
                  <MapPin className="h-5 w-5 text-brand-gold mr-3 shrink-0" />
                  <span>
                    <span className="block font-semibold text-white">{o.label}</span>
                    {o.address}
                  </span>
                </li>
              ))}
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-brand-gold mr-3 shrink-0" />
                <span>
                  {CONTACT.phones.map((p, i) => (
                    <span key={p}>
                      <a href={toTel(p)} className="hover:text-brand-gold transition-colors">{p}</a>
                      {i < CONTACT.phones.length - 1 && " / "}
                    </span>
                  ))}
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-brand-gold mr-3 shrink-0" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-gold transition-colors break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-brand-gold mr-3 shrink-0" />
                <span>{CONTACT.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Media sosial & hak cipta */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-medium">
            &copy; {currentYear} {SITE.name}. Hak cipta dilindungi.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            {CONTACT.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-gold transition-colors"
              >
                {s.label} {s.handle}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
