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

export const SERVICES = [
  {
    key: "arsitektur",
    title: "Perencanaan Arsitektur",
    desc: "Perencanaan arsitektur, interior, dan lansekap, termasuk pengurusan PBG (Persetujuan Bangunan Gedung) dan SLF (Sertifikat Laik Fungsi).",
  },
  {
    key: "sipil",
    title: "Perencanaan Sipil",
    desc: "Perencanaan struktur bangunan gedung, sipil transportasi (jalan, jembatan, dermaga), dan sipil keairan. Bidang pertama kami sejak 1989.",
  },
  {
    key: "me",
    title: "Mekanikal & Elektrikal",
    desc: "Perencanaan sistem tata udara (HVAC), lift, pemipaan air bersih, air limbah, dan gas, serta sistem kelistrikan bangunan.",
  },
  {
    key: "urban",
    title: "Studi & Perencanaan Urban",
    desc: "Kajian dan perencanaan kawasan perkotaan, tata ruang, serta penataan kawasan permukiman.",
  },
  {
    key: "riset",
    title: "Riset & Studi Kelayakan",
    desc: "Studi kelayakan, studi bisnis, riset pertanian, kajian UMKM, dan penyusunan dokumen kajian untuk pemerintah daerah.",
  },
  {
    key: "ti",
    title: "Teknologi Informasi",
    desc: "Pengembangan aplikasi, website, dan media promosi untuk instansi pemerintah maupun swasta.",
  },
  {
    key: "pelatihan",
    title: "Pelatihan & Event",
    desc: "Penyelenggaraan pelatihan teknik, manajemen, pertanian, dan UMKM, serta pengelolaan acara.",
  },
] as const;

export type Project = {
  id: string;
  title: string;
  category: string;
  image?: string;
  images?: string[];
};

// Render yang saat ini ada di repo (satu kawasan wisata: restoran, gazebo, kolam renang).
// TODO: ganti dengan proyek resmi beserta namanya setelah file gambar dari klien diterima.
export const DEFAULT_PROJECTS: Project[] = [
  { id: "def1", title: "Restoran & Area Makan Terbuka", category: "Arsitektur", image: "/assets/images/portfolio/project-1.webp" },
  { id: "def2", title: "Interior Restoran Semi-Terbuka", category: "Arsitektur", image: "/assets/images/portfolio/project-2.webp" },
  { id: "def3", title: "Gazebo & Taman", category: "Lansekap", image: "/assets/images/portfolio/project-3.webp" },
  { id: "def4", title: "Kolam Renang & Area Rekreasi", category: "Lansekap", image: "/assets/images/portfolio/project-4.webp" },
  { id: "def5", title: "Fasad Restoran", category: "Arsitektur", image: "/assets/images/portfolio/project-5.webp" },
  { id: "def6", title: "Restoran Tepi Kolam", category: "Arsitektur", image: "/assets/images/portfolio/project-6.webp" },
];

export const getProjectImages = (project: Project | null): string[] => {
  if (!project) return [];
  if (project.images && project.images.length > 0) return project.images;
  if (project.image) return [project.image];
  return [];
};

export const getCategories = (projects: Project[]) => [
  "Semua",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
