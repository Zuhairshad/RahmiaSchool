"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type SchoolVideo = { id: string; title: string };

/**
 * "Watch video" button that plays the school's YouTube videos in a pop-up on
 * the page, so parents stay on the site instead of drifting off into YouTube.
 * The player is only created when the pop-up opens: YouTube's embed is heavy,
 * and most visitors never press play. youtube-nocookie.com sets no tracking
 * cookies until a video actually plays.
 *
 * The pop-up is portalled to <body>: the cards that use this button are
 * animated with transform, and a transformed ancestor turns position: fixed
 * into "fixed to that ancestor", which would trap the pop-up inside the card.
 */
export default function VideoModal({ videos, label = "Watch video" }: { videos: SchoolVideo[]; label?: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    // Stop the page behind the pop-up from scrolling while it is open.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    const opener = openerRef.current;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      opener?.focus();
    };
  }, [open]);

  if (videos.length === 0) return null;
  const video = videos[index];

  return (
    <>
      <button
        ref={openerRef}
        type="button"
        onClick={() => {
          setIndex(0);
          setOpen(true);
        }}
        style={{
          alignSelf: "flex-start",
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: "#fff",
          color: "#000",
          border: "none",
          borderRadius: 100,
          padding: "8px 18px 8px 8px",
          fontFamily: "var(--font-body)",
          fontSize: "0.9rem",
          fontWeight: 700,
          cursor: "pointer",
        }}
      >
        <span style={{ width: 30, height: 30, borderRadius: "50%", background: "#e62117", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
            <path d="M3 1.5v9l7.5-4.5z" fill="#fff" />
          </svg>
        </span>
        {label}
        {videos.length > 1 && <span style={{ fontWeight: 600, color: "#575757" }}>({videos.length})</span>}
      </button>

      {open && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={video.title}
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 2000,
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            padding: 16,
          }}
        >
          <div onClick={(e) => e.stopPropagation()} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, width: "100%" }}>
            <div style={{ display: "flex", justifyContent: "flex-end", width: "min(100%, calc((100dvh - 150px) * 9 / 16), 420px)" }}>
              <button
                ref={closeRef}
                type="button"
                aria-label="Close video"
                onClick={() => setOpen(false)}
                style={{ background: "rgba(255,255,255,0.12)", border: "none", borderRadius: "50%", width: 40, height: 40, color: "#fff", fontSize: 22, lineHeight: 1, cursor: "pointer" }}
              >
                ×
              </button>
            </div>
            {/* Shorts are portrait (9:16): size the player by whichever runs out first, width or height. */}
            <div
              style={{
                width: "min(100%, calc((100dvh - 150px) * 9 / 16), 420px)",
                aspectRatio: "9 / 16",
                borderRadius: 16,
                overflow: "hidden",
                background: "#000",
              }}
            >
              <iframe
                key={video.id}
                src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`}
                title={video.title}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                style={{ width: "100%", height: "100%", border: 0, display: "block" }}
              />
            </div>
            {videos.length > 1 && (
              <div style={{ display: "flex", gap: 8 }}>
                {videos.map((v, i) => (
                  <button
                    key={v.id}
                    type="button"
                    aria-label={`Play video ${i + 1}: ${v.title}`}
                    aria-pressed={i === index}
                    onClick={() => setIndex(i)}
                    style={{
                      minWidth: 44,
                      height: 36,
                      borderRadius: 100,
                      border: "1px solid rgba(255,255,255,0.3)",
                      background: i === index ? "#fff" : "transparent",
                      color: i === index ? "#000" : "#fff",
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
