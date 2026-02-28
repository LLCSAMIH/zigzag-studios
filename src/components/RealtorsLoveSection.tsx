"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { CheckIcon, StarIcon } from "@/components/Icons";

const benefits = [
  "Faster listing sales — professional visuals sell 32% faster on average",
  "Higher online engagement — more clicks, saves, and showing requests",
  "Ready-to-use marketing visuals — MLS, Zillow, social, print-ready",
  "Quick turnaround — 24-48 hour delivery on every package",
  "Professional & reliable — one point of contact from booking to delivery",
];

export default function RealtorsLoveSection() {
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
        Trusted by Realtors
      </p>
      <h2
        className="font-sans text-gray100"
        style={{
          fontSize: "clamp(3.6rem, 6vw, 6.8rem)",
          lineHeight: 1,
          letterSpacing: "-0.2rem",
          marginBottom: "6rem",
        }}
      >
        What Realtors Love About Working With Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Benefits list */}
        <div className="flex flex-col gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-4">
              <span
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: "2.8rem",
                  height: "2.8rem",
                  borderRadius: "50%",
                  background: "rgba(242,97,1,0.12)",
                  marginTop: "0.3rem",
                }}
              >
                <CheckIcon
                  style={{
                    width: "1.4rem",
                    height: "1.4rem",
                    color: "var(--accent)",
                    strokeWidth: 2.5,
                  }}
                />
              </span>
              <span
                className="font-sans text-gray100"
                style={{
                  fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
                  letterSpacing: "-0.05rem",
                  lineHeight: 1.35,
                }}
              >
                {b}
              </span>
            </div>
          ))}
        </div>

        {/* Google Reviews placeholder */}
        <div
          style={{
            borderRadius: "2rem",
            padding: "4rem",
            background: "rgba(28,46,62,0.05)",
            border: "1px solid rgba(28,46,62,0.1)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "1.6rem",
            minHeight: "28rem",
          }}
        >
          <div style={{ display: "flex", gap: "0.4rem" }}>
            {[1, 2, 3, 4, 5].map((n) => (
              <StarIcon
                key={n}
                style={{
                  width: "2.4rem",
                  height: "2.4rem",
                  color: "#FBBC04",
                }}
              />
            ))}
          </div>
          <span
            className="font-sans text-gray100"
            style={{
              fontSize: "2.4rem",
              letterSpacing: "-0.05rem",
              textAlign: "center",
              fontWeight: 600,
            }}
          >
            Google Reviews
          </span>
          <span
            className="font-sans"
            style={{
              fontSize: "1.6rem",
              letterSpacing: "-0.03rem",
              color: "var(--gray250)",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Live review feed coming soon — we&rsquo;re building our reputation
            one listing at a time.
          </span>
        </div>
      </div>
    </section>
  );
}
