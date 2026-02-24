"use client";

import { usePathname } from "next/navigation";
import { usePageTransition } from "@/lib/TransitionContext";
import { useRef, useEffect, useState, useCallback } from "react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const PILL_DURATION = "0.9s";
const PILL_EASING = "cubic-bezier(0.65, 0, 0.35, 1)";

export default function BottomNav() {
  const pathname = usePathname();
  const { navigateTo, isTransitioning } = usePageTransition();
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const [mounted, setMounted] = useState(false);
  const [targetIndex, setTargetIndex] = useState(-1);

  const activeIndex = navItems.findIndex((item) => item.path === pathname);

  // The visual index: targetIndex while transitioning, activeIndex when settled
  const displayIndex = targetIndex !== -1 ? targetIndex : (activeIndex === -1 ? 0 : activeIndex);

  const measurePill = useCallback((idx: number) => {
    const el = itemRefs.current[idx];
    const container = containerRef.current;
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      setPillStyle({
        left: elRect.left - containerRect.left,
        width: elRect.width,
      });
    }
  }, []);

  // Only re-measure when route actually settles AND we're not mid-transition
  useEffect(() => {
    if (isTransitioning) return;
    const idx = activeIndex === -1 ? 0 : activeIndex;
    measurePill(idx);
    setMounted(true);
    setTargetIndex(-1);
  }, [activeIndex, isTransitioning, measurePill]);

  // Slide pill immediately on click — independent of page transition
  const handleClick = (path: string, index: number) => {
    if (isTransitioning) return;
    if (index === activeIndex) return;
    setTargetIndex(index);
    measurePill(index);
    navigateTo(path);
  };

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
        ref={containerRef}
        className="flex items-center gap-1 relative"
        style={{
          background: "rgba(28,46,62,0.6)",
          backdropFilter: "blur(1rem)",
          WebkitBackdropFilter: "blur(1rem)",
          borderRadius: "10rem",
          padding: "0.8rem",
          height: "7.2rem",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        {/* Sliding pill indicator */}
        <div
          style={{
            position: "absolute",
            top: "0.8rem",
            bottom: "0.8rem",
            left: pillStyle.left,
            width: pillStyle.width,
            borderRadius: "10rem",
            background: "var(--accent)",
            transition: mounted
              ? `left ${PILL_DURATION} ${PILL_EASING}, width ${PILL_DURATION} ${PILL_EASING}`
              : "none",
            zIndex: 0,
          }}
        />

        {navItems.map((item, i) => {
          const isDisplay = i === displayIndex;
          return (
            <a
              key={item.label}
              ref={(el) => { itemRefs.current[i] = el; }}
              href={item.path}
              onClick={(e) => {
                e.preventDefault();
                handleClick(item.path, i);
              }}
              className="font-sans relative flex items-center justify-center"
              style={{
                fontSize: "2.6rem",
                letterSpacing: "-0.05rem",
                padding: "1rem 2.8rem",
                borderRadius: "10rem",
                color: isDisplay ? "var(--gray100)" : "var(--gray900)",
                transition: `color ${PILL_DURATION} ${PILL_EASING}`,
                whiteSpace: "nowrap",
                pointerEvents: isTransitioning ? "none" : "auto",
                zIndex: 1,
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
