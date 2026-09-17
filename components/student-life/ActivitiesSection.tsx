"use client";
import { motion } from "framer-motion";

const spring = () => ({
  type: "spring" as const,
  damping: 80,
  mass: 1,
  stiffness: 200,
});

const activities = [
  {
    icon: "🎤",
    bg: "#d7fdcf",
    title: "Debate & Public Speaking",
    desc: "Students sharpen critical thinking and communication through structured competitions and classroom activities.",
    items: ["English Debate Competitions", "Urdu Debate Competitions", "Speech Competitions", "Classroom Discussions", "Public Speaking Activities"],
    image: "/assets/images/rahma-kids-studying-2.jpeg",
  },
  {
    icon: "⚽",
    bg: "#ebe1fd",
    title: "Sports & Athletics",
    desc: "A full physical programme that builds fitness, teamwork, and healthy competitive spirit in every student.",
    items: ["Physical Training Exercises", "Indoor & Outdoor Games", "Sports Competitions", "Team-Building Activities", "Fun Races & Fitness Challenges", "Annual Sports Day"],
    image: "/assets/images/rahma-sports-day.jpeg",
  },
  {
    icon: "🔬",
    bg: "#feeecd",
    title: "Science Exhibitions",
    desc: "Students design, build, and present projects that bring classroom science to life through hands-on innovation.",
    items: ["Science Models", "Educational Projects", "Classroom Experiments", "Innovation Displays"],
    image: "/assets/images/rahma-computer-lab.jpeg",
  },
  {
    icon: "🎨",
    bg: "#d7fdcf",
    title: "Arts & Creative Activities",
    desc: "Creative expression develops imagination, fine motor skills, and self-confidence in every RAHMATE.",
    items: ["Drawing & Colouring", "Craft Work", "Poster Making", "Model Making", "Creative Classroom Displays", "Art-Based Learning Activities"],
    image: "/assets/images/rahma-kid-writing.jpeg",
  },
  {
    icon: "🏛️",
    bg: "#ebe1fd",
    title: "School Trips & National Days",
    desc: "Educational visits and celebrations that broaden perspectives and build pride in heritage and community.",
    items: ["Museums & Historical Places", "Parks & Recreational Visits", "Educational Institutes", "National & International Day Celebrations"],
    image: "/assets/images/rahma-academic-2.jpeg",
  },
  {
    icon: "⭐",
    bg: "#feeecd",
    title: "Co-Curricular & Islamic Learning",
    desc: "A wide range of activities that develop the whole child — academically, creatively, and morally.",
    items: ["Quiz Competitions", "Islamic & Moral Learning Activities", "Storytelling Sessions", "Classroom Presentations", "Educational Games", "Educational Exhibitions"],
    image: "/assets/images/rahma-character-2.jpeg",
  },
];

export default function ActivitiesSection() {
  return (
    <section style={{ background: "var(--color-bg-cream)", padding: "48px 0 80px" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px", boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {activities.map((a) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={spring()}
              viewport={{ once: true, amount: 0.3 }}
              style={{
                display: "flex",
                background: a.bg,
                borderRadius: 20,
                padding: 10,
                overflow: "hidden",
                minHeight: 380,
                alignItems: "stretch",
              }}
            >
              {/* Content side */}
              <div
                style={{
                  width: 520,
                  flexShrink: 0,
                  padding: 30,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                <div style={{ fontSize: "2rem" }}>{a.icon}</div>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: "var(--color-ink)",
                    margin: 0,
                  }}
                >
                  {a.title}
                </h2>
                <p style={{ color: "var(--color-body-text)", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
                  {a.desc}
                </p>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {a.items.map((item) => (
                    <li
                      key={item}
                      style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.85rem", color: "var(--color-body-text)" }}
                    >
                      <span style={{ color: "#09d89a", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image side */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={a.image}
                alt={a.title}
                style={{
                  flex: 1,
                  objectFit: "cover",
                  display: "block",
                  borderRadius: 12,
                  alignSelf: "stretch",
                  minWidth: 0,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
