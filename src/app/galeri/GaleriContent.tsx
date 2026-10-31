// src/app/galeri/GaleriContent.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ChevronLeft, ChevronRight, Filter } from "lucide-react";
import Image from "next/image";
import { DEFAULT_PROJECTS, getCategories, getProjectImages, type Project } from "@/lib/data/site";

export function GaleriContent() {
  const [allProjects, setAllProjects] = useState<Project[]>(DEFAULT_PROJECTS);
  
  // State untuk Filter & Pencarian
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");

  // State untuk lightbox
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const savedData = localStorage.getItem("borisma_projects_sota");
    if (savedData) {
      setAllProjects(JSON.parse(savedData));
    }
  }, []);

  const filters = getCategories(allProjects);

  const filteredProjects = allProjects.filter((project) => {
    const matchCategory = activeFilter === "Semua" || project.category === activeFilter;
    const matchSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        project.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const images = getProjectImages(selectedProject);
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const images = getProjectImages(selectedProject);
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-brand-black pt-32 pb-24">
      <div className="container mx-auto px-4">
        
        {/* Header Galeri & Mesin Pencari */}
        <section className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm mb-4"
          >
            Galeri Proyek
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold mb-8 text-white"
          >
            Galeri <span className="text-brand-gold">Karya</span> Kami
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto relative"
          >
            <div className="relative flex items-center w-full">
              <Search className="absolute left-4 text-brand-gold w-5 h-5" />
              <input 
                type="text" 
                placeholder="Cari nama proyek atau kategori..."
                aria-label="Cari proyek" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-surface border border-white/10 rounded-full py-4 pl-12 pr-4 text-white focus:border-brand-gold focus:outline-none transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              />
            </div>
          </motion.div>
        </section>

        {/* Filter Kategori Dinamis */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 mr-2 text-muted-foreground">
            <Filter className="w-4 h-4" /> <span className="text-sm font-bold uppercase tracking-wider">Filter:</span>
          </div>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                activeFilter === filter 
                  ? "bg-brand-gold text-brand-black border-brand-gold shadow-[0_0_15px_rgba(245,166,35,0.4)]" 
                  : "bg-transparent text-muted-foreground border-white/10 hover:border-brand-gold/50 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid proyek */}
        {filteredProjects.length > 0 ? (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const displayImg = getProjectImages(project)[0];

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={project.id || project.title} 
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImgIndex(0);
                    }}
                    className="group relative overflow-hidden rounded-2xl bg-brand-surface h-[320px] w-full cursor-pointer border border-white/5 hover:border-brand-gold/50 transition-colors"
                  >
                    <div className="absolute inset-0 z-30 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />
                    
                    {/* Teks Selalu Terlihat di Bawah (Gaya Galeri Modern) */}
                    <div className="absolute bottom-0 left-0 w-full p-6 z-40 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-1">{project.category}</p>
                      <h4 className="text-xl font-bold text-white line-clamp-2">{project.title}</h4>
                    </div>

                    {getProjectImages(project).length > 1 && (
                      <div className="absolute top-4 right-4 z-40 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                        <p className="font-bold text-xs text-white">{getProjectImages(project).length} Foto</p>
                      </div>
                    )}

                    <Image
                      src={displayImg}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110 z-10"
                    />
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-24 text-muted-foreground">
            <Search className="w-16 h-16 mx-auto mb-4 opacity-20" />
            <h3 className="text-2xl font-bold mb-2">Proyek Tidak Ditemukan</h3>
            <p>Tidak ada proyek yang cocok dengan kata kunci atau filter tersebut.</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)} 
            className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-[100000] p-3 bg-brand-gold/20 hover:bg-brand-gold/40 rounded-full text-brand-gold transition-colors"
            >
                <X className="w-8 h-8" />
            </button>

            {getProjectImages(selectedProject).length > 1 && (
              <>
                <button 
                  onClick={handlePrev}
                  className="absolute left-4 md:left-10 z-[100000] p-3 md:p-5 bg-brand-black/50 hover:bg-brand-gold text-brand-gold hover:text-black rounded-full transition-all backdrop-blur-sm border border-brand-gold/30 hover:scale-110"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button 
                  onClick={handleNext}
                  className="absolute right-4 md:right-10 z-[100000] p-3 md:p-5 bg-brand-black/50 hover:bg-brand-gold text-brand-gold hover:text-black rounded-full transition-all backdrop-blur-sm border border-brand-gold/30 hover:scale-110"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
                
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[100000] flex gap-3 bg-black/50 px-4 py-2 rounded-full backdrop-blur-md">
                  {getProjectImages(selectedProject).map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentImgIndex ? "bg-brand-gold scale-150" : "bg-white/30"}`}
                    />
                  ))}
                </div>
              </>
            )}

            <motion.div
              initial={{ scale: 0.5, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()} 
              className="relative w-full max-w-7xl h-[80vh] overflow-hidden rounded-xl shadow-[0_0_100px_rgba(245,166,35,0.15)] cursor-default"
            >
              <Image
                src={getProjectImages(selectedProject)[currentImgIndex]}
                alt={`${selectedProject.title} - View ${currentImgIndex + 1}`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px" 
                className="object-contain transition-opacity duration-300" 
              />
              
              <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10">
                <h3 className="text-white font-bold text-lg md:text-xl">{selectedProject.title}</h3>
                <p className="text-brand-gold text-xs uppercase tracking-widest mt-1">{selectedProject.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}