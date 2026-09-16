import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Student Life" };

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

const activities = [
  { icon: "🎤", bg: "#D7FDCF", title: "Speech & Debate", desc: "English and Urdu debate competitions, speech competitions, classroom discussions, and public speaking activities that build confidence and critical thinking." },
  { icon: "⚽", bg: "#EBE1FD", title: "Sports Program", desc: "Physical training, indoor and outdoor games, sports competitions, team-building activities, fun races, fitness challenges, and an annual sports day." },
  { icon: "🔬", bg: "#FEEECE", title: "Science Exhibitions", desc: "Students create science models, educational projects, classroom experiments, and innovation displays to apply scientific concepts through practical projects." },
  { icon: "🎨", bg: "#D7FDCF", title: "Art Competitions", desc: "Drawing, coloring, craft work, poster making, model making, creative displays, and art-based learning activities that nurture creativity." },
  { icon: "🏛️", bg: "#EBE1FD", title: "Educational Trips", desc: "School visits to museums, parks, historical places, educational institutes, and recreational locations provide practical knowledge beyond the classroom." },
  { icon: "🌟", bg: "#FEEECE", title: "Co-Curricular Activities", desc: "Quiz competitions, Islamic & moral learning, creative projects, storytelling, presentations, national day celebrations, and educational exhibitions." },
];

const skills = ["Confidence & Leadership", "Teamwork & Cooperation", "Responsibility & Discipline", "Respect & Social Skills", "Critical Thinking", "Time Management & Decision-Making"];

export default function StudentLifePage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      <section style={{ background: "#fff", padding: "72px 32px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Student Life</SectionLabel>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#000", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 600 }}>
            Life at RAHMA goes{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              beyond textbooks
              <WavyUnderline />
            </span>
          </h1>
          <p style={{ color: "#575757", fontSize: "1rem", lineHeight: 1.8, maxWidth: 640, marginTop: 20 }}>
            Students have opportunities to explore, create, lead, and grow in a supportive environment that develops the whole person — academically, morally, and socially.
          </p>
        </div>
      </section>

      <section style={{ background: "#FCFAED", padding: "60px 32px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {activities.map(a => (
            <div key={a.title} style={{ background: a.bg, borderRadius: 20, padding: "28px" }}>
              <div style={{ fontSize: "2rem", marginBottom: 14 }}>{a.icon}</div>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#000", marginBottom: 10 }}>{a.title}</h2>
              <p style={{ color: "#575757", fontSize: "0.875rem", lineHeight: 1.75 }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "#141414", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <p style={{ color: "#09D89A", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>✦ Personality Development</p>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: 16 }}>
              Building tomorrow's leaders today
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem", lineHeight: 1.8 }}>
              Through activities and co-curricular programs, students develop the skills they need to thrive in an ever-changing world.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {skills.map(s => (
              <div key={s} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "16px", display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ color: "#09D89A", fontWeight: 700, fontSize: "1rem" }}>✓</span>
                <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#09D89A", padding: "64px 32px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.8rem", fontWeight: 800, color: "#000", marginBottom: 16 }}>Let your child thrive at RAHMA</h2>
        <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", marginBottom: 28 }}>Enroll today and give your child a complete school experience.</p>
        <Link href="/admission" style={{ background: "#000", color: "#fff", fontWeight: 700, padding: "14px 32px", borderRadius: 100, fontSize: "0.95rem", display: "inline-block" }}>
          Apply Now
        </Link>
      </section>
    </div>
  );
}
