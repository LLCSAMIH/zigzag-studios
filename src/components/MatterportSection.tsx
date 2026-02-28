"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import MatterportEmbed from "@/components/MatterportEmbed";

export default function MatterportSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
    >
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
        Walk Through a Listing — From Anywhere
      </h2>
      <p
        className="font-sans"
        style={{
          fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
          letterSpacing: "-0.05rem",
          lineHeight: 1.4,
          color: "var(--gray300)",
          marginBottom: "4rem",
          maxWidth: "60rem",
        }}
      >
        Give buyers an immersive, self-guided property experience on any device.
        Matterport 3D tours reduce unnecessary showings and attract more serious
        offers.
      </p>

      <MatterportEmbed />
    </section>
  );
}
