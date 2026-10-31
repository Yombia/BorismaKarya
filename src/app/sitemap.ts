import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE.url}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/tentang`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE.url}/galeri`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
