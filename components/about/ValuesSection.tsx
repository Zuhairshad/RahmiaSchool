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

const values = [
  {
    title: "Excellence in Education",
    desc: "We are committed to providing quality education through qualified teachers, modern teaching methods, and continuous assessment that develops strong academic foundations.",
  },
  {
    title: "Islamic & Moral Values",
    desc: "We instil integrity, honesty, respect, discipline, and compassion in every student, preparing them to become responsible and conscientious citizens.",
  },
  {
    title: "Discipline & Leadership",
    desc: "We nurture discipline, self-control, and leadership qualities that empower students to take initiative and face future challenges with confidence.",
  },
  {
    title: "Creativity & Innovation",
    desc: "We encourage creativity, critical thinking, and innovation through co-curricular activities, science exhibitions, arts, and technology integration in learning.",
  },
];

export default function ValuesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="section-padded"
      style={{
        background: "var(--color-bg-cream)",
        padding: "120px 30px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={spring()}
        viewport={{ once: true, amount: 0 }}
        className="values-row"
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          gap: 80,
          alignItems: "flex-start",
        }}
      >
        {/* LEFT COLUMN */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          <div>
            <Eyebrow>Our Values</Eyebrow>
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
              Values that shape learning
            </h2>
          </div>

          {/* Accordion */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {values.map((v, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={v.title}
                  style={{
                    borderBottom: "1px solid #d5d5d5",
                    padding: "20px 0",
                    cursor: isOpen ? "default" : "pointer",
                  }}
                  onClick={() => !isOpen && setOpenIndex(i)}
                >
                  {/* Row */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: isOpen ? undefined : "space-between",
                      gap: isOpen ? 16 : undefined,
                    }}
                  >
                    {isOpen && (
                      <span
                        style={{
                          width: 12,
                          height: 12,
                          borderRadius: "50%",
                          background: "#09d89a",
                          flexShrink: 0,
                          display: "inline-block",
                        }}
                      />
                    )}

                    <span
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: 20,
                        fontWeight: 600,
                        color: "#000",
                        flex: 1,
                      }}
                    >
                      {v.title}
                    </span>

                    {isOpen ? (
                      /* Minus icon */
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                        style={{ flexShrink: 0, cursor: "pointer" }}
                        onClick={() => setOpenIndex(-1)}
                      >
                        <path
                          d="M5 12h14"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      /* Plus icon */
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                        style={{ flexShrink: 0 }}
                      >
                        <path
                          d="M12 5v14M5 12h14"
                          stroke="#000"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Animated description */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="desc"
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
                            paddingTop: 12,
                            paddingLeft: 28,
                          }}
                        >
                          {v.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div
          className="values-image"
          style={{
            width: 590,
            flexShrink: 0,
            borderRadius: 20,
            overflow: "hidden",
            height: 680,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/images/rahma-kid-writing.jpeg"
            alt="RAHMA students in class"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
