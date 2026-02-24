"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { useRouter, usePathname } from "next/navigation";

interface TransitionContextType {
  navigateTo: (path: string) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
  isTransitioning: false,
});

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  const navigateTo = useCallback(
    (path: string) => {
      if (isTransitioning) return;
      if (path === pathname) return;

      setIsTransitioning(true);

      const wrapper = document.getElementById("page-wrapper");
      const overlay = overlayRef.current;

      // Phase 1: zoom-out current page + slide overlay in
      if (wrapper) wrapper.classList.add("zoom-out");
      if (overlay) {
        overlay.style.display = "block";
        overlay.className = "page-transition-overlay slide-in";
      }

      // Phase 2: after overlay covers screen, push route
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

        // Reset zoom-out before new page renders
        if (wrapper) wrapper.classList.remove("zoom-out");

        router.push(path);

        // Phase 3: small buffer for React to render, then slide overlay out + scale-in new page
        setTimeout(() => {
          const newWrapper = document.getElementById("page-wrapper");
          if (newWrapper) newWrapper.classList.add("scale-in");

          if (overlay) {
            overlay.className = "page-transition-overlay slide-out";
          }

          // Cleanup after exit animation
          setTimeout(() => {
            if (overlay) {
              overlay.style.display = "none";
              overlay.className = "page-transition-overlay";
            }
            if (newWrapper) newWrapper.classList.remove("scale-in");
            setIsTransitioning(false);
          }, 600);
        }, 150);
      }, 700);
    },
    [isTransitioning, pathname, router]
  );

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      {/* Transition overlay — persists across routes */}
      <div
        ref={overlayRef}
        className="page-transition-overlay"
        style={{ display: "none" }}
      />
      {children}
    </TransitionContext.Provider>
  );
}

export const usePageTransition = () => useContext(TransitionContext);
