import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, SectionLabel, WavyUnderline, Button, BlogCard, CtaImageRow } from "@/components/ui";
import { blogPosts, getBlogPost } from "./data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Blog post not found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div>
      <style>{`
        .blog-hero-copy { max-width: 760px; margin: 0 auto; text-align: center; }
        .blog-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 810px) { .blog-related-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Header */}
      <section style={{ background: "var(--color-paper)", padding: "72px 0 40px" }}>
        <Container>
          <div className="blog-hero-copy">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <SectionLabel>Blog Details</SectionLabel>
            </div>
            <h1
              className="hero-h1"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                color: "var(--color-ink)",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              {post.title}
            </h1>
            <p style={{ color: "var(--color-body-text)", fontSize: "1rem", lineHeight: 1.7, marginBottom: 24 }}>
              {post.excerpt}
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
              <div style={{ position: "relative", width: 36, height: 36, borderRadius: "50%", overflow: "hidden", background: "var(--color-tint-green)" }}>
                <Image src={post.authorAvatar} alt={post.author} width={72} height={72} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#000" }}>{post.author}</span>
              <span style={{ color: "#bababa" }}>·</span>
              <span style={{ fontSize: "0.875rem", color: "#888" }}>{post.date}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Hero image */}
      <section style={{ background: "var(--color-paper)", padding: "0 0 60px" }}>
        <Container>
          <div style={{ position: "relative", width: "100%", aspectRatio: "800 / 552", borderRadius: 24, overflow: "hidden", background: "var(--color-tint-cream)" }}>
            {post.heroImage ? (
              <Image
                src={post.heroImage}
                alt={post.title}
                fill
                sizes="(max-width: 810px) 100vw, 1200px"
                style={{ objectFit: "cover" }}
                priority
              />
            ) : (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "linear-gradient(135deg, var(--color-tint-green), var(--color-tint-purple))",
                }}
              >
                <span style={{ color: "rgba(0,0,0,0.35)", fontWeight: 700 }}>RAHMA Model School</span>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Body */}
      <section style={{ background: "var(--color-paper)", padding: "0 0 80px" }}>
        <Container>
          <article style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 28 }}>
            {post.sections.map((section, i) => (
              <div key={section.heading ?? `intro-${i}`}>
                {section.heading && (
                  <h2
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: "1.3rem",
                      color: "#000",
                      marginBottom: 12,
                    }}
                  >
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((p, j) => (
                  <p key={j} style={{ color: "var(--color-body-text)", fontSize: "1rem", lineHeight: 1.85 }}>
                    {p}
                  </p>
                ))}
              </div>
            ))}

            <Link
              href="/blogs"
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                alignItems: "center",
                gap: 8,
                marginTop: 12,
                color: "#000",
                fontWeight: 700,
                fontSize: "0.9rem",
                border: "1px solid var(--color-line)",
                borderRadius: 100,
                padding: "10px 20px",
              }}
            >
              ← Go Back to All Blogs
            </Link>
          </article>
        </Container>
      </section>

      {/* Related posts */}
      <section style={{ background: "var(--color-bg-cream)", padding: "60px 0 80px" }}>
        <Container>
          <SectionLabel>Related Blogs</SectionLabel>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 800,
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "#000",
              marginBottom: 28,
            }}
          >
            You might also like
          </h2>
          <div className="blog-related-grid">
            {related.map((r) => (
              <BlogCard
                key={r.slug}
                slug={r.slug}
                title={r.title}
                author={r.author}
                date={r.date}
                tint={r.tint}
                image={r.heroImage || undefined}
                imageWidth={r.heroWidth}
                imageHeight={r.heroHeight}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-brand-teal)", padding: "64px 0", textAlign: "center" }}>
        <Container>
          <CtaImageRow />
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", fontWeight: 800, color: "#000", marginBottom: 16 }}>
            Join our learning community today
          </h2>
          <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem", marginBottom: 28 }}>
            At RAHMA Model School, education extends far beyond textbooks through an active Student Life Program.
          </p>
          <Button href="/admission" variant="dark">
            Enroll now
          </Button>
        </Container>
      </section>
    </div>
  );
}
