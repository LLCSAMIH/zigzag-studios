"use client";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div id="page-wrapper" className="page-wrapper">
      {children}
    </div>
  );
}
