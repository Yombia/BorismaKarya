// src/components/sections/Portfolio.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Data Fallback SOTA
const defaultProjects = [
  { id: 'def1', title: "Eco-Resort & Cafe Masterplan", category: "Arsitektur", image: "/assets/images/portfolio/project-1.png" },
  { id: 'def2', title: "Semi-Outdoor Dining Space", category: "Sipil", image: "/assets/images/portfolio/project-2.png" },
  { id: 'def3', title: "Gazebo & Pavilion Integration", category: "Sipil", image: "/assets/images/portfolio/project-3.png" },
  { id: 'def4', title: "Poolside Recreation Area", category: "Lansekap", image: "/assets/images/portfolio/project-4.png" },
  { id: 'def5', title: "Modern Facade Design", category: "Arsitektur", image: "/assets/images/portfolio/project-5.png" },
  { id: 'def6', title: "Outdoor Pathway & Greening", category: "Urban", image: "/assets/images/portfolio/project-6.png" }
];

const filters = ["Semua", "Arsitektur", "Sipil", "Lansekap", "Urban"];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [displayProjects, setDisplayProjects] = useState<any[]>([]);

  useEffect(() => {
    const savedData = localStorage.getItem("borisma_projects_sota");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setDisplayProjects(parsedData.slice(0, 6)); 
    } else {
      setDisplayProjects(defaultProjects);
    }
  }, []);

  const filteredProjects = displayProjects.filter(project => 
    activeFilter === "Semua" || project.category === activeFilter
  );

  const getGridSize = (index: number) => {
    const sizes = [
      "col-span-1 md:col-span-2", 
      "col-span-1",               
      "col-span-1",               
      "col-span-1 md:col-span-2", 
      "col-span-1 md:col-span-2", 
      "col-span-1"                
    ];
    return sizes[index % sizes.length];
  };

  const getProjectImages = (project: any) => {
    if (!project) return [];
    if (project.images && project.images.length > 0) return project.images;
    if (project.image) return [project.image];
    return [];
  };

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
    <section id="portofolio" className="py-24 bg-brand-black relative z-10">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">
              Portofolio Proyek Terpilih
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold">Infrastruktur yang <br /> Menentukan <span className="text-brand-gold">Standar Baru</span></h3>
          </div>
          
          <div className="flex flex-wrap gap-2 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                  activeFilter === filter 
                    ? "bg-brand-gold text-brand-black border-brand-gold shadow-[0_0_15px_rgba(245,166,35,0.4)]" 
                    : "bg-transparent text-muted-foreground border-white/10 hover:border-brand-gold/50 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const displayImg = getProjectImages(project)[0];

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                  key={project.id || project.title} 
                  onClick={() => {
                    setSelectedProject(project);
                    setCurrentImgIndex(0); 
                  }}
                  className={`group relative overflow-hidden rounded-2xl bg-brand-surface ${getGridSize(index)} aspect-video md:aspect-auto md:h-[350px] cursor-pointer pointer-events-auto border border-white/5 hover:border-brand-gold/30 transition-colors`}
                >
                  <div className="absolute inset-0 z-30 bg-brand-gold/90 opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col items-center justify-center p-8 text-brand-black pointer-events-none">
                    <div className="mb-4 flex gap-4">
                        <div className="p-3 bg-brand-black rounded-full text-brand-gold scale-150 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                            <Search className="w-8 h-8" />
                        </div>
                    </div>
                    <h4 className="text-3xl font-bold text-center tracking-tight line-clamp-2">{project.title}</h4>
                    <p className="font-semibold text-sm uppercase tracking-wider mt-2 border-t border-brand-black pt-2">{project.category}</p>
                    
                    {getProjectImages(project).length > 1 && (
                      <p className="absolute bottom-4 right-6 font-bold text-sm bg-black/20 px-3 py-1 rounded-full">
                        {getProjectImages(project).length} Gambar
                      </p>
                    )}
                  </div>

                  <Image
                    src={displayImg}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100 z-10 pointer-events-none"
                  />
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* --- TAUTAN SOTA YANG TELAH DIBERSIHKAN DARI ALERT --- */}
        <div className="flex justify-center">
          <Link 
            href="/galeri"
            className="flex items-center gap-2 text-brand-gold hover:text-white font-bold tracking-widest uppercase text-sm border-b border-brand-gold hover:border-white transition-all pb-1"
          >
            Lihat Seluruh Proyek Kami <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

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
                  {getProjectImages(selectedProject)?.map((_, idx) => (
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
    </section>
  );
}