import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PortfolioGrid from "@/components/PortfolioGrid";
import PortfolioShowcase from "@/components/PortfolioShowcase";

export const metadata: Metadata = {
  title: "Portfolio | ZigZag Studio",
  description:
    "Explore our portfolio of premium real estate, commercial, and event photography across New Jersey.",
};

export default function PortfolioPage() {
  return (
    <main>
      <PageHero title="Our Work" subtitle="Featured Projects" />
      <PortfolioGrid />
      <PortfolioShowcase />
    </main>
  );
}
