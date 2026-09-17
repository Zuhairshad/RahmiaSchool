"use client";
import React from "react";
import { motion } from "framer-motion";
import { Eyebrow, ArrowButton } from "./shared";


const spring = (delay = 0) => ({
  type: "spring" as const,
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.8, y: 24 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  transition: spring(delay),
  viewport: { once: true, amount: 0 } as const,
});

// Feature list items in the right column
const featureItems = [
  { title: "Safe & Caring Environment", desc: "We provide a secure, friendly, and supportive atmosphere where children feel confident to learn and grow." },
  { title: "Academic Excellence", desc: "Structured curriculum through concept-based learning, regular assessments, and modern teaching methods." },
  { title: "Character Building", desc: "We promote Islamic values, discipline, honesty, respect, and responsibility in every student." },
];

// Stat cards (Benefit Card 01/02) — no background color, side by side with vertical divider
const statCards = [
  {
    value: "Safe & Caring Environment",
    sub: "A secure, friendly, and supportive atmosphere where children feel confident to learn and grow.",
  },
  {
    value: "Qualified & Dedicated Teachers",
    sub: "Passionate and trained educators committed to nurturing every child's potential and love for learning.",
  },
];

// Desktop Benefit Cards (ticker / right side of bottom row)
const tickerCards = [
  {
    bg: "#d7fdcf",
    iconBg: "#09d89a",
    title: "Qualified & Dedicated Teachers",
    sub: "Our experienced teachers are committed to providing quality education while nurturing every student's individual abilities, moral values, and lifelong learning habits.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <circle cx="18" cy="12" r="6" stroke="#fff" strokeWidth="2.5" />
        <path d="M6 30c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    bg: "#ebe1fd",
    iconBg: "#520080",
    title: "Co-Curricular Activities",
    sub: "Students participate in debates, sports, arts, science exhibitions, and educational events to develop leadership, communication skills, and lasting confidence.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <path d="M18 4l2.94 5.95L27 11.27l-4.5 4.39.94 6.19L18 19.22l-5.44 2.63.94-6.19L9 11.27l6.06-1.32L18 4z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    bg: "#feeecd",
    iconBg: "#fcb520",
    title: "Safe & Caring Environment",
    sub: "A secure, friendly, and supportive atmosphere where children feel confident to learn and grow at their own pace.",
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        <path d="M18 4l12 5.33V18c0 7.18-5.12 13.89-12 15.67C11.12 31.89 6 25.18 6 18V9.33L18 4z" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function BenefitSection() {
  return (
    <section
      style={{
        background: "#fff",
        paddingTop: 120,
        paddingBottom: 120,
        paddingLeft: 30,
        paddingRight: 30,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob — large rotated ellipse in background */}
      <svg
        aria-hidden
        style={{
          position: "absolute",
          left: -429,
          top: -130,
          width: 2295,
          height: 898,
          opacity: 0.35,
          zIndex: 0,
          transform: "matrix(0.927184, -0.374607, 0.374607, 0.927184, 0, 0)",
          pointerEvents: "none",
        }}
        viewBox="0 0 2295 898"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M2295 449C2295 696.779 1781.89 898 1147.5 898C513.111 898 0 696.779 0 449C0 201.221 513.111 0 1147.5 0C1781.89 0 2295 201.221 2295 449Z"
          fill="#feeecd"
        />
      </svg>

      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          gap: 80,
        }}
      >
        {/* ─── Row 1: Image + Content ─── */}
        <motion.div
          {...fadeUp()}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 60,
            alignItems: "center",
          }}
        >
          {/* Image Wrapper — 580 × 800, borderRadius 20 */}
          <div
            style={{
              position: "relative",
              width: 580,
              minWidth: 580,
              height: 800,
              borderRadius: 20,
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/images/rahma-kids-studying-2.jpeg"
              alt="RAHMA students studying in class"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Content Wrapper — 660px wide, padding 40px, gap 71px */}
          <div
            style={{
              flex: 1,
              padding: 40,
              display: "flex",
              flexDirection: "column",
              gap: 71,
              alignSelf: "flex-start",
            }}
          >
            {/* Title & Card Wrapper (single child of Content Wrapper) — gap 60px */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 60,
              }}
            >
              {/* Title & Sub Title — gap 20px */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Title Wrapper — eyebrow + h2 (with ellipse) — gap 24px */}
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  <Eyebrow>Why Choose Us</Eyebrow>

                  {/* Title div: h2 + Ellipse SVG (absolutely positioned) */}
                  <div style={{ position: "relative", zIndex: 3 }}>
                    <h2
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: 56,
                        fontWeight: 700,
                        lineHeight: "64.4px",
                        color: "#000",
                        margin: 0,
                      }}
                    >
                      What makes us the right choice
                    </h2>
                    {/* Ellipse SVG — underline/oval around last two words */}
                    <svg
                      aria-hidden
                      viewBox="0 0 184 74"
                      fill="none"
                      style={{
                        position: "absolute",
                        width: 184,
                        height: 74,
                        right: 0,
                        bottom: -10,
                        overflow: "hidden",
                        zIndex: 1,
                        transform: "translate(-92px, -37px)",
                      }}
                    >
                      <path
                        d="M4 37C4 17.67 45.34 2 96 2C146.66 2 180 17.67 180 37C180 56.33 146.66 72 96 72C45.34 72 4 56.33 4 37Z"
                        stroke="#fcb520"
                        strokeWidth="5"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>

                {/* Sub Title paragraph */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#575757",
                    margin: 0,
                  }}
                >
                  We provide a safe, caring, and engaging learning environment that encourages every child to achieve academic excellence while developing confidence, creativity, and strong moral character.
                </p>
              </div>

              {/* Separator + 2-col feature items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Separator line with teal asterisk */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20 }}>
                  <div style={{ flex: 1, height: 1, background: "#d5d5d5" }} />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" stroke="#09d89a" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                  <div style={{ flex: 1, height: 1, background: "#d5d5d5" }} />
                </div>

                {/* 2-col feature items with vertical divider */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start" }}>
                  {featureItems.slice(0, 2).map((item, i) => (
                    <React.Fragment key={item.title}>
                      {i === 1 && (
                        <div style={{ width: 1, alignSelf: "stretch", background: "#d5d5d5", flexShrink: 0, margin: "0 30px" }} />
                      )}
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
                        <span style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 700, color: "#000" }}>{item.title}</span>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "24px", color: "#575757" }}>{item.desc}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact us button */}
            <div>
              <ArrowButton href="/contact" variant="purple">Contact us</ArrowButton>
            </div>
          </div>
        </motion.div>

        {/* ─── Row 2: Title & Ticker ─── */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 80,
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Title Wrapper — left side, max 515px, gap 24px */}
          <div
            style={{
              maxWidth: 515,
              width: 515,
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: 24,
            }}
          >
            {/* Title div: h2 (56px) with wavy ellipse on "creativity" */}
            <div style={{ position: "relative", zIndex: 3 }}>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 56,
                  fontWeight: 700,
                  lineHeight: "64.4px",
                  color: "#000",
                  margin: 0,
                }}
              >
                Guided by care and{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  creativity
                  {/* Ellipse SVG around "creativity" */}
                  <svg
                    viewBox="0 0 202 81"
                    aria-hidden
                    style={{
                      position: "absolute",
                      bottom: -14,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 202,
                      height: 81,
                      overflow: "visible",
                      zIndex: 1,
                      pointerEvents: "none",
                    }}
                    fill="none"
                  >
                    <ellipse cx="101" cy="40.5" rx="97" ry="36.5" stroke="#fcb520" strokeWidth="5" />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Sub Title paragraph */}
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                lineHeight: "24px",
                color: "#575757",
                margin: 0,
              }}
            >
              At RAHMA Model School, we are committed to creating future leaders through quality education, modern teaching methods, and a caring school culture rooted in Islamic values.
            </p>

            {/* Contact button */}
            <div>
              <ArrowButton href="/contact" variant="purple">Contact us</ArrowButton>
            </div>
          </div>

          {/* Ticker Wrapper — overflow hidden, padding-left 60px, fills remaining space */}
          <style>{`
            @keyframes benefit-ticker {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
          <div
            style={{
              flex: 1,
              minWidth: 0,
              overflow: "hidden",
              paddingLeft: 60,
              height: 473,
            }}
          >
            {/* Ticker — duplicated cards for seamless infinite loop */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 40,
                height: "100%",
                width: "max-content",
                animation: "benefit-ticker 20s linear infinite",
              }}
            >
              {[...tickerCards, ...tickerCards].map((card, idx) => (
                <div
                  key={`${card.title}-${idx}`}
                  style={{
                    background: card.bg,
                    borderRadius: 20,
                    width: 525,
                    minWidth: 525,
                    height: "100%",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    paddingTop: 40,
                    paddingLeft: 40,
                    paddingRight: 100,
                    paddingBottom: 117,
                    boxSizing: "border-box",
                    flexShrink: 0,
                    position: "relative",
                  }}
                >
                  {/* Content Wrapper — icon + title/sub, gap 60px */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 60,
                      position: "relative",
                      zIndex: 5,
                    }}
                  >
                    {/* Icon Wrapper — 70 × 70 circle */}
                    <div
                      style={{
                        width: 70,
                        height: 70,
                        borderRadius: "100px",
                        background: card.iconBg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        flexShrink: 0,
                      }}
                    >
                      {card.icon}
                    </div>

                    {/* Title Wrapper — title + sub, gap 20px */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 20,
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: 30,
                          fontWeight: 600,
                          lineHeight: "40.5px",
                          color: "#000",
                          margin: 0,
                        }}
                      >
                        {card.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 16,
                          lineHeight: "24px",
                          color: "#575757",
                          margin: 0,
                        }}
                      >
                        {card.sub}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
