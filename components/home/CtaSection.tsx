"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowButton } from "./shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

export default function CtaSection() {
  return (
    <section style={{ background: "#fff", padding: "60px 30px", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          background: "var(--color-bg-cream)",
          borderRadius: 20,
          padding: "120px 30px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 32,
          textAlign: "center",
        }}
      >
        {/* Decorative organic blob — top-left cream */}
        <svg
          aria-hidden
          style={{
            position: "absolute",
            left: -120,
            top: -120,
            width: 380,
            height: 380,
            zIndex: 0,
            pointerEvents: "none",
          }}
          viewBox="0 0 380 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M190 20 C280 20 360 90 360 190 C360 290 280 360 190 360 C90 360 20 280 20 190 C20 90 100 20 190 20 Z"
            fill="#feeecd"
            opacity="0.9"
          />
        </svg>

        {/* Decorative organic blob — bottom-right green */}
        <svg
          aria-hidden
          style={{
            position: "absolute",
            right: -120,
            bottom: -120,
            width: 380,
            height: 380,
            zIndex: 0,
            pointerEvents: "none",
          }}
          viewBox="0 0 380 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M190 20 C280 20 360 90 360 190 C360 290 280 360 190 360 C90 360 20 280 20 190 C20 90 100 20 190 20 Z"
            fill="#d7fdcf"
            opacity="0.9"
          />
        </svg>

        {/* Avatar — top-left (larger) */}
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 60,
            width: 70,
            height: 70,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #fff",
            zIndex: 1,
          }}
        >
          <Image
            src="/assets/images/bM5XLgck0nuZBUl800FPnYZLqM-49e6a37c.avif"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Avatar — bottom-left (smaller) */}
        <div
          style={{
            position: "absolute",
            left: 40,
            bottom: 80,
            width: 60,
            height: 60,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #fff",
            zIndex: 1,
          }}
        >
          <Image
            src="/assets/images/FH7s1VpnmO3OdrrAkXKU3gealE-79d1a684.avif"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Avatar — top-right (larger) */}
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 60,
            width: 70,
            height: 70,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #fff",
            zIndex: 1,
          }}
        >
          <Image
            src="/assets/images/IIm5NEuXpUdRszfB2rjqlZaHRdg-670fd09e.avif"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Avatar — bottom-right (smaller) */}
        <div
          style={{
            position: "absolute",
            right: 40,
            bottom: 80,
            width: 60,
            height: 60,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid #fff",
            zIndex: 1,
          }}
        >
          <Image
            src="/assets/images/C5awbluBJPV4EhKVcTbPsA5i4-f26ae8c5.avif"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0 }}
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 650,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 30,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 24,
            }}
          >
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
              Join our learning community today
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                lineHeight: "24px",
                color: "#575757",
                margin: 0,
              }}
            >
              Support your child&rsquo;s growth with a nurturing environment
              designed for learning, creativity, and confidence.
            </p>
          </div>
          <ArrowButton href="/contact" variant="purple">Enroll now</ArrowButton>
        </motion.div>
      </div>
    </section>
  );
}
