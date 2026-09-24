"use client";
import { motion } from "framer-motion";
import { Eyebrow, ArrowButton } from "@/components/home/shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring" as const,
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

const timeline = [
  { year: "2014", text: "Established in Bagga Sheikhan, Near Rawat, with a vision of affordable quality education" },
  { year: "2017", text: "Expanded curriculum and introduced modern, concept-based teaching methodologies" },
  { year: "2020", text: "Smart classrooms, computer laboratory, and science facilities launched" },
  { year: "2024+", text: "218 students, 14 qualified teachers, 13 classrooms, and growing every year" },
];

export default function StorySection() {
  return (
    <section className="section-padded" style={{ background: "var(--color-bg-cream)", padding: "120px 30px", overflowX: "hidden" }}>
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          gap: 60,
          alignItems: "flex-start",
        }}
        className="story-grid"
      >
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={spring()}
          viewport={{ once: true, amount: 0 }}
          style={{ width: 430, flexShrink: 0, display: "flex", flexDirection: "column", gap: 20 }}
        >
          {/* Image */}
          <div style={{ borderRadius: 20, overflow: "hidden", width: "100%", height: 300 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/rahma-kids-studying.jpeg"
              alt="Students studying at RAHMA Model School"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Stat card, icon top-right, number + text bottom-left */}
          <div
            style={{
              background: "#ebe1fd",
              borderRadius: 20,
              padding: "28px 28px 32px",
              position: "relative",
              overflow: "hidden",
              height: 260,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Bar chart icon, top right */}
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  background: "#520080",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="3" y="12" width="4" height="9" rx="1" fill="#fff" />
                  <rect x="10" y="7" width="4" height="14" rx="1" fill="#fff" />
                  <rect x="17" y="3" width="4" height="18" rx="1" fill="#fff" />
                </svg>
              </div>
            </div>

            {/* Decorative organic blob, bottom right */}
            <svg
              aria-hidden
              viewBox="0 0 260 180"
              fill="none"
              style={{
                position: "absolute",
                bottom: -10,
                right: -10,
                width: 200,
                height: 150,
                opacity: 0.4,
                pointerEvents: "none",
              }}
            >
              <path
                d="M230 160 C175 200 65 185 30 138 C-5 91 15 28 70 8 C125 -12 215 18 252 72 C280 118 270 130 230 160Z"
                fill="#c4aaf5"
              />
            </svg>

            {/* Number + description, bottom */}
            <div style={{ position: "relative", zIndex: 1 }}>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 52,
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "#000",
                  margin: "0 0 8px",
                }}
              >
                12+
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  lineHeight: "20px",
                  color: "#575757",
                  margin: 0,
                  maxWidth: 210,
                }}
              >
                Over 12 years of trusted academic excellence and moral leadership in Rawat.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={spring(0.1)}
          viewport={{ once: true, amount: 0 }}
          style={{ flex: 1, display: "flex", flexDirection: "column", gap: 28 }}
        >
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 44,
                fontWeight: 600,
                lineHeight: "52.8px",
                color: "#000",
                margin: "0 0 16px",
              }}
            >
              The story of how our school began and our mission to support early learning
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                lineHeight: "24px",
                color: "#575757",
                margin: 0,
              }}
            >
              RAHMA Model School was established in 2014 with a vision of providing affordable, high-quality education rooted in knowledge, character, and care. Since then, we have continuously improved our educational standards, learning environment, and co-curricular opportunities.
            </p>
          </div>

          {/* Teal asterisk divider, matches reference */}
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke="#09d89a" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <div style={{ flex: 1, height: 1, background: "#d5d5d5" }} />
          </div>

          {/* Timeline */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {timeline.map((item) => (
              <div
                key={item.year}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 0",
                  borderBottom: "1px solid #d5d5d5",
                }}
              >
                {/* Purple checkmark circle */}
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "#520080",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M2.5 7l3 3 6-6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#000",
                    minWidth: 52,
                    flexShrink: 0,
                  }}
                >
                  {item.year}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#575757", flex: 1 }}>
                  – {item.text}
                </span>
              </div>
            ))}
          </div>

          <div>
            <ArrowButton href="/contact" variant="purple">Contact us</ArrowButton>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .story-grid { flex-direction: column !important; }
          .story-grid > div:first-child { width: 100% !important; }
        }
      `}</style>
    </section>
  );
}
