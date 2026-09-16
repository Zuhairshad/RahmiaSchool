import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Our Blogs" };

function WavyUnderline() {
  return (
    <svg viewBox="0 0 220 14" style={{ position: "absolute", bottom: -6, left: 0, width: "100%", height: 14 }} preserveAspectRatio="none">
      <path d="M 4 10 Q 55 2 110 10 Q 165 18 216 10" fill="none" stroke="#FCB520" strokeWidth="4" strokeLinecap="round"/>
    </svg>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0l1.3 3.7H10L7 6l1.1 3.7L5 7.6 1.9 9.7 3 6 0 3.7h3.7L5 0z" fill="#FCB520"/></svg>
      <span style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>{children}</span>
    </div>
  );
}

const posts = [
  { author: "RAHMA Staff", date: "February 23, 2026", title: "Creative Games That Make Learning Fun for Kids", bg: "#D7FDCF", slug: "creative-games-that-make-learning-fun-for-kids" },
  { author: "RAHMA Staff", date: "February 27, 2026", title: "Hands-On Projects to Build Creativity and Confidence", bg: "#EBE1FD", slug: "hands-on-projects-to-build-creativity-and-confidence" },
  { author: "RAHMA Staff", date: "March 11, 2026", title: "How Art and Play Support Your Child's Development", bg: "#FEEECE", slug: "how-art-and-play-support-your-child-s-development" },
  { author: "RAHMA Staff", date: "March 18, 2026", title: "Easy Learning Activities for Curious Young Minds", bg: "#D7FDCF", slug: "easy-learning-activities-for-curious-young-minds" },
  { author: "RAHMA Staff", date: "March 25, 2026", title: "Simple Crafts That Inspire Imagination and Learning", bg: "#EBE1FD", slug: "simple-crafts-that-inspire-imagination-and-learning" },
  { author: "RAHMA Staff", date: "April 2, 2026", title: "Creative Play Ideas for Early Childhood Development", bg: "#FEEECE", slug: "creative-play-ideas-for-early-childhood-development" },
];

export default function BlogsPage() {
  return (
    <div style={{ fontFamily: "'Nunito Sans', sans-serif" }}>

      {/* Header */}
      <section style={{ background: "#fff", padding: "72px 32px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionLabel>Our Blogs</SectionLabel>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 800, color: "#000", lineHeight: 1.2, letterSpacing: "-0.02em", maxWidth: 600 }}>
            Explore latest stories<br />and{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              insights
              <WavyUnderline />
            </span>
          </h1>
        </div>
      </section>

      {/* Blog grid */}
      <section style={{ background: "#FCFAED", padding: "60px 32px 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {posts.map(post => (
            <div key={post.slug} style={{ background: post.bg, borderRadius: 20, overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <div style={{ padding: "22px 22px 0" }}>
                <p style={{ color: "#888", fontSize: "0.78rem", marginBottom: 10 }}>{post.author} · {post.date}</p>
                <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#000", lineHeight: 1.4, marginBottom: 12 }}>{post.title}</h2>
                <Link href={`/blogs/${post.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#000", fontWeight: 700, fontSize: "0.85rem", marginBottom: 18 }}>
                  View details →
                </Link>
              </div>
              {/* Image placeholder */}
              <div style={{ height: 180, background: "rgba(0,0,0,0.07)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "auto" }}>
                <span style={{ color: "rgba(0,0,0,0.2)", fontSize: "0.8rem", fontWeight: 600 }}>[ Blog image ]</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
