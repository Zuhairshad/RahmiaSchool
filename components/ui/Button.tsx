import Link from "next/link";
import type { ReactNode, CSSProperties } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "dark";
  style?: CSSProperties;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, CSSProperties> = {
  solid: { background: "var(--color-brand-teal)", color: "#000" },
  outline: {
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.2)",
  },
  dark: { background: "#000", color: "#fff" },
};

export default function Button({ href, children, variant = "solid", style }: ButtonProps) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        padding: "14px 28px",
        borderRadius: 100,
        fontSize: "0.95rem",
        display: "inline-block",
        ...variants[variant],
        ...style,
      }}
    >
      {children}
    </Link>
  );
}
