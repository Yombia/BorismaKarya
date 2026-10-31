// src/proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// SOTA: Ubah nama fungsi dari middleware menjadi proxy
export function proxy(request: NextRequest) {
  // Pengecekan: Apakah user mencoba masuk ke teritori /admin?
  if (request.nextUrl.pathname.startsWith('/admin')) {
    
    // Inspeksi keberadaan token otorisasi di dalam Cookie peramban
    let cookie = request.cookies.get('borisma_auth');

    // Jika cookie tidak ada, atau nilainya bukan sandi rahasia kita
    if (!cookie || cookie.value !== 'authenticated_sota') {
      // Tendang penyusup kembali ke halaman Login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Jika aman, biarkan lewat
  return NextResponse.next();
}

// Konfigurasi ini memberitahu Next.js rute mana saja yang harus dijaga ketat
export const config = {
  matcher: ['/admin/:path*'],
};