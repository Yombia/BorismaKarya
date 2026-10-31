// Pimpinan dan kepala departemen CV. Borisma Karya.
// Sumber: struktur organisasi (company profile hal. 3) dan profil personel.
// Hanya JENIS sertifikasi yang ditampilkan; nomor registrasi sengaja tidak dicantumkan. Foto menunggu izin klien.

export type TeamMember = {
  name: string;
  role: string;
  /** Kunci departemen di services.ts (kosong untuk direktur). */
  department?: string;
  education: string[];
  certifications: string[];
  /** Pengalaman singkat yang relevan (opsional). */
  note?: string;
};

export const DIRECTOR: TeamMember = {
  name: "Ar. Sri Rezeki Mariswaty, ST, IAI",
  role: "Direktur",
  education: ["S1 Arsitektur, Universitas Sumatera Utara (2000)"],
  certifications: [
    "Anggota Ikatan Arsitek Indonesia (IAI)",
    "Surat Tanda Registrasi Arsitek (STRA)",
    "SKK Ahli Madya Teknik Bangunan Gedung",
    "SKK Ahli Penilai Kelaikan Bangunan Gedung (Aspek Arsitektur dan Tata Ruang Luar)",
  ],
  note: "Memimpin CV. Borisma Karya sejak 2010.",
};

export const DEPARTMENT_HEADS: TeamMember[] = [
  {
    name: "Ar. Ir. Raimundus Pakpahan, MT, IAI",
    role: "Kepala Departemen Arsitektur",
    department: "arsitektur",
    education: [
      "S1 Arsitektur, Universitas Katolik St. Thomas Medan (1991)",
      "S2 Perencanaan Kota, Universitas Sumatera Utara (2010)",
    ],
    certifications: [
      "Anggota Ikatan Arsitek Indonesia (IAI)",
      "Surat Tanda Registrasi Arsitek (STRA)",
      "SKK Ahli Madya Teknik Bangunan Gedung",
    ],
    note: "Staf pengajar Jurusan Arsitektur Universitas Katolik St. Thomas Sumatera Utara sejak 1991.",
  },
  {
    // [KONFIRMASI] Profil personel menyebut "Kepala Departemen ME"; struktur organisasi menyebut Civil Department.
    name: "Jeppri Lumbantungkup, ST",
    role: "Kepala Departemen Sipil",
    department: "sipil",
    education: ["S1 Teknik Sipil, Universitas Darma Agung Medan (2017)"],
    certifications: [
      "SKK Ahli Muda Teknik Bangunan Gedung",
      "SKK Ahli Madya Teknik Sumber Daya Air",
      "SKK Ahli Madya Geoteknik",
    ],
  },
  {
    name: "Krisnadi T.A.P Naibaho, ST",
    role: "Kepala Departemen Mekanikal & Elektrikal",
    department: "me",
    education: ["S1 Teknik Mesin, Universitas Sumatera Utara (2009)"],
    certifications: [
      "SKK Ahli Utama Manajemen Konstruksi",
      "SKK Ahli Utama Teknik Mekanikal",
      "SKK Ahli Utama Perencanaan Sistem Tata Udara",
      "SKK Ahli Utama Pengkaji Teknis Proteksi Kebakaran",
      "Surat Tanda Registrasi Insinyur (PII)",
      "Insinyur Profesional Madya (PII)",
      "Project Management Professional (PMI)",
      "APEC Engineer",
      "ASEAN Chartered Professional Engineer",
    ],
  },
  {
    name: "Mahyuddin, ST",
    role: "Kepala Departemen Urban",
    department: "urban",
    education: ["S1 Teknik Perencanaan Wilayah dan Kota, ITM (2019)"],
    certifications: ["SKK Ahli Madya Perencanaan Tata Ruang Wilayah dan Kota"],
  },
  {
    name: "Martin E. Y. Simanjuntak, S.Ars",
    role: "Kepala Departemen Riset",
    department: "riset",
    education: ["S1 Arsitektur, Universitas Sumatera Utara (2021)"],
    certifications: [],
  },
  {
    name: "Parulian, M.Kom",
    role: "Kepala Departemen Teknologi Informasi",
    department: "ti",
    education: [
      "S1 Teknik Informatika, Institut Teknologi dan Sains TD Pardede Medan (2012)",
      "S2 Ilmu Komputer, Universitas Sumatera Utara (2019)",
    ],
    certifications: [
      "Mikrotik Fundamental (2011)",
      "Webmaster Professional (2013)",
      "PHP, Binus Center Medan (2014)",
      "Cisco Network Academy (2015)",
      "Container, Kubernetes & OpenShift, Digital Talent Scholarship Kominfo (2021)",
    ],
    note: "Asisten dosen dan administrator di Universitas HKBP Nommensen sejak 2010.",
  },
  {
    name: "Gloria Kalitya Sinaga",
    role: "Kepala Departemen Pelatihan & Event",
    department: "pelatihan",
    education: ["SMA Imanuel Medan (2020)"],
    certifications: [],
    note: "Panitia Malaysia Kuala Lumpur International Choir Competition (2019) dan Bali International Choir Festival (2023), serta event organizer Burangir Award (2022).",
  },
];

/** Struktur organisasi (company profile hal. 3). */
export const ORGANIZATION = {
  commissioners: ["Ir. Manaor Sinaga", "Bambang Sihombing, SP"],
  director: DIRECTOR.name,
  departments: DEPARTMENT_HEADS.map((m) => ({ unit: m.role.replace("Kepala Departemen ", ""), name: m.name })),
  support: [
    { unit: "General Affair", name: "Agustina Bonita Sari Sinaga" },
    { unit: "Legal Officer", name: "Darwin Nababan, SH" },
  ],
};

/** Inisial untuk monogram (tanpa gelar): "Ar. Ir. Raimundus Pakpahan, MT, IAI" → "RP". */
export function initials(name: string) {
  const core = name
    .split(",")[0]
    .replace(/\b(Ar|Ir|Dr|Pdt)\.\s*/g, "")
    .replace(/\b[A-Z]\.(?=\s|$)/g, "")
    .trim();
  const words = core.split(/\s+/).filter((w) => /^[A-Za-z]/.test(w) && !/\./.test(w));
  const first = words[0]?.[0] ?? "";
  const last = words.length > 1 ? words[words.length - 1][0] : "";
  return (first + last).toUpperCase();
}
