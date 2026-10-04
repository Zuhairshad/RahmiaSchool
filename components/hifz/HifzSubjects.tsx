"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eyebrow, ArrowButton } from "@/components/home/shared";
import { fadeUp } from "./shared";

// Regular-school photos, all shown at their natural aspect ratio (no cropping).
const PHOTOS = [
  { src: "/assets/images/gallery/g-26.jpeg", width: 1012, height: 1800, alt: "A RAHMATE in hijab focused on her classwork" },
  { src: "/assets/images/rahma-kids-studying.jpeg", width: 3120, height: 4160, alt: "Students working together at their classroom tables" },
  { src: "/assets/images/gallery/g-30.jpeg", width: 810, height: 1800, alt: "Boys reading their books in class" },
  { src: "/assets/images/gallery/g-24.jpeg", width: 1012, height: 1800, alt: "A school prefect writing at his desk" },
];

const SUBJECT_NOTES: Record<string, string> = {
  "Hifz-ul-Quran": "Memorizing the Holy Quran, step by step",
  "Urdu Translation": "Easy Urdu meaning of every verse",
  Tafseer: "The basic explanation and message",
  "Tajweed & Qiraat": "Correct pronunciation with the Qari Sahib",
  "Sabaq, Sabqi & Manzil": "New lesson, recent lessons, older portions",
  "Regular School Subjects": "Grades 4 to 8 continue side by side",
};

export default function HifzSubjects({ subjects, enrollHref }: { subjects: string[]; enrollHref: string }) {
  return (
    <section className="section-padded" style={{ background: "var(--color-bg-cream)", padding: "120px 30px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 72 }}>
        <div className="hifz-subjects-grid" style={{ display: "grid", gridTemplateColumns: "minmax(0, 0.8fr) minmax(0, 1.2fr)", gap: 72, alignItems: "start" }}>
          <motion.div {...fadeUp()} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
              <Eyebrow>What your child learns</Eyebrow>
              <h2 className="hifz-h2" style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 700, lineHeight: 1.12, color: "#000", margin: 0 }}>
                Hifz and school, <span style={{ color: "var(--color-brand-purple-deep)" }}>side by side</span>
              </h2>
            </div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.75, color: "#575757", margin: 0 }}>
              Every day blends Quran memorization, meaning and Tajweed with the regular curriculum, so your child becomes a Hafiz or Hafiza and stays on track to become a Doctor, Engineer or Scholar.
            </p>
            <div>
              <ArrowButton href={enrollHref} variant="purple">
                Apply for Hifz
              </ArrowButton>
            </div>
          </motion.div>

          <ul className="hifz-subject-list" style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 16 }}>
            {subjects.map((subject, i) => (
              <motion.li
                key={subject}
                {...fadeUp(0.05 * i)}
                style={{
                  background: "#fff",
                  border: "1px solid #ececec",
                  borderRadius: 20,
                  padding: "22px 24px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 16,
                }}
              >
                <span
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: i === subjects.length - 1 ? "var(--color-tint-purple)" : "var(--color-tint-green)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 14,
                    color: i === subjects.length - 1 ? "var(--color-brand-purple-deep)" : "#057a57",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 18, fontWeight: 700, color: "#000", lineHeight: 1.3 }}>{subject}</span>
                  {SUBJECT_NOTES[subject] && (
                    <span style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.5, color: "#757575" }}>{SUBJECT_NOTES[subject]}</span>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Justified photo strip: each photo's flex-grow equals its aspect ratio, so every image keeps its full frame. */}
        <motion.div {...fadeUp(0.1)} className="hifz-photo-strip" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          {PHOTOS.map((p) => (
            <div
              key={p.src}
              className="hifz-photo"
              style={{ flex: `${p.width / p.height} 1 0`, minWidth: 0, borderRadius: 20, overflow: "hidden", background: "#eee" }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.width}
                height={p.height}
                sizes="(max-width: 810px) 50vw, 340px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
