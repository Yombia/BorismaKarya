// src/app/login/page.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, User, AlertCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    // Simulasi penundaan jaringan untuk efek otentikasi SOTA
    setTimeout(() => {
      // Kredensial Hardcoded Pusat Komando PT. Borisma
      // Dalam arsitektur V2, ini akan ditarik dari Database PostgreSQL
      if (username === "admin" && password === "borisma2026") {
        
        // Injeksi Token Otorisasi ke dalam Cookie (Berlaku 1 Hari)
        document.cookie = "borisma_auth=authenticated_sota; path=/; max-age=86400";
        
        // Buka gerbang menuju Dashboard
        router.push("/admin");
      } else {
        setError(true);
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-black relative overflow-hidden p-4">
      {/* Ornamen Latar Belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-brand-surface border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-xl">
          
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-brand-black border border-brand-gold/30 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(245,166,35,0.2)]">
              <ShieldCheck className="w-8 h-8 text-brand-gold" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Masuk Admin</h1>
            <p className="text-muted-foreground text-sm text-center">Halaman ini khusus pengelola website.</p>
          </div>

          {error && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-400 text-sm">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <p>Nama pengguna atau kata sandi salah.</p>
            </motion.div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">ID Identifikasi</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="text" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-brand-gold focus:outline-none transition-colors" 
                  placeholder="Masukkan ID..." 
                  required 
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Kata Sandi</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:border-brand-gold focus:outline-none transition-colors" 
                  placeholder="••••••••" 
                  required 
                />
              </div>
            </div>

            <button type="submit" disabled={isLoading} className="w-full bg-brand-gold text-black font-bold py-4 rounded-xl mt-4 flex items-center justify-center gap-2 hover:bg-brand-gold/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(245,166,35,0.2)]">
              {isLoading ? "Memverifikasi..." : <>Otorisasi Akses <ArrowRight className="w-5 h-5" /></>}
            </button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <Link href="/" className="text-muted-foreground hover:text-brand-gold transition-colors text-sm flex items-center justify-center gap-2">
              <ArrowRight className="w-4 h-4 rotate-180" /> Kembali ke Beranda
            </Link>
          </div>

        </div>
      </motion.div>
    </div>
  );
}