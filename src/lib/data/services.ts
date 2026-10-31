// Bidang layanan CV. Borisma Karya, dikelompokkan menjadi 3 kelompok.
// Sumber: company profile (7 departemen, struktur organisasi, tabel pengalaman)
// dan profil personel (sertifikasi kepala departemen).

import type { Bidang } from "./pengalaman";

export type ServiceGroupKey = "fisik" | "studi" | "pemberdayaan";

export type Service = {
  key: string;
  title: string;
  /** Ringkasan satu kalimat (dipakai di Beranda dan footer). */
  scope: string;
  /** Rincian lingkup pekerjaan sesuai company profile. */
  details: string[];
  /** Kepala departemen menurut struktur organisasi. */
  head: { name: string; note?: string };
  /** Nomor paket pada tabel pengalaman yang dijadikan contoh. */
  examples: number[];
  /** Filter bidang untuk halaman /pengalaman. */
  bidangFilter?: Bidang;
  /** Teks tambahan bila belum ada contoh di tabel pengalaman. */
  extra?: string;
};

export type ServiceGroup = {
  key: ServiceGroupKey;
  title: string;
  summary: string;
  items: Service[];
};

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    key: "fisik",
    title: "Perencanaan Fisik",
    summary: "Perencanaan bangunan, prasarana, dan kawasan, dari konsep sampai Detail Engineering Design (DED).",
    items: [
      {
        key: "arsitektur",
        title: "Arsitektur",
        scope: "Arsitektur, interior, lansekap, serta pengurusan PBG dan SLF.",
        details: [
          "Perencanaan arsitektur bangunan dan kawasan",
          "Perencanaan interior dan lansekap",
          "Pengurusan Persetujuan Bangunan Gedung (PBG)",
          "Pengurusan Sertifikat Laik Fungsi (SLF)",
        ],
        head: { name: "Ar. Ir. Raimundus Pakpahan, MT, IAI" },
        examples: [96, 90, 88],
        bidangFilter: "Arsitektur",
      },
      {
        key: "sipil",
        title: "Sipil",
        scope: "Struktur bangunan gedung, sipil transportasi (jalan, jembatan, dermaga), dan sipil keairan.",
        details: [
          "Perencanaan struktur bangunan gedung",
          "Sipil transportasi: jalan, jembatan, dermaga, dan tatanan transportasi lokal",
          "Sipil keairan dan irigasi",
        ],
        head: { name: "Jeppri Lumbantungkup, ST" },
        examples: [82, 80, 3],
        bidangFilter: "Sipil Transportasi",
      },
      {
        key: "me",
        title: "Mekanikal & Elektrikal",
        scope: "Tata udara (HVAC), lift, pemipaan air bersih, air limbah, dan gas, serta kelistrikan.",
        details: [
          "Sistem tata udara (HVAC)",
          "Lift",
          "Sistem pemipaan: air bersih, air limbah, dan gas",
          "Sistem kelistrikan bangunan",
        ],
        head: {
          name: "Krisnadi T.A.P Naibaho, ST",
          note: "SKK Ahli Utama Teknik Mekanikal, Perencanaan Sistem Tata Udara, dan Pengkaji Teknis Proteksi Kebakaran",
        },
        examples: [],
        extra: "Bidang ini mendukung perencanaan gedung, termasuk gambar MEP (mekanikal, elektrikal, plambing) untuk pengurusan PBG dan SLF.",
      },
      {
        key: "urban",
        title: "Urban",
        scope: "Studi dan perencanaan kawasan perkotaan serta permukiman.",
        details: [
          "Studi dan perencanaan kawasan perkotaan",
          "Kajian penetapan lokasi pengadaan lahan",
          "Perencanaan kawasan permukiman",
        ],
        head: { name: "Mahyuddin, ST", note: "SKK Ahli Madya Perencanaan Tata Ruang Wilayah dan Kota" },
        examples: [92, 91, 1],
        bidangFilter: "Perencanaan Wilayah",
      },
    ],
  },
  {
    key: "studi",
    title: "Studi & Riset",
    summary: "Studi kelayakan, kajian teknis, dan penelitian sebagai dasar pengambilan keputusan.",
    items: [
      {
        key: "riset",
        title: "Riset & Studi Kelayakan",
        scope: "Studi kelayakan, studi bisnis, riset pertanian, kajian UMKM, dan kajian pengadaan tanah.",
        details: [
          "Studi kelayakan (feasibility study)",
          "Studi bisnis dan penelitian ekonomi",
          "Riset pertanian dan UMKM",
          "Penyusunan dokumen kajian untuk pemerintah daerah",
        ],
        head: { name: "Martin E. Y. Simanjuntak, S.Ars" },
        examples: [95, 23, 9],
        bidangFilter: "Studi & Penelitian",
      },
    ],
  },
  {
    key: "pemberdayaan",
    title: "Pemberdayaan & Digital",
    summary: "Aplikasi untuk pemerintahan desa dan pelatihan keterampilan masyarakat.",
    items: [
      {
        key: "ti",
        title: "Teknologi Informasi",
        scope: "Aplikasi, website, dan media promosi untuk instansi dan swasta.",
        details: ["Pengembangan aplikasi dan website", "Media promosi digital", "Pelatihan penggunaan aplikasi"],
        head: { name: "Parulian, M.Kom" },
        examples: [87],
        bidangFilter: "Teknologi Informasi",
      },
      {
        key: "pelatihan",
        title: "Pelatihan & Event",
        scope: "Pelatihan teknik, manajemen, pertanian, dan UMKM, serta pengelolaan acara.",
        details: ["Pelatihan teknik dan manajemen", "Pelatihan pertanian dan UMKM", "Pengelolaan acara"],
        head: { name: "Gloria Kalitya Sinaga" },
        examples: [],
        extra:
          "Contoh kegiatan: pelatihan payet, salon, budidaya jamur tiram, dan menjahit dasar untuk warga Kelurahan Bangun Mulia, Kecamatan Medan Amplas.",
      },
    ],
  },
];

export const ALL_SERVICES = SERVICE_GROUPS.flatMap((g) => g.items);
