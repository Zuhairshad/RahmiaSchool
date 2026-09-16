export default function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 4vw, 3.2rem)",
          fontWeight: 800,
          color: "var(--color-brand-teal)",
          marginBottom: 8,
        }}
      >
        {value}
      </div>
      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>{label}</div>
    </div>
  );
}
