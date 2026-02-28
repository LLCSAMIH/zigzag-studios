"use client";

import { useRef } from "react";
import { services } from "@/data/services";
import { useInView } from "@/lib/useInView";
import TransitionLink from "@/components/TransitionLink";
import { serviceIconMap } from "@/components/Icons";

export default function HomeServicesOverview() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
      style={{ backgroundColor: "#F0F2F5" }}
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
        What We Deliver
      </p>
      <h2
        className="font-sans text-gray100"
        style={{
          fontSize: "clamp(3.6rem, 6vw, 6.8rem)",
          lineHeight: 1,
          letterSpacing: "-0.2rem",
          marginBottom: "2rem",
        }}
      >
        Stop Guessing Which Services You Need
      </h2>
      <p
        className="font-sans"
        style={{
          fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
          letterSpacing: "-0.05rem",
          lineHeight: 1.4,
          color: "var(--gray250)",
          marginBottom: "6rem",
          maxWidth: "60rem",
        }}
      >
        On our discovery call, we&rsquo;ll build the exact package that gets
        your listing to its goals. Here&rsquo;s what we can deliver:
      </p>

      {/* 3x3 Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.number}
            className="service-card"
            style={{
              borderRadius: "1.6rem",
              padding: "3.2rem 2.8rem",
              background: "rgba(28,46,62,0.04)",
              border: "1px solid rgba(28,46,62,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {(() => {
              const Icon = serviceIconMap[service.number];
              return Icon ? (
                <Icon
                  style={{
                    width: "3.2rem",
                    height: "3.2rem",
                    color: "var(--accent)",
                  }}
                />
              ) : null;
            })()}
            <span
              className="font-sans text-gray100"
              style={{
                fontSize: "2rem",
                letterSpacing: "-0.05rem",
                fontWeight: 600,
                lineHeight: 1.15,
              }}
            >
              {service.name}
            </span>
            <span
              className="font-sans"
              style={{
                fontSize: "1.6rem",
                letterSpacing: "-0.03rem",
                color: "var(--gray250)",
                lineHeight: 1.4,
              }}
            >
              {service.description}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6" style={{ marginTop: "4rem" }}>
        <TransitionLink
          href="/services"
          className="font-sans text-white inline-block"
          style={{
            background: "var(--accent)",
            borderRadius: "10rem",
            padding: "1.4rem 3.6rem",
            fontSize: "clamp(1.6rem, 2vw, 2rem)",
            letterSpacing: "-0.05rem",
          }}
        >
          Explore Packages
        </TransitionLink>
        <TransitionLink
          href="/contact"
          className="inline-block font-sans text-gray100 relative group"
          style={{
            fontSize: "2rem",
            letterSpacing: "-0.05rem",
          }}
        >
          Book a Discovery Call
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
        </TransitionLink>
      </div>
    </section>
  );
}
