"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      id="about"
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
    >
      <p
        className="text-gray900 font-sans"
        style={{
          fontSize: "clamp(2.2rem, 3vw, 3.6rem)",
          lineHeight: 1.15,
          letterSpacing: "-0.05rem",
          maxWidth: "70%",
        }}
      >
        Hi, we are ZigZag Studio. As a design-driven photography studio based in
        New Jersey, we combine technical precision with creative vision.
        Together, we create premium visual content for real estate, commercial,
        and event clients that generates relevance, resonance and results. Our
        passionate team forms the foundation for everything we do.
      </p>
      <a
        href="#portfolio"
        className="inline-block font-sans text-gray900 relative group"
        style={{ fontSize: "2.2rem", letterSpacing: "-0.05rem", marginTop: "4rem" }}
      >
        More about us
        <span
          className="absolute bottom-0 left-0 w-0 h-px bg-gray900 transition-all duration-300 group-hover:w-full"
        />
      </a>
    </section>
  );
}
