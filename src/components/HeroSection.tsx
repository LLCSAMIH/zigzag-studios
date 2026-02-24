"use client";

import { useEffect, useState, useRef, useCallback } from "react";

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
      className="relative flex items-center section-padding"
      style={{ minHeight: "100vh", backgroundColor: "var(--gray100)" }}
    >
      <div className="content-container">
        <h1>
          <span
            className="font-serif italic block text-gray900"
            style={{
              fontSize: "clamp(3.6rem, 6vw, 7.2rem)",
              lineHeight: 1,
              letterSpacing: "-0.4rem",
            }}
          >
            We help realtors in the tri-state area
          </span>
          <span
            className="block relative"
            style={{
              height: "clamp(3.6rem, 6vw, 7.2rem)",
              lineHeight: 1,
              overflow: "hidden",
              clipPath: "inset(0 0 0 0)",
            }}
          >
            {/* Current word */}
            <span
              className="font-sans block text-gray900 absolute w-full"
              style={{
                fontSize: "clamp(3.6rem, 6vw, 7.2rem)",
                letterSpacing: "-0.4rem",
                transition: transitionStyle,
                transform:
                  phase === "exit" ? "translateY(-100%)" : "translateY(0)",
              }}
            >
              {words[currentIndex]}
            </span>
            {/* Next word */}
            <span
              className="font-sans block text-gray900 absolute w-full"
              style={{
                fontSize: "clamp(3.6rem, 6vw, 7.2rem)",
                letterSpacing: "-0.4rem",
                transition: transitionStyle,
                transform:
                  phase === "exit" ? "translateY(0)" : "translateY(100%)",
              }}
            >
              {words[nextIndex]}
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}
