// Profil dan sejarah CV. Borisma Karya. Sumber: company profile hal. 2.

export const FOUNDERS = ["Ir. Christop Risman Sinaga", "Purnama Butarbutar", "Bona Simon Tua Sinaga"];

export const HISTORY = [
  {
    year: "1989",
    title: "Perusahaan didirikan",
    body: `CV. Borisma Karya didirikan pada 16 Oktober 1989 oleh ${FOUNDERS.slice(0, -1).join(", ")}, dan ${FOUNDERS[FOUNDERS.length - 1]}. Awalnya, perusahaan berfokus pada perencanaan sipil dan irigasi.`,
  },
  {
    year: "2010",
    title: "Restrukturisasi kepengurusan",
    body: "Perusahaan dipimpin oleh Sri Rezeki Mariswaty, ST sebagai Direktur, dengan dua komisaris: Ir. Manaor Sinaga dan Bambang Sihombing, SP. Layanan diperluas ke perencanaan sipil, arsitektur, dan tata ruang.",
  },
  {
    year: "2015",
    title: "Layanan studi ekonomi dan bisnis",
    body: "Perusahaan membuka layanan studi ekonomi dan bisnis, dan banyak mengerjakan studi kelayakan, studi bisnis, serta penelitian ekonomi bisnis, wirausaha, dan ekonomi kerakyatan.",
  },
  {
    year: "2017",
    title: "Teknologi informasi, pelatihan, dan event",
    body: "Menyikapi era digital, perusahaan menambah layanan teknologi informasi untuk aplikasi dan website pemerintah maupun swasta, serta mulai mengorganisasi pelatihan dan acara.",
  },
  {
    year: "2023–sekarang",
    title: "Tujuh bidang layanan",
    body: "CV. Borisma Karya memantapkan diri dengan tujuh bidang layanan: arsitektur, sipil, mekanikal dan elektrikal, urban, riset dan studi kelayakan, teknologi informasi, serta pelatihan dan event.",
  },
];

/**
 * Visi dan misi: [MENUNGGU DARI KLIEN].
 * Bagian ini otomatis muncul di halaman Tentang setelah diisi. Jangan memakai teks lama dan jangan mengarang.
 */
export const VISI_MISI: { visi: string; misi: string[] } | null = null;
