"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import GlyphField from "@/components/ui/GlyphField";

const VIDEO_ID = "mTYv7CFZQq0";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="section-padded about-video-section" style={{ background: "var(--color-dark-bg-deep)", padding: "120px 30px" }}>
      <style>{`
        @keyframes video-pulse {
          0% { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .video-play-btn { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .video-card:hover .video-play-btn { transform: scale(1.08); box-shadow: 0 0 0 10px rgba(9,216,154,0.15), 0 20px 60px rgba(9,216,154,0.45); }
        .video-play-btn:focus-visible { outline: 3px solid #fff; outline-offset: 4px; }
        @media (max-width: 810px) {
          .about-video-section { padding: 60px 16px !important; }
          .video-title { font-size: 24px !important; }
          .video-play-btn { width: 68px !important; height: 68px !important; }
          .video-card:not([data-playing="true"]) { aspect-ratio: 4 / 5 !important; }
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 32, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={spring()}
        viewport={{ once: true, amount: 0 }}
        className="video-card"
        data-playing={playing}
        style={{
          position: "relative",
          maxWidth: 1150,
          margin: "0 auto",
          aspectRatio: "16 / 9",
          borderRadius: 24,
          overflow: "hidden",
          background: "#050807",
          border: "1px solid rgba(9,216,154,0.22)",
          boxShadow: "0 40px 120px rgba(9,216,154,0.12)",
        }}
      >
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
            title="Step inside RAHMA Model School"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
          />
        ) : (
          <>
            <GlyphField />
            {/* Darken the centre so the title stays readable, and fade the edges. */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background:
                  "radial-gradient(ellipse 45% 40% at 50% 52%, rgba(5,8,7,0.92) 0%, rgba(5,8,7,0.55) 55%, rgba(5,8,7,0) 100%), linear-gradient(180deg, rgba(5,8,7,0.5) 0%, rgba(5,8,7,0) 25%, rgba(5,8,7,0) 75%, rgba(5,8,7,0.6) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 14,
                padding: 20,
                textAlign: "center",
                pointerEvents: "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-label)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  color: "var(--color-brand-teal)",
                  border: "1px solid rgba(9,216,154,0.4)",
                  background: "rgba(9,216,154,0.08)",
                  borderRadius: 6,
                  padding: "4px 10px",
                }}
              >
                WATCH
              </span>
              <h2
                className="video-title"
                style={{ fontFamily: "var(--font-heading)", fontSize: 40, fontWeight: 700, lineHeight: 1.15, color: "#fff", margin: 0 }}
              >
                Step inside RAHMA Model School
              </h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.65)", margin: 0 }}>
                A short look at where our RAHMATES learn and grow
              </p>
              <button
                type="button"
                className="video-play-btn"
                aria-label="Play video: Step inside RAHMA Model School"
                onClick={() => setPlaying(true)}
                style={{
                  pointerEvents: "auto",
                  position: "relative",
                  marginTop: 14,
                  flexShrink: 0,
                  width: 88,
                  height: 88,
                  borderRadius: "50%",
                  border: "none",
                  background: "var(--color-brand-teal)",
                  boxShadow: "0 20px 60px rgba(9,216,154,0.35)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "50%",
                    border: "2px solid var(--color-brand-teal)",
                    animation: "video-pulse 2s ease-out infinite",
                  }}
                />
                <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden style={{ marginLeft: 4 }}>
                  <path d="M6 3.8v16.4a1 1 0 0 0 1.5.86l13.6-8.2a1 1 0 0 0 0-1.72L7.5 2.94A1 1 0 0 0 6 3.8z" fill="#fff" />
                </svg>
              </button>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
}
