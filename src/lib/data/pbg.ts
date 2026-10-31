// Isi halaman "Urus PBG & SLF". Sumber: brosur resmi CV. Borisma Karya.
// FAQ hanya memuat isi brosur dan definisi umum: tanpa biaya, durasi, persyaratan dokumen, atau pasal peraturan.

export const PBG_DEFINITIONS = [
  {
    code: "PBG",
    name: "Persetujuan Bangunan Gedung",
    definition: "Izin resmi untuk memulai pembangunan sesuai ketentuan dan tata ruang.",
    when: "Diperlukan sebelum membangun bangunan baru atau mengubah bangunan yang sudah ada.",
  },
  {
    code: "SLF",
    name: "Sertifikat Laik Fungsi",
    definition: "Sertifikat resmi yang menyatakan bangunan telah layak digunakan dan aman.",
    when: "Diperlukan sebelum bangunan digunakan.",
  },
] as const;

export const PBG_BUILDING_TYPES = ["Pabrik", "Gudang", "Ruko dan gedung usaha", "Rumah tinggal"] as const;

export const PBG_SCOPE = [
  "Pengurusan PBG (Persetujuan Bangunan Gedung)",
  "Pengurusan SLF (Sertifikat Laik Fungsi)",
  "Konsultasi perizinan bangunan",
  "Pendampingan teknis dan pemeriksaan lapangan",
  "Gambar arsitektur, struktur, dan MEP (mekanikal, elektrikal, dan plambing)",
  "Pengujian tanah, pengujian kekuatan struktur, dan pengujian MEP",
  "Revisi dan pengurusan tambahan",
] as const;

export const PBG_STEPS = [
  { title: "Konsultasi", desc: "Sampaikan kebutuhan dan data bangunan Anda." },
  { title: "Survei dan pengujian", desc: "Survei lapangan, pengujian lapangan, dan penyiapan dokumen terkait." },
  { title: "Proses perizinan", desc: "Pengajuan dan proses sidang sampai izin diterbitkan." },
  { title: "Izin terbit", desc: "PBG/SLF diterbitkan dan siap digunakan." },
] as const;

export const PBG_REASONS = [
  "Memiliki legalitas usaha",
  "Tenaga ahli profesional bersertifikat untuk bidang arsitektur, struktur, dan MEP",
  "Berpengalaman menangani berbagai jenis bangunan",
  "Memahami regulasi terbaru dan prosedur perizinan",
  "Dokumen lengkap, akurat, dan sesuai standar",
  "Komunikasi responsif dan pelayanan terbaik",
] as const;

export const PBG_GUARANTEES = [
  "Legal & profesional",
  "Proses cepat",
  "Pendampingan sampai tuntas",
  "Garansi kerahasiaan dokumen",
] as const;

export const PBG_FAQ = [
  {
    q: "Apa beda PBG dan SLF?",
    a: "PBG (Persetujuan Bangunan Gedung) adalah izin resmi untuk memulai pembangunan sesuai ketentuan dan tata ruang. SLF (Sertifikat Laik Fungsi) adalah sertifikat resmi yang menyatakan bangunan telah layak digunakan dan aman.",
  },
  {
    q: "Kapan saya perlu mengurus PBG atau SLF?",
    a: "PBG diurus sebelum membangun bangunan baru atau mengubah bangunan yang sudah ada. SLF diurus sebelum bangunan digunakan.",
  },
  {
    q: "Apa saja yang dikerjakan CV. Borisma Karya?",
    a: "Kami menangani konsultasi perizinan, pendampingan teknis dan pemeriksaan lapangan, gambar arsitektur, struktur, dan MEP, pengujian tanah, struktur, dan MEP, sampai pengajuan dan proses sidang hingga izin terbit. Revisi dan pengurusan tambahan juga kami tangani.",
  },
  {
    q: "Berapa biaya dan berapa lama prosesnya?",
    a: "Tergantung jenis, luas, dan kondisi bangunan. Hubungi kami untuk konsultasi awal.",
  },
  {
    q: "Apakah dokumen bangunan saya aman?",
    a: "Ya. Kami memberikan garansi kerahasiaan dokumen untuk setiap pengurusan.",
  },
  {
    q: "Bagaimana cara memulai?",
    a: "Hubungi kami lewat WhatsApp atau telepon, lalu sampaikan kebutuhan dan data bangunan Anda. Setelah itu kami jadwalkan survei dan pengujian lapangan.",
  },
] as const;

/** Foto dokumentasi pemeriksaan lapangan dari brosur (resolusi rendah, ganti saat file asli tersedia). */
export const PBG_PHOTOS = [
  { src: "/assets/images/pbg/lapangan-1.webp", alt: "Pengujian tanah di lokasi bangunan", width: 480, height: 640 },
  { src: "/assets/images/pbg/lapangan-2.webp", alt: "Pemeriksaan lapangan di dalam gudang", width: 480, height: 640 },
  { src: "/assets/images/pbg/lapangan-3.webp", alt: "Pengujian elemen bangunan di lapangan", width: 401, height: 294 },
] as const;
