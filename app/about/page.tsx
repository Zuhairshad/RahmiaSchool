import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel, WavyUnderline, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us | RAHMA Model School Rawat",
  description:
    "Welcome to RAHMA Model School, where quality education, strong moral values, and character development come together to prepare students for a successful future.",
};

const timeline = [
  { year: "2014", text: "Established in Bagga Sheikhan, Rawat with high educational standards." },
  { year: "2017", text: "Expansion of modern primary school curriculum & laboratories." },
  { year: "2020", text: "Modern science lab, computer laboratory & smart classrooms launched." },
  { year: "2024+", text: "Over 210 students, 14 qualified educators & high secondary achievement." },
];

const values = [
  {
    icon: "🎓",
    bg: "var(--color-tint-green)",
    title: "Academic Excellence",
    desc: "Our structured curriculum develops strong academic foundations through concept-based learning and continuous assessments.",
  },
  {
    icon: "🌙",
    bg: "var(--color-tint-purple)",
    title: "Islamic & Moral Values",
    desc: "Instilling honesty, integrity, respect, discipline, and compassion in every student to build responsible citizens.",
  },
  {
    icon: "🛡️",
    bg: "var(--color-tint-cream)",
    title: "Safe & Supportive Campus",
    desc: "A secure, disciplined, and caring atmosphere where every child is encouraged to achieve their highest potential.",
  },
  {
    icon: "💡",
    bg: "var(--color-tint-green)",
    title: "Leadership & Innovation",
    desc: "Empowering students with critical thinking, modern IT skills, public speaking, and self-confidence.",
  },
];

const team = [
  {
    name: "Lt Col Ch. Muhammad Hafeez (R)",
    role: "Education Advisor",
    image: { src: "/assets/images/9rYdv1MUNiSRhBTTroHff0Df518-988f37b3.avif", width: 800, height: 850 },
  },
  {
    name: "Madam Sadaf Shabir",
    role: "Principal",
    image: { src: "/assets/images/Vi1ACTpArCU8a158EXq2wfU1gWY-a2326075.avif", width: 800, height: 850 },
  },
  {
    name: "Senior Academic Faculty",
    role: "Academic Coordinator",
    image: { src: "/assets/images/nR7WcOdZTQDy43uWhtOnRMT0iA-5ac5f5ab.avif", width: 800, height: 850 },
  },
  {
    name: "School Administration",
    role: "Admissions & Student Welfare",
    image: { src: "/assets/images/ZjZ4G0VsZ76Rs48VIacTqvdWFo-ec9c7da0.avif", width: 800, height: 850 },
  },
];

const faqs = [
  {
    q: "What age groups do you accept?",
    a: "We welcome children from early toddlers to preschool age, with carefully designed programs that match each stage of development. Our activities are tailored to support social and academic growth at every level.",
  },
  {
    q: "What is your teaching approach?",
    a: "Our teaching approach combines guided learning, creative play, and hands-on activities to foster curiosity, build confidence, develop essential skills, and support every child's individual growth and success.",
  },
  {
    q: "How do you ensure child safety?",
    a: "We ensure child safety through trained staff, secure facilities, supervised activities, strict safety policies, and a nurturing environment that prioritizes every child's well-being and protection.",
  },
  {
    q: "What are your class sizes?",
    a: "Our class sizes are kept small to ensure personalized attention, meaningful interaction, and a supportive learning environment where every child can actively participate and thrive.",
  },
  {
    q: "Do you offer parent updates?",
    a: "Yes, we provide regular parent communication updates through meetings, progress reports, and direct communication to keep families informed about their child's growth, learning, and development.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <style>{`
        .grid-auto-260 { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr)); gap: 20px; }
        .grid-auto-240 { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(220px, 100%), 1fr)); gap: 20px; }
        .split-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        @media (max-width: 810px) {
          .split-2 { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── BANNER ── */}
      <section style={{ background: "var(--color-paper)", padding: "72px 32px 60px" }}>
        <Container>
          <SectionLabel>About Us</SectionLabel>
          <div className="split-2" style={{ alignItems: "flex-start" }}>
            <h1
              className="hero-h1"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                color: "var(--color-ink)",
                lineHeight: 1.15,
              }}
            >
              A nurturing space for young{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                minds
                <WavyUnderline />
              </span>
            </h1>
            <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.8 }}>
              A nurturing space where children learn, play, and grow with confidence through a blend of creative
              activities and guided learning.
            </p>
          </div>
        </Container>
      </section>

      {/* ── STORY ── */}
      <section style={{ background: "var(--color-bg-cream)", padding: "60px 32px 80px" }}>
        <Container>
          <div className="split-2" style={{ marginBottom: 64 }}>
            <div style={{ position: "relative" }}>
              <div style={{ borderRadius: 20, overflow: "hidden", position: "relative", aspectRatio: "556/674" }}>
                <Image
                  src="/assets/images/YnzL6DSOhiMqCKDM919QcZfvj98-d631f531.avif"
                  alt="Students at RAHMA Model School"
                  width={556}
                  height={674}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  left: -16,
                  bottom: -16,
                  background: "var(--color-paper)",
                  borderRadius: 16,
                  padding: "18px 22px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
                  maxWidth: 220,
                }}
              >
                <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 800, color: "var(--color-brand-teal)" }}>
                  10+
                </div>
                <p style={{ color: "var(--color-body-text)", fontSize: "0.8rem", lineHeight: 1.5, marginTop: 4 }}>
                  Over 12 years of trusted academic excellence and moral leadership.
                </p>
              </div>
            </div>
            <div>
              <SectionLabel>Our Story</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  color: "var(--color-ink)",
                  lineHeight: 1.25,
                  marginBottom: 20,
                }}
              >
                The story of how our school began and our mission to support early learning
              </h2>
              <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 28 }}>
                RAHMA Model School was established in 2014 in Bagga Sheikhan, Near Rawat, Rawalpindi with the
                vision of providing affordable, high-quality education rooted in knowledge, character, and care.
                We are committed to developing students academically, morally, and socially.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {timeline.map((t) => (
                  <div key={t.year} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 800,
                        color: "var(--color-brand-teal)",
                        fontSize: "0.95rem",
                        minWidth: 56,
                      }}
                    >
                      {t.year}
                    </span>
                    <span style={{ color: "var(--color-body-text)", fontSize: "0.9rem", lineHeight: 1.6 }}>{t.text}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 28 }}>
                <Button href="/contact" variant="dark">
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <div style={{ background: "var(--color-brand-teal)", height: 8 }} />

      {/* ── VALUES ── */}
      <section style={{ background: "var(--color-bg-cream)", padding: "80px 32px" }}>
        <Container>
          <SectionLabel>Our Values</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "var(--color-ink)",
              marginBottom: 48,
              maxWidth: 600,
            }}
          >
            Values that shape{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              learning
              <WavyUnderline />
            </span>
          </h2>
          <div className="grid-auto-260">
            {values.map((v) => (
              <div key={v.title} style={{ background: v.bg, borderRadius: 20, padding: "32px 28px" }}>
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{v.icon}</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-ink)", marginBottom: 10 }}>
                  {v.title}
                </h3>
                <p style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── TEACHERS / LEADERSHIP ── */}
      <section style={{ background: "var(--color-paper)", padding: "80px 32px" }}>
        <Container>
          <SectionLabel>Our Dedicated Team</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "var(--color-ink)",
              marginBottom: 40,
            }}
          >
            Teachers who inspire young minds
          </h2>
          <div className="grid-auto-240">
            {team.map((p) => (
              <div key={p.name} style={{ background: "var(--color-bg-cream)", borderRadius: 20, overflow: "hidden" }}>
                <div style={{ position: "relative", aspectRatio: "800/850" }}>
                  <Image
                    src={p.image.src}
                    alt={p.name}
                    width={p.image.width}
                    height={p.image.height}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "20px 20px 24px" }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-ink)", marginBottom: 4 }}>
                    {p.name}
                  </h3>
                  <p style={{ color: "var(--color-brand-teal)", fontSize: "0.78rem", fontWeight: 700 }}>{p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "var(--color-bg-cream)", padding: "80px 32px" }}>
        <Container style={{ maxWidth: 840 }}>
          <SectionLabel>FAQ</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 800,
              color: "var(--color-ink)",
              marginBottom: 40,
            }}
          >
            Common questions from parents
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {faqs.map((f) => (
              <details
                key={f.q}
                style={{
                  background: "var(--color-paper)",
                  borderRadius: 14,
                  padding: "18px 22px",
                }}
              >
                <summary
                  style={{
                    cursor: "pointer",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "var(--color-ink)",
                    listStyle: "none",
                  }}
                >
                  {f.q}
                </summary>
                <p style={{ color: "var(--color-body-text)", fontSize: "0.9rem", lineHeight: 1.75, marginTop: 12 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--color-brand-teal)", padding: "72px 32px", textAlign: "center" }}>
        <Container style={{ maxWidth: 600 }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800, color: "var(--color-ink)", marginBottom: 16 }}>
            Join our learning community today
          </h2>
          <p style={{ color: "rgba(0,0,0,0.65)", fontSize: "0.95rem", marginBottom: 28 }}>
            Support your child&rsquo;s growth with a nurturing environment designed for learning, creativity, and
            confidence.
          </p>
          <Button href="/contact" variant="dark">
            Enroll now
          </Button>
        </Container>
      </section>
    </div>
  );
}
