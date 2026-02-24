"use client";

import { useEffect, useState } from "react";

const words = ["Real Estate.", "Events.", "Food.", "Drone.", "Commercial."];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative flex items-end section-padding section-v-hero"
      style={{ minHeight: "100vh" }}
    >
      <div style={{ maxWidth: "75%" }}>
        <h1>
          <span
            className="font-serif italic block text-gray900"
            style={{
              fontSize: "clamp(5.2rem, 8vw, 9.2rem)",
              lineHeight: 1,
              letterSpacing: "-0.4rem",
            }}
          >
            We capture moments in
          </span>
          <span
            className="block overflow-hidden relative"
            style={{
              height: "clamp(5.2rem, 8vw, 9.2rem)",
              lineHeight: 1,
            }}
          >
            <span
              className="font-sans block text-gray900 absolute w-full"
              style={{
                fontSize: "clamp(5.2rem, 8vw, 9.2rem)",
                letterSpacing: "-0.4rem",
                transition: "transform 0.6s ease-in-out",
                transform: isAnimating ? "translateY(-100%)" : "translateY(0)",
              }}
            >
              {words[currentIndex]}
            </span>
            <span
              className="font-sans block text-gray900 absolute w-full"
              style={{
                fontSize: "clamp(5.2rem, 8vw, 9.2rem)",
                letterSpacing: "-0.4rem",
                transition: "transform 0.6s ease-in-out",
                transform: isAnimating ? "translateY(0)" : "translateY(100%)",
              }}
            >
              {words[(currentIndex + 1) % words.length]}
            </span>
          </span>
        </h1>
      </div>
    </section>
  );
}
