"use client";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/home/shared";
import { WavyUnderline } from "@/components/ui";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

export default function GalleryBanner() {
  return (
    <section className="gallery-banner" style={{ background: "#ffffff", padding: "120px 30px 56px" }}>
      <div
        className="gallery-banner-row"
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 48,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0 }}
          style={{ maxWidth: 680, display: "flex", flexDirection: "column", gap: 21 }}
        >
          <Eyebrow>Gallery</Eyebrow>

          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 8,
              background: "var(--color-tint-cream)",
              borderRadius: 50,
              padding: "6px 16px",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-brand-gold)" aria-hidden>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#000",
                textTransform: "uppercase",
              }}
            >
              Moments from our RAHMATES
            </span>
          </div>

          <h1
            className="gallery-banner-h1"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: "79.2px",
              color: "#000",
              margin: 0,
            }}
          >
            Life at RAHMA,{" "}
            <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap" }}>
              in pictures
              <WavyUnderline />
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring(0.12)}
          viewport={{ once: true, amount: 0 }}
          style={{ maxWidth: 370, display: "flex", flexDirection: "column", gap: 16 }}
        >
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: "24px",
              color: "var(--color-body-text)",
              margin: 0,
            }}
          >
            Celebrations, classrooms, study trips and sports days: a look at the everyday moments that make
            RAHMA Model School a joyful place to learn and grow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
