import type { Metadata } from "next";
import { Container, SectionLabel, Button } from "@/components/ui";

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
        {/* Decorative teal glow */}
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
          <div style={{ maxWidth: 720 }}>
            <SectionLabel>RAHMATES · Donate</SectionLabel>
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
              ✦ Where Education and Faith Build Character
            </p>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                margin: "0 0 28px",
              }}
            >
              Empowering{" "}
              <span style={{ color: "#09d89a" }}>RAHMATES</span>
            </h1>
            <p
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.05rem",
                lineHeight: 1.8,
                maxWidth: 640,
                margin: 0,
              }}
            >
              At Rahma Model School, we believe that every child deserves access to quality
              education, character building and a supportive environment, regardless of their
              financial circumstances.
            </p>
          </div>
        </Container>
      </section>

      {/* ── Mission ── */}
      <section style={{ background: "var(--color-paper)", padding: "72px 32px" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "start",
            }}
            className="donate-two-col"
          >
            <div>
              <p
                style={{
                  color: "var(--color-brand-teal)",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                ✦ Our Community
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  color: "var(--color-ink)",
                  lineHeight: 1.3,
                  marginBottom: 24,
                }}
              >
                Supporting children who need it most
              </h2>
              <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: 20 }}>
                The surrounding population has limited capacity to afford a substantial monthly fee.
                Therefore, the School Administration has to bear additional expenses to maintain the
                required standard of education and facilities.
              </p>
              <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.85 }}>
                Many children, including orphaned and underprivileged students, are receiving their
                education at Rahma Model School with the support of generous individuals and
                organizations.
              </p>
            </div>
            <div>
              {/* Highlight card */}
              <div
                style={{
                  background: "#d7fdcf",
                  borderRadius: 20,
                  padding: "36px 32px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background: "#09d89a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="9" cy="7" r="4" stroke="#fff" strokeWidth="2" />
                    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--color-ink)",
                    marginBottom: 14,
                  }}
                >
                  Part of our RAHMATES community
                </h3>
                <p style={{ color: "var(--color-body-text)", fontSize: "0.9rem", lineHeight: 1.8, margin: 0 }}>
                  At RMS, these children are not simply students — they are part of our RAHMATES
                  community, learning, growing and building their confidence alongside their peers
                  in a caring and nurturing environment.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Meaningful Environment ── */}
      <section style={{ background: "var(--color-bg-cream)", padding: "72px 32px" }}>
        <Container>
          <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                color: "var(--color-brand-teal)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              ✦ Our Commitment
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 800,
                color: "var(--color-ink)",
                lineHeight: 1.3,
                marginBottom: 24,
              }}
            >
              A Meaningful Educational Environment
            </h2>
            <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: 20 }}>
              Rahma Model School is committed to providing quality education through qualified,
              dedicated and caring teachers, along with a well-organized academic setup and
              facilities that support students&apos; learning and personal development.
            </p>
            <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.85 }}>
              Our aim is to make this quality educational environment accessible to deserving
              children from the surrounding community so that financial limitations do not prevent
              them from pursuing their education.
            </p>
          </div>

          {/* 3 pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              marginTop: 48,
            }}
            className="donate-pillars"
          >
            {[
              { bg: "#d7fdcf", iconBg: "#09d89a", title: "Qualified Teachers", desc: "Dedicated educators who nurture every child's academic, moral and personal growth." },
              { bg: "#ebe1fd", iconBg: "#520080", title: "Modern Facilities", desc: "A well-organized academic environment with the resources students need to thrive." },
              { bg: "#feeecd", iconBg: "#fcb520", title: "Character Building", desc: "Islamic values, discipline and responsibility woven into every aspect of school life." },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  background: p.bg,
                  borderRadius: 20,
                  padding: "28px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: p.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-ink)", margin: 0 }}>{p.title}</h3>
                <p style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Your Support ── */}
      <section style={{ background: "var(--color-dark-bg)", padding: "80px 32px" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 64,
              alignItems: "center",
            }}
            className="donate-two-col"
          >
            <div>
              <p
                style={{
                  color: "#09d89a",
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                ✦ Make a Difference
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.3,
                  marginBottom: 24,
                }}
              >
                Your Support Can Help a RAHMATE
              </h2>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: 20 }}>
                Your contribution can help a deserving child continue their education and benefit
                from the learning opportunities, guidance and facilities available at Rahma Model
                School.
              </p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.85, marginBottom: 20 }}>
                We invite individuals, organizations, philanthropists and community members to
                become part of this meaningful initiative and support the education of our deserving
                RAHMATES.
              </p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.85 }}>
                Your support can help a child learn today, grow with confidence and build a better
                future.
              </p>
            </div>

            {/* Quote card */}
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(9,216,154,0.2)",
                borderRadius: 24,
                padding: "40px 36px",
              }}
            >
              <svg width="40" height="32" viewBox="0 0 40 32" fill="none" aria-hidden style={{ marginBottom: 20 }}>
                <path d="M0 32V20C0 12.533 2.667 6.933 8 3.2L11.2 6.4C8.533 8.533 7.2 11.467 7.2 15.2H14.4V32H0ZM25.6 32V20C25.6 12.533 28.267 6.933 33.6 3.2L36.8 6.4C34.133 8.533 32.8 11.467 32.8 15.2H40V32H25.6Z" fill="rgba(9,216,154,0.3)" />
              </svg>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.5,
                  margin: "0 0 24px",
                }}
              >
                Support a RAHMATE —<br />Support a Future
              </p>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.75, margin: 0 }}>
                Every contribution, big or small, makes a real difference in the life of a deserving child.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Donation Details ── */}
      <section style={{ background: "var(--color-paper)", padding: "80px 32px" }}>
        <Container>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <p
              style={{
                color: "var(--color-brand-teal)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              ✦ Donation Account Details
            </p>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
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
                  Askari Bank — Zahoor Plaza, Peshawar Road, Rawalpindi
                </span>
              </div>

              {/* Detail rows */}
              <div style={{ padding: "32px" }}>
                {[
                  { label: "Account Name", value: "Lt Col Chaudhry Muhammad Hafeez" },
                  { label: "Account Number", value: "00300100580068" },
                  { label: "IBAN", value: "PK62ASCM0000300100580068" },
                  { label: "Bank", value: "Askari Bank" },
                  { label: "Branch", value: "Zahoor Plaza, Peshawar Road, Rawalpindi" },
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
                        minWidth: 140,
                      }}
                    >
                      {row.label}
                    </span>
                    <span
                      style={{
                        color: "#fff",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        fontFamily: row.label === "Account Number" || row.label === "IBAN" ? "monospace" : "inherit",
                        textAlign: "right",
                        letterSpacing: row.label === "Account Number" || row.label === "IBAN" ? "0.05em" : "normal",
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
          Support a RAHMATE — Support a Future
        </h2>
        <p
          style={{
            color: "rgba(0,0,0,0.6)",
            fontSize: "0.95rem",
            marginBottom: 28,
            maxWidth: 520,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Join a growing community of generous supporters helping deserving children learn, grow and build a better future.
        </p>
        <Button href="/contact" variant="dark">
          Get in touch
        </Button>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .donate-two-col { grid-template-columns: 1fr !important; gap: 36px !important; }
          .donate-pillars { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
