// src/app/page.tsx — Beranda
import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { FactsStrip } from "@/components/home/FactsStrip";
import { PbgHighlight } from "@/components/home/PbgHighlight";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Approach } from "@/components/home/Approach";
import { WorkArea } from "@/components/home/WorkArea";
import { ContactCta } from "@/components/site/ContactCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <FactsStrip />
      <PbgHighlight />
      <ServicesOverview />
      <FeaturedProjects />
      <Approach />
      <WorkArea />
      <ContactCta />
    </>
  );
}
