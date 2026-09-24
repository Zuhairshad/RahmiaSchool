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
  { name: "Shabnam Kayani",    role: "School Coordinator",  tint: tints[0], color: initColors[0], bio: "Leading our school community with warmth, structure and a commitment to every child's growth." },
  { name: "Rubab Zaitoon",     role: "Mathematics Teacher",  tint: tints[1], color: initColors[1], bio: "Making numbers approachable and exciting for every learner through patient, hands-on instruction." },
  { name: "Sajal Fatima",      role: "Science Teacher",      tint: tints[2], color: initColors[2], bio: "Sparking curiosity and critical thinking through discovery-based learning in every lesson." },
  { name: "Nida Jahan",        role: "Montessori Teacher",   tint: tints[0], color: initColors[0], bio: "Guiding young minds through child-led exploration, nurturing independence from the very first step." },
  { name: "Alishba Shahzadi",  role: "Urdu Teacher",         tint: tints[1], color: initColors[1], bio: "Instilling a love for language and literature rooted in our rich cultural and literary heritage." },
  { name: "Moin Ullah",        role: "Quran Teacher",        tint: tints[2], color: initColors[2], bio: "Building a lifelong connection with the Quran through tajweed, memorisation and reflection." },
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
            alignItems: "center",
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
                flex: "0 0 774px",
                scrollSnapAlign: "start",
                borderRadius: 20,
                background: "#fff",
                display: "flex",
                overflow: "hidden",
                gap: 50,
                paddingRight: 40,
              }}
            >
              {/* Coloured panel with initials */}
              <div
                className="teacher-card-panel"
                style={{
                  width: 342,
                  flexShrink: 0,
                  background: t.tint,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "20px 0 0 20px",
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
                    boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "2.2rem", color: t.color }}>
                    {getInitials(t.name)}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div
                style={{
                  flex: 1,
                  paddingTop: 40,
                  paddingBottom: 40,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: 24,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
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
                  <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "24px", color: "#575757", margin: 0 }}>
                    &ldquo;{t.bio}&rdquo;
                  </p>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 600, color: "#000" }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#575757" }}>RAHMA Model School</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
