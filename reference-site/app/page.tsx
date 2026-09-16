import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RAHMA Model School – Quality Education & Islamic Values Since 2014",
  description: "RAHMA Model School in Rawalpindi provides quality education with strong moral values since 2014. Enroll your child today.",
};

function WavyUnderline() {
  return (
    <svg viewBox="0 0 220 14" style={{ position: "absolute", bottom: -6, left: 0, width: "100%", height: 14, overflow: "visible" }} preserveAspectRatio="none">
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
  { title: "Little Explorer Program", sub: "Preschool · Ages 3–5", bg: "#D7FDCF", accent: "#09D89A", desc: "A nurturing early learning environment where young children discover letters, numbers, colors, and shapes through hands-on activities." },
  { title: "Creative Minds Program", sub: "Primary School · Grades 1–5", bg: "#EBE1FD", accent: "#3D2F6B", desc: "A strong academic foundation covering core subjects with creative learning, character development, and co-curricular activities." },
  { title: "Happy Learners Program", sub: "Early Learning · Ages 5–6", bg: "#FEEECE", accent: "#FCB520", desc: "An engaging program designed to make learning enjoyable through games, group activities, and creative tasks." },
  { title: "Smart Thinkers Program", sub: "Cognitive Dev · Ages 6–7", bg: "#D7FDCF", accent: "#09D89A", desc: "Develops thinking abilities through puzzles, challenges, and guided activities for growing minds." },
  { title: "Middle School Program", sub: "Middle School · Grades 6–8", bg: "#EBE1FD", accent: "#3D2F6B", desc: "Focused on deeper subject mastery, critical thinking, and leadership skills for maturing students." },
  { title: "Bright Starters Program", sub: "High School · Grades 9–12", bg: "#FEEECE", accent: "#FCB520", desc: "A comprehensive program helping students build essential academic skills through interactive and engaging lessons." },
];

const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "14+", label: "Programs Offered" },
  { value: "13+", label: "Awards Won" },
  { value: "210+", label: "Happy Students" },
];

const testimonials = [
  { name: "Ahmed Siddiqui", role: "Parent of Grade 3 Student", text: "RAHMA Model School has transformed my daughter's love for learning. The teachers are incredibly caring and the Islamic environment gives us complete peace of mind.", init: "A", bg: "#09D89A" },
  { name: "Fatima Malik", role: "Parent of Preschool Student", text: "My son has grown so much since joining. He's curious, confident, and excited to go to school every single day. The Little Explorer Program is wonderful.", init: "F", bg: "#3D2F6B" },
  { name: "Muhammad Tariq", role: "Parent of Grade 6 Student", text: "The staff at RAHMA truly care about each child as an individual. The admission process was smooth and teachers keep us informed every step of the way.", init: "M", bg: "#FCB520" },
];

export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: 600, background: "#1a1a1a", display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Placeholder for hero image – replace with <img> when client provides photo */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(120deg,#0d0d0d 50%,#1f2d1a 100%)", opacity: 0.95 }} />
        <div style={{ position: "absolute", right: 0, top: 0, width: "50%", height: "100%", background: "linear-gradient(135deg,#1a2a18,#0d1a0d)", opacity: 0.6 }} />

        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "100px 32px 80px", width: "100%" }}>
          <div style={{ maxWidth: 600 }}>
            <span style={{ display: "inline-block", background: "rgba(9,216,154,0.15)", color: "#09D89A", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "6px 14px", borderRadius: 100, marginBottom: 24 }}>
              Est. 2014 · Rawalpindi, Pakistan
            </span>
            <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: 24, letterSpacing: "-0.02em" }}>
              RAHMA<br />Model School
            </h1>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.05rem", lineHeight: 1.75, marginBottom: 36, maxWidth: 480 }}>
              Dedicated to quality education and Islamic values since 2014. We create a nurturing space where children feel safe, explore freely, and grow with confidence.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <Link href="/admission" style={{ background: "#09D89A", color: "#000", fontWeight: 700, padding: "14px 28px", borderRadius: 100, fontSize: "0.95rem", display: "inline-block" }}>
                Enroll Now
              </Link>
              <Link href="/programs" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", fontWeight: 600, padding: "14px 28px", borderRadius: 100, fontSize: "0.95rem", display: "inline-block", border: "1px solid rgba(255,255,255,0.2)" }}>
                View Programs
              </Link>
            </div>
          </div>
        </div>

        {/* decorative green star */}
        <div style={{ position: "absolute", right: 80, bottom: 60, opacity: 0.15 }}>
          <svg width="120" height="120" viewBox="0 0 24 24"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" fill="#09D89A"/></svg>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ background: "#FCFAED", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            {/* Image placeholder */}
            <div style={{ borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", background: "#e0e8d8", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "#9db89a", fontSize: "0.85rem", fontWeight: 600 }}>
                [ School photo here ]
              </div>
            </div>
          </div>
          <div>
            <SectionLabel>About Us</SectionLabel>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#000", lineHeight: 1.2, marginBottom: 20, position: "relative", display: "inline-block" }}>
              A nurturing space<br />for{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                young minds
                <WavyUnderline />
              </span>
            </h2>
            <p style={{ color: "#575757", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 16 }}>
              Welcome to RAHMA Model School, where quality education, strong moral values, and character development come together to prepare students for a successful future.
            </p>
            <p style={{ color: "#575757", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 28 }}>
              We provide a safe, caring, and engaging learning environment that encourages every child to achieve academic excellence while developing confidence, creativity, and leadership skills.
            </p>
            <Link href="/about" style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#000", fontWeight: 700, fontSize: "0.9rem" }}>
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#141414", padding: "72px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {stats.map(s => (
            <div key={s.value} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#09D89A", marginBottom: 8 }}>{s.value}</div>
              <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROGRAMS ── */}
      <section style={{ background: "#FCFAED", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, maxWidth: 560 }}>
            <SectionLabel>Our Programs</SectionLabel>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#000", lineHeight: 1.2 }}>
              Programs designed<br />for growing{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                minds
                <WavyUnderline />
              </span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
            {programs.map(p => (
              <div key={p.title} style={{ background: p.bg, borderRadius: 20, padding: "28px 28px 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                {/* Image placeholder */}
                <div style={{ borderRadius: 14, height: 180, background: "rgba(0,0,0,0.08)", marginBottom: 4, position: "relative", overflow: "hidden" }}>
                  <span style={{ position: "absolute", top: 12, left: 12, background: p.accent, color: "#fff", fontSize: "0.65rem", fontWeight: 700, padding: "4px 10px", borderRadius: 100, letterSpacing: "0.05em" }}>
                    {p.sub.split("·")[1]?.trim().toUpperCase() || ""}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#000" }}>{p.title}</h3>
                <p style={{ color: "#575757", fontSize: "0.875rem", lineHeight: 1.7 }}>{p.desc}</p>
                <Link href="/programs" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#000", fontWeight: 700, fontSize: "0.85rem", marginTop: 4 }}>
                  View details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ background: "#fff", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#000", lineHeight: 1.2 }}>
              What makes us the{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                right choice
                <WavyUnderline />
              </span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {[
              { icon: "🛡️", bg: "#D7FDCF", title: "Safe Environment", desc: "A secure, welcoming campus where every child feels valued and protected every day." },
              { icon: "📖", bg: "#EBE1FD", title: "Islamic Values", desc: "We integrate Islamic principles and character development into everyday learning and routines." },
              { icon: "👩‍🏫", bg: "#FEEECE", title: "Experienced Teachers", desc: "Dedicated educators with deep expertise in child development and modern teaching methods." },
              { icon: "🎓", bg: "#D7FDCF", title: "Modern Curriculum", desc: "A research-backed curriculum balancing academics, creativity, and strong moral values." },
            ].map(item => (
              <div key={item.title} style={{ background: item.bg, borderRadius: 20, padding: "32px 28px" }}>
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1rem", color: "#000", marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: "#575757", fontSize: "0.875rem", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "#FCFAED", padding: "80px 32px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <SectionLabel>Testimonials</SectionLabel>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#000", lineHeight: 1.2 }}>
              Stories from{" "}
              <span style={{ position: "relative", display: "inline-block" }}>
                happy parents
                <WavyUnderline />
              </span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {testimonials.map(t => (
              <div key={t.name} style={{ background: "#fff", borderRadius: 20, padding: "28px", boxShadow: "0 1px 3px rgba(0,0,0,0.06)", display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", gap: 4 }}>
                  {Array.from({ length: 5 }).map((_, i) => <span key={i} style={{ color: "#FCB520", fontSize: "0.9rem" }}>★</span>)}
                </div>
                <p style={{ color: "#444", fontSize: "0.9rem", lineHeight: 1.75, flex: 1 }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: t.bg, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "0.9rem" }}>{t.init}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.875rem", color: "#000" }}>{t.name}</div>
                    <div style={{ color: "#888", fontSize: "0.78rem" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#09D89A", padding: "72px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, color: "#000", marginBottom: 16 }}>
            Ready to join RAHMA?
          </h2>
          <p style={{ color: "rgba(0,0,0,0.65)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 32 }}>
            Enroll your child today and give them the foundation for a lifetime of learning, values, and success.
          </p>
          <Link href="/admission" style={{ background: "#000", color: "#fff", fontWeight: 700, padding: "15px 36px", borderRadius: 100, fontSize: "1rem", display: "inline-block" }}>
            Start Admission
          </Link>
        </div>
      </section>
    </div>
  );
}
