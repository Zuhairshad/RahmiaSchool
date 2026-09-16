import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, SectionLabel, WavyUnderline, Button } from "@/components/ui";
import { programs, programOrder } from "./data";

export function generateStaticParams() {
  return programOrder.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs[slug];
  if (!program) return {};
  return {
    title: `${program.title} | RAHMA Model School`,
    description: program.tagline,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs[slug];
  if (!program) notFound();

  const related = programOrder.filter((s) => s !== slug).slice(0, 2);

  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      {/* Header */}
      <section style={{ background: "var(--color-paper)", padding: "72px 32px 48px" }}>
        <Container>
          <Link
            href="/programs"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              color: "#888",
              fontSize: "0.85rem",
              fontWeight: 600,
              marginBottom: 24,
            }}
          >
            &larr; All programs
          </Link>
          <SectionLabel>Program Details</SectionLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.9fr",
              gap: 40,
              alignItems: "center",
            }}
            className="program-hero-grid"
          >
            <div>
              <h1
                className="hero-h1"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  lineHeight: 1.15,
                    maxWidth: 560,
                }}
              >
                <span style={{ position: "relative", display: "inline-block" }}>
                  {program.title}
                  <WavyUnderline color={program.accentVar} />
                </span>
              </h1>
              <p
                style={{
                  color: "var(--color-body-text)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  maxWidth: 520,
                  marginTop: 24,
                }}
              >
                {program.tagline}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
                <Pill label="Ages" value={program.ageRange} />
                <Pill label="Group size" value={program.groupSize} />
                <Pill label="Schedule" value={program.programType} />
              </div>

              <div style={{ marginTop: 32 }}>
                <Button href="/admission" style={{ background: program.accentVar, color: program.textOnAccent === "light" ? "#fff" : "#000" }}>
                  Join now
                </Button>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                background: program.tintVar,
                aspectRatio: "1024 / 700",
              }}
            >
              <Image
                src={program.image.src}
                alt={program.title}
                width={program.image.width}
                height={program.image.height}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Intro + sections */}
      <section style={{ background: "var(--color-bg-cream)", padding: "56px 32px 80px" }}>
        <Container>
          <p
            style={{
              color: "var(--color-body-text)",
              fontSize: "1.05rem",
              lineHeight: 1.9,
              maxWidth: 800,
              marginBottom: 48,
            }}
          >
            {program.description}
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
            }}
            className="program-sections-grid"
          >
            {program.sections.map((section) => (
              <div
                key={section.heading}
                style={{
                  background: "var(--color-paper)",
                  borderRadius: 20,
                  padding: "28px 26px",
                  borderTop: `4px solid ${program.accentVar}`,
                }}
              >
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "var(--color-ink)",
                    marginBottom: 10,
                  }}
                >
                  {section.heading}
                </h2>
                <p style={{ color: "var(--color-body-text)", fontSize: "0.9rem", lineHeight: 1.75 }}>
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Related programs */}
      <section style={{ background: "var(--color-paper)", padding: "56px 32px 72px" }}>
        <Container>
          <SectionLabel>Related programs</SectionLabel>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 20,
            }}
            className="program-related-grid"
          >
            {related.map((s) => {
              const p = programs[s];
              return (
                <Link
                  key={s}
                  href={`/programs/${s}`}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    background: p.tintVar,
                    borderRadius: 16,
                    padding: "20px 24px",
                    color: "var(--color-ink)",
                  }}
                >
                  <div>
                    <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#666", marginBottom: 4 }}>
                      {p.ageRange}
                    </p>
                    <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem" }}>{p.title}</p>
                  </div>
                  <span style={{ fontWeight: 700 }}>&rarr;</span>
                </Link>
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
          Ready to enroll your child?
        </h2>
        <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", marginBottom: 28 }}>
          Start the admission process today and secure your child&apos;s spot.
        </p>
        <Button href="/admission" variant="dark">
          Start Admission
        </Button>
      </section>

      <style>{`
        @media (max-width: 810px) {
          .program-hero-grid { grid-template-columns: 1fr !important; }
          .program-sections-grid { grid-template-columns: 1fr !important; }
          .program-related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <span
      style={{
        background: "rgba(0,0,0,0.06)",
        padding: "6px 14px",
        borderRadius: 100,
        fontSize: "0.8rem",
        fontWeight: 600,
        color: "#444",
      }}
    >
      {label}: {value}
    </span>
  );
}
