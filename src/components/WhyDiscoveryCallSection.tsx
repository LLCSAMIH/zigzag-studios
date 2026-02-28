"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";
import TransitionLink from "@/components/TransitionLink";
import { CheckIcon } from "@/components/Icons";

const benefits = [
  {
    title: "Tailored media strategy",
    description:
      "Photo, drone, 3D tour, virtual staging — we recommend exactly what your listing needs.",
  },
  {
    title: "Maximize ROI on your listings",
    description:
      "Know exactly what you're getting, what it costs, and how it drives faster sales.",
  },
  {
    title: "Save time, increase sales",
    description:
      "Agents who schedule a call often close listings faster and see higher engagement online.",
  },
];

export default function WhyDiscoveryCallSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left: heading */}
        <div>
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
            Free Discovery Call
          </p>
          <h2
            className="font-sans text-gray900"
            style={{
              fontSize: "clamp(3.6rem, 5vw, 6rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.2rem",
            }}
          >
            Instead of guessing which package is right,{" "}
            <span className="font-serif italic">a 15-minute call helps you</span>
          </h2>
        </div>

        {/* Right: benefits + CTA */}
        <div className="flex flex-col gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-4">
              <span
                className="flex items-center justify-center flex-shrink-0"
                style={{
                  width: "3.2rem",
                  height: "3.2rem",
                  borderRadius: "50%",
                  background: "rgba(242,97,1,0.15)",
                  marginTop: "0.3rem",
                }}
              >
                <CheckIcon
                  style={{
                    width: "1.6rem",
                    height: "1.6rem",
                    color: "var(--accent)",
                    strokeWidth: 2.5,
                  }}
                />
              </span>
              <div>
                <span
                  className="font-sans text-gray900 block"
                  style={{
                    fontSize: "clamp(2rem, 2.5vw, 2.4rem)",
                    letterSpacing: "-0.05rem",
                    lineHeight: 1.2,
                    marginBottom: "0.4rem",
                  }}
                >
                  {b.title}
                </span>
                <span
                  className="font-sans"
                  style={{
                    fontSize: "clamp(1.6rem, 2vw, 1.8rem)",
                    letterSpacing: "-0.03rem",
                    lineHeight: 1.4,
                    color: "var(--gray300)",
                  }}
                >
                  {b.description}
                </span>
              </div>
            </div>
          ))}

          <TransitionLink
            href="/contact"
            className="font-sans text-white self-start"
            style={{
              background: "var(--accent)",
              borderRadius: "10rem",
              padding: "1.6rem 4rem",
              fontSize: "clamp(1.6rem, 2vw, 2rem)",
              letterSpacing: "-0.05rem",
              marginTop: "1rem",
              display: "inline-block",
            }}
          >
            Schedule Your Free Discovery Call
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
