"use client";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/home/shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring" as const,
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

const teachers = [
  { name: "Shabnam Kayani",    role: "Coordinator" },
  { name: "Rubab Zaitoon",     role: "Maths Teacher" },
  { name: "Sajal Fatima",      role: "Science Teacher" },
  { name: "Nida Jahan",        role: "Montessori Teacher" },
  { name: "Muqadas Shahzadi",  role: "Montessori Teacher" },
  { name: "Rimsha Bibi",       role: "Islamiyat Teacher" },
  { name: "Alishba Shahzadi",  role: "Urdu Teacher" },
  { name: "Sanam Shahzadi",    role: "Computer Teacher" },
  { name: "Moin Ullah",        role: "Quran Teacher" },
  { name: "Sadique Ullah",     role: "Hifz Teacher" },
];

const avatarBgs = ["#d7fdcf", "#ebe1fd", "#feeecd", "#d7fdcf", "#ebe1fd", "#feeecd", "#d7fdcf", "#ebe1fd", "#feeecd", "#d7fdcf"];
const avatarColors = ["#09d89a", "#520080", "#f59e0b", "#09d89a", "#520080", "#f59e0b", "#09d89a", "#520080", "#f59e0b", "#09d89a"];

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  return parts.length >= 2
    ? (parts[0][0] + parts[1][0]).toUpperCase()
    : parts[0][0].toUpperCase();
}

export default function TeacherSection() {
  return (
    <section
      className="section-padded"
      style={{
        background: "var(--color-bg-cream)",
        padding: "120px 30px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative SVG blob */}
      <svg
        aria-hidden
        style={{
          position: "absolute",
          left: -60,
          top: -40,
          width: 300,
          height: 120,
          opacity: 0.15,
          transform: "rotate(-22deg)",
          zIndex: 0,
          pointerEvents: "none",
        }}
        viewBox="0 0 300 120"
        fill="none"
      >
        <path
          d="M0 60 C50 0, 100 120, 150 60 C200 0, 250 120, 300 60"
          stroke="#09d89a"
          strokeWidth="40"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: 60,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div>
          <Eyebrow>RAHMATES · Our Dedicated Team</Eyebrow>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 56,
              fontWeight: 700,
              lineHeight: "64.4px",
              color: "#000",
              margin: "16px 0 0",
            }}
          >
            RAHMATES who inspire young minds
          </h2>
        </div>

        {/* Cards grid */}
        <div
          className="about-teacher-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 24,
          }}
        >
          {teachers.map((teacher, i) => (
            <motion.div
              key={teacher.name}
              initial={{ opacity: 0, scale: 0.8, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={spring((i % 5) * 0.08)}
              viewport={{ once: true, amount: 0 }}
              className="about-teacher-card"
              style={{
                background: "#ffffff",
                borderRadius: 20,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Avatar area */}
              <div
                className="about-teacher-avatar"
                style={{
                  background: avatarBgs[i],
                  height: 180,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    background: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 28,
                      fontWeight: 700,
                      color: avatarColors[i],
                    }}
                  >
                    {getInitials(teacher.name)}
                  </span>
                </div>
              </div>
              {/* Card content */}
              <div style={{ padding: "16px 16px 20px" }}>
                <p
                  className="about-teacher-name"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#000",
                    margin: "0 0 4px",
                    lineHeight: "1.3",
                  }}
                >
                  {teacher.name}
                </p>
                <p
                  className="about-teacher-role"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "#09d89a",
                    margin: 0,
                  }}
                >
                  {teacher.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
