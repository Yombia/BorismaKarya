# Website CV. Borisma Karya

Website company profile CV. Borisma Karya: konsultan perencanaan dan pengawasan di Sumatera Utara sejak 1989.
Live di **https://borisma-karya.id**.

## Teknologi
- Next.js 16 (App Router, `output: "export"` → situs statis di folder `out/`)
- Tailwind CSS 4, shadcn/ui, framer-motion
- Hosting: Cloudflare Workers (static assets, lihat `wrangler.jsonc`). Setiap push ke `main` otomatis di-build dan di-deploy.

## Menjalankan di lokal
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # hasil statis di folder out/
```

## Mengubah isi
Data perusahaan (kontak, layanan, daftar proyek) ada di `src/lib/data/site.ts`.
Gambar proyek ada di `public/assets/images/portfolio/` (format WebP, maksimal ±300 KB per gambar).
