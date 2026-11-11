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
  /** Kepala departemen menurut struktur organisasi. Kosongkan bila belum dikonfirmasi. */
  head?: { name: string; note?: string };
  /** Nomor paket pada tabel pengalaman yang dijadikan contoh. */
  examples: number[];
  /** Bidang terkait di data pengalaman (pengelompokan statistik). */
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
    title: "Konsultasi Teknik",
    summary:
      "Perencanaan bangunan, prasarana, dan kawasan, dari konsep sampai Detail Engineering Design (DED), serta pengawasan dan manajemen konstruksi.",
    items: [
      {
        key: "arsitektur",
        title: "Arsitektur",
        scope: "Arsitektur, interior, lanskap, serta pengurusan PBG dan SLF.",
        details: [
          "Perencanaan arsitektur bangunan dan kawasan",
          "Perencanaan interior dan lanskap",
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
      {
        key: "manajemen-konstruksi",
        title: "Manajemen Konstruksi",
        scope: "Pengawasan teknis dan manajemen konstruksi pembangunan gedung, jalan, dan fasilitas publik.",
        details: [
          "Pengawasan teknis pelaksanaan pembangunan",
          "Supervisi pembangunan gedung dan rehabilitasi bangunan",
          "Pengawasan pembangunan jalan",
        ],
        // [KONFIRMASI] Penanggung jawab bidang ini belum ada di struktur organisasi.
        examples: [7, 8, 24],
      },
    ],
  },
  {
    key: "studi",
    title: "Konsultasi Bisnis",
    summary: "Studi kelayakan, studi bisnis, dan pelatihan sebagai dasar pengambilan keputusan dan pengembangan usaha.",
    items: [
      {
        key: "riset",
        title: "Studi Kelayakan & Studi Bisnis",
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
  {
    key: "pemberdayaan",
    title: "Teknologi Informasi",
    summary: "Website, aplikasi, dan analisis data untuk instansi dan swasta.",
    items: [
      {
        key: "ti",
        title: "Website, Aplikasi & Analisis Data",
        scope: "Website, aplikasi, analisis data, dan media promosi untuk instansi dan swasta.",
        details: [
          "Pengembangan website dan aplikasi",
          "Analisis data",
          "Media promosi digital",
          "Pelatihan penggunaan aplikasi",
        ],
        head: { name: "Parulian, M.Kom" },
        examples: [87],
        bidangFilter: "Teknologi Informasi",
      },
    ],
  },
];

export const ALL_SERVICES = SERVICE_GROUPS.flatMap((g) => g.items);