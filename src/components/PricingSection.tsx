"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { pricingTiers } from "@/data/pricing";
import TransitionLink from "@/components/TransitionLink";

export default function PricingSection() {
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
          fontSize: "clamp(4.2rem, 6vw, 6.8rem)",
          lineHeight: 1,
          letterSpacing: "-0.2rem",
          marginBottom: "6rem",
        }}
      >
        Packages
      </h2>

      <div
        className="grid grid-cols-1 md:grid-cols-3"
        style={{ gap: "2rem" }}
      >
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col justify-between"
            style={{
              background: "var(--gray200)",
              borderRadius: "2rem",
              padding: "4rem 3rem",
              border: tier.highlighted
                ? "1px solid var(--gray900)"
                : "1px solid transparent",
            }}
          >
            <div>
              <span
                className="font-sans block"
                style={{
                  fontSize: "1.4rem",
                  letterSpacing: "0.1rem",
                  color: "var(--gray300)",
                  textTransform: "uppercase",
                  marginBottom: "1.6rem",
                }}
              >
                {tier.number}
              </span>
              <span
                className="font-sans text-gray900 block"
                style={{
                  fontSize: "3.2rem",
                  letterSpacing: "-0.15rem",
                  lineHeight: 1,
                  marginBottom: "1.2rem",
                }}
              >
                {tier.name}
              </span>
              <p
                className="font-serif italic"
                style={{
                  fontSize: "1.8rem",
                  color: "var(--gray300)",
                  letterSpacing: "-0.05rem",
                  marginBottom: "3.2rem",
                }}
              >
                {tier.tagline}
              </p>

              <ul
                className="flex flex-col"
                style={{ gap: "1.2rem", marginBottom: "4rem" }}
              >
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className="font-sans text-gray900"
                    style={{
                      fontSize: "1.6rem",
                      letterSpacing: "-0.05rem",
                      paddingLeft: "1.6rem",
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        color: "var(--gray300)",
                      }}
                    >
                      —
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <TransitionLink
              href={`/contact?package=${encodeURIComponent(tier.name)}`}
              className="font-sans flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
              style={{
                fontSize: "1.8rem",
                letterSpacing: "-0.05rem",
                borderRadius: "10rem",
                padding: "1.4rem 2.4rem",
                background: tier.highlighted
                  ? "var(--accent)"
                  : "transparent",
                color: tier.highlighted
                  ? "#fff"
                  : "var(--gray900)",
                border: tier.highlighted
                  ? "none"
                  : "1px solid var(--gray250)",
              }}
            >
              Book a Session
            </TransitionLink>
          </div>
        ))}
      </div>
    </section>
  );
}
