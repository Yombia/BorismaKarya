// File ini dibuat otomatis dari PDF company profile (halaman 17–33). Jangan diedit manual;
// ganti file gambar di public/assets/images/proyek/<slug>/ saat file asli dari klien diterima.

export type ImageKind = "render" | "gambar" | "foto";

export type RawProjectImage = { src: string; width: number; height: number; caption: string; kind: ImageKind };

export const PROJECT_IMAGES: Record<string, RawProjectImage[]> = {
  "lapangan-sepakbola-ambarita": [
    { src: "/assets/images/proyek/lapangan-sepakbola-ambarita/01.webp", width: 1125, height: 1150, caption: "Siteplan Lapangan Bola Level Lantai Tribun", kind: "gambar" },
    { src: "/assets/images/proyek/lapangan-sepakbola-ambarita/02.webp", width: 1600, height: 159, caption: "Tampak Bagian Dalam (Sisi Barat Daya)", kind: "gambar" },
    { src: "/assets/images/proyek/lapangan-sepakbola-ambarita/03.webp", width: 1600, height: 187, caption: "Tampak Bagian Luar (Sisi Tenggara)", kind: "gambar" },
    { src: "/assets/images/proyek/lapangan-sepakbola-ambarita/04.webp", width: 833, height: 495, caption: "Potongan E–E", kind: "gambar" },
    { src: "/assets/images/proyek/lapangan-sepakbola-ambarita/05.webp", width: 833, height: 491, caption: "Potongan B–B", kind: "gambar" },
  ],
  "open-stage-pangururan": [
    { src: "/assets/images/proyek/open-stage-pangururan/01.webp", width: 1380, height: 746, caption: "Perspektif kawasan", kind: "render" },
    { src: "/assets/images/proyek/open-stage-pangururan/02.webp", width: 1584, height: 1092, caption: "Site Plan Open Stage Pangururan", kind: "gambar" },
    { src: "/assets/images/proyek/open-stage-pangururan/03.webp", width: 479, height: 483, caption: "Tampak Depan", kind: "gambar" },
    { src: "/assets/images/proyek/open-stage-pangururan/04.webp", width: 925, height: 550, caption: "Potongan Memanjang", kind: "gambar" },
    { src: "/assets/images/proyek/open-stage-pangururan/05.webp", width: 421, height: 509, caption: "Tampak Depan Sopo", kind: "gambar" },
    { src: "/assets/images/proyek/open-stage-pangururan/06.webp", width: 546, height: 450, caption: "Tampak Samping Sopo", kind: "gambar" },
    { src: "/assets/images/proyek/open-stage-pangururan/07.webp", width: 541, height: 450, caption: "Potongan Melintang Sopo", kind: "gambar" },
  ],
  "pea-porohan": [
    { src: "/assets/images/proyek/pea-porohan/01.webp", width: 1600, height: 801, caption: "Masterplan Pea Porohan", kind: "gambar" },
    { src: "/assets/images/proyek/pea-porohan/02.webp", width: 1600, height: 496, caption: "Potongan Site A–A", kind: "gambar" },
    { src: "/assets/images/proyek/pea-porohan/03.webp", width: 1600, height: 420, caption: "Potongan Site B–B", kind: "gambar" },
  ],
  "air-terjun-nai-sogop": [
    { src: "/assets/images/proyek/air-terjun-nai-sogop/01.webp", width: 1600, height: 1169, caption: "Masterplan", kind: "gambar" },
    { src: "/assets/images/proyek/air-terjun-nai-sogop/02.webp", width: 1279, height: 713, caption: "Denah Jembatan Penyeberangan", kind: "gambar" },
    { src: "/assets/images/proyek/air-terjun-nai-sogop/03.webp", width: 1279, height: 509, caption: "Potongan A–A Jembatan", kind: "gambar" },
    { src: "/assets/images/proyek/air-terjun-nai-sogop/04.webp", width: 1600, height: 313, caption: "Potongan A–A, B–B, dan C–C", kind: "gambar" },
  ],
  "batu-hobon": [
    { src: "/assets/images/proyek/batu-hobon/01.webp", width: 1559, height: 1600, caption: "Masterplan", kind: "gambar" },
    { src: "/assets/images/proyek/batu-hobon/02.webp", width: 1300, height: 971, caption: "Potongan Tembok Penahan Tanah (TPT/Dyk)", kind: "gambar" },
  ],
  "tatea-bulan": [
    { src: "/assets/images/proyek/tatea-bulan/01.webp", width: 1151, height: 1600, caption: "Masterplan", kind: "gambar" },
    { src: "/assets/images/proyek/tatea-bulan/02.webp", width: 809, height: 542, caption: "Denah Tangga (A)", kind: "gambar" },
    { src: "/assets/images/proyek/tatea-bulan/03.webp", width: 950, height: 684, caption: "Potongan (A)", kind: "gambar" },
    { src: "/assets/images/proyek/tatea-bulan/04.webp", width: 633, height: 683, caption: "Denah Pedestrian 1", kind: "gambar" },
    { src: "/assets/images/proyek/tatea-bulan/05.webp", width: 633, height: 704, caption: "Denah Pedestrian 2", kind: "gambar" },
  ],
  "balai-benih-ikan": [
    { src: "/assets/images/proyek/balai-benih-ikan/01.webp", width: 1070, height: 413, caption: "Gedung Serba Guna: Tampak Samping", kind: "gambar" },
    { src: "/assets/images/proyek/balai-benih-ikan/02.webp", width: 558, height: 413, caption: "Gedung Serba Guna: Tampak Depan", kind: "gambar" },
    { src: "/assets/images/proyek/balai-benih-ikan/03.webp", width: 1009, height: 684, caption: "Gedung Serba Guna: Potongan Memanjang", kind: "gambar" },
    { src: "/assets/images/proyek/balai-benih-ikan/04.webp", width: 767, height: 537, caption: "Bangsal Pembibitan: Tampak Depan", kind: "gambar" },
    { src: "/assets/images/proyek/balai-benih-ikan/05.webp", width: 1017, height: 517, caption: "Bangsal Pembibitan: Tampak Samping", kind: "gambar" },
    { src: "/assets/images/proyek/balai-benih-ikan/06.webp", width: 1246, height: 605, caption: "Bangsal Pembibitan: Potongan Memanjang", kind: "gambar" },
    { src: "/assets/images/proyek/balai-benih-ikan/07.webp", width: 1184, height: 642, caption: "Bangsal Pembibitan: Potongan Melintang", kind: "gambar" },
  ],
  "rumah-lansia-sejahtera": [
    { src: "/assets/images/proyek/rumah-lansia-sejahtera/01.webp", width: 1600, height: 424, caption: "Foto bangunan", kind: "foto" },
    { src: "/assets/images/proyek/rumah-lansia-sejahtera/02.webp", width: 1600, height: 321, caption: "Tampak Depan", kind: "render" },
    { src: "/assets/images/proyek/rumah-lansia-sejahtera/03.webp", width: 1579, height: 650, caption: "Perspektif selasar", kind: "render" },
    { src: "/assets/images/proyek/rumah-lansia-sejahtera/04.webp", width: 846, height: 638, caption: "Foto selasar", kind: "foto" },
  ],
  "long-beach-pangururan": [
    { src: "/assets/images/proyek/long-beach-pangururan/01.webp", width: 1600, height: 994, caption: "Perspektif Area Tepi Air", kind: "render" },
    { src: "/assets/images/proyek/long-beach-pangururan/02.webp", width: 896, height: 587, caption: "Perspektif Area Outdoor", kind: "render" },
    { src: "/assets/images/proyek/long-beach-pangururan/03.webp", width: 883, height: 587, caption: "Perspektif Chapel", kind: "render" },
    { src: "/assets/images/proyek/long-beach-pangururan/04.webp", width: 617, height: 509, caption: "Perspektif", kind: "render" },
    { src: "/assets/images/proyek/long-beach-pangururan/05.webp", width: 621, height: 509, caption: "Perspektif", kind: "render" },
  ],
  "pantai-pandua": [
    { src: "/assets/images/proyek/pantai-pandua/01.webp", width: 1536, height: 864, caption: "Perspektif Keseluruhan Kawasan", kind: "render" },
    { src: "/assets/images/proyek/pantai-pandua/02.webp", width: 1600, height: 830, caption: "Perspektif tepi pantai", kind: "render" },
    { src: "/assets/images/proyek/pantai-pandua/03.webp", width: 1167, height: 442, caption: "Area Pedestrian", kind: "render" },
    { src: "/assets/images/proyek/pantai-pandua/04.webp", width: 1167, height: 450, caption: "Area Pedestrian", kind: "render" },
  ],
  "dermaga-wisata": [
    { src: "/assets/images/proyek/dermaga-wisata/01.webp", width: 1600, height: 719, caption: "Perspektif", kind: "render" },
    { src: "/assets/images/proyek/dermaga-wisata/02.webp", width: 1158, height: 645, caption: "Tampak Depan", kind: "gambar" },
    { src: "/assets/images/proyek/dermaga-wisata/03.webp", width: 1550, height: 679, caption: "Potongan", kind: "gambar" },
    { src: "/assets/images/proyek/dermaga-wisata/04.webp", width: 608, height: 359, caption: "Perspektif", kind: "render" },
    { src: "/assets/images/proyek/dermaga-wisata/05.webp", width: 625, height: 359, caption: "Perspektif", kind: "render" },
    { src: "/assets/images/proyek/dermaga-wisata/06.webp", width: 608, height: 359, caption: "Perspektif", kind: "render" },
  ],
  "taman-baruas-indah": [
    { src: "/assets/images/proyek/taman-baruas-indah/01.webp", width: 1600, height: 648, caption: "Perspektif Keseluruhan Kawasan", kind: "render" },
    { src: "/assets/images/proyek/taman-baruas-indah/02.webp", width: 942, height: 496, caption: "Perspektif Area Sekitar Kolam Renang", kind: "render" },
    { src: "/assets/images/proyek/taman-baruas-indah/03.webp", width: 942, height: 479, caption: "Perspektif Area Sekitar Kolam Renang", kind: "render" },
    { src: "/assets/images/proyek/taman-baruas-indah/04.webp", width: 863, height: 437, caption: "Bangunan Utama", kind: "render" },
    { src: "/assets/images/proyek/taman-baruas-indah/05.webp", width: 871, height: 437, caption: "Food Court & Gazebo", kind: "render" },
    { src: "/assets/images/proyek/taman-baruas-indah/06.webp", width: 863, height: 450, caption: "Eksterior Restoran", kind: "render" },
    { src: "/assets/images/proyek/taman-baruas-indah/07.webp", width: 871, height: 450, caption: "Kolam Renang & Restoran", kind: "render" },
  ],
  "s-house-palipi": [
    { src: "/assets/images/proyek/s-house-palipi/01.webp", width: 1600, height: 346, caption: "Tampak Samping", kind: "gambar" },
    { src: "/assets/images/proyek/s-house-palipi/02.webp", width: 509, height: 1600, caption: "Denah", kind: "gambar" },
    { src: "/assets/images/proyek/s-house-palipi/03.webp", width: 779, height: 516, caption: "Tampak Depan", kind: "gambar" },
    { src: "/assets/images/proyek/s-house-palipi/04.webp", width: 721, height: 500, caption: "Tampak Belakang", kind: "gambar" },
    { src: "/assets/images/proyek/s-house-palipi/05.webp", width: 842, height: 687, caption: "Potongan Melintang", kind: "gambar" },
  ],
  "pantai-indah-situngkir": [
    { src: "/assets/images/proyek/pantai-indah-situngkir/01.webp", width: 1600, height: 887, caption: "Perspektif Kawasan Pantai Indah Situngkir", kind: "render" },
    { src: "/assets/images/proyek/pantai-indah-situngkir/02.webp", width: 1038, height: 595, caption: "Perspektif kawasan", kind: "render" },
    { src: "/assets/images/proyek/pantai-indah-situngkir/03.webp", width: 1137, height: 595, caption: "Perspektif kawasan", kind: "render" },
    { src: "/assets/images/proyek/pantai-indah-situngkir/04.webp", width: 987, height: 708, caption: "Perspektif Fasilitas Pendukung", kind: "render" },
  ],
  "agave-house": [
    { src: "/assets/images/proyek/agave-house/01.webp", width: 1421, height: 904, caption: "Perspektif", kind: "render" },
    { src: "/assets/images/proyek/agave-house/02.webp", width: 829, height: 408, caption: "Perspektif", kind: "render" },
    { src: "/assets/images/proyek/agave-house/03.webp", width: 829, height: 408, caption: "Perspektif teras", kind: "render" },
    { src: "/assets/images/proyek/agave-house/04.webp", width: 829, height: 408, caption: "Perspektif interior", kind: "render" },
    { src: "/assets/images/proyek/agave-house/05.webp", width: 829, height: 408, caption: "Perspektif interior", kind: "render" },
    { src: "/assets/images/proyek/agave-house/06.webp", width: 1600, height: 911, caption: "Denah Lt. 1 dan Lt. 2", kind: "gambar" },
  ],
  "komplek-bj-property": [
    { src: "/assets/images/proyek/komplek-bj-property/01.webp", width: 1042, height: 500, caption: "Perspektif Ruas Jalan Komplek", kind: "render" },
    { src: "/assets/images/proyek/komplek-bj-property/02.webp", width: 883, height: 1600, caption: "Masterplan", kind: "gambar" },
    { src: "/assets/images/proyek/komplek-bj-property/03.webp", width: 1042, height: 580, caption: "Perspektif Tipe 54", kind: "render" },
    { src: "/assets/images/proyek/komplek-bj-property/04.webp", width: 1042, height: 575, caption: "Perspektif Tipe 70", kind: "render" },
    { src: "/assets/images/proyek/komplek-bj-property/05.webp", width: 550, height: 829, caption: "Denah Tipe 70", kind: "gambar" },
    { src: "/assets/images/proyek/komplek-bj-property/06.webp", width: 467, height: 829, caption: "Denah Tipe 54", kind: "gambar" },
  ],
  "bmg-house": [
    { src: "/assets/images/proyek/bmg-house/01.webp", width: 1600, height: 634, caption: "Perspektif eksterior", kind: "render" },
    { src: "/assets/images/proyek/bmg-house/02.webp", width: 821, height: 454, caption: "Perspektif Eksterior BMG House", kind: "render" },
    { src: "/assets/images/proyek/bmg-house/03.webp", width: 821, height: 488, caption: "Perspektif Eksterior BMG House", kind: "render" },
    { src: "/assets/images/proyek/bmg-house/04.webp", width: 1208, height: 883, caption: "Perspektif Interior BMG House", kind: "render" },
    { src: "/assets/images/proyek/bmg-house/05.webp", width: 1070, height: 1183, caption: "3D Denah", kind: "gambar" },
  ],
};
