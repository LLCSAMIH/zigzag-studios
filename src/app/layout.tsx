import type { Metadata } from "next";
import { plusJakarta, playfair } from "@/lib/fonts";
import { TransitionProvider } from "@/lib/TransitionContext";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import ServicePanel from "@/components/ServicePanel";
import GlobalLens from "@/components/GlobalLens";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZigZag Studio | Premium Photography & Videography in New Jersey",
  description:
    "Professional real estate, commercial, food, and event photography and videography in NJ. HDR photos, drone coverage, 3D virtual tours, and AI virtual staging.",
  openGraph: {
    title: "ZigZag Studio | Premium Photography & Videography in New Jersey",
    description:
      "Professional real estate, commercial, food, and event photography and videography in NJ.",
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
          <GlobalLens>
            <TopBar />
            <div id="page-wrapper" className="page-wrapper">
              {children}
            </div>
          </GlobalLens>
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
                "Premium photography and videography studio in New Jersey",
              url: "https://zigzagstudio.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "NJ",
                addressCountry: "US",
              },
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
