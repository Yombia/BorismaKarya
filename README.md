# Website CV. Borisma Karya

Website company profile CV. Borisma Karya, konsultan perencanaan dan pengawasan di Sumatera Utara sejak 16 Oktober 1989.
Live di **https://borisma-karya.id**.

## Teknologi

- Next.js 16 (App Router) dengan `output: "export"`: seluruh situs dibangun menjadi file statis di folder `out/`.
- Tailwind CSS 4 (token warna dan tipografi ada di `src/app/globals.css`), ikon `lucide-react`.
- Font Plus Jakarta Sans di-host sendiri (`src/app/fonts/`, lisensi OFL).
- Hosting: Cloudflare Workers static assets (`wrangler.jsonc`). Setiap push ke `main` otomatis di-build dan di-deploy.
- Tidak ada backend, database, atau halaman admin. Konsultasi lewat WhatsApp, telepon, dan email.

## Menjalankan di lokal

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # hasil statis di folder out/
npm run lint     # harus 0 error
```

## Halaman

| URL | Isi |
| --- | --- |
| `/` | Beranda |
| `/layanan` | 7 bidang layanan dalam 3 kelompok |
| `/layanan/pbg-slf` | Layanan pengurusan PBG dan SLF |
| `/portofolio` | 17 proyek, dengan filter kategori |
| `/portofolio/[slug]` | Detail proyek: konteks, tantangan, konsep desain, galeri + lightbox |
| `/pengalaman` | Tabel 97 paket pekerjaan dengan pencarian dan filter (bisa dibuka dengan `?bidang=Arsitektur`, `?tahun=2016`, dll.) |
| `/tentang` | Profil, sejarah, struktur organisasi, tim ahli |
| `/pemberdayaan` | Website desa E-Surat, pelatihan warga, riset dan kajian |
| `/kontak` | Dua kantor, peta, WhatsApp, telepon, email |
| `/galeri` | URL lama, dialihkan ke `/portofolio` (301 lewat `public/_redirects`) |

## Mengubah isi

Semua teks data ada di `src/lib/data/`. Halaman membaca dari file-file ini, jadi cukup ubah datanya.

| File | Isi |
| --- | --- |
| `site.ts` | Nama, alamat kantor, telepon, WhatsApp, email, jam buka, media sosial, pesan WhatsApp otomatis |
| `services.ts` | Bidang layanan, kepala departemen, contoh paket |
| `pbg.ts` | Isi halaman PBG & SLF (dari brosur), termasuk FAQ |
| `projects.ts` | Data 17 proyek portofolio |
| `project-images.ts` | Daftar gambar per proyek (dibuat otomatis dari PDF) |
| `pengalaman.ts` | Tabel 97 paket pekerjaan |
| `team.ts` | Direktur, kepala departemen, struktur organisasi |
| `company.ts` | Sejarah perusahaan dan visi/misi |
| `pemberdayaan.ts` | E-Surat, pelatihan warga, daftar riset |

### Mengganti gambar proyek

Gambar proyek ada di `public/assets/images/proyek/<slug>/01.webp`, `02.webp`, dst. Gambar `01` dipakai sebagai gambar utama.
Saat ini semua gambar diambil dari PDF company profile (`imageSource: "pdf-company-profile"`).
Bila file asli dari klien sudah ada: simpan sebagai WebP (maks. ±250 KB, sisi terpanjang ±1600 px) dengan nama yang sama,
lalu sesuaikan `width`/`height` di `project-images.ts`.

### Visi dan misi

Masih menunggu dari klien. Isi `VISI_MISI` di `src/lib/data/company.ts`; bagiannya otomatis muncul di halaman Tentang.

### Placeholder

Data yang masih perlu dikonfirmasi ditandai di kode. Cari dengan:

```bash
grep -rn "\[KONFIRMASI\]\|\[MENUNGGU DARI KLIEN\]\|\[CEK DUPLIKAT\]" src
```

## Catatan

- Nomor registrasi (STRA, SKK, dll.) sengaja tidak ditampilkan; hanya jenis sertifikasinya.
- Nama pemilik rumah pribadi tidak ditampilkan (ditulis "Perorangan").
- Render lama di `docs/render-lama-konfirmasi/` belum dipakai sampai klien mengonfirmasi nama proyeknya.
