"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { projects, homepageCategories } from "@/data/portfolio";
import { useInView } from "@/lib/useInView";
import TransitionLink from "@/components/TransitionLink";

export default function HomePortfolioPreview() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);
  const [activeCategory, setActiveCategory] = useState<string>("interior");

  const filtered = projects.filter((p) => {
    if (activeCategory === "drone") {
      return (
        p.category === "drone" ||
        p.tags.some(
          (t) =>
            t.toLowerCase().includes("aerial") ||
            t.toLowerCase().includes("twilight")
        )
      );
    }
    return p.category === activeCategory;
  });

  const displayed = filtered.length > 0 ? filtered.slice(0, 3) : projects.slice(0, 3);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
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
        Featured Work
      </p>
      <h2
        className="font-sans text-gray900"
        style={{
          fontSize: "clamp(3.6rem, 6vw, 6.8rem)",
          lineHeight: 1,
          letterSpacing: "-0.2rem",
          marginBottom: "4rem",
        }}
      >
        See How We Transform Listings
      </h2>

      {/* Category tabs */}
      <div className="flex gap-3 flex-wrap" style={{ marginBottom: "4rem" }}>
        {homepageCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className="font-sans"
            style={{
              fontSize: "1.6rem",
              letterSpacing: "-0.05rem",
              padding: "0.8rem 2.4rem",
              borderRadius: "10rem",
              border:
                activeCategory === cat.id
                  ? "1px solid var(--accent)"
                  : "1px solid rgba(255,255,255,0.2)",
              background:
                activeCategory === cat.id
                  ? "var(--accent)"
                  : "rgba(255,255,255,0.06)",
              color: "var(--gray900)",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {displayed.map((project, i) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden ${i === 0 ? "md:col-span-2" : "md:col-span-1"}`}
            style={{
              borderRadius: "2rem",
              height: "clamp(30rem, 70vw, 50rem)",
            }}
          >
            <Image
              src={project.featured}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ willChange: "transform" }}
              sizes={i === 0 ? "100vw" : "50vw"}
            />
            <div
              className="absolute inset-0 flex flex-col justify-end"
              style={{
                background:
                  "linear-gradient(to top, rgba(28,46,62,0.8) 0%, rgba(28,46,62,0.15) 50%, transparent 100%)",
                padding: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              <div className="flex gap-3 mb-4 flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-sans text-gray900"
                    style={{
                      fontSize: "1.2rem",
                      letterSpacing: "-0.05rem",
                      padding: "0.6rem 1.4rem",
                      borderRadius: "10rem",
                      border: "1px solid rgba(255,255,255,0.3)",
                      backdropFilter: "blur(0.5rem)",
                      background: "rgba(255,255,255,0.1)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3
                className="font-sans text-gray900"
                style={{
                  fontSize: "3.6rem",
                  letterSpacing: "-0.1rem",
                  lineHeight: 1.05,
                }}
              >
                {project.title}
              </h3>
              <p
                className="text-gray900"
                style={{
                  fontSize: "2rem",
                  opacity: 0.8,
                  marginTop: "0.8rem",
                  letterSpacing: "-0.05rem",
                }}
              >
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-6" style={{ marginTop: "4rem" }}>
        <TransitionLink
          href="/portfolio"
          className="font-sans text-white inline-block"
          style={{
            background: "var(--accent)",
            borderRadius: "10rem",
            padding: "1.4rem 3.6rem",
            fontSize: "clamp(1.6rem, 2vw, 2rem)",
            letterSpacing: "-0.05rem",
          }}
        >
          View All Work
        </TransitionLink>
        <TransitionLink
          href="/contact"
          className="inline-block font-sans text-gray900 relative group"
          style={{
            fontSize: "2rem",
            letterSpacing: "-0.05rem",
          }}
        >
          Schedule a Discovery Call
          <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
        </TransitionLink>
      </div>
    </section>
  );
}
