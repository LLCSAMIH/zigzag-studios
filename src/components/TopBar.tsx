"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePageTransition } from "@/lib/TransitionContext";

export default function TopBar() {
  const [hidden, setHidden] = useState(false);
  const { navigateTo } = usePageTransition();

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between transition-opacity duration-500 section-padding"
      style={{
        paddingTop: "2.4rem",
        paddingBottom: "2.4rem",
        opacity: hidden ? 0 : 1,
        pointerEvents: hidden ? "none" : "auto",
      }}
    >
      <p
        className="font-sans text-gray900 hidden md:block"
        style={{ fontSize: "2rem", letterSpacing: "-0.05rem" }}
      >
        Capturing Premium Visuals.{" "}
        <span className="font-serif italic">For You.</span>
      </p>
      <a href="/" onClick={(e) => { e.preventDefault(); navigateTo("/"); }}>
        <Image src="/logo.svg" alt="ZigZag Studio" width={220} height={36} priority style={{ width: "clamp(14rem, 28vw, 22rem)", height: "auto" }} />
      </a>
    </div>
  );
}
