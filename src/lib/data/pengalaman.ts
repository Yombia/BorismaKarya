// Daftar paket pekerjaan CV. Borisma Karya (2005–2024).
// Sumber: tabel "Pengalaman Perusahaan" di company profile (PDF), ditranskripsi otomatis lalu dirapikan.
// subBidang = teks asli dari dokumen; bidang = pengelompokan untuk filter di website.

export type Bidang =
  | "Arsitektur"
  | "Sipil Transportasi"
  | "Sipil"
  | "Sipil Keairan"
  | "Perencanaan Wilayah"
  | "Studi & Penelitian"
  | "Teknologi Informasi";

export type Paket = {
  no: number;
  paket: string;
  subBidang: string;
  bidang: Bidang;
  lokasi: string;
  penggunaJasa: string;
  tahun: number;
  catatan?: string;
};

export const PENGALAMAN: Paket[] = [
  { no: 1, paket: "Pengawasan Kegiatan Program Pemberdayaan Kecamatan Terpadu (P2KT) Kab. Simalungun TA. 2005", subBidang: "Pengembangan Kota dan Wilayah", bidang: "Perencanaan Wilayah", lokasi: "Simalungun", penggunaJasa: "BAPPEDA Kab. Simalungun", tahun: 2005 },
  { no: 2, paket: "Pengawasan Pembangunan USB SMP Negeri 3 Pandan Kecamatan Pandan Kab. Tapanuli Tengah Sebanyak 1 Unit", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Tapanuli Tengah", penggunaJasa: "Dinas Pendidikan Provinsi Sumatera Utara", tahun: 2006 },
  { no: 3, paket: "Perencanaan Infrastruktur Irigasi Kecamatan Sianjur Mulamula", subBidang: "Prasarana Keairan", bidang: "Sipil Keairan", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum Kab. Samosir", tahun: 2006 },
  { no: 4, paket: "Perencanaan Teknik Program Rehabilitasi dan Peningkatan Sarana dan Prasarana Pemerintah Kab. Siantar Utara, Siantar Selatan dan Siantar Barat", subBidang: "Arsitektur Bangunan", bidang: "Arsitektur", lokasi: "Pematangsiantar", penggunaJasa: "Dinas Pekerjaan Umum Pematangsiantar", tahun: 2006 },
  { no: 5, paket: "Perencanaan Pembangunan Menara Pandang dan Landasan Pacu Gantole di Siulakhosa Kec. Simanindo", subBidang: "Arsitektur Bangunan", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Tarukim", tahun: 2006 },
  { no: 6, paket: "Perencanaan Rehab Gedung Wisata Remaja Lagundi Kec. Onan Runggu", subBidang: "Arsitektur Bangunan", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Perhubungan Kab. Samosir", tahun: 2006 },
  { no: 7, paket: "Supervisi/Pengawasan Pembangunan Gedung/Fisik Lanjutan Rumah Sakit Umum (RSU) Perdagangan", subBidang: "Arsitektur Bangunan", bidang: "Arsitektur", lokasi: "Simalungun", penggunaJasa: "Dinas Kesehatan Kab. Simalungun", tahun: 2006 },
  { no: 8, paket: "Pengawasan Teknis Pembangunan 5 Unit Kantor Lurah", subBidang: "Arsitektur Bangunan", bidang: "Arsitektur", lokasi: "Pematangsiantar", penggunaJasa: "Dinas Tata Kota", tahun: 2006 },
  { no: 9, paket: "Studi Kelayakan Pengembangan Eks Open Stage Pangururan Menjadi Pasar UKM Kabupaten Samosir", subBidang: "Jasa Study, Penelitian dan Bantuan Teknik", bidang: "Studi & Penelitian", lokasi: "Samosir", penggunaJasa: "Kantor Koperasi, Usaha Kecil Menengah", tahun: 2006 },
  { no: 10, paket: "Penyusunan dan Pembahasan Master Plan Pembangunan Bidang Lingkungan Hidup, Kebersihan dan Pertamanan Tahap Awal Kabupaten Samosir", subBidang: "Jasa Study, Penelitian dan Bantuan Teknik", bidang: "Studi & Penelitian", lokasi: "Samosir", penggunaJasa: "Dinas Lingkungan Hidup, Kebersihan dan Pertamanan", tahun: 2006 },
  { no: 11, paket: "Studi Perbaikan Kawasan Hutan Kabupaten Samosir", subBidang: "Tata Lingkungan", bidang: "Perencanaan Wilayah", lokasi: "Samosir", penggunaJasa: "BAPPEDA Kab. Samosir", tahun: 2006 },
  { no: 12, paket: "Penyusunan Detail Engineering Design (DED) Keseluruhan Rehab Asrama Mahasiswa Provsu DI Yogyakarta", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Yogyakarta", penggunaJasa: "Dinas Penataan Ruang dan Permukiman Prov. Sumatera Utara", tahun: 2008 },
  { no: 13, paket: "Perencanaan Renovasi Ruang Perawatan Bertingkat Rumah Sakit Jiwa Daerah Sumatera Utara", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Serdang Bedagai", penggunaJasa: "Pemerintah Provinsi Sumatera Utara Rumah Sakit Jiwa Daerah", tahun: 2008 },
  { no: 14, paket: "Perencanaan Teknis Pembangunan Jalan Kabupaten Simalungun", subBidang: "Sipil", bidang: "Sipil", lokasi: "Simalungun", penggunaJasa: "Dinas Pekerjaan Umum Kabupaten Simalungun", tahun: 2008 },
  { no: 15, paket: "Perencanaan Penataan Kawasan Tradisional Bersejarah", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Tata Ruang dan Permukiman", tahun: 2010 },
  { no: 16, paket: "Perencanaan Paranet", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Kehutanan", tahun: 2010 },
  { no: 17, paket: "Perencanaan Pembangunan Sarana dan Prasarana Pariwisata", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Tata Ruang dan Permukiman", tahun: 2011 },
  { no: 18, paket: "Konsultansi Pengawasan Rehabilitasi Gedung KPPN serta Rehabilitasi/Pemeliharaan Pagar dan Halaman KPPN Pematangsiantar", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Pematangsiantar", penggunaJasa: "KPPN Pematangsiantar", tahun: 2011 },
  { no: 19, paket: "Peningkatan Pembangunan Sarana dan Prasarana Pariwisata", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Pariwisata Seni dan Budaya", tahun: 2011 },
  { no: 20, paket: "Perencanaan Kegiatan DAK Bidang Pendidikan", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Pendidikan", tahun: 2011 },
  { no: 21, paket: "Pengawasan Pemugaran Rumah Petugas TMPN Provinsi Sumatera Utara (6 kopel/12 unit)", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Sumatera Utara", penggunaJasa: "Dinas Kesejahteraan dan Sosial", tahun: 2011 },
  { no: 22, paket: "Pemberdayaan Komunitas Adat Terpencil Pengawasan Pembangunan Rumah Komunitas Adat Terpencil (30 unit)", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Sumatera Utara", penggunaJasa: "Dinas Kesejahteraan dan Sosial", tahun: 2011 },
  { no: 23, paket: "Studi Kelayakan Pengembangan Kawasan Pinggiran Kota Pematangsiantar", subBidang: "Jasa Study, Penelitian dan Bantuan Teknik", bidang: "Studi & Penelitian", lokasi: "Pematangsiantar", penggunaJasa: "Badan Perencanaan Pembangunan Daerah (BAPPEDA)", tahun: 2011 },
  { no: 24, paket: "Pengawasan Pembangunan Jalan Tomok–Parmonangan", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2011 },
  { no: 25, paket: "Pengawasan Pembangunan Jalan Sp. Aek Rangat–Sagala", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2011 },
  { no: 26, paket: "Pengawasan Pembangunan Jalan Sumber Dana Belanja Bantuan Keuangan Kepada Kabupaten", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2011 },
  { no: 27, paket: "Pengawasan Teknis Pembangunan Pasar Tradisional Lubuk Pakam", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Deli Serdang", penggunaJasa: "Dinas Perindustrian dan Perdagangan Kabupaten Deli Serdang", tahun: 2011 },
  { no: 28, paket: "Supervisi Penataan Fasilitas Umum Dermaga Pariwisata di Aek Rangat Kecamatan Pangururan Kabupaten Samosir", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Kebudayaan dan Pariwisata Provsu", tahun: 2011 },
  { no: 29, paket: "Supervisi Pembangunan Fasilitas Umum, Pembangunan Tourist Information Center dan Pembangunan Gapura pada Pintu Masuk Parapat pada Kawasan Objek Wisata Parapat Kecamatan Girsang Sipangan Bolon", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Simalungun", penggunaJasa: "Dinas Kebudayaan dan Pariwisata Provsu", tahun: 2011 },
  { no: 30, paket: "Perencanaan Sarana dan Prasarana Pariwisata Kabupaten Samosir", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Tata Ruang, Permukiman, Kebersihan dan Pertamanan", tahun: 2012 },
  { no: 31, paket: "Pengawasan Pembangunan Sarana dan Prasarana Lingkungan Gedung Kantor dan Rumah Dinas Kantor Pengawasan dan Pelayanan Bea Cukai Tipe B Pematangsiantar", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Pematangsiantar", penggunaJasa: "Kantor Pengawasan dan Pelayanan Bea dan Cukai Tipe B Pematangsiantar", tahun: 2012 },
  { no: 32, paket: "Konsultansi Perencanaan BBI", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Pertanian, Perikanan dan Peternakan", tahun: 2012 },
  { no: 33, paket: "Perencanaan Pembangunan Jalan Wilayah Kec. Nainggolan", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2012 },
  { no: 34, paket: "Perencanaan Pembangunan Jalan Sp. Aek Rangat–Sagala", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2012 },
  { no: 35, paket: "Perencanaan Pembangunan Jalan Sp. Limbong–Sagala", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2012 },
  { no: 36, paket: "Pengawasan Lanjutan Pembangunan Pasar Sidikalang", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Dairi", penggunaJasa: "Dinas Cipta Karya dan Tata Ruang", tahun: 2012 },
  { no: 37, paket: "Pengawasan Lanjutan Pembangunan Jalan Menuju Perkantoran Parbaba", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2012 },
  { no: 38, paket: "Penyusunan Teknis (DED) Kawasan Open Stage Pasar Pangururan", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Tata Ruang, Permukiman, Kebersihan dan Pertamanan", tahun: 2012 },
  { no: 39, paket: "Penyusunan DED Kawasan Wisata Pantai Batu Hoda Desa Cinta Dame Kecamatan Simanindo", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Pariwisata Seni dan Budaya", tahun: 2012 },
  { no: 40, paket: "Pengawasan Teknis Renovasi Gedung Kantor Dinas PKD", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Deli Serdang", penggunaJasa: "Dinas Cipta Karya dan Pertambangan Kabupaten Deli Serdang", tahun: 2012 },
  { no: 41, paket: "Perencanaan Sarana dan Prasarana Pariwisata Kabupaten Samosir", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Tata Ruang, Permukiman, Kebersihan dan Pertamanan", tahun: 2013 },
  { no: 42, paket: "Paket III – Perencanaan Jalan Wilayah Kecamatan Pangururan", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2013 },
  { no: 43, paket: "Paket IV – Perencanaan Jalan Wilayah Kecamatan Pangururan", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2013 },
  { no: 44, paket: "Paket V – Perencanaan Jalan Wilayah Kecamatan Pangururan", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2013 },
  { no: 45, paket: "Paket VI – Perencanaan Jalan Wilayah Kecamatan Pangururan", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2013 },
  { no: 46, paket: "Paket VII – Perencanaan Jalan Wilayah Kecamatan Pangururan", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2013 },
  { no: 47, paket: "Paket VIII – Perencanaan Jalan Wilayah Kecamatan Pangururan", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2013 },
  { no: 48, paket: "Paket VIII – Perencanaan Jalan Wilayah Kecamatan Sianjur Mulamula", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2013 },
  { no: 49, paket: "Paket IX – Perencanaan Jalan Wilayah Kecamatan Sianjur Mulamula", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2013 },
  { no: 50, paket: "Paket I – Pengawasan Wilayah Kecamatan Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2013 },
  { no: 51, paket: "Paket II – Pengawasan Wilayah Kecamatan Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2013 },
  { no: 52, paket: "Paket V – Pengawasan Wilayah Kecamatan Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2013 },
  { no: 53, paket: "Paket IV – Pengawasan Wilayah Kecamatan Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2013 },
  { no: 54, paket: "Paket 21 Perencanaan Jalan Wilayah Kecamatan Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2014 },
  { no: 55, paket: "Paket 22 Perencanaan Jalan Wilayah Kecamatan Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2014 },
  { no: 56, paket: "Paket 24 Perencanaan Jalan Wilayah Kecamatan Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2014 },
  { no: 57, paket: "Pra Desain Mual Nai Sogop", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Pariwisata Seni dan Budaya", tahun: 2015 },
  { no: 58, paket: "Pra Desain Pantai Indah Situngkir (PIS)", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Pariwisata Seni dan Budaya", tahun: 2015 },
  { no: 59, paket: "Perencanaan Jalan Wilayah Kecamatan Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2015 },
  { no: 60, paket: "Perencanaan Dyk dan Penataan Lapangan SD dan SMP se-Kabupaten Samosir", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Pendidikan", tahun: 2015 },
  { no: 61, paket: "Pengawasan Pemagaran SD dan SMP", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Pendidikan", tahun: 2015 },
  { no: 62, paket: "Paket 9 Perencanaan Pembangunan Jalan Wilayah II Kec. Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2015 },
  { no: 63, paket: "Perencanaan Pembangunan Gedung Pembibitan dan Pemagaran Keliling Arboretum Aek Natonang", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Pariwisata", tahun: 2015 },
  { no: 64, paket: "Paket 10 Perencanaan Pembangunan Jalan Wilayah II Kec. Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2016 },
  { no: 65, paket: "Paket 11 Perencanaan Pembangunan Jalan Wilayah II Kec. Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2016 },
  { no: 66, paket: "Paket 12 Perencanaan Pembangunan Jalan Wilayah II Kec. Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2016 },
  { no: 67, paket: "Paket 13 Perencanaan Pembangunan Jalan Wilayah II Kec. Palipi", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2016 },
  { no: 68, paket: "Perencanaan DED Lapangan Bola Kecamatan Simanindo", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Sosial, Tenaga Kerja, Pemuda dan Olahraga", tahun: 2016 },
  { no: 69, paket: "Perencanaan DED Dermaga Sumber Sari Simanindo", subBidang: "Sipil", bidang: "Sipil", lokasi: "Samosir", penggunaJasa: "Dinas Perhubungan", tahun: 2016 },
  { no: 70, paket: "Pengawasan Pembangunan Jalan (Paket 29)", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2016 },
  { no: 71, paket: "Review DED Kawasan Batu Hobon Kec. Sianjur Mulamula", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Tarukim K & P", tahun: 2016 },
  { no: 72, paket: "Perencanaan Drainase Kota Nainggolan", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Tarukim K & P", tahun: 2016 },
  { no: 73, paket: "Perencanaan Pengembangan Destinasi Wisata Pea Porohan", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Tarukim K & P", tahun: 2016 },
  { no: 74, paket: "Penyusunan DED Penataan Nai Sogop Kec. Sianjur Mulamula", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Tarukim K & P", tahun: 2016 },
  { no: 75, paket: "Penyusunan DED Objek Wisata Tatea Bulan Kec. Sianjur Mulamula", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Tarukim K & P", tahun: 2016 },
  { no: 76, paket: "Perencanaan Jalan Strategis (Paket - 07)", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2016 },
  { no: 77, paket: "Perencanaan Jalan Strategis (Paket - 08)", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2016 },
  { no: 78, paket: "Perencanaan Jalan Strategis (Paket - 09)", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2016 },
  { no: 79, paket: "Perencanaan Jalan Strategis (Paket - 10)", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2016 },
  { no: 80, paket: "Perencanaan Jalan dan Jembatan (Paket 10)", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2017 },
  { no: 81, paket: "Perencanaan Jalan dan Jembatan (Paket 13)", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2017 },
  { no: 82, paket: "Penyusunan Sistem Tatanan Transportasi Lokal (Tatralok) Kab. Samosir", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2017 },
  { no: 83, paket: "Perencanaan Pembangunan dan Peningkatan Dermaga/Pelabuhan Kabupaten Samosir", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2017 },
  { no: 84, paket: "Penyusunan Database Dermaga/Pelabuhan Kab. Samosir", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2017 },
  { no: 85, paket: "Perencanaan Pembangunan dan Peningkatan Dermaga/Pelabuhan Kabupaten Samosir", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2018, catatan: "[CEK DUPLIKAT] Nama dan tahun sama dengan paket no. 86" },
  { no: 86, paket: "Perencanaan Pembangunan dan Peningkatan Dermaga/Pelabuhan Kabupaten Samosir", subBidang: "Sipil Transportasi", bidang: "Sipil Transportasi", lokasi: "Samosir", penggunaJasa: "Dinas Pekerjaan Umum", tahun: 2018, catatan: "[CEK DUPLIKAT] Nama dan tahun sama dengan paket no. 85" },
  { no: 87, paket: "Pembuatan Website Desa Berbasis E-Surat", subBidang: "IT", bidang: "Teknologi Informasi", lokasi: "Langkat", penggunaJasa: "Pemerintah Kabupaten Langkat Kecamatan Selesai", tahun: 2018 },
  { no: 88, paket: "Jasa Konsultansi Penyusunan Detail Engineering Design (DED) Rumah Lansia Sejahtera", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Simalungun", penggunaJasa: "Rumah Lansia Sejahtera - GKPI", tahun: 2018 },
  { no: 89, paket: "Pilot Proyek Pemanfaatan Rumah Tidak Layak Huni Menjadi Homestay", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Humbang Hasundutan", penggunaJasa: "Dinas PRKPP Provsu", tahun: 2018 },
  { no: 90, paket: "Penyusunan DED Pantai Pandua Kec. Nainggolan", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Samosir", penggunaJasa: "Dinas Pariwisata", tahun: 2019 },
  { no: 91, paket: "Penyusunan Dokumen Pengadaan Tanah/Kajian dalam Rangka Penetapan Lokasi Pengadaan Lahan untuk Pasar Tradisional Jl. Panglima Denai Kelurahan Denai Kecamatan Medan Denai", subBidang: "Perencanaan Wilayah", bidang: "Perencanaan Wilayah", lokasi: "Medan", penggunaJasa: "Dinas Perumahan Kawasan Permukiman dan Penataan Ruang", tahun: 2020 },
  { no: 92, paket: "Pengadaan Tanah/Kajian dalam Rangka Penetapan Lokasi Pengadaan Lahan untuk Ruang Terbuka Hijau (RTH) Jl. Asoka Pasar I Kelurahan Asam Kumbang Kecamatan Medan Selayang", subBidang: "Perencanaan Wilayah", bidang: "Perencanaan Wilayah", lokasi: "Medan", penggunaJasa: "Dinas Perumahan Kawasan Permukiman dan Penataan Ruang", tahun: 2020 },
  { no: 93, paket: "Konsultansi Perencanaan Penyusunan Dokumen Pengadaan Tanah/Kajian dalam Rangka Penetapan Lokasi Pengadaan Lahan untuk Kantor UPT Pemadam Kebakaran Jalan Gaperta Kelurahan Helvetia Kecamatan Medan Helvetia", subBidang: "Perencanaan Wilayah", bidang: "Perencanaan Wilayah", lokasi: "Medan", penggunaJasa: "Dinas Perumahan Kawasan Permukiman dan Penataan Ruang", tahun: 2021 },
  { no: 94, paket: "Jasa Konsultansi Penyusunan Feasibility Study Pembangunan Pusat Layanan Usaha Terpadu Koperasi, Usaha Mikro, Kecil", subBidang: "Perencanaan Wilayah", bidang: "Perencanaan Wilayah", lokasi: "Dairi", penggunaJasa: "Dinas Perindustrian Perdagangan, Koperasi dan UKM", tahun: 2021 },
  { no: 95, paket: "Jasa Konsultansi Penyusunan Feasibility Study Pembangunan Pusat Layanan Usaha Terpadu Koperasi, Usaha Mikro, Kecil", subBidang: "Perencanaan Wilayah", bidang: "Perencanaan Wilayah", lokasi: "Humbang Hasundutan", penggunaJasa: "Dinas Koperasi, Perdagangan, Tenaga Kerja", tahun: 2022 },
  { no: 96, paket: "Konsultansi Penyusunan Masterplan Taman Baruas Indah", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Padangsidimpuan", penggunaJasa: "Taman Baruas Indah", tahun: 2024 },
  { no: 97, paket: "Jasa Konsultansi Penyusunan Detail Engineering Design (DED) Rumah Agave", subBidang: "Arsitektur", bidang: "Arsitektur", lokasi: "Pematangsiantar", penggunaJasa: "Perorangan" /* nama pemilik rumah pribadi tidak ditampilkan */, tahun: 2024 },
];

/** Jumlah paket per kabupaten/kota, urut dari terbanyak. */
export function hitungPerLokasi(data: Paket[] = PENGALAMAN) {
  const map = new Map<string, number>();
  for (const p of data) map.set(p.lokasi, (map.get(p.lokasi) ?? 0) + 1);
  return [...map.entries()].map(([lokasi, jumlah]) => ({ lokasi, jumlah })).sort((a, b) => b.jumlah - a.jumlah);
}

/** Jumlah paket per bidang, urut dari terbanyak. */
export function hitungPerBidang(data: Paket[] = PENGALAMAN) {
  const map = new Map<string, number>();
  for (const p of data) map.set(p.bidang, (map.get(p.bidang) ?? 0) + 1);
  return [...map.entries()].map(([bidang, jumlah]) => ({ bidang, jumlah })).sort((a, b) => b.jumlah - a.jumlah);
}

export const RENTANG_TAHUN = {
  awal: Math.min(...PENGALAMAN.map((p) => p.tahun)),
  akhir: Math.max(...PENGALAMAN.map((p) => p.tahun)),
};
