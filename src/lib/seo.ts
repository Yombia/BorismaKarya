import type { Metadata } from "next";
import { SITE } from "@/lib/data/site";

// openGraph di halaman anak menimpa seluruh openGraph dari layout (tidak digabung),
// jadi field dasar diulang di sini untuk setiap halaman.
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "id_ID",
      siteName: SITE.name,
      url: `${SITE.url}${path}`,
      title: `${title} | ${SITE.name}`,
      description,
    },
  };
}
