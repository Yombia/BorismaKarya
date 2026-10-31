// Data resmi CV. Borisma Karya (sumber: company profile & brosur dari klien).
// Ubah data di sini, semua halaman ikut berubah.

export const SITE = {
  name: "CV. Borisma Karya",
  shortName: "Borisma Karya",
  tagline: "Konsultan Perencanaan & Pengawasan",
  url: "https://borisma-karya.id",
  foundedYear: 1989,
  description:
    "CV. Borisma Karya adalah konsultan perencanaan dan pengawasan di Sumatera Utara sejak 1989. Melayani perencanaan arsitektur, sipil, mekanikal-elektrikal, tata kota, studi kelayakan, serta pengurusan PBG dan SLF.",
} as const;

export const CONTACT = {
  offices: [
    {
      label: "Kantor Medan",
      address: "Mega Setia Budi Village No. B2, Kec. Medan Selayang, Medan 20132",
    },
    {
      label: "Kantor Samosir",
      address: "Jl. Sianjur Mulamula No. 3 Tajur, Pangururan, Kab. Samosir 22390",
    },
  ],
  phones: ["0813-7220-414", "0852-5424-7354"],
  whatsapp: "628137220414",
  whatsappDisplay: "0813-7220-414",
  email: "borismakarya.consulting@gmail.com",
  hours: "Senin–Sabtu, 08.00–17.00 WIB",
  socials: [
    { label: "Instagram", handle: "@borisma_karya", href: "https://www.instagram.com/borisma_karya" },
    { label: "Facebook", handle: "Borisma Karya", href: "https://www.facebook.com/706286335902224" },
    { label: "TikTok", handle: "@borisma.karya7", href: "https://www.tiktok.com/@borisma.karya7" },
  ],
} as const;

/** Mengubah "0813-7220-414" menjadi "tel:+628137220414". */
export const toTel = (phone: string) => `tel:+62${phone.replace(/\D/g, "").replace(/^0/, "")}`;

export const yearsActive = () => new Date().getFullYear() - SITE.foundedYear;

export const WA_MESSAGES = {
  umum: "Halo CV. Borisma Karya, saya ingin berkonsultasi mengenai rencana proyek saya.",
  pbg: "Halo CV. Borisma Karya, saya ingin konsultasi pengurusan PBG/SLF untuk bangunan saya.",
  proyek: (nama: string) =>
    `Halo CV. Borisma Karya, saya melihat proyek ${nama} di website dan ingin berkonsultasi.`,
} as const;

/** Link WhatsApp dengan pesan otomatis. */
export const waLink = (message: string = WA_MESSAGES.umum) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

/** Nama instansi pengguna jasa (dari tabel pengalaman di company profile). Ditampilkan sebagai teks, bukan logo. */
export const CLIENTS = [
  "Dinas Pekerjaan Umum Kab. Samosir",
  "Dinas Tata Ruang dan Permukiman Kab. Samosir",
  "Dinas Pariwisata Kab. Samosir",
  "BAPPEDA Kota Pematangsiantar",
  "Dinas Perumahan, Kawasan Permukiman dan Penataan Ruang Kota Medan",
  "Dinas Kebudayaan dan Pariwisata Provinsi Sumatera Utara",
  "KPPN Pematangsiantar",
  "Kantor Bea dan Cukai Pematangsiantar",
  "GKPI – Rumah Lansia Sejahtera",
] as const;
