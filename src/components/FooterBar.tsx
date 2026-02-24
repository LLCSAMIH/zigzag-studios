export default function FooterBar() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-6 section-padding section-v-medium"
    >
      <span
        className="font-sans"
        style={{
          fontSize: "2rem",
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
                fontSize: "2rem",
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
          fontSize: "2rem",
          color: "var(--gray300)",
          letterSpacing: "-0.05rem",
        }}
      >
        Capture + Create
      </span>
    </footer>
  );
}
