import Image from "next/image";
import Link from "next/link";

type BlogCardProps = {
  slug: string;
  title: string;
  author: string;
  date: string;
  tint: string;
  image?: string;
  imageWidth?: number;
  imageHeight?: number;
};

export default function BlogCard({
  slug,
  title,
  author,
  date,
  tint,
  image,
  imageWidth = 800,
  imageHeight = 552,
}: BlogCardProps) {
  return (
    <div
      style={{
        background: tint,
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <div style={{ padding: "22px 22px 0", flex: 1 }}>
        <p style={{ color: "#888", fontSize: "0.78rem", marginBottom: 10, fontFamily: "var(--font-body)" }}>
          {author} · {date}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 700,
            fontSize: "1.05rem",
            color: "#000",
            lineHeight: 1.4,
            marginBottom: 12,
          }}
        >
          {title}
        </h2>
        <Link
          href={`/blogs/${slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "#000",
            fontWeight: 700,
            fontSize: "0.85rem",
            marginBottom: 18,
          }}
        >
          View details →
        </Link>
      </div>
      <div style={{ position: "relative", height: 180, marginTop: "auto", background: "rgba(0,0,0,0.06)" }}>
        {image ? (
          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, rgba(0,0,0,0.08), rgba(0,0,0,0.14))",
            }}
          >
            <span style={{ color: "rgba(0,0,0,0.25)", fontSize: "0.8rem", fontWeight: 600 }}>RAHMA Model School</span>
          </div>
        )}
      </div>
    </div>
  );
}
