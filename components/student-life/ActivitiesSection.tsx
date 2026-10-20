"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import VideoModal from "@/components/ui/VideoModal";

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
    desc: "Students sharpen critical thinking and communication through structured competitions and classroom activities",
    items: ["English Debate Competitions", "Urdu Debate Competitions", "Speech Competitions", "Classroom Discussions", "Public Speaking Activities"],
    image: "/assets/images/rahma-kids-studying-2.jpeg",
    objectPosition: "center",
  },
  {
    icon: "⚽",
    bg: "#ebe1fd",
    title: "Sports & Athletics",
    desc: "A full physical programme that builds fitness, teamwork, and healthy competitive spirit in every student",
    items: ["Physical Training Exercises", "Indoor & Outdoor Games", "Sports Competitions", "Team-Building Activities", "Fun Races & Fitness Challenges", "Annual Sports Day"],
    // No photo: shown on a solid brand colour instead.
    solid: "#3d2f6b",
  },
  {
    icon: "🔬",
    bg: "#feeecd",
    title: "Science Exhibitions",
    desc: "Students design, build, and present projects that bring classroom science to life through hands-on innovation",
    items: ["Science Models", "Educational Projects", "Classroom Experiments", "Innovation Displays"],
    // The school's science lab apparatus: beakers, test tubes, tripod stand and balance.
    image: "/assets/images/rahma-science-lab-equipment.jpeg",
    objectPosition: "center 58%",
  },
  {
    icon: "🎨",
    bg: "#d7fdcf",
    title: "Arts & Creative Activities",
    desc: "Creative expression develops imagination, fine motor skills, and self-confidence in every RAHMATE",
    items: ["Drawing & Colouring", "Craft Work", "Poster Making", "Model Making", "Creative Classroom Displays", "Art-Based Learning Activities"],
    image: "/assets/images/gallery/g-26.jpeg",
    objectPosition: "center 35%",
  },
  {
    icon: "🏛️",
    bg: "#ebe1fd",
    title: "School Trips & National Days",
    desc: "Educational visits and celebrations that broaden perspectives and build pride in heritage and community",
    items: ["Museums & Historical Places", "Parks & Recreational Visits", "Educational Institutes", "National & International Day Celebrations"],
    image: "/assets/images/rahma-character-3.jpeg",
    objectPosition: "center top",
  },
  {
    icon: "🛡️",
    bg: "#d7fdcf",
    title: "Safe & Caring Environment",
    desc: "We provide a secure, friendly, and supportive atmosphere, including health camps and welfare initiatives, so every child feels confident and cared for at school",
    items: ["Health Camps & Medical Checkups", "Child Welfare Initiatives", "Supportive & Attentive Teachers", "Safe & Inclusive Classrooms", "Student Well-being Monitoring"],
    image: "/assets/images/rahma-safe-caring.png",
    objectPosition: "center",
    // The school's medical camp, from its YouTube channel.
    videos: [
      { id: "t8Bog8kz3KU", title: "Medical Camp at RAHMA Model School" },
      { id: "YVWDQXwj4BQ", title: "Medical Camp: student health checks" },
    ],
  },
  {
    icon: "⭐",
    bg: "#ebe1fd",
    title: "Co-Curricular & Islamic Learning",
    desc: "A wide range of activities that develop the whole child, academically, creatively, and morally",
    items: ["Quiz Competitions", "Islamic & Moral Learning Activities", "Storytelling Sessions", "Classroom Presentations", "Educational Games", "Educational Exhibitions"],
    image: "/assets/images/rahma-character-2.jpeg",
    objectPosition: "center top",
    // The Friday activity video lives in the gallery
    link: { href: "/gallery#videos", label: "Watch the Friday activity video" },
  },
];

export default function ActivitiesSection() {
  return (
    <section style={{ background: "var(--color-bg-cream)", padding: "48px 0 80px" }}>
      <style>{`
        @media (max-width: 600px) {
          .activity-card { min-height: 460px; }
          .activity-card-content { padding: 28px 24px !important; }
          .activity-card-watermark { font-size: 150px !important; right: -16px !important; top: auto !important; bottom: -16px; transform: none !important; opacity: 0.12 !important; }
          .activity-card-shade { background: linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.45) 100%) !important; }
        }
      `}</style>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px", boxSizing: "border-box" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {activities.map((a) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={spring()}
              viewport={{ once: true, amount: 0.3 }}
              className="activity-card"
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                minHeight: 460,
                display: "flex",
                alignItems: "stretch",
              }}
            >
              {"image" in a && a.image ? (
                <>
                  {/* Full-bleed background image */}
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="(max-width: 1300px) 100vw, 1300px"
                    style={{
                      objectFit: "cover",
                      objectPosition: a.objectPosition,
                    }}
                  />
                  {/* Gradient overlay */}
                  <div
                    aria-hidden
                    className="activity-card-shade"
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.08) 100%)",
                    }}
                  />
                </>
              ) : (
                <>
                  {/* Solid card: brand colour with the activity icon as a large watermark */}
                  <div aria-hidden style={{ position: "absolute", inset: 0, background: "solid" in a ? a.solid : "var(--color-dark-bg)" }} />
                  <div
                    aria-hidden
                    className="activity-card-watermark"
                    style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", fontSize: 240, lineHeight: 1, opacity: 0.18, filter: "grayscale(0.2)" }}
                  >
                    {a.icon}
                  </div>
                </>
              )}
              {/* Content */}
              <div
                className="activity-card-content"
                style={{
                  position: "relative",
                  zIndex: 2,
                  width: "100%",
                  maxWidth: 520,
                  minWidth: 0,
                  padding: 40,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                  overflow: "hidden",
                }}
              >
                <div style={{ fontSize: "2rem" }}>{a.icon}</div>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: "1.4rem",
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {a.title}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>
                  {a.desc}
                </p>
                <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {a.items.map((item) => (
                    <li
                      key={item}
                      style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}
                    >
                      <span style={{ color: "#09d89a", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {"link" in a && a.link && (
                  <Link
                    href={a.link.href}
                    style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", color: "#000", borderRadius: 100, padding: "8px 8px 8px 18px", fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 700 }}
                  >
                    {a.link.label}
                    <span aria-hidden style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--color-brand-teal)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2l4 4-4 4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </Link>
                )}
                {"videos" in a && a.videos && <VideoModal videos={a.videos} label={a.videos.length > 1 ? "Watch videos" : "Watch video"} />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
