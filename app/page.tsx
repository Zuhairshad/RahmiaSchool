import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, SectionLabel, WavyUnderline, Button, StatTile } from "@/components/ui";

export const metadata: Metadata = {
  title: "RAHMA Model School | Inspiring Young Minds for a Bright Future",
  description:
    "Welcome to RAHMA Model School, where quality education, strong moral values, and character development come together to prepare students for a successful future.",
};

const stats = [
  { value: "210+", label: "Enrolled Students" },
  { value: "14+", label: "Qualified Teachers" },
  { value: "13%", label: "Modern Classrooms" },
  { value: "12+", label: "Years of Experience (Est. 2014)" },
];

const programs = [
  {
    num: "01",
    title: "Preschool & Junior Section",
    tag: "Play Group to Prep",
    desc: "A playful early learning program combining phonics, basic mathematics, creative arts, and social interaction in a safe, loving environment.",
    bg: "var(--color-tint-green)",
    accent: "var(--color-brand-teal)",
    image: { src: "/assets/images/i2ECgxjZP2t8RjEmI8skh28jRbQ-09736a12.avif", width: 1240, height: 848 },
  },
  {
    num: "02",
    title: "Primary School (Class 1–5)",
    tag: "Grades 1–5",
    desc: "Concept-based learning in core subjects with computer education, character building, and regular assessments.",
    bg: "var(--color-tint-purple)",
    accent: "var(--color-brand-purple)",
    image: { src: "/assets/images/Sfm9js53gBOL3V13gpQtyyxQPf8-334437a4.avif", width: 1240, height: 848 },
  },
  {
    num: "03",
    title: "Middle & High School",
    tag: "Grades 6–12",
    desc: "Analytical thinking, board exam preparation in Science & Arts, career guidance, and leadership skills.",
    bg: "var(--color-tint-cream)",
    accent: "var(--color-brand-gold)",
    image: { src: "/assets/images/yZKDsRUleMx3BoVzta3YgXn9l5A-8b5af1ba.avif", width: 1240, height: 848 },
  },
];

const whyChooseUs = [
  {
    icon: "🛡️",
    bg: "var(--color-tint-green)",
    title: "Safe & Caring Environment",
    desc: "A secure, friendly, and supportive atmosphere where children feel confident to learn and grow.",
  },
  {
    icon: "👩‍🏫",
    bg: "var(--color-tint-purple)",
    title: "Qualified & Dedicated Teachers",
    desc: "Our experienced teachers are committed to provide quality education while nurturing every student's individual abilities.",
  },
  {
    icon: "🎓",
    bg: "var(--color-tint-cream)",
    title: "Academic Excellence",
    desc: "Our structured curriculum develops strong academic foundations through concept-based learning and continuous assessments.",
  },
  {
    icon: "🤝",
    bg: "var(--color-tint-green)",
    title: "Character Building",
    desc: "We promote Islamic values, discipline, honesty, respect, and responsibility to help students become conscientious citizens.",
  },
  {
    icon: "⚽",
    bg: "var(--color-tint-purple)",
    title: "Co-Curricular & Sports",
    desc: "Students participate in debates, sports, science exhibitions, arts, and leadership events for holistic growth.",
  },
];

const testimonials = [
  {
    name: "Muhammad Rizwan",
    role: "School Parent",
    text: "A wonderful school that balances academics and character. The teachers are caring, and my children love coming to school every single day.",
    bg: "var(--color-brand-teal)",
  },
  {
    name: "Ayesha Malik",
    role: "Parent of Grade 5 Student",
    text: "My child has grown so much in confidence and knowledge since joining Rahma Model School. The individual attention from teachers is truly remarkable.",
    bg: "var(--color-brand-purple)",
  },
  {
    name: "Tariq Mehmood",
    role: "Parent of High School Student",
    text: "My child has grown so much in confidence and knowledge since joining Rahma Model School. The individual attention from teachers is truly remarkable.",
    bg: "var(--color-brand-gold)",
  },
];

const ctaCollage = [
  "/assets/images/bM5XLgck0nuZBUl800FPnYZLqM-49e6a37c.avif",
  "/assets/images/FH7s1VpnmO3OdrrAkXKU3gealE-79d1a684.avif",
  "/assets/images/IIm5NEuXpUdRszfB2rjqlZaHRdg-670fd09e.avif",
  "/assets/images/BVDpVUwW5DNcCihlJOIQdRXDfwk-b896e0b5.avif",
];

export default function HomePage() {
  return (
    <div>
      <style>{`
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
        .grid-auto-320 { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
        .grid-auto-260 { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
        .split-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; }
        .collage-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; max-width: 360px; margin: 32px auto 0; }
        @media (max-width: 860px) {
          .grid-4 { grid-template-columns: repeat(2, 1fr); }
          .split-2 { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: 600, background: "var(--color-dark-bg)", display: "flex", alignItems: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg,#0d0d0d 50%,#1a2a18 100%)", opacity: 0.95 }} />
        <div style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%", background: "linear-gradient(135deg,#1a2a18,#0d1a0d)", opacity: 0.6 }} />

        <Container style={{ position: "relative", padding: "100px 32px 80px" }}>
          <div style={{ maxWidth: 600 }}>
            <span
              style={{
                display: "inline-block",
                background: "rgba(9,216,154,0.15)",
                color: "var(--color-brand-teal)",
                fontFamily: "var(--font-label)",
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 14px",
                borderRadius: 100,
                marginBottom: 24,
              }}
            >
              Est. 2014 · Rawalpindi, Pakistan
            </span>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.15,
                marginBottom: 24,
                letterSpacing: "-0.02em",
              }}
            >
              Building bright young minds
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
              A nurturing space where children learn, play, and grow with confidence through a blend of creative
              activities and guided learning.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Button href="/contact" variant="solid">
                Admissions Open
              </Button>
              <Button href="/programs" variant="outline">
                View Programs
              </Button>
            </div>
          </div>
        </Container>

        <div style={{ position: "absolute", right: 80, bottom: 60, opacity: 0.15 }} aria-hidden>
          <svg width="120" height="120" viewBox="0 0 24 24">
            <path
              d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
              fill="var(--color-brand-teal)"
            />
          </svg>
        </div>
      </section>

      {/* ── ABOUT STRIP ── */}
      <section style={{ background: "var(--color-bg-cream)", padding: "80px 32px" }}>
        <Container>
          <div className="split-2">
            <div style={{ borderRadius: 20, overflow: "hidden", position: "relative", aspectRatio: "556/674" }}>
              <Image
                src="/assets/images/YnzL6DSOhiMqCKDM919QcZfvj98-d631f531.avif"
                alt="Students at RAHMA Model School"
                width={556}
                height={674}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div>
              <SectionLabel>About Us</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontWeight: 800,
                  color: "var(--color-ink)",
                  lineHeight: 1.2,
                  marginBottom: 20,
                }}
              >
                A warm space for{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  growing minds
                  <WavyUnderline />
                </span>
                , filled with care and discovery
              </h2>
              <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 16 }}>
                Welcome to RAHMA Model School, where quality education, strong moral values, and character
                development come together to prepare students for a successful future.
              </p>
              <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 28 }}>
                We provide a safe, caring, and engaging learning environment that encourages every child to achieve
                academic excellence while developing confidence, creativity, and leadership skills.
              </p>
              <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--color-ink)", fontWeight: 700, fontSize: "0.9rem" }}>
                Learn more →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── STATS BAND ── */}
      <section style={{ background: "var(--color-dark-bg)", padding: "72px 32px" }}>
        <Container>
          <div className="grid-4">
            {stats.map((s) => (
              <StatTile key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── PROGRAMS ── */}
      <section style={{ background: "var(--color-bg-cream)", padding: "80px 32px" }}>
        <Container>
          <div style={{ marginBottom: 48, maxWidth: 560 }}>
            <SectionLabel>Our Programs</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--color-ink)",
                lineHeight: 1.2,
              }}
            >
              Programs for growing{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                minds
                <WavyUnderline />
              </span>
            </h2>
          </div>
          <div className="grid-auto-320">
            {programs.map((p) => (
              <ProgramCard key={p.title} {...p} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: "var(--color-paper)", padding: "80px 32px" }}>
        <Container>
          <div style={{ marginBottom: 20, maxWidth: 640 }}>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--color-ink)",
                lineHeight: 1.2,
                marginBottom: 16,
              }}
            >
              What makes us the{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                right choice
                <WavyUnderline />
              </span>
            </h2>
            <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.75, maxWidth: 560 }}>
              We provide a safe, disciplined, and nurturing environment that develops students academically,
              morally, socially, and physically.
            </p>
          </div>

          <div className="split-2" style={{ marginBottom: 40, alignItems: "stretch" }}>
            <div style={{ borderRadius: 20, overflow: "hidden", position: "relative", aspectRatio: "566/900", maxHeight: 420 }}>
              <Image
                src="/assets/images/Q9Rn6EJi0zag5SQxsDKWNT8uZIg-3b62ea16.avif"
                alt="Students engaged in classroom activities"
                width={566}
                height={900}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div
              style={{
                background: "var(--color-dark-bg)",
                borderRadius: 20,
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 16,
                height: "100%",
              }}
            >
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: 800, color: "#fff", lineHeight: 1.25 }}>
                Guided by care and creativity
              </h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", lineHeight: 1.75 }}>
                At RAHMA Model School, our mission is to prepare students to become confident, creative, and
                responsible future leaders.
              </p>
              <div>
                <Button href="/contact" variant="solid">
                  Contact us
                </Button>
              </div>
            </div>
          </div>

          <div className="grid-auto-260">
            {whyChooseUs.map((item) => (
              <div key={item.title} style={{ background: item.bg, borderRadius: 20, padding: "32px 28px" }}>
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--color-ink)", marginBottom: 10 }}>
                  {item.title}
                </h3>
                <p style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "var(--color-bg-cream)", padding: "80px 32px" }}>
        <Container>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <SectionLabel>Testimonials</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 800,
                color: "var(--color-ink)",
                lineHeight: 1.2,
              }}
            >
              Stories from{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                happy parents
                <WavyUnderline />
              </span>
            </h2>
          </div>
          <div className="grid-auto-320">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name + t.role} {...t} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--color-brand-teal)", padding: "72px 32px", textAlign: "center" }}>
        <Container style={{ maxWidth: 640 }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "var(--color-ink)", marginBottom: 16 }}>
            Join our learning community today
          </h2>
          <p style={{ color: "rgba(0,0,0,0.65)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 24 }}>
            Support your child&rsquo;s growth with a nurturing environment designed for learning, creativity, and
            confidence.
          </p>
          <Button href="/contact" variant="dark">
            Admissions Open
          </Button>
          <div className="collage-4">
            {ctaCollage.map((src) => (
              <div key={src} style={{ borderRadius: 12, overflow: "hidden", position: "relative", aspectRatio: "1/1" }}>
                <Image src={src} alt="RAHMA Model School campus life" width={512} height={512} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

function ProgramCard({
  num,
  title,
  tag,
  desc,
  bg,
  accent,
  image,
}: {
  num: string;
  title: string;
  tag: string;
  desc: string;
  bg: string;
  accent: string;
  image: { src: string; width: number; height: number };
}) {
  return (
    <div style={{ background: bg, borderRadius: 20, padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ borderRadius: 14, position: "relative", aspectRatio: "1240/848", overflow: "hidden" }}>
        <Image
          src={image.src}
          alt={title}
          width={image.width}
          height={image.height}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            background: accent,
            color: "#fff",
            fontSize: "0.65rem",
            fontWeight: 700,
            padding: "4px 10px",
            borderRadius: 100,
            letterSpacing: "0.05em",
          }}
        >
          {tag.toUpperCase()}
        </span>
        <span
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            fontFamily: "var(--font-heading)",
            color: "#fff",
            fontWeight: 800,
            fontSize: "1.4rem",
            textShadow: "0 1px 6px rgba(0,0,0,0.5)",
          }}
        >
          {num}
        </span>
      </div>
      <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.05rem", color: "var(--color-ink)" }}>{title}</h3>
      <p style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.7 }}>{desc}</p>
      <Link href="/programs" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--color-ink)", fontWeight: 700, fontSize: "0.85rem", marginTop: 4 }}>
        View details →
      </Link>
    </div>
  );
}

function TestimonialCard({ name, role, text, bg }: { name: string; role: string; text: string; bg: string }) {
  return (
    <div
      style={{
        background: "var(--color-paper)",
        borderRadius: 20,
        padding: 28,
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div style={{ display: "flex", gap: 4 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ color: "var(--color-brand-gold)", fontSize: "0.9rem" }}>
            ★
          </span>
        ))}
      </div>
      <p style={{ color: "#444", fontSize: "0.9rem", lineHeight: 1.75, flex: 1 }}>&ldquo;{text}&rdquo;</p>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: bg,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.9rem",
          }}
        >
          {name.charAt(0)}
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--color-ink)" }}>{name}</div>
          <div style={{ color: "#888", fontSize: "0.78rem" }}>{role}</div>
        </div>
      </div>
    </div>
  );
}
