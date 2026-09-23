"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eyebrow, ArrowButton, programs } from "./shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

export default function ProgramsSection() {
  return (
    <section style={{ background: "var(--color-bg-cream)", padding: "120px 30px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 80 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0.5 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}
        >
          <div style={{ maxWidth: 440 }}>
            <Eyebrow>Our Programs</Eyebrow>
            <h2 className="programs-heading" style={{ fontFamily: "var(--font-heading)", fontSize: 56, fontWeight: 700, lineHeight: "64.4px", color: "#000", margin: 0 }}>
              Programs for growing minds
            </h2>
          </div>
          <ArrowButton href="/programs" variant="purple">View all programs</ArrowButton>
        </motion.div>

        {/* Program cards — single column, full width, 40px gap */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          {programs.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, scale: 0.8, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={spring(i * 0.1)}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Link
                href="/programs"
                className="program-card-link"
                style={{
                  display: "flex",
                  background: p.bg,
                  borderRadius: 20,
                  padding: 10,
                  overflow: "hidden",
                  textDecoration: "none",
                  height: 544,
                  alignItems: "stretch",
                }}
              >
                {/* Content + Image wrapper */}
                <div className="program-card-inner" style={{ display: "flex", flex: 1, gap: 0 }}>
                  {/* Content side — 600px max width */}
                  <div
                    className="program-card-content"
                    style={{
                      width: 600,
                      flexShrink: 0,
                      padding: "30px 30px 30px 30px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      gap: 0,
                    }}
                  >
                    {/* Top: number + title + description + age pill */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 60 }}>
                      {/* Number */}
                      <div
                        style={{
                          width: 70,
                          height: 70,
                          borderRadius: "100px",
                          background: "rgba(255,255,255,0.9)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-heading)",
                          fontSize: 20,
                          fontWeight: 700,
                          color: "#000",
                          flexShrink: 0,
                        }}
                      >
                        {p.num}
                      </div>

                      {/* Title, desc, age — gap 30px between title-block and age */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
                        {/* Title + description — gap 24px */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                          <h3
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontSize: 30,
                              fontWeight: 600,
                              lineHeight: "40.5px",
                              color: "#000",
                              margin: 0,
                            }}
                          >
                            {p.title}
                          </h3>
                          <p
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: 16,
                              fontWeight: 400,
                              lineHeight: "24px",
                              color: "#575757",
                              margin: 0,
                            }}
                          >
                            {p.desc}
                          </p>
                        </div>
                        {/* Tag pill */}
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            background: p.tagColor,
                            color: "#fff",
                            fontFamily: "var(--font-body)",
                            fontSize: 14,
                            fontWeight: 600,
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            padding: "10px 20px",
                            borderRadius: 40,
                            alignSelf: "flex-start",
                            height: 44,
                          }}
                        >
                          {p.tag}
                        </span>
                      </div>
                    </div>

                    {/* Bottom: View details button */}
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#000",
                        }}
                      >
                        View details
                      </span>
                      <span style={{ fontSize: 16, color: "#000" }}>→</span>
                    </div>
                  </div>

                  {/* Image side — 610px max width, fills remaining space */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.title}
                    className="program-card-image"
                    style={{
                      flex: 1,
                      maxWidth: 610,
                      objectFit: "cover",
                      display: "block",
                      borderRadius: 12,
                      alignSelf: "stretch",
                    }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
