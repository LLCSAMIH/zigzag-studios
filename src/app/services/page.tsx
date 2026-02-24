import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Services & Packages | ZigZag Studio",
  description:
    "Professional photography packages for real estate. HDR photography, drone aerials, 3D virtual tours, cinematic video, and more.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero title="Services" subtitle="& Packages" />
      <ServicesSection />
      <PricingSection />
      <ProcessSection />
      <FAQSection />
    </main>
  );
}
