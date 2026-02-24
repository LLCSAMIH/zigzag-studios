"use client";

import { usePathname } from "next/navigation";
import { usePageTransition } from "@/lib/TransitionContext";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function BottomNav() {
  const pathname = usePathname();
  const { navigateTo, isTransitioning } = usePageTransition();

  return (
    <nav
      className="fixed z-50"
      style={{
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 200,
      }}
    >
      <div
        className="flex items-center gap-1"
        style={{
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(1rem)",
          WebkitBackdropFilter: "blur(1rem)",
          borderRadius: "10rem",
          padding: "0.5rem",
          height: "4.6rem",
        }}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <a
              key={item.label}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                navigateTo(item.path);
              }}
              className="font-sans relative flex items-center justify-center"
              style={{
                fontSize: "2rem",
                letterSpacing: "-0.05rem",
                padding: "0.6rem 2rem",
                borderRadius: "10rem",
                color: isActive ? "var(--gray100)" : "var(--gray900)",
                background: isActive ? "var(--gray900)" : "transparent",
                transition: "all 0.25s ease",
                whiteSpace: "nowrap",
                pointerEvents: isTransitioning ? "none" : "auto",
              }}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
