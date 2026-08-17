import type { Metadata } from "next";

import Nav from "@/components/Nav";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import ServicesConsultation from "@/components/ServicesConsultation";
import ServicesIndustries from "@/components/ServicesIndustries";

import PageHero from "@/components/PageHero";
import ServiceCard from "@/app/data/ServiceCard";
import { services } from "@/app/data/services";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | STARFII",
  description:
    "Explore STARFII's product engineering, AI, cloud, data, cybersecurity, UI/UX and digital transformation services.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink">
      <Nav />

      <ServicesHero />

      <ServicesGrid />

      <ServicesConsultation />

      <ServicesIndustries />

      <FinalCTA />

      <Footer />
      
    </main>

  );

}
