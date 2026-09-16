import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel, WavyUnderline, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Facilities | RAHMA Model School",
  description:
    "Equipped with modern science and computer laboratories, a peaceful library, smart classrooms, and spacious sports grounds — explore the facilities at RAHMA Model School.",
};

// Note: the Framer export (reference-site/public) does not include a dedicated
// facilities.html, so this list is grounded in the "Little moments that shine"
// feature teaser on the real homepage (science & computer labs, library, smart
// classrooms, sports grounds) rather than a page-specific source document.
const facilities = [
  {
    icon: "📚",
    bg: "var(--color-tint-green)",
    title: "Library",
    desc: "Our library provides a peaceful learning environment with a wide collection of books, reference materials and educational resources to encourage reading habits and independent learning.",
  },
  {
    icon: "🔬",
    bg: "var(--color-tint-purple)",
    title: "Science Laboratory",
    desc: "Our science laboratory provides practical learning opportunities where students perform experiments and develop scientific thinking, observation, and analytical skills.",
  },
  {
    icon: "💻",
    bg: "var(--color-tint-cream)",
    title: "Computer Laboratory",
    desc: "The computer lab is equipped with modern computers and internet facilities that help students develop digital literacy and technology skills essential for today's world.",
  },
  {
    icon: "⚽",
    bg: "var(--color-tint-green)",
    title: "Sports Ground",
    desc: "Our spacious playground provides opportunities for physical education, sports competitions, and recreational activities that promote fitness, teamwork, and confidence.",
  },
  {
    icon: "🖥️",
    bg: "var(--color-tint-purple)",
    title: "Smart Classrooms",
    desc: "We use modern teaching techniques, multimedia presentations, and interactive learning resources to make classroom learning more engaging and effective.",
  },
];

const campusPhotos = [
  "/assets/images/bM5XLgck0nuZBUl800FPnYZLqM-49e6a37c.avif",
  "/assets/images/FH7s1VpnmO3OdrrAkXKU3gealE-79d1a684.avif",
  "/assets/images/IIm5NEuXpUdRszfB2rjqlZaHRdg-670fd09e.avif",
  "/assets/images/BVDpVUwW5DNcCihlJOIQdRXDfwk-b896e0b5.avif",
];

export default function FacilitiesPage() {
  return (
    <div>
      <style>{`
        .grid-auto-320 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .collage-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        @media (max-width: 640px) {
          .collage-4 { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ background: "var(--color-paper)", padding: "72px 32px 40px" }}>
        <Container>
          <SectionLabel>Facilities</SectionLabel>
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              color: "var(--color-ink)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: 560,
              marginBottom: 32,
            }}
          >
            World-class facilities for{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              every learner
              <WavyUnderline />
            </span>
          </h1>
          <div className="collage-4">
            {campusPhotos.map((src) => (
              <div key={src} style={{ borderRadius: 14, overflow: "hidden", position: "relative", aspectRatio: "1/1" }}>
                <Image src={src} alt="RAHMA Model School campus life" width={512} height={512} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FACILITIES GRID ── */}
      <section style={{ background: "var(--color-bg-cream)", padding: "60px 32px 80px" }}>
        <Container>
          <div className="grid-auto-320">
            {facilities.map((f) => (
              <div key={f.title} style={{ background: f.bg, borderRadius: 20, padding: "32px 28px" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: 16 }}>{f.icon}</div>
                <div
                  style={{
                    height: 160,
                    borderRadius: 12,
                    marginBottom: 20,
                    background:
                      "linear-gradient(135deg, rgba(0,0,0,0.10), rgba(0,0,0,0.03))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "rgba(0,0,0,0.25)", fontSize: "0.8rem", fontWeight: 600 }}>{f.title}</span>
                </div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "var(--color-ink)", marginBottom: 10 }}>
                  {f.title}
                </h2>
                <p style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.75 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--color-brand-teal)", padding: "64px 32px", textAlign: "center" }}>
        <Container style={{ maxWidth: 560 }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 800, color: "var(--color-ink)", marginBottom: 16 }}>
            Come see our campus
          </h2>
          <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", marginBottom: 28 }}>
            Schedule a visit and explore RAHMA Model School in person.
          </p>
          <Button href="/contact" variant="dark">
            Book a Visit
          </Button>
        </Container>
      </section>
    </div>
  );
}
