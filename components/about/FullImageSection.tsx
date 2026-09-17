"use client";
import { motion } from "framer-motion";

export default function FullImageSection() {
  return (
    <motion.section
      initial={{ scale: 0.92, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", damping: 80, mass: 1, stiffness: 200 }}
      viewport={{ once: true, amount: 0 }}
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <img
        src="/assets/images/rahma-about-hero.png"
        alt="RAHMA Model School aerial view"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
        }}
      />
      {/* Semi-transparent overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.1)",
          zIndex: 1,
        }}
      />
    </motion.section>
  );
}
