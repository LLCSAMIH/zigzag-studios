"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import TransitionLink from "@/components/TransitionLink";

export default function HomeAboutTeaser() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
      // To revert: remove style prop and change text-gray100 back to text-gray900
      style={{ backgroundColor: "#F0F2F5" }}
    >
      <p
        className="text-gray100 font-sans max-w-full md:max-w-[70%]"
        style={{
          fontSize: "clamp(2.2rem, 3vw, 3.6rem)",
          lineHeight: 1.15,
          letterSpacing: "-0.05rem",
        }}
      >
        Hi, we are ZigZag Studio. As a design-driven photography studio based in
        New Jersey, we combine technical precision with creative vision.
        Together, we create premium visual content for real estate, commercial,
        and event clients that generates relevance, resonance and results.
      </p>
      <TransitionLink
        href="/about"
        className="inline-block font-sans text-gray100 relative group"
        style={{
          fontSize: "2.2rem",
          letterSpacing: "-0.05rem",
          marginTop: "4rem",
        }}
      >
        Learn more
        <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
      </TransitionLink>
    </section>
  );
}
