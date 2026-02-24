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

const SLIDE_DURATION = 900;
const EASING = "cubic-bezier(0.65, 0, 0.35, 1)";

export function TransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const lockRef = useRef(false);

  const navigateTo = useCallback(
    (path: string) => {
      if (lockRef.current) return;
      if (path === pathname) return;

      lockRef.current = true;
      setIsTransitioning(true);

      const wrapper = document.getElementById("page-wrapper");
      if (!wrapper) return;

      // Lock wrapper to viewport size — prevents content below fold from leaking
      const scrollY = window.scrollY;
      wrapper.style.position = "fixed";
      wrapper.style.top = `-${scrollY}px`;
      wrapper.style.left = "0";
      wrapper.style.right = "0";
      wrapper.style.height = "100vh";
      wrapper.style.overflow = "hidden";
      wrapper.style.willChange = "transform";

      // Phase 1: Slide current viewport out the top
      requestAnimationFrame(() => {
        wrapper.style.transition = `transform 0.5s ${EASING}`;
        wrapper.style.transform = "translateY(-100vh)";

        // Phase 2: After exit, hide + swap + position below
        setTimeout(() => {
          wrapper.style.visibility = "hidden";
          wrapper.style.transition = "none";
          wrapper.style.transform = "translateY(100vh)";
          wrapper.style.top = "0";

          // Force flush
          wrapper.offsetHeight;

          // Scroll to top while hidden
          window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

          // Push route — content swaps inside hidden wrapper
          router.push(path);

          // Phase 3: After React renders, slide new page in
          setTimeout(() => {
            requestAnimationFrame(() => {
              wrapper.style.visibility = "";
              wrapper.style.transition = `transform ${SLIDE_DURATION}ms ${EASING}`;
              wrapper.style.transform = "translateY(0)";

              // Cleanup after slide completes — restore normal flow
              setTimeout(() => {
                wrapper.style.position = "";
                wrapper.style.top = "";
                wrapper.style.left = "";
                wrapper.style.right = "";
                wrapper.style.height = "";
                wrapper.style.overflow = "";
                wrapper.style.transition = "";
                wrapper.style.transform = "";
                wrapper.style.willChange = "";
                wrapper.style.visibility = "";

                lockRef.current = false;
                setIsTransitioning(false);
              }, SLIDE_DURATION);
            });
          }, 120);
        }, 500);
      });
    },
    [pathname, router]
  );

  return (
    <TransitionContext.Provider value={{ navigateTo, isTransitioning }}>
      {children}
    </TransitionContext.Provider>
  );
}

export const usePageTransition = () => useContext(TransitionContext);
