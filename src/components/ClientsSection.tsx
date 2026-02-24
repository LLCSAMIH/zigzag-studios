"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";

const clients = [
  "ABC Realty",
  "NJ Properties",
  "Fine Dining Co",
  "City Events",
  "Premier Homes",
  "Garden State RE",
  "Luxe Interiors",
  "Metro Eats",
  "Skyline Photos",
  "Elite Venues",
];

export default function ClientsSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-medium`}
    >
      <h2
        className="font-sans text-gray900"
        style={{
          fontSize: "4.2rem",
          lineHeight: 1.05,
          letterSpacing: "-0.1rem",
          marginBottom: "8rem",
        }}
      >
        Partners, Clients, Friends.
      </h2>

      <div
        className="grid grid-cols-2 md:grid-cols-5"
        style={{ gap: "4rem 2rem" }}
      >
        {clients.map((client) => (
          <div
            key={client}
            className="flex items-center justify-center transition-opacity duration-300 hover:opacity-100"
            style={{ opacity: 0.5, height: "8rem" }}
          >
            <span
              className="font-sans text-gray900 text-center"
              style={{
                fontSize: "2rem",
                letterSpacing: "0.2rem",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
