"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eyebrow, ArrowButton } from "./shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

// A short taste of each inner page, so visitors see what's there without leaving the home page.
const highlights = [
  {
    eyebrow: "Student Life",
    title: "More than the classroom",
    desc: "Debates, sports, science exhibitions, arts, school trips and Islamic learning that develop the whole child",
    image: "/assets/images/rahma-character-3.jpeg",
    objectPosition: "center top",
    href: "/student-life",
    cta: "Explore student life",
    bg: "var(--color-tint-green)",
  },
  {
    eyebrow: "Facilities",
    title: "Spaces that help children learn",
    desc: "A peaceful library, computer and science labs, a sports ground and a safe, caring campus",
    image: "/assets/images/rahma-library.jpeg",
    objectPosition: "center",
    href: "/facilities",
    cta: "See our facilities",
    bg: "var(--color-tint-purple)",
  },
  {
    eyebrow: "Faculty",
    title: "Meet the RAHMATES",
    desc: "Dedicated teachers and leaders who care about every child's academic, moral and social growth",
    image: "/assets/images/hifz-teacher-desk.jpeg",
    objectPosition: "center",
    href: "/teachers",
    cta: "Meet our faculty",
    bg: "var(--color-tint-cream)",
  },
  {
    eyebrow: "Gallery",
    title: "Moments that shine",
    desc: "Celebrations, classrooms, study trips and sports days, in photos and videos from our school",
    image: "/assets/images/gallery/g-01.jpeg",
    objectPosition: "center 30%",
    href: "/gallery",
    cta: "Open the gallery",
    bg: "var(--color-tint-purple)",
  },
  {
    eyebrow: "Admissions",
    title: "Start your child's journey",
    desc: "A simple admission process, from the first enquiry to the first day. Fill in the form online and we will take it from there",
    image: "/assets/images/rahma-kids-studying.jpeg",
    objectPosition: "center",
    href: "/admission",
    cta: "Apply for admission",
    bg: "var(--color-tint-green)",
  },
];

export default function ExploreSection() {
  return (
    <section className="section-padded" style={{ background: "var(--color-bg-cream)", padding: "120px 30px" }}>
      <style>{`
        .explore-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 24px; }
        .explore-card { grid-column: span 2; }
        .explore-card:nth-child(n + 4) { grid-column: span 3; }
        .explore-card-image { height: 220px; }
        @media (max-width: 1100px) {
          .explore-card, .explore-card:nth-child(n + 4) { grid-column: span 3; }
          .explore-card:last-child { grid-column: span 6; }
        }
        @media (max-width: 810px) {
          .explore-grid { grid-template-columns: 1fr; }
          .explore-card, .explore-card:nth-child(n + 4), .explore-card:last-child { grid-column: auto; }
          .explore-heading { font-size: 32px !important; line-height: 1.2 !important; }
        }
      `}</style>
      <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0.5 }}
          style={{ maxWidth: 640 }}
        >
          <Eyebrow>Life at RAHMA</Eyebrow>
          <h2 className="explore-heading" style={{ fontFamily: "var(--font-heading)", fontSize: 56, fontWeight: 700, lineHeight: "64.4px", color: "#000", margin: 0 }}>
            A closer look at our school
          </h2>
        </motion.div>

        <div className="explore-grid">
          {highlights.map((h, i) => (
            <motion.div
              key={h.href}
              className="explore-card"
              initial={{ opacity: 0, scale: 0.9, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={spring((i % 3) * 0.08)}
              viewport={{ once: true, amount: 0.2 }}
              style={{ background: h.bg, borderRadius: 20, padding: 10, display: "flex", flexDirection: "column" }}
            >
              <Link href={h.href} className="explore-card-image" aria-hidden tabIndex={-1} style={{ position: "relative", display: "block", borderRadius: 14, overflow: "hidden" }}>
                <Image src={h.image} alt="" fill sizes="(max-width: 810px) 100vw, 50vw" style={{ objectFit: "cover", objectPosition: h.objectPosition }} />
              </Link>
              <div style={{ padding: "24px 20px 20px", display: "flex", flexDirection: "column", gap: 14, flex: 1, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#575757" }}>{h.eyebrow}</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: 24, fontWeight: 700, lineHeight: 1.25, color: "#000", margin: 0 }}>{h.title}</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "26px", color: "#575757", margin: "0 0 10px", flex: 1 }}>{h.desc}</p>
                <ArrowButton href={h.href} variant="purple">{h.cta}</ArrowButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
