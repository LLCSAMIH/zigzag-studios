export default function FooterBar() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-6 section-padding section-v-medium"
    >
      <span
        className="font-sans"
        style={{
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          color: "var(--gray300)",
          letterSpacing: "-0.05rem",
        }}
      >
        &copy; ZigZag Studio 2026
      </span>

      <div className="flex flex-wrap justify-center gap-6" style={{ columnGap: "4rem" }}>
        {["Privacy", "Terms", "Instagram", "Facebook", "YouTube"].map(
          (link) => (
            <a
              key={link}
              href="#"
              className="font-sans transition-colors duration-300 hover:text-accent"
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                color: "var(--gray300)",
                letterSpacing: "-0.05rem",
              }}
            >
              {link}
            </a>
          )
        )}
      </div>

      <span
        className="font-sans"
        style={{
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          color: "var(--accent)",
          letterSpacing: "-0.05rem",
        }}
      >
        Capture + Create
      </span>

      <a
        href="https://beirux.com"
        target="_blank"
        rel="noopener noreferrer"
        className="font-sans transition-colors duration-300 hover:text-accent"
        style={{
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          color: "var(--gray300)",
          letterSpacing: "-0.05rem",
        }}
      >
        Engineered by BEIRUX
      </a>
    </footer>
  );
}
