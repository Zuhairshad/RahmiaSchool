"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MENU_LINKS } from "./menuLinks";

/**
 * Primary links match the real Framer nav ("Large Menu 01" on index.html):
 * Home, About, Contact, Programs, Faculty — plus an "All Pages" affordance
 * for the rest. The real breakpoint for the horizontal-bar/overlay-menu
 * switch is 1380px (confirmed via @media (min-width:1380px) in the export's
 * inlined CSS), not a single ~900px cutoff.
 */
const aboutLinks = [
  { href: "/about/management", label: "Management" },
  { href: "/about", label: "About Us" },
];

const programLinks = [
  { href: "/programs", label: "Academic Programs" },
  { href: "/programs/hifz-program", label: "Hifz Program" },
];

// Menu entries that open their sub-pages with a + button on phones and tablets.
const overlayGroups: Record<string, { href: string; label: string }[]> = {
  "/about": aboutLinks,
  "/programs": programLinks,
};

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", children: aboutLinks },
  { href: "/contact", label: "Contact" },
  { href: "/programs", label: "Programs", children: programLinks },
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

// Phone/tablet menu has its own order, shared with the footer via menuLinks.ts.
// About and Programs open their sub-pages with the + button (see overlayGroups).
const allLinksForOverlay = MENU_LINKS;

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
  // Which + group is open in the phone menu. One at a time keeps the menu short.
  const [expanded, setExpanded] = useState<string | null>(null);
  const isHome = pathname === "/";
  // On the home page the bar floats see-through over the hero photo, then turns
  // solid once the hero has scrolled away so the links stay readable on the
  // light sections below.
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const update = () => {
      const hero = document.querySelector(".hero-section");
      setPastHero(hero ? hero.getBoundingClientRect().bottom <= 72 : window.scrollY > 40);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  const overHero = isHome && !pastHero;

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
        /* Narrow phones: the pill text grows with the screen, 11px at 320px wide up to
           15px by ~390px, keeping at least 14px clear of the logo and menu button. */
        @media (max-width: 420px) { .nav-bar-inner { padding: 0 20px !important; } .nav-center-pill { padding: 6px 12px !important; } .nav-center-pill span { font-size: clamp(11px, calc(11px + (100vw - 320px) * 0.06), 15px) !important; letter-spacing: 0.06em !important; } }
        @media (min-width: 1380px) { .nav-mobile-overlay { display: none !important; } }
        @media (max-width: 810px) {
          .nav-bar-inner { height: 69px !important; }
          .nav-mobile-overlay { top: 69px !important; }
        }
        /* Phone menu rows share the screen height (flex: 1), between 32px and 52px
           each, so the whole menu fits without scrolling on most phones. It only
           scrolls when even 32px rows don't fit (very short or landscape screens). */
        .nav-overlay-row { flex: 1 1 0; min-height: 32px; max-height: 52px; display: flex; align-items: center; font-size: 0.95rem; line-height: 1.3; }
        .nav-overlay-sub { flex: 1 1 0; min-height: 28px; max-height: 42px; display: flex; align-items: center; padding-left: 18px; font-size: 0.88rem; line-height: 1.3; }
      `}</style>
      <nav style={{
        // Fixed on home so it can overlap the hero; sticky elsewhere so it keeps its place in the flow.
        position: isHome ? "fixed" : "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: overHero ? "rgba(0,0,0,0.3)" : "var(--color-nav-bg)",
        backdropFilter: overHero ? "blur(10px)" : "none",
        borderBottom: overHero ? "1px solid transparent" : "1px solid rgba(255,255,255,0.06)",
        transition: "background 0.25s ease",
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
            // inset (top + bottom: 0) sizes the panel to the visible screen. A 100vh
            // height would also count the strip behind the phone's address bar,
            // pushing the last links out of view.
            position: "fixed",
            inset: 0,
            top: 64,
            background: "#0d0d0d",
            display: open ? "flex" : "none",
            flexDirection: "column",
            padding: "6px 32px 10px",
            overflowY: "auto",
            zIndex: 1050,
          }}
        >
          {allLinksForOverlay.map((l) => {
            const group = overlayGroups[l.href];
            const rowColor = "donate" in l ? "var(--color-brand-teal)" : pathname === l.href ? "#fff" : "rgba(255,255,255,0.7)";
            const rowStyle = { color: rowColor, fontWeight: "donate" in l ? 700 : undefined, borderBottom: "1px solid rgba(255,255,255,0.08)" };
            if (!group) {
              return (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="nav-overlay-row" style={rowStyle}>
                  {l.label}
                </Link>
              );
            }
            const isOpen = expanded === l.href;
            // Rows are returned flat (not wrapped) so the sub-pages share the menu's height too.
            return [
              <div key={l.href} className="nav-overlay-row" style={{ ...rowStyle, justifyContent: "space-between", borderBottom: isOpen ? "none" : rowStyle.borderBottom }}>
                <Link href={l.href} onClick={() => setOpen(false)} style={{ flex: 1, color: "inherit", alignSelf: "stretch", display: "flex", alignItems: "center" }}>
                  {l.label}
                </Link>
                <button
                  type="button"
                  aria-label={isOpen ? `Hide ${l.label} pages` : `Show ${l.label} pages`}
                  aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : l.href)}
                  style={{ background: "none", border: "none", cursor: "pointer", alignSelf: "stretch", padding: "0 4px 0 24px", color: "rgba(255,255,255,0.8)", fontSize: "1.4rem", lineHeight: 1, fontFamily: "inherit" }}
                >
                  <span aria-hidden style={{ display: "inline-block", transform: isOpen ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
                </button>
              </div>,
              ...(isOpen
                ? group.map((c, i) => (
                    <Link
                      key={l.href + c.href}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="nav-overlay-sub"
                      style={{
                        color: pathname === c.href ? "#fff" : "rgba(255,255,255,0.6)",
                        borderBottom: i === group.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                      }}
                    >
                      {c.label}
                    </Link>
                  ))
                : []),
            ];
          })}
        </div>
      </nav>
    </>
  );
}
