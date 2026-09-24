"use client";
import { motion } from "framer-motion";
import { WavyUnderline } from "@/components/ui";
import { Button, SectionLabel, Container } from "@/components/ui";

const tints = ["#d7fdcf", "#ebe1fd", "#feeecd"];
const initColors = ["#09d89a", "#520080", "#f59e0b"];

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

const spring = (delay = 0) => ({
  type: "spring" as const,
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

const leadership = [
  {
    name: "Lt Col Chaudhry Muhammad Hafeez",
    role: "Founder & Visioner",
    tint: "#feeecd", color: "#f59e0b",
    bio: "Founded RAHMA Model School in 2012 with a mission to bring quality education to Pakistan's most underserved children, starting from a small hut near Rawalpindi Railway Station.",
    grades: "All Departments",
    experience: "Est. 2012",
    highlights: [
      "Founded RAHMA's first school in a slum",
      "Vision for underprivileged child education",
      "Community outreach & welfare leadership",
      "Strategic school growth & development",
      "Serving 15,000+ out-of-school children",
    ],
  },
  {
    name: "Madam Tehmina Shaheen",
    role: "Vice Principal",
    tint: "#ebe1fd", color: "#520080",
    bio: "Overseeing the academic and administrative operations of RAHMA Model School with dedication, ensuring educational quality and a nurturing environment for every student.",
    grades: "All Classes",
    experience: "Vice Principal",
    highlights: [
      "Academic supervision & quality assurance",
      "Teacher coordination & mentoring",
      "Student discipline & welfare",
      "School programme coordination",
      "Parent communication & engagement",
    ],
  },
  {
    name: "Muhammad Shuaib",
    role: "Administrator & Finance Officer",
    tint: "#d7fdcf", color: "#09d89a",
    bio: "Managing the administrative and financial operations of RAHMA Model School with 24 years of dedicated service and expertise in institutional management.",
    grades: "Administration",
    experience: "24 Years",
    highlights: [
      "Financial planning & management",
      "Administrative operations oversight",
      "Fee structure & accounts management",
      "Staff records & HR administration",
      "Institutional compliance & reporting",
    ],
  },
];

const teachers = [
  {
    name: "Shabnam Kayani",
    role: "School Coordinator",
    tint: tints[0], color: initColors[0],
    bio: "Leading our school community with warmth, structure and a commitment to every child's growth.",
    grades: "All Classes",
    experience: "8+ Years",
    highlights: [
      "Academic planning & staff coordination",
      "Student welfare & parent relations",
      "School events & co-curricular management",
      "Teacher mentoring & professional development",
      "Communication between parents & administration",
    ],
  },
  {
    name: "Rubab Zaitoon",
    role: "Mathematics Teacher",
    tint: tints[1], color: initColors[1],
    bio: "Making numbers approachable and exciting for every learner through patient, hands-on instruction.",
    grades: "Classes 6–10",
    experience: "6+ Years",
    highlights: [
      "Algebra, geometry & arithmetic",
      "Board exam preparation",
      "Interactive problem-solving sessions",
      "Mental maths & speed drills",
      "Remedial support for weaker students",
    ],
  },
  {
    name: "Sajal Fatima",
    role: "Science Teacher",
    tint: tints[2], color: initColors[2],
    bio: "Sparking curiosity and critical thinking through discovery-based learning in every lesson.",
    grades: "Classes 6–10",
    experience: "5+ Years",
    highlights: [
      "Biology, chemistry & physics",
      "Lab experiments & demonstrations",
      "Science exhibition preparation",
      "Concept-based lesson planning",
      "Environmental & health education",
    ],
  },
  {
    name: "Nida Jahan",
    role: "Montessori Teacher",
    tint: tints[0], color: initColors[0],
    bio: "Guiding young minds through child-led exploration, nurturing independence from the very first step.",
    grades: "Play Group – Prep",
    experience: "7+ Years",
    highlights: [
      "Hands-on Montessori activities",
      "Early literacy & numeracy",
      "Sensory & motor skill development",
      "Social skills & classroom routine",
      "Creative arts, music & storytelling",
    ],
  },
  {
    name: "Muqadas Shahzadi",
    role: "Montessori Teacher",
    tint: tints[1], color: initColors[1],
    bio: "Creating a joyful, structured environment where every young child feels seen, heard, and ready to learn.",
    grades: "Nursery – KG",
    experience: "5+ Years",
    highlights: [
      "Child-led Montessori learning",
      "Fine motor & sensory play",
      "Pre-literacy & number skills",
      "Creative arts & storytelling",
      "Positive classroom community building",
    ],
  },
  {
    name: "Rimsha Bibi",
    role: "Islamiyat Teacher",
    tint: tints[2], color: initColors[2],
    bio: "Bringing the beauty of Islam into everyday learning, helping students grow in faith, knowledge and character.",
    grades: "All Classes",
    experience: "4+ Years",
    highlights: [
      "Islamiyat curriculum (Classes 1–10)",
      "Quranic studies & translation",
      "Islamic history & Seerah",
      "Moral values & character building",
      "Daily duas & Islamic etiquette",
    ],
  },
  {
    name: "Alishba Shahzadi",
    role: "Urdu Teacher",
    tint: tints[0], color: initColors[0],
    bio: "Instilling a love for language and literature rooted in our rich cultural and literary heritage.",
    grades: "Classes 1–8",
    experience: "4+ Years",
    highlights: [
      "Urdu reading, writing & grammar",
      "Poetry appreciation & composition",
      "Islamic literature & nasheeds",
      "Dictation & handwriting development",
      "Public speaking in Urdu",
    ],
  },
  {
    name: "Sanam Shahzadi",
    role: "Computer Teacher",
    tint: tints[1], color: initColors[1],
    bio: "Equipping students with modern digital skills and a confident foundation in technology for the future.",
    grades: "Classes 3–10",
    experience: "3+ Years",
    highlights: [
      "Computer literacy & typing",
      "MS Office & basic applications",
      "Internet safety & digital skills",
      "Coding fundamentals & logic",
      "Practical lab-based assessments",
    ],
  },
  {
    name: "Moin Ullah",
    role: "Quran Teacher",
    tint: tints[2], color: initColors[2],
    bio: "Building a lifelong connection with the Quran through tajweed, memorisation and reflection.",
    grades: "All Classes",
    experience: "10+ Years",
    highlights: [
      "Tajweed & Quranic recitation",
      "Hifz programme support",
      "Islamic values & character building",
      "Duas, surahs & daily Islamic practice",
      "Seerah & Islamic history lessons",
    ],
  },
  {
    name: "Sadique Ullah",
    role: "Hifz Teacher",
    tint: tints[0], color: initColors[0],
    bio: "Guiding students through the sacred journey of Quran memorisation with patience, discipline and care.",
    grades: "All Classes",
    experience: "8+ Years",
    highlights: [
      "Full Hifz (memorisation) programme",
      "Tajweed & Quranic recitation",
      "Individual memorisation plans",
      "Daily revision & progress tracking",
      "Student progress reports & parent updates",
    ],
  },
];

export default function TeachersPage() {
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      <style>{`
        @media (max-width: 810px) {
          .faculty-card-panel { display: none !important; }
          .faculty-card-content { padding: 28px 24px !important; }
          .faculty-card { min-height: 0 !important; }
        }
      `}</style>

      {/* Header */}
      <section style={{ background: "var(--color-paper)", padding: "72px 32px 60px" }}>
        <Container>
          <SectionLabel>RAHMATES · Our Faculty</SectionLabel>
          <h1
            className="hero-h1"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              color: "var(--color-ink)",
              lineHeight: 1.2,
              maxWidth: 560,
            }}
          >
            Meet the RAHMATES who{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              educate &amp; inspire
              <WavyUnderline />
            </span>
          </h1>
          <p style={{ color: "var(--color-body-text)", fontSize: "0.95rem", lineHeight: 1.8, maxWidth: 560, marginTop: 16 }}>
            Our faculty are proud RAHMATES, a community of dedicated educators united by a shared commitment to academic excellence, moral values, and the growth of every student in their care.
          </p>
        </Container>
      </section>

      {/* Leadership cards */}
      <section style={{ background: "var(--color-bg-cream)", padding: "60px 32px 0" }}>
        <Container>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: 20 }}>
            &#10022; School Leadership
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, marginBottom: 60 }}>
            {leadership.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={spring(0)}
                viewport={{ once: true, amount: 0.1 }}
                className="faculty-card"
                style={{ background: "#fff", borderRadius: 20, overflow: "hidden", display: "flex", minHeight: 300 }}
              >
                <div
                  className="faculty-card-panel"
                  style={{ width: 280, flexShrink: 0, background: t.tint, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20, borderRadius: "20px 0 0 20px", padding: "40px 24px" }}
                >
                  <div style={{ width: 120, height: 120, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}>
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "2.2rem", color: t.color }}>{getInitials(t.name)}</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <span style={{ background: "rgba(255,255,255,0.75)", borderRadius: 50, padding: "4px 16px", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#000", textAlign: "center" }}>{t.grades}</span>
                    <span style={{ background: t.color, borderRadius: 50, padding: "4px 16px", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "#fff" }}>{t.experience}</span>
                  </div>
                </div>
                <div className="faculty-card-content" style={{ flex: 1, padding: "40px 44px", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 20 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <span style={{ display: "inline-block", background: t.tint, color: t.color, fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 14px", borderRadius: 50, alignSelf: "flex-start" }}>{t.role}</span>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "26px", color: "#575757", margin: 0 }}>&ldquo;{t.bio}&rdquo;</p>
                    <div style={{ height: 1, background: "#ebebeb" }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 32px" }}>
                      {t.highlights.map((h) => (
                        <div key={h} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{ width: 20, height: 20, borderRadius: "50%", background: t.tint, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden><path d="M2.5 7l3 3 6-6" stroke={t.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </span>
                          <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#575757" }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 18 }}>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 17, fontWeight: 700, color: "#000" }}>{t.name}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#888", marginTop: 2 }}>RAHMA Model School</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888", marginBottom: 20 }}>
            &#10022; Teaching Staff
          </p>
        </Container>
      </section>

      {/* Teacher cards */}
      <section style={{ background: "var(--color-bg-cream)", padding: "0 32px 80px" }}>
        <Container>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {teachers.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={spring(0)}
                viewport={{ once: true, amount: 0.1 }}
                className="faculty-card"
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  overflow: "hidden",
                  display: "flex",
                  minHeight: 360,
                }}
              >
                {/* Left coloured panel */}
                <div
                  className="faculty-card-panel"
                  style={{
                    width: 280,
                    flexShrink: 0,
                    background: t.tint,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 20,
                    borderRadius: "20px 0 0 20px",
                    padding: "40px 24px",
                  }}
                >
                  <div
                    style={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                    }}
                  >
                    <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "2.2rem", color: t.color }}>
                      {getInitials(t.name)}
                    </span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                    <span style={{
                      background: "rgba(255,255,255,0.75)",
                      borderRadius: 50,
                      padding: "4px 16px",
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#000",
                      textAlign: "center",
                    }}>
                      {t.grades}
                    </span>
                    <span style={{
                      background: t.color,
                      borderRadius: 50,
                      padding: "4px 16px",
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#fff",
                    }}>
                      {t.experience}
                    </span>
                  </div>
                </div>

                {/* Right content */}
                <div
                  className="faculty-card-content"
                  style={{
                    flex: 1,
                    padding: "40px 44px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 20,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <span style={{
                      display: "inline-block",
                      background: t.tint,
                      color: t.color,
                      fontFamily: "var(--font-body)",
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "5px 14px",
                      borderRadius: 50,
                      alignSelf: "flex-start",
                    }}>
                      {t.role}
                    </span>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "26px", color: "#575757", margin: 0 }}>
                      &ldquo;{t.bio}&rdquo;
                    </p>
                    <div style={{ height: 1, background: "#ebebeb" }} />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 32px" }}>
                      {t.highlights.map((h) => (
                        <div key={h} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <span style={{
                            width: 20, height: 20, borderRadius: "50%",
                            background: t.tint, display: "flex",
                            alignItems: "center", justifyContent: "center", flexShrink: 0,
                          }}>
                            <svg width="10" height="10" viewBox="0 0 14 14" fill="none" aria-hidden>
                              <path d="M2.5 7l3 3 6-6" stroke={t.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#575757" }}>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 18 }}>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 17, fontWeight: 700, color: "#000" }}>{t.name}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#888", marginTop: 2 }}>RAHMA Model School</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-dark-bg)", padding: "64px 32px" }}>
        <Container style={{ maxWidth: 800, textAlign: "center" }}>
          <p style={{ color: "var(--color-brand-teal)", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
            &#10022; Join our learning community today
          </p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.3, marginBottom: 20 }}>
            Our RAHMATES faculty combine subject mastery with patient mentorship, nurturing moral values alongside academic brilliance in every classroom.
          </h2>
          <Button href="/admission">Enroll now</Button>
        </Container>
      </section>
    </div>
  );
}
