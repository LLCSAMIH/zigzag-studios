"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";

export default function QuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
    >
      <p
        className="font-sans max-w-full md:max-w-[75%]"
        style={{
          fontSize: "clamp(2.2rem, 3vw, 3.6rem)",
          lineHeight: 1.15,
          letterSpacing: "-0.05rem",
          color: "var(--gray300)",
        }}
      >
        At ZigZag Studio, we combine technical precision with creative vision.
        We believe visual content is powerful when it tells a story — clearly,
        beautifully, and with purpose. We always keep the bigger picture in
        mind: your brand, your audience — and your business impact.
      </p>
    </section>
  );
}
