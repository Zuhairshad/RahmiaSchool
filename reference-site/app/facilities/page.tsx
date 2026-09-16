import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Facilities" };

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

const facilities = [
  { icon: "📚", bg: "#D7FDCF", title: "Library", desc: "Our library provides a peaceful learning environment with a wide collection of books, reference materials and educational resources to encourage reading habits and independent learning." },
  { icon: "🔬", bg: "#EBE1FD", title: "Science Laboratory", desc: "Our science laboratory provides practical learning opportunities where students perform experiments and develop scientific thinking, observation, and analytical skills." },
  { icon: "💻", bg: "#FEEECE", title: "Computer Laboratory", desc: "The computer lab is equipped with modern computers and internet facilities that help students develop digital literacy and technology skills essential for today's world." },
  { icon: "⚽", bg: "#D7FDCF", title: "Sports Ground", desc: "Our spacious playground provides opportunities for physical education, sports competitions, and recreational activities that promote fitness, teamwork, and confidence." },
  { icon: "🖥️", bg: "#EBE1FD", title: "Smart Classrooms", desc: "We use modern teaching techniques, multimedia presentations, and interactive learning resources to make classroom learning more engaging and effective." },
];

export default function FacilitiesPage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      <section style={{ background: "#fff", padding: "72px 32px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Facilities</SectionLabel>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#000", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 560 }}>
            World-class facilities for{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              every learner
              <WavyUnderline />
            </span>
          </h1>
        </div>
      </section>

      <section style={{ background: "#FCFAED", padding: "60px 32px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {facilities.map(f => (
            <div key={f.title} style={{ background: f.bg, borderRadius: 20, padding: "32px 28px" }}>
              <div style={{ fontSize: "2.2rem", marginBottom: 16 }}>{f.icon}</div>
              <div style={{ height: 160, background: "rgba(0,0,0,0.06)", borderRadius: 12, marginBottom: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "rgba(0,0,0,0.2)", fontSize: "0.8rem", fontWeight: 600 }}>[ Facility photo ]</span>
              </div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#000", marginBottom: 10 }}>{f.title}</h2>
              <p style={{ color: "#575757", fontSize: "0.875rem", lineHeight: 1.75 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#09D89A", padding: "64px 32px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#000", marginBottom: 16 }}>Come see our campus</h2>
        <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", marginBottom: 28 }}>Schedule a visit and explore RAHMA Model School in person.</p>
        <Link href="/contact" style={{ background: "#000", color: "#fff", fontWeight: 700, padding: "14px 32px", borderRadius: 100, fontSize: "0.95rem", display: "inline-block" }}>
          Book a Visit
        </Link>
      </section>
    </div>
  );
}
