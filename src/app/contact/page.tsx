import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import FooterBar from "@/components/FooterBar";

export const metadata: Metadata = {
  title: "Contact | ZigZag Studio",
  description:
    "Get in touch with ZigZag Studio for premium photography and videography services in New Jersey. Book a session today.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Contact" subtitle="Let's work together" />
      <ContactSection />
      <FooterBar />
    </main>
  );
}
