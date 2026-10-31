// src/app/admin/page.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LayoutDashboard, Plus, Trash2, Image as ImageIcon, 
  Upload, Save, X, CheckCircle2, HardHat
} from "lucide-react";
import Image from "next/image";

export default function AdminDashboard() {
  // Gunakan struktur data baru yang mendukung "images" (array)
  const [projects, setProjects] = useState<any[]>([
    { id: 1, title: "Eco-Resort & Cafe", category: "Arsitektur", images: ["/assets/images/portfolio/project-1.png"] },
    { id: 2, title: "Semi-Outdoor Dining", category: "Sipil", images: ["/assets/images/portfolio/project-2.png"] },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  
  // STATE BARU: Array untuk menampung BANYAK gambar
  const [previews, setPreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null); // Ref untuk fitur Click-to-Upload

  // Form State
  const [newProject, setNewProject] = useState({ title: "", category: "Arsitektur" });

  // PROTOKOL PERSISTENCE: Ambil data dari Local Storage saat halaman dimuat
  useEffect(() => {
    const savedData = localStorage.getItem("borisma_projects_sota");
    if (savedData) {
      setProjects(JSON.parse(savedData));
    }
  }, []);

  // Handle Drag & Drop Logic
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
    else if (e.type === "dragleave") setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
    }
  };

  // LOGIKA BARU: Handle Banyak File sekaligus
  const handleFiles = async (files: FileList | File[]) => {
    const fileArray = Array.from(files);
    
    const base64Promises = fileArray.map((file) => {
      return new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
      });
    });

    const base64Results = await Promise.all(base64Promises);
    // Tambahkan gambar baru ke array gambar yang sudah ada
    setPreviews((prev) => [...prev, ...base64Results]);
  };

  // Fungsi menghapus satu gambar dari preview
  const removePreview = (indexToRemove: number) => {
    setPreviews((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const deleteProject = (id: number) => {
    const updatedProjects = projects.filter(p => p.id !== id);
    setProjects(updatedProjects);
    localStorage.setItem("borisma_projects_sota", JSON.stringify(updatedProjects)); // Update memori
  };

  const saveProject = () => {
    if (!newProject.title || previews.length === 0) return alert("Data tidak lengkap! Harap isi judul dan minimal 1 gambar.");
    
    const project = {
      id: Date.now(),
      title: newProject.title,
      category: newProject.category,
      images: previews // Simpan seluruh array gambar
    };
    
    const updatedProjects = [project, ...projects];
    setProjects(updatedProjects);
    localStorage.setItem("borisma_projects_sota", JSON.stringify(updatedProjects)); // Simpan Permanen
    
    // Reset Form
    setIsModalOpen(false);
    setPreviews([]);
    setNewProject({ title: "", category: "Arsitektur" });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        
        {/* Header Dashboard */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 border-b border-white/5 pb-8">
          <div>
            <div className="flex items-center gap-3 text-brand-gold mb-2">
              <LayoutDashboard size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">Pusat Komando Utama</span>
            </div>
            <h1 className="text-4xl font-bold">Dashboard <span className="text-brand-gold">Borisma</span></h1>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-brand-gold text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Plus size={20} /> Tambah Proyek Baru
          </button>
        </header>

        {/* Statistik Ringkas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "Total Proyek", value: projects.length, icon: <HardHat /> },
            { label: "Storage Used", value: "124 MB", icon: <ImageIcon /> },
            { label: "Sistem Status", value: "Optimal", icon: <CheckCircle2 /> },
          ].map((s, i) => (
            <div key={i} className="p-6 rounded-2xl bg-brand-surface border border-white/5 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">{s.label}</p>
                <p className="text-2xl font-bold">{s.value}</p>
              </div>
              <div className="text-brand-gold opacity-50">{s.icon}</div>
            </div>
          ))}
        </div>

        {/* Tabel Manajemen Proyek */}
        <div className="rounded-2xl bg-brand-surface border border-white/5 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-xs uppercase tracking-widest text-muted-foreground font-bold">
              <tr>
                <th className="px-6 py-4">Visual Utama</th>
                <th className="px-6 py-4">Judul Proyek</th>
                <th className="px-6 py-4">Kategori</th>
                <th className="px-6 py-4 text-center">Jml Gambar</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {projects.map((project) => (
                <tr key={project.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="px-6 py-4">
                    <div className="relative h-12 w-20 rounded-lg overflow-hidden border border-white/10">
                      {/* Selalu render gambar index [0] sebagai cover di tabel */}
                      <Image src={project.images ? project.images[0] : project.image} alt={project.title} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{project.title}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full bg-brand-gold/10 text-brand-gold text-xs font-bold border border-brand-gold/20">
                      {project.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-muted-foreground font-bold">
                    {project.images ? project.images.length : 1}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button 
                      onClick={() => deleteProject(project.id)}
                      className="text-red-400 hover:text-red-500 p-2 hover:bg-red-500/10 rounded-lg transition-all"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* --- MODAL TAMBAH PROYEK --- */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-brand-surface border border-white/10 rounded-3xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold">Input Data Infrastruktur</h2>
                <button onClick={() => setIsModalOpen(false)} className="text-muted-foreground hover:text-white"><X /></button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Judul Proyek</label>
                  <input 
                    type="text" 
                    value={newProject.title}
                    onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-gold outline-none transition-colors"
                    placeholder="Contoh: Jembatan Layang Pasupati"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Kategori Bidang</label>
                  <select 
                    value={newProject.category}
                    onChange={(e) => setNewProject({...newProject, category: e.target.value})}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-brand-gold outline-none"
                  >
                    <option value="Arsitektur">Arsitektur</option>
                    <option value="Sipil">Teknik Sipil</option>
                    <option value="Lansekap">Lansekap</option>
                    <option value="Urban">Urban Planning</option>
                  </select>
                </div>

                {/* AREA MULTI-UPLOAD (CLICK & DRAG) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Aset Visual (Bisa Banyak Gambar)</label>
                  
                  {/* Input hidden untuk fitur Click */}
                  <input 
                    type="file" 
                    multiple 
                    accept="image/*" 
                    ref={fileInputRef}
                    className="hidden"
                    onChange={(e) => e.target.files && handleFiles(e.target.files)}
                  />

                  <div 
                    onClick={() => fileInputRef.current?.click()} // Membuka File Explorer
                    onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
                    className={`relative border-2 border-dashed rounded-2xl p-6 flex flex-col items-center justify-center transition-all cursor-pointer min-h-[200px] ${
                      dragActive ? "border-brand-gold bg-brand-gold/5" : "border-white/10 hover:border-brand-gold/30"
                    }`}
                  >
                    {previews.length > 0 ? (
                      // Tampilan Grid Multi-Gambar
                      <div className="w-full grid grid-cols-3 gap-3">
                        {previews.map((src, idx) => (
                          <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group">
                            <Image src={src} alt="Preview" fill className="object-cover" />
                            {/* Tombol Hapus per Gambar */}
                            <button 
                              onClick={(e) => { e.stopPropagation(); removePreview(idx); }}
                              className="absolute top-1 right-1 bg-black/80 p-1.5 rounded-full text-white hover:bg-red-500 transition-colors z-10"
                            >
                              <X size={14} />
                            </button>
                          </div>
                        ))}
                        {/* Tombol Tambah Lagi di dalam Grid */}
                        <div className="flex flex-col items-center justify-center border border-dashed border-white/20 rounded-lg hover:bg-white/5 transition-colors aspect-video text-muted-foreground hover:text-brand-gold">
                          <Plus size={24} className="mb-1" />
                          <span className="text-[10px] uppercase font-bold tracking-widest">Tambah</span>
                        </div>
                      </div>
                    ) : (
                      // Tampilan Kosong
                      <>
                        <Upload className="text-brand-gold mb-4" size={40} />
                        <p className="text-sm font-medium mb-1 text-center">Klik atau Seret banyak gambar ke sini</p>
                        <p className="text-xs text-muted-foreground">PNG, JPG (Maks. 5MB per file)</p>
                      </>
                    )}
                  </div>
                </div>

                <button 
                  onClick={saveProject}
                  className="w-full bg-brand-gold text-black font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-brand-gold/90 transition-all"
                >
                  <Save size={20} /> Simpan ke Portofolio Utama
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}