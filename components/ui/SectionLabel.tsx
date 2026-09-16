export default function SectionLabel({
  children,
  light = false,
}: {
  children: string;
  light?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden>
        <path
          d="M5 0l1.3 3.7H10L7 6l1.1 3.7L5 7.6 1.9 9.7 3 6 0 3.7h3.7L5 0z"
          fill="var(--color-brand-gold)"
        />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-label)",
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: light ? "rgba(255,255,255,0.6)" : "#888",
        }}
      >
        {children}
      </span>
    </div>
  );
}
