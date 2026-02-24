"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { projects, categories } from "@/data/portfolio";
import { useInView } from "@/lib/useInView";

export default function PortfolioGrid() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-medium`}
    >
      {/* Filter tabs */}
      <div
        className="flex gap-3 flex-wrap"
        style={{ marginBottom: "6rem" }}
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className="font-sans transition-all duration-300"
            style={{
              fontSize: "1.6rem",
              letterSpacing: "-0.05rem",
              padding: "0.8rem 2rem",
              borderRadius: "10rem",
              border: "1px solid var(--gray250)",
              background:
                activeFilter === cat.id ? "var(--gray900)" : "transparent",
              color:
                activeFilter === cat.id ? "var(--gray100)" : "var(--gray900)",
              cursor: "pointer",
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Project grid */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {filtered.map((project) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden ${project.wide ? "md:col-span-2" : "md:col-span-1"}`}
            style={{
              borderRadius: "2rem",
              height: "50rem",
            }}
          >
            <Image
              src={project.featured}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ willChange: "transform" }}
              sizes={project.wide ? "100vw" : "50vw"}
            />
            <div
              className="absolute inset-0 flex flex-col justify-end"
              style={{
                background:
                  "linear-gradient(to top, rgba(28,46,62,0.8) 0%, rgba(28,46,62,0.15) 50%, transparent 100%)",
                padding: "4rem",
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
    </section>
  );
}
