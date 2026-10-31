// Portofolio CV. Borisma Karya: 17 proyek dari bagian "Portfolio Pekerjaan" di company profile (hal. 17–33).
// Teks konteks, tantangan, dan konsep diturunkan dari "Konsep Desain" di dokumen, dirapikan tanpa menambah fakta.
// Tahun, pengguna jasa, dan lingkup diambil dari tabel pengalaman (no. paket di `paketNo`) bila proyeknya tercantum.
// Gambar diambil dari PDF (imageSource) sampai file asli dari klien diterima.

import { PROJECT_IMAGES, type ImageKind } from "./project-images";

export type ProjectCategory = "Kawasan Wisata & Budaya" | "Fasilitas Publik & Sosial" | "Hunian";

export const PROJECT_CATEGORIES: ProjectCategory[] = ["Kawasan Wisata & Budaya", "Fasilitas Publik & Sosial", "Hunian"];

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  kind: ImageKind;
};

export type Project = {
  slug: string;
  title: string;
  /** Kecamatan/kota. Kosong bila tidak disebut di dokumen. */
  location?: string;
  regency: string;
  year?: number;
  client?: string;
  scope: string;
  category: ProjectCategory;
  featured: boolean;
  /** Nomor paket di tabel pengalaman, bila ada. */
  paketNo?: number;
  summary: string;
  context: string;
  challenge: string;
  concept: string[];
  images: ProjectImage[];
  imageSource: "pdf-company-profile";
};

type ProjectInput = Omit<Project, "images" | "imageSource">;

const lowerFirst = (s: string) => (/^[A-Z][a-z]/.test(s) ? s[0].toLowerCase() + s.slice(1) : s);

function withImages(p: ProjectInput): Project {
  const images = (PROJECT_IMAGES[p.slug] ?? []).map((img) => {
    const what = lowerFirst(img.caption);
    const alt =
      img.kind === "gambar"
        ? `Gambar kerja ${what}, ${p.title}`
        : img.kind === "render"
          ? `Render ${what}, ${p.title}`
          : `${img.caption}, ${p.title}`;
    return { ...img, alt };
  });
  return { ...p, images, imageSource: "pdf-company-profile" };
}

const DATA: ProjectInput[] = [
  // ——— Kawasan Wisata & Budaya ———
  {
    slug: "pantai-pandua",
    title: "Kawasan Pantai Pandua",
    location: "Nainggolan",
    regency: "Kabupaten Samosir",
    year: 2019,
    client: "Dinas Pariwisata",
    scope: "DED",
    category: "Kawasan Wisata & Budaya",
    featured: true,
    paketNo: 90,
    summary: "Penataan pesisir di muara Sungai Silinta, memadukan perkampungan yang sudah ada dengan fasilitas wisata.",
    context:
      "Wisata pantai di Kabupaten Samosir selama ini tumbuh di Kecamatan Simanindo dan Kecamatan Pangururan, padahal kecamatan lain juga memiliki potensi. Pantai Pandua di Kecamatan Nainggolan adalah muara Sungai Silinta, dengan potensi besar dari sungai dan danau.",
    challenge: "Pesisir perlu ditata menjadi kawasan wisata yang menyatu dengan perkampungan yang sudah ada.",
    concept: [
      "Pesisir ditata melalui pembersihan lahan dan penimbunan pasir, lalu dilengkapi restoran, kafe, gazebo, jembatan, dan jogging track. Desain juga menyediakan beberapa spot foto dengan pemandangan ke Danau Toba.",
      "Perkampungan yang sudah ada dijadikan bagian dari kawasan wisata untuk memperkuat kesan tradisional.",
    ],
  },
  {
    slug: "open-stage-pangururan",
    title: "Kawasan Open Stage Pangururan",
    location: "Onan Lama, Pangururan",
    regency: "Kabupaten Samosir",
    year: 2012,
    client: "Dinas Tata Ruang, Permukiman, Kebersihan dan Pertamanan",
    scope: "DED",
    category: "Kawasan Wisata & Budaya",
    featured: true,
    paketNo: 38,
    summary: "Deretan rumah Batak dan sopo membentuk alaman (pekarangan) kampung Batak di jantung Kota Pangururan.",
    context:
      "Kawasan Open Stage Pangururan adalah lahan milik Pemerintah Kabupaten Samosir di jantung Kota Pangururan, tepatnya di Onan Lama.",
    challenge: "Akses masuk ke kawasan ini tertutup oleh deretan ruko di sepanjang Jalan Sisingamangaraja dan Jalan FL Tobing.",
    concept: [
      "Lahan yang tertutup ini direncanakan dengan konsep perkampungan Batak untuk kawasan wisata, lengkap dengan deretan kios suvenir serta kios makanan dan minuman.",
      "Sebagian lahan diisi deretan rumah Batak di satu sisi dan deretan sopo di seberangnya, sehingga terbentuk alaman (pekarangan) kampung Batak. Kawasan juga dilengkapi restoran, beberapa gazebo, dan lapangan parkir.",
      "Suasana kampung Batak dipadukan dengan aliran Sungai Sioto sebagai daya tarik bagi wisatawan.",
    ],
  },
  {
    slug: "pea-porohan",
    title: "Destinasi Wisata Pea Porohan",
    regency: "Kabupaten Samosir",
    year: 2016,
    client: "Dinas Tarukim K & P",
    scope: "Perencanaan pengembangan",
    category: "Kawasan Wisata & Budaya",
    featured: false,
    paketNo: 73,
    summary: "Pengembangan danau di atas danau seluas 14,67 Ha dengan bangunan seminimal mungkin agar pesona danau tetap utama.",
    context:
      "Salah satu keunikan Pulau Samosir adalah danau di atas danau. Salah satunya Danau Pea Porohan, dengan luas 14,67 Ha.",
    challenge: "Pesona danau harus tetap bisa dinikmati sepenuhnya, sehingga jumlah bangunan perlu dibatasi.",
    concept: [
      "Perencanaan menonjolkan pesona danau. Danau dikelilingi jogging track yang dilengkapi gazebo sebagai tempat istirahat dan pohon peneduh.",
      "Bangunan sengaja tidak banyak. Bangunan pelengkap hanya berupa restoran, fasilitas parkir, dan toilet umum.",
    ],
  },
  {
    slug: "air-terjun-nai-sogop",
    title: "Penataan Air Terjun Nai Sogop",
    location: "Sianjur Mulamula",
    regency: "Kabupaten Samosir",
    year: 2016,
    client: "Dinas Tarukim K & P",
    scope: "DED",
    category: "Kawasan Wisata & Budaya",
    featured: false,
    paketNo: 74,
    summary: "Jalur bertangga dan jembatan menuju air terjun yang disakralkan, dengan fasilitas penunjang di permukiman warga.",
    context:
      "Air Terjun Nai Sogop berada di Kawasan Sianjur Mulamula, yang dikenal sebagai pusat awal peradaban Batak. Airnya jatuh dari ketinggian sekitar 40 meter dan langsung mengalir ke sungai. Di tempat ini juga ada legenda kisah cinta sejati yang dipercaya memiliki nilai sakral.",
    challenge: "Jalan menuju air terjun mendaki dan cukup terjal. Di sisi lain, kesakralan tempat ini harus tetap terjaga.",
    concept: [
      "Perencanaan meliputi jalan setapak bertangga menuju air terjun, jembatan penghubung kedua sisi sungai, dan bangunan Situs Nai Sogop.",
      "Untuk menjaga kesakralan, fasilitas pendukung seperti lapangan parkir, toilet, dan homestay ditempatkan di permukiman penduduk. Penempatan ini juga mendorong UMKM pariwisata setempat.",
    ],
  },
  {
    slug: "batu-hobon",
    title: "Kawasan Batu Hobon",
    location: "Sianjur Mulamula",
    regency: "Kabupaten Samosir",
    year: 2016,
    client: "Dinas Tarukim K & P",
    scope: "Review DED",
    category: "Kawasan Wisata & Budaya",
    featured: true,
    paketNo: 71,
    summary: "Penataan situs sakral dengan tembok penahan tanah bertingkat dan ruang terbuka untuk ritus budaya.",
    context:
      "Batu Hobon adalah peti batu sakral di Kecamatan Sianjur Mulamula, Kabupaten Samosir. Menurut cerita yang beredar, peti ini pernah dicoba dibuka paksa oleh Belanda dengan bom, tetapi tidak terbuka.",
    challenge: "Kawasan ini adalah areal sakral, dan tebing di sekitarnya perlu diamankan.",
    concept: [
      "Tebing diamankan dengan tembok penahan tanah (TPT/dyk) bertingkat yang sekaligus menambah kesan aman dan sakral.",
      "Kawasan dilengkapi gapura, pos retribusi, area parkir, kios suvenir, serta ruang terbuka luas di depan Batu Hobon untuk pelaksanaan ritus budaya.",
      "Bangunan ditempatkan mengikuti kontur tanah sehingga tidak saling menghalangi pandangan.",
    ],
  },
  {
    slug: "tatea-bulan",
    title: "Objek Wisata Tatea Bulan",
    location: "Sianjur Mulamula",
    regency: "Kabupaten Samosir",
    year: 2016,
    client: "Dinas Tarukim K & P",
    scope: "DED",
    category: "Kawasan Wisata & Budaya",
    featured: false,
    paketNo: 75,
    summary: "Penataan situs budaya yang sakral tanpa menghalangi pemandangan ke Lembah Limbong dan Lembah Sagala.",
    context:
      "Tatea Bulan adalah destinasi wisata budaya yang sakral di Kecamatan Sianjur Mulamula, Kabupaten Samosir. Dari tempat ini terlihat Lembah Limbong dan Lembah Sagala. Awalnya destinasi ini dibangun secara swadaya oleh masyarakat, berupa satu sopo terbuka berisi patung-patung legenda leluhur Batak.",
    challenge: "Kawasan perlu ditata dan diberi peneduh, tetapi pemandangan ke kedua lembah tidak boleh terhalang.",
    concept: [
      "Pemerintah Kabupaten Samosir merevitalisasi tempat ini dengan penataan jalan masuk dan keluar, lapangan parkir, jalur pedestrian, plaza atau ruang terbuka, serta fasilitas pendukung seperti toilet.",
      "Vegetasi peneduh ditanam dengan mempertimbangkan agar tidak menghalangi pandangan ke Lembah Limbong dan Lembah Sagala.",
    ],
  },
  {
    slug: "long-beach-pangururan",
    title: "Long Beach Pangururan",
    location: "Tano Ponggol–Tandarabun, Pangururan",
    regency: "Kabupaten Samosir",
    scope: "Studi kelayakan dan DED",
    category: "Kawasan Wisata & Budaya",
    featured: false,
    summary: "DED pantai sepanjang 22 km dari Tano Ponggol sampai Tandarabun, agar pantai tetap terbuka untuk umum.",
    context:
      "Pulau Samosir memiliki garis pantai Danau Toba sepanjang sekitar 120 kilometer. Perencanaan ini diawali dengan studi kelayakan, lalu dilanjutkan dengan Detail Engineering Design (DED) pantai sepanjang 22 kilometer dari Tano Ponggol sampai Tandarabun.",
    challenge:
      "Di kawasan Tuktuk dan sekitarnya, banyak pantai diprivatisasi oleh hotel. Perencanaan ini perlu memastikan ada kawasan pantai yang tetap terbuka untuk umum.",
    concept: [
      "Garis pantai disiapkan sebagai hamparan pasir yang bersih dan aman, dengan pemasangan bronjong, dyk, dan penimbunan tanah di titik-titik yang dibutuhkan.",
      "Jogging track dibangun 50 meter dari bibir pantai. Bangunan utama dan bangunan pendukung juga ditempatkan dengan memperhatikan aturan sempadan danau.",
    ],
  },
  {
    slug: "pantai-indah-situngkir",
    title: "Kawasan Pantai Indah Situngkir",
    location: "Pangururan",
    regency: "Kabupaten Samosir",
    year: 2015,
    client: "Dinas Pariwisata Seni dan Budaya",
    scope: "Pra desain",
    category: "Kawasan Wisata & Budaya",
    featured: false,
    paketNo: 58,
    summary: "Pantai tanpa bangunan dalam jarak 50 meter dari garis sempadan, dengan landmark dari tradisi menangkap ikan mamantom.",
    context:
      "Pantai Indah Situngkir (PIS) terletak di Kecamatan Pangururan, Kabupaten Samosir. Pantai ini bersebelahan dengan Pantai Pasir Putih Parbaba, yang dikelola secara swadaya oleh warga tanpa perencanaan sebelumnya.",
    challenge: "Berkaca dari pantai di sebelahnya, Pantai Indah Situngkir diharapkan dikelola secara terencana.",
    concept: [
      "Tidak ada bangunan dalam jarak 50 meter dari garis sempadan pantai. Pantai direncanakan menjadi area terbuka hijau dengan landmark, menara pengawas, jogging track, taman, area parkir, dermaga wisata, dan spot foto.",
      "Bangunan permanen berupa kios, kafe, dan gazebo ditempatkan 50 meter dari pantai.",
      "Landmark pantai diambil dari aktivitas tradisional mamantom, yaitu menangkap ikan dengan melempar tombak yang diikat dengan tali.",
    ],
  },
  {
    slug: "dermaga-wisata",
    title: "Dermaga Wisata",
    regency: "Kabupaten Samosir",
    scope: "Perencanaan",
    category: "Kawasan Wisata & Budaya",
    featured: false,
    summary: "Dermaga yang memperhitungkan naik-turunnya permukaan Danau Toba, dengan ornamen tradisional Batak.",
    context:
      "Pada 2017 terdapat 52 dermaga di Kabupaten Samosir, beberapa di antaranya dermaga wisata. Perencanaan meliputi bangunan dermaga, akses keluar-masuk, gapura, lahan parkir, serta bangunan pendukung seperti toilet umum dan bangunan pengelola.",
    challenge:
      "Permukaan Danau Toba naik turun, biasanya di kisaran 903–909 meter di atas permukaan laut (mdpl). Struktur dermaga juga harus mudah dikerjakan dan mudah dirawat.",
    concept: [
      "Desain dermaga memperhitungkan naik-turunnya permukaan danau.",
      "Struktur dipilih agar mudah dalam pengerjaan dan perawatan.",
      "Ornamen tradisional Batak diterapkan pada gapura, papan petunjuk, dan bangunan pendukung.",
    ],
  },
  {
    slug: "taman-baruas-indah",
    title: "Taman Baruas Indah",
    location: "Kecamatan Batunadua",
    regency: "Kota Padangsidimpuan",
    year: 2024,
    client: "Taman Baruas Indah",
    scope: "Masterplan",
    category: "Kawasan Wisata & Budaya",
    featured: true,
    paketNo: 96,
    summary: "Masterplan kawasan wisata 2,3 Ha yang memadukan kolam renang ukuran olimpiade, restoran, penginapan, dan taman bunga.",
    context:
      "Taman Baruas Indah adalah kawasan wisata dengan lahan seluas 2,3 Ha. Di lahan ini sudah ada kolam renang berukuran olimpiade.",
    challenge: "Masterplan perlu memadukan kolam renang yang sudah ada dengan pengembangan wisata terpadu.",
    concept: [
      "Perencanaan meliputi rumah utama, penginapan, restoran, food court, gazebo, fasilitas pendukung (rumah pompa air, pengolahan air, gudang, laundry, dan pos jaga), serta akses jalan keluar-masuk.",
      "Kawasan juga direncanakan memiliki taman bunga seluas sekitar 1 Ha untuk pengunjung, serta wisata sungai yang berbatasan langsung dengan lahan.",
      "Perpaduan kebun bunga, kolam renang, sungai, lahan berbukit, dan vegetasi yang lebat menciptakan suasana alam yang mengajak pengunjung beraktivitas fisik atau sekadar bersantai.",
    ],
  },

  // ——— Fasilitas Publik & Sosial ———
  {
    slug: "rumah-lansia-sejahtera",
    title: "Rumah Lansia Sejahtera",
    location: "Komplek Mamre GKPI",
    regency: "Kota Pematangsiantar",
    year: 2018,
    client: "Rumah Lansia Sejahtera – GKPI",
    scope: "DED",
    category: "Fasilitas Publik & Sosial",
    featured: true,
    paketNo: 88,
    summary: "Panti lansia GKPI yang dirancang dalam blok-blok agar bisa dibangun bertahap, dengan kamar mandi standar lansia dan difabel.",
    context:
      "Rumah Lansia Sejahtera (Lantera) adalah panti jompo yang didirikan Gereja Kristen Protestan Indonesia (GKPI) di Komplek Mamre GKPI, Jalan Ulakma Sinaga, Pematangsiantar, pada tahun 2018.",
    challenge: "Anggaran pembangunan terbatas, sementara bangunan harus nyaman dan mudah diakses oleh penghuni lansia.",
    concept: [
      "Sejak awal, masterplan dibuat berupa blok-blok bangunan yang bisa dibangun secara bertahap: blok kamar tidur wanita, blok kamar tidur pria, aula yang juga menjadi ruang makan dan ruang serbaguna, perpustakaan, ruang duduk, ruang pengelola, serta ruang pendukung (dapur, laundry, gudang).",
      "Desain mengutamakan kenyamanan dan aksesibilitas bagi lansia. Bukaan, sirkulasi udara, dan pencahayaan diatur agar kamar tidak lembap dan sehat untuk ditinggali.",
      "Setiap kamar memiliki toilet yang dirancang sesuai standar kamar mandi difabel dan lansia, mulai dari ukuran ruang yang cukup untuk kursi roda hingga pegangan besi bagi penggunanya.",
    ],
  },
  {
    slug: "lapangan-sepakbola-ambarita",
    title: "Lapangan Sepakbola Ambarita",
    location: "Ambarita, Simanindo",
    regency: "Kabupaten Samosir",
    // [KONFIRMASI] Dicocokkan dengan paket no. 68 "Perencanaan DED Lapangan Bola Kecamatan Simanindo" (2016).
    year: 2016,
    client: "Dinas Sosial, Tenaga Kerja, Pemuda dan Olahraga",
    scope: "DED",
    paketNo: 68,
    category: "Fasilitas Publik & Sosial",
    featured: false,
    summary: "Lapangan dengan tribun berbentuk huruf U, dirancang menyesuaikan lahan yang berbatasan langsung dengan rumah warga.",
    context:
      "Lapangan Sepakbola Ambarita berada di Kecamatan Simanindo, Kabupaten Samosir, di atas lahan milik Pemerintah Kabupaten Samosir. Lapangan ini terletak di sudut persimpangan Jalan Pelabuhan Ambarita dan Jalan Tanah Lapang.",
    challenge:
      "Salah satu sisi lapangan berbatasan langsung dengan perumahan penduduk, dan lahannya tidak mungkin dibebaskan. Lapangan juga perlu menampung kegiatan masyarakat seperti perayaan 17 Agustus, kegiatan seni budaya, dan kampanye politik.",
    concept: [
      "Tribun dirancang berbentuk huruf U untuk memanfaatkan tiga sisi lapangan. Di sisi yang berbatasan dengan rumah penduduk, tribun dibuat pendek, hanya lima undakan.",
      "Perencanaan memperhatikan keamanan dan keandalan bangunan serta jalur evakuasi. Fasilitas pendukungnya meliputi kios yang dapat disewakan, ruang ganti, toilet, dan ruang VIP.",
    ],
  },
  {
    slug: "balai-benih-ikan",
    title: "Balai Benih Ikan (BBI)",
    location: "Harian",
    regency: "Kabupaten Samosir",
    year: 2012,
    client: "Dinas Pertanian, Perikanan dan Peternakan",
    scope: "Perencanaan",
    paketNo: 32,
    category: "Fasilitas Publik & Sosial",
    featured: false,
    summary: "Gedung serbaguna dan bangsal pembibitan yang dirancang mengikuti suhu dan angin kencang setempat.",
    context:
      "Balai Benih Ikan Kabupaten Samosir memasok benih ikan ke seluruh Kabupaten Samosir, antara lain ikan mujair, nila, dan lele. Perencanaan di Kecamatan Harian meliputi gedung serbaguna dan bangsal pembibitan.",
    challenge: "Angin di lokasi ini kencang, sementara proses pembibitan membutuhkan suhu tertentu.",
    concept: [
      "Bangsal pembibitan dirancang dengan mempertimbangkan iklim dan cuaca setempat, terutama suhu dan angin.",
      "Suhu di dalam bangsal diupayakan sesuai kebutuhan pembibitan. Sirkulasi udara dibuat baik, tetapi tidak berlebihan.",
    ],
  },

  // ——— Hunian ———
  {
    slug: "agave-house",
    title: "Agave House",
    regency: "Kota Pematangsiantar",
    // [KONFIRMASI] Tabel pengalaman: 2024; profil personel: 2021.
    year: 2024,
    client: "Perorangan",
    scope: "DED",
    category: "Hunian",
    featured: true,
    paketNo: 97,
    summary: "Rumah tiga kamar dengan mezanin untuk tamu menginap, di tengah kawasan persawahan.",
    context:
      "Rumah ini dimiliki sebuah keluarga yang sering mengadakan acara kumpul-kumpul di rumah, bahkan tamu sering menginap. Rumah terletak di kawasan persawahan.",
    challenge: "Rumah tiga kamar ini perlu bisa menampung tamu yang menginap, dan tetap terasa lapang serta sejuk.",
    concept: [
      "Ruang mezanin disediakan untuk dipakai sebagai bangsal tempat menginap.",
      "Void yang terbuka ke ruang tamu yang luas dan tinggi, ditambah banyak bukaan jendela, membuat rumah hemat energi dan sirkulasi udaranya sejuk. Ruang tamu dan dapur tidak disekat agar terasa luas dan akrab.",
      "Area belakang rumah dijadikan tempat usaha jualan online. Teras depan dan belakang menjadi tempat bersantai sambil menikmati pemandangan sawah.",
    ],
  },
  {
    slug: "s-house-palipi",
    title: "S House Palipi",
    location: "Palipi",
    regency: "Kabupaten Samosir",
    // Tahun dari profil personel (tidak tercantum di tabel pengalaman).
    year: 2017,
    client: "Perorangan",
    scope: "DED",
    category: "Hunian",
    featured: false,
    summary: "Rumah tinggal di lahan 7 × 100 meter, dengan homestay di bagian belakang dan mezanin di tengah bangunan.",
    context:
      "Rumah tinggal ini berada di lahan berukuran 7 × 100 meter. Rumah tinggal ditempatkan di depan, sedangkan bagian belakang direncanakan sebagai penginapan (homestay).",
    challenge: "Tapaknya sempit dan memanjang, sementara rumah membutuhkan cahaya dan udara yang cukup serta akses ke homestay di belakang.",
    concept: [
      "Bangunan ditempatkan rapat ke sisi kiri dan menyisakan area terbuka 1 meter di sisi kanan, yang sekaligus menjadi jalan menuju homestay. Jendela diletakkan di sisi kanan, dan ada taman di bagian dalam untuk kesegaran dan pencahayaan alami.",
      "Pintu ke ruang tamu dan ruang makan dibuat dari dua arah, depan dan samping, agar udara terus berganti.",
      "Mezanin ditempatkan di tengah bangunan dan atap pelana dibuat bertumpuk mengikuti ketinggian ruang, sehingga bangunan satu lantai ini sebagian terlihat seperti dua lantai. Bangunan dibuat minimalis dengan ekspos bata dan batu alam di beberapa bagian untuk kesan alami khas pedesaan.",
    ],
  },
  {
    slug: "komplek-bj-property",
    title: "Komplek BJ Property",
    // Lokasi tidak disebut di company profile: [MENUNGGU DARI KLIEN]
    regency: "",
    scope: "Perencanaan",
    category: "Hunian",
    featured: false,
    summary: "Perumahan rumah kopel tipe 54 dan 70 dengan ruang terbuka 40%, lebih besar dari syarat 30%.",
    context:
      "Komplek perumahan ini berada di kawasan permukiman berkepadatan rendah, dengan dua tipe rumah: tipe 54 dan tipe 70.",
    challenge: "Perumahan perlu terasa lapang dan sesuai dengan karakter permukiman berkepadatan rendah di sekitarnya.",
    concept: [
      "Ruang terbuka dibuat 40%, lebih besar dari syarat 30%, untuk memberi kesan lapang. Ruang terbuka ini berupa jalur pedestrian dengan vegetasi peneduh.",
      "Rumah dirancang sebagai rumah kopel, bukan rumah deret. Desainnya minimalis bergaya Skandinavia dengan bukaan yang optimal untuk pencahayaan dan sirkulasi udara.",
      "Tipe 54 dan tipe 70 sama-sama memiliki tiga kamar tidur. Bedanya, ukuran ruang tipe 70 lebih luas.",
    ],
  },
  {
    slug: "bmg-house",
    title: "BMG House",
    regency: "Kota Medan",
    // Tahun dari profil personel (tidak tercantum di tabel pengalaman).
    year: 2022,
    client: "Perorangan",
    scope: "DED renovasi",
    category: "Hunian",
    featured: false,
    summary: "Renovasi rumah tipe 45 menjadi tipe 50, dengan pagar expanded metal yang tetap meloloskan cahaya dan udara.",
    context: "Rumah ini awalnya bertipe 45, lalu ditingkatkan menjadi tipe 50.",
    challenge:
      "Dapur perlu tersembunyi dari ruang tamu, area parkir sepeda motor perlu terlindung dari pencurian, dan pagar harus cukup tinggi tanpa menghalangi cahaya dan udara.",
    concept: [
      "Posisi kamar tidur yang tadinya berdampingan diubah sehingga menutupi area dapur. Dapur kini tersembunyi dari ruang tamu.",
      "Teras dioptimalkan menjadi carport sekaligus ruang tamu terbuka. Dinding roster ditambahkan untuk menutupi area parkir sepeda motor dan mencegah pencurian.",
      "Pagar dan gerbang menggunakan expanded metal. Meski dibuat cukup tinggi demi keamanan, cahaya matahari dan udara tetap masuk ke teras melalui rongga-rongga pagar.",
    ],
  },
];

export const PROJECTS: Project[] = DATA.map(withImages);

/** Urutan proyek pilihan di Beranda. */
const FEATURED_ORDER = [
  "pantai-pandua",
  "open-stage-pangururan",
  "taman-baruas-indah",
  "batu-hobon",
  "rumah-lansia-sejahtera",
  "agave-house",
];

export const FEATURED_PROJECTS: Project[] = FEATURED_ORDER.map((slug) => PROJECTS.find((p) => p.slug === slug)!).filter(Boolean);

export const getProject = (slug: string) => PROJECTS.find((p) => p.slug === slug);

export const coverOf = (p: Project) => p.images[0];

/** "Nainggolan, Kabupaten Samosir" — bagian kosong dilewati. */
export const placeOf = (p: Project) => [p.location, p.regency].filter(Boolean).join(", ");
