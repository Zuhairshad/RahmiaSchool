"use client";
import { motion } from "framer-motion";
import { Eyebrow, ArrowButton } from "./shared";
import { extraCharges, feeRows, formatFee } from "@/lib/fees";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

const cardColors = ["#d7fdcf", "#ebe1fd", "#feeecd", "#d7fdcf"];

export default function FeeCards() {
  return (
    <section className="section-padded" style={{ background: "var(--color-bg-cream)", padding: "60px 30px 120px" }}>
      <style>{`
        .fee-cards-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        @media (max-width: 1100px) { .fee-cards-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 810px) {
          .fee-cards-grid { grid-template-columns: 1fr; }
          .fee-heading { font-size: 32px !important; line-height: 1.2 !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0.5 }}
          style={{ maxWidth: 520 }}
        >
          <Eyebrow>Fee Structure</Eyebrow>
          <h2 className="fee-heading" style={{ fontFamily: "var(--font-heading)", fontSize: 56, fontWeight: 700, lineHeight: "64.4px", color: "#000", margin: 0 }}>
            Plans built for every family
          </h2>
        </motion.div>

        <div className="fee-cards-grid">
          {feeRows.map((r, i) => (
            <motion.div
              key={r.level}
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={spring(i * 0.08)}
              viewport={{ once: true, amount: 0.2 }}
              style={{ background: cardColors[i % cardColors.length], borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", gap: 24 }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 500, color: "#575757" }}>{r.level}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#575757" }}>{r.classes}</span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 40, fontWeight: 600, color: "#000", lineHeight: 1 }}>{formatFee(r.monthly)}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#575757" }}>/month</span>
              </div>
              <div style={{ marginTop: "auto" }}>
                <ArrowButton href="/contact" variant="purple">Get started today</ArrowButton>
              </div>
            </motion.div>
          ))}
        </div>

        <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "26px", color: "#575757", margin: 0 }}>
          {extraCharges.map((c) => `${c.label}: ${formatFee(c.amount)}`).join(" · ")}
        </p>
      </div>
    </section>
  );
}
