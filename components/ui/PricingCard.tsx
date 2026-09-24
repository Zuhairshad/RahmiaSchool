import Image from "next/image";
import Link from "next/link";

type PricingCardProps = {
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  variant?: "standard" | "premium";
  badge?: string;
  ctaHref: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export default function PricingCard({
  title,
  description,
  price,
  period = "/month",
  features,
  variant = "standard",
  badge,
  ctaHref,
  image,
  imageWidth = 840,
  imageHeight = 620,
}: PricingCardProps) {
  const isPremium = variant === "premium";

  return (
    <div
      style={{
        background: isPremium ? "var(--color-tint-purple)" : "var(--color-tint-green)",
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ padding: "32px 28px", flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 8 }}>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: isPremium ? "1.2rem" : "1.1rem",
              color: "#000",
            }}
          >
            {title}
          </h2>
          {badge && (
            <span
              style={{
                background: "var(--color-brand-purple)",
                color: "#fff",
                fontSize: "0.7rem",
                fontWeight: 700,
                padding: "4px 12px",
                borderRadius: 100,
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
              }}
            >
              {badge}
            </span>
          )}
        </div>
        <p style={{ color: "var(--color-body-text)", fontSize: isPremium ? "0.875rem" : "0.85rem", lineHeight: 1.6, marginBottom: 24 }}>
          {description}
        </p>
        <div style={{ marginBottom: 24 }}>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: isPremium ? "2.8rem" : "2.4rem",
              fontWeight: 800,
              color: "#000",
            }}
          >
            {price}
          </span>
          {price !== "Contact us" && <span style={{ color: "#888", fontSize: "0.875rem" }}> {period}</span>}
        </div>
        <Link
          href={ctaHref}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: isPremium ? "transparent" : "var(--color-brand-purple)",
            color: isPremium ? "var(--color-brand-purple)" : "#fff",
            border: isPremium ? "1.5px solid var(--color-brand-purple)" : "none",
            fontWeight: 700,
            padding: "12px 24px",
            borderRadius: 100,
            fontSize: "0.875rem",
            marginBottom: 28,
          }}
        >
          Get started today
          <span
            style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              background: isPremium ? "var(--color-brand-purple)" : "#fff",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: isPremium ? "#fff" : "var(--color-brand-purple)",
              fontSize: "0.75rem",
            }}
          >
            →
          </span>
        </Link>
        <p
          style={{
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "#444",
            marginBottom: 12,
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          What&apos;s included
        </p>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {features.map((f) => (
            <li key={f} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: "0.875rem", color: "#444" }}>
              <span style={{ color: "var(--color-brand-purple)", fontWeight: 700 }}>✓</span>
              {f}
            </li>
          ))}
        </ul>
      </div>
      {image && (
        <Image
          src={image}
          alt={`${title} classroom`}
          width={imageWidth}
          height={imageHeight}
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      )}
    </div>
  );
}
