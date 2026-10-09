"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

/**
 * Primary links match the real Framer nav ("Large Menu 01" on index.html):
 * Home, About, Contact, Programs, Faculty — plus an "All Pages" affordance
 * for the rest. The real breakpoint for the horizontal-bar/overlay-menu
 * switch is 1380px (confirmed via @media (min-width:1380px) in the export's
 * inlined CSS), not a single ~900px cutoff.
 */
const aboutLinks = [
  { href: "/about", label: "About Us" },
  { href: "/about/management", label: "Management" },
];

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", children: aboutLinks },
  { href: "/contact", label: "Contact" },
  { href: "/programs", label: "Programs" },
  { href: "/programs/hifz-program", label: "Hifz Program", highlight: true },
  { href: "/teachers", label: "Faculty" },
];

const allPagesLinks = [
  { href: "/admission", label: "Admission" },
  { href: "/pricing", label: "Fee Structure" },
  { href: "/student-life", label: "Student Life" },
  { href: "/facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  // { href: "/blogs", label: "Blog" },
];

// Phone/tablet menu: no Hifz link (laptop nav keeps it), Our Vision and
// Sadqa Jaria right after Programs, with Contact last as menus usually do
const allLinksForOverlay = [
  ...primaryLinks
    .filter((l) => !l.highlight && l.href !== "/contact")
    .flatMap((l) =>
      l.href === "/programs"
        ? [
            l,
            { href: "/#vision", label: "Our Vision" },
            { href: "/donate", label: "Assistance in Sadqa Jaria", donate: true },
          ]
        : [l]
    ),
  ...allPagesLinks,
  { href: "/contact", label: "Contact" },
];

function NavDropdown({
  label,
  href,
  links,
  active,
  align = "left",
}: {
  label: string;
  /** When set, the label itself is a link and the menu opens on hover. */
  href?: string;
  links: { href: string; label: string }[];
  active?: boolean;
  align?: "left" | "right";
}) {
  const [open, setOpen] = useState(false);
  const chevron = (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M2.5 4.5L6 8l3.5-3.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );

  return (
    <div
      style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 4, cursor: "pointer" }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {href ? (
        <>
          <Link href={href} className={`nav-link nav-link-underline${active ? " active" : ""}`}>
            {label}
          </Link>
          <button
            type="button"
            aria-label={`${label} pages`}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "inline-flex" }}
          >
            {chevron}
          </button>
        </>
      ) : (
        <button
          type="button"
          className="nav-link"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "inline-flex", alignItems: "center", gap: 4, fontFamily: "inherit" }}
        >
          {label}
          {chevron}
        </button>
      )}
      {open && (
        <div style={{ position: "absolute", top: "100%", [align]: 0, paddingTop: 12, zIndex: 10 }}>
          <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: 8, minWidth: 180, boxShadow: "0 10px 30px rgba(0,0,0,0.4)" }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link"
                onClick={() => setOpen(false)}
                style={{ display: "block", padding: "8px 12px", borderRadius: 8, whiteSpace: "nowrap" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-link { color: rgba(255,255,255,0.75); font-size: 16px; font-weight: 600; line-height: 24px; font-family: var(--font-body); transition: color 0.15s; }
        .nav-link:hover, .nav-link.active { color: #fff; }
        .nav-link-hifz { color: var(--color-brand-gold); display: inline-flex; align-items: center; gap: 6px; }
        .nav-link-hifz:hover, .nav-link-hifz.active { color: var(--color-brand-gold-light); }
        @media (max-width: 1379px) { .nav-links { display: none !important; } .nav-mobile-btn { display: flex !important; } .nav-center-pill { display: inline-flex !important; } }
        /* The hero carries this pill on desktop; on smaller screens it moves into the nav bar. */
        @media (max-width: 1379px) { .hero-pill { display: none !important; } }
        /* 20px pill text crowds the logo and menu button on phones */
        @media (max-width: 480px) { .nav-center-pill span { font-size: 15px !important; } }
        @media (max-width: 420px) { .nav-bar-inner { padding: 0 20px !important; } .nav-center-pill { padding: 6px 12px !important; } .nav-center-pill span { font-size: 10.5px !important; letter-spacing: 0.06em !important; } }
        @media (min-width: 1380px) { .nav-mobile-overlay { display: none !important; } }
        @media (max-width: 810px) {
          .nav-bar-inner { height: 69px !important; }
          .nav-mobile-overlay { top: 69px !important; height: calc(100vh - 69px) !important; }
        }
      `}</style>
      <nav style={{
        position: pathname === "/" ? "absolute" : "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: pathname === "/" ? "rgba(0,0,0,0.3)" : "var(--color-nav-bg)",
        backdropFilter: pathname === "/" ? "blur(10px)" : "none",
        borderBottom: pathname === "/" ? "none" : "1px solid rgba(255,255,255,0.06)",
      }}>
        <div className="nav-bar-inner" style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/assets/images/rahmia-logo.png"
              alt="RAHMA Model School"
              width={0}
              height={0}
              sizes="120px"
              style={{ objectFit: "contain", height: 44, width: "auto" }}
              preload
            />
          </Link>

          {/* Fills the empty middle of the bar once the links collapse into the menu */}
          <Link
            href="/"
            className="nav-center-pill"
            style={{
              display: "none",
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              alignItems: "center",
              background: "#0a45c8", // the blue of the school building in the hero photo
              borderRadius: 50,
              padding: "7px 16px",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ fontFamily: "var(--font-body)", fontSize: 20, fontWeight: 700, letterSpacing: "0.1em", color: "#fff", textTransform: "uppercase" }}>
              Home of the RAHMATES
            </span>
          </Link>

          <div className="nav-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {primaryLinks.map((l) =>
              l.children ? (
                <NavDropdown
                  key={l.href}
                  label={l.label}
                  href={l.href}
                  links={l.children}
                  active={l.children.some((c) => c.href === pathname)}
                />
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`nav-link nav-link-underline${l.highlight ? " nav-link-hifz" : ""}${pathname === l.href ? " active" : ""}`}
                >
                  {l.highlight && <span aria-hidden>★</span>}
                  {l.label}
                </Link>
              )
            )}
            <NavDropdown label="All Pages" links={allPagesLinks} align="right" />
          </div>

          <Link
            href="/donate"
            className="nav-cta-btn"
            style={{ display: "flex", alignItems: "center", gap: 10, background: "#09d89a", border: "none", borderRadius: 100, padding: "7px 12px 7px 16px", color: "#000", fontSize: "0.875rem", fontWeight: 600 }}
          >
            Donate now
            <span style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(0,0,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#000" />
              </svg>
            </span>
          </Link>

          <button
            className="nav-mobile-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4, flexDirection: "column", gap: 5, zIndex: 1100, position: "relative" }}
          >
            <span style={{ width: 22, height: 2, background: "#fff", borderRadius: 2, display: "block", transform: open ? "translateY(7px) rotate(45deg)" : "none", transition: "transform 0.2s" }} />
            <span style={{ width: 22, height: 2, background: "#fff", borderRadius: 2, display: "block", opacity: open ? 0 : 1, transition: "opacity 0.2s" }} />
            <span style={{ width: 22, height: 2, background: "#fff", borderRadius: 2, display: "block", transform: open ? "translateY(-7px) rotate(-45deg)" : "none", transition: "transform 0.2s" }} />
          </button>
        </div>

        {/* Full-height overlay menu — matches the real export's mobile/tablet
            nav variant (a 100vh vertical panel), not an inline dropdown. */}
        <div
          className="nav-mobile-overlay"
          style={{
            position: "fixed",
            inset: 0,
            top: 64,
            height: "calc(100vh - 64px)",
            background: "#0d0d0d",
            display: open ? "flex" : "none",
            flexDirection: "column",
            padding: "24px 32px",
            overflowY: "auto",
            zIndex: 1050,
          }}
        >
          {allLinksForOverlay.map((l) =>
            l.href === "/about" ? (
              <div key={l.href} style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    style={{ display: "block", flex: 1, color: pathname === l.href ? "#fff" : "rgba(255,255,255,0.7)", padding: "16px 0", fontSize: "1.05rem" }}
                  >
                    {l.label}
                  </Link>
                  <button
                    type="button"
                    aria-label={aboutOpen ? `Hide ${l.label} pages` : `Show ${l.label} pages`}
                    aria-expanded={aboutOpen}
                    onClick={() => setAboutOpen((v) => !v)}
                    style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 4px 8px 16px", color: "rgba(255,255,255,0.8)", fontSize: "1.5rem", lineHeight: 1, fontFamily: "inherit" }}
                  >
                    <span aria-hidden style={{ display: "inline-block", transform: aboutOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                  </button>
                </div>
                {aboutOpen && (
                  <div style={{ paddingBottom: 8 }}>
                    {aboutLinks.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        style={{ display: "block", color: pathname === c.href ? "#fff" : "rgba(255,255,255,0.6)", padding: "10px 0 10px 20px", fontSize: "0.98rem" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  color: "highlight" in l ? "var(--color-brand-gold)" : "donate" in l ? "var(--color-brand-teal)" : pathname === l.href ? "#fff" : "rgba(255,255,255,0.7)",
                  fontWeight: "highlight" in l || "donate" in l ? 700 : undefined,
                  padding: "16px 0",
                  fontSize: "1.05rem",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {"highlight" in l && "★ "}
                {l.label}
              </Link>
            )
          )}
        </div>
      </nav>
    </>
  );
}
