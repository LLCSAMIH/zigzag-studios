import type { Metadata } from "next";
import { plusJakarta, playfair } from "@/lib/fonts";
import { TransitionProvider } from "@/lib/TransitionContext";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import ServicePanel from "@/components/ServicePanel";
import GlobalLens from "@/components/GlobalLens";
import FooterCTA from "@/components/FooterCTA";
import FooterBar from "@/components/FooterBar";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "ZigZag Studio | Real Estate Photography — Somerset, Hoboken, NYC, NJ",
  description:
    "Professional real estate photography, drone aerials, 3D virtual tours, and AI virtual staging. Serving Somerset, Hoboken, NYC, Brooklyn, Philadelphia, Bergen County and the tri-state area.",
  openGraph: {
    title:
      "ZigZag Studio | Real Estate Photography — Somerset, Hoboken, NYC, NJ",
    description:
      "Professional real estate photography, drone aerials, 3D virtual tours, and AI virtual staging serving the tri-state area.",
    url: "https://zigzagstudio.com",
    siteName: "ZigZag Studio",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} ${playfair.variable}`}>
        <TransitionProvider>
          <div id="page-wrapper" className="page-wrapper">
            <GlobalLens>
              <TopBar />
              {children}
            </GlobalLens>
            <FooterCTA />
            <FooterBar />
          </div>
          <BottomNav />
          <ServicePanel />
        </TransitionProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ZigZag Studio",
              description:
                "Professional real estate photography and videography serving Somerset, Hoboken, NYC, Brooklyn, Philadelphia, and Bergen County",
              url: "https://zigzagstudio.com",
              telephone: "+19085694458",
              email: "sfeirjean1@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "NJ",
                addressCountry: "US",
              },
              areaServed: [
                "Somerset, NJ",
                "Hoboken, NJ",
                "New York City, NY",
                "Brooklyn, NY",
                "Philadelphia, PA",
                "Bergen County, NJ",
              ],
              priceRange: "$$",
              image: "https://zigzagstudio.com/logo.svg",
              sameAs: [],
            }),
          }}
        />
      </body>
    </html>
  );
}
