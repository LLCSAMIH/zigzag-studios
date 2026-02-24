"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";

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

    // After the CSS transition completes (600ms), update index and reset
    setTimeout(() => {
      // Disable transitions for the instant reset
      transitionEnabled.current = false;
      setCurrentIndex((prev) => (prev + 1) % words.length);
      setPhase("idle");

      // Re-enable transitions on next frame
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
        style={{ backgroundColor: "rgba(28, 46, 62, 0.6)" }}
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
      </div>
    </section>
  );
}
