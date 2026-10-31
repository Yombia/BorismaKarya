// src/app/pengalaman/page.tsx — Daftar lengkap paket pekerjaan (tabel pengalaman di company profile)
import { PageHero } from "@/components/site/PageHero";
import { ButtonLink } from "@/components/site/ButtonLink";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { ContactCta } from "@/components/site/ContactCta";
import { PengalamanExplorer } from "@/components/pengalaman/PengalamanExplorer";
import { PENGALAMAN, RENTANG_TAHUN, hitungPerBidang, hitungPerLokasi } from "@/lib/data/pengalaman";
import { waLink } from "@/lib/data/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: `Pengalaman: ${PENGALAMAN.length} Paket Pekerjaan`,
  description: `Daftar ${PENGALAMAN.length} paket pekerjaan CV. Borisma Karya ${RENTANG_TAHUN.awal}–${RENTANG_TAHUN.akhir}: perencanaan arsitektur, jalan, jembatan, dermaga, kawasan, dan studi untuk pemerintah daerah.`,
  path: "/pengalaman",
});

function BarList({ title, rows }: { title: string; rows: { label: string; jumlah: number }[] }) {
  const max = Math.max(...rows.map((r) => r.jumlah), 1);
  return (
    <table className="w-full border-collapse text-sm">
      <caption className="eyebrow mb-3 text-left text-ink-soft">{title}</caption>
      <tbody>
        {rows.map((r) => (
          <tr key={r.label} className="border-b border-ink/10">
            <th scope="row" className="w-[46%] py-2.5 pr-4 text-left font-medium text-ink">
              {r.label}
            </th>
            <td className="py-2.5">
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 bg-ink/[0.06]">
                  <div className="h-2 bg-navy-900" style={{ width: `${(r.jumlah / max) * 100}%` }} />
                </div>
                <span className="w-7 text-right font-semibold tabular-nums text-ink">{r.jumlah}</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function PengalamanPage() {
  const perBidang = hitungPerBidang().map((r) => ({ label: r.bidang, jumlah: r.jumlah }));
  const lokasi = hitungPerLokasi();
  const topLokasi = lokasi.slice(0, 6).map((r) => ({
    label: r.lokasi === "Sumatera Utara" ? "Provinsi Sumatera Utara" : r.lokasi,
    jumlah: r.jumlah,
  }));
  const sisaLokasi = lokasi.slice(6);
  if (sisaLokasi.length) {
    topLokasi.push({ label: `${sisaLokasi.length} lokasi lain`, jumlah: sisaLokasi.reduce((n, r) => n + r.jumlah, 0) });
  }
  const instansi = new Set(PENGALAMAN.map((p) => p.penggunaJasa)).size;

  const facts = [
    { v: String(PENGALAMAN.length), k: "Paket pekerjaan" },
    { v: `${RENTANG_TAHUN.awal}–${RENTANG_TAHUN.akhir}`, k: "Rentang tahun" },
    { v: String(lokasi.length), k: "Kabupaten/kota dan provinsi" },
    { v: String(instansi), k: "Pengguna jasa" },
  ];

  return (
    <>
      <PageHero
        crumbs={[{ label: "Pengalaman", href: "/pengalaman" }]}
        eyebrow="Pengalaman"
        title={`${PENGALAMAN.length} paket pekerjaan sejak ${RENTANG_TAHUN.awal}.`}
        intro="Daftar ini disalin dari tabel pengalaman perusahaan di company profile kami. Sebagian besar pengguna jasa adalah pemerintah daerah di Sumatera Utara."
        actions={
          <ButtonLink href={waLink()} variant="gold">
            <WhatsAppIcon className="h-5 w-5" />
            Konsultasi via WhatsApp
          </ButtonLink>
        }
      />

      {/* Ringkasan, semua dihitung dari data */}
      <section aria-labelledby="ringkasan-judul" className="bg-paper section-y">
        <div className="container-site">
          <h2 id="ringkasan-judul" className="sr-only">
            Ringkasan pengalaman
          </h2>
          <dl className="grid grid-cols-2 gap-px border-y border-ink/20 bg-ink/10 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.k} className="bg-paper py-6 pr-4 [&:nth-child(even)]:pl-5 lg:[&:not(:first-child)]:pl-6">
                <dt className="eyebrow text-ink-soft">{f.k}</dt>
                <dd className="mt-2 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-none tabular-nums text-navy-900">{f.v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <BarList title="Paket per bidang" rows={perBidang} />
            <BarList title="Paket per kabupaten/kota" rows={topLokasi} />
          </div>
        </div>
      </section>

      {/* Tabel */}
      <section aria-labelledby="daftar-judul" className="bg-mist section-y">
        <div className="container-site">
          <p className="eyebrow flex items-center gap-3 text-gold-600">
            <span aria-hidden="true" className="h-px w-8 bg-gold-600" />
            Daftar paket
          </p>
          <h2 id="daftar-judul" className="mt-4 text-[clamp(1.875rem,3vw,2.75rem)] font-bold leading-[1.12] text-ink">
            Cari berdasarkan bidang, tahun, lokasi, atau instansi.
          </h2>
          <div className="mt-10">
            {/* Catatan internal ([CEK DUPLIKAT]) tidak dikirim ke browser. */}
            <PengalamanExplorer
              data={PENGALAMAN.map((p) => ({
                no: p.no,
                paket: p.paket,
                subBidang: p.subBidang,
                bidang: p.bidang,
                lokasi: p.lokasi,
                penggunaJasa: p.penggunaJasa,
                tahun: p.tahun,
              }))}
            />
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
