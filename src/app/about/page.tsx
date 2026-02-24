import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutStory from "@/components/AboutStory";
import StatsSection from "@/components/StatsSection";
import FooterCTA from "@/components/FooterCTA";
import FooterBar from "@/components/FooterBar";

export const metadata: Metadata = {
  title: "About | ZigZag Studio",
  description:
    "Learn about ZigZag Studio — a design-driven photography studio in New Jersey combining technical precision with creative vision.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About" subtitle="Who we are" />
      <AboutStory />
      <StatsSection />
      <FooterCTA />
      <FooterBar />
    </main>
  );
}
