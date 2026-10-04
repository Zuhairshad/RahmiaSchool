"use client";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/home/shared";
import { fadeUp } from "./shared";

const stroke = { strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

// Icons and tints by position in programs["hifz-program"].sections.
const STYLES: { bg: string; iconBg: string; icon: ReactNode }[] = [
  {
    bg: "var(--color-tint-green)",
    iconBg: "var(--color-brand-teal)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="4" width="18" height="17" rx="3" stroke="#fff" {...stroke} />
        <path d="M3 9h18M8 2v4M16 2v4" stroke="#fff" {...stroke} />
      </svg>
    ),
  },
  {
    bg: "var(--color-tint-purple)",
    iconBg: "var(--color-brand-purple-deep)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M2 4h7a3 3 0 013 3v13a2 2 0 00-2-2H2V4zM22 4h-7a3 3 0 00-3 3v13a2 2 0 012-2h8V4z" stroke="#fff" {...stroke} />
      </svg>
    ),
  },
  {
    bg: "var(--color-tint-cream)",
    iconBg: "var(--color-brand-gold)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" stroke="#000" {...stroke} />
        <path d="M19 10v2a7 7 0 01-14 0v-2M12 19v3" stroke="#000" {...stroke} />
      </svg>
    ),
  },
  {
    bg: "var(--color-tint-purple)",
    iconBg: "var(--color-brand-purple-deep)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M22 10L12 5 2 10l10 5 10-5z" stroke="#fff" {...stroke} />
        <path d="M6 12v5c3 2 9 2 12 0v-5" stroke="#fff" {...stroke} />
      </svg>
    ),
  },
  {
    bg: "var(--color-tint-green)",
    iconBg: "var(--color-brand-teal)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M21 12a9 9 0 11-3-6.7L21 8" stroke="#fff" {...stroke} />
        <path d="M21 3v5h-5M12 7v5l3 2" stroke="#fff" {...stroke} />
      </svg>
    ),
  },
];

export default function HifzFeatures({ sections }: { sections: { heading: string; body: string }[] }) {
  // The last section ("Why is Hifz Important?") becomes the dark highlight card.
  const cards = sections.slice(0, -1);
  const highlight = sections[sections.length - 1];

  return (
    <section className="section-padded" style={{ background: "#fff", padding: "0 30px 120px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 56 }}>
        <motion.div {...fadeUp()} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <Eyebrow>What makes it different</Eyebrow>
          <h2
            className="hifz-h2"
            style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 700, lineHeight: 1.12, color: "#000", margin: 0, maxWidth: 760 }}
          >
            A Hifz program built around your child
          </h2>
        </motion.div>

        <div className="hifz-feature-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: 24 }}>
          {cards.map((s, i) => {
            const st = STYLES[i % STYLES.length];
            return (
              <motion.article
                key={s.heading}
                {...fadeUp(0.06 * i)}
                className="hifz-feature-card"
                style={{
                  background: st.bg,
                  borderRadius: 20,
                  padding: 36,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  minHeight: 300,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: st.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {st.icon}
                  </span>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 15, fontWeight: 700, color: "rgba(0,0,0,0.3)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700, lineHeight: 1.3, color: "#000", margin: 0 }}>
                  {s.heading}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "#575757", margin: 0 }}>{s.body}</p>
              </motion.article>
            );
          })}

          {highlight && (
            <motion.article
              {...fadeUp(0.06 * cards.length)}
              className="hifz-feature-card"
              style={{
                background: "var(--color-dark-bg)",
                borderRadius: 20,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                gap: 20,
                minHeight: 300,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  right: -80,
                  top: -80,
                  width: 240,
                  height: 240,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(252,181,32,0.3) 0%, rgba(252,181,32,0) 70%)",
                }}
              />
              <span
                style={{
                  position: "relative",
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "var(--color-brand-gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8z" fill="#000" />
                </svg>
              </span>
              <h3 style={{ position: "relative", fontFamily: "var(--font-heading)", fontSize: 22, fontWeight: 700, lineHeight: 1.3, color: "#fff", margin: 0 }}>
                {highlight.heading}
              </h3>
              <p style={{ position: "relative", fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "rgba(255,255,255,0.72)", margin: 0 }}>
                {highlight.body}
              </p>
            </motion.article>
          )}
        </div>
      </div>
    </section>
  );
}
