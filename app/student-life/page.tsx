import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel, WavyUnderline, Button } from "@/components/ui";
import ActivitiesSection from "@/components/student-life/ActivitiesSection";

export const metadata: Metadata = {
  title: "Student Life",
  description:
    "At RAHMA Model School, education extends far beyond textbooks through an active Student Life Program.",
};

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
              <SectionLabel>RAHMATES · Student Life</SectionLabel>
              <h1
                className="hero-h1"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  color: "var(--color-ink)",
                  lineHeight: 1.2,
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
                At RAHMA Model School, education extends far beyond textbooks. We believe that every child
                should have opportunities to explore, create, lead, and grow in a supportive environment.
                Our Student Life Programme develops confidence, leadership, creativity, teamwork,
                communication skills, and responsibility through varied educational and co-curricular activities.
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
                src="/assets/images/rahma-co-curricular-2.jpeg"
                alt="Co-curricular activities at RAHMA Model School"
                fill
                style={{ objectFit: "cover" }}
                sizes="280px"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <ActivitiesSection />

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
                Every RAHMATE carries values of honesty, discipline, respect, and faith — growing not just academically, but as responsible citizens who make a difference in their community and beyond.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {[
                "Confidence & Public Speaking",
                "Leadership Skills",
                "Teamwork & Cooperation",
                "Responsibility & Discipline",
                "Respect & Positive Behaviour",
                "Social Skills",
                "Critical Thinking",
                "Decision Making",
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
          Become a RAHMATE — join a school community where education, faith, and character shape every student&rsquo;s journey.
        </p>
        <Button href="/admission" variant="dark">
          Enroll now
        </Button>
      </section>

      <style>{`
        @media (max-width: 810px) {
          .student-life-hero-grid { grid-template-columns: 1fr !important; }
          .student-life-hero-grid > div:last-child { max-width: 220px !important; justify-self: start !important; }
          .student-life-skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
