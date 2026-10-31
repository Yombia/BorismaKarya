import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data/site";
import { PROJECTS } from "@/lib/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/layanan`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/layanan/pbg-slf`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE.url}/portofolio`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ...PROJECTS.map((p) => ({
      url: `${SITE.url}/portofolio/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    { url: `${SITE.url}/pengalaman`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE.url}/tentang`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE.url}/pemberdayaan`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE.url}/kontak`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];
}
