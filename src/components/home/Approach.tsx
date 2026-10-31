import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

// Contoh faktual dari bagian "Konsep Desain" di company profile.
const items = [
  {
    theme: "Akses publik tetap terjaga",
    project: "Long Beach Pangururan",
    text: "Detail Engineering Design (DED) garis pantai sepanjang 22 km, dari Tano Ponggol sampai Tandarabun, disusun agar kawasan pantai tetap terbuka untuk umum. Bangunan ditempatkan dengan memperhatikan sempadan danau.",
  },
  {
    theme: "Ekonomi warga ikut tumbuh",
    project: "Air Terjun Nai Sogop",
    text: "Untuk menjaga kesakralan situs, lapangan parkir, toilet, dan homestay ditempatkan di permukiman warga. Penempatan ini sekaligus mendorong UMKM pariwisata setempat.",
  },
  {
    theme: "Menyesuaikan dengan lahan",
    project: "Lapangan Sepakbola Ambarita",
    text: "Satu sisi lapangan berbatasan langsung dengan rumah warga yang tidak mungkin dibebaskan. Karena itu tribun dirancang berbentuk huruf U dan mengoptimalkan tiga sisi lapangan.",
  },
];

export function Approach() {
  return (
    <section aria-labelledby="pendekatan-judul" className="border-t border-line bg-paper section-y">
      <div className="container-site">
        <SectionHeading
          index="03"
          label="Pendekatan"
          title={<span id="pendekatan-judul">Cara kami merencanakan</span>}
          intro="Kami membaca kondisi lahan, kebutuhan warga, dan nilai budaya setempat sebelum menggambar. Tiga contoh dari pekerjaan kami:"
        />
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {items.map((it, i) => (
            <li key={it.project} className="border-t-2 border-navy-900 pt-6">
              <Reveal delay={i * 0.08}>
                <p className="text-xs font-semibold tabular-nums text-gold-600">{`0${i + 1}`}</p>
                <h3 className="mt-3 text-xl font-bold text-ink">{it.theme}</h3>
                <p className="mt-1 text-sm font-semibold text-navy-700">{it.project}</p>
                <p className="mt-4 text-[15px] leading-[1.7] text-ink-soft">{it.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
