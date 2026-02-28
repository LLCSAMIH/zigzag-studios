import HeroSection from "@/components/HeroSection";
import WhyVisualsSection from "@/components/WhyVisualsSection";
import WhyDiscoveryCallSection from "@/components/WhyDiscoveryCallSection";
import HomePortfolioPreview from "@/components/HomePortfolioPreview";
import HomeServicesOverview from "@/components/HomeServicesOverview";
import MatterportSection from "@/components/MatterportSection";
import RealtorsLoveSection from "@/components/RealtorsLoveSection";
import HomeHowItWorksSection from "@/components/HomeHowItWorksSection";
import HomeCTASection from "@/components/HomeCTASection";
import ServiceAreasSection from "@/components/ServiceAreasSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WhyVisualsSection />
      <WhyDiscoveryCallSection />
      <HomePortfolioPreview />
      <HomeServicesOverview />
      <MatterportSection />
      <RealtorsLoveSection />
      <HomeHowItWorksSection />
      <HomeCTASection />
      <ServiceAreasSection />
    </main>
  );
}
