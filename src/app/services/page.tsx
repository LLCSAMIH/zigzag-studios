import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/ServicesSection";
import MatterportEmbed from "@/components/MatterportEmbed";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Services & Packages | ZigZag Studio",
  description:
    "Professional real estate photography packages for agents in Somerset, Hoboken, NYC, Brooklyn, Philadelphia, and Bergen County. HDR photography, drone aerials, 3D virtual tours, and more.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageHero title="Services" subtitle="& Packages" />
      <ServicesSection />
      <section className="section-padding section-v-large">
        <p
          className="font-sans"
          style={{
            fontSize: "1.4rem",
            letterSpacing: "0.12rem",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: "2rem",
          }}
        >
          3D Virtual Tour
        </p>
        <h2
          className="font-sans text-gray900"
          style={{
            fontSize: "clamp(3.6rem, 6vw, 6.8rem)",
            lineHeight: 1,
            letterSpacing: "-0.2rem",
            marginBottom: "2rem",
          }}
        >
          See It in Action
        </h2>
        <p
          className="font-sans"
          style={{
            fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
            letterSpacing: "-0.05rem",
            lineHeight: 1.4,
            color: "var(--gray300)",
            marginBottom: "4rem",
            maxWidth: "55rem",
          }}
        >
          Walk through a sample Matterport 3D tour — exactly what buyers
          experience on your listings.
        </p>
        <MatterportEmbed />
      </section>
      <PricingSection />
      <ProcessSection />
      <FAQSection />
    </main>
  );
}
