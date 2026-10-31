"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { PROJECT_CATEGORIES, type Project, type ProjectCategory } from "@/lib/data/projects";

type Filter = "Semua" | ProjectCategory;

// Daftar proyek dengan filter kategori. Tanpa JavaScript, semua proyek tetap tampil.
export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("Semua");
  const options: { value: Filter; count: number }[] = [
    { value: "Semua", count: projects.length },
    ...PROJECT_CATEGORIES.map((c) => ({ value: c as Filter, count: projects.filter((p) => p.category === c).length })),
  ];
  const shown = filter === "Semua" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <div role="group" aria-label="Filter kategori proyek" className="-mx-1 flex flex-wrap gap-2">
        {options.map((o) => {
          const active = filter === o.value;
          return (
            <button
              key={o.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(o.value)}
              className={`inline-flex min-h-11 items-center gap-2 rounded-md border px-4 text-[15px] font-semibold transition-colors ${
                active ? "border-navy-900 bg-navy-900 text-white" : "border-line bg-paper text-ink hover:border-ink"
              }`}
            >
              {o.value}
              <span className={`tabular-nums ${active ? "text-gold-500" : "text-ink-soft"}`}>{o.count}</span>
            </button>
          );
        })}
      </div>

      <p aria-live="polite" className="sr-only">
        Menampilkan {shown.length} proyek{filter === "Semua" ? "" : ` kategori ${filter}`}.
      </p>

      <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </>
  );
}
