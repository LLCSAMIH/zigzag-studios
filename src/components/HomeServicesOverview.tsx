"use client";

import { useRef } from "react";
import { services } from "@/data/services";
import { useInView } from "@/lib/useInView";
import TransitionLink from "@/components/TransitionLink";

export default function HomeServicesOverview() {
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
        Our Services
      </h2>

      <div>
        <div style={{ height: "1px", background: "var(--gray250)" }} />
        {services.map((service) => (
          <div key={service.number}>
            <div
              className="flex items-center justify-between transition-colors duration-300 hover:bg-gray200"
              style={{ padding: "2.4rem 0", willChange: "background-color" }}
            >
              <span
                className="font-sans text-gray900"
                style={{
                  fontSize: "2.2rem",
                  letterSpacing: "-0.05rem",
                }}
              >
                {service.name}
              </span>
              <span
                className="font-sans text-gray900"
                style={{
                  fontSize: "2rem",
                  letterSpacing: "-0.05rem",
                }}
              >
                {service.number}
              </span>
            </div>
            <div style={{ height: "1px", background: "var(--gray250)" }} />
          </div>
        ))}
      </div>

      <TransitionLink
        href="/services"
        className="inline-block font-sans text-gray900 relative group"
        style={{
          fontSize: "2.2rem",
          letterSpacing: "-0.05rem",
          marginTop: "4rem",
        }}
      >
        Explore services
        <span className="absolute bottom-0 left-0 w-0 h-px bg-gray900 transition-all duration-300 group-hover:w-full" />
      </TransitionLink>
    </section>
  );
}
