"use client";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/home/shared";
import WavyUnderline from "@/components/ui/WavyUnderline";
import { fadeUp } from "./shared";

const STEPS = [
  {
    tag: "Year 1",
    title: "Admission in Grade 4",
    body: "Your child joins the Hifz class and starts with correct pronunciation and Tajweed under the Qari Sahib, while Grade 4 studies carry on.",
  },
  {
    tag: "Year 2",
    title: "Building the rhythm",
    body: "Daily Sabaq, Sabqi and Manzil become a habit, and every new lesson comes with its easy Urdu translation.",
  },
  {
    tag: "Year 3",
    title: "Growing in understanding",
    body: "Memorization continues with the basic Tafseer of each verse, so the meaning stays in the heart alongside the words.",
  },
  {
    tag: "Year 4",
    title: "Completing the Hifz",
    body: "The Hifz is completed and strengthened through steady revision, with regular school continuing side by side.",
  },
  {
    tag: "Grade 9",
    title: "Hafiz-e-Quran",
    body: "Your child is a complete Hafiz or Hafiza and continues Grade 9 onwards with no academic loss.",
    final: true,
  },
];

export default function HifzJourney() {
  return (
    <section className="section-padded" style={{ background: "#fff", padding: "0 30px 120px" }}>
      <motion.div
        {...fadeUp()}
        className="hifz-journey-panel"
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          borderRadius: 28,
          background: "var(--color-brand-purple-deep)",
          padding: "88px 64px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Soft decorative glows */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            right: -160,
            top: -160,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(9,216,154,0.28) 0%, rgba(9,216,154,0) 70%)",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            left: -120,
            bottom: -200,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(252,181,32,0.22) 0%, rgba(252,181,32,0) 70%)",
          }}
        />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 64 }}>
          <div className="hifz-journey-head" style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40 }}>
            <div style={{ maxWidth: 640 }}>
              <Eyebrow light>The 4-year journey</Eyebrow>
              <h2
                className="hifz-h2"
                style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 700, lineHeight: 1.12, color: "#fff", margin: 0 }}
              >
                From Grade 4 to{" "}
                <span style={{ position: "relative", display: "inline-block", color: "var(--color-brand-gold)" }}>
                  Hafiz-e-Quran
                  <WavyUnderline color="var(--color-brand-teal)" />
                </span>
              </h2>
            </div>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.72)",
                margin: 0,
                maxWidth: 400,
              }}
            >
              Your child does not have to leave school for Hifz. Grades 4 to 8 continue as normal, and the Quran is preserved in the heart along the way.
            </p>
          </div>

          <div style={{ position: "relative" }}>
          {/* Connecting line through the step markers */}
          <div
            aria-hidden
            className="hifz-timeline-line"
            style={{
              position: "absolute",
              top: 23,
              left: 24,
              right: `calc((100% - ${(STEPS.length - 1) * 20}px) / ${STEPS.length} - 24px)`,
              height: 2,
              background: "linear-gradient(90deg, rgba(255,255,255,0.25), rgba(252,181,32,0.9))",
            }}
          />
          <ol
            className="hifz-timeline"
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "grid",
              gridTemplateColumns: `repeat(${STEPS.length}, minmax(0, 1fr))`,
              gap: 20,
              position: "relative",
            }}
          >
            {STEPS.map((step, i) => (
              <motion.li
                key={step.tag}
                {...fadeUp(0.08 * i)}
                className="hifz-timeline-step"
                style={{ position: "relative", display: "flex", flexDirection: "column", gap: 20 }}
              >
                <span
                  className="hifz-timeline-dot"
                  style={{
                    position: "relative",
                    zIndex: 1,
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 16,
                    background: step.final ? "var(--color-brand-gold)" : "#fff",
                    color: step.final ? "#000" : "var(--color-brand-purple-deep)",
                    boxShadow: step.final ? "0 0 0 8px rgba(252,181,32,0.2)" : "0 0 0 8px rgba(255,255,255,0.08)",
                  }}
                >
                  {step.final ? (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8z" fill="#000" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </span>
                <div
                  className="hifz-timeline-card"
                  style={{
                    flex: 1,
                    borderRadius: 20,
                    padding: "24px 22px",
                    background: step.final ? "rgba(252,181,32,0.14)" : "rgba(255,255,255,0.07)",
                    border: step.final ? "1px solid rgba(252,181,32,0.5)" : "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-label)",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: step.final ? "var(--color-brand-gold)" : "var(--color-brand-teal)",
                      marginBottom: 8,
                    }}
                  >
                    {step.tag}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 700, color: "#fff", margin: "0 0 10px", lineHeight: 1.3 }}>
                    {step.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.65, color: "rgba(255,255,255,0.7)", margin: 0 }}>
                    {step.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
