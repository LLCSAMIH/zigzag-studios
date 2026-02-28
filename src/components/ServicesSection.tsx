"use client";

import { useRef, useState } from "react";
import { services } from "@/data/services";
import { useInView } from "@/lib/useInView";

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
        Our Services &amp; Packages
      </h2>

      <div>
        <div style={{ height: "1px", background: "var(--gray300)" }} />
        {services.map((service, i) => (
          <div key={service.number}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between text-left transition-colors duration-300"
              style={{
                padding: "2.4rem 0",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                fontFamily: "inherit",
              }}
            >
              <span
                className="font-sans text-gray100"
                style={{
                  fontSize: "2rem",
                  letterSpacing: "-0.05rem",
                  flex: "0 0 5rem",
                  opacity: 0.4,
                }}
              >
                {service.number}
              </span>
              <span
                className="font-sans text-gray100"
                style={{
                  fontSize: "2.2rem",
                  letterSpacing: "-0.05rem",
                  flex: "1",
                  textAlign: "left",
                }}
              >
                {service.name}
              </span>
              <span
                className="font-sans flex-shrink-0"
                style={{
                  fontSize: "2.4rem",
                  marginLeft: "2rem",
                  color: "var(--accent)",
                  transition: "transform 0.3s ease",
                  transform:
                    openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            <div
              style={{
                maxHeight: openIndex === i ? "30rem" : "0",
                opacity: openIndex === i ? 1 : 0,
                overflow: "hidden",
                transition: "max-height 0.4s ease, opacity 0.3s ease",
              }}
            >
              <p
                className="font-sans"
                style={{
                  fontSize: "2rem",
                  letterSpacing: "-0.05rem",
                  color: "var(--gray250)",
                  lineHeight: 1.5,
                  paddingBottom: "2.4rem",
                  paddingLeft: "5rem",
                  maxWidth: "70%",
                }}
              >
                {service.description}
              </p>
            </div>
            <div style={{ height: "1px", background: "var(--gray300)" }} />
          </div>
        ))}
      </div>
    </section>
  );
}
