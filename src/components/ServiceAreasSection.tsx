"use client";

import { useRef } from "react";
import { useInView } from "@/lib/useInView";

const areas = [
  {
    region: "New Jersey",
    locations: [
      "Somerset",
      "Hoboken",
      "Jersey City",
      "Newark",
      "Bergen County",
      "Morris County",
    ],
  },
  {
    region: "New York",
    locations: ["Manhattan", "Brooklyn", "Queens", "The Bronx"],
  },
  {
    region: "Pennsylvania & Beyond",
    locations: ["Philadelphia", "Stamford, CT", "Greenwich, CT"],
  },
];

export default function ServiceAreasSection() {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useInView(ref);

  return (
    <section
      ref={ref}
      className={`section-reveal ${isVisible ? "visible" : ""} section-padding section-v-large`}
      style={{ backgroundColor: "#F0F2F5" }}
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
        Service Areas
      </p>
      <h2
        className="font-sans text-gray100"
        style={{
          fontSize: "clamp(3.6rem, 6vw, 6.8rem)",
          lineHeight: 1,
          letterSpacing: "-0.2rem",
          marginBottom: "2rem",
        }}
      >
        Real Estate Photography in{" "}
        <span className="font-serif italic">NJ, NYC & Philadelphia</span>
      </h2>
      <p
        className="font-sans"
        style={{
          fontSize: "clamp(1.8rem, 2.5vw, 2.2rem)",
          letterSpacing: "-0.05rem",
          lineHeight: 1.4,
          color: "var(--gray250)",
          marginBottom: "6rem",
          maxWidth: "55rem",
        }}
      >
        Serving agents across the tri-state area with professional real estate
        photography, drone aerials, 3D tours, and listing media.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {areas.map((group) => (
          <div key={group.region}>
            <h3
              className="font-sans text-gray100"
              style={{
                fontSize: "2rem",
                letterSpacing: "-0.05rem",
                fontWeight: 600,
                marginBottom: "2rem",
                paddingBottom: "1.2rem",
                borderBottom: "1px solid var(--gray300)",
              }}
            >
              {group.region}
            </h3>
            <ul className="flex flex-col gap-3">
              {group.locations.map((loc) => (
                <li
                  key={loc}
                  className="font-sans"
                  style={{
                    fontSize: "1.8rem",
                    letterSpacing: "-0.05rem",
                    color: "var(--gray250)",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    listStyle: "none",
                  }}
                >
                  <span
                    style={{
                      width: "0.6rem",
                      height: "0.6rem",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      flexShrink: 0,
                    }}
                  />
                  {loc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
