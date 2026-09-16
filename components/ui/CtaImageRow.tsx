import Image from "next/image";

const images = [
  "/assets/images/BVDpVUwW5DNcCihlJOIQdRXDfwk-b896e0b5.avif",
  "/assets/images/FH7s1VpnmO3OdrrAkXKU3gealE-79d1a684.avif",
  "/assets/images/IIm5NEuXpUdRszfB2rjqlZaHRdg-670fd09e.avif",
  "/assets/images/bM5XLgck0nuZBUl800FPnYZLqM-49e6a37c.avif",
];

/**
 * Small row of decorative student-life photo chips, matching the
 * "Small Image 01-04" assets used around the CTA sections in the real
 * Framer export (admission.html, pricing.html, blogs.html and every
 * public/blogs/*.html post).
 */
export default function CtaImageRow() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 28, flexWrap: "wrap" }} aria-hidden>
      {images.map((src, i) => (
        <div
          key={src}
          style={{
            position: "relative",
            width: 56,
            height: 56,
            borderRadius: "50%",
            overflow: "hidden",
            border: "3px solid rgba(255,255,255,0.6)",
            transform: i % 2 === 0 ? "translateY(-4px)" : "translateY(4px)",
          }}
        >
          <Image src={src} alt="" fill sizes="56px" style={{ objectFit: "cover" }} />
        </div>
      ))}
    </div>
  );
}
