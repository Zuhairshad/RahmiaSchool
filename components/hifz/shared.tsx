import Link from "next/link";
import type { ReactNode } from "react";

/** Framer spring used across the home page sections. */
export const spring = (delay = 0) => ({
  type: "spring" as const,
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

/** Fade/scale-up entrance, same feel as the home AboutSection. */
export const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.94, y: 24 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: spring(delay),
  viewport: { once: true, amount: 0 } as const,
});

/** Arabic letters for the Hifz glyph field. */
export const ARABIC_GLYPHS = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي";

export type HifzProgram = {
  title: string;
  badge?: string;
  tagline: string;
  description: string;
  pills: { label: string; value: string }[];
  subjects: string[];
  sections: { heading: string; body: string }[];
  enrollHref: string;
};

/** Secondary, outlined pill link that sits next to an ArrowButton. */
export function GhostButton({
  href,
  children,
  icon,
  dark = false,
}: {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  dark?: boolean;
}) {
  return (
    <Link
      href={href}
      className="arrow-btn"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        padding: icon ? "9px 20px 9px 11px" : "14px 26px",
        borderRadius: 50,
        border: dark ? "1px solid #d5d5d5" : "1px solid rgba(255,255,255,0.35)",
        background: dark ? "#fff" : "rgba(255,255,255,0.08)",
        color: dark ? "#000" : "#fff",
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 16,
        lineHeight: "24px",
        backdropFilter: dark ? undefined : "blur(8px)",
      }}
    >
      {icon && (
        <span
          style={{
            width: 35,
            height: 35,
            borderRadius: "50%",
            background: "var(--color-brand-teal)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {icon}
        </span>
      )}
      {children}
    </Link>
  );
}

export const PlayIcon = ({ size = 14, color = "#fff" }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden style={{ marginLeft: 2 }}>
    <path d="M6 3.8v16.4a1 1 0 0 0 1.5.86l13.6-8.2a1 1 0 0 0 0-1.72L7.5 2.94A1 1 0 0 0 6 3.8z" fill={color} />
  </svg>
);
