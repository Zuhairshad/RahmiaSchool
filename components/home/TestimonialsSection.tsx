"use client";
import { motion } from "framer-motion";
import { Eyebrow, testimonials } from "./shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

export default function TestimonialsSection() {
  return (
    <section style={{ background: "var(--color-bg-cream)", padding: "120px 30px 60px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 80 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0 }}
          style={{ maxWidth: 440 }}
        >
          <Eyebrow>Testimonials</Eyebrow>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: 56, fontWeight: 700, lineHeight: "64.4px", color: "#000", margin: 0 }}>
            Stories from happy parents
          </h2>
        </motion.div>

        <div
          style={{
            display: "flex",
            gap: 20,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            paddingBottom: 8,
            alignItems: "center",
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={spring(i * 0.12)}
              viewport={{ once: true, amount: 0 }}
              style={{
                flex: "0 0 774px",
                scrollSnapAlign: "start",
                borderRadius: 20,
                background: "#fff",
                display: "flex",
                overflow: "hidden",
                gap: 50,
                paddingRight: 40,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={t.image}
                alt={t.name}
                style={{
                  width: 342,
                  flexShrink: 0,
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "20px 0 0 20px",
                }}
              />
              <div
                style={{
                  flex: 1,
                  paddingTop: 40,
                  paddingBottom: 40,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 95,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "flex", gap: 4 }}>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <span key={j} style={{ color: "#fcb520", fontSize: 20 }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "24px", color: "#575757", margin: 0 }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, color: "#000" }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#575757" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
