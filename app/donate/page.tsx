import type { Metadata } from "next";
import { Container, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Donate | RAHMA Model School",
  description:
    "Support a deserving child's education at RAHMA Model School. Your contribution helps orphaned and underprivileged RAHMATES learn, grow, and build a better future.",
};

export default function DonatePage() {
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>

      {/* ── Hero ── */}
      <section
        style={{
          background: "var(--color-dark-bg)",
          padding: "100px 32px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(9,216,154,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <Container>
          <div style={{ maxWidth: 680, textAlign: "center", margin: "0 auto" }}>
            <p
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(9,216,154,0.12)",
                border: "1px solid rgba(9,216,154,0.3)",
                borderRadius: 50,
                padding: "6px 18px",
                color: "#09d89a",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 28,
              }}
            >
              ✦ Support a RAHMATE
            </p>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                margin: "0 0 24px",
              }}
            >
              Empower a Child&apos;s{" "}
              <span style={{ color: "#09d89a" }}>Education</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              At Rahma Model School, every child deserves quality education regardless of financial
              circumstances. Your generous donation supports orphaned and underprivileged RAHMATES
              in their journey of learning and character building.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Donation Details ── */}
      <section style={{ background: "var(--color-paper)", padding: "80px 32px" }}>
        <Container>
          <div style={{ maxWidth: 600, margin: "0 auto" }}>
            <p
              style={{
                color: "var(--color-brand-teal)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 12,
                textAlign: "center",
              }}
            >
              ✦ Financial Assistance
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 800,
                color: "var(--color-ink)",
                lineHeight: 1.3,
                marginBottom: 36,
                textAlign: "center",
              }}
            >
              Transfer your donation directly
            </h2>

            <div
              style={{
                background: "var(--color-dark-bg)",
                borderRadius: 24,
                overflow: "hidden",
              }}
            >
              {/* Header strip */}
              <div
                style={{
                  background: "#09d89a",
                  padding: "18px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2" y="5" width="20" height="14" rx="2" stroke="#000" strokeWidth="2" />
                  <path d="M2 10h20" stroke="#000" strokeWidth="2" />
                </svg>
                <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", color: "#000" }}>
                  Bank Islami, Saddar, Rawalpindi
                </span>
              </div>

              {/* Detail rows */}
              <div style={{ padding: "32px" }}>
                {[
                  { label: "Account Name", value: "Ch. M. Hafeez &/OR Ch. M. Hameed" },
                  { label: "Account No.", value: "301700161280265" },
                  { label: "IBAN", value: "PK93BKIP0301700161280265" },
                  { label: "Bank", value: "Bank Islami" },
                  { label: "Branch", value: "Saddar, Rawalpindi" },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: 16,
                      padding: "16px 0",
                      borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        flexShrink: 0,
                        minWidth: 130,
                      }}
                    >
                      {row.label}
                    </span>
                    <span
                      style={{
                        color: "#fff",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        fontFamily: row.label === "Account No." || row.label === "IBAN" ? "monospace" : "inherit",
                        textAlign: "right",
                        letterSpacing: row.label === "Account No." || row.label === "IBAN" ? "0.05em" : "normal",
                      }}
                    >
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--color-brand-teal)", padding: "64px 32px", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.8rem",
            fontWeight: 800,
            color: "#000",
            marginBottom: 16,
          }}
        >
          Support a RAHMATE, Support a Future
        </h2>
        <p
          style={{
            color: "rgba(0,0,0,0.6)",
            fontSize: "0.95rem",
            marginBottom: 28,
            maxWidth: 500,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Every contribution, big or small, makes a real difference in the life of a deserving child.
        </p>
        <Button href="/contact" variant="dark">
          Get in touch
        </Button>
      </section>

    </div>
  );
}
