"use client";

import { useRef } from "react";
import Image from "next/image";
import { projects } from "@/data/portfolio";
import { useInView } from "@/lib/useInView";
import TransitionLink from "@/components/TransitionLink";

export default function HomePortfolioPreview() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);
  const featured = projects.slice(0, 2);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-medium`}
    >
      <h2
        className="font-sans text-gray900"
        style={{
          fontSize: "clamp(4.2rem, 6vw, 6.8rem)",
          lineHeight: 1,
          letterSpacing: "-0.2rem",
          marginBottom: "8rem",
        }}
      >
        Our Work — Featured Projects
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
        {featured.map((project) => (
          <div
            key={project.id}
            className={`group relative overflow-hidden ${project.wide ? "md:col-span-2" : "md:col-span-1"}`}
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
              sizes={project.wide ? "100vw" : "50vw"}
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

      <TransitionLink
        href="/portfolio"
        className="inline-block font-sans text-gray900 relative group"
        style={{
          fontSize: "2.2rem",
          letterSpacing: "-0.05rem",
          marginTop: "4rem",
        }}
      >
        View all work
        <span className="absolute bottom-0 left-0 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
      </TransitionLink>
    </section>
  );
}
