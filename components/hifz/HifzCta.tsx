"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowButton } from "@/components/home/shared";
import { GhostButton, spring } from "./shared";

// Round avatars cropped from school photos; objectPosition + zoom (scaled around the same point) centre each face.
const AVATARS = [
  { src: "/assets/images/rahma-character-2.jpeg", pos: "47% 14%", zoom: 2.4, style: { left: 80, top: 60, width: 76, height: 76 } },
  { src: "/assets/images/gallery/g-26.jpeg", pos: "48% 30%", zoom: 1.7, style: { left: 40, bottom: 80, width: 62, height: 62 } },
  { src: "/assets/images/rahma-character-3.jpeg", pos: "25% 57%", zoom: 2.6, style: { right: 80, top: 60, width: 76, height: 76 } },
  { src: "/assets/images/gallery/g-24.jpeg", pos: "62% 16%", zoom: 1.8, style: { right: 40, bottom: 80, width: 62, height: 62 } },
];

export default function HifzCta({ enrollHref }: { enrollHref: string }) {
  return (
    <section className="hifz-cta-section" style={{ background: "#fff", padding: "0 30px 60px", overflow: "hidden" }}>
      <div
        className="cta-inner"
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          background: "var(--color-tint-green)",
          borderRadius: 20,
          padding: "120px 30px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        {[
          { left: -120, top: -120, fill: "#feeecd" },
          { right: -120, bottom: -120, fill: "#ffffff" },
        ].map(({ fill, ...pos }, i) => (
          <svg
            key={i}
            aria-hidden
            style={{ position: "absolute", width: 380, height: 380, pointerEvents: "none", ...pos }}
            viewBox="0 0 380 380"
            fill="none"
          >
            <path d="M190 20 C280 20 360 90 360 190 C360 290 280 360 190 360 C90 360 20 280 20 190 C20 90 100 20 190 20 Z" fill={fill} opacity="0.9" />
          </svg>
        ))}

        {AVATARS.map((a) => (
          <div
            key={a.src}
            className="cta-avatar"
            style={{ position: "absolute", borderRadius: "50%", overflow: "hidden", border: "3px solid #fff", boxShadow: "0 10px 30px rgba(0,0,0,0.12)", zIndex: 1, ...a.style }}
          >
            <Image src={a.src} alt="" fill sizes="200px" style={{ objectFit: "cover", objectPosition: a.pos, transform: `scale(${a.zoom})`, transformOrigin: a.pos }} />
          </div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0 }}
          style={{ position: "relative", zIndex: 2, maxWidth: 680, display: "flex", flexDirection: "column", alignItems: "center", gap: 30 }}
        >
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#057a57",
              background: "#fff",
              borderRadius: 50,
              padding: "6px 14px",
            }}
          >
            Admissions open for Grade 4
          </span>
          <h2 className="cta-heading" style={{ fontFamily: "var(--font-heading)", fontSize: 56, fontWeight: 700, lineHeight: 1.15, color: "#000", margin: 0 }}>
            Give your child the honour of the Quran
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.7, color: "#3f3f3f", margin: 0 }}>
            Hafiz-e-Quran by Grade 8, with a full school education along the way. The only school in our area offering Hifz with Understanding.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <ArrowButton href={enrollHref} variant="purple">
              Enroll now
            </ArrowButton>
            <GhostButton href="/contact" dark>
              Talk to us
            </GhostButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
