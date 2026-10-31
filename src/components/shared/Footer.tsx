// src/components/shared/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, ChevronRight, ShieldCheck } from "lucide-react"; // <-- Impor ShieldCheck SOTA terintegrasi

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-black pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4 text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Kolom 1: Identitas Brand */}
          <div className="md:col-span-1 text-left">
            <Link href="/" className="flex items-center gap-3 mb-6 transition-opacity hover:opacity-80">
              <div className="relative h-10 w-10 overflow-hidden rounded-md border border-white/10">
                <Image 
                  src="/assets/images/logo.jpg" 
                  alt="Logo PT. Borisma Karya" 
                  fill 
                  sizes="40px" 
                  className="object-cover mix-blend-screen" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white uppercase tracking-tighter leading-none">
                  Borisma <span className="text-brand-gold">Karya</span>
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">General Contractor</span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Solusi konsultansi teknik dengan integritas struktural absolut sejak 1989.
            </p>
          </div>

          {/* Kolom 2: Navigasi Utama (Terinkronisasi) */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Navigasi Utama</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-brand-gold transition-colors text-sm flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-brand-gold opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-muted-foreground hover:text-brand-gold transition-colors text-sm flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-brand-gold opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Tentang Borisma
                </Link>
              </li>
              <li>
                <Link href="/#portofolio" className="text-muted-foreground hover:text-brand-gold transition-colors text-sm flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-2 text-brand-gold opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                  Proyek Unggulan
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-muted-foreground hover:text-brand-gold transition-colors text-xs flex items-center group opacity-50 hover:opacity-100">
                    <ShieldCheck className="h-3 w-3 mr-2" />
                    Admin Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Layanan Spesifik */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Layanan</h4>
            <ul className="space-y-3">
              {['Struktur Sipil', 'Manajemen Proyek', 'Audit Bangunan'].map((item, i) => (
                <li key={i}>
                  <Link href="/#layanan" className="text-muted-foreground hover:text-brand-gold transition-colors text-sm flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-brand-gold" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 4: Kontak Legal & Operasional */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs text-left">Hubungi Pusat Komando</h4>
            <ul className="space-y-4">
              <li className="flex items-start text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 text-brand-gold mr-3 shrink-0" />
                <span>Jl. Telekomunikasi No. 1, Bandung, Jawa Barat.</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-brand-gold mr-3 shrink-0" />
                <span>+62 812-XXXX-XXXX</span>
              </li>
              <li className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-brand-gold mr-3 shrink-0" />
                <span>info@borismakarya.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-medium">
            &copy; {currentYear} PT. BORISMA KARYA. INTEGRITAS ABSOLUT SEJAK 1989.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}