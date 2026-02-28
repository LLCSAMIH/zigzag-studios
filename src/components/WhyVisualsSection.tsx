"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import { XIcon, CheckIcon } from "@/components/Icons";

const comparisons = [
  {
    pain: "Few clicks on MLS — listings get lost",
    benefit: "More views, showings, and qualified inquiries",
  },
  {
    pain: "Listings look ordinary and blend in online",
    benefit: "Properties look premium and irresistible",
  },
  {
    pain: "Buyers unsure what to expect from photos",
    benefit: "Buyers arrive confident and ready to make offers",
  },
  {
    pain: "You spend hours editing and formatting photos",
    benefit: "We deliver ready-to-use marketing visuals in 24hrs",
  },
];

export default function WhyVisualsSection() {
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
        Why It Matters
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
        Professional Photography Isn&rsquo;t Just &ldquo;Pretty Pictures&rdquo;
        —{" "}
        <span className="font-serif italic">It&rsquo;s Strategic Marketing</span>
      </h2>

      {/* Table header */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ marginBottom: "0" }}
      >
        <div
          style={{
            paddingBottom: "1.6rem",
            borderBottom: "1px solid var(--gray300)",
          }}
        >
          <span
            className="font-sans"
            style={{
              fontSize: "1.3rem",
              letterSpacing: "0.1rem",
              textTransform: "uppercase",
              color: "var(--gray250)",
            }}
          >
            Current Listing Experience
          </span>
        </div>
        <div
          style={{
            paddingBottom: "1.6rem",
            borderBottom: "2px solid var(--accent)",
          }}
        >
          <span
            className="font-sans"
            style={{
              fontSize: "1.3rem",
              letterSpacing: "0.1rem",
              textTransform: "uppercase",
              color: "var(--accent)",
            }}
          >
            With ZigZag Studio
          </span>
        </div>
      </div>

      {/* Comparison rows */}
      {comparisons.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            borderBottom: "1px solid var(--gray300)",
            padding: "2.8rem 0",
          }}
        >
          <div
            className="flex items-start gap-3"
            style={{ paddingRight: "3rem" }}
          >
            <XIcon
              style={{
                width: "1.6rem",
                height: "1.6rem",
                color: "var(--gray300)",
                flexShrink: 0,
                marginTop: "0.4rem",
                strokeWidth: 2,
              }}
            />
            <span
              className="font-sans text-gray100"
              style={{
                fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
                letterSpacing: "-0.05rem",
                lineHeight: 1.35,
                opacity: 0.5,
              }}
            >
              {row.pain}
            </span>
          </div>
          <div
            className="flex items-start gap-3 mt-3 md:mt-0"
            style={{ paddingLeft: "0" }}
          >
            <CheckIcon
              style={{
                width: "1.6rem",
                height: "1.6rem",
                color: "var(--accent)",
                flexShrink: 0,
                marginTop: "0.4rem",
                strokeWidth: 2.5,
              }}
            />
            <span
              className="font-sans text-gray100"
              style={{
                fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
                letterSpacing: "-0.05rem",
                lineHeight: 1.35,
              }}
            >
              {row.benefit}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}
