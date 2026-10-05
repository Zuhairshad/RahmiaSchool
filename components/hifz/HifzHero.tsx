"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowButton } from "@/components/home/shared";
import WavyUnderline from "@/components/ui/WavyUnderline";
import { GhostButton, PlayIcon, type HifzProgram } from "./shared";

const ease = [0.16, 1, 0.3, 1] as const;

// Photo of a young RAHMATE in prayer with a classmate reciting the Quran (780x1040, shown uncropped).
const HERO_PHOTO = { src: "/assets/images/rahma-character-2.jpeg", width: 780, height: 1040 };

export default function HifzHero({ program }: { program: HifzProgram }) {
  return (
    <section
      className="hifz-hero"
      style={{
        position: "relative",
        minHeight: "min(calc(100svh - 64px), 960px)",
        display: "flex",
        alignItems: "center",
        padding: "80px 30px",
        overflow: "hidden",
        background: "var(--color-dark-bg-deep)",
      }}
    >
      {/* Blurred photo wash fills the viewport like the home hero, without stretching a portrait photo. */}
      <Image
        src={HERO_PHOTO.src}
        alt=""
        fill
        sizes="100vw"
        aria-hidden
        style={{ objectFit: "cover", objectPosition: "center 30%", filter: "blur(28px) saturate(1.1)", transform: "scale(1.15)", opacity: 0.55 }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 70% at 78% 40%, rgba(9,216,154,0.18) 0%, rgba(9,216,154,0) 60%), linear-gradient(100deg, rgba(10,10,10,0.94) 0%, rgba(10,10,10,0.82) 45%, rgba(20,8,32,0.7) 100%)",
        }}
      />

      <div
        className="hifz-hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1300,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.15fr) minmax(0, 0.85fr)",
          gap: 72,
          alignItems: "center",
        }}
      >
        {/* ── Copy ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {program.badge && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.05 }}
                style={{
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  alignItems: "center",
                  gap: 10,
                  background: "rgba(252,181,32,0.12)",
                  border: "1px solid rgba(252,181,32,0.45)",
                  borderRadius: 50,
                  padding: "8px 18px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#fcb520" aria-hidden style={{ flexShrink: 0 }}>
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span
                  className="hifz-hero-badge"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    color: "#fcd27a",
                    textTransform: "uppercase",
                  }}
                >
                  {program.badge}
                </span>
              </motion.div>
            )}

            <motion.h1
              className="hifz-hero-h1"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.15 }}
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 76,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#fff",
                margin: 0,
              }}
            >
              Hifz with{" "}
              <span style={{ position: "relative", display: "inline-block", color: "var(--color-brand-teal)" }}>
                Understanding
                <WavyUnderline />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.3 }}
              className="hifz-hero-tagline"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 18,
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.8)",
                margin: 0,
                maxWidth: 580,
              }}
            >
              {program.tagline}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.42 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 14 }}
          >
            <ArrowButton href={program.enrollHref} variant="white">
              Enroll for Grade 4
            </ArrowButton>
            <GhostButton href="#hifz-videos" icon={<PlayIcon />}>
              Watch the class
            </GhostButton>
          </motion.div>

          {/* Key facts */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
            className="hifz-hero-pills"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${program.pills.length}, minmax(0, 1fr))`,
              maxWidth: 580,
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.14)",
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(10px)",
              overflow: "hidden",
            }}
          >
            {program.pills.map((pill, i) => (
              <div
                key={pill.label}
                style={{
                  padding: "18px 20px",
                  borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: 4,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-label)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {pill.label}
                </span>
                <span
                  className="hifz-hero-pill-value"
                  style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, color: "#fff", lineHeight: 1.2 }}
                >
                  {pill.value}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Photo ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
          className="hifz-hero-photo"
          style={{ position: "relative", justifySelf: "end", width: "100%", maxWidth: 440 }}
        >
          {/* Offset teal frame behind the photo */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              transform: "translate(18px, 18px)",
              borderRadius: 28,
              border: "2px solid rgba(9,216,154,0.45)",
            }}
          />
          <div
            style={{
              position: "relative",
              borderRadius: 28,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <Image
              src={HERO_PHOTO.src}
              alt="Young RAHMATES at prayer while a classmate recites from the Quran"
              width={HERO_PHOTO.width}
              height={HERO_PHOTO.height}
              preload
              sizes="(max-width: 810px) 90vw, 440px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          {/* Floating revision chip */}
          <div
            className="hifz-hero-chip"
            style={{
              position: "absolute",
              left: -48,
              bottom: 56,
              background: "#fff",
              borderRadius: 18,
              padding: "14px 18px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
            }}
          >
            <span
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "var(--color-tint-green)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 19.5V5a2 2 0 012-2h13v16H6.5A2.5 2.5 0 004 21.5v-2z" stroke="#09d89a" strokeWidth="2" strokeLinejoin="round" />
                <path d="M8 7h7M8 11h5" stroke="#09d89a" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <div>
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, color: "#000" }}>Sabaq · Sabqi · Manzil</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#575757" }}>Daily revision, nothing forgotten</div>
            </div>
          </div>

          {/* Floating Hafiz badge */}
          <div
            className="hifz-hero-chip"
            style={{
              position: "absolute",
              right: -20,
              top: 36,
              background: "var(--color-brand-purple-deep)",
              color: "#fff",
              borderRadius: 18,
              padding: "12px 16px",
              boxShadow: "0 20px 50px rgba(82,0,128,0.45)",
              textAlign: "center",
            }}
          >
            <div style={{ fontFamily: "var(--font-label)", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#fcd27a" }}>
              Grade 8
            </div>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15 }}>Hafiz-e-Quran</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
