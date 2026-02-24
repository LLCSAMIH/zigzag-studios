import HeroSection from "@/components/HeroSection";
import HomeAboutTeaser from "@/components/HomeAboutTeaser";
import HomePortfolioPreview from "@/components/HomePortfolioPreview";
import HomeServicesOverview from "@/components/HomeServicesOverview";
import QuoteSection from "@/components/QuoteSection";
import FooterCTA from "@/components/FooterCTA";
import FooterBar from "@/components/FooterBar";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <HomeAboutTeaser />
      <HomePortfolioPreview />
      <HomeServicesOverview />
      <QuoteSection />
      <FooterCTA />
      <FooterBar />
    </main>
  );
}
