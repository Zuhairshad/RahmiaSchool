export default function WavyUnderline({ color = "var(--color-brand-gold)" }: { color?: string }) {
  return (
    <svg
      viewBox="0 0 220 14"
      aria-hidden
      style={{ position: "absolute", bottom: -6, left: 0, width: "100%", height: 14, overflow: "visible" }}
      preserveAspectRatio="none"
    >
      <path
        d="M 4 10 Q 55 2 110 10 Q 165 18 216 10"
        fill="none"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
