"use client";

import { useState } from "react";
import { usePageTransition } from "@/lib/TransitionContext";

export default function ServicePanel() {
  const [isOpen, setIsOpen] = useState(false);
  const { navigateTo } = usePageTransition();

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 flex items-center justify-center bg-gray900 text-gray100 rounded-full transition-all duration-300 hover:scale-105"
        style={{
          bottom: "2rem",
          right: "2rem",
          width: "4.6rem",
          height: "4.6rem",
        }}
        aria-label="Open contact panel"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
        </svg>
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Panel */}
      <div
        className="fixed z-50 flex flex-col"
        style={{
          bottom: "8rem",
          right: "2rem",
          width: "clamp(30rem, calc(100vw - 4rem), 36rem)",
          background: "rgba(28,46,62,0.6)",
          backdropFilter: "blur(1rem)",
          WebkitBackdropFilter: "blur(1rem)",
          borderRadius: "2rem",
          padding: "clamp(2rem, 5vw, 3.2rem)",
          transform: isOpen ? "translateY(0) scale(1)" : "translateY(2rem) scale(0.95)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <h3
          className="font-serif italic text-gray900"
          style={{
            fontSize: "2.4rem",
            letterSpacing: "-0.05rem",
            marginBottom: "2.4rem",
          }}
        >
          Let&apos;s create something amazing.
        </h3>

        <div className="flex flex-col gap-4" style={{ marginBottom: "2.4rem" }}>
          <a
            href="mailto:sfeirjean1@gmail.com"
            className="font-sans text-gray900 transition-opacity duration-300 hover:opacity-70"
            style={{ fontSize: "2rem", letterSpacing: "-0.05rem" }}
          >
            sfeirjean1@gmail.com
          </a>
          <a
            href="tel:+19085694458"
            className="font-sans text-gray900 transition-opacity duration-300 hover:opacity-70"
            style={{ fontSize: "2rem", letterSpacing: "-0.05rem" }}
          >
            (908) 569-4458
          </a>
        </div>

        <a
          href="/contact"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(false);
            navigateTo("/contact");
          }}
          className="font-sans text-gray100 flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
          style={{
            fontSize: "1.8rem",
            letterSpacing: "-0.05rem",
            background: "var(--gray900)",
            borderRadius: "10rem",
            padding: "1.2rem 2.4rem",
            marginBottom: "2.4rem",
          }}
        >
          Schedule a Discovery Call
        </a>

        <div className="flex gap-6">
          {["Instagram", "YouTube", "Facebook"].map((social) => (
            <a
              key={social}
              href="#"
              className="font-sans transition-opacity duration-300 hover:opacity-100"
              style={{
                fontSize: "1.4rem",
                color: "var(--gray300)",
                letterSpacing: "-0.05rem",
              }}
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
