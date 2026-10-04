"use client";
import { useEffect, useRef } from "react";

// English letters, Urdu letters and digits: the alphabets our RAHMATES learn.
export const DEFAULT_GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ابپتٹثجچحخدڈذرڑزژسشصضطظعغفقکگلمنوہیے+=?!#*";
const CELL = 15;

/** Animated field of glyphs that slowly ripple in brand teal, brighter near the pointer. */
export default function GlyphField({ glyphs = DEFAULT_GLYPHS }: { glyphs?: string } = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cols = 0;
    let rows = 0;
    let grid: string[] = [];
    let frame = 0;
    let visible = false;
    const pointer = { x: -9999, y: -9999 };
    const randomGlyph = () => glyphs[Math.floor(Math.random() * glyphs.length)];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / CELL);
      rows = Math.ceil(height / CELL);
      grid = Array.from({ length: cols * rows }, randomGlyph);
      draw(0);
    };

    const draw = (t: number) => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      ctx.font = "12px ui-monospace, Menlo, monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * CELL + CELL / 2;
          const y = r * CELL + CELL / 2;
          const wave = Math.sin(c * 0.18 + t * 0.0008) + Math.cos(r * 0.22 - t * 0.0006) + Math.sin((c + r) * 0.07 + t * 0.0004);
          let alpha = 0.06 + ((wave + 3) / 6) ** 2 * 0.32;
          const d = Math.hypot(x - pointer.x, y - pointer.y);
          if (d < 140) alpha += (1 - d / 140) * 0.45;
          ctx.fillStyle = `rgba(9, 216, 154, ${alpha.toFixed(3)})`;
          ctx.fillText(grid[r * cols + c], x, y);
        }
      }
    };

    const loop = (t: number) => {
      if (visible) {
        for (let i = 0; i < 6; i++) grid[Math.floor(Math.random() * grid.length)] = randomGlyph();
        draw(t);
      }
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      if (reduceMotion) draw(0);
    };
    const onLeave = () => {
      pointer.x = pointer.y = -9999;
      if (reduceMotion) draw(0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    io.observe(canvas);
    canvas.parentElement?.addEventListener("pointermove", onMove);
    canvas.parentElement?.addEventListener("pointerleave", onLeave);
    if (!reduceMotion) frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      io.disconnect();
      canvas.parentElement?.removeEventListener("pointermove", onMove);
      canvas.parentElement?.removeEventListener("pointerleave", onLeave);
    };
  }, [glyphs]);

  return <canvas ref={canvasRef} aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />;
}
