"use client";
import Image from "next/image";
import { FRIDAY_ACTIVITY_VIDEO } from "@/lib/school-info";

export default function GalleryVideos() {
  const video = FRIDAY_ACTIVITY_VIDEO;
  return (
    <section id="videos" style={{ scrollMarginTop: 80, background: "#fff", padding: "0 30px 56px" }}>
      <style>{`
        .gallery-video-row { display: flex; gap: 40px; align-items: center; background: var(--color-tint-purple); border-radius: 20px; padding: 32px; }
        .gallery-video-frame { flex-shrink: 0; width: 320px; aspect-ratio: 9 / 16; border-radius: 16px; overflow: hidden; background: #141414; }
        @media (max-width: 810px) {
          .gallery-video-row { flex-direction: column; align-items: stretch; gap: 24px; padding: 20px; }
          .gallery-video-frame { width: 100%; max-width: 320px; align-self: center; }
        }
      `}</style>
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: 20 }}>
          &#10022; Videos
        </p>
        <div className="gallery-video-row">
          {/* Facebook reel links don't embed reliably, so the poster opens the video on Facebook */}
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Watch on Facebook: ${video.title}`}
            className="gallery-video-frame"
            style={{ position: "relative", display: "block" }}
          >
            <Image src="/assets/images/rahma-character-2.jpeg" alt="" fill sizes="320px" style={{ objectFit: "cover", objectPosition: "center top", opacity: 0.7 }} />
            <span
              aria-hidden
              style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 72, height: 72, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.3)" }}
            >
              <svg width="26" height="26" viewBox="0 0 12 12"><path d="M3 1.5v9l7.5-4.5z" fill="var(--color-brand-purple-deep)" /></svg>
            </span>
          </a>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.5rem, 2.6vw, 2.2rem)", fontWeight: 700, lineHeight: 1.2, color: "#000", margin: 0 }}>
              {video.title}
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", lineHeight: 1.8, color: "var(--color-body-text)", margin: 0, maxWidth: 520 }}>
              Our Friday co-curricular activities: quizzes, storytelling, presentations and Islamic learning that develop the whole child
            </p>
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: "var(--color-brand-purple-deep)", color: "#fff", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.95rem", padding: "12px 24px", borderRadius: 100 }}
            >
              Watch on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
