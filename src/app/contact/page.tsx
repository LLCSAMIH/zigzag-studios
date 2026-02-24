import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import FooterBar from "@/components/FooterBar";

export const metadata: Metadata = {
  title: "Book a Session | ZigZag Studio",
  description:
    "Book a real estate photography session with ZigZag Studio in New Jersey. Premium photography, drone, 3D tours and more.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero title="Book a Session" subtitle="Let's create together." />
      <ContactSection />
      <FooterBar />
    </main>
  );
}
