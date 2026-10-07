"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eyebrow } from "@/components/home/shared";
import { spring } from "./shared";

const FAQS = [
  {
    q: "When can my child join the Hifz program?",
    a: "We enroll boys for Hifz in Grade 4. It is the ideal age to start: your child is mature enough to memorize well and to understand what they are learning",
  },
  {
    q: "Will my child fall behind in regular studies?",
    a: "No. Regular school education from Grade 4 to Grade 8 continues side by side with Hifz. By the end of Grade 8 your child is a complete Hafiz-e-Quran and carries on from Grade 9 onwards without any academic loss",
  },
  {
    q: "Does my child only memorize, or also understand?",
    a: "That is what makes this Hifz with Understanding. Along with memorization, your child learns the easy Urdu translation and the basic Tafseer of every verse, so the message of the Quran stays with them for life",
  },
  {
    q: "Who teaches the Hifz class?",
    a: "Hifz is done under the supervision of a certified and experienced Qari Sahib, with correct pronunciation and Tajweed. Our Qari Sahib treats children with great affection and is familiar with modern teaching methods",
  },
  {
    q: "How do you make sure memorization is not forgotten?",
    a: "Through a daily Sabaq, Sabqi and Manzil system. Sabaq is the new lesson of the day, Sabqi is the revision of recent lessons, and Manzil is the regular revision of older portions, so every part stays firmly in memory",
  },
  {
    q: "Is the Hifz program for boys and girls?",
    a: "The Hifz program is for boys only. Your son becomes a Hafiz while continuing his regular schooling at RAHMA Model School",
  },
  {
    q: "How do I apply?",
    a: "Fill in the admission form on our Admission page and choose the Hifz program, or contact the school office and we will guide you through the next steps",
  },
];

export default function HifzFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padded" style={{ background: "#fff", padding: "120px 30px", position: "relative", overflow: "hidden" }}>
      <svg
        aria-hidden
        style={{ position: "absolute", left: -80, top: "50%", transform: "translateY(-50%)", width: 220, height: 500, opacity: 0.5, pointerEvents: "none" }}
        viewBox="0 0 220 500"
        fill="none"
      >
        <path
          d="M40 20 C-20 80, -20 180, 40 240 C100 300, 200 320, 180 400 C160 480, 60 480, 40 420"
          stroke="#d7fdcf"
          strokeWidth="60"
          strokeLinecap="round"
          fill="none"
        />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={spring()}
        viewport={{ once: true, amount: 0 }}
        style={{ maxWidth: 800, margin: "0 auto", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 48 }}
      >
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="hifz-h2" style={{ fontFamily: "var(--font-heading)", fontSize: 52, fontWeight: 700, lineHeight: 1.12, color: "#000", margin: 0 }}>
            Questions parents ask about Hifz
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            const id = `hifz-faq-${i}`;
            return (
              <div key={faq.q} style={{ background: "var(--color-bg-cream)", border: "1px solid #ececec", borderRadius: 20 }}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="hifz-faq-btn"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    padding: "22px 26px",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span className="hifz-faq-q" style={{ fontFamily: "var(--font-heading)", fontSize: 19, fontWeight: 600, color: "#000", flex: 1 }}>
                    {faq.q}
                  </span>
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: isOpen ? "#520080" : "#fff",
                      border: isOpen ? "1px solid #520080" : "1px solid #d5d5d5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 0.2s, border 0.2s",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                      style={{ transform: isOpen ? "rotate(0deg)" : "rotate(180deg)", transition: "transform 0.3s" }}
                    >
                      <path d="M6 15l6-6 6 6" stroke={isOpen ? "#fff" : "#575757"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={id}
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="hifz-faq-a" style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "#575757", margin: 0, padding: "0 26px 24px" }}>{faq.a}</p>
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
