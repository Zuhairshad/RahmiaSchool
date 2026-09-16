import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel, WavyUnderline, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Faculty",
  description:
    "Welcome to RAHMA Model School, where quality education, strong moral values, and character development come together to prepare students for a successful future.",
};

type Teacher = {
  name: string;
  role: string;
  image: string;
  tint: string;
};

// Sourced from reference-site/public/teachers.html ("Desktop Team Card" blocks),
// in source order, including the real per-card tint colors and photos.
const teachers: Teacher[] = [
  {
    name: "Lt Col Ch. Muhammad Hafeez (R)",
    role: "Education Advisor",
    image: "/assets/images/9rYdv1MUNiSRhBTTroHff0Df518-988f37b3.avif",
    tint: "var(--color-tint-green)",
  },
  {
    name: "Madam Sadaf Shabir",
    role: "Principal",
    image: "/assets/images/Vi1ACTpArCU8a158EXq2wfU1gWY-a2326075.avif",
    tint: "var(--color-tint-purple)",
  },
  {
    name: "Senior Science Faculty",
    role: "Physics & Chemistry Educator",
    image: "/assets/images/nR7WcOdZTQDy43uWhtOnRMT0iA-5ac5f5ab.avif",
    tint: "var(--color-tint-cream)",
  },
  {
    name: "Senior Mathematics Faculty",
    role: "Mathematics & Logic Educator",
    image: "/assets/images/ZjZ4G0VsZ76Rs48VIacTqvdWFo-ec9c7da0.avif",
    tint: "var(--color-tint-green)",
  },
  {
    name: "Language & Debates Faculty",
    role: "English & Urdu Mentor",
    image: "/assets/images/IYAP5URMHNocCwB3ph59U4WMc-b2f2291a.avif",
    tint: "var(--color-tint-purple)",
  },
  {
    name: "Computer Science & IT Faculty",
    role: "Digital Literacy & STEM",
    image: "/assets/images/L0QtNwUAIGK0H1HvVR8UZqKTNbg-47b7d4d7.avif",
    tint: "var(--color-tint-cream)",
  },
];

export default function TeachersPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      {/* Header */}
      <section style={{ background: "var(--color-paper)", padding: "72px 32px 60px" }}>
        <Container>
          <SectionLabel>Our Teachers</SectionLabel>
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
            Meet dedicated educators{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              today
              <WavyUnderline />
            </span>
          </h1>
        </Container>
      </section>

      {/* Teacher cards */}
      <section style={{ background: "var(--color-bg-cream)", padding: "60px 32px 80px" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: 20,
            }}
          >
            {teachers.map((t) => (
              <div key={t.name} style={{ background: t.tint, borderRadius: 20, overflow: "hidden" }}>
                <div style={{ position: "relative", height: 260 }}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 810px) 100vw, 33vw"
                  />
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "var(--color-ink)",
                      marginBottom: 4,
                    }}
                  >
                    {t.name}
                  </p>
                  <p style={{ color: "var(--color-body-text)", fontSize: "0.85rem" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Philosophy / real CTA copy from teachers.html */}
      <section style={{ background: "var(--color-dark-bg)", padding: "64px 32px" }}>
        <Container style={{ maxWidth: 800, textAlign: "center" }}>
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
            &#10022; Join our learning community today
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.3,
              marginBottom: 20,
            }}
          >
            Our dedicated teachers combine subject mastery with patient mentorship, nurturing moral values alongside academic brilliance.
          </h2>
          <Button href="/admission">Enroll now</Button>
        </Container>
      </section>
    </div>
  );
}
