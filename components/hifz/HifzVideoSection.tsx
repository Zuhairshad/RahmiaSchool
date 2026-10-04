"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import GlyphField from "@/components/ui/GlyphField";
import { ARABIC_GLYPHS, spring } from "./shared";

// Local portrait clips, 480x864 (9:16).
const VIDEOS = [
  {
    src: "/assets/videos/hifz-1.mp4",
    poster: "/assets/videos/hifz-1-poster.jpeg",
    title: "Hifz with Understanding",
    subtitle: "A look inside our Hifz classroom",
  },
  {
    src: "/assets/videos/hifz-2.mp4",
    poster: "/assets/videos/hifz-2-poster.jpeg",
    title: "Where the Quran is preserved",
    subtitle: "A glimpse of our Hifz class",
  },
];

function VideoCard({ video, index }: { video: (typeof VIDEOS)[number]; index: number }) {
  const [playing, setPlaying] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 32, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={spring(index * 0.12)}
      viewport={{ once: true, amount: 0 }}
      className="video-card hifz-video-card"
      data-playing={playing}
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "4 / 5",
        borderRadius: 24,
        overflow: "hidden",
        background: "#050807",
        border: "1px solid rgba(9,216,154,0.22)",
        boxShadow: "0 40px 120px rgba(9,216,154,0.12)",
      }}
    >
      {playing ? (
        <>
          {/* Blurred poster fills the sides so the portrait video isn't cropped or boxed in black. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.poster}
            alt=""
            aria-hidden
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "blur(28px) brightness(0.45)", transform: "scale(1.15)" }}
          />
        <video
          src={video.src}
          poster={video.poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
        />
        </>
      ) : (
        <>
          {/* Poster sits faintly behind the glyph field. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={video.poster}
            alt=""
            aria-hidden
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.22, filter: "grayscale(0.3)" }}
          />
          <GlyphField glyphs={ARABIC_GLYPHS} />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background:
                "radial-gradient(ellipse 70% 38% at 50% 52%, rgba(5,8,7,0.92) 0%, rgba(5,8,7,0.55) 55%, rgba(5,8,7,0) 100%), linear-gradient(180deg, rgba(5,8,7,0.55) 0%, rgba(5,8,7,0) 22%, rgba(5,8,7,0) 75%, rgba(5,8,7,0.7) 100%)",
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
              padding: 24,
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
            <h3
              className="hifz-video-title"
              style={{ fontFamily: "var(--font-heading)", fontSize: 28, fontWeight: 700, lineHeight: 1.2, color: "#fff", margin: 0 }}
            >
              {video.title}
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "rgba(255,255,255,0.65)", margin: 0 }}>{video.subtitle}</p>
            <button
              type="button"
              className="video-play-btn"
              aria-label={`Play video: ${video.title}`}
              onClick={() => setPlaying(true)}
              style={{
                pointerEvents: "auto",
                position: "relative",
                marginTop: 14,
                flexShrink: 0,
                width: 80,
                height: 80,
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
              <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden style={{ marginLeft: 4 }}>
                <path d="M6 3.8v16.4a1 1 0 0 0 1.5.86l13.6-8.2a1 1 0 0 0 0-1.72L7.5 2.94A1 1 0 0 0 6 3.8z" fill="#fff" />
              </svg>
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function HifzVideoSection() {
  return (
    <section
      id="hifz-videos"
      className="section-padded hifz-video-section"
      style={{ background: "var(--color-dark-bg-deep)", padding: "120px 30px", scrollMarginTop: 64 }}
    >
      <style>{`
        @keyframes video-pulse {
          0% { transform: scale(1); opacity: 0.55; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .video-play-btn { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .video-card:hover .video-play-btn { transform: scale(1.08); box-shadow: 0 0 0 10px rgba(9,216,154,0.15), 0 20px 60px rgba(9,216,154,0.45); }
        .video-play-btn:focus-visible { outline: 3px solid #fff; outline-offset: 4px; }
      `}</style>

      <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 56 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0 }}
          style={{ textAlign: "center", maxWidth: 680, display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}
        >
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.18em",
              color: "var(--color-brand-teal)",
              textTransform: "uppercase",
            }}
          >
            Inside the Hifz class
          </span>
          <h2 className="hifz-h2" style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 700, lineHeight: 1.12, color: "#fff", margin: 0 }}>
            See where your child will learn
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.7, color: "rgba(255,255,255,0.65)", margin: 0 }}>
            A calm, dedicated classroom for Hifz, Tajweed and daily revision, right inside RAHMA Model School.
          </p>
        </motion.div>

        <div
          className="hifz-video-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 580px))", justifyContent: "center", gap: 40, width: "100%" }}
        >
          {VIDEOS.map((v, i) => (
            <VideoCard key={v.src} video={v} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
