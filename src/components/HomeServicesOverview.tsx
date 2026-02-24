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
      // To revert: remove style prop, change text-gray100 back to text-gray100, bg-gray100 to bg-gray100, var(--gray300) dividers to var(--gray250), hover:bg-gray300 to hover:bg-gray300
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
        Our Services
      </h2>

      <div>
        <div style={{ height: "1px", background: "var(--gray300)" }} />
        {services.map((service) => (
          <div key={service.number}>
            <div
              className="flex items-center justify-between transition-colors duration-300 hover:bg-gray300"
              style={{ padding: "2.4rem 0", willChange: "background-color" }}
            >
              <span
                className="font-sans text-gray100"
                style={{
                  fontSize: "2.2rem",
                  letterSpacing: "-0.05rem",
                }}
              >
                {service.name}
              </span>
              <span
                className="font-sans text-gray100"
                style={{
                  fontSize: "2rem",
                  letterSpacing: "-0.05rem",
                }}
              >
                {service.number}
              </span>
            </div>
            <div style={{ height: "1px", background: "var(--gray300)" }} />
          </div>
        ))}
      </div>

      <TransitionLink
        href="/services"
        className="inline-block font-sans text-gray100 relative group"
        style={{
          fontSize: "2.2rem",
          letterSpacing: "-0.05rem",
          marginTop: "4rem",
        }}
      >
        Explore services
        <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
      </TransitionLink>
    </section>
  );
}
