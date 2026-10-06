"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/home/shared";
import { fadeUp } from "./shared";

const STATS = [
  { value: "Grade 4", label: "Admission into the Hifz class" },
  { value: "5 Years", label: "A well-structured program" },
  { value: "Grade 8", label: "A complete Hafiz-e-Quran" },
  { value: "Zero", label: "Academic loss along the way" },
];

// The Hifz class teacher during a lesson with two students (1600x1600, shown uncropped).
const PHOTO = { src: "/assets/images/hifz-class-teacher.jpeg", width: 1600, height: 1600 };

export default function HifzAbout({ description }: { description: string }) {
  const paragraphs = description.split("\n\n");

  return (
    <section className="section-padded" style={{ background: "#fff", padding: "120px 30px" }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 64 }}>
        {/* Title row, like the home About section */}
        <div className="hifz-title-row" style={{ display: "flex", alignItems: "flex-start", gap: 40 }}>
          <div style={{ flex: 1 }}>
            <Eyebrow>Why Hifz at RAHMA</Eyebrow>
          </div>
          <motion.h2
            {...fadeUp()}
            className="hifz-h2 hifz-title-heading"
            style={{
              width: 760,
              flexShrink: 0,
              fontFamily: "var(--font-heading)",
              fontSize: 44,
              fontWeight: 600,
              lineHeight: 1.2,
              color: "#000",
              margin: 0,
            }}
          >
            Not just memorizing the Quran, but{" "}
            <span style={{ color: "var(--color-brand-teal)" }}>understanding its message</span> and living it every day.
          </motion.h2>
        </div>

        {/* Story + photo */}
        <div
          className="hifz-about-grid"
          style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) 420px", gap: 72, alignItems: "center" }}
        >
          <motion.div {...fadeUp(0.08)} style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {paragraphs.map((para, i) => (
              <p
                key={i}
                className={i === 0 ? "hifz-about-lead" : undefined}
                style={{
                  fontFamily: i === 0 ? "var(--font-heading)" : "var(--font-body)",
                  fontSize: i === 0 ? 22 : 18,
                  fontWeight: i === 0 ? 600 : 400,
                  lineHeight: i === 0 ? 1.5 : 1.8,
                  color: i === 0 ? "#000" : "#575757",
                  margin: 0,
                }}
              >
                {para}
              </p>
            ))}
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 20,
                fontWeight: 700,
                lineHeight: 1.4,
                color: "#000",
                margin: "8px 0 0",
                paddingLeft: 18,
                borderLeft: "4px solid var(--color-brand-teal)",
              }}
            >
              Worldly education and the best Quranic training, under one roof.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.16)} className="hifz-about-photo" style={{ position: "relative" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-18px 18px 18px -18px",
                borderRadius: 24,
                background: "var(--color-tint-purple)",
              }}
            />
            <div style={{ position: "relative", borderRadius: 24, overflow: "hidden", boxShadow: "0 24px 64px rgba(0,0,0,0.12)" }}>
              <Image
                src={PHOTO.src}
                alt="The Hifz class teacher explaining a lesson to two students"
                width={PHOTO.width}
                height={PHOTO.height}
                sizes="(max-width: 810px) 90vw, 420px"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats row, like the home About stats */}
        <motion.div {...fadeUp(0.12)} className="hifz-stats-row" style={{ display: "flex", alignItems: "center" }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              {i > 0 && <div className="hifz-stat-divider" style={{ width: 1, height: 86, background: "#d5d5d5", marginRight: 24, flexShrink: 0 }} />}
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span
                  className="hifz-stat-value"
                  style={{ fontFamily: "var(--font-heading)", fontSize: 44, fontWeight: 600, lineHeight: 1.2, color: "#000" }}
                >
                  {stat.value}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "24px", color: "#575757" }}>{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
