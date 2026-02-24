import HeroSection from "@/components/HeroSection";
import HomeAboutTeaser from "@/components/HomeAboutTeaser";
import HomePortfolioPreview from "@/components/HomePortfolioPreview";
import HomeServicesOverview from "@/components/HomeServicesOverview";
import QuoteSection from "@/components/QuoteSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HomeAboutTeaser />
      <HomePortfolioPreview />
      <HomeServicesOverview />
      <QuoteSection />
    </main>
  );
}
