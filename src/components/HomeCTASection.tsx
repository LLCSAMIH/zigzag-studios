"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import TransitionLink from "@/components/TransitionLink";

export default function HomeCTASection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <h2>
          <span
            className="font-sans text-gray900 block"
            style={{
              fontSize: "clamp(4.2rem, 7vw, 8rem)",
              lineHeight: 1,
              letterSpacing: "-0.3rem",
            }}
          >
            Ready to Sell
          </span>
          <span
            className="font-serif italic block"
            style={{
              fontSize: "clamp(4.2rem, 7vw, 8rem)",
              lineHeight: 1,
              letterSpacing: "-0.3rem",
              color: "var(--accent)",
            }}
          >
            Your Next Listing Faster?
          </span>
        </h2>

        <div className="flex flex-col gap-4 md:items-end">
          <TransitionLink
            href="/contact"
            className="font-sans text-white self-start md:self-auto"
            style={{
              background: "var(--accent)",
              borderRadius: "10rem",
              padding: "1.6rem 4rem",
              fontSize: "clamp(1.6rem, 2vw, 2rem)",
              letterSpacing: "-0.05rem",
              display: "inline-block",
            }}
          >
            Schedule Your Free Discovery Call
          </TransitionLink>
          <p
            className="font-sans"
            style={{
              fontSize: "1.6rem",
              color: "var(--gray300)",
              letterSpacing: "-0.03rem",
            }}
          >
            No commitment — just a conversation about your listings.
          </p>
        </div>
      </div>
    </section>
  );
}
