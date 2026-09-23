"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eyebrow } from "./shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

export default function PresentationSection() {
  return (
    <section
      className="presentation-section"
      style={{
        position: "relative",
        minHeight: 793,
        height: "auto",
        display: "flex",
        alignItems: "flex-end",
        padding: "500px 30px 120px",
        overflow: "hidden",
      }}
    >
      <Image
        src="/assets/images/rahma-computer-lab-2.png"
        alt="RAHMA Model School computer lab"
        fill
        style={{ objectFit: "cover", zIndex: 0 }}
      />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 1 }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 1300, width: "100%", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0 }}
          style={{ maxWidth: 515, display: "flex", flexDirection: "column", gap: 0 }}
        >
          <Eyebrow light>Our Campus</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 56,
              fontWeight: 700,
              lineHeight: "64.4px",
              color: "#fff",
              margin: 0,
            }}
          >
            Discover our learning space
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
