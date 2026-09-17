import type { Metadata } from "next";
import { Container, SectionLabel, WavyUnderline, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Our Faculty",
  description:
    "Welcome to RAHMA Model School, where quality education, strong moral values, and character development come together to prepare students for a successful future.",
};

type Teacher = {
  name: string;
  role: string;
  bg: string;
  avatarBg: string;
  initColor: string;
};

const tints = ["#d7fdcf", "#ebe1fd", "#feeecd"];
const avatarColors = ["#09d89a", "#520080", "#f59e0b"];

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

const teachers: Teacher[] = [
  { name: "Shabnam Kayani", role: "School Coordinator", bg: tints[0], avatarBg: tints[0], initColor: avatarColors[0] },
  { name: "Rubab Zaitoon", role: "Mathematics Teacher", bg: tints[1], avatarBg: tints[1], initColor: avatarColors[1] },
  { name: "Sajal Fatima", role: "Science Teacher", bg: tints[2], avatarBg: tints[2], initColor: avatarColors[2] },
  { name: "Nida Jahan", role: "Montessori Teacher", bg: tints[0], avatarBg: tints[0], initColor: avatarColors[0] },
  { name: "Muqadas Shahzadi", role: "Montessori Teacher", bg: tints[1], avatarBg: tints[1], initColor: avatarColors[1] },
  { name: "Rimsha Bibi", role: "Islamiyat Teacher", bg: tints[2], avatarBg: tints[2], initColor: avatarColors[2] },
  { name: "Alishba Shahzadi", role: "Urdu Teacher", bg: tints[0], avatarBg: tints[0], initColor: avatarColors[0] },
  { name: "Sanam Shahzadi", role: "Computer Teacher", bg: tints[1], avatarBg: tints[1], initColor: avatarColors[1] },
  { name: "Moin Ullah", role: "Quran Teacher", bg: tints[2], avatarBg: tints[2], initColor: avatarColors[2] },
  { name: "Sadique Ullah", role: "Hifz Teacher", bg: tints[0], avatarBg: tints[0], initColor: avatarColors[0] },
];

export default function TeachersPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      {/* Header */}
      <section style={{ background: "var(--color-paper)", padding: "72px 32px 60px" }}>
        <Container>
          <SectionLabel>RAHMATES · Our Faculty</SectionLabel>
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
            Meet the RAHMATES who{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              educate &amp; inspire
              <WavyUnderline />
            </span>
          </h1>
          <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 560, marginTop: 16 }}>
            Our faculty are proud RAHMATES — a community of dedicated educators united by a shared commitment to academic excellence, moral values, and the growth of every student in their care.
          </p>
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
              <div key={t.name} style={{ background: t.bg, borderRadius: 20, padding: "32px 24px 28px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}>
                <div style={{ width: 88, height: 88, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.4rem", color: t.initColor }}>
                    {getInitials(t.name)}
                  </span>
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-ink)", marginBottom: 4 }}>
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
            Our RAHMATES faculty combine subject mastery with patient mentorship, nurturing moral values alongside academic brilliance in every classroom.
          </h2>
          <Button href="/admission">Enroll now</Button>
        </Container>
      </section>
    </div>
  );
}
