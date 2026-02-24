"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { processSteps } from "@/data/process";

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
      style={{ backgroundColor: "#F0F2F5" }}
    >
      <h2
        className="font-sans text-gray100"
        style={{
          fontSize: "clamp(4.2rem, 6vw, 6.8rem)",
          lineHeight: 1,
          letterSpacing: "-0.2rem",
          marginBottom: "6rem",
        }}
      >
        How We Work
      </h2>

      <div>
        <div style={{ height: "1px", background: "var(--gray300)" }} />
        {processSteps.map((step) => (
          <div key={step.number}>
            <div
              className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-0"
              style={{ padding: "2.4rem 0" }}
            >
              <span
                className="font-sans text-gray100"
                style={{
                  fontSize: "2.2rem",
                  letterSpacing: "-0.05rem",
                  flex: "0 0 8rem",
                }}
              >
                {step.number}
              </span>
              <span
                className="font-sans text-gray100"
                style={{
                  fontSize: "2.2rem",
                  letterSpacing: "-0.05rem",
                  flex: "1 1 30%",
                }}
              >
                {step.title}
              </span>
              <span
                className="font-sans"
                style={{
                  fontSize: "2rem",
                  letterSpacing: "-0.05rem",
                  color: "var(--gray250)",
                  flex: "1 1 50%",
                }}
              >
                {step.description}
              </span>
            </div>
            <div style={{ height: "1px", background: "var(--gray300)" }} />
          </div>
        ))}
      </div>
    </section>
  );
}
