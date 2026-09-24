"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Eyebrow } from "./shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

const tints = ["#d7fdcf", "#ebe1fd", "#feeecd"];
const initColors = ["#09d89a", "#520080", "#f59e0b"];

function getInitials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

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
    name: "Alishba Shahzadi",
    role: "Urdu Teacher",
    tint: tints[1], color: initColors[1],
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
];

export default function TestimonialsSection() {
  return (
    <section className="section-padded" style={{ background: "var(--color-bg-cream)", padding: "120px 30px 60px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 80 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0 }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}
        >
          <div style={{ maxWidth: 440 }}>
            <Eyebrow>Our Faculty</Eyebrow>
            <h2 className="teachers-heading" style={{ fontFamily: "var(--font-heading)", fontSize: 56, fontWeight: 700, lineHeight: "64.4px", color: "#000", margin: 0 }}>
              Meet our dedicated teachers
            </h2>
          </div>
          <Link
            href="/teachers"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: 15,
              color: "#520080",
              textDecoration: "none",
              borderBottom: "1.5px solid #520080",
              paddingBottom: 2,
            }}
          >
            View all faculty →
          </Link>
        </motion.div>

        {/* Scrollable cards */}
        <div
          style={{
            display: "flex",
            gap: 20,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            paddingBottom: 8,
            alignItems: "stretch",
          }}
        >
          {teachers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.8, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={spring(i * 0.12)}
              viewport={{ once: true, amount: 0 }}
              className="teacher-card"
              style={{
                flex: "0 0 920px",
                minHeight: 460,
                scrollSnapAlign: "start",
                borderRadius: 20,
                background: "#fff",
                display: "flex",
                overflow: "hidden",
                gap: 0,
              }}
            >
              {/* Coloured panel with initials */}
              <div
                className="teacher-card-panel"
                style={{
                  width: 360,
                  flexShrink: 0,
                  background: t.tint,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 20,
                  borderRadius: "20px 0 0 20px",
                }}
              >
                <div
                  style={{
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "2.6rem", color: t.color }}>
                    {getInitials(t.name)}
                  </span>
                </div>
                {/* Stats badges under initials */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <span style={{
                    background: "rgba(255,255,255,0.7)",
                    borderRadius: 50,
                    padding: "4px 14px",
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#000",
                  }}>
                    {t.grades}
                  </span>
                  <span style={{
                    background: t.color,
                    borderRadius: 50,
                    padding: "4px 14px",
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#fff",
                  }}>
                    {t.experience}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                className="teacher-card-content"
                style={{
                  flex: 1,
                  padding: "44px 44px 44px 48px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 24,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <span
                    style={{
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
                    }}
                  >
                    {t.role}
                  </span>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: "26px", color: "#575757", margin: 0 }}>
                    &ldquo;{t.bio}&rdquo;
                  </p>

                  {/* Divider */}
                  <div style={{ height: 1, background: "#e8e8e8" }} />

                  {/* Highlights */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {t.highlights.map((h) => (
                      <div key={h} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{
                          width: 20,
                          height: 20,
                          borderRadius: "50%",
                          background: t.tint,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
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

                {/* Footer: name */}
                <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 20 }}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 17, fontWeight: 700, color: "#000" }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#888", marginTop: 2 }}>RAHMA Model School</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
