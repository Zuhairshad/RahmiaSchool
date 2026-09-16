"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/programs", label: "Programs" },
  { href: "/admission", label: "Admission" },
  { href: "/teachers", label: "Faculty" },
  { href: "/facilities", label: "Facilities" },
  { href: "/student-life", label: "Student Life" },
  { href: "/blogs", label: "Blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-link { color: rgba(255,255,255,0.7); font-size: 0.875rem; font-weight: 400; font-family: var(--font-body); transition: color 0.2s; }
        .nav-link:hover, .nav-link.active { color: #fff; }
        @media (max-width: 900px) { .nav-links { display: none !important; } .nav-mobile-btn { display: flex !important; } }
        @media (min-width: 901px) { .nav-mobile-menu { display: none !important; } }
      `}</style>
      <nav style={{ position: "sticky", top: 0, zIndex: 1000, background: "var(--color-nav-bg)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", letterSpacing: "-0.01em" }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
              <path d="M9 0l2 6.5H18l-5.5 4 2 6.5L9 13 4.5 17l2-6.5L1 6.5h7L9 0z" fill="var(--color-brand-teal)" />
            </svg>
            RAHMA
          </Link>

          <div className="nav-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {links.slice(0, 4).map((l) => (
              <Link key={l.href} href={l.href} className={`nav-link${pathname === l.href ? " active" : ""}`}>
                {l.label}
              </Link>
            ))}
            <div style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 4, cursor: "pointer" }}>
              <span className="nav-link">All Pages</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M2.5 4.5L6 8l3.5-3.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          <Link
            href="/contact"
            style={{ display: "flex", alignItems: "center", gap: 10, background: "var(--color-dark-surface)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 100, padding: "7px 12px 7px 16px", color: "#fff", fontSize: "0.875rem", fontWeight: 500 }}
          >
            Contact us
            <span style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#2d2d2d,#111)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.15)" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <circle cx="7" cy="5" r="2.5" fill="rgba(255,255,255,0.6)" />
                <path d="M2 12c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
          </Link>

          <button
            className="nav-mobile-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4, flexDirection: "column", gap: 5 }}
          >
            <span style={{ width: 22, height: 2, background: "#fff", borderRadius: 2, display: "block" }} />
            <span style={{ width: 22, height: 2, background: "#fff", borderRadius: 2, display: "block" }} />
            <span style={{ width: 22, height: 2, background: "#fff", borderRadius: 2, display: "block" }} />
          </button>
        </div>

        {open && (
          <div className="nav-mobile-menu" style={{ background: "#111", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "16px 32px 24px" }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{ display: "block", color: pathname === l.href ? "#fff" : "rgba(255,255,255,0.7)", padding: "10px 0", fontSize: "0.95rem", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
