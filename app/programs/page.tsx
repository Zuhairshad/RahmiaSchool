import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, SectionLabel, WavyUnderline, Button } from "@/components/ui";
import { programs, programOrder } from "./[slug]/data";

export const metadata: Metadata = {
  title: "Academic Programs",
  description:
    "Welcome to RAHMA Model School, where quality education, strong moral values, and character development come together to prepare students for a successful future.",
};

export default function ProgramsPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      {/* Header */}
      <section style={{ background: "var(--color-paper)", padding: "72px 32px 60px" }}>
        <Container>
          <SectionLabel>Our Programs</SectionLabel>
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              color: "var(--color-ink)",
              lineHeight: 1.2,
              maxWidth: 560,
            }}
          >
            Programs designed
            <br />
            for growing{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              minds
              <WavyUnderline />
            </span>
          </h1>
        </Container>
      </section>

      {/* Cards */}
      <section style={{ background: "var(--color-bg-cream)", padding: "60px 32px 80px" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
              gap: 24,
            }}
          >
            {programOrder.map((slug) => {
              const p = programs[slug];
              return (
                <div
                  key={slug}
                  style={{
                    background: p.tintVar,
                    borderRadius: 20,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div style={{ position: "relative", height: 200 }}>
                    <Image
                      src={p.image.src}
                      alt={p.title}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 810px) 100vw, 33vw"
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: 14,
                        left: 14,
                        background: p.accentVar,
                        color: p.textOnAccent === "light" ? "#fff" : "#000",
                        fontSize: "0.65rem",
                        fontWeight: 700,
                        padding: "5px 12px",
                        borderRadius: 100,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {p.ageRange.toUpperCase()}
                    </span>
                  </div>

                  <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                    <h2
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        color: "var(--color-ink)",
                      }}
                    >
                      {p.title}
                    </h2>
                    <p style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.7 }}>
                      {p.tagline}
                    </p>

                    <div style={{ display: "flex", gap: 12, marginTop: 4, flexWrap: "wrap" }}>
                      <span
                        style={{
                          background: "rgba(0,0,0,0.08)",
                          padding: "4px 12px",
                          borderRadius: 100,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "#444",
                        }}
                      >
                        {p.programType}
                      </span>
                      <span
                        style={{
                          background: "rgba(0,0,0,0.08)",
                          padding: "4px 12px",
                          borderRadius: 100,
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "#444",
                        }}
                      >
                        {p.groupSize}
                      </span>
                    </div>

                    <Link
                      href={`/programs/${slug}`}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        color: "var(--color-ink)",
                        fontWeight: 700,
                        fontSize: "0.875rem",
                        marginTop: 8,
                      }}
                    >
                      View details &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
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
          Join our learning community today
        </h2>
        <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", marginBottom: 28, maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
          At RAHMA Model School, we provide a well-structured academic program that supports students at every stage of their educational journey.
        </p>
        <Button href="/admission" variant="dark">
          Enroll now
        </Button>
      </section>
    </div>
  );
}
