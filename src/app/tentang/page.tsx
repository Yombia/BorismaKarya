import type { Metadata } from "next";
import { TentangContent } from "./TentangContent";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Sejarah, bidang layanan, dan departemen CV. Borisma Karya, konsultan perencanaan dan pengawasan di Sumatera Utara sejak 1989.",
  alternates: { canonical: "/tentang" },
};

export default function TentangPage() {
  return <TentangContent />;
}
