"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { processSteps } from "@/data/process";
import TransitionLink from "@/components/TransitionLink";

export default function HomeHowItWorksSection() {
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
        How It Works
      </p>
      <h2
        className="font-sans text-gray900"
        style={{
          fontSize: "clamp(3.6rem, 6vw, 6.8rem)",
          lineHeight: 1,
          letterSpacing: "-0.2rem",
          marginBottom: "6rem",
        }}
      >
        3 Simple Steps to{" "}
        <span className="font-serif italic">Premium Results</span>
      </h2>

      <div>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.12)" }} />
        {processSteps.map((step) => (
          <div key={step.number}>
            <div
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0"
              style={{ padding: "3.6rem 0" }}
            >
              <span
                className="font-sans text-gray900"
                style={{
                  fontSize: "clamp(5rem, 7vw, 8rem)",
                  letterSpacing: "-0.3rem",
                  lineHeight: 1,
                  flex: "0 0 12rem",
                  opacity: 0.15,
                }}
              >
                {step.number}
              </span>
              <span
                className="font-sans text-gray900"
                style={{
                  fontSize: "clamp(2.2rem, 3vw, 2.8rem)",
                  letterSpacing: "-0.05rem",
                  flex: "0 0 auto",
                  minWidth: "28rem",
                  fontWeight: 500,
                }}
              >
                {step.title}
              </span>
              <span
                className="font-sans"
                style={{
                  fontSize: "clamp(1.8rem, 2vw, 2rem)",
                  letterSpacing: "-0.05rem",
                  color: "var(--gray300)",
                  flex: "1",
                  lineHeight: 1.4,
                }}
              >
                {step.description}
              </span>
            </div>
            <div
              style={{ height: "1px", background: "rgba(255,255,255,0.12)" }}
            />
          </div>
        ))}
      </div>

      <TransitionLink
        href="/contact"
        className="font-sans text-white inline-block"
        style={{
          background: "var(--accent)",
          borderRadius: "10rem",
          padding: "1.6rem 4rem",
          fontSize: "clamp(1.6rem, 2vw, 2rem)",
          letterSpacing: "-0.05rem",
          marginTop: "4rem",
        }}
      >
        Schedule Your Free Discovery Call
      </TransitionLink>
    </section>
  );
}
