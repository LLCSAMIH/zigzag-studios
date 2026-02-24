"use client";

import { useRef, useCallback } from "react";
import { useInView } from "@/lib/useInView";
import TransitionLink from "@/components/TransitionLink";

const insights = [
  {
    title: "Why HDR Photography Sells Homes Faster",
    tags: ["Real Estate", "Photography", "Tips"],
    date: "Jan 2026",
  },
  {
    title: "5 Tips for Stunning Real Estate Photos",
    tags: ["Real Estate", "Guide"],
    date: "Dec 2025",
  },
  {
    title: "The Power of Drone Photography in Real Estate",
    tags: ["Drone", "Aerial", "Technology"],
    date: "Nov 2025",
  },
  {
    title: "Virtual Staging vs Traditional Staging",
    tags: ["AI", "Virtual Staging", "Trends"],
    date: "Oct 2025",
  },
  {
    title: "Behind the Lens: A Day with ZigZag Studio",
    tags: ["Behind the Scenes", "Studio"],
    date: "Sep 2025",
  },
];

export default function InsightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(sectionRef);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 400;
    scrollRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding-left section-v-large`}
    >
      <div
        className="flex items-start justify-between section-padding"
        style={{ paddingLeft: 0, marginBottom: "4rem" }}
      >
        <h2
          className="font-sans text-gray900"
          style={{
            fontSize: "6.8rem",
            lineHeight: 1,
            letterSpacing: "-0.4rem",
          }}
        >
          Capture+
          <br />
          <span className="font-serif italic">Create</span>
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="flex items-center justify-center rounded-full border border-gray250 text-gray900 transition-opacity duration-100 hover:opacity-70"
            style={{ width: "4.6rem", height: "4.6rem" }}
            aria-label="Previous"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex items-center justify-center rounded-full border border-gray250 text-gray900 transition-opacity duration-100 hover:opacity-70"
            style={{ width: "4.6rem", height: "4.6rem" }}
            aria-label="Next"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 hide-scrollbar"
        style={{
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingRight: "10rem",
          paddingBottom: "2rem",
        }}
      >
        {insights.map((insight, i) => (
          <article
            key={i}
            className="flex-shrink-0 flex flex-col justify-between"
            style={{
              width: "38rem",
              height: "32rem",
              background: "var(--gray200)",
              borderRadius: "2rem",
              padding: "3rem",
              scrollSnapAlign: "start",
            }}
          >
            <div className="flex gap-3 flex-wrap">
              {insight.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-sans text-gray900"
                  style={{
                    fontSize: "1.2rem",
                    letterSpacing: "-0.05rem",
                    padding: "0.6rem 1.4rem",
                    borderRadius: "10rem",
                    border: "1px solid var(--gray250)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div>
              <h3
                className="font-sans text-gray900"
                style={{
                  fontSize: "2.4rem",
                  letterSpacing: "-0.1rem",
                  lineHeight: 1.15,
                  marginBottom: "1.2rem",
                }}
              >
                {insight.title}
              </h3>
              <span
                className="font-sans"
                style={{
                  fontSize: "1.4rem",
                  color: "var(--gray300)",
                }}
              >
                {insight.date}
              </span>
            </div>
          </article>
        ))}

        <article
          className="flex-shrink-0 flex flex-col items-center justify-center"
          style={{
            width: "38rem",
            height: "32rem",
            background: "var(--gray200)",
            borderRadius: "2rem",
            padding: "3rem",
            scrollSnapAlign: "start",
          }}
        >
          <p
            className="font-sans text-gray900 text-center"
            style={{ fontSize: "2.4rem", letterSpacing: "-0.1rem" }}
          >
            Want to see more?
          </p>
          <TransitionLink
            href="/contact"
            className="font-sans text-gray900 relative group"
            style={{ fontSize: "1.8rem", marginTop: "1.6rem" }}
          >
            Get in touch
            <span className="absolute bottom-0 left-0 w-0 h-px bg-gray900 transition-all duration-300 group-hover:w-full" />
          </TransitionLink>
        </article>
      </div>
    </section>
  );
}
