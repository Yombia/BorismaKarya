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
      "Layanan teknik meliputi Perencanaan Arsitektur, Sipil, Mekanikal-Elektrikal-Plumbing (MEP), Urban, serta Manajemen Konstruksi, dan pengurusan PBG dan SLF.",
    items: [
      {
        key: "arsitektur",
        title: "Arsitektur",
        scope: "Pekerjaan perencanaan arsitektur, interior, lanskap, serta pengurusan PBG dan SLF.",
        details: [
          "Perencanaan dan Perancangan (meliputi Studi Kelayakan; analisis; konsep; perencanaan bangunan, interior dan lansekap)",
          "Penyusunan Dokumen Perencanaan (gambar kerja arsitektur/ Detailed Engineering Design; spesifikasi teknis; Rencana Anggaran Biaya/ RAB)",
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
        scope: "Pekerjaan survey dan pengujian, perencanaan sipil, serta pengurusan PBG dan SLF",
        details: [
          "Survey dan Pengujian (uji kekuatan tanah, dan uji kekuatan struktur)",
          "Perencanaan dan Perancangan (meliputi perencanaan struktur bangunan gedung, sipil transportasi, dan sipil keairan)",
          "Penyusunan Dokumen Perencanaan (gambar kerja sipil/ Detailed Engineering Design; perhitungan struktur; spesifikasi teknis; Rencana Anggaran Biaya/ RAB)",
          "Pengurusan Persetujuan Bangunan Gedung (PBG)",
          "Pengurusan Sertifikat Laik Fungsi (SLF)",
        ],
        head: { name: "Jeppri Lumbantungkup, ST" },
        examples: [82, 80, 3],
        bidangFilter: "Sipil Transportasi",
      },
      {
        key: "me",
        title: "Mekanikal, Elektrikal & Plumbing",
        scope: "Tata udara (HVAC), lift, pemipaan air bersih, air limbah, dan gas, serta kelistrikan.",
        details: [
          "Konsultansi Mekanikal (meliputi perencanaan sistem tata udara dan ventilasi (HVAC); sistem proteksi kebakaran; sistem transportasi vertikal (lift dan eskalator); sistem pompa; spesifikasi teknis, perhitungan RAB; evaluasi dan audit mekanikal bangunan)",
          "Konsultansi Elektrikal (meliputi perencanaan instalasi listrik; penerangan; proteksi petir; genset; UPS; sistem komunikasi dan jaringan data; CCTV; spesifikasi teknis; perhitungan kebutuhan daya dan RAB; evaluasi dan audit elektrikal bangunan)",
          "Konsultansi Plumbing (meliputi perencanaan air bersih; air kotor dan air hujan; pengolahan air limbah (IPAL/STP); perhitungan kebutuhan air dan kapasitas pompa; spesifikasi teknis; RAB; evaluasi dan audit sanitasi dan plumbing bangunan)",
          "Pengurusan Sertifikat Laik Fungsi (SLF)",
          "Pengurusan Persetujuan Bangunan Gedung (PBG)",
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