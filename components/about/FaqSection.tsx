"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "@/components/home/shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring" as const,
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

const faqs = [
  {
    q: "What age groups do you accept?",
    a: "We welcome children from early toddlers to preschool age, with carefully designed programs that match each stage of development. Our activities are tailored to support social and academic growth at every level.",
  },
  {
    q: "What is your teaching approach?",
    a: "Our teaching approach combines guided learning, creative play, and hands-on activities to foster curiosity, build confidence, develop essential skills, and support every child's individual growth and success.",
  },
  {
    q: "How do you ensure child safety?",
    a: "We ensure child safety through trained staff, secure facilities, supervised activities, strict safety policies, and a nurturing environment that prioritizes every child's well-being and protection.",
  },
  {
    q: "What are your class sizes?",
    a: "Our class sizes are kept small to ensure personalized attention, meaningful interaction, and a supportive learning environment where every child can actively participate and thrive.",
  },
  {
    q: "Do You Offer Parent Updates?",
    a: "Yes, we provide regular parent communication updates through meetings, progress reports, and direct communication to keep families informed about their child's growth, learning, and development.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="section-padded"
      style={{
        background: "#fff",
        padding: "120px 30px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative organic blob — left side */}
      <svg
        aria-hidden
        style={{
          position: "absolute",
          left: -80,
          top: "50%",
          transform: "translateY(-50%)",
          width: 220,
          height: 500,
          opacity: 0.5,
          pointerEvents: "none",
          zIndex: 0,
        }}
        viewBox="0 0 220 500"
        fill="none"
      >
        <path
          d="M40 20 C-20 80, -20 180, 40 240 C100 300, 200 320, 180 400 C160 480, 60 480, 40 420"
          stroke="#feeecd"
          strokeWidth="60"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={spring()}
        viewport={{ once: true, amount: 0 }}
        style={{
          maxWidth: 800,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 48,
        }}
      >
        {/* Centered header */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <Eyebrow>FAQ</Eyebrow>
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
            Common questions from parents
          </h2>
        </div>

        {/* FAQ cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.q}
                style={{
                  background: "var(--color-bg-cream)",
                  borderRadius: 20,
                  padding: "24px 30px",
                  cursor: "pointer",
                }}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                {/* Row: question + toggle button */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#000",
                      flex: 1,
                    }}
                  >
                    {faq.q}
                  </span>

                  {/* Toggle button */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: isOpen ? "#520080" : "#fff",
                      border: isOpen ? "none" : "1px solid #d5d5d5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 0.2s, border 0.2s",
                    }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s",
                      }}
                    >
                      <path
                        d="M6 15l6-6 6 6"
                        stroke={isOpen ? "#fff" : "#575757"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>

                {/* Animated answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 16,
                          lineHeight: "24px",
                          color: "#575757",
                          margin: 0,
                          paddingTop: 16,
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
