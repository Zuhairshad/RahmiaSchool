"use client";
import { motion } from "framer-motion";
import { ArrowButton } from "./shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

export default function CtaSection() {
  return (
    <section style={{ background: "#fff", padding: "60px 30px", overflow: "hidden" }}>
      <div
        className="cta-inner"
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          background: "var(--color-bg-cream)",
          borderRadius: 20,
          padding: "120px 30px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          textAlign: "center",
        }}
      >
        {/* Decorative organic blob — top-left cream */}
        <svg
          aria-hidden
          style={{
            position: "absolute",
            left: -120,
            top: -120,
            width: 380,
            height: 380,
            zIndex: 0,
            pointerEvents: "none",
          }}
          viewBox="0 0 380 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M190 20 C280 20 360 90 360 190 C360 290 280 360 190 360 C90 360 20 280 20 190 C20 90 100 20 190 20 Z"
            fill="#feeecd"
            opacity="0.9"
          />
        </svg>

        {/* Decorative organic blob — bottom-right green */}
        <svg
          aria-hidden
          style={{
            position: "absolute",
            right: -120,
            bottom: -120,
            width: 380,
            height: 380,
            zIndex: 0,
            pointerEvents: "none",
          }}
          viewBox="0 0 380 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M190 20 C280 20 360 90 360 190 C360 290 280 360 190 360 C90 360 20 280 20 190 C20 90 100 20 190 20 Z"
            fill="#d7fdcf"
            opacity="0.9"
          />
        </svg>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0 }}
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 650,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
            }}
          >
            <h2
              className="cta-heading"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 56,
                fontWeight: 700,
                lineHeight: "64.4px",
                color: "#000",
                margin: 0,
              }}
            >
              Become a RAHMATE today
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
              Support your child&rsquo;s growth with a nurturing environment
              designed for learning, creativity, and confidence
            </p>
          </div>
          <ArrowButton href="/contact" variant="purple">Enroll now</ArrowButton>
        </motion.div>
      </div>
    </section>
  );
}
