"use client";

import { Lens } from "@/components/ui/Lens";

export default function GlobalLens({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Lens zoomFactor={1.5} lensSize={100}>
      {children}
    </Lens>
  );
}
