import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Programs" };

function WavyUnderline() {
  return (
    <svg viewBox="0 0 220 14" style={{ position: "absolute", bottom: -6, left: 0, width: "100%", height: 14 }} preserveAspectRatio="none">
      <path d="M 4 10 Q 55 2 110 10 Q 165 18 216 10" fill="none" stroke="#FCB520" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0l1.3 3.7H10L7 6l1.1 3.7L5 7.6 1.9 9.7 3 6 0 3.7h3.7L5 0z" fill="#FCB520"/></svg>
      <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>{children}</span>
    </div>
  );
}

const programs = [
  {
    title: "Preschool",
    sub: "Play Group · Nursery · Prep",
    ages: "Early Years",
    bg: "#D7FDCF",
    accent: "#09D89A",
    size: "Small & Safe",
    hours: "Half Day",
    desc: "Learning through play and hands-on activities. Early childhood development combining learning with creativity — rhymes, storytelling, colors, shapes, and numbers.",
    features: ["Rhymes & storytelling", "Colors, shapes & numbers", "Creative play", "Safe nurturing environment"],
  },
  {
    title: "Primary School",
    sub: "Class 1–5",
    ages: "Class 1–5",
    bg: "#EBE1FD",
    accent: "#3D2F6B",
    size: "Interactive",
    hours: "Full Day",
    desc: "Concept-based and interactive classroom teaching covering English, Urdu, Mathematics, Science, Social Studies, Islamiat, Computer Studies, and General Knowledge.",
    features: ["English, Urdu & Maths", "Science & Social Studies", "Islamiat & Computer Studies", "Weekly & monthly assessments"],
  },
  {
    title: "Middle School",
    sub: "Class 6–8",
    ages: "Class 6–8",
    bg: "#FEEECE",
    accent: "#FCB520",
    size: "Focused",
    hours: "Full Day",
    desc: "Deeper understanding of subjects, analytical thinking, research-based assignments, classroom presentations, and group discussions to prepare for advanced studies.",
    features: ["Analytical thinking", "Research assignments", "Group discussions", "Presentations & projects"],
  },
  {
    title: "High School",
    sub: "Class 9–10",
    ages: "Class 9–10",
    bg: "#D7FDCF",
    accent: "#09D89A",
    size: "Advanced",
    hours: "Full Day",
    desc: "Board examination preparation with Science and Arts streams. Physics, Chemistry, Biology, Computer Science, and Career Counseling for students.",
    features: ["Science & Arts streams", "Board exam preparation", "Physics, Chemistry & Biology", "Career counseling"],
  },
];

export default function ProgramsPage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      {/* Header */}
      <section style={{ background: "#fff", padding: "72px 32px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Our Programs</SectionLabel>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#000", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 560 }}>
            Programs designed<br />for growing{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              minds
              <WavyUnderline />
            </span>
          </h1>
        </div>
      </section>

      {/* Cards */}
      <section style={{ background: "#FCFAED", padding: "60px 32px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
          {programs.map(p => (
            <div key={p.title} style={{ background: p.bg, borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              {/* Image placeholder */}
              <div style={{ height: 220, background: "rgba(0,0,0,0.06)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ position: "absolute", top: 14, left: 14, background: p.accent, color: "#fff", fontSize: "0.65rem", fontWeight: 700, padding: "5px 12px", borderRadius: 100, letterSpacing: "0.06em" }}>
                  {p.ages.toUpperCase()}
                </span>
                <span style={{ color: "rgba(0,0,0,0.2)", fontSize: "0.8rem", fontWeight: 600 }}>[ Program photo ]</span>
              </div>

              <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                <p style={{ fontSize: "0.72rem", color: "#888", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{p.sub}</p>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#000" }}>{p.title}</h2>
                <p style={{ color: "#575757", fontSize: "0.875rem", lineHeight: 1.7 }}>{p.desc}</p>

                <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
                  <span style={{ background: "rgba(0,0,0,0.08)", padding: "4px 12px", borderRadius: 100, fontSize: "0.75rem", fontWeight: 600, color: "#444" }}>🕐 {p.hours}</span>
                  <span style={{ background: "rgba(0,0,0,0.08)", padding: "4px 12px", borderRadius: 100, fontSize: "0.75rem", fontWeight: 600, color: "#444" }}>👥 {p.size}</span>
                </div>

                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                  {p.features.map(f => (
                    <li key={f} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: "0.85rem", color: "#444" }}>
                      <span style={{ color: p.accent, fontWeight: 700 }}>✓</span> {f}
                    </li>
                  ))}
                </ul>

                <Link href="/admission" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#000", fontWeight: 700, fontSize: "0.875rem", marginTop: 8 }}>
                  View details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#09D89A", padding: "64px 32px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#000", marginBottom: 16 }}>Ready to enroll your child?</h2>
        <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", marginBottom: 28 }}>Start the admission process today and secure your child's spot.</p>
        <Link href="/admission" style={{ background: "#000", color: "#fff", fontWeight: 700, padding: "14px 32px", borderRadius: 100, fontSize: "0.95rem", display: "inline-block" }}>
          Start Admission
        </Link>
      </section>
    </div>
  );
}
