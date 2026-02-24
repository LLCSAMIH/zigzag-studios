"use client";

export default function PageHero({
  title,
  subtitle,
  serifSubtitle = true,
}: {
  title: string;
  subtitle?: string;
  serifSubtitle?: boolean;
}) {
  return (
    <section
      className="relative flex items-center section-padding section-v-hero"
      style={{ minHeight: "100vh", backgroundColor: "var(--gray100)" }}
    >
      <div className="content-container">
        <h1>
          <span
            className="font-sans block text-gray900"
            style={{
              fontSize: "clamp(5.2rem, 8vw, 9.2rem)",
              lineHeight: 1,
              letterSpacing: "-0.4rem",
            }}
          >
            {title}
          </span>
          {subtitle && (
            <span
              className={`${serifSubtitle ? "font-serif italic" : "font-sans"} block text-gray900`}
              style={{
                fontSize: "clamp(5.2rem, 8vw, 9.2rem)",
                lineHeight: 1,
                letterSpacing: "-0.4rem",
              }}
            >
              {subtitle}
            </span>
          )}
        </h1>
      </div>
    </section>
  );
}
