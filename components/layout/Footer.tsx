"use client";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About" },
  { href: "/teachers", label: "Teachers" },
  { href: "/programs", label: "Programs" },
  { href: "/pricing", label: "Price plan" },
  { href: "/facilities", label: "Facilities" },
  { href: "/admission", label: "Admission" },
  { href: "/contact", label: "Contact" },
  { href: "/student-life", label: "Student Life" },
];

const socials = [
  { label: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "X", path: "M4 4l16 16M20 4L4 20" },
  {
    label: "LinkedIn",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
  },
  {
    label: "YouTube",
    path: "M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM10 15.5v-7l6 3.5-6 3.5z",
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark-bg-deep)", color: "#fff" }}>
      <div className="footer-grid" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "64px 32px 40px", display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 48, alignItems: "start" }}>
        <div>
          <p style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.4rem", color: "#fff", letterSpacing: "-0.01em", marginBottom: 16 }}>
            RAHMA
          </p>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", lineHeight: 1.75, marginBottom: 28, maxWidth: 280 }}>
            We provide a safe, caring, and engaging learning environment for students from Preschool to High School in Rawalpindi.
          </p>
          <form style={{ display: "flex", gap: 0 }} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              aria-label="Email address"
              style={{ flex: 1, padding: "12px 16px", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", borderRight: "none", borderRadius: "100px 0 0 100px", color: "#fff", fontSize: "0.875rem", outline: "none" }}
            />
            <button
              type="submit"
              style={{ background: "var(--color-brand-purple)", border: "none", borderRadius: "0 100px 100px 0", padding: "12px 18px", cursor: "pointer", display: "flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 600, fontSize: "0.875rem", whiteSpace: "nowrap" }}
            >
              Subscribe
              <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="var(--color-brand-purple)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
          </form>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, paddingTop: 4 }}>
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              style={{ width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.6)" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
          {footerLinks.map((l) => (
            <Link key={l.href + l.label} href={l.href} style={{ display: "block", color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", marginBottom: 20 }}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "20px 32px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.8rem", textAlign: "center" }}>
            RAHMA Model School © RAHMA Model School — 2026
          </p>
        </div>
        <div style={{ position: "absolute", right: 32, bottom: 0, opacity: 0.12 }} aria-hidden>
          <svg width="80" height="80" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
          </svg>
        </div>
      </div>
    </footer>
  );
}
