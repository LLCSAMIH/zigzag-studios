"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import TransitionLink from "@/components/TransitionLink";

export default function FooterCTA() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`relative flex flex-col md:flex-row items-end justify-between section-reveal ${isVisible ? "visible" : ""} section-padding section-v-hero gap-12`}
      // To revert: remove backgroundColor, restore gradient to var(--gray100), change text-gray100 back to text-gray100, bg-gray100 to bg-gray100
      style={{
        minHeight: "100vh",
        backgroundColor: "#ffffff",
      }}
    >
      <h2>
        <span
          className="font-sans text-gray100 block"
          style={{
            fontSize: "clamp(5.2rem, 8vw, 9.2rem)",
            lineHeight: 1,
            letterSpacing: "-0.4rem",
          }}
        >
          Ready to elevate
        </span>
        <span
          className="font-serif italic text-gray100 block"
          style={{
            fontSize: "clamp(5.2rem, 8vw, 9.2rem)",
            lineHeight: 1,
            letterSpacing: "-0.4rem",
          }}
        >
          your visuals.
        </span>
      </h2>

      <TransitionLink
        href="/contact"
        className="font-sans text-gray100 relative group"
        style={{
          fontSize: "clamp(2.8rem, 4vw, 4.2rem)",
          letterSpacing: "-0.1rem",
          marginRight: "8rem",
        }}
      >
        Book a Session
        <span className="absolute bottom-0 left-0 w-full h-px bg-gray100 origin-left transition-transform duration-300 group-hover:scale-x-0" />
        <span className="absolute bottom-0 left-0 w-full h-px bg-gray100 origin-right scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
      </TransitionLink>
    </section>
  );
}
