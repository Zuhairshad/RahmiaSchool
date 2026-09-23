"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowButton } from "./shared";

const ease = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        minHeight: 1020,
        height: "auto",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        padding: "0 30px 80px",
        overflow: "hidden",
      }}
    >
      <Image
        src="/assets/images/hero-image-final.png"
        alt="RAHMA Model School building"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.15) 100%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 5,
          width: "100%",
          maxWidth: 1300,
          paddingLeft: 10,
        }}
      >
        <div style={{ maxWidth: 600, display: "flex", flexDirection: "column", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.05 }}
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: 10,
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 50,
                padding: "8px 18px",
                backdropFilter: "blur(8px)",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fcb520" aria-hidden>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: "rgba(255,255,255,0.9)",
                textTransform: "uppercase",
              }}>
                Where Education and Faith Build Character
              </span>
            </motion.div>
            <motion.h1
              className="hero-h1"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                lineHeight: "1.1",
                color: "#fff",
                margin: 0,
              }}
            >
              Building bright young minds
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                fontWeight: 400,
                lineHeight: "24px",
                color: "rgba(255,255,255,0.85)",
                margin: 0,
              }}
            >
              Welcome to RAHMA Model School, where quality education, strong moral values, and character development come together to prepare students for a successful future.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
          >
            <ArrowButton href="/contact" variant="white">
              Enroll now
            </ArrowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
