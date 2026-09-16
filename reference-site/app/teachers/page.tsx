import type { Metadata } from "next";

export const metadata: Metadata = { title: "Our Teachers" };

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

const teachers = [
  { name: "Lt Col Ch. Muhammad Hafeez (R)", role: "Education Advisor", program: "School Leadership", bg: "#D7FDCF", init: "MH" },
  { name: "Madam Sadaf Shabir", role: "Principal", program: "School Leadership", bg: "#EBE1FD", init: "SS" },
  { name: "Vice Principal", role: "Vice Principal", program: "Administration", bg: "#FEEECE", init: "VP" },
  { name: "Preschool Teacher", role: "Preschool Educator", program: "Play Group · Nursery · Prep", bg: "#D7FDCF", init: "PT" },
  { name: "Primary Teacher", role: "Primary School Teacher", program: "Class 1–5", bg: "#EBE1FD", init: "PT" },
  { name: "Senior Teacher", role: "Middle & High School", program: "Class 6–10", bg: "#FEEECE", init: "ST" },
];

export default function TeachersPage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

      {/* Header */}
      <section style={{ background: "#fff", padding: "72px 32px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Our Teachers</SectionLabel>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#000", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 560 }}>
            Meet dedicated educators{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              today
              <WavyUnderline />
            </span>
          </h1>
        </div>
      </section>

      {/* Teacher cards */}
      <section style={{ background: "#FCFAED", padding: "60px 32px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {teachers.map(t => (
            <div key={t.name} style={{ background: t.bg, borderRadius: 20, overflow: "hidden" }}>
              {/* Photo placeholder */}
              <div style={{ height: 220, background: "rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(0,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#fff" }}>
                  {t.init}
                </div>
                <span style={{ position: "absolute", bottom: 8, right: 8, fontSize: "0.65rem", color: "rgba(0,0,0,0.3)", fontWeight: 600 }}>[ Teacher photo ]</span>
              </div>
              {/* Info */}
              <div style={{ padding: "20px 22px 24px", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div>
                  <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#000", marginBottom: 4 }}>{t.name}</p>
                  <p style={{ color: "#575757", fontSize: "0.8rem" }}>{t.role}</p>
                  <p style={{ color: "#888", fontSize: "0.75rem", marginTop: 4 }}>{t.program}</p>
                </div>
                {/* LinkedIn icon */}
                <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#09D89A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2" fill="#fff"/></svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ background: "#141414", padding: "64px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <p style={{ color: "#09D89A", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>✦ Our Philosophy</p>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: 20 }}>
            Our teaching approach combines guided learning, creative play, and hands-on activities to foster curiosity and build confidence.
          </h2>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.8 }}>
            Every activity is thoughtfully designed around each child's pace, interests, and natural way of learning — helping them feel confident, supported, and truly understood.
          </p>
        </div>
      </section>
    </div>
  );
}
