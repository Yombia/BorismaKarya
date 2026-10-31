import type { Metadata } from "next";
import { GaleriContent } from "./GaleriContent";

export const metadata: Metadata = {
  title: "Galeri Proyek",
  description: "Galeri karya perencanaan CV. Borisma Karya: arsitektur, lansekap, dan kawasan di Sumatera Utara.",
  alternates: { canonical: "/galeri" },
};

export default function GaleriPage() {
  return <GaleriContent />;
}
