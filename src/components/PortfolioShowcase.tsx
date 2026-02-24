"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import { useInView } from "@/lib/useInView";

const showcaseImages = [
  "/portfolio/082A1374-HDR.jpg",
  "/portfolio/082A1410-HDR.jpg",
  "/portfolio/082A1431-HDR.jpg",
  "/portfolio/082A1467-HDR.jpg",
  "/portfolio/082A1494-HDR.jpg",
  "/portfolio/082A1500-HDR.jpg",
  "/portfolio/082A1521-HDR.jpg",
  "/portfolio/082A1446-HDR.jpg",
  "/portfolio/082A1476-HDR.jpg",
  "/portfolio/082A1392-HDR.jpg",
  "/portfolio/082A1536-HDR.jpg",
  "/portfolio/082A1509-HDR.jpg",
];

export default function PortfolioShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(sectionRef);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "right" ? 500 : -500,
      behavior: "smooth",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding-left section-v-large`}
      style={{ overflow: "visible" }}
    >
      <div
        className="flex items-start justify-between section-padding"
        style={{ paddingLeft: 0, marginBottom: "4rem" }}
      >
        <h2
          className="font-sans text-gray900"
          style={{
            fontSize: "clamp(4.2rem, 6vw, 6.8rem)",
            lineHeight: 1,
            letterSpacing: "-0.2rem",
          }}
        >
          Selected Shots
        </h2>

        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="flex items-center justify-center rounded-full border border-gray250 text-gray900 transition-opacity duration-100 hover:opacity-70"
            style={{ width: "4.6rem", height: "4.6rem" }}
            aria-label="Previous"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="flex items-center justify-center rounded-full border border-gray250 text-gray900 transition-opacity duration-100 hover:opacity-70"
            style={{ width: "4.6rem", height: "4.6rem" }}
            aria-label="Next"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 hide-scrollbar section-padding"
        style={{
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          paddingBottom: "2rem",
        }}
      >
        {showcaseImages.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 relative overflow-hidden"
            style={{
              width: "44rem",
              height: "32rem",
              borderRadius: "2rem",
              scrollSnapAlign: "start",
            }}
          >
            <Image
              src={src}
              alt={`Portfolio shot ${i + 1}`}
              fill
              className="object-cover"
              sizes="440px"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
