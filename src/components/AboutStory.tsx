"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";

export default function AboutStory() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
      style={{ backgroundColor: "#F0F2F5" }}
    >
      <div style={{ maxWidth: "70%" }}>
        <p
          className="text-gray100 font-sans"
          style={{
            fontSize: "clamp(2.2rem, 3vw, 3.6rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.05rem",
            marginBottom: "4rem",
          }}
        >
          Hi, we are ZigZag Studio. As a design-driven photography studio based
          in New Jersey, we combine technical precision with creative vision.
          Together, we create premium visual content for real estate, commercial,
          and event clients that generates relevance, resonance and results.
        </p>
        <p
          className="font-sans"
          style={{
            fontSize: "clamp(2.2rem, 3vw, 3.6rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.05rem",
            color: "var(--gray250)",
            marginBottom: "4rem",
          }}
        >
          Founded with the belief that every space deserves to be seen at its
          best, ZigZag Studio has grown from a solo operation into a
          multi-disciplinary creative team. From HDR real estate photography to
          drone aerials, 3D virtual tours, and AI-powered virtual staging — we
          bring the full spectrum of modern visual technology to every project.
        </p>
        <p
          className="font-sans"
          style={{
            fontSize: "clamp(2.2rem, 3vw, 3.6rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.05rem",
            color: "var(--gray250)",
          }}
        >
          Our passionate team forms the foundation for everything we do. We
          obsess over light, composition, and detail because we know that
          exceptional visuals drive real business results — faster sales, higher
          engagement, and stronger brand presence. That&apos;s the ZigZag
          difference.
        </p>
      </div>
    </section>
  );
}
