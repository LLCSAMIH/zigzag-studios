"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import TransitionLink from "@/components/TransitionLink";

const words = [
  "sell homes faster.",
  "attract more buyers.",
  "win more listings.",
  "build authority.",
  "boost visibility.",
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [phase, setPhase] = useState<"idle" | "exit">("idle");
  const transitionEnabled = useRef(true);

  const advance = useCallback(() => {
    setPhase("exit");

    setTimeout(() => {
      transitionEnabled.current = false;
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setPhase("idle");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          transitionEnabled.current = true;
        });
      });
    }, 600);
  }, []);

  useEffect(() => {
    const interval = setInterval(advance, 3000);
    return () => clearInterval(interval);
  }, [advance]);

  const nextIndex = (currentIndex + 1) % words.length;
  const transitionStyle = transitionEnabled.current
    ? "transform 0.6s cubic-bezier(0.65, 0, 0.35, 1)"
    : "none";

  return (
    <section
      className="relative flex items-center justify-center section-padding"
      style={{ minHeight: "100vh" }}
    >
      <Image
        src="/hero-bg.jpg"
        alt=""
        fill
        priority
        className="object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(28, 46, 62, 0.72)" }}
      />

      <div className="relative z-10 text-center md:text-left">
        <h1>
          <span
            className="font-serif italic block text-white font-bold md:font-normal"
            style={{
              fontSize: "clamp(2.4rem, 6vw, 7.2rem)",
              lineHeight: 1,
              letterSpacing: "clamp(-0.1rem, -0.5vw, -0.4rem)",
            }}
          >
            We help realtors in
            <br className="md:hidden" />
            {" "}the tri-state area
          </span>

          {/* Frosted glass rotating pill */}
          <span
            className="inline-block relative"
            style={{
              borderRadius: "0.8rem",
              background: "rgba(28,46,62,0.6)",
              backdropFilter: "blur(1rem)",
              WebkitBackdropFilter: "blur(1rem)",
              marginTop: "1.2rem",
            }}
          >
            {/* Invisible sizer — widest word sets fixed pill width */}
            <span
              className="font-sans block invisible"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 7.2rem)",
                letterSpacing: "clamp(-0.1rem, -0.5vw, -0.4rem)",
                lineHeight: 1.2,
                padding: "0.8rem 2rem",
              }}
              aria-hidden="true"
            >
              {words.reduce((a, b) => (a.length > b.length ? a : b))}
            </span>
            {/* Visible carousel layered on top */}
            <span
              className="absolute inset-0 overflow-hidden"
              style={{
                borderRadius: "0.8rem",
                clipPath: "inset(0 0 0 0)",
              }}
            >
              <span
                className="font-sans block absolute left-0 right-0"
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 7.2rem)",
                  letterSpacing: "clamp(-0.1rem, -0.5vw, -0.4rem)",
                  lineHeight: 1.2,
                  padding: "0.8rem 2rem",
                  color: "var(--accent)",
                  transition: transitionStyle,
                  transform:
                    phase === "exit" ? "translateY(-100%)" : "translateY(0)",
                }}
              >
                {words[currentIndex]}
              </span>
              <span
                className="font-sans block absolute left-0 right-0"
                style={{
                  fontSize: "clamp(2.4rem, 6vw, 7.2rem)",
                  letterSpacing: "clamp(-0.1rem, -0.5vw, -0.4rem)",
                  lineHeight: 1.2,
                  padding: "0.8rem 2rem",
                  color: "var(--accent)",
                  transition: transitionStyle,
                  transform:
                    phase === "exit" ? "translateY(0)" : "translateY(100%)",
                }}
              >
                {words[nextIndex]}
              </span>
            </span>
          </span>
        </h1>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          style={{ marginTop: "4rem" }}
        >
          <TransitionLink
            href="/contact"
            className="font-sans text-white flex items-center justify-center cta-nudge"
            style={{
              background: "var(--accent)",
              borderRadius: "10rem",
              padding: "1.4rem 3.6rem",
              fontSize: "clamp(1.6rem, 2vw, 2rem)",
              letterSpacing: "-0.05rem",
            }}
          >
            Schedule Your Free Discovery Call
          </TransitionLink>
          <TransitionLink
            href="/portfolio"
            className="font-sans text-gray900 flex items-center justify-center"
            style={{
              borderRadius: "10rem",
              padding: "1.4rem 3.6rem",
              fontSize: "clamp(1.6rem, 2vw, 2rem)",
              letterSpacing: "-0.05rem",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(0.5rem)",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            View Portfolio
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
