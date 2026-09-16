import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel, WavyUnderline, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Student Life",
  description:
    "At RAHMA Model School, education extends far beyond textbooks through an active Student Life Program.",
};

// Copy grounded in reference-site/public/index.html ("Co-Curricular & Sports" /
// "Character Building" feature cards), reference-site/public/blogs.html (the
// "Student Life Program" CTA line and "Annual Sports Day & Athletics
// Competitions" post title) and reference-site/public/about.html (the
// "honesty, integrity, respect, discipline, and compassion" values line).
// There is no dedicated student-life.html in the export, so this page
// combines those real fragments into full sections.
const activities = [
  {
    icon: "\u{1F3A4}",
    bg: "var(--color-tint-green)",
    title: "Debate & Public Speaking",
    desc: "Students take part in debates and discussions that build confidence, critical thinking, and clear communication in both English and Urdu.",
  },
  {
    icon: "⚽",
    bg: "var(--color-tint-purple)",
    title: "Sports & Athletics",
    desc: "Regular sports periods lead up to the Annual Sports Day & Athletics Competitions, with team games, races, and fitness challenges for every age group.",
  },
  {
    icon: "\u{1F52C}",
    bg: "var(--color-tint-cream)",
    title: "Science Exhibitions",
    desc: "Students build science models and classroom projects, presenting their work at school exhibitions that turn concepts into hands-on discovery.",
  },
  {
    icon: "\u{1F3A8}",
    bg: "var(--color-tint-green)",
    title: "Arts & Creative Activities",
    desc: "Drawing, craft work, and creative displays give students room to express themselves outside the regular classroom curriculum.",
  },
  {
    icon: "\u{1F3DB}️",
    bg: "var(--color-tint-purple)",
    title: "Leadership & Co-Curricular Events",
    desc: "Leadership events and co-curricular activities encourage students to take initiative and grow through holistic, real-world experience.",
  },
  {
    icon: "\u{1F31F}",
    bg: "var(--color-tint-cream)",
    title: "Character & Moral Values",
    desc: "Every activity reinforces honesty, integrity, respect, discipline, and compassion in every student, building responsible citizens.",
  },
];

export default function StudentLifePage() {
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      {/* Hero */}
      <section style={{ background: "var(--color-paper)", padding: "72px 32px 60px" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 0.6fr",
              gap: 40,
              alignItems: "center",
            }}
            className="student-life-hero-grid"
          >
            <div>
              <SectionLabel>Student Life</SectionLabel>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 800,
                  color: "var(--color-ink)",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                  maxWidth: 600,
                }}
              >
                Education that goes{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  beyond textbooks
                  <WavyUnderline />
                </span>
              </h1>
              <p
                style={{
                  color: "var(--color-body-text)",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  maxWidth: 560,
                  marginTop: 20,
                }}
              >
                At RAHMA Model School, education extends far beyond textbooks through an active Student Life
                Program &mdash; students participate in debates, sports, science exhibitions, arts, and leadership
                events for holistic growth.
              </p>
            </div>
            <div
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                background: "var(--color-tint-green)",
                aspectRatio: "566 / 900",
                maxHeight: 420,
                justifySelf: "center",
                width: "100%",
                maxWidth: 280,
              }}
            >
              <Image
                src="/assets/images/Q9Rn6EJi0zag5SQxsDKWNT8uZIg-3b62ea16.avif"
                alt="Co-curricular life at RAHMA Model School"
                fill
                style={{ objectFit: "cover" }}
                sizes="280px"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Activities */}
      <section style={{ background: "var(--color-bg-cream)", padding: "48px 32px 80px" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {activities.map((a) => (
              <div key={a.title} style={{ background: a.bg, borderRadius: 20, padding: "28px" }}>
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{a.icon}</div>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "var(--color-ink)",
                    marginBottom: 10,
                  }}
                >
                  {a.title}
                </h2>
                <p style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.75 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Personality development */}
      <section style={{ background: "var(--color-dark-bg)", padding: "72px 32px" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "center",
            }}
            className="student-life-skills-grid"
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
                &#10022; Character Building
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.3,
                  marginBottom: 16,
                }}
              >
                Building tomorrow&apos;s leaders today
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.8 }}>
                We promote Islamic values, discipline, honesty, respect, and responsibility to help students become
                conscientious citizens &mdash; growing academically, morally, and socially.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                "Confidence & Leadership",
                "Teamwork & Cooperation",
                "Responsibility & Discipline",
                "Respect & Social Skills",
                "Critical Thinking",
                "Time Management",
              ].map((s) => (
                <div
                  key={s}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: 12,
                    padding: "16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span style={{ color: "var(--color-brand-teal)", fontWeight: 700, fontSize: "1rem" }}>&#10003;</span>
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>{s}</span>
                </div>
              ))}
            </div>
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
        <p
          style={{
            color: "rgba(0,0,0,0.6)",
            fontSize: "0.95rem",
            marginBottom: 28,
            maxWidth: 560,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          At RAHMA Model School, education extends far beyond textbooks through an active Student Life Program.
        </p>
        <Button href="/admission" variant="dark">
          Enroll now
        </Button>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .student-life-hero-grid { grid-template-columns: 1fr !important; }
          .student-life-hero-grid > div:last-child { max-width: 220px !important; justify-self: start !important; }
          .student-life-skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
