import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/app/blogs/[slug]/data";
import PricingTabs from "@/components/home/PricingTabs";

export const metadata: Metadata = {
  title: "RAHMA Model School | Inspiring Young Minds for a Bright Future",
  description:
    "Welcome to RAHMA Model School, where quality education, strong moral values, and character development come together to prepare students for a successful future.",
};

/* ── DATA ─────────────────────────────────────────────── */

const stats = [
  { value: "210+", label: "Enrolled Students" },
  { value: "14+", label: "Qualified Teachers" },
  { value: "98%", label: "Parent Satisfaction" },
  { value: "12+", label: "Years of Excellence" },
];

const programs = [
  {
    num: "01",
    title: "Preschool & Junior Section",
    tag: "Play Group to Prep",
    tagColor: "#09d89a",
    desc: "A playful early learning program combining phonics, mathematics, creative arts, and social interaction in a safe, loving environment.",
    bg: "#d7fdcf",
    image: "/assets/images/i2ECgxjZP2t8RjEmI8skh28jRbQ-09736a12.avif",
  },
  {
    num: "02",
    title: "Primary School (Class 1–5)",
    tag: "Grades 1–5",
    tagColor: "#520080",
    desc: "Concept-based learning in core subjects with computer education, character building, and continuous assessments to prepare every student.",
    bg: "#ebe1fd",
    image: "/assets/images/Sfm9js53gBOL3V13gpQtyyxQPf8-334437a4.avif",
  },
  {
    num: "03",
    title: "Middle & High School",
    tag: "Grades 6–12",
    tagColor: "#fcb520",
    desc: "Analytical thinking, board exam preparation in Science & Arts, career guidance, and leadership development for future-ready graduates.",
    bg: "#feeecd",
    image: "/assets/images/yZKDsRUleMx3BoVzta3YgXn9l5A-8b5af1ba.avif",
  },
];

const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 2L9.5 9.5H2l6 4.4-2.3 7L12 16.8l6.3 4.1-2.3-7 6-4.4h-7.5L12 2z" fill="#fcb520" />
      </svg>
    ),
    title: "Play Based Learning",
    desc: "Children learn through interactive play, engaging activities, and exploration, turning every lesson into a joyful adventure.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="#09d89a" />
      </svg>
    ),
    title: "Safe Environment",
    desc: "A secure, friendly, and supportive atmosphere where children feel confident to learn, grow, and express themselves freely.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="8" r="4" fill="#520080" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="#520080" />
      </svg>
    ),
    title: "Expert Teachers",
    desc: "Our dedicated educators guide each child with patience and care, supporting their growth through personalized attention.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M7 3H4a1 1 0 00-1 1v3M17 3h3a1 1 0 011 1v3M3 17v3a1 1 0 001 1h3M17 21h3a1 1 0 001-1v-3" stroke="#fcb520" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 9h6M9 12h6M9 15h4" stroke="#09d89a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Creative Activities",
    desc: "From art and music to storytelling and crafts, children explore their imagination while developing confidence and creativity.",
  },
];

const testimonials = [
  {
    name: "Muhammad Rizwan",
    role: "School Parent",
    text: "We're amazed at how much our son enjoys learning here. He looks forward to going every morning and comes home excited to share what he learned. The teachers are wonderful, making learning feel natural and fun.",
    image: "/assets/images/ZjZ4G0VsZ76Rs48VIacTqvdWFo-ec9c7da0.avif",
  },
  {
    name: "Ayesha Malik",
    role: "Parent of Grade 5 Student",
    text: "Our child has become more confident and curious since joining RAHMA. The teachers are incredibly supportive and truly understand how to engage young minds. We've seen incredible growth in both learning and social skills.",
    image: "/assets/images/Vi1ACTpArCU8a158EXq2wfU1gWY-a2326075.avif",
  },
];

const aboutCards = [
  {
    bg: "#d7fdcf",
    value: "2500+",
    label: "Happy Children Enrolled",
    sublabel: "Growing with us every year",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#09d89a" strokeWidth="2" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="#09d89a" strokeWidth="2" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#09d89a" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    bg: "#ebe1fd",
    value: "85%",
    label: "Learning Progress Rate",
    sublabel: "Measured through continuous assessment",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="#520080" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const TICKER_TEXT = "Where growth begins";

/* ── INLINE ARROW BUTTON ─────────────────────────────── */

function ArrowButton({
  href,
  children,
  variant = "white",
  className = "",
}: {
  href: string;
  children: string;
  variant?: "white" | "purple" | "dark";
  className?: string;
}) {
  const styles: Record<string, { bg: string; text: string; circleBg: string; circleText: string }> = {
    white: { bg: "#fff", text: "#000", circleBg: "#fcb520", circleText: "#000" },
    purple: { bg: "#520080", text: "#fff", circleBg: "#fff", circleText: "#520080" },
    dark: { bg: "#000", text: "#fff", circleBg: "#520080", circleText: "#fff" },
  };
  const s = styles[variant];
  return (
    <Link
      href={href}
      className={`arrow-btn${className ? " " + className : ""}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 20,
        padding: "9px 11px 9px 20px",
        borderRadius: 50,
        background: s.bg,
        color: s.text,
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: 16,
        lineHeight: "24px",
        textDecoration: "none",
      }}
    >
      {children}
      <span
        style={{
          width: 35,
          height: 35,
          borderRadius: "50%",
          background: s.circleBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            fill={s.circleText}
            d="M11.133 15.55a.833.833 0 01-.591-1.383l4.166-4.125-4.166-4.125a.833.833 0 111.183-1.175l4.708 4.708a.833.833 0 010 1.183l-4.708 4.709a.83.83 0 01-.592.208"
          />
          <path fill={s.circleText} d="M15.834 10.833H4.167a.833.833 0 110-1.667h11.667a.833.833 0 010 1.667" />
        </svg>
      </span>
    </Link>
  );
}

/* ── EYEBROW LABEL ───────────────────────────────────── */

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
      <span style={{ color: light ? "rgba(255,255,255,0.5)" : "#888", fontSize: 16, lineHeight: "24px" }}>→</span>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 16,
          fontWeight: 500,
          lineHeight: "24px",
          textTransform: "uppercase",
          letterSpacing: "0.05em",
          color: light ? "#fff" : "#000",
        }}
      >
        {children}
      </span>
    </div>
  );
}

/* ── TICKER STRIP ────────────────────────────────────── */

function TickerStrip() {
  const items = Array.from({ length: 8 }, (_, i) => i);
  return (
    <div
      style={{
        background: "#d7fdcf",
        padding: "20px 0",
        overflow: "hidden",
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "ticker-scroll 20s linear infinite",
        }}
      >
        {[...items, ...items].map((_, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "0 24px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                fontWeight: 500,
                lineHeight: "24px",
                color: "#000",
              }}
            >
              {TICKER_TEXT}
            </span>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden>
              <path
                d="M20 4l2.5 7.5H30l-6.5 4.7 2.5 7.6-6.5-4.3-6.5 4.3 2.5-7.6L9 11.5h7.5L20 4z"
                fill="#09d89a"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── PAGE ────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: none; }
        }
        .hero-h1-anim  { animation: heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
        .hero-sub-anim { animation: heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.30s both; }
        .hero-btn-anim { animation: heroFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.45s both; }
        .about-card { transition: transform 0.2s ease; }
        .about-card:hover { transform: translateY(-4px); }
        .program-card { transition: transform 0.2s ease; }
        .program-card:hover { transform: translateY(-4px); }
        .feature-card { transition: transform 0.2s ease; }
        .feature-card:hover { transform: translateY(-4px); }
        .blog-card { transition: transform 0.2s ease; }
        .blog-card:hover { transform: translateY(-4px); }
      `}</style>

      {/* ── 1. HERO ── */}
      <section
        style={{
          position: "relative",
          height: 900,
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "400px 30px 120px",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <Image
          src="/assets/images/i2ECgxjZP2t8RjEmI8skh28jRbQ-09736a12.avif"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.1)",
            zIndex: 1,
          }}
        />
        {/* Decorative icon */}
        <div
          style={{
            position: "absolute",
            left: 60,
            top: "50%",
            transform: "translateY(-50%) rotate(-15deg)",
            zIndex: 2,
            opacity: 0.18,
          }}
          aria-hidden
        >
          <svg width="341" height="341" viewBox="0 0 100 100" fill="none">
            <path
              d="M50 5l8 24H82L62 44l8 24-20-14-20 14 8-24L18 29h24L50 5z"
              fill="#ffffff"
            />
          </svg>
        </div>
        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            width: "100%",
            maxWidth: 1300,
            margin: "0 auto",
          }}
        >
          <div style={{ maxWidth: 600, display: "flex", flexDirection: "column", gap: 40 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <h1
                className="hero-h1 hero-h1-anim"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  lineHeight: "1.1",
                  color: "#fff",
                  margin: 0,
                }}
              >
                Building bright young minds
              </h1>
              <p
                className="hero-sub-anim"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "rgba(255,255,255,0.85)",
                  margin: 0,
                }}
              >
                A nurturing space where children learn, play, and grow with confidence through a blend of creative activities and guided learning.
              </p>
            </div>
            <div className="hero-btn-anim">
              <ArrowButton href="/contact" variant="white">
                Enroll now
              </ArrowButton>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TICKER ── */}
      <TickerStrip />

      {/* ── 3. ABOUT ── */}
      <section
        style={{
          background: "var(--color-bg-cream)",
          padding: "120px 30px",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
          {/* Title row: label LEFT, heading RIGHT — matches reference layout */}
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            {/* Left spacer with eyebrow label */}
            <div style={{ flex: 1 }}>
              <Eyebrow>About Us</Eyebrow>
            </div>
            {/* Right: heading + icon circles */}
            <div data-animate="" style={{ width: 650, flexShrink: 0 }}>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 44,
                  fontWeight: 600,
                  lineHeight: "52.8px",
                  color: "#000",
                  margin: 0,
                }}
              >
                A warm space for growing minds filled with care, nature, and discovery, where play becomes learning{" "}
                <span style={{ display: "inline-flex", gap: 6, verticalAlign: "middle", marginLeft: 4 }}>
                  <span style={{ display: "inline-flex", width: 40, height: 40, borderRadius: "50%", background: "#09d89a", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="#fff" strokeWidth="2"/></svg>
                  </span>
                  <span style={{ display: "inline-flex", width: 40, height: 40, borderRadius: "50%", background: "#520080", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><circle cx="12" cy="8" r="4" stroke="#fff" strokeWidth="2"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
                  </span>
                  <span style={{ display: "inline-flex", width: 40, height: 40, borderRadius: "50%", background: "#fcb520", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z" fill="#fff"/></svg>
                  </span>
                </span>
              </h2>
            </div>
          </div>

          {/* Stats row */}
          <div data-animate="" data-animate-delay="120" style={{ display: "flex", alignItems: "center" }}>
            {stats.map((stat, i) => (
              <div key={stat.label} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                {i > 0 && (
                  <div
                    style={{ width: 1, height: 86, background: "#d5d5d5", marginRight: 24, flexShrink: 0 }}
                  />
                )}
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 44,
                      fontWeight: 600,
                      lineHeight: "52.8px",
                      color: "#000",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 16,
                      fontWeight: 400,
                      lineHeight: "24px",
                      color: "#575757",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Cards row */}
          <div
            data-animate=""
            data-animate-delay="200"
            style={{
              display: "flex",
              gap: 24,
              alignItems: "stretch",
              height: 390,
            }}
          >
            {/* Small card 1 */}
            {aboutCards.map((card, i) => (
              i === 0 && (
                <div
                  key={card.label}
                  className="about-card"
                  style={{
                    width: 252,
                    flexShrink: 0,
                    background: card.bg,
                    borderRadius: 20,
                    padding: 40,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: 36,
                        fontWeight: 600,
                        lineHeight: "46.8px",
                        color: "#000",
                        marginBottom: 8,
                      }}
                    >
                      {card.value}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 400, color: "#575757" }}>
                      {card.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 400, color: "#575757", opacity: 0.7 }}>
                      {card.sublabel}
                    </div>
                  </div>
                </div>
              )
            ))}

            {/* Center image */}
            <div
              style={{
                flex: 1,
                borderRadius: 20,
                overflow: "hidden",
                minWidth: 200,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/hdvC95xzzw7mdnfgjDPZ1OZh5tY-d2baf33c.avif"
                alt="Students at RAHMA Model School"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Small card 2 */}
            {aboutCards.map((card, i) => (
              i === 1 && (
                <div
                  key={card.label}
                  className="about-card"
                  style={{
                    width: 252,
                    flexShrink: 0,
                    background: card.bg,
                    borderRadius: 20,
                    padding: 40,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: 36,
                        fontWeight: 600,
                        lineHeight: "46.8px",
                        color: "#000",
                        marginBottom: 8,
                      }}
                    >
                      {card.value}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 400, color: "#575757" }}>
                      {card.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 16, fontWeight: 400, color: "#575757", opacity: 0.7 }}>
                      {card.sublabel}
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. BENEFIT / WHY CHOOSE US ── */}
      <section
        style={{
          background: "#fff",
          padding: "120px 30px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative background blob */}
        <div
          style={{
            position: "absolute",
            right: -200,
            top: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "#feeecd",
            opacity: 0.4,
            zIndex: 0,
          }}
          aria-hidden
        />
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 80,
          }}
        >
          {/* Image + Content */}
          <div
            data-animate=""
            style={{
              display: "grid",
              gridTemplateColumns: "580px 1fr",
              gap: 80,
              alignItems: "flex-start",
            }}
            className="benefit-grid"
          >
            {/* Left: image */}
            <div
              style={{
                position: "relative",
                height: 800,
                borderRadius: 20,
                overflow: "hidden",
                minHeight: 400,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/images/srN544ojqUDpLVTA78un36pcUo-cd8b31be.avif"
                alt="RAHMA teachers and students"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            {/* Right: content */}
            <div style={{ paddingTop: 40, display: "flex", flexDirection: "column", gap: 48 }}>
              <div>
                <Eyebrow>Why Choose Us</Eyebrow>
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 56,
                    fontWeight: 700,
                    lineHeight: "64.4px",
                    color: "#000",
                    margin: "0 0 24px",
                  }}
                >
                  What makes us the right choice
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 16,
                    lineHeight: "24px",
                    color: "#575757",
                    margin: 0,
                  }}
                >
                  We nurture a caring and inspiring space where children feel safe, explore freely, build confidence, and grow through joyful, everyday learning experiences.
                </p>
              </div>

              {/* Feature list */}
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {[
                  { title: "Caring space", desc: "A safe and supportive place where children feel valued." },
                  { title: "Fun learning", desc: "Engaging activities where children learn naturally." },
                  { title: "Child-first focus", desc: "Every activity designed around each child's pace and interests." },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    style={{
                      borderTop: "1px solid #d5d5d5",
                      padding: "20px 0",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                      <span
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: 16,
                          fontWeight: 600,
                          color: "#000",
                        }}
                      >
                        {item.title}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 16,
                          lineHeight: "24px",
                          color: "#575757",
                        }}
                      >
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid #d5d5d5" }} />
              </div>
            </div>
          </div>

          {/* Bottom: Guided by care + 2 info cards */}
          <div
            data-animate=""
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 252px 252px",
              gap: 24,
              alignItems: "center",
            }}
            className="benefit-bottom-grid"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 44,
                  fontWeight: 600,
                  lineHeight: "52.8px",
                  color: "#000",
                  margin: 0,
                }}
              >
                Guided by care and{" "}
                <span style={{ position: "relative", display: "inline-block" }}>
                  creativity
                  <svg viewBox="0 0 220 14" aria-hidden style={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 12, overflow: "visible" }} preserveAspectRatio="none">
                    <path d="M 4 10 Q 55 2 110 10 Q 165 18 216 10" fill="none" stroke="#fcb520" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  lineHeight: "24px",
                  color: "#575757",
                  margin: 0,
                  maxWidth: 480,
                }}
              >
                We nurture young minds through thoughtful care and creative learning experiences, helping every child grow with confidence, curiosity, and a strong sense of independence.
              </p>
              <div>
                <ArrowButton href="/contact" variant="purple">
                  Contact us
                </ArrowButton>
              </div>
            </div>

            {[
              {
                bg: "#d7fdcf", iconBg: "#09d89a", value: "Expert Educators", sub: "Trained and passionate teachers dedicated to every child.",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="#fff" strokeWidth="2"/></svg>,
              },
              {
                bg: "#ebe1fd", iconBg: "#520080", value: "Strong Community", sub: "A family-first environment built on trust and support.",
                icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="#fff" strokeWidth="2"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
              },
            ].map((card) => (
              <div
                key={card.value}
                className="about-card"
                style={{
                  background: card.bg,
                  borderRadius: 20,
                  padding: 40,
                  height: 234,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: 50, height: 50, borderRadius: "50%", background: card.iconBg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {card.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: 20, fontWeight: 600, color: "#000", marginBottom: 8 }}>
                    {card.value}
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: "24px", color: "#575757" }}>
                    {card.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. PRESENTATION SECTION ── */}
      <section
        style={{
          position: "relative",
          height: 793,
          display: "flex",
          alignItems: "flex-end",
          padding: "500px 30px 120px",
          overflow: "hidden",
        }}
      >
        {/* Background image with pseudo-parallax */}
        <Image
          src="/assets/images/Sfm9js53gBOL3V13gpQtyyxQPf8-334437a4.avif"
          alt=""
          fill
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.3)",
            zIndex: 1,
          }}
        />
        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1300,
            width: "100%",
            margin: "0 auto",
          }}
        >
          <div data-animate="" style={{ maxWidth: 515, display: "flex", flexDirection: "column", gap: 0 }}>
            <Eyebrow light>Our Campus</Eyebrow>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 56,
                fontWeight: 700,
                lineHeight: "64.4px",
                color: "#fff",
                margin: 0,
              }}
            >
              Discover our learning space
            </h2>
          </div>
        </div>
      </section>

      {/* ── 6. TICKER (2nd) ── */}
      <TickerStrip />

      {/* ── 7. PROGRAMS ── */}
      <section
        style={{
          background: "var(--color-bg-cream)",
          padding: "120px 30px",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 60 }}>
          {/* Header row */}
          <div
            data-animate=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div style={{ maxWidth: 440 }}>
              <Eyebrow>Our Programs</Eyebrow>
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
                Programs for growing minds
              </h2>
            </div>
            <ArrowButton href="/programs" variant="purple">
              View all programs
            </ArrowButton>
          </div>

          {/* Program cards: 2×2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
            className="programs-grid"
          >
            {programs.map((p, i) => (
              <div
                key={p.num}
                data-animate=""
                data-animate-delay={String(i * 100)}
                className="program-card"
                style={{
                  background: p.bg,
                  borderRadius: 20,
                  padding: 10,
                  display: "flex",
                  gap: 0,
                  overflow: "hidden",
                }}
              >
                {/* Content side */}
                <div
                  style={{
                    flex: 1,
                    padding: "30px 30px 30px 30px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {/* Number */}
                    <div
                      style={{
                        width: 35,
                        height: 35,
                        borderRadius: "50%",
                        background: "rgba(0,0,0,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: "var(--font-heading)",
                        fontSize: 14,
                        fontWeight: 700,
                        color: "#000",
                      }}
                    >
                      {p.num}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: 20,
                        fontWeight: 700,
                        lineHeight: "1.3",
                        color: "#000",
                        margin: 0,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 16,
                        lineHeight: "24px",
                        color: "#575757",
                        margin: 0,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                  {/* Age tag + link */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <span
                      style={{
                        display: "inline-block",
                        background: p.tagColor,
                        color: "#fff",
                        fontFamily: "var(--font-body)",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        padding: "4px 12px",
                        borderRadius: 50,
                      }}
                    >
                      {p.tag}
                    </span>
                    <Link
                      href="/programs"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontFamily: "var(--font-body)",
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#000",
                        textDecoration: "none",
                      }}
                    >
                      View details →
                    </Link>
                  </div>
                </div>
                {/* Image side — fills full card height */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt={p.title}
                  style={{
                    width: "45%",
                    flexShrink: 0,
                    objectFit: "cover",
                    display: "block",
                    borderRadius: 14,
                    minHeight: 380,
                    alignSelf: "stretch",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FEATURE ── */}
      <section
        style={{
          background: "#fff",
          padding: "120px 30px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blob */}
        <div
          style={{
            position: "absolute",
            left: -150,
            bottom: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#d7fdcf",
            opacity: 0.35,
            zIndex: 0,
          }}
          aria-hidden
        />
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            display: "grid",
            gridTemplateColumns: "490px 1fr",
            gap: 80,
            alignItems: "flex-start",
          }}
          className="feature-layout"
        >
          {/* Left: heading + button */}
          <div
            data-animate=""
            style={{
              position: "sticky",
              top: 80,
              display: "flex",
              flexDirection: "column",
              gap: 32,
            }}
          >
            <div>
              <Eyebrow>Features</Eyebrow>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 56,
                  fontWeight: 700,
                  lineHeight: "64.4px",
                  color: "#000",
                  margin: "0 0 24px",
                }}
              >
                Little moments that shine
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 16,
                  lineHeight: "24px",
                  color: "#575757",
                  margin: 0,
                }}
              >
                A closer look at what makes our learning environment special — every activity is designed to inspire curiosity, creativity, and confidence in young minds.
              </p>
            </div>
            <div>
              <ArrowButton href="/contact" variant="purple">
                Enroll now
              </ArrowButton>
            </div>
          </div>

          {/* Right: staggered 2-col feature cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
            }}
          >
            {/* Left col: padded down at bottom */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                paddingBottom: 100,
              }}
            >
              {features.slice(0, 2).map((f, i) => (
                <div
                  key={f.title}
                  data-animate=""
                  data-animate-delay={String(i * 120)}
                  className="feature-card"
                  style={{
                    background: "var(--color-bg-cream)",
                    borderRadius: 20,
                    padding: 30,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#000",
                      margin: 0,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 16,
                      lineHeight: "24px",
                      color: "#575757",
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
            {/* Right col: padded down at top */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 20,
                paddingTop: 100,
              }}
            >
              {features.slice(2).map((f, i) => (
                <div
                  key={f.title}
                  data-animate=""
                  data-animate-delay={String(60 + i * 120)}
                  className="feature-card"
                  style={{
                    background: "var(--color-bg-cream)",
                    borderRadius: 20,
                    padding: 30,
                    display: "flex",
                    flexDirection: "column",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 10,
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {f.icon}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#000",
                      margin: 0,
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 16,
                      lineHeight: "24px",
                      color: "#575757",
                      margin: 0,
                    }}
                  >
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. TESTIMONIALS ── */}
      <section
        style={{
          background: "var(--color-bg-cream)",
          padding: "120px 30px 60px",
        }}
      >
        <div style={{ maxWidth: 1300, margin: "0 auto", display: "flex", flexDirection: "column", gap: 48 }}>
          <div data-animate="" style={{ maxWidth: 440 }}>
            <Eyebrow>Testimonials</Eyebrow>
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
              Stories from happy parents
            </h2>
          </div>

          {/* Testimonial cards: overflow scroll */}
          <div
            style={{
              display: "flex",
              gap: 20,
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              paddingBottom: 8,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-animate=""
                data-animate-delay={String(i * 120)}
                style={{
                  flex: "0 0 774px",
                  scrollSnapAlign: "start",
                  borderRadius: 20,
                  background: "#fff",
                  display: "flex",
                  overflow: "hidden",
                }}
              >
                {/* Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.image}
                  alt={t.name}
                  style={{ width: 342, flexShrink: 0, objectFit: "cover", display: "block" }}
                />
                {/* Content */}
                <div
                  style={{
                    flex: 1,
                    padding: "40px 40px 40px 40px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 24,
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {/* Stars */}
                    <div style={{ display: "flex", gap: 4 }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} style={{ color: "#fcb520", fontSize: 20 }}>★</span>
                      ))}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 16,
                        lineHeight: "24px",
                        color: "#575757",
                        margin: 0,
                      }}
                    >
                      &ldquo;{t.text}&rdquo;
                    </p>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 16,
                        fontWeight: 600,
                        color: "#000",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 16,
                        color: "#575757",
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. PRICING ── */}
      <PricingTabs />

      {/* ── 11. BLOG ── */}
      <section
        style={{
          background: "#fff",
          padding: "120px 30px 60px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blob */}
        <div
          style={{
            position: "absolute",
            right: -100,
            top: 50,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#feeecd",
            opacity: 0.3,
            zIndex: 0,
          }}
          aria-hidden
        />
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 48,
          }}
        >
          <div data-animate="" style={{ maxWidth: 600 }}>
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
          </div>

          {/* Blog cards: 3-col */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
            }}
            className="blog-grid"
          >
            {blogPosts.slice(0, 3).map((post, i) => (
              <Link
                key={post.slug}
                href={`/blogs/${post.slug}`}
                data-animate=""
                data-animate-delay={String(i * 100)}
                className="blog-card"
                style={{
                  background: "#fff",
                  borderRadius: 20,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  border: "1px solid #f0f0f0",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    height: 280,
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
                {/* Content */}
                <div
                  style={{
                    padding: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      fontFamily: "var(--font-body)",
                      fontSize: 16,
                      color: "#575757",
                    }}
                  >
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: 20,
                      fontWeight: 700,
                      lineHeight: "1.3",
                      color: "#000",
                      margin: 0,
                    }}
                  >
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. CTA ── */}
      <section
        style={{
          background: "#fff",
          padding: "60px 30px",
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            background: "var(--color-bg-cream)",
            borderRadius: 20,
            padding: "80px 30px",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
            textAlign: "center",
          }}
        >
          {/* Decorative blobs */}
          <div
            style={{ position: "absolute", left: -80, top: -80, width: 280, height: 280, borderRadius: "50%", background: "#feeecd", opacity: 0.6, zIndex: 0 }}
            aria-hidden
          />
          <div
            style={{ position: "absolute", right: -80, bottom: -80, width: 280, height: 280, borderRadius: "50%", background: "#d7fdcf", opacity: 0.6, zIndex: 0 }}
            aria-hidden
          />
          {/* Floating avatar images */}
          <div
            style={{ position: "absolute", left: 80, top: 60, width: 70, height: 70, borderRadius: "50%", overflow: "hidden", border: "3px solid #fff", zIndex: 1 }}
          >
            <Image src="/assets/images/bM5XLgck0nuZBUl800FPnYZLqM-49e6a37c.avif" alt="" fill style={{ objectFit: "cover" }} />
          </div>
          <div
            style={{ position: "absolute", left: 40, bottom: 80, width: 60, height: 60, borderRadius: "50%", overflow: "hidden", border: "3px solid #fff", zIndex: 1 }}
          >
            <Image src="/assets/images/FH7s1VpnmO3OdrrAkXKU3gealE-79d1a684.avif" alt="" fill style={{ objectFit: "cover" }} />
          </div>
          <div
            style={{ position: "absolute", right: 80, top: 60, width: 70, height: 70, borderRadius: "50%", overflow: "hidden", border: "3px solid #fff", zIndex: 1 }}
          >
            <Image src="/assets/images/IIm5NEuXpUdRszfB2rjqlZaHRdg-670fd09e.avif" alt="" fill style={{ objectFit: "cover" }} />
          </div>
          <div
            style={{ position: "absolute", right: 40, bottom: 80, width: 60, height: 60, borderRadius: "50%", overflow: "hidden", border: "3px solid #fff", zIndex: 1 }}
          >
            <Image src="/assets/images/C5awbluBJPV4EhKVcTbPsA5i4-f26ae8c5.avif" alt="" fill style={{ objectFit: "cover" }} />
          </div>

          {/* Content */}
          <div
            data-animate=""
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: 600,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 20,
            }}
          >
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
              Join our learning community today
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                lineHeight: "24px",
                color: "#575757",
                margin: 0,
              }}
            >
              Support your child&rsquo;s growth with a nurturing environment designed for learning, creativity, and confidence.
            </p>
            <ArrowButton href="/contact" variant="purple">
              Enroll now
            </ArrowButton>
          </div>
        </div>
      </section>

      {/* ── RESPONSIVE ── */}
      <style>{`
        @media (max-width: 1379px) {
          .benefit-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .benefit-grid > div:first-child { height: 500px !important; }
          .programs-grid { grid-template-columns: 1fr !important; }
          .feature-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 809px) {
          .benefit-grid { grid-template-columns: 1fr !important; }
          .benefit-grid > div:first-child { height: 400px !important; }
          .benefit-bottom-grid { grid-template-columns: 1fr !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
