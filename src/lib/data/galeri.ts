// Foto dokumentasi untuk halaman Galeri.
// Untuk sementara memakai foto yang sudah ada (dari brosur dan company profile).
// Setelah halaman admin dibuat, foto akan dikelola dari sana.

export const GALERI_KATEGORI = ["Pemeriksaan lapangan", "Pelatihan & sosialisasi", "Bangunan terbangun"] as const;

export type GaleriKategori = (typeof GALERI_KATEGORI)[number];

export type GaleriFoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  category: GaleriKategori;
};

export const GALERI: GaleriFoto[] = [
  { src: "/assets/images/pbg/lapangan-1.webp", width: 480, height: 640, alt: "Pengujian tanah di lokasi bangunan", caption: "Pengujian tanah", category: "Pemeriksaan lapangan" },
  { src: "/assets/images/pbg/lapangan-2.webp", width: 480, height: 640, alt: "Pemeriksaan lapangan di dalam gudang", caption: "Pemeriksaan gudang", category: "Pemeriksaan lapangan" },
  { src: "/assets/images/pbg/lapangan-3.webp", width: 401, height: 294, alt: "Pengujian elemen bangunan di lapangan", caption: "Pengujian elemen bangunan", category: "Pemeriksaan lapangan" },
  { src: "/assets/images/proyek/rumah-lansia-sejahtera/01.webp", width: 1600, height: 424, alt: "Bangunan Rumah Lansia Sejahtera di Pematangsiantar", caption: "Rumah Lansia Sejahtera", category: "Bangunan terbangun" },
  { src: "/assets/images/proyek/rumah-lansia-sejahtera/04.webp", width: 846, height: 638, alt: "Selasar Rumah Lansia Sejahtera", caption: "Selasar Rumah Lansia Sejahtera", category: "Bangunan terbangun" },
  { src: "/assets/images/pemberdayaan/e-surat-pelatihan.webp", width: 1225, height: 637, alt: "Pelatihan website desa untuk perangkat desa di Kecamatan Selesai", caption: "Pelatihan website desa E-Surat", category: "Pelatihan & sosialisasi" },
  { src: "/assets/images/pemberdayaan/e-surat-sosialisasi.webp", width: 1600, height: 493, alt: "Sosialisasi website desa kepada perangkat desa", caption: "Sosialisasi website desa", category: "Pelatihan & sosialisasi" },
  { src: "/assets/images/pemberdayaan/payet.webp", width: 1600, height: 781, alt: "Peserta pelatihan payet sedang berlatih", caption: "Pelatihan payet", category: "Pelatihan & sosialisasi" },
  { src: "/assets/images/pemberdayaan/salon.webp", width: 1600, height: 907, alt: "Peserta pelatihan salon berlatih make-up", caption: "Pelatihan salon", category: "Pelatihan & sosialisasi" },
  { src: "/assets/images/pemberdayaan/jamur-tiram.webp", width: 1600, height: 914, alt: "Peserta pelatihan budidaya jamur tiram menyiapkan media tanam", caption: "Pelatihan budidaya jamur tiram", category: "Pelatihan & sosialisasi" },
  { src: "/assets/images/pemberdayaan/menjahit.webp", width: 1600, height: 896, alt: "Peserta pelatihan menjahit tingkat dasar", caption: "Pelatihan menjahit tingkat dasar", category: "Pelatihan & sosialisasi" },
];
