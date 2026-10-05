const ITEMS = [
  "Hifz with Understanding",
  "Urdu Translation & Tafseer",
  "Tajweed with a certified Qari Sahib",
  "Sabaq · Sabqi · Manzil",
  "Hafiz by Grade 8",
  "No academic loss",
];

/** Same look as the home TickerStrip, with Hifz-specific phrases. */
export default function HifzTicker() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div style={{ background: "var(--color-tint-green)", padding: "20px 0", overflow: "hidden", width: "100%" }}>
      <div style={{ display: "flex", width: "max-content", animation: "ticker-scroll 40s linear infinite" }}>
        {loop.map((text, i) => (
          <div
            key={i}
            aria-hidden={i >= ITEMS.length}
            style={{ display: "flex", alignItems: "center", gap: 20, padding: "0 20px", whiteSpace: "nowrap" }}
          >
            <span
              className="hifz-ticker-text"
              style={{ fontFamily: "var(--font-body)", fontSize: 24, fontWeight: 500, lineHeight: "32px", color: "#000" }}
            >
              {text}
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"
                stroke="#09d89a"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
