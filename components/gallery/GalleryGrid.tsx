"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { GalleryPhoto } from "@/lib/gallery";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

const ALL = "All";

/* Matches the CSS column breakpoints below (container max 1300px, 32px gutters). */
const GRID_SIZES =
  "(min-width: 1300px) 300px, (min-width: 1200px) 24vw, (min-width: 810px) 32vw, (min-width: 480px) 48vw, 100vw";

/* Rough count of tiles visible above the fold at desktop width. */
const EAGER_COUNT = 4;

export default function GalleryGrid({
  photos,
  categories,
}: {
  photos: GalleryPhoto[];
  categories: readonly string[];
}) {
  const [filter, setFilter] = useState<string>(ALL);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const usedCategories = useMemo(
    () => categories.filter((c) => photos.some((p) => p.category === c)),
    [categories, photos]
  );

  const visible = useMemo(
    () => (filter === ALL ? photos : photos.filter((p) => p.category === filter)),
    [filter, photos]
  );

  const counts = useMemo(() => {
    const m: Record<string, number> = { [ALL]: photos.length };
    for (const p of photos) if (p.category) m[p.category] = (m[p.category] ?? 0) + 1;
    return m;
  }, [photos]);

  return (
    <section className="gallery-section" style={{ background: "#fff", padding: "0 30px 60px" }}>
      <style>{`
        .gallery-pills { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 36px; }
        .gallery-pill {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 18px; border-radius: 50px; cursor: pointer;
          font-family: var(--font-body); font-size: 15px; font-weight: 600; line-height: 20px;
          border: 1px solid var(--color-line); background: #fff; color: #000;
          transition: background .18s ease, color .18s ease, border-color .18s ease;
        }
        .gallery-pill:hover { border-color: #000; }
        .gallery-pill[aria-pressed="true"] { background: var(--color-brand-purple-deep); border-color: var(--color-brand-purple-deep); color: #fff; }
        .gallery-pill-count { font-size: 12px; font-weight: 700; padding: 1px 8px; border-radius: 50px; background: var(--color-tint-purple); color: var(--color-brand-purple-deep); }
        .gallery-pill[aria-pressed="true"] .gallery-pill-count { background: var(--color-brand-gold); color: #000; }
        .gallery-pill:focus-visible, .gallery-tile:focus-visible { outline: 3px solid var(--color-brand-gold); outline-offset: 3px; }

        .gallery-masonry { column-count: 1; column-gap: 20px; }
        @media (min-width: 480px) { .gallery-masonry { column-count: 2; } }
        @media (min-width: 810px) { .gallery-masonry { column-count: 3; } }
        @media (min-width: 1200px) { .gallery-masonry { column-count: 4; } }
        .gallery-item { break-inside: avoid; -webkit-column-break-inside: avoid; margin-bottom: 20px; }
        .gallery-tile {
          display: block; width: 100%; padding: 0; border: 0; cursor: zoom-in;
          border-radius: 18px; overflow: hidden; background: var(--color-tint-cream);
          position: relative; isolation: isolate;
          box-shadow: 0 1px 2px rgba(0,0,0,0.04);
          transition: transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s cubic-bezier(.16,1,.3,1);
        }
        .gallery-tile img { display: block; width: 100%; height: auto; transition: transform .6s cubic-bezier(.16,1,.3,1); }
        .gallery-tile-tag {
          position: absolute; left: 12px; bottom: 12px; z-index: 1;
          padding: 5px 12px; border-radius: 50px; background: rgba(255,255,255,0.92);
          font-family: var(--font-body); font-size: 12px; font-weight: 700; letter-spacing: .04em; color: #000;
          opacity: 0; transform: translateY(6px); transition: opacity .25s ease, transform .25s ease;
        }
        @media (hover: hover) {
          .gallery-tile:hover { transform: translateY(-6px); box-shadow: 0 18px 40px -16px rgba(20,20,20,0.35); }
          .gallery-tile:hover img { transform: scale(1.03); }
          .gallery-tile:hover .gallery-tile-tag { opacity: 1; transform: none; }
        }
        .gallery-empty { font-family: var(--font-body); color: var(--color-body-text); }

        @media (max-width: 810px) {
          .gallery-section { padding: 0 20px 40px !important; }
          .gallery-pills { flex-wrap: nowrap; overflow-x: auto; margin: 0 -20px 24px; padding: 2px 20px 6px; scrollbar-width: none; }
          .gallery-pills::-webkit-scrollbar { display: none; }
          .gallery-pill { flex-shrink: 0; font-size: 14px; padding: 9px 16px; }
          .gallery-masonry { column-gap: 12px; }
          .gallery-item { margin-bottom: 12px; }
          .gallery-tile { border-radius: 16px; }
        }
        @media (max-width: 479px) {
          .gallery-masonry { column-gap: 0; }
          .gallery-item { margin-bottom: 16px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gallery-tile, .gallery-tile img { transition: none; }
          .gallery-tile:hover, .gallery-tile:hover img { transform: none; }
        }
      `}</style>

      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        {usedCategories.length > 0 && (
          <div className="gallery-pills" role="group" aria-label="Filter photos by category">
            {[ALL, ...usedCategories].map((c) => (
              <button
                key={c}
                type="button"
                className="gallery-pill"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {c}
                <span className="gallery-pill-count">{counts[c] ?? 0}</span>
              </button>
            ))}
          </div>
        )}

        {visible.length === 0 ? (
          <p className="gallery-empty">No photos in this category yet.</p>
        ) : (
          <div className="gallery-masonry" key={filter}>
            {visible.map((photo, i) => (
              <motion.div
                key={photo.src}
                className="gallery-item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={spring(Math.min(i % 4, 3) * 0.05)}
              >
                <button
                  type="button"
                  className="gallery-tile"
                  onClick={() => setOpenIndex(i)}
                  aria-label={`View larger: ${photo.alt}`}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes={GRID_SIZES}
                    loading={i < EAGER_COUNT ? "eager" : "lazy"}
                    fetchPriority={i < 2 ? "high" : undefined}
                  />
                  {photo.category && filter === ALL && (
                    <span className="gallery-tile-tag" aria-hidden>
                      {photo.category}
                    </span>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {openIndex !== null && visible[openIndex] && (
        <Lightbox
          photos={visible}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </section>
  );
}

/* ── LIGHTBOX ─────────────────────────────────────────── */

function Lightbox({
  photos,
  index,
  onIndexChange,
  onClose,
}: {
  photos: GalleryPhoto[];
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const total = photos.length;
  const photo = photos[index];

  const prev = useCallback(() => onIndexChange((index - 1 + total) % total), [index, total, onIndexChange]);
  const next = useCallback(() => onIndexChange((index + 1) % total), [index, total, onIndexChange]);

  // Body scroll lock + focus management (move in on open, restore on close).
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      previouslyFocused?.focus?.();
    };
  }, []);

  // Keyboard: Esc, arrows, and a simple focus trap on Tab.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        next();
      } else if (e.key === "Tab" && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>("button:not([disabled])");
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) {
      if (dx < 0) next();
      else prev();
    } else if (dy > 90 && Math.abs(dy) > Math.abs(dx) * 1.5) {
      onClose();
    }
  };

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${total}`}
      className="gallery-lightbox"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <style>{`
        .gallery-lightbox {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(8,8,8,0.96); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          animation: gallery-fade .2s ease;
          touch-action: pan-y;
        }
        @keyframes gallery-fade { from { opacity: 0; } to { opacity: 1; } }
        .gallery-lightbox-top {
          position: absolute; top: 0; left: 0; right: 0; z-index: 2;
          display: flex; justify-content: space-between; align-items: center;
          padding: 16px 20px; pointer-events: none;
        }
        .gallery-lightbox-top > * { pointer-events: auto; }
        .gallery-lightbox-counter { font-family: var(--font-body); font-size: 14px; font-weight: 600; letter-spacing: .06em; color: rgba(255,255,255,0.75); }
        .gallery-lightbox-stage {
          position: relative; width: calc(100vw - 180px); height: calc(100vh - 150px); height: calc(100dvh - 150px);
          pointer-events: none;
        }
        .gallery-lightbox-stage img { pointer-events: auto; }
        .gallery-lightbox-caption {
          margin: 16px 20px 0; max-width: 720px; text-align: center;
          font-family: var(--font-body); font-size: 15px; line-height: 22px; color: rgba(255,255,255,0.85);
        }
        .gallery-lightbox-caption strong { color: var(--color-brand-gold); font-weight: 700; margin-right: 8px; text-transform: uppercase; font-size: 12px; letter-spacing: .08em; }
        .gallery-lb-btn {
          display: flex; align-items: center; justify-content: center;
          width: 52px; height: 52px; border-radius: 50%; cursor: pointer;
          border: 1px solid rgba(255,255,255,0.18); background: rgba(255,255,255,0.08); color: #fff;
          transition: background .18s ease, transform .18s ease;
        }
        .gallery-lb-btn:hover { background: rgba(255,255,255,0.18); }
        .gallery-lb-btn:focus-visible { outline: 3px solid var(--color-brand-gold); outline-offset: 3px; }
        .gallery-lb-nav { position: absolute; top: 50%; transform: translateY(-50%); z-index: 2; }
        .gallery-lb-nav:hover { transform: translateY(-50%) scale(1.05); }
        .gallery-lb-prev { left: 24px; }
        .gallery-lb-next { right: 24px; }
        .gallery-lb-close { width: 46px; height: 46px; }
        @media (max-width: 810px) {
          .gallery-lightbox-stage { width: 100vw; height: calc(100vh - 210px); height: calc(100dvh - 210px); }
          .gallery-lightbox-caption { font-size: 14px; line-height: 20px; }
          .gallery-lb-nav { top: auto; bottom: 20px; transform: none; width: 48px; height: 48px; }
          .gallery-lb-nav:hover { transform: none; }
          .gallery-lb-prev { left: calc(50% - 60px); }
          .gallery-lb-next { right: calc(50% - 60px); }
          .gallery-lightbox { padding-bottom: 56px; }
        }
      `}</style>

      <div className="gallery-lightbox-top">
        <span className="gallery-lightbox-counter" aria-live="polite">
          {index + 1} / {total}
        </span>
        <button ref={closeRef} type="button" className="gallery-lb-btn gallery-lb-close" onClick={onClose} aria-label="Close gallery">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {total > 1 && (
        <button type="button" className="gallery-lb-btn gallery-lb-nav gallery-lb-prev" onClick={prev} aria-label="Previous photo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      <div className="gallery-lightbox-stage">
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="100vw"
          style={{ objectFit: "contain", animation: "gallery-fade .25s ease" }}
          loading="eager"
        />
      </div>

      {/* Preload neighbours (same sizes => same srcset pick) so prev/next feel instant. */}
      {total > 1 && (
        <div aria-hidden style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", opacity: 0, pointerEvents: "none" }}>
          {[photos[(index + 1) % total], photos[(index - 1 + total) % total]].map((p) => (
            <div key={p.src} style={{ position: "relative", width: "100vw", height: "100vh" }}>
              <Image src={p.src} alt="" fill sizes="100vw" loading="eager" />
            </div>
          ))}
        </div>
      )}

      <p className="gallery-lightbox-caption">
        {photo.category && <strong>{photo.category}</strong>}
        {photo.alt}
      </p>

      {total > 1 && (
        <button type="button" className="gallery-lb-btn gallery-lb-nav gallery-lb-next" onClick={next} aria-label="Next photo">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
