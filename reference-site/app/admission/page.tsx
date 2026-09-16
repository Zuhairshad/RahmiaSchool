import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Admission" };

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

const steps = [
  {
    step: "STEP 01",
    bg: "#D7FDCF",
    icon: "📄",
    iconBg: "#09D89A",
    title: "Application Form",
    desc: "Fill out a simple admission form with your child's basic details to start the enrollment process quickly and easily.",
  },
  {
    step: "STEP 02",
    bg: "#EBE1FD",
    icon: "👥",
    iconBg: "#3D2F6B",
    title: "Parent Meeting",
    desc: "Attend a short discussion with our educators to understand your child's needs, learning goals, and future plans.",
  },
  {
    step: "STEP 03",
    bg: "#FEEECE",
    icon: "✅",
    iconBg: "#FCB520",
    title: "Confirmation Done",
    desc: "Once approved, complete the admission process and begin your child's learning journey with RAHMA Model School.",
  },
];

export default function AdmissionPage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

      {/* Hero */}
      <section style={{ background: "#fff", padding: "72px 32px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Admission</SectionLabel>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#000", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 560 }}>
            Start your learning{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              journey
              <WavyUnderline />
            </span>
          </h1>
        </div>
      </section>

      {/* Steps */}
      <section style={{ background: "#FCFAED", padding: "60px 32px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {steps.map(s => (
            <div key={s.step} style={{ background: s.bg, borderRadius: 20, padding: "32px 28px" }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", color: "#888", marginBottom: 20 }}>{s.step}</p>
              <div style={{ width: 52, height: 52, borderRadius: "50%", background: s.iconBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: 20 }}>
                {s.icon}
              </div>
              <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#000", marginBottom: 12 }}>{s.title}</h3>
              <p style={{ color: "#575757", fontSize: "0.875rem", lineHeight: 1.75 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Image placeholder */}
      <section style={{ background: "#e0e8d5", height: 320, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ color: "#9db89a", fontSize: "0.9rem", fontWeight: 600 }}>[ School campus / map photo here ]</span>
      </section>

      {/* Application form */}
      <section style={{ background: "#fff", padding: "80px 32px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <SectionLabel>Apply Now</SectionLabel>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#000" }}>
              Complete your application
            </h2>
          </div>
          <div style={{ background: "#FCFAED", borderRadius: 20, padding: "40px 36px" }}>
            <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#444", marginBottom: 6 }}>Parent / Guardian Name</label>
                  <input placeholder="Full name" style={{ width: "100%", padding: "12px 14px", border: "1px solid #e0e0e0", borderRadius: 10, fontSize: "0.875rem", background: "#fff", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#444", marginBottom: 6 }}>Child's Name</label>
                  <input placeholder="Child's full name" style={{ width: "100%", padding: "12px 14px", border: "1px solid #e0e0e0", borderRadius: 10, fontSize: "0.875rem", background: "#fff", outline: "none" }} />
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#444", marginBottom: 6 }}>Child's Age</label>
                  <input placeholder="e.g. 5 years" style={{ width: "100%", padding: "12px 14px", border: "1px solid #e0e0e0", borderRadius: 10, fontSize: "0.875rem", background: "#fff", outline: "none" }} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#444", marginBottom: 6 }}>Phone Number</label>
                  <input placeholder="+92 300 0000000" style={{ width: "100%", padding: "12px 14px", border: "1px solid #e0e0e0", borderRadius: 10, fontSize: "0.875rem", background: "#fff", outline: "none" }} />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#444", marginBottom: 6 }}>Program of Interest</label>
                <select style={{ width: "100%", padding: "12px 14px", border: "1px solid #e0e0e0", borderRadius: 10, fontSize: "0.875rem", background: "#fff", outline: "none" }}>
                  <option value="">Select a Program</option>
                  <option>Little Explorer Program (Ages 3–5)</option>
                  <option>Creative Minds Program (Grades 1–5)</option>
                  <option>Happy Learners Program (Ages 5–6)</option>
                  <option>Smart Thinkers Program (Ages 6–7)</option>
                  <option>Middle School Program (Grades 6–8)</option>
                  <option>Bright Starters Program (Grades 9–12)</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, color: "#444", marginBottom: 6 }}>Additional Information</label>
                <textarea placeholder="Any special needs, questions, or notes about your child..." rows={4} style={{ width: "100%", padding: "12px 14px", border: "1px solid #e0e0e0", borderRadius: 10, fontSize: "0.875rem", background: "#fff", outline: "none", resize: "vertical" }} />
              </div>
              <button type="submit" style={{ background: "#09D89A", color: "#000", fontWeight: 700, padding: "14px 32px", borderRadius: 100, fontSize: "0.95rem", border: "none", cursor: "pointer", alignSelf: "flex-start" }}>
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
