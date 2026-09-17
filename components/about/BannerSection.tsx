"use client";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/home/shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

const StarIcon = () => (
  <svg width="23" height="23" viewBox="0 0 24 24" fill="#fcb520" aria-hidden>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function BannerSection() {
  return (
    <section style={{ background: "#ffffff", padding: "200px 30px 120px 30px" }}>
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0 }}
          style={{
            maxWidth: 650,
            display: "flex",
            flexDirection: "column",
            gap: 21,
          }}
        >
          {/* Eyebrow */}
          <Eyebrow>About Us</Eyebrow>

          {/* Tagline pill */}
          <div
            style={{
              display: "inline-flex",
              alignSelf: "flex-start",
              alignItems: "center",
              gap: 8,
              background: "#feeecd",
              borderRadius: 50,
              padding: "6px 16px",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#fcb520" aria-hidden>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              color: "#000",
              textTransform: "uppercase",
            }}>
              Where Education and Faith Build Character
            </span>
          </div>

          {/* H1 with gold ellipse underline on "minds" */}
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: "79.2px",
              color: "#000",
              margin: 0,
            }}
          >
            A nurturing space for young{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              minds
              <svg
                aria-hidden
                viewBox="0 0 264 106"
                fill="none"
                style={{
                  position: "absolute",
                  bottom: -14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: 264,
                  height: 106,
                  overflow: "visible",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              >
                <ellipse
                  cx="132"
                  cy="53"
                  rx="128"
                  ry="49"
                  stroke="#fcb520"
                  strokeWidth="5"
                  fill="none"
                />
              </svg>
            </span>
          </h1>
        </motion.div>

        {/* Right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring(0.12)}
          viewport={{ once: true, amount: 0 }}
          style={{
            maxWidth: 370,
            display: "flex",
            flexDirection: "column",
            gap: 16,
            alignSelf: "flex-end",
          }}
        >
          {/* 5 gold stars */}
          <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>

          {/* Body paragraph */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              lineHeight: "24px",
              color: "#575757",
              margin: 0,
            }}
          >
            Welcome to RAHMA Model School — where quality education, strong moral values, and character development come together to prepare students for a successful future. We provide a safe, caring environment that encourages every child to achieve their full potential.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
