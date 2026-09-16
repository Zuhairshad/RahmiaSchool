import type { Metadata } from "next";
import Image from "next/image";
import { Container, SectionLabel, WavyUnderline, Button, AdmissionForm, CtaImageRow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Admissions",
};

const steps = [
  {
    step: "STEP 01",
    bg: "var(--color-tint-green)",
    icon: "/assets/images/y9YOOlFulKPlj13Zs9F86cn64-fd9ccbd3.svg",
    iconBg: "var(--color-brand-teal)",
    title: "Application Form",
    desc: "Fill out a simple admission form with your child's basic details to start the enrollment process quickly and easily.",
  },
  {
    step: "STEP 02",
    bg: "var(--color-tint-purple)",
    icon: "/assets/images/Jss21SlWGBoWTPdQOkC11KRPQ-f1b333bd.svg",
    iconBg: "var(--color-brand-purple)",
    title: "Parent Meeting",
    desc: "Attend a short discussion with our educators to understand your child's needs, learning goals, and future plans.",
  },
  {
    step: "STEP 03",
    bg: "var(--color-tint-cream)",
    icon: "/assets/images/zKWAqAmFwvEV7PKeGZLyshFIMH8-77559a5d.svg",
    iconBg: "var(--color-brand-gold)",
    title: "Confirmation Done",
    desc: "Once approved, complete the admission process and begin your child's learning journey with RAHMA Model School.",
  },
];

const infoCards = [
  {
    bg: "var(--color-tint-green)",
    title: "General Inquiry",
    desc: "Have questions about our programs or classes? We're here to help anytime.",
    value: "+92 331 5947506",
  },
  {
    bg: "var(--color-tint-purple)",
    title: "Opening Hours",
    desc: "Check our opening hours and plan your visit at a time that works best for you.",
    value: "Monday – Friday: 8:00 am – 2:00 pm",
    value2: "Saturday: 8:00 am – 1:00 pm · Sunday: Closed",
  },
];

export default function AdmissionPage() {
  return (
    <div>
      <style>{`
        .admission-steps-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .admission-app-grid { display: grid; grid-template-columns: 1fr 1.3fr; gap: 48px; align-items: start; }
        .admission-form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 810px) {
          .admission-steps-grid { grid-template-columns: 1fr; }
          .admission-app-grid { grid-template-columns: 1fr; }
          .admission-form-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: "var(--color-paper)", padding: "72px 0 60px" }}>
        <Container>
          <SectionLabel>Admission</SectionLabel>
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              color: "var(--color-ink)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: 560,
            }}
          >
            Start your learning{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              journey
              <WavyUnderline />
            </span>
          </h1>
        </Container>
      </section>

      {/* Steps */}
      <section style={{ background: "var(--color-bg-cream)", padding: "60px 0 80px" }}>
        <Container>
          <div className="admission-steps-grid">
            {steps.map((s) => (
              <div key={s.step} style={{ background: s.bg, borderRadius: 20, padding: "32px 28px" }}>
                <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", color: "#888", marginBottom: 20 }}>
                  {s.step}
                </p>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: s.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                  aria-hidden
                >
                  <Image src={s.icon} alt="" width={20} height={20} />
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.05rem", color: "#000", marginBottom: 12 }}>
                  {s.title}
                </h3>
                <p style={{ color: "var(--color-body-text)", fontSize: "0.875rem", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Application section: info + form */}
      <section style={{ background: "var(--color-paper)", padding: "80px 0" }}>
        <Container>
          <div className="admission-app-grid">
            {/* Info column */}
            <div>
              <SectionLabel>Apply Now</SectionLabel>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  color: "#000",
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                Simple Admission Form
              </h2>
              <p style={{ color: "var(--color-body-text)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 32 }}>
                Quickly submit your child&apos;s admission form to start the enrollment process without any hassle.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {infoCards.map((c) => (
                  <div key={c.title} style={{ background: c.bg, borderRadius: 16, padding: "20px 22px" }}>
                    <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#000", marginBottom: 6 }}>{c.title}</p>
                    <p style={{ color: "var(--color-body-text)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 8 }}>
                      {c.desc}
                    </p>
                    <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "#000" }}>{c.value}</p>
                    {"value2" in c && c.value2 && (
                      <p style={{ fontWeight: 600, fontSize: "0.8rem", color: "var(--color-body-text)" }}>{c.value2}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Form column */}
            <div id="apply-form" style={{ background: "var(--color-bg-cream)", borderRadius: 20, padding: "40px 36px", scrollMarginTop: 96 }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", color: "#000", marginBottom: 6 }}>
                Start Learning Journey
              </h3>
              <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: 24, lineHeight: 1.6 }}>
                Fill out the form with your child&apos;s details so we can understand their needs and support their
                early learning growth.
              </p>
              <AdmissionForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Preview / real campus photo */}
      <section style={{ position: "relative", background: "var(--color-dark-bg)", minHeight: 360, display: "flex", alignItems: "center", overflow: "hidden" }}>
        <Image
          src="/assets/images/hiFR0rrr2AhJAe05BBOm8Q7xRd8-6c28c0d2.avif"
          alt="Students at RAHMA Model School"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,10,10,0.75), rgba(10,10,10,0.15))" }} />
        <Container style={{ position: "relative" }}>
          <p style={{ color: "var(--color-brand-teal)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
            ✦ Preview
          </p>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.25,
              maxWidth: 520,
            }}
          >
            Watch our learning culture &amp; values
          </h2>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-brand-teal)", padding: "64px 0", textAlign: "center" }}>
        <Container>
          <CtaImageRow />
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 800, color: "#000", marginBottom: 16 }}>
            Join our learning community today
          </h2>
          <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", marginBottom: 28 }}>
            At RAHMA Model School, we welcome aspiring learners to experience quality education and moral character
            development.
          </p>
          <Button href="#apply-form" variant="dark">
            Enroll now
          </Button>
        </Container>
      </section>
    </div>
  );
}
