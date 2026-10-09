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
        src="/assets/images/hero-daylight.png"
        alt="RAHMA Model School building"
        fill
        preload
        sizes="100vw"
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0, filter: "brightness(1.15) saturate(1.05)" }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0) 100%), linear-gradient(to right, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0) 55%)",
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
              className="hero-pill"
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: 10,
                background: "#1a90cc", // the logo blue
                borderRadius: 50,
                padding: "8px 18px",
              }}
            >
              <span className="hero-pill-label" style={{
                fontFamily: "var(--font-body)",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.12em",
                color: "#fff",
                textTransform: "uppercase",
              }}>
                Home of the RAHMATES
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
              Where Education and Faith Build Character
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 18,
                fontWeight: 400,
                lineHeight: "27px",
                color: "#fff",
                margin: 0,
              }}
            >
              Welcome to RAHMA Model School, Rawat, Rawalpindi, where quality education, strong moral values, and character development come together to prepare students for a successful future
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
