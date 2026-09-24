"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowButton, Eyebrow } from "./shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

export default function VisionSection() {
  return (
    <section
      className="section-padded"
      style={{ background: "var(--color-bg-cream)", padding: "180px 30px 120px", position: "relative", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1300, margin: "0 auto" }}>
        <div
          className="vision-layout"
          style={{
            display: "flex",
            gap: 72,
            alignItems: "flex-start",
          }}
        >
          {/* ── Left: photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={spring()}
            viewport={{ once: true, amount: 0 }}
            className="vision-photo-col"
            style={{ flexShrink: 0, width: 460, position: "relative", marginTop: -160 }}
          >
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src="/assets/images/the vision col shb photo.jpeg"
                alt="Lt Col Chaudhry Muhammad Hafeez"
                width={531}
                height={742}
                style={{ width: "100%", height: "auto", display: "block", marginTop: "-110px" }}
              />
            </div>
            {/* Name badge below photo */}
            <div
              style={{
                marginTop: 16,
                background: "var(--color-dark-bg)",
                borderRadius: 14,
                padding: "14px 18px",
              }}
            >
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", color: "#fff", marginBottom: 3 }}>
                Lt Col Chaudhry Muhammad Hafeez
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "var(--color-brand-teal)", fontWeight: 600 }}>
                Founder &amp; Visioner, RAHMA Model School
              </div>
            </div>
          </motion.div>

          {/* ── Right: content ── */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={spring(0.1)}
            viewport={{ once: true, amount: 0 }}
            style={{ flex: 1, display: "flex", flexDirection: "column", gap: 0, paddingTop: 8 }}
          >
            <Eyebrow>The Vision</Eyebrow>

            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 3.2vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                color: "#000",
                margin: "16px 0 20px",
              }}
            >
              Giving every child the{" "}
              <span style={{ color: "var(--color-brand-teal)" }}>right to learn</span>
            </h2>

            {[
              "Primary education coverage is on the rise in Pakistan; however, challenges with access still persist. According to government statistics, an estimated 22.6 million children aged 5–16 remain out of school, constituting 44% of all children in this age bracket.",
              "Pakistan ranks second in South Asia for having the highest number of Out-Of-School Children (OOSC) at the primary level, with over half of them being girls. A significant portion of these OOSC comes from the poorest, marginalised, and socially excluded groups residing in makeshift tarpaulin huts in slums.",
              "In Rawalpindi/Islamabad alone, approximately 15,000 children from such backgrounds are not enrolled in schools. In response, RAHMA began offering education to these children in 2012, establishing a school within a slum near Rawalpindi Railway Station. What started in a small hut became the first-ever school built for these children.",
            ].map((para, i) => (
              <p key={i} style={{ fontFamily: "var(--font-body)", fontSize: "1.15rem", lineHeight: 1.85, color: "#575757", margin: "0 0 20px" }}>
                {para}
              </p>
            ))}

            <div>
              <ArrowButton href="/donate" variant="purple">Support the vision</ArrowButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
