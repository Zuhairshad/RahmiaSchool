"use client";
import { motion } from "framer-motion";
import { Eyebrow, stats, aboutCards } from "./shared";


const spring = (delay = 0) => ({
  type: "spring" as const,
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

const fadeUp = {
  hidden: { opacity: 0, scale: 0.8, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: spring(delay),
  }),
};

export default function AboutSection() {
  return (
    <section className="section-padded" style={{ background: "var(--color-bg-cream)", padding: "120px 30px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
        {/* Title row */}
        <div className="about-title-row" style={{ display: "flex", alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <Eyebrow>About Us</Eyebrow>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0 }}
            variants={fadeUp}
            className="about-heading-wrapper"
            style={{ width: 650, flexShrink: 0 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 44,
                fontWeight: 600,
                lineHeight: "52.8px",
                color: "#000",
                margin: 0,
              }}
            >
              Since 2014, nurturing young minds with academic excellence, Islamic values, and a commitment to every child&apos;s success{" "}
              <span style={{ display: "inline-flex", gap: 6, verticalAlign: "middle", marginLeft: 4 }}>
                <span style={{ display: "inline-flex", width: 40, height: 40, borderRadius: "50%", background: "#09d89a", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="#fff" strokeWidth="2"/></svg>
                </span>
                <span style={{ display: "inline-flex", width: 40, height: 40, borderRadius: "50%", background: "#520080", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="8" r="4" stroke="#fff" strokeWidth="2"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                </span>
                <span style={{ display: "inline-flex", width: 40, height: 40, borderRadius: "50%", background: "#fcb520", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" fill="#fff"/></svg>
                </span>
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          variants={{ hidden: fadeUp.hidden, show: () => fadeUp.show(0.12) }}
          className="about-stats-row"
          style={{ display: "flex", alignItems: "center" }}
        >
          {stats.map((stat, i) => (
            <div key={stat.label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              {i > 0 && (
                <div style={{ width: 1, height: 86, background: "#d5d5d5", marginRight: 24, flexShrink: 0 }} />
              )}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 44, fontWeight: 600, lineHeight: "52.8px", color: "#000" }}>
                  {stat.value}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 400, lineHeight: "24px", color: "#575757" }}>
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cards row */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          variants={{ hidden: fadeUp.hidden, show: () => fadeUp.show(0.2) }}
          className="about-cards-row"
          style={{ display: "flex", gap: 24, alignItems: "stretch", height: 390 }}
        >
          {/* Card 1 */}
          <div
            className="about-card"
            style={{
              width: 252,
              flexShrink: 0,
              background: aboutCards[0].bg,
              borderRadius: 20,
              padding: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {aboutCards[0].icon}
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, lineHeight: "46.8px", color: "#000", marginBottom: 8 }}>
                {aboutCards[0].value}
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 400, color: "#575757" }}>{aboutCards[0].label}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 400, color: "#575757", opacity: 0.7 }}>{aboutCards[0].sublabel}</div>
            </div>
          </div>

          {/* Center image */}
          <div style={{ flex: 1, borderRadius: 20, overflow: "hidden", minWidth: 200 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/rahma-parent-partnership-2.jpeg"
              alt="Teacher and students at RAHMA Model School"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Card 2 */}
          <div
            className="about-card"
            style={{
              width: 252,
              flexShrink: 0,
              background: aboutCards[1].bg,
              borderRadius: 20,
              padding: 40,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: 42, height: 42, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {aboutCards[1].icon}
            </div>
            <div>
              <div style={{ fontFamily: "var(--font-heading)", fontSize: 36, fontWeight: 600, lineHeight: "46.8px", color: "#000", marginBottom: 8 }}>
                {aboutCards[1].value}
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 400, color: "#575757" }}>{aboutCards[1].label}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 400, color: "#575757", opacity: 0.7 }}>{aboutCards[1].sublabel}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
