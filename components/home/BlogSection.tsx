"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/app/blogs/[slug]/data";
import { Eyebrow } from "./shared";

const spring = (delay = 0): Record<string, unknown> => ({
  type: "spring",
  damping: 80,
  mass: 1,
  stiffness: 200,
  delay,
});

export default function BlogSection() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "120px 30px 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob — large SVG matches reference */}
      <svg
        aria-hidden
        style={{
          position: "absolute",
          right: -300,
          top: -200,
          width: 900,
          height: 620,
          zIndex: 0,
          opacity: 0.18,
          pointerEvents: "none",
        }}
        viewBox="0 0 900 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="450" cy="310" rx="450" ry="310" fill="#feeecd" />
      </svg>

      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 80,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={spring()}
          viewport={{ once: true, amount: 0 }}
          style={{ maxWidth: 600, textAlign: "center" }}
        >
          <Eyebrow>Our Blogs</Eyebrow>
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
            Insights for early learning and growth
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            width: "100%",
          }}
          className="blog-grid"
        >
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, scale: 0.8, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={spring(i * 0.1)}
              viewport={{ once: true, amount: 0 }}
            >
              <Link
                href={`/blogs/${post.slug}`}
                className="blog-card"
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: 397,
                    borderRadius: "20px 20px 0 0",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={post.heroImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div
                  style={{
                    padding: "40px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      fontFamily: "var(--font-body)",
                      fontSize: 16,
                      lineHeight: "24px",
                      color: "#575757",
                    }}
                  >
                    <span>{post.author}</span>
                    <span
                      style={{
                        display: "inline-block",
                        width: 5,
                        height: 1,
                        background: "#575757",
                        flexShrink: 0,
                      }}
                    />
                    <span>{post.date}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 24,
                      fontWeight: 600,
                      lineHeight: "33.6px",
                      color: "#000",
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
