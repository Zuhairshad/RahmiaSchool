import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Us" };

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

export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

      {/* Hero */}
      <section style={{ background: "#fff", padding: "72px 32px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>About Us</SectionLabel>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "flex-start" }}>
            <div>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#000", lineHeight: 1.15, letterSpacing: "-0.02em" }}>
                A nurturing space<br />for young{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  minds
                  <WavyUnderline />
                </span>
              </h1>
            </div>
            <div>
              <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                {Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ color: "#FCB520", fontSize: "1.1rem" }}>★</span>)}
              </div>
              <p style={{ color: "#575757", fontSize: "0.95rem", lineHeight: 1.8 }}>
                Welcome to RAHMA Model School, where quality education, strong moral values, and character development come together to prepare students for a successful future. Located in Bagga Sheikhan, Near Rawat, Rawalpindi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Content */}
      <section style={{ background: "#FCFAED", padding: "60px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", background: "#dde8d5", display: "flex", alignItems: "center", justifyContent: "center", color: "#9db89a", fontSize: "0.85rem", fontWeight: 600 }}>
            [ About photo here ]
          </div>
          <div>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "#000", marginBottom: 20 }}>
              Our Mission & Vision
            </h2>
            <p style={{ color: "#575757", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 16 }}>
              RAHMA Model School is committed to providing quality education in a safe, disciplined, and nurturing environment. Our goal is to develop students academically, morally, socially, and physically so they become confident, responsible, and successful members of society.
            </p>
            <p style={{ color: "#575757", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 24 }}>
              We believe that education is not only about academic achievement but also about building strong character, leadership qualities, creativity, and lifelong learning habits.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Excellence in education", "Integrity, honesty and respect", "Islamic and moral values", "Creativity, leadership and confidence"].map(v => (
                <div key={v} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: "#09D89A", fontWeight: 700, fontSize: "1rem", marginTop: 1 }}>✓</span>
                  <span style={{ color: "#444", fontSize: "0.9rem" }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Green stripe */}
      <div style={{ background: "#09D89A", height: 8 }} />

      {/* Teaching Approach */}
      <section style={{ background: "#FCFAED", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Our Approach</SectionLabel>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#000", marginBottom: 48, maxWidth: 600 }}>
            How we teach and{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              nurture
              <WavyUnderline />
            </span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { bg: "#D7FDCF", icon: "🎨", title: "Student-Centred Learning", desc: "Activity-based instruction with individual attention ensures every student reaches their full potential at their own pace." },
              { bg: "#EBE1FD", icon: "👩‍🏫", title: "Dedicated Teachers", desc: "Our passionate teaching staff nurtures each student's academic, moral, social, and emotional development." },
              { bg: "#FEEECE", icon: "🤝", title: "Character Development", desc: "Beyond academics, we build strong character, leadership qualities, responsibility, and lifelong learning habits." },
              { bg: "#D7FDCF", icon: "🌱", title: "Islamic Foundation", desc: "Islamic values — respect, honesty, and responsibility — are woven naturally into daily school life." },
            ].map(item => (
              <div key={item.title} style={{ background: item.bg, borderRadius: 20, padding: "32px 28px" }}>
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#000", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "#575757", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "#141414", padding: "64px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[{ v: "12+", l: "Years Experience" }, { v: "14+", l: "Programs" }, { v: "13+", l: "Awards" }, { v: "210+", l: "Students" }].map(s => (
            <div key={s.v} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 3rem)", fontWeight: 800, color: "#09D89A", marginBottom: 8 }}>{s.v}</div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9rem" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section style={{ background: "#fff", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Our Leadership</SectionLabel>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 800, color: "#000", marginBottom: 40 }}>
            The people behind RAHMA
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {[
              { bg: "#D7FDCF", name: "Lt Col Ch. Muhammad Hafeez (R)", role: "Education Advisor", desc: "Provides overall strategic leadership, ensures high standards of education, governance, and oversees institutional growth and long-term planning." },
              { bg: "#EBE1FD", name: "Madam Sadaf Shabir", role: "Principal", desc: "Provides visionary leadership and ensures high academic standards, effective school management, and a positive learning environment." },
              { bg: "#FEEECE", name: "Vice Principal", role: "Vice Principal", desc: "Supports academic and administrative operations, supervises teaching activities, and helps maintain discipline and educational quality." },
            ].map(p => (
              <div key={p.name} style={{ background: p.bg, borderRadius: 20, padding: "28px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", marginBottom: 16 }}>👤</div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#000", marginBottom: 4 }}>{p.name}</h3>
                <p style={{ color: "#09D89A", fontSize: "0.78rem", fontWeight: 700, marginBottom: 10 }}>{p.role}</p>
                <p style={{ color: "#575757", fontSize: "0.875rem", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#09D89A", padding: "72px 32px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "2rem", fontWeight: 800, color: "#000", marginBottom: 16 }}>
          Ready to be part of our story?
        </h2>
        <p style={{ color: "rgba(0,0,0,0.65)", fontSize: "0.95rem", marginBottom: 28 }}>Enroll your child today and start the journey.</p>
        <Link href="/admission" style={{ background: "#000", color: "#fff", fontWeight: 700, padding: "14px 32px", borderRadius: 100, fontSize: "0.95rem", display: "inline-block" }}>
          Apply Now
        </Link>
      </section>
    </div>
  );
}
