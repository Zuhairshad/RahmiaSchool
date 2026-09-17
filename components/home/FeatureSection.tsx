"use client";
import { motion } from "framer-motion";
import { Eyebrow, ArrowButton, features } from "./shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

export default function FeatureSection() {
  return (
    <section style={{ background: "#fff", padding: "120px 30px", position: "relative", overflow: "hidden" }}>
      <div
        style={{ position: "absolute", left: -150, bottom: -100, width: 500, height: 500, borderRadius: "50%", background: "#d7fdcf", opacity: 0.35, zIndex: 0 }}
        aria-hidden
      />
      <div
        style={{ maxWidth: 1300, margin: "0 auto", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "490px 620px", gap: 190, alignItems: "flex-start" }}
        className="feature-layout"
      >
        {/* Left sticky panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0 }}
          style={{ position: "sticky", top: 80, display: "flex", flexDirection: "column", gap: 32 }}
        >
          <div>
            <Eyebrow>Features</Eyebrow>
            <div style={{ position: "relative" }}>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 56, fontWeight: 700, lineHeight: "64.4px", color: "#000", margin: "0 0 24px" }}>
                Little moments that shine
              </h2>
              {/* Golden ellipse decoration behind heading (ref: w=190 h=76 at 91px from left panel edge) */}
              <svg
                aria-hidden
                style={{ position: "absolute", left: 91, top: 52, width: 190, height: 76, zIndex: -1, pointerEvents: "none" }}
                viewBox="0 0 190 76"
                fill="none"
              >
                <ellipse cx="95" cy="38" rx="91" ry="34" stroke="#fcb520" strokeWidth="5" fill="none" />
              </svg>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "24px", color: "#575757", margin: 0 }}>
              A closer look at what makes our learning environment special — every activity is designed to inspire curiosity, creativity, and confidence in young minds.
            </p>
          </div>
          <div>
            <ArrowButton href="/contact" variant="purple">Enroll now</ArrowButton>
          </div>
        </motion.div>

        {/* Staggered 2-col cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Left col — padded bottom */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingBottom: 100 }}>
            {features.slice(0, 2).map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, scale: 0.8, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={spring(i * 0.12)}
                viewport={{ once: true, amount: 0 }}
                className="feature-card"
                style={{ background: "var(--color-bg-cream)", borderRadius: 20, padding: 30, display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700, color: "#000", margin: 0 }}>{f.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "24px", color: "#575757", margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
          {/* Right col — padded top */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20, paddingTop: 100 }}>
            {features.slice(2).map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, scale: 0.8, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={spring(0.06 + i * 0.12)}
                viewport={{ once: true, amount: 0 }}
                className="feature-card"
                style={{ background: "var(--color-bg-cream)", borderRadius: 20, padding: 30, display: "flex", flexDirection: "column", gap: 16 }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700, color: "#000", margin: 0 }}>{f.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "24px", color: "#575757", margin: 0 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
