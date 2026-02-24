"use client";

import { usePageTransition } from "@/lib/TransitionContext";

export default function TransitionLink({
  href,
  children,
  className,
  style,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const { navigateTo } = usePageTransition();

  return (
    <a
      href={href}
      onClick={(e) => {
        e.preventDefault();
        navigateTo(href);
      }}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
}
