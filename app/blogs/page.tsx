import type { Metadata } from "next";
import { Container, SectionLabel, WavyUnderline, BlogCard } from "@/components/ui";
import { blogPosts } from "./[slug]/data";

export const metadata: Metadata = {
  title: "Our Blogs",
  description:
    "Explore stories and insights from RAHMA Model School about creative play, hands-on projects, and early childhood learning in Rawalpindi, Pakistan.",
};

export default function BlogsPage() {
  return (
    <div>
      <style>{`
        .blogs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 900px) { .blogs-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Header */}
      <section style={{ background: "var(--color-paper)", padding: "72px 0 60px" }}>
        <Container>
          <SectionLabel>Our Blogs</SectionLabel>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              color: "var(--color-ink)",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              maxWidth: 600,
            }}
          >
            Explore latest stories
            <br />
            and{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              insights
              <WavyUnderline />
            </span>
          </h1>
        </Container>
      </section>

      {/* Blog grid */}
      <section style={{ background: "var(--color-bg-cream)", padding: "60px 0 80px" }}>
        <Container>
          <div className="blogs-grid">
            {blogPosts.map((post) => (
              <BlogCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                author={post.author}
                date={post.date}
                tint={post.tint}
                image={post.heroImage || undefined}
                imageWidth={post.heroWidth}
                imageHeight={post.heroHeight}
              />
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
