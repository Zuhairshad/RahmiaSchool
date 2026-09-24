"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const plans = {
  monthly: {
    basic: { price: "PKR 1,200", period: "/month" },
    premium: { price: "PKR 2,800", period: "/month" },
  },
  annual: {
    basic: { price: "PKR 12,000", period: "/year" },
    premium: { price: "PKR 28,000", period: "/year" },
  },
};

const basicFeatures = [
  "Safe and nurturing environment",
  "Play-based learning activities",
  "Regular progress updates",
  "Community events access",
  "Basic support included",
];

const premiumFeatures = [
  "Structured learning programs",
  "Interactive group activities",
  "Weekly progress reports",
  "Healthy meals and snacks",
  "Priority parent support",
];

function ArrowButton({ href, children, variant = "purple" }: { href: string; children: string; variant?: "purple" | "green" }) {
  const colors = {
    purple: { bg: "#520080", text: "#fff", circle: "#fff", arrow: "#520080" },
    green: { bg: "#09d89a", text: "#000", circle: "#000", arrow: "#09d89a" },
  };
  const c = colors[variant];
  return (
    <Link
      href={href}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 20,
        padding: "9px 11px 9px 20px",
        borderRadius: 50,
        background: c.bg,
        color: c.text,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 16,
        lineHeight: "24px",
        textDecoration: "none",
      }}
    >
      {children}
      <span
        style={{
          width: 35,
          height: 35,
          borderRadius: "50%",
          background: c.circle,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path fill={c.arrow} d="M11.133 15.55a.833.833 0 01-.591-1.383l4.166-4.125-4.166-4.125a.833.833 0 111.183-1.175l4.708 4.708a.833.833 0 010 1.183l-4.708 4.709a.83.83 0 01-.592.208" />
          <path fill={c.arrow} d="M15.834 10.833H4.167a.833.833 0 110-1.667h11.667a.833.833 0 010 1.667" />
        </svg>
      </span>
    </Link>
  );
}

export default function PricingTabs() {
  const [tab, setTab] = useState<"monthly" | "annual">("monthly");
  const current = plans[tab];

  return (
    <section
      style={{
        background: "var(--color-bg-cream)",
        padding: "60px 30px 120px",
      }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
        {/* Header + tab toggle */}
        <div className="pricing-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ maxWidth: 440 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <span style={{ color: "#888", fontSize: 16 }}>→</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 500, textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>
                Fee Structure
              </span>
            </div>
            <h2
              className="pricing-heading"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 56,
                fontWeight: 700,
                lineHeight: "64.4px",
                color: "#000",
                margin: 0,
              }}
            >
              Plans built for every family
            </h2>
          </div>

          {/* Tab buttons */}
          <div
            style={{
              display: "flex",
              background: "#fff",
              borderRadius: 50,
              padding: 4,
              gap: 4,
            }}
          >
            {(["monthly", "annual"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                style={{
                  padding: "8px 20px",
                  borderRadius: 50,
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  fontWeight: 600,
                  lineHeight: "24px",
                  background: tab === t ? "#520080" : "transparent",
                  color: tab === t ? "#fff" : "#000",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
              >
                {t === "monthly" ? "Monthly" : "Annual"}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div
          className="pricing-cards-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.8fr",
            gap: 20,
            alignItems: "stretch",
          }}
        >
          {/* Small card */}
          <div
            style={{
              background: "#d7fdcf",
              borderRadius: 20,
              padding: 40,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 500, color: "#575757" }}>
                Basic care
              </span>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontSize: 44, fontWeight: 600, color: "#000", lineHeight: 1 }}>
                  {current.basic.price}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#575757" }}>
                  {current.basic.period}
                </span>
              </div>
            </div>

            <div>
              <ArrowButton href="/contact" variant="purple">
                Get started today
              </ArrowButton>
            </div>

            <div style={{ height: 1, background: "#d5d5d5" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#575757", margin: "0 0 12px" }}>
                Affordable community-focused fee structure with scholarships available.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {basicFeatures.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "#09d89a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 3,
                      }}
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden>
                        <path d="M1 4l2.5 3L9 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "24px", color: "#575757" }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Large card */}
          <div
            className="pricing-large-card-inner"
            style={{
              background: "#feeecd",
              borderRadius: 20,
              padding: 10,
              display: "flex",
              overflow: "hidden",
            }}
          >
            {/* Left content */}
            <div
              style={{
                flex: 1,
                padding: "30px 30px 30px 30px",
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 500, color: "#575757" }}>
                  Smart start
                </span>
                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 44, fontWeight: 600, color: "#000", lineHeight: 1 }}>
                    {current.premium.price}
                  </span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#575757" }}>
                    {current.premium.period}
                  </span>
                </div>
              </div>

              <div>
                <ArrowButton href="/contact" variant="green">
                  Get started today
                </ArrowButton>
              </div>

              <div style={{ height: 1, background: "#d5d5d5" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {premiumFeatures.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "50%",
                        background: "#09d89a",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: 3,
                      }}
                    >
                      <svg width="10" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
                        <path d="M1 4l2.5 3L7 1" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "24px", color: "#575757" }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right image */}
            <div
              className="pricing-image-panel"
              style={{
                width: "38%",
                flexShrink: 0,
                position: "relative",
                borderRadius: 14,
                overflow: "hidden",
              }}
            >
              <Image
                src="/assets/images/yJpmVxeiLLChpwpGjaX5dl1UO64-bd4e3ad9.avif"
                alt="RAHMA Model School"
                fill
                sizes="(max-width: 810px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
