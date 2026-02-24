"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { stats } from "@/data/stats";

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-medium`}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ gap: "clamp(2rem, 4vw, 4rem)" }}
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <span
              className="font-sans text-gray900 block"
              style={{
                fontSize: "clamp(4.4rem, 6vw, 6.8rem)",
                lineHeight: 1,
                letterSpacing: "-0.2rem",
                marginBottom: "1.2rem",
              }}
            >
              {stat.value}
            </span>
            <span
              className="font-sans"
              style={{
                fontSize: "2rem",
                color: "var(--gray300)",
                letterSpacing: "-0.05rem",
              }}
            >
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
