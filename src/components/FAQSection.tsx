"use client";

import { useRef, useState } from "react";
import { useInView } from "@/lib/useInView";
import { faqs } from "@/data/faq";

export default function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
    >
      <h2
        className="font-sans text-gray900"
        style={{
          fontSize: "clamp(4.2rem, 6vw, 6.8rem)",
          lineHeight: 1,
          letterSpacing: "-0.2rem",
          marginBottom: "6rem",
        }}
      >
        Common Questions
      </h2>

      <div>
        <div style={{ height: "1px", background: "var(--gray250)" }} />
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between text-left transition-colors duration-300 hover:bg-gray200"
              style={{
                padding: "2.4rem 0",
                cursor: "pointer",
                background: "transparent",
                border: "none",
              }}
            >
              <span
                className="font-sans text-gray900"
                style={{
                  fontSize: "2.2rem",
                  letterSpacing: "-0.05rem",
                }}
              >
                {faq.question}
              </span>
              <span
                className="font-sans text-gray900 flex-shrink-0"
                style={{
                  fontSize: "2.4rem",
                  marginLeft: "2rem",
                  transition: "transform 0.3s ease",
                  transform:
                    openIndex === i ? "rotate(45deg)" : "rotate(0deg)",
                }}
              >
                +
              </span>
            </button>
            <div
              className="overflow-hidden transition-all duration-400"
              style={{
                maxHeight: openIndex === i ? "30rem" : "0",
                opacity: openIndex === i ? 1 : 0,
                transition:
                  "max-height 0.4s ease, opacity 0.3s ease",
              }}
            >
              <p
                className="font-sans"
                style={{
                  fontSize: "2rem",
                  letterSpacing: "-0.05rem",
                  color: "var(--gray300)",
                  lineHeight: 1.4,
                  paddingBottom: "2.4rem",
                  maxWidth: "70%",
                }}
              >
                {faq.answer}
              </p>
            </div>
            <div style={{ height: "1px", background: "var(--gray250)" }} />
          </div>
        ))}
      </div>
    </section>
  );
}
