"use client";

import { useRef } from "react";
import { services } from "@/data/services";
import { useInView } from "@/lib/useInView";

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
    >
      <h2
        className="font-sans text-gray900"
        style={{
          fontSize: "clamp(4.4rem, 6vw, 6.8rem)",
          lineHeight: 1,
          letterSpacing: "-0.4rem",
          marginBottom: "6rem",
        }}
      >
        Our Services &amp; Packages
      </h2>

      <div>
        <div style={{ height: "1px", background: "var(--gray250)" }} />

        {services.map((service) => (
          <div key={service.number}>
            <div
              className="flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-colors duration-300 hover:bg-gray200 gap-2 md:gap-0"
              style={{
                padding: "2.4rem 0",
                willChange: "color, background-color",
              }}
            >
              <span
                className="font-sans text-gray900"
                style={{
                  fontSize: "2.2rem",
                  letterSpacing: "-0.05rem",
                  flex: "1 1 40%",
                }}
              >
                {service.name}
              </span>
              <span
                className="font-sans hidden md:block"
                style={{
                  fontSize: "2rem",
                  letterSpacing: "-0.05rem",
                  color: "var(--gray300)",
                  flex: "1 1 50%",
                }}
              >
                {service.description}
              </span>
              <span
                className="font-sans text-gray900 md:text-right"
                style={{
                  fontSize: "2rem",
                  letterSpacing: "-0.05rem",
                  flex: "0 0 6rem",
                }}
              >
                {service.number}
              </span>
            </div>
            <div style={{ height: "1px", background: "var(--gray250)" }} />
          </div>
        ))}
      </div>
    </section>
  );
}
