"use client";

import { useEffect, useState } from "react";
import { Lens } from "@/components/ui/Lens";

export default function GlobalLens({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(max-width: 768px)").matches;
    setIsTouchDevice(isTouch);
  }, []);

  if (isTouchDevice) {
    return <>{children}</>;
  }

  return (
    <Lens zoomFactor={1.5} lensSize={100} edgeThreshold={80}>
      {children}
    </Lens>
  );
}
